import { get } from "../requests/requests";
import { Country } from "../../interfaces/Country";

export const getCountries = async () => {
  const { data } = await get<Country[]>("/countries");
  return data;
};

export const getCountry = async (id: string) => {
  const { data } = await get<Country>(`/countries/${id}`);
  return data;
};
