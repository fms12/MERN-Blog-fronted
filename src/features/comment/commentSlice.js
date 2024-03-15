import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createComment, fetchCommentBySlug } from "./commentAPI";

const initialState = {
  comments: [],
  status: "idle",
  allComments:null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createCommentAsync = createAsyncThunk(
  "comment/createComment",
  async ({comment, slug}) => {
    console.log(comment);
    const response = await createComment({comment, slug });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchCommentBySlugAsync = createAsyncThunk(
  "comment/fetchCommentBySlug",
  async (slug) => {
    const response = await fetchCommentBySlug(slug);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(createCommentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCommentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments.push(action.payload);
      })
      .addCase(fetchCommentBySlugAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCommentBySlugAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments = action.payload.data;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export const selectAllComments = (state) => state.comment.comments;

export default commentSlice.reducer;
