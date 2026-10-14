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
