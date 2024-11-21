import { client } from "./db.js";



export async function addUser(user = {
    firstname,
    lastname,
    email,
    password,
    role
}){
    return await client.query('Select add_user($1,$2,$3,$4,$5)', Object.values(user))
}


export async function editUser(user = {
    id,
    firstname,
    lastname,
    email,
    password,
    role
}) {
    return await client.query(`Select update_user($1,$2,$3,$4,$5,$6)`, Object.values(user))
}

export async function deleteUser(id) {
    return await client.query(`Select delete_user(${id})`)
}

export async function getUsers() {
    return await client.query('Select * from users')
}

export async function getUserEmail(email, password) {
    return await client.query(`Select * from users where email = '${email}' and password = '${password}'`)
}



