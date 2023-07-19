import { ROOT_API } from "@/constants/api";
import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: `${ROOT_API}`,
  headers: {
    "Content-type": "application/json",
  },
});
const api = {
  key: "55ee5df9f691b5fa1c36dcd225e43fd3",
  base: "https://api.openweathermap.org/data/2.5/",
};
const city = "Seoul";
const url = `${api.base}weather?q=${city}&appid=${api.key}`;

type TodoState = {
  title: string;
  completed?: boolean;
};

const get = async () => {
  // const { data } = await axios.get(`${ROOT_API}/todos`);
  // return data;
  const response = await apiClient.get<TodoState[]>("/todos");
  return response.data;
};


const getWeather = async () => {
  // const { data } = await axios.get(`${ROOT_API}/todos`);
  // return data;
  const response = await apiClient.get(url);
  return response.data;
};

// export async function getTodoItem(id: any) {
//   const { data } = await axios.get(`${ROOT_API}/todos/${id}`);
//   return data;
// }

const getTodoItem = async (id: any) => {
  const response = await apiClient.get<TodoState>(`/todos/${id}`);
  return response.data;
};

const create = async ({ title }: TodoState) => {
  const response = await apiClient.post<any>("/todos", { title });
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/todos/${id}`);
  return response.data;
};

const update = async (id: any, { title, completed }: TodoState) => {
  const response = await apiClient.put<any>(`/todos/${id}`, { title, completed });
  return response.data;
};

const TutorialService = {
  create,
  getTodoItem,
  get,
  getWeather,
  deleteById,
  update
};

export default TutorialService;
