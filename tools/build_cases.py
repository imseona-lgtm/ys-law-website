"""성공사례 45건 엑셀 -> js/cases-data.js + case-XXX.html 상세 페이지 생성.
법원·최종 결과는 엑셀에 별도 열이 없어 아래 META에 직접 정리(원문에 법원이 명시된 건만 기재)."""
import sys,glob,os,re,html,json
sys.path.insert(0,os.environ.get('XL_DIR','.'))
from xl import read
E=html.escape
SRC=glob.glob(os.path.expanduser('~/Downloads/YS_%EC*%EC%83%81%EB%8B%A8%EC%9A%94%EC%95%BD*.xlsx'))[0]
# id: (법원·기관(원문에 명시된 경우만), 최종 결과(제목 기준))
META={
1:('','승소 판결'),2:('','승소'),3:('','가처분 신청 인용'),4:('','상속포기 신고 수리'),5:('','승소'),6:('','승소'),
7:('서울중앙지방법원','승소'),8:('','승소'),9:('서울중앙지방검찰청','기소'),10:('','승소'),11:('','무죄'),
12:('서울중앙지방법원','승소'),14:('의정부지방법원','항소심 감형'),15:('서울중앙지방법원','무죄'),
16:('수원지방법원 안양지원','승소'),17:('','방어 승소'),18:('','무죄'),19:('','집행유예'),20:('','승소'),21:('','무죄'),
22:('의정부지방법원','승소'),23:('','승소'),24:('서울행정법원','승소'),25:('서울중앙지방법원','방어 승소'),26:('','승소'),
27:('','인용'),28:('','승소'),29:('','승소'),30:('서울서부지방검찰청','불기소처분'),31:('','무죄'),
32:('서울중앙지방법원 (항소심)','승소'),33:('','무혐의'),34:('서울동부지방법원','전부 승소'),35:('','일부 무죄 및 집행유예'),
36:('','승소'),37:('','승소'),38:('서울고등법원','추징 선고유예'),39:('','승소'),40:('','승소'),41:('','방어 승소'),
42:('서울동부지방법원','기소'),43:('서울동부지방법원','즉시항고 승소'),44:('','승소'),45:('','방어 승소'),46:('','승소')}
ONLY_PRIMARY={34}  # 사건 분류에 대표 태그만 표시할 사례 ID
TITLE_FIX={'무고 피고소 사건 불기서처분':'무고 피고소 사건 불기소처분','컴퓨터등사용사기죄 무죄':'컴퓨터 등 사용사기죄 무죄'}
KEY={'고소·수사':'arrest','금전피해':'money','부동산·임대차':'realestate','이혼·상속':'family','계약·사업':'contract','명예·사생활':'defamation','행정·기타':'admin'}
LABEL={v:k.replace('·','・') for k,v in KEY.items()}  # 화면 표기는 가운뎃점 ・
def norm(r):
    # 새 엑셀 열: I=상세 상단 요약, J=사건 개요, K=핵심 쟁점, L=전략, M=결과, N=인사이트
    m={'A':'A','C':'C','E':'E','F':'F','G':'G','H':'H','I':'S','J':'I','K':'J','L':'K','M':'L','N':'M'}
    o={d:r.get(k,'').replace('컴퓨터등사용사기','컴퓨터 등 사용사기') for k,d in m.items()}
    o['S']=re.sub(r'\s*※[^\n]*$','',o['S']).strip()  # 편집용 메모(※ ... 보완 필요) 제외
    return o
rows=[norm(r) for i,r in read(SRC)['홈페이지용 45건'][1:]]
cases=[]
for n,r in enumerate(rows,1):  # 이미지: assets/images/imseona_NN.png = 엑셀 NN번째 사례

    pk=KEY[r['E']]; tags=[pk]+[KEY[t.strip()] for t in r.get('F','').split(',') if t.strip()]
    title=TITLE_FIX.get(r['G'].strip(),r['G'].strip())
    img=f'assets/images/cases/preview-{n:02d}.jpg'
    cid=int(r['A']); court,result=META[cid]
    url='case-debt-seizure.html' if title=='채권압류 및 추심명령 즉시항고 승소' else f'case-{cid:03d}.html'
    cases.append(dict(id=cid,date=r['C'],category=pk,tags=tags,title=title,desc=r['H'].strip(),image=img,url=url,
        S=r['S'],I=r['I'].strip(),J=r['J'].strip(),K=r['K'].strip(),L=r['L'].strip(),M=r['M'].strip(),court=court,result=result))
