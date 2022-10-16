import axios, { AxiosResponse } from "axios";
import { API_URL } from "../api/apiDisease";

export const get = async <T>(query: string): Promise<AxiosResponse<T>> =>
  axios.get(`${API_URL}${query}`);
