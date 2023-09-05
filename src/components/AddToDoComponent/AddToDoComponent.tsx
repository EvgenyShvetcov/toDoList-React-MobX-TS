import { FC, useState } from "react";

import { useStores } from "../../useStores";
import { Button, Input } from "@mui/material";
import { observer } from "mobx-react-lite";
import style from "./AddToDoComponent.module.scss";

export const AddToDoComponent: FC = observer(() => {
  const { todosStore } = useStores();
  const [toDo, setTodo] = useState<string>("");

  const addhandler = () => {
    todosStore.createTodo(toDo);
    setTodo("");
  };

  return (
    <div className={style.AddComponent}>
      <Input value={toDo} onChange={(e) => setTodo(e.target.value)} />
      <Button onClick={addhandler}>Добавить</Button>
    </div>
  );
});
