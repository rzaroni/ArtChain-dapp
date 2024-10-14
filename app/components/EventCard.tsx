import { Event } from "../lib/eventos";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold text-black">{event.title}</h2>
        <p className="text-sm text-gray-500">
          {event.date} | {event.location}
        </p>
        <p className="text-sm text-gray-700 mt-2">Categoria: {event.category}</p>
      </div>
    </div>
  );
};

export default EventCard;
