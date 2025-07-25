import React, { useState } from 'react';
import { ActivitiesIcon, BeddingIcon, CalendarIcon, ChevronCircleIcon, ClockIcon, CutleryIcon, FlightDescendIcon, FlightHomeIcon, FlightTakeoffIcon, HotelsHomeIcon, LocationIcon, MovieActionIcon, PoolIcon, StarIcon, TravellingBagIcon, UsbIcon, WineGlassIcon, XIcon } from '../../assets/icons';
import { Activity, Hotel } from '../../assets/images';

interface Facility {
  label: string;
  icon: any;
}

interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  class: string;
  departure: {
    time: string;
    date: string;
    code: string;
  };
  arrival: {
    time: string;
    date: string;
    code: string;
  };
  duration: string;
  price: number;
  facilities: Facility[];
}

export const TripItineraries = () => {
  const [flights, setFlights] = useState<Flight[]>([
    {
      id: 1,
      airline: 'American Airlines',
      flightNumber: 'AA-829',
      class: 'First Class',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: 123450.0,
      facilities: [
        { label: 'Baggage: 20kg', icon: TravellingBagIcon },
        { label: 'Cabin Baggage: 8kg', icon: TravellingBagIcon },
        { label: 'In flight entertainment', icon: MovieActionIcon },
        { label: 'In flight meal', icon: CutleryIcon },
        { label: 'USB Port', icon: UsbIcon },
      ],
    },
    {
      id: 2,
      airline: 'American Airlines',
      flightNumber: 'AA-829',
      class: 'First Class',
      departure: { time: '08:35', date: 'Sun, 20 Aug', code: 'LOS' },
      arrival: { time: '09:55', date: 'Sun, 20 Aug', code: 'SIN' },
      duration: '1h 45m',
      price: 123450.0,
      facilities: [
        { label: 'Baggage: 20kg', icon: TravellingBagIcon },
        { label: 'Cabin Baggage: 8kg', icon: TravellingBagIcon },
        { label: 'In flight entertainment', icon: MovieActionIcon },
        { label: 'In flight meal', icon: CutleryIcon },
        { label: 'USB Port', icon: UsbIcon },
      ],
    },
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
      totalPrice: 560000.00,
      facilities: [
        { label: 'Pool', icon: PoolIcon },
        { label: 'Bar', icon: WineGlassIcon },
      ],
      image: Hotel,
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
      totalPrice: 560000.00,
      facilities: [
        { label: 'Pool', icon: PoolIcon },
        { label: 'Bar', icon: WineGlassIcon },
      ],
      image: Hotel,
    },
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
      image: Activity,
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
      image: Activity,
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
      image: Activity,
    },
  ]);

  const removeFlight = (id: number) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  const removeHotel = (id: number) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  const removeActivity = (id: number) => {
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

  return (
    <div className="space-y-4 px-4 sm:px-6 lg:px-0">
      <div className="mb-6">
        <h3 className="font-semibold mb-0.5 text-sm sm:text-base">Trip itineraries</h3>
        <p className="text-[10px] sm:text-xs text-[#647995]">Your trip itineraries are placed here</p>
      </div>

      <div className="bg-[#F0F2F5] rounded-[4px] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex items-center space-x-2">
            <FlightHomeIcon className="w-5 h-5 text-[#676E7E]" />
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">Flights</h3>
          </div>
          <button
            onClick={addFlight}
            className="text-blue-600 bg-white rounded-[4px] px-6 sm:px-8 py-2 sm:py-2.5 hover:bg-blue-50 font-medium cursor-pointer text-[10px] sm:text-xs"
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

      <div className="bg-[#344054] rounded-[4px] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex items-center space-x-2">
            <HotelsHomeIcon className="w-5 h-5 text-white" />
            <h3 className="text-sm sm:text-base font-semibold text-white">Hotels</h3>
          </div>
          <button
            onClick={addHotel}
            className="text-[#1D2433] bg-white rounded-[4px] px-6 sm:px-8 py-2 sm:py-2.5 hover:bg-gray-100 font-medium cursor-pointer text-[10px] sm:text-xs"
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

      <div className="bg-[#0054E4] rounded-[4px] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex items-center space-x-2">
            <ActivitiesIcon className="w-5 h-5 text-white" />
            <h3 className="text-sm sm:text-base font-semibold text-white">Activities</h3>
          </div>
          <button
            onClick={addActivity}
            className="text-blue-600 bg-white rounded-[4px] px-6 sm:px-8 py-2 sm:py-2.5 hover:bg-blue-50 font-medium cursor-pointer text-[10px] sm:text-xs"
          >
            Add Activities
          </button>
        </div>

        <div className="space-y-4">
          {activities.map(activity => (
            <ActivitiesCard
              key={activity.id}
              activity={activity}
              onRemove={removeActivity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FlightCard = ({ flight, onRemove }: any) => (
  <div className="bg-white rounded-[4px] mb-4 grid grid-cols-[1fr_auto] sm:grid-cols-[9fr_0.4fr] w-full">
    <div className="py-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center justify-between mx-4 sm:mx-6 mb-4 sm:mb-0 sm:mr-[9%]">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900">{flight.airline}</h3>
              <div className="flex items-center space-x-2 text-[10px] sm:text-sm text-[#676E7E]">
                <span>{flight.flightNumber}</span>
                <span className="bg-[#667185] rounded-full p-[1px]"></span>
                <span className="bg-[#0A369D] text-white px-2 py-1 rounded-[4px] text-[9px] sm:text-[10px]">
                  {flight.class}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mx-4 sm:mx-0">
          <div className="text-base sm:text-lg font-semibold text-gray-900">{flight.departure.time}</div>
          <div className="text-[10px] sm:text-[11px] text-[#676E7E]">{flight.departure.date}</div>
        </div>
        <div className="flex-1 mx-4 sm:mx-6">
          <div className="flex items-center justify-between gap-4 sm:gap-10 mb-2">
            <FlightTakeoffIcon className="w-4 h-4 text-gray-400" />
            <span className="text-[10px] sm:text-[11px] text-[#676E7E]">Duration: {flight.duration}</span>
            <FlightDescendIcon className="w-4 h-4 text-gray-400" />
          </div>
          <div className="bg-[#E7F0FF] w-full h-1.5 rounded flex justify-center">
            <div className="w-[40%] bg-blue-500 h-1.5 rounded"></div>
          </div>
          <div className="w-full flex items-center justify-between mt-2">
            <span className="text-[10px] sm:text-xs text-[#1D2433]">{flight.departure.code}</span>
            <span className="text-[10px] sm:text-xs text-[#676E7E]">Direct</span>
            <span className="text-[10px] sm:text-xs text-[#1D2433]">{flight.arrival.code}</span>
          </div>
        </div>
        <div className="text-center mx-4 sm:mx-0">
          <div className="text-base sm:text-lg font-semibold text-gray-900">{flight.arrival.time}</div>
          <div className="text-[10px] sm:text-[11px] text-[#676E7E]">{flight.arrival.date}</div>
        </div>
        <div className="text-right mx-4 sm:mx-6">
          <div className="text-lg sm:text-xl font-semibold text-gray-900">₦ {flight.price.toLocaleString()}.00</div>
        </div>
      </div>
      <div className="border-t border-b border-[#E4E7EC] px-4 sm:px-6 mt-4 py-4 sm:py-6 flex flex-col sm:flex-row sm:items-center">
        <div className="text-[10px] sm:text-xs font-medium text-[#676E7E] mb-2 sm:mb-0">Facilities:</div>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-[#647995] text-[10px] sm:text-xs font-medium">
          {flight.facilities.map((facility: Facility, index: number) => (
            <div key={index} className="flex items-center space-x-1">
              <facility.icon className="w-4 h-4" />
              <span>{facility.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 px-4 sm:px-6">
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-sm">Flight details</button>
          <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-sm">Price details</button>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-sm">Edit details</button>
      </div>
    </div>
    <div className="h-full bg-[#FBEAE9] cursor-pointer grid place-content-center rounded-r-[4px]">
      <button onClick={() => onRemove(flight.id)} className="cursor-pointer">
        <XIcon className="w-3 h-3 text-[#9E0A05] cursor-pointer" />
      </button>
    </div>
  </div>
);

const HotelCard = ({ hotel, onRemove }: any) => (
  <div className="bg-white rounded-[4px] mb-4 grid grid-cols-[1fr_auto] sm:grid-cols-[9fr_0.4fr] w-full">
    <div className="py-4 flex flex-col sm:flex-row">
      <div className="h-40 sm:h-full w-full sm:w-58 relative mx-4 sm:ml-6 mb-4 sm:mb-0">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover rounded-[4px]"
        />
        <ChevronCircleIcon className="w-4 h-4 cursor-pointer absolute top-1/2 right-3" />
        <ChevronCircleIcon className="w-4 h-4 cursor-pointer absolute top-1/2 left-3 rotate-180" />
      </div>
      <div className="w-full">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between pr-4 sm:pr-6 pl-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">{hotel.name}</h3>
              <p className="text-[#676E7E] text-[10px] sm:text-[11px] mb-3 max-w-[90%] sm:max-w-[60%]">{hotel.address}</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                <button className="text-[#0D6EFD] text-[10px] sm:text-[11px] flex items-center">
                  <LocationIcon className="w-4 h-4 text-[#0D6EFD] mr-1" />
                  Show in map
                </button>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-[10px] sm:text-[11px]">{hotel.rating} ({hotel.reviews})</span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] sm:text-[11px] text-[#676E7E]">
                  <BeddingIcon className="w-4 h-4" />
                  <span>{hotel.roomType}</span>
                </div>
              </div>
            </div>
            <div className="text-right mb-4">
              <div className="text-lg sm:text-xl font-semibold text-[#1D2433]">₦ {hotel.price.toLocaleString()}</div>
              <div className="text-[10px] sm:text-[11px] text-[#1D2433]">
                Total Price: NGN {hotel.totalPrice.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#1D2433]">
                1 room x {hotel.nights} nights incl. taxes
              </div>
            </div>
          </div>
          <div className="border-t border-b border-[#E4E7EC] px-4 sm:px-6 mt-1 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <div className="text-[10px] sm:text-xs font-medium text-[#676E7E] mr-2">Facilities:</div>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-[#647995] text-[10px] sm:text-xs font-medium">
                {hotel.facilities.map((facility: Facility, index: number) => (
                  <div key={index} className="flex items-center space-x-1">
                    <facility.icon className="w-4 h-4" />
                    <span>{facility.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-[10px] sm:text-xs gap-2 sm:gap-3 font-medium">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <CalendarIcon className="w-3 h-3 sm:h-4 text-[#475367] mr-1" />
                <span className="text-[#676E7E]">Check In: {hotel.checkIn}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <CalendarIcon className="w-3 h-3 sm:h-4 text-[#475367] mr-1" />
                <span className="text-[#676E7E]">Check Out: {hotel.checkOut}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end px-4 sm:px-6 pt-3">
            <div className="flex space-x-4 mb-2 sm:mb-0">
              <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
                Hotel details
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
                Price details
              </button>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
              Edit details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="h-full bg-[#FBEAE9] cursor-pointer grid place-content-center rounded-r-[4px]">
      <button onClick={() => onRemove(hotel.id)} className="cursor-pointer">
        <XIcon className="w-3 h-3 text-[#9E0A05] cursor-pointer" />
      </button>
    </div>
  </div>
);

const ActivitiesCard = ({ activity, onRemove }: any) => (
  <div className="bg-white rounded-[4px] mb-4 grid grid-cols-[1fr_auto] sm:grid-cols-[9fr_0.4fr] w-full">
    <div className="py-4 flex flex-col sm:flex-row">
      <div className="h-40 sm:h-full w-full sm:w-58 relative mx-4 sm:ml-6 mb-4 sm:mb-0">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover rounded-[4px]"
        />
        <ChevronCircleIcon className="w-4 h-4 cursor-pointer absolute top-1/2 right-3" />
        <ChevronCircleIcon className="w-4 h-4 cursor-pointer absolute top-1/2 left-3 rotate-180" />
      </div>
      <div className="w-full">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between pr-4 sm:pr-6 pl-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">{activity.name}</h3>
              <p className="text-[#1D2433] w-full sm:w-[60%] text-[10px] sm:text-[11px] mb-3">{activity.description}</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                <button className="text-[#0D6EFD] text-[10px] sm:text-[11px] flex items-center">
                  <LocationIcon className="w-4 h-4 text-[#0D6EFD] mr-1" />
                  Directions
                </button>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-[10px] sm:text-[11px]">{activity.rating} ({activity.reviews})</span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] sm:text-[11px] text-[#1D2433]">
                  <ClockIcon className="w-4 h-4" />
                  <span>{activity.duration}</span>
                </div>
              </div>
            </div>
            <div className="text-right mb-4">
              <div className="text-lg sm:text-xl font-semibold text-[#1D2433]">
                ₦ {activity.price.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#1D2433]">{activity.time}</div>
            </div>
          </div>
          <div className="border-t border-b border-[#E4E7EC] text-[#647995] px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-[10px] sm:text-xs">What's included: </span>
              <span className="text-[10px] sm:text-xs ml-2">{activity.included}</span>
              <button className="text-blue-600 text-[10px] sm:text-xs ml-2 cursor-pointer">See more</button>
            </div>
            <div className="flex flex-col sm:flex-row text-[10px] sm:text-xs gap-2 sm:gap-3 font-medium">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <CalendarIcon className="w-3 h-3 sm:h-4 text-[#475367] mr-1" />
                <span className="text-[#676E7E]">Day: {activity.day}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end px-4 sm:px-6 pt-3">
            <div className="flex space-x-4 mb-2 sm:mb-0">
              <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
                Activity details
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
                Price details
              </button>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-[10px] sm:text-xs font-medium">
              Edit details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="h-full bg-[#FBEAE9] cursor-pointer grid place-content-center rounded-r-[4px]">
      <button onClick={() => onRemove(activity.id)} className="cursor-pointer">
        <XIcon className="w-3 h-3 text-[#9E0A05] cursor-pointer" />
      </button>
    </div>
  </div>
);