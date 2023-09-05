export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export enum Tab {
  Active = "Active",
  All = "All",
  Completed = "Completed",
}
