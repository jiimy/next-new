import { ROOT_API } from "@/constants/api";
import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: `${ROOT_API}`,
  headers: {
    "Content-type": "application/json",
  },
});

type Tutorial = {
  title: string;
};

const get = async () => {
  // const { data } = await axios.get(`${ROOT_API}/todos`);
  // return data;

  const response = await apiClient.get<Tutorial[]>("/todos");
  return response.data;
};

// export async function getTodoItem(id: any) {
//   const { data } = await axios.get(`${ROOT_API}/todos/${id}`);
//   return data;
// }

const getTodoItem = async (id: any) => {
  const response = await apiClient.get<Tutorial>(`/todos/${id}`);
  return response.data;
};

const create = async ({ title }: Tutorial) => {
  const response = await apiClient.post<any>("/tutorials", { title });
  return response.data;
};

const TutorialService = {
  create,
  getTodoItem,
  get,
};

export default TutorialService;
