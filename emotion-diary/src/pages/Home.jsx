import Header from "../components/Header";
import Button from '../components/Button';
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
  // 시작시간 -> 해당하는 녀도 월에 1일에 0시0분0초
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  // 해당월의 0일은 이전달의 마직막날
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  return data.filter((item) => item.createdDate >= beginTime && item.createdDate <= endTime)
}

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }

  return(
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />} 
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home;