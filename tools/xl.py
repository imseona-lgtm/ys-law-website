import zipfile,re,sys,xml.etree.ElementTree as ET
ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
def read(path):
    z=zipfile.ZipFile(path)
    ss=[]
    if 'xl/sharedStrings.xml' in z.namelist():
        for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si',ns):
            ss.append(''.join(t.text or '' for t in si.iter('{%s}t'%ns['m'])))
    wb=ET.fromstring(z.read('xl/workbook.xml'))
    rels={r.get('Id'):r.get('Target') for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
    out={}
    for sh in wb.find('m:sheets',ns):
        t=rels[sh.get('{%s}id'%ns['r'])]; t=t.lstrip('/'); t=t if t.startswith('xl/') else 'xl/'+t
        rows=[]
        for row in ET.fromstring(z.read(t)).iter('{%s}row'%ns['m']):
            r={}
            for c in row.findall('m:c',ns):
                col=re.match(r'[A-Z]+',c.get('r')).group()
                v=c.find('m:v',ns)
                if c.get('t')=='s' and v is not None: val=ss[int(v.text)]
                elif c.get('t')=='inlineStr': val=''.join(x.text or '' for x in c.iter('{%s}t'%ns['m']))
                else: val=v.text if v is not None else ''
                r[col]=val
            rows.append((int(row.get('r')),r))
        out[sh.get('name')]=rows
    return out
if __name__=='__main__':
    d=read(sys.argv[1])
    for n,rows in d.items(): print('SHEET',n,len(rows))
