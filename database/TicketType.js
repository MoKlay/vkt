import { client } from "./db.js";

export function getTicketTypes() {
  return client.query("SELECT * FROM ticket_types");
}