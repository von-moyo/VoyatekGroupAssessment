import React, { useState } from 'react';
import { AeroplaneIcon, ActivitiesIcon, CalendarIcon, ClockIcon, StarIcon, LocationIcon, PoolIcon, WineGlassIcon, CutleryIcon, MovieActionIcon, UsbIcon, TravellingBagIcon, XIcon, PlusBoxIcon, BeddingIcon, FlightTakeoffIcon, HotelsHomeIcon, FlightDescendIcon } from '../../../assets/icons';

export const TravelPlannerApp = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'American Airlines',
      flightNumber: 'AA-829',
      class: 'First Class',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: 123450.00,
      facilities: ['Baggage: 20kg', 'Cabin Baggage: 8kg', 'In flight entertainment', 'In flight meal', 'USB Port']
    },
    {
      id: 2,
      airline: 'American Airlines',
      flightNumber: 'AA-829',
      class: 'First Class',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: 123450.00,
      facilities: ['Baggage: 20kg', 'Cabin Baggage: 8kg', 'In flight entertainment', 'In flight meal', 'USB Port']
    }
  ]);

  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Riviera Resort, Lekki',
      address: '18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1',
      rating: 8.5,
      reviews: 436,
      roomType: 'King size room',
      checkIn: '20-04-2024',
      checkOut: '29-04-2024',
      nights: 10,
      price: 123450.00,
      totalPrice: 560000,
      facilities: ['Pool', 'Bar'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Riviera Resort, Lekki',
      address: '18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1',
      rating: 8.5,
      reviews: 436,
      roomType: 'King size room',
      checkIn: '20-04-2024',
      checkOut: '29-04-2024',
      nights: 10,
      price: 123450.00,
      totalPrice: 560000,
      facilities: ['Pool', 'Bar'],
      image: '/api/placeholder/300/200'
    }
  ]);

  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'The Museum of Modern Art',
      description: 'Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant',
      time: '10:30 AM on Mar 19',
      duration: '1 Hour',
      rating: 4.5,
      reviews: 436,
      price: 123450.00,
      included: 'Admission to the Empire State Building',
      day: 1,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'The Museum of Modern Art',
      description: 'Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant',
      time: '10:30 AM on Mar 19',
      duration: '1 Hour',
      rating: 4.5,
      reviews: 436,
      price: 123450.00,
      included: 'Admission to the Empire State Building',
      day: 1,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'The Museum of Modern Art',
      description: 'Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant',
      time: '10:30 AM on Mar 19',
      duration: '1 Hour',
      rating: 4.5,
      reviews: 436,
      price: 123450.00,
      included: 'Admission to the Empire State Building',
      day: 2,
      image: '/api/placeholder/300/200'
    }
  ]);

  const removeFlight = (id) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  const removeHotel = (id) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  const removeActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const addFlight = () => {
    console.log('Add flight functionality');
  };

  const addHotel = () => {
    console.log('Add hotel functionality');
  };

  const addActivity = () => {
    console.log('Add activity functionality');
  };

  const FlightCard = ({ flight, onRemove }: any) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <AeroplaneIcon className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{flight.flightNumber}</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {flight.class}
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => onRemove(flight.id)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <XIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
          <div className="text-sm text-gray-600">{flight.departure.date}</div>
          <div className="text-lg font-semibold text-gray-900">{flight.departure.code}</div>
        </div>

        <div className="flex-1 mx-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FlightTakeoffIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Duration: {flight.duration}</span>
            <FlightDescendIcon className="w-4 h-4 text-gray-400" />
          </div>
          <div className="w-full bg-blue-500 h-1 rounded"></div>
          <div className="text-center text-sm text-gray-600 mt-1">Direct</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
          <div className="text-sm text-gray-600">{flight.arrival.date}</div>
          <div className="text-lg font-semibold text-gray-900">{flight.arrival.code}</div>
        </div>

        <div className="text-right ml-6">
          <div className="text-2xl font-bold text-gray-900">₦ {flight.price.toLocaleString()}</div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="text-sm text-gray-600 mb-2">Facilities:</div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {flight.facilities.map((facility, index) => (
            <div key={index} className="flex items-center space-x-1">
              <span>•</span>
              <span>{facility}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <div className="flex space-x-4">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Flight details
          </button>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Price details
          </button>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Edit details
        </button>
      </div>
    </div>
  );

  const HotelCard = ({ hotel, onRemove }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
      <div className="flex">
        <div className="w-64 h-48 bg-gray-200 relative">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
            <span>→</span>
          </button>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
            <button 
              onClick={() => onRemove(hotel.id)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <XIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">{hotel.address}</p>
          
          <div className="flex items-center space-x-4 mb-4">
            <button className="text-blue-600 text-sm">Show in map</button>
            <div className="flex items-center space-x-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">{hotel.rating} ({hotel.reviews})</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <BeddingIcon className="w-4 h-4" />
              <span>🛏</span>
              <span>{hotel.roomType}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
            <span>Facilities:</span>
            <div className="flex items-center space-x-1">
              {/* <Pool className="w-4 h-4" /> */}
              <span>🏊</span>
              <span>Pool</span>
            </div>
            <div className="flex items-center space-x-1">
              {/* <WineGlass className="w-4 h-4" /> */}
              <span>🍷</span>
              <span>Bar</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Hotel details
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Price details
              </button>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Edit details
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="text-right mb-4">
            <div className="text-2xl font-bold text-gray-900">₦ {hotel.price.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Price: NGN {hotel.totalPrice.toLocaleString()}</div>
            <div className="text-sm text-gray-600">1 room x {hotel.nights} nights incl. taxes</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              {/* <Calendar className="w-4 h-4 text-gray-400" /> */}
              <span>📅</span>
              <span className="text-gray-600">Check In: {hotel.checkIn}</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <Calendar className="w-4 h-4 text-gray-400" /> */}
              <span>📅</span>
              <span className="text-gray-600">Check Out: {hotel.checkOut}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ActivityCard = ({ activity, onRemove }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
      <div className="flex">
        <div className="w-64 h-48 bg-gray-900 relative">
          <img 
            src={activity.image} 
            alt={activity.name}
            className="w-full h-full object-cover"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow-md">
            <span>←</span>
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow-md">
            <span>→</span>
          </button>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
            <button 
              onClick={() => onRemove(activity.id)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <XIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
          
          <div className="flex items-center space-x-4 mb-4">
            <button className="text-blue-600 text-sm">Directions</button>
            <div className="flex items-center space-x-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">{activity.rating} ({activity.reviews})</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <ClockIcon className="w-4 h-4" />
              <span>{activity.duration}</span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-600">What's included: </span>
            <span className="text-sm text-gray-900">{activity.included}</span>
            <button className="text-blue-600 text-sm ml-2">See more</button>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Activity details
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Price details
              </button>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Edit details
            </button>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div className="text-right mb-4">
            <div className="text-2xl font-bold text-gray-900">₦ {activity.price.toLocaleString()}</div>
            <div className="text-sm text-gray-600">{activity.time}</div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Day {activity.day}
            </div>
            <div className="flex flex-col space-y-1">
              <button className="w-6 h-6 rounded-full border-2 border-gray-300"></button>
              <button className="w-6 h-6 rounded-full border-2 border-gray-300"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex-1 p-6 rounded-lg text-center transition-all ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      <div className="mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <button
        className={`mt-4 px-6 py-2 rounded-lg font-medium ${
          isActive 
            ? 'bg-white text-blue-600' 
            : 'bg-blue-600 text-white'
        }`}
      >
        {label === 'Activities' ? 'Add Activities' : 
         label === 'Hotels' ? 'Add Hotels' : 'Add Flights'}
      </button>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-300 px-6 py-8 relative overflow-hidden">
        <div className="absolute right-4 top-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-2xl">☀️</span>
          </div>
        </div>
        <div className="absolute left-4 top-4">
          <div className="w-16 h-20">
            <span className="text-4xl">🌴</span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-white mb-2">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm">21 March 2024 → 21 April 2024</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Bahamas Family Trip</h1>
          <p className="text-blue-100">New York, United States of America | Solo Trip</p>
        </div>
      </div>

      {/* Navigation Tabs - Overview */}
      {activeTab === 'overview' && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-6">
            <TabButton
              id="activities"
              label="Activities"
              icon={<span className="text-3xl">🎯</span>}
              isActive={false}
              onClick={setActiveTab}
            />
            <TabButton
              id="hotels"
              label="Hotels"
              icon={<span className="text-3xl">🏨</span>}
              isActive={false}
              onClick={setActiveTab}
            />
            <TabButton
              id="flights"
              label="Flights"
              icon={<span className="text-3xl">✈️</span>}
              isActive={true}
              onClick={setActiveTab}
            />
          </div>
        </div>
      )}

      {/* Flights Tab */}
      {activeTab === 'flights' && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trip itineraries</h2>
            <p className="text-gray-600">Your trip itineraries are placed here</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <AeroplaneIcon className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Flights</h3>
              </div>
              <button 
                onClick={addFlight}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Add Flights
              </button>
            </div>

            <div className="space-y-4">
              {flights.map(flight => (
                <FlightCard 
                  key={flight.id} 
                  flight={flight} 
                  onRemove={removeFlight}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hotels Tab */}
      {activeTab === 'hotels' && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <HotelsHomeIcon className="w-5 h-5 text-white" />
                <span className="text-white">🏨</span>
                <h3 className="text-lg font-semibold text-white">Hotels</h3>
              </div>
              <button 
                onClick={addHotel}
                className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                Add Hotels
              </button>
            </div>

            <div className="space-y-4">
              {hotels.map(hotel => (
                <HotelCard 
                  key={hotel.id} 
                  hotel={hotel} 
                  onRemove={removeHotel}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Activities Tab */}
      {activeTab === 'activities' && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-blue-600 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <ActivitiesIcon className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold text-white">Activities</h3>
              </div>
              <button 
                onClick={addActivity}
                className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                Add Activities
              </button>
            </div>

            <div className="space-y-4">
              {activities.map(activity => (
                <ActivityCard 
                  key={activity.id} 
                  activity={activity} 
                  onRemove={removeActivity}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons to switch between tabs for demo */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('flights')}
          className={`px-4 py-2 rounded ${activeTab === 'flights' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >
          Flights
        </button>
        <button 
          onClick={() => setActiveTab('hotels')}
          className={`px-4 py-2 rounded ${activeTab === 'hotels' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >
          Hotels
        </button>
        <button 
          onClick={() => setActiveTab('activities')}
          className={`px-4 py-2 rounded ${activeTab === 'activities' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
        >
          Activities
        </button>
      </div>
    </div>
  );
};