import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addtaskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding tasks
    addtasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove tasks
    removetasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update tasks
    updatetasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
          };
        }
        return task;
      });
    },
    //completed
    completetasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
  },
});

export const {
  addtasks,
  removetasks,
  updatetasks,
  completetasks,
} = addtaskReducer.actions;
export const reducer = addtaskReducer.reducer;
