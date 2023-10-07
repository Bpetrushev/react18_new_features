let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1', value: 'Some text1' }];
let listeners = [];

export const todosStore = {
  addTodo(value) {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId, value }];
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
