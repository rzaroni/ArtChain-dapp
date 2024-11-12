import { Event } from "../lib/eventos";
import { useAuth } from "../providers/AuthContext";
import axios from 'axios';

interface EventCardProps {
    event: Event;
    isLoggedIn: boolean;
}


const EventCard: React.FC<EventCardProps> = ({ event, isLoggedIn }) => {

    const api_url = process.env.NEXT_PUBLIC_API_URL;
    const api_key = process.env.NEXT_PUBLIC_API_KEY;

    const { account, signer } = useAuth();
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

    const mintToken = async (event: Event) => {
        if (!account) {
            console.error('Account is not connected');
            return;
        }

        try {
            <div className="toast toast-top toast-end">
                <div className="alert alert-info">
                    <span>Minting token...</span>
                </div>
            </div>

            const response = await axios.post(`${api_url}/mint`, {
                name: "ArtChain",
                description: `Token emitido para o evento ${event.title} como prova de participação.`,
                image: `${event.imageUrl}`,
                owner: account,
                data:
                `{
                    "estudante": "PEDRO COELHO NASCIMENTO",
                    "curso": "MESTRADO EM FILOSOFIA",
                    "instituicaoDeEnsino": "POLI-UFRJ",
                    "dataDeParticipacao": "10-15-2024",
                    "horasEquivalentes": "12",
                    "nomeDoEvento": "${event.title}",
                    "idDoEvento": "X4321",
                    "badge": "${event.imageUrl}"
                }`
            }, {
                headers: {
                    'x-api-key': api_key
                }
            });

            <div className="toast toast-top toast-end">
                <div className="alert alert-success">
                    <span>Token minted successfully!</span>
                </div>
            </div>
            console.log("Mint response: ", response.data);

        } catch (err) {
            <div className="toast toast-top toast-end">
                <div className="alert alert-error">
                    <span>Token minted error!</span>
                </div>
            </div>
            console.error(err);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-80">
            <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-auto object-cover rounded-t-lg" // Alterado para h-auto
            />
            <div className="mt-4">
                <h2 className="text-lg font-bold text-black">{event.title}</h2>
                <p className="text-sm text-gray-500">
                    {event.date} | {event.location}
                </p>
                <p className="text-sm text-gray-700 mt-2">Categoria: {event.category}</p>
                {isLoggedIn ? (
                    <div className="flex">
                        <button className="btn mt-1" onClick={() => mintToken(event)}>Mint Token</button>
                    </div>
                ) : (<>
                    <button className="btn" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>Inscreva-se</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-neutral">
                            <h3 className="font-bold text-lg">Evento não esta aceitando inscrições :(</h3>
                            <p className="py-4">Faça login e volte em breve</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Fechar</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </>)}
            </div>
        </div>
    );
};

export default EventCard;
