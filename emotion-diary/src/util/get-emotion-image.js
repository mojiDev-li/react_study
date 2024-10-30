import emotion1 from './../assets/emotion1.png'
import emotion2 from './../assets/emotion2.png'
import emotion3 from './../assets/emotion3.png'
import emotion4 from './../assets/emotion4.png'
import emotion5 from './../assets/emotion5.png'
// 이미지 불러오는 법
// vite의 이미지 최적화 제공 때문에 assets폴더 아래에 이미지를 넣은거임
// 만약 이미지 파일이 public 아래 있다면 url로 불러올 수 있음
// 근데 이렇게 하면 이미지 최적화가 일어나지 않음
// 이미지와 같은 데이터를 캐싱하기 위해 사용하는 Data uri 형태로 저장되어 새로고침 해도 다시 불러오지 않도록 하는 방법이 바로 assets 폴더 아래 이미지를 넣는 것임

export function getEmotionImage(emotionId){
  switch(emotionId){
    case 1: return emotion1;
    case 2: return emotion2;
    case 3: return emotion3;
    case 4: return emotion4;
    case 5: return emotion5;
    default: return null;
  }
}
