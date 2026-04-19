import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const currentUserEmail = localStorage.getItem("currentUserEmail");
    return currentUserEmail ? { email: currentUserEmail } : null;
  });

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exist" };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });
    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, error: "Invalid Email Password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
