import { useSearchParams } from "react-router-dom";

const Home = () => {

  // query string으로 전달한 값을 받아옴
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"))
  return(
    <div>Home</div>
  )
}

export default Home;