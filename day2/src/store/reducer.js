import { ADD_TODO } from "./actions.type";

export const reducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...payload,
            id: state.todos.length + 1,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
