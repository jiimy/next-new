import { countState, doubledCountState } from '@/atom/Counter';
import { useRecoilState, useRecoilValue } from 'recoil';

const Recoil = () => {
  const doubledCount = useRecoilValue(doubledCountState); // 출력
  const [count, setCount] = useRecoilState(countState); // 입력

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Recoil