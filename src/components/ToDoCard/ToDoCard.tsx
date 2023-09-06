import { FC } from "react";
import { Todo } from "../../types";
import { useStores } from "../../useStores";
import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import style from "./ToDoCard.module.scss";
import { RoundCheckbox } from "../ui/Checkbox/RoundCheckbox";

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
        <RoundCheckbox
          checked={completed}
          onChange={switchhandler}
          data-testid="RoundCheckbox"
        />
        <div className={completed ? style.titleCompleted : style.title}>
          {title}
        </div>
      </div>
      <Button onClick={deletehandler}>Удалить</Button>
    </div>
  );
});
