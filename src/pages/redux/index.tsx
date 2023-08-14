import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/store';
import { decrement, increment } from "@/store/counter";

const Redux = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.number);
  const clickIncrement = () => {
    dispatch(increment(10));
  };

  const clickDecrement = () => {
    dispatch(decrement(10));
  };

  return (
    <div>
      <button onClick={clickIncrement}>Increment</button>
      <button onClick={clickDecrement}>Decrement</button>
      {counterValue}
    </div>
  )
}

export default Redux