type StateType = {
  age: number;
  childrenCount: number;
  name: string;
};

type ActiopnType = {
  type: string;
  [key: string]: any;
};

export const userReducer = (
  state: StateType,
  action: ActiopnType
): StateType => {
  switch (action.type) {
    case "INCREMENT-AGE":
      let newState = { ...state };
      newState.age = state.age + 1;
      return newState;

    case "INCREMENT-CHILDREN-COUNT":
      return {
        ...state,
        childrenCount: state.childrenCount + 1,
      };
    case "CHANGE-NAME":
      return {
        ...state,
        name: action.newName,
      };

    default:
      throw new Error("i dont understand this action type");
  }
};
