import { createContext } from "react";
import { TodosStore } from "./todosStore";
import { TabsStore } from "./tabsStore";

export const rootStore = createContext({
  todosStore: new TodosStore(),
  tabsStore: new TabsStore(),
});
