"""페이지별 <title>, 검색 설명(description), 공유(OG) 태그를 넣는다. build_cases.py 실행 뒤에 실행."""
import re,glob,html
E=lambda s:html.escape(s,quote=True)
DOMAIN='https://kyslaw.com'
BRAND='변호사 김용석 법률사무소'
PAGES={
 'index.html':('변호사 김용석 법률사무소 | 서울 서초 법률 상담','서울 서초구 교대역 인근 변호사 김용석 법률사무소입니다. 민사·형사·이혼·상속·행정 소송 상담과 성공사례, 오시는 길을 안내합니다.'),
 'about.html':('김용석 변호사 소개 | '+BRAND,'고려대학교 법학과 졸업, 사법시험 제51회·사법연수원 제41기 수료. 2013년부터 변호사 김용석 법률사무소 대표변호사. 의뢰인의 고민에는 진심으로, 해결책에는 전문성으로 답합니다.'),
 'practice.html':('업무영역 소개 | '+BRAND,'민사소송, 형사소송, 이혼소송, 상속 관련 소송, 행정소송 및 행정심판 등 변호사 김용석 법률사무소의 업무영역을 소개합니다.'),
 'practice-civil.html':('민사소송 | '+BRAND,'계약, 손해배상, 부동산 등 다양한 민사 분쟁에서 의뢰인의 권리와 이익을 보호합니다. 소 제기부터 변론, 항소까지 민사소송 절차를 안내합니다.'),
 'practice-criminal.html':('형사소송 | '+BRAND,'수사부터 재판까지 체계적인 법률 대응으로 의뢰인의 권리를 보호합니다. 피의자·피고소인과 고소인의 형사소송 절차, 사건 유형별 대응방법을 안내합니다.'),
 'practice-divorce.html':('이혼소송 | '+BRAND,'이혼과 재산분할, 양육권 등 가족관계의 법률 문제에 세심하게 대응합니다. 협의상 이혼과 재판상 이혼 절차를 안내합니다.'),
 'practice-inheritance.html':('상속관련 소송 | '+BRAND,'상속재산 분할과 유류분 등 복잡한 상속 분쟁의 합리적인 해결을 모색합니다. 상속회복청구, 상속재산분할청구, 유류분반환청구 소송을 안내합니다.'),
 'practice-administrative.html':('행정소송 및 행정심판 | '+BRAND,'부당하거나 위법한 행정처분에 대응하여 의뢰인의 정당한 권익을 보호합니다. 행정처분·조세처분·근로관계(부당해고) 관련 소송을 안내합니다.'),
 'cases.html':('성공사례 | '+BRAND,'김용석 변호사가 직접 해결한 민사·형사·이혼·상속·행정 사건의 성공사례를 분야별로 확인하세요.'),
 'contact.html':('상담 및 방문 | '+BRAND,'변호사 김용석 법률사무소 상담 문의와 오시는 길. 전화 02-595-0639, 이메일 kys10639@gmail.com, 서울 서초구 반포대로 30길 81, 11층(서초동, 웅진타워).'),
}
def trim(t,n=150):
    t=re.sub(r'\s+',' ',t).strip()
    if len(t)<=n: return t
    cut=t[:n]
    m=max(cut.rfind('. '),cut.rfind('다. '))
    return (cut[:m+1] if m>60 else cut.rstrip(' ,')+'…')
def apply(f,title,desc,image):
    s=open(f,encoding='utf-8').read()
    s=re.sub(r'\n?<meta name="description"[^>]*>|\n?<link rel="canonical"[^>]*>|\n?<meta property="og:[^>]*>|\n?<meta name="twitter:[^>]*>','',s)
    s=re.sub(r'<title>.*?</title>',f'<title>{E(title)}</title>',s,count=1,flags=re.S)
    url=DOMAIN+('/' if f=='index.html' else '/'+f)
    meta=(f'\n<meta name="description" content="{E(desc)}">\n<link rel="canonical" href="{url}">'
          f'\n<meta property="og:type" content="website">\n<meta property="og:site_name" content="{BRAND}">'
          f'\n<meta property="og:title" content="{E(title)}">\n<meta property="og:description" content="{E(desc)}">'
          f'\n<meta property="og:url" content="{url}">\n<meta property="og:image" content="{DOMAIN}/{image}">'
          '\n<meta name="twitter:card" content="summary_large_image">')
    s=s.replace('</title>','</title>'+meta,1)
    open(f,'w',encoding='utf-8').write(s)
for f,(t,d) in PAGES.items(): apply(f,t,d,'assets/images/hero-graphic.png')
n=0
for f in sorted(glob.glob('case-*.html')):
    s=open(f,encoding='utf-8').read()
    h1=re.search(r'<h1 class="detail-title">(.*?)</h1>',s,re.S).group(1)
    summ=re.search(r'<p class="detail-summary">(.*?)</p>',s,re.S).group(1)
    img=re.search(r'class="detail-image" src="([^"]+)"',s).group(1)
    apply(f,f'{html.unescape(h1)} | {BRAND}',trim(html.unescape(summ)),img); n+=1
print('pages',len(PAGES),'cases',n)
