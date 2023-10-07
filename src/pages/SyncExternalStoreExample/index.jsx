import { useRef, useSyncExternalStore } from 'react';
import { todosStore } from './todoStore';

const SyncExternalStoreExample = () => {
  const inputRef = useRef();

  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  const handleBtnClick = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      inputRef.current.value = '';
      todosStore.addTodo(inputValue);
    }
  };

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleBtnClick}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - {todo.value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SyncExternalStoreExample;
