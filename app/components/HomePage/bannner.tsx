"use client";

import { useAuth } from "@/app/providers/AuthContext";

export default function Banner() {
    const { login } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center p-10 text-neutral lg:flex-row lg:justify-center gap-20 bg-white">
            {/* Texto */}
            <div className="text-center lg:text-left max-w-lg mb-10 lg:mb-0">
                <h1 className="text-4xl font-bold">
                    ArtChain: Uma Plataforma Web3 para a Comunidade Artística
                </h1>
                <p className="mt-4 text-gray-600">
                    ArtChain é uma plataforma Web3 que conecta artistas e estudantes, promovendo a troca de conhecimento e a democratização da arte por meio de tokenização permissionada e tecnologia blockchain.
                </p>
                <button className="mt-6 btn btn-primary" onClick={login}>
                    Registre-se Agora
                </button>
            </div>

            {/* Imagem */}
            <div className="w-full lg:w-auto flex justify-center">
                <img src="../favicon.ico" alt="ArtChain Icon" className="max-w-full h-auto" />
            </div>
        </div>
    )
}