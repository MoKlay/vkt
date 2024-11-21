import { Router } from "express";
import { addTicket } from "../database/Tickets.js";

const ticket = Router();

ticket.post('/add', (req, res) => {
  addTicket(req.body).then((value) => {  
    res.send(value.rows[0].add_ticket)
  })
})
export default ticket;