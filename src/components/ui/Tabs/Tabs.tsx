import style from "./Tabs.module.scss";

import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useStores } from "../../../useStores";
import { Tab } from "../../../types";

export const Tabs: FC = observer(() => {
  const { tabsStore } = useStores();

  const tabsSwitchHandler = (tab: Tab) => {
    if (tab === Tab.All) {
      tabsStore.switchTab(Tab.All);
    }
    if (tab === Tab.Active) {
      tabsStore.switchTab(Tab.Active);
    }
    if (tab === Tab.Completed) {
      tabsStore.switchTab(Tab.Completed);
    }
  };

  return (
    <div>
      <div className={style.tabs}>
        <div
          className={tabsStore.tab === Tab.All ? style.tabActive : style.tab}
          onClick={() => {
            tabsSwitchHandler(Tab.All);
          }}
        >
          {Tab.All}
        </div>
        <div
          className={tabsStore.tab === Tab.Active ? style.tabActive : style.tab}
          onClick={() => {
            tabsSwitchHandler(Tab.Active);
          }}
        >
          {Tab.Active}
        </div>
        <div
          className={
            tabsStore.tab === Tab.Completed ? style.tabActive : style.tab
          }
          onClick={() => {
            tabsSwitchHandler(Tab.Completed);
          }}
        >
          {Tab.Completed}
        </div>
      </div>
    </div>
  );
});
