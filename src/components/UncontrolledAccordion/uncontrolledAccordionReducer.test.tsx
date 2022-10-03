import { reducer, StateType } from "./uncontrolledAccordionReducer";

test("collapsed should be true", () => {
  //data
  const state: StateType = {
    collapsed: false,
  };

  const newState = reducer(state, { type: "TOGGLE-COLLAPSED" });

  expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
  //data
  const state: StateType = {
    collapsed: true,
  };

  const newState = reducer(state, { type: "TOGGLE-COLLAPSED" });

  expect(newState.collapsed).toBe(false);
});

test("reducer should throw error because action type is incorrect ", () => {
  //data
  const state: StateType = {
    collapsed: true,
  };

  expect(() => reducer(state, { type: "FAKE" })).toThrowError();
});
