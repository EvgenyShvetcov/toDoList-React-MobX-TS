import style from "./Board.module.scss";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import { useStores } from "../../useStores";
import { observer } from "mobx-react-lite";
import { AddToDoComponent } from "../AddToDoComponent/AddToDoComponent";
import { BottomBar } from "../BottomComponent/BottomBar";
import { useEffect, useState } from "react";
import { Tab, Todo } from "../../types";

export const Board = observer(() => {
  const { todosStore, tabsStore } = useStores();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (tabsStore.tab === Tab.All) {
      setTodos(todosStore.todos);
    }
    if (tabsStore.tab === Tab.Active) {
      setTodos(todosStore.incompleteTodos);
    }
    if (tabsStore.tab === Tab.Completed) {
      setTodos(todosStore.completedTodos);
    }
  }, [
    tabsStore.tab,
    todosStore.todos,
    todosStore.incompleteTodos,
    todosStore.completedTodos,
  ]);

  return (
    <div className={style.board}>
      <AddToDoComponent />
      {todos.map((el) => (
        <ToDoCard {...el} key={el.id} />
      ))}
      <BottomBar />
    </div>
  );
});
