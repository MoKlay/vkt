import { client } from "./db.js";

export function addTicket(ticket ={
  user_id,
  type_id,
  description
}) { 
  return client.query('Select add_ticket($1,$2,$3)', Object.values(ticket))
}