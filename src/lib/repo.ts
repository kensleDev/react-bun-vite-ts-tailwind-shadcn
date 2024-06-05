import axios from "axios";
import { Message } from "./types";

export async function fetchMessages(): Promise<Message[]> {
  return await axios
    .get<Message[]>("http://localhost:3000/messages")
    .then((res) => res.data);
}
