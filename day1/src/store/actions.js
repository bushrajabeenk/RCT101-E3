import { INC_COUNT, DEC_COUNT, MUL_COUNT, DIV_COUNT } from "./actions.types";

export const add = (x) => {
  return {
    type: INC_COUNT,
    payload: x,
  };
};

export const subtract = (x) => {
  return {
    type: DEC_COUNT,
    payload: x,
  };
};

export const multiply = (x) => {
  return {
    type: MUL_COUNT,
    payload: x,
  };
};

export const divide = (x) => {
  return {
    type: DIV_COUNT,
    payload: x,
  };
};
