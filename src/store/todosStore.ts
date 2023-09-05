import { makeAutoObservable } from "mobx";
import { Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

export class TodosStore {
  public todos: Todo[] = [
    { id: uuidv4(), title: "todo 1", completed: true },
    { id: uuidv4(), title: "todo 2", completed: false },
    { id: uuidv4(), title: "todo 3", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  public createTodo(title: string) {
    this.todos.push({ title: title, id: uuidv4(), completed: false });
  }
  public switchTodo = (id: string) => {
    const updatedTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.todos = updatedTodos;
  };
  public deleteTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  public deleteCompletedTodo = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }
  get incompleteTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}
