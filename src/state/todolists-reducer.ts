import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export type RemoveTodolistActionType = {
  type: "REMOVE-TODOLIST";
  id: string;
};

export type AddTodolistActionType = {
  type: "ADD-TODOLIST";
  title: string;
};

export type ChangeTodolistTitleActionType = {
  type: "CHANGE-TODOLIST-TITLE";
  id: string;
  title: string;
};

export type ChangeTodolisFiltertActionType = {
  type: "CHANGE-TODOLIST-FILTER";
  id: string;
  filter: FilterValuesType;
};

export type ActionType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolisFiltertActionType;

export const todolistsReducer = (
  state: Array<TodolistType>,
  action: ActionType
): Array<TodolistType> => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((tl) => tl.id != action.id);
    }

    case "ADD-TODOLIST": {
      return [
        ...state,
        {
          id: v1(),
          title: action.title,
          filter: "all",
        },
      ];
    }

    case "CHANGE-TODOLIST-TITLE": {
      const todolist = state.find((tl) => tl.id === action.id);
      if (todolist) {
        todolist.title = action.title;
      }
      return [...state];
    }

    case "CHANGE-TODOLIST-FILTER": {
      const todolist = state.find((tl) => tl.id === action.id);
      if (todolist) {
        todolist.filter = action.filter;
      }
      return [...state];
    }

    default:
      throw new Error("i dont understand this action type");
  }
};

export const RemoveTodolistAC = (
  todolistId: string
): RemoveTodolistActionType => {
  return { type: "REMOVE-TODOLIST", id: todolistId };
};

export const AddTodolistAC = (title: string): AddTodolistActionType => {
  return { type: "ADD-TODOLIST", title: title };
};

export const ChangeTodolistTitleAC = (
  id: string,
  title: string
): ChangeTodolistTitleActionType => {
  return { type: "CHANGE-TODOLIST-TITLE", id: id, title: title };
};

export const ChangeTodolistFilterAC = (
  id: string,
  filter: FilterValuesType
): ChangeTodolisFiltertActionType => {
  return { type: "CHANGE-TODOLIST-FILTER", id: id, filter: filter };
};
