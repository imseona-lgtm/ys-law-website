"""assets/images/imseona_NN.png -> assets/images/cases/preview-NN.jpg (900px) 변환. 이미지를 교체한 뒤 실행."""
from PIL import Image
import glob,os
for src in sorted(glob.glob('assets/images/imseona_*.png')):
    n=os.path.basename(src)[8:10]
    Image.open(src).convert('RGB').resize((900,900),Image.LANCZOS).save(f'assets/images/cases/preview-{n}.jpg',quality=82,optimize=True)
print('converted',len(glob.glob('assets/images/imseona_*.png')))
