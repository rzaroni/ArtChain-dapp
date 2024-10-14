"use client";

import EventCard from "./components/EventCard";
import Banner from "./components/HomePage/bannner";
import { dummyEvents, mockUserEvents } from "./lib/eventos";
import { useAuth } from "./providers/AuthContext";

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="bg-white">
      <Banner />
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
              <EventCard key={event.id} event={event} />
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
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

