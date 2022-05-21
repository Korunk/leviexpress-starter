import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';

export const Home = ({ journeyId }) => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };
  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
        {journey === null ? null : (
          <div>Nalezeno spojení s id: {journey.journeyId}</div>
        )}
      </main>
    </>
  );
};
