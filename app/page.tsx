import EventCard from "./components/EventCard";
import Banner from "./components/HomePage/bannner";
import { dummyEvents } from "./lib/eventos";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <div className="container mx-auto p-6" >
        {/* Seção principal */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h1 className="text-black text-3xl font-bold">Explore Eventos Próximos</h1>
            <p className="text-gray-600">
              Descubra eventos próximos a você e se envolva com a comunidade!
            </p>
          </div>

          {/* Grid de eventos */}
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

