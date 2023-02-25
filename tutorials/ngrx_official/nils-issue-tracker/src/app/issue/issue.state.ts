import { Issue } from "../models/issue";

export interface Filter {
  text: string;
};

export interface IssueState {
  entities: Issue[],
  filter: Filter;
}

export const initialState: IssueState = {
  entities: [],
  filter: {
    text: "",
  }
}
