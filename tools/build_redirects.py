"""기존 사이트(Wix) 글 주소 /post/<slug> -> 새 사례 페이지로 이동하는 안내 페이지 생성 (post/<slug>/index.html)."""
import sys,glob,os,re,urllib.parse,html,unicodedata
sys.path.insert(0,os.environ.get('XL_DIR','.'))
from xl import read
E=html.escape
SRC=glob.glob(os.path.expanduser('~/Downloads/YS_%EC*%EC%83%81%EB%8B%A8%EC%9A%94%EC%95%BD*.xlsx'))[0]
DOMAIN='https://kyslaw.com'
rows=[r for i,r in read(SRC)['홈페이지용 45건'][1:]]
TITLE_FIX={'무고 피고소 사건 불기서처분':'무고 피고소 사건 불기소처분','컴퓨터등사용사기죄 무죄':'컴퓨터 등 사용사기죄 무죄'}
made=0;seen=set()
for r in rows:
    cid=int(r['A'])
    title=TITLE_FIX.get(r['G'].strip(),r['G'].strip())
    new='case-debt-seizure.html' if title=='채권압류 및 추심명령 즉시항고 승소' else f'case-{cid:03d}.html'
    slug=unicodedata.normalize('NFC',urllib.parse.unquote(urllib.parse.urlparse(r['R']).path.split('/post/',1)[1]).strip('/'))
    assert slug not in seen,slug; seen.add(slug)
    d=os.path.join('post',slug); os.makedirs(d,exist_ok=True)
    page=f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{E(title)} | 변호사 김용석 법률사무소</title>
<link rel="canonical" href="{DOMAIN}/{new}">
<meta http-equiv="refresh" content="0; url=../../{new}">
<script>location.replace('../../{new}');</script>
<link rel="stylesheet" href="../../css/style.css">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
<body>
<main style="padding:80px 24px;text-align:center;font-family:sans-serif">
  <p>페이지가 이동되었습니다. 자동으로 이동하지 않으면 아래 링크를 눌러 주세요.</p>
  <p style="margin-top:16px"><a href="../../{new}">{E(title)} 보러가기 &rarr;</a></p>
</main>
</body>
</html>
'''
    open(os.path.join(d,'index.html'),'w',encoding='utf-8').write(page); made+=1
print('redirects',made)

# 기존 Wix 사이트의 일반 페이지 주소 -> 새 페이지 (구글 검색에 노출된 /firm 등)
import urllib.parse as _u
EXTRA={
 'firm':('about.html','김용석 변호사 소개'),
 'blog':('cases.html','성공사례'),
 'blog/categories/seonggongsarye':('cases.html','성공사례'),
 'blank':('index.html','변호사 김용석 법률사무소'),
 'blank-1':('index.html','변호사 김용석 법률사무소'),
 'blank-2':('index.html','변호사 김용석 법률사무소'),
 'blank-3':('index.html','변호사 김용석 법률사무소'),
 'blank-4':('index.html','변호사 김용석 법률사무소'),
 'blank-5':('index.html','변호사 김용석 법률사무소'),
 'blank-6':('index.html','변호사 김용석 법률사무소'),
 'post/2017/11/27/'+_u.unquote('%EC%9D%B4%ED%98%BC%EC%97%90-%EB%94%B0%EB%A5%B8-%EC%96%91%EC%9C%A1%EB%B9%84%EB%8A%94-%EB%88%84%EA%B0%80-%EC%96%BC%EB%A7%88%EB%82%98-%EB%82%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80'):('cases.html','성공사례'),
}
for path,(new,title) in EXTRA.items():
    path=unicodedata.normalize('NFC',path)
    d=path; os.makedirs(d,exist_ok=True)
    up='../'*(path.count('/')+1)
    page=f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{E(title)} | 변호사 김용석 법률사무소</title>
<link rel="canonical" href="{DOMAIN}/{new}">
<meta http-equiv="refresh" content="0; url={up}{new}">
<script>location.replace('{up}{new}');</script>
<link rel="stylesheet" href="{up}css/style.css">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
<body>
<main style="padding:80px 24px;text-align:center;font-family:sans-serif">
  <p>페이지가 이동되었습니다. 자동으로 이동하지 않으면 아래 링크를 눌러 주세요.</p>
  <p style="margin-top:16px"><a href="{up}{new}">{E(title)} 보러가기 &rarr;</a></p>
</main>
</body>
</html>
'''
    open(os.path.join(d,'index.html'),'w',encoding='utf-8').write(page)
print('extra redirects',len(EXTRA))

# 사이트맵 / robots.txt
pages=['index.html','about.html','practice.html','practice-civil.html','practice-criminal.html','practice-divorce.html','practice-inheritance.html','practice-administrative.html','cases.html','contact.html']+sorted(glob.glob('case-*.html'))
def url(p): return DOMAIN+'/' if p=='index.html' else f'{DOMAIN}/{p}'
open('sitemap.xml','w',encoding='utf-8').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{url(p)}</loc></url>\n' for p in pages)+'</urlset>\n')
open('robots.txt','w',encoding='utf-8').write(f'User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n')
print('sitemap',len(pages))
