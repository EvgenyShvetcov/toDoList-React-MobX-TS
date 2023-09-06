import { TodosStore } from "./todosStore";

describe("TodoStore", () => {
  it("creates new todos", () => {
    const store = new TodosStore();
    store.createTodo("todo 4");
    store.createTodo("todo 5");
    expect(store.todos.length).toBe(5);
    expect(store.todos[3].title).toBe("todo 4");
    expect(store.todos[4].title).toBe("todo 5");
  });
  it("deletes todos", () => {
    const store = new TodosStore();
    store.deleteTodo(store.todos[0].id);
    expect(store.todos.length).toBe(2);
    expect(store.todos[0].title).toBe("todo 2");
  });
  it("switches completed pole of todos", () => {
    const store = new TodosStore();
    expect(store.todos[0].completed).toBe(true);
    store.switchTodo(store.todos[0].id);
    expect(store.todos[0].completed).toBe(false);
  });
  it("deletes completed todos", () => {
    const store = new TodosStore();
    store.deleteCompletedTodo();
    expect(store.todos.length).toBe(2);
  });
  it("gets all completed todos", () => {
    const store = new TodosStore();
    expect(store.completedTodos.length).toBe(1);
  });
  it("gets all incomplete todos", () => {
    const store = new TodosStore();
    expect(store.incompleteTodos.length).toBe(2);
  });
});
