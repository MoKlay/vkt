import { Router } from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
  getUserEmail,
} from "../database/User.js";

const user = Router();

user.get("/", (req, res) => {
  getUsers()
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

user.post('/login', (req, res) => {
    getUserEmail(req.body.email, req.body.password).then((value) => {
        console.log(value);
        
        if (value.rows.length === 1) 
        res.send(value.rows[0])

        else res.send(null)
    }).catch((reason) => {
        res.send(reason)
    })
})

user.post("/add", (req, res) => {
  addUser(req.body)
    .then((value) => {
      if (Object.values(value.rows[0])[0] === "Пользователь успешно добавлен") {
        res.statusCode = 201;
      }
      res.send(value);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

user.post("/edit", (req, res) => {
  editUser(req.body)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

user.delete("/", (req, res) => {
  deleteUser(req.body.id)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

export default user;