cases.sort(key=lambda c:(-int(c['date'].replace('-','')),c['id']))
pub=[{k:c[k] for k in ('category','tags','title','desc','image','url')} for c in cases]
open('js/cases-data.js','w',encoding='utf-8').write('const CASES = '+json.dumps(pub,ensure_ascii=False,indent=2)+';\n')
tpl=open('case-debt-seizure.html',encoding='utf-8').read()  # 머리글/바닥글만 사용
head=tpl[:tpl.index('<main>')+len('<main>')]
tail=tpl[tpl.index('</main>'):]
tail=re.sub(r'<script>.*?</script>\s*','',tail,flags=re.S)
def para(t): return '<br><br>'.join(E(p.strip()) for p in t.split('\n') if p.strip())
USER_ICON='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.8a5.8 5.8 0 0 0-3.4 10.5c.7.6 1.1 1.3 1.1 2.1v.4h4.6v-.4c0-.8.4-1.5 1.1-2.1A5.8 5.8 0 0 0 12 3.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 19.3h4M10.8 21h2.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
CHECK='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12.3L10.8 14.6L15.5 9.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
for c in cases:
    I,J=c['I'],c['J']
    if not J: blocks=[('사건 개요',I)]
    elif I in J: blocks=[('이 사건의 쟁점',J)]
    elif J in I: blocks=[('이 사건의 쟁점',I)]
    else: blocks=[('사건 개요',I),('핵심 쟁점',J)]
    info=''.join(f'<h3 class="detail-info-heading">{h}</h3>\n          <p class="detail-info-text">{para(t)}</p>\n          ' for h,t in blocks)
    kind=LABEL[c['category']] if c['id'] in ONLY_PRIMARY else ' ・ '.join(LABEL[t] for t in c['tags'])
    court=E(c['court']) if c['court'] else '—'
    grid=''.join(f'<div class="detail-info-item"><span class="detail-info-label">{l}</span><p class="detail-info-value">{v}</p></div>' for l,v in [('사건 분류',kind),('법원·기관',court),('최종 결과',E(c['result']))])
    strat=f'''<div class="detail-block"><span class="detail-block-icon" aria-hidden="true">{USER_ICON}</span><div class="detail-block-body"><p class="detail-block-label">본 변호사의 전략 <strong>변호사 김용석</strong></p><p class="detail-block-text">{para(c["K"])}</p></div></div>''' if c['K'] else ''
    res=f'''<div class="detail-block detail-block-result"><span class="detail-block-icon" aria-hidden="true">{CHECK}</span><div class="detail-block-body"><p class="detail-block-label">결과 및 판단</p><p class="detail-block-text">{para(c["L"])}</p></div></div>''' if c['L'] else ''
    ins=f'''<div class="insight-card"><p class="insight-label">법률 인사이트</p><p class="insight-text">{para(c["M"])}</p></div>''' if c['M'] else ''
    same=[x for x in cases if x is not c and x['category']==c['category']]
    rest=[x for x in cases if x is not c and x not in same and set(x['tags'])&set(c['tags'])]
    rel=(same+rest+[x for x in cases if x is not c and x not in same+rest])[:3]
    relh=''.join(f'<a href="{x["url"]}" class="related-card"><img class="related-thumb" src="{x["image"]}" alt=""><div class="related-body"><span class="case-tag-pill">{LABEL[x["category"]]}</span><h4 class="related-case-title">{E(x["title"])}</h4></div></a>' for x in rel)
    body=f'''
  <section class="case-detail">
    <div class="container">
      <a href="cases.html#{c["category"]}" class="detail-back"><span aria-hidden="true">&larr;</span> 성공사례 목록</a>
      <div class="detail-card">
      <h1 class="detail-title">{E(c["title"])}</h1>
      <p class="detail-summary">{E(c["S"])}</p>
      <div class="detail-top">
        <img class="detail-image" src="{c["image"]}" alt="">
        <div class="detail-info">
          <div class="detail-info-grid">{grid}</div>
          {info.rstrip()}
        </div>
      </div>
      {strat}
      {res}
      {ins}
      </div>
      <div class="related-cases">
        <h3 class="related-title">관련 사건</h3>
        <div class="related-grid">{relh}</div>
      </div>
    </div>
  </section>
'''
    h=head.replace('채권압류 및 추심명령 즉시항고 승소',E(c['title']),1)
    open(c['url'],'w',encoding='utf-8').write(h+body+tail)
print('built',len(cases))
