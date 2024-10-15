import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title} ({event.year})</h2>
      <p>{event.description}</p>

      <img src={event.image} alt={event.title} className="event-image" />
      
      {event.video && (
        <video controls className="event-video">
          <source src={event.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default EventCard;
