"use client";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../providers/AuthContext";
import BadgeList from "../components/BadgeList";

// Definindo a interface Badge com a estrutura de dados que esperamos
export interface Badge {
  metadata: any;
  estudante: string;
  curso: string;
  instituicaoDeEnsino: string;
  dataDeParticipacao: string;
  horasEquivalentes: string;
  nomeDoEvento: string;
  idDoEvento: string;
  badge: string;
}

export default function Comprovantes() {
  const { account, signer } = useAuth();
  const [badges, setBadges] = useState<Badge[]>([]); // Array de Badge para armazenar os dados
  const [loading, setLoading] = useState(false);
  const [tokensLoaded, setTokensLoaded] = useState(false);
  const [signature, setSignature] = useState<string | null>(null); // Armazena a assinatura

  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const getTokensByOwner = async () => {
    if (signature) {
      // Se a assinatura já foi feita, não solicita novamente
      console.log("Já foi assinada, utilizando a assinatura existente");
      return;
    }

    setLoading(true);
    try {
      const newSignature = await signer!.signMessage("Please sign this message to verify your ownership");
      setSignature(newSignature);  // Armazena a assinatura para evitar repetir

      const response = await axios.get(`${api_url}/getTokensByOwner`, {
        params: { owner: account, signature: newSignature },
        headers: {
          'x-api-key': api_key
        }
      });

      const tokens = (response.data as { ret: string[] }).ret;
      console.log("Tokens: ", tokens.length);

      const fetchedBadges: Badge[] = [];

      for (let i = 0; i < tokens.length; i++) {
        const tokenId = tokens[i];
        if (parseInt(tokenId) >= 13) {  // Só pega tokens a partir do id 13
          try {
            const metadataResponse = await axios.get(`${api_url}/getMetadataByTokenId`, {
              params: { owner: account, tokenId },
              headers: {
                'x-api-key': api_key
              }
            });

            const metadata: Badge = metadataResponse.data as Badge;  // Tipado como Badge
            console.log(`Metadata for Token ${tokenId}: `, metadata);

            fetchedBadges.push(metadata);  // Adiciona os badges no array
          } catch (err) {
            console.error(`Error fetching metadata for Token ${tokenId}: `, err);
          }
        }
      }

      console.log("Fetched Badges: ", fetchedBadges); // Verifique os dados aqui
      // Atualiza o estado com os badges após o loop
      setBadges(fetchedBadges);
      setTokensLoaded(true);  // Sinaliza que os tokens foram carregados

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white text-neutral">
      <h1 className="text-3xl font-bold mb-4">Comprovantes</h1>
      {!tokensLoaded ? (
        <button onClick={getTokensByOwner} className="btn btn-primary">
          Carregar Tokens
        </button>
      ) : loading ? (
        <p>Loading tokens...</p>
      ) : (
        <BadgeList badges={badges} />
      )}
    </div>
  );
}
