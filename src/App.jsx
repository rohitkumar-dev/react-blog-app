import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-dvh w-full flex flex-col bg-red-100 dark:bg-red-900 transition-all duration-500 font-sans">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="w-full h-dvh flex justify-center items-center bg-red-100 ">
      <span className="relative flex size-16 ">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
        <span className="relative inline-flex size-16 rounded-full bg-red-400"></span>
      </span>
    </div>
  );
}

export default App;
