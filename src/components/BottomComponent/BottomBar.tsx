import style from "./BottomBar.module.scss";

import { useStores } from "../../useStores";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Tabs } from "../ui/Tabs/Tabs";

export const BottomBar: FC = observer(() => {
  const { todosStore } = useStores();

  const deleteCompletedHandler = () => {
    todosStore.deleteCompletedTodo();
  };

  return (
    <div className={style.bottomBar}>
      <div className={style.incompleteTodos}>
        {todosStore.incompleteTodos.length + " items left"}
      </div>
      <Tabs />
      <div className={style.bottomButton} onClick={deleteCompletedHandler}>
        Clear completed
      </div>
    </div>
  );
});
