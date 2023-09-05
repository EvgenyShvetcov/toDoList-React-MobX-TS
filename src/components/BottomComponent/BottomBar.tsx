import style from "./BottomBar.module.scss";

import { useStores } from "../../useStores";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Tab } from "../../types";

export const BottomBar: FC = observer(() => {
  const { tabsStore, todosStore } = useStores();

  const deleteCompletedHandler = () => {
    todosStore.deleteCompletedTodo();
  };

  const tabsSwitchHandler = (tab: string) => {
    if (tab === "All") {
      tabsStore.switchTab(Tab.All);
    }
    if (tab === "Active") {
      tabsStore.switchTab(Tab.Active);
    }
    if (tab === "Completed") {
      tabsStore.switchTab(Tab.Completed);
    }
  };

  return (
    <div className={style.bottomBar}>
      <div className={style.incompleteTodos}>
        {todosStore.incompleteTodos.length + " items left"}{" "}
      </div>
      <div className={style.tabs}>
        <div
          className={style.bottomButton}
          onClick={() => {
            tabsSwitchHandler("All");
          }}
        >
          All
        </div>
        <div
          className={style.bottomButton}
          onClick={() => {
            tabsSwitchHandler("Active");
          }}
        >
          Active
        </div>
        <div
          className={style.bottomButton}
          onClick={() => {
            tabsSwitchHandler("Completed");
          }}
        >
          Completed
        </div>
      </div>
      <div className={style.bottomButton} onClick={deleteCompletedHandler}>
        Clear completed
      </div>
    </div>
  );
});
