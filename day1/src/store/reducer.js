import { INC_COUNT, DEC_COUNT, MUL_COUNT, DIV_COUNT } from "./actions.types";

export const reducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INC_COUNT: {
      return {
        ...state,
        count: state.count + Number(payload),
      };
    }
    case DEC_COUNT: {
      return {
        ...state,
        count: state.count - Number(payload),
      };
    }
    case MUL_COUNT: {
      return {
        ...state,
        count: state.count * Number(payload),
      };
    }
    case DIV_COUNT: {
      return {
        ...state,
        count: state.count / Number(payload),
      };
    }
    default: {
      return state;
    }
  }
};
