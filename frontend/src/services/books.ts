import api from "./api";
import { AxiosResponse } from "axios";

export const getBooksByQuery = (query: string): Promise<AxiosResponse> =>
  api.get(`/books?q=${query}`);
