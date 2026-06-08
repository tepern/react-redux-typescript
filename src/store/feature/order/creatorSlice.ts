import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IGeneralData } from "../../../models/request";

const initialState: IGeneralData = {
    creatorName: "",
    department: {id: "1", name: "One"},
    isApproved: false
  
};

export const creatorSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    general: (state, action: PayloadAction<IGeneralData>) => {
      state.creatorName = action.payload.creatorName;
      state.department = action.payload.department;
      state.isApproved = action.payload.isApproved;
  }
}
});

export const { general } = creatorSlice.actions;
export const selectOrder = (state: RootState) => state.order;
export default creatorSlice.reducer;
