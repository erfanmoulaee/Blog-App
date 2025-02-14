"use client";
import { getUserApi, signupApi, signinApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

export default function AuthProvier({ children }) {
  const router = useRouter();
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(authReducer, initialState);

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const {
        data: { message, user },
      } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (err) {
      const error = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(error);
    }
  }

  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const {
        data: { message, user },
      } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      console.log(message);
      toast.success(message);
      router.push("/profile");
    } catch (err) {
      const error = err?.response?.data?.message;
      console.log(error);
      dispatch({ type: "rejected", payload: error });
      toast.error(error);
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });
    try {
      // await new Promise((resolve, reject) =>
      //   setTimeout(() => resolve("ddd"), 4000)
      // );
      const {
        data: { user },
      } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (err) {
      const error = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
    }
  }

  useEffect(() => {
    // getUser();
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signin,
        signup,
        getUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth context");
  return useContext(AuthContext);
}
