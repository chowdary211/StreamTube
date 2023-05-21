import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_MESSAGES } from "./contants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_MESSAGES, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
