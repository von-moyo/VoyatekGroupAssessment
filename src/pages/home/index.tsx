import React from 'react';
import { TravelHero, TripItineraries } from '../../components';

export const Home: React.FC = () => {
  return (
    <div className="bg-white p-6 space-y-20">
      <TravelHero/>
      <TripItineraries/>
    </div>
  );
};
