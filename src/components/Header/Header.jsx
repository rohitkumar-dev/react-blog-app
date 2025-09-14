import React, { useState, useRef, useEffect } from "react";
import { Container, Logo, LogoutBtn, ThemeBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  // const menuRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (menu && menuRef.current && !menuRef.current.contains(e.target)) {
  //       setMenu(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [menu]);

  return (
    <header className="bg-red-100 dark:bg-red-900 border border-b-red-300">
      <div className="mx-2 sm:mx-10 py-4 bg-[rgba(24, 24, 24, 0.8)] z-40 ">
        <Container>
          <nav className=" ">
            <div className="flex flex-row flex-wrap items-center justify-between">
              <div className="w-1/2 sm:max-w-1/10 overflow-hidden">
                <Link
                  to="/"
                  className="no-underline outline-none border-none focus:outline-none active:outline-none hover:no-underline"
                >
                  <Logo width="100px" height="" className="max-h-8" />
                </Link>
              </div>

              <div className="w-1/2 flex justify-end sm:hidden ">
                <button className="" onClick={() => setMenu(!menu)}>
                  <svg
                    className={` h-8 w-8 p-1 bg-red-600 text-white border border-red-600 rounded-sm `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="ml-3">
                  <ThemeBtn />
                </div>
              </div>

              <div
                //ref={menuRef}
                className={` ${
                  menu ? "inline-block" : "hidden"
                }  sm:inline-block flex-grow text-sm md:text-base rounded-lg mt-3 sm:mt-0 sm:flex-grow-0 bg-red-300 sm:bg-red-100 sm:dark:bg-red-900`}
              >
                <ul className="sm:flex sm:flex-row sm:justify-between ">
                  {navItems.map((item) =>
                    item.active ? (
                      <li key={item.name} className=" sm:ml-3 ">
                        <NavLink
                          to={item.slug}
                          onClick={() => setMenu(false)}
                          className={({ isActive }) =>
                            `${
                              isActive ? "text-white bg-red-600" : ""
                            } inline-block w-full px-4 py-2 font-medium text-red-900 bg-red-300 rounded-md `
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li onClick={() => setMenu(false)} className="sm:ml-3">
                      <LogoutBtn />
                    </li>
                  )}

                  <li className="hidden sm:inline-block ml-3">
                    <ThemeBtn />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
