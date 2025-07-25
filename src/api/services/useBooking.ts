// src/hooks/useCarRentals.ts
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../requestProcessor";

interface CarRentalQueryParams {
  pick_up_latitude: number;
  pick_up_longitude: number;
  drop_off_latitude: number;
  drop_off_longitude: number;
  pick_up_date: string;
  drop_off_date: string;
  pick_up_time: string;
  drop_off_time: string;
  driver_age: number;
  currency_code?: string;
  location?: string;
}

export function useCarRentals(params: CarRentalQueryParams) {
  const {
    pick_up_latitude,
    pick_up_longitude,
    drop_off_latitude,
    drop_off_longitude,
    pick_up_date,
    drop_off_date,
    pick_up_time,
    drop_off_time,
    driver_age,
    currency_code = "USD",
    location = "US",
  } = params;

  const url = `/api/v1/cars/searchCarRentals?` +
    `pick_up_latitude=${pick_up_latitude}` +
    `&pick_up_longitude=${pick_up_longitude}` +
    `&drop_off_latitude=${drop_off_latitude}` +
    `&drop_off_longitude=${drop_off_longitude}` +
    `&pick_up_date=${pick_up_date}` +
    `&drop_off_date=${drop_off_date}` +
    `&pick_up_time=${encodeURIComponent(pick_up_time)}` +
    `&drop_off_time=${encodeURIComponent(drop_off_time)}` +
    `&driver_age=${driver_age}` +
    `&currency_code=${currency_code}` +
    `&location=${location}`;

  return useQuery({
    queryKey: ["carRentals", params],
    queryFn: () =>
      getRequest({
        url,
        config: {
          headers: {
            "x-rapidapi-host": "booking-com15.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          },
        },
      }).then((res) => res.data),
    enabled: !!pick_up_date && !!drop_off_date,
  });
}
