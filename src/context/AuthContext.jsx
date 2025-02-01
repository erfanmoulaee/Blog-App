const { createContext, useReducer, useContext, use } = require("react");

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(authReducer, initialState);

  return <AuthProvider.Provider value={{ user, isAuthenticated, isLoading, signin, signup }}>{children}</AuthProvider.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context");
  return context;
}
