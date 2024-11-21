import { Router } from "express";
import user from "./User.js";
import ticket_types from "./TicketTypes.js";
import ticket from "./Ticket.js";

const api = Router();

api.use('/user', user);
api.use('/type_ticket', ticket_types);
api.use('/tickets', ticket);

export default api;
