"use client";

import EventCard from "./components/EventCard";
import Banner from "./components/HomePage/bannner";
import { dummyEvents, mockUserEvents } from "./lib/eventos";
import { useAuth } from "./providers/AuthContext";
import axios from 'axios';

export default function Home() {
  const { isLoggedIn, signature, account } = useAuth();

  const handleTokens = async () => {
    try {
      const response = await axios.get(`https://arbitrum.abakhus.io/api/getTokensByOwner`, {
        params: { owner: account, signature: signature },
        headers: {
          'accept': 'application/json',
          'x-api-key': '969d4270b6d6c8138c53d0e005d874fa',
        },
      });
      console.log(response);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  }

  return (
    <div className="bg-white">
      <Banner />
      <button className="btn mt-1" onClick={handleTokens}>Button</button>
      <div className="container mx-auto p-6" >
        {isLoggedIn ? (<section className="mb-12">
          <div className="text-center mb-6">
            <h1 className="text-black text-3xl font-bold">Seus Eventos</h1>
            <p className="text-neutral">
              Registre sua presença e reinvidique seu token!
            </p>
          </div>

          <div className="carousel rounded-box p-4 gap-4">
            {mockUserEvents.map((event) => (
              <EventCard key={event.id} event={event} isLoggedIn={isLoggedIn}/>
            ))}
          </div>
        </section>) : null};
        <section className="mb-12">
          <div className="text-center mb-6">
            <h1 className="text-black text-3xl font-bold">Explore Eventos Próximos</h1>
            <p className="text-gray-600">
              Descubra eventos próximos a você e se envolva com a comunidade!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyEvents.map((event) => (
              <EventCard key={event.id} event={event} isLoggedIn={false}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

