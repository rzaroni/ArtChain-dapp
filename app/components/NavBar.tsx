"use client";

import { useAuth } from "../providers/AuthContext";
import axios from 'axios';

export default function NavBar() {
  const { isLoggedIn, login, logout, account, signer } = useAuth();

  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

    const getTokensByOwner = async () => {
        try {
            const signature = await signer!.signMessage("Please sign this message to verify your ownership");

            const response = await axios.get(`${api_url}/getTokensByOwner`, {
                params: { owner: account, signature },
                headers: {
                    'x-api-key': api_key
                }
            });

            const tokens = (response.data as { ret: string[] }).ret;
            console.log("Tokens: ", tokens.length);
            for (let i = 0; i < tokens.length; i++) {
                const tokenId = tokens[i];
                try {
                    const metadataResponse = await axios.get(`${api_url}/getMetadataByTokenId`, {
                        params: { owner: account, tokenId },
                        headers: {
                            'x-api-key': api_key
                        }
                    });
                    const metadata = metadataResponse.data;
                    console.log(`Metadata for Token ${tokenId}: `, metadata);
                } catch (err) {
                    console.error(`Error fetching metadata for Token ${tokenId}: `, err);
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

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
            <button className="btn" onClick={getTokensByOwner}>Ver Tokens</button>
          </div>
        ) : (
          <button className="btn" onClick={login}>Login</button>
        )}
      </div>
    </div>
  );
}
