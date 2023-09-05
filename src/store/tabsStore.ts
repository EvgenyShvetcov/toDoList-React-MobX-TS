import { makeAutoObservable } from "mobx";
import { Tab } from "../types";

export class TabsStore {
  public tab: Tab = Tab.All;

  constructor() {
    makeAutoObservable(this);
  }

  public switchTab(title: Tab) {
    this.tab = title;
  }
}
