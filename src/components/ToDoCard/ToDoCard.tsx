import React, { FC } from "react";
import { Todo } from "../../types";
import { useStores } from "../../useStores";
import { Checkbox, Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import style from "./ToDoCard.module.scss";

export const ToDoCard: FC<Todo> = observer(({ title, completed, id }) => {
  const { todosStore } = useStores();

  const deletehandler = () => {
    todosStore.deleteTodo(id);
  };
  const switchhandler = () => {
    todosStore.switchTodo(id);
  };

  return (
    <div className={style.card}>
      <div className={style.leftSide}>
        <Checkbox checked={completed} onChange={switchhandler} />
        <div>{title}</div>
      </div>
      <Button onClick={deletehandler}>Удалить</Button>
    </div>
  );
});
