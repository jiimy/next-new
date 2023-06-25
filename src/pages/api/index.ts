import { ROOT_API } from "@/constants/api";
import axios from "axios";

export async function getTodoList() {
  const { data } = await axios.get(`${ROOT_API}/todos`);
  return data;
}

export async function getTodoItem(id: any) {
  const { data } = await axios.get(`${ROOT_API}/todos/${id}`);
  return data;
}
