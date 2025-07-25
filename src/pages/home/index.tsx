import React from 'react';
import { TravelHero, TravelPlannerApp, TripItineraries } from '../../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h- bg-white p-6 space-y-20">
      <TravelHero/>
      <TripItineraries/>
      {/* <TravelPlannerApp/> */}
    </div>
  );
};
