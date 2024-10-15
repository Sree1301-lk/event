import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import "./Timeline.css";

const events = [
  {
    id: 1,
    title: "Moon Landing",
    description: "Apollo 11 lands on the moon.",
    image: "/assets/event1.jpg",
    video: "/assets/event1.mp4",
    year: 1969,
  },
  {
    id: 2,
    title: "Fall of the Berlin Wall",
    description: "The Berlin Wall falls, symbolizing the end of the Cold War.",
    image: "/assets/event2.jpg",
    video: "/assets/event2.mp4",
    year: 1989,
  },
  {
    id: 3,
    title: "Invention of the Internet",
    description: "The internet is born, revolutionizing communication.",
    image: "/assets/event3.jpg",
    video: "",
    year: 1990,
  },
];

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => setCurrentIndex((prev) => (prev + 1) % events.length);
  const prevEvent = () =>
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="timeline-container">
      <button onClick={prevEvent}>← Previous</button>

      <div className="event-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={events[currentIndex].id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EventCard event={events[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={nextEvent}>Next →</button>
    </div>
  );
};

export default Timeline;
import "./Timeline.css";

