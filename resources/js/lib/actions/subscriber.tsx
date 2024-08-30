import { http } from "../http-client";

export async function getSubscribers() {
    return (await http.get(route("frontend.subscribers.index")));
}
