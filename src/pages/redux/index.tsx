import { countState, doubledCountState } from '@/atom/Counter';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store';
import Button from '@/components/button/Button';

const Redux = () => {
  // const { value: count } = useSelector((state) => state.counter);
  const counterValue = useSelector((state: RootState) => state.counter.number);
  const increment = () => {
    // setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      {/* <p>Count: {count}</p> */}
      {/* <p>Doubled Count: {doubledCount}</p> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Button size='small' theme='blue'>테스트</Button>
    </div>
  )
}

export default Redux