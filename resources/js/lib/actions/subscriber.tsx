import { http } from "../http-client";

export async function getSubscribers() {
    const response = await http.get("/subscribers");
    console.log(response.data);
}