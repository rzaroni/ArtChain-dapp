"use client";

import { useAuth } from "../providers/AuthContext";

export default function NavBar() {
  const { isLoggedIn, login, logout, account } = useAuth();

  return (
    <div className="navbar bg-base-100 text-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Eventos</a></li>
            <li><a>Comprovantes</a></li>
            <li><a>Crie um Evento</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ArtChain</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a><b>Eventos</b></a></li>
          <li><a><b>Comprovantes</b></a></li>
          <li><a><b>Crie um Evento</b></a></li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="flex items-center">
            <span className="mr-2">{account}</span>
            <button className="btn" onClick={logout}>Logout</button>
          </div>
        ) : (
          <button className="btn" onClick={login}>Login</button>
        )}
      </div>
    </div>
  );
}
