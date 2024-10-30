import { useEffect } from "react";

const Even = () => {

  // 언마운트
  // useEffect의 콜백함수를 정리함수라고 부르는데, useEffect가 끝날때 실행이되는데, 
  // 지금은 마운트 될 때 실행이되고 언마운트 될 때 종료 되기 떄문에
  // 함수를 반환하면서 언마운트시에 제어가능함.
  useEffect(() => {
    return () => {
      console.log('언마운트')
    };
  }, []);

  return (
    <div>짝수</div>
  )
}

export default Even;