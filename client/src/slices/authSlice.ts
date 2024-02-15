import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstances";
import { toast } from "react-toastify";
type User = {
  email: string;
  password: string;
};

type NewUser = User & {
  name: string;
};

type UserBasicInfo = {
  id: string;
  name: string;
  email: string;
  token: string; // Add token field
};

type UserProfileData = {
  name: string;
  email: string;
};

type AuthApiState = {
  basicUserInfo?: UserBasicInfo | null;
  userProfileData?: UserProfileData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: AuthApiState = {
  basicUserInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
  userProfileData: undefined,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("login", async (data: User) => {
  try {
    const response = await axiosInstance.post("/login", data);
    const resData = response.data;
    console.log(response.data);

    localStorage.setItem("userInfo", JSON.stringify(resData));
    toast.success("Succesfully  logged in");

    return resData;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      toast.error("Incorrect email or password");
    } else if (error.response && error.response.status === 404) {
      toast.error("Invalid Username");
    } else {
      toast.error("An error occurred during login");
    }
    throw error;
  }
});

export const register = createAsyncThunk("register", async (data: NewUser) => {
  const response = await axiosInstance.post("/register", data);
  console.log(response);

  const resData = response.data;

  localStorage.setItem("userInfo", JSON.stringify(resData));

  return resData;
});


export const getUser = createAsyncThunk(
  "users/profile",
  async (userId: string) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.basicUserInfo = null;
      toast.success("Succesfully  logged out");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Login failed";
      })

      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        }
      )
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Registration failed";
      })

      

    
  },
});

export const {logout} = authSlice.actions

export default authSlice.reducer;
