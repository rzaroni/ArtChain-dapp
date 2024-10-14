"use client";

interface EthereumWindow extends Window {
  ethereum?: {
    request: (args: { method: string }) => Promise<any>;
  };
}

declare const window: EthereumWindow;

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ethers } from 'ethers';

interface AuthContextType {
  isLoggedIn: boolean;
  account: string | null;
  signer: ethers.Signer | null;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const login = async () => {
    if (window.ethereum) {
      try {
        // Solicita a conexão da carteira
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && accounts.length > 0) {
          const selectedAccount = accounts[0];
          setAccount(selectedAccount);

          // Obtém o provedor e o signer
          const provider = new ethers.BrowserProvider(window.ethereum);
          const userSigner = await provider.getSigner();
          setSigner(userSigner);

          // Solicita a assinatura da mensagem
          const signature = await userSigner.signMessage("Sign this message to authenticate with our application.");
          console.log("Signature response:", signature);  // Exibe a assinatura no console

          // Após obter a assinatura, define o estado de login como verdadeiro
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.error('Error connecting to MetaMask:', err);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  const logout = () => {
    setAccount(null);
    setSigner(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          const selectedAccount = accounts[0];
          setAccount(selectedAccount);

          // Obtém o provedor e o signer
          const provider = new ethers.BrowserProvider(window.ethereum);
          const userSigner = await provider.getSigner();
          setSigner(userSigner);
        }
      }
    };

    checkWalletConnection();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, account, signer, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};