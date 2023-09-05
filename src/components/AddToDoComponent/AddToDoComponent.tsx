import React, { FC, useState } from "react";

import { useStores } from "../../useStores";
import { Button, Input } from "@mui/material";
import { observer } from "mobx-react-lite";
import style from "./AddToDoComponent.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const AddToDoComponent: FC = observer(() => {
  const { todosStore } = useStores();
  const [toDo, setTodo] = useState<string>("");

  const addhandler = () => {
    todosStore.createTodo(toDo);
    setTodo("");
  };

  const addhandlerOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      todosStore.createTodo(toDo);
      setTodo("");
    }
  };

  return (
    <div className={style.AddComponent}>
      <KeyboardArrowDownIcon className={style.icon} />
      <Input
        className={toDo ? style.inputTodoInUse : style.inputTodo}
        placeholder="What needs to be done?"
        disableUnderline
        value={toDo}
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
        onKeyDown={addhandlerOnEnter}
      />
      <Button onClick={addhandler}>Добавить</Button>
    </div>
  );
});
