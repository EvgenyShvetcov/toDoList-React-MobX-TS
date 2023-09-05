import { useContext } from "react";
import { rootStore } from "./store/store";

export const useStores = () => useContext(rootStore);
