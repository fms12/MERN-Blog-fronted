import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser, signOut, resetPassword } from "./authAPI";
// import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUser: null, // this should only contain user identity => 'id'/'role'
  status: "idle",
  error: null,
  // userChecked: false,
  // mailSent: false,
  passwordReset: false,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await loginUser(loginInfo);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// export const checkAuthAsync = createAsyncThunk("user/checkAuth", async () => {
//   try {
//     const response = await checkAuth();
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// export const resetPasswordRequestAsync = createAsyncThunk(
//   "user/resetPasswordRequest",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await resetPasswordRequest(email);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const resetPasswordAsync = createAsyncThunk(
  "user/resetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await resetPassword(data);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signOutAsync = createAsyncThunk("auth/signOut", async () => {
  const response = await signOut();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload.data;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload.err;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null;
      })
      // .addCase(checkAuthAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(checkAuthAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUserToken = action.payload;
      //   state.userChecked = true;
      // })
      // .addCase(checkAuthAsync.rejected, (state, action) => {
      //   state.status = "idle";
      //   state.userChecked = true;
      // })
      // .addCase(resetPasswordRequestAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(resetPasswordRequestAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.mailSent = true;
      // })
      .addCase(resetPasswordAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.passwordReset = true;
      });
    // .addCase(resetPasswordAsync.rejected, (state, action) => {
    //   state.status = "idle";
    //   state.error = action.payload;
    // });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;
// export const selectUserChecked = (state) => state.auth.userChecked;
// export const selectMailSent = (state) => state.auth.mailSent;
export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;
