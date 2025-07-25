import React, { useEffect } from 'react';
import { useCarRentals } from '../../api/services/useBooking';
import { useSearch } from '../../context';
import { toast } from 'sonner';

export const SearchPage = () => {
  const { searchTerm } = useSearch();
  const { data, isLoading, error } = useCarRentals({
    pick_up_latitude: 40.6397,
    pick_up_longitude: -73.7791,
    drop_off_latitude: 40.6397,
    drop_off_longitude: -73.7791,
    pick_up_date: '2025-08-01',
    drop_off_date: '2025-08-03',
    pick_up_time: '10:00',
    drop_off_time: '10:00',
    driver_age: 30,
  });

  // Filter results based on search term
  const filteredResults = searchTerm
    ? data?.data?.search_results?.filter(
      (result: any) =>
        result.vehicle_info.v_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.supplier_info.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []
    : data?.data?.search_results || [];

  useEffect(() => {
    if (error) {
      toast.error(error.message ? error.message : 'Error Fetching Search Results')
    }
  }, [searchTerm])

  return (
    <div className="p-7 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && filteredResults.length === 0 && (
        <p className="text-gray-500">No results found for "{searchTerm}"</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((result: any) => (
          <div
            key={result.vehicle_id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={result.vehicle_info.image_url}
              alt={result.vehicle_info.v_name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{result.vehicle_info.v_name}</h2>
            <p className="text-sm text-gray-600">{result.supplier_info.name}</p>
            <p className="text-sm text-gray-600">
              {result.vehicle_info.group} ({result.vehicle_info.group_or_similar})
            </p>
            <p className="text-sm text-gray-600">
              Price: {result.pricing_info.price} {result.pricing_info.currency}
            </p>
            <p className="text-sm text-gray-600">Seats: {result.vehicle_info.seats}</p>
            <p className="text-sm text-gray-600">Transmission: {result.vehicle_info.transmission}</p>
            <p className="text-sm text-gray-600">Mileage: {result.vehicle_info.mileage}</p>
            <p className="text-sm text-gray-600">
              Supplier Rating: {result.rating_info.average} ({result.rating_info.average_text})
            </p>
            <p className="text-sm text-gray-600">Location: {result.route_info.pickup.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};