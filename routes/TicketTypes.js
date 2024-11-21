import { Router } from "express";
import { getTicketTypes } from "../database/TicketType.js";

const ticket_types = Router();

ticket_types.get("/", (req, res) => {
  getTicketTypes().then((value) => {
    res.send(value.rows)
  }).catch((reason) => {
    res.send(reason)
  })
})

export default ticket_types;
