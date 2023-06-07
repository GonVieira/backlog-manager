import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    profilePicture: null,
    backgroundImage: null,
    bio: null,
  },
  platformVal: 0,
  sortVal: "",
  genreVal: 0,
  profileCompletedFilter: "all",
};

export const UserSlice = createSlice({
  name: "userReducers",
  initialState,
  reducers: {},
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
