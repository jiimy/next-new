import { countState, doubledCountState } from '@/atom/Counter';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
  // const { value: count } = useSelector((state) => state.counter);
  const increment = () => {
    // setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // if (count > 0) {
    //   setCount((prevCount) => prevCount - 1);
    // }
  };

  return (
    <div>
      {/* <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  )
}

export default Redux