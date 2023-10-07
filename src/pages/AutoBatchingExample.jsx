import { useState, useRef } from 'react';

function AutoBatchingExample() {
  console.log('Functional component executed');
  const reRenderCount = useRef(0);
  const [count, setCount] = useState(0);

  reRenderCount.current++;

  const increaseCounterHandler = () => {
    setCount((currCont) => currCont + 1);
    setCount((currCont) => currCont + 2);
  };
  const increaseCounterAsyncHandler = () => {
    setTimeout(() => {
      setCount((currCont) => currCont + 1);
      setCount((currCont) => currCont + 2);
    }, 100);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <p>ReRender counter: {reRenderCount.current}</p>
      <button onClick={increaseCounterHandler}>Increase</button>
      <button onClick={increaseCounterAsyncHandler}>
        Increase (with timeout)
      </button>
    </div>
  );
}

export default AutoBatchingExample;
