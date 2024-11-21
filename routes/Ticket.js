import { Router } from "express";
import { addTicket } from "../database/Tickets.js";

const ticket = Router();

ticket.post('/add', (req, res) => {
  console.log(req.body);
  
  addTicket(req.body).then((value) => {
    res.status(200).send(value.rows[0].add_ticket)
  })
})
export default ticket;