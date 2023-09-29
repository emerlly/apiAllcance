
const { clearParserCache } = require('mysql2/promise');
const mysql = require('mysql2/promise');
const { user } = require('../config/database');
const databaseConfig = require('../config/database')

async function CreateUser(req, res) {
    const { name, password } = req.query

    try {
        const connetion = await mysql.createConnection(databaseConfig);
        const insertUser = `INSERT INTO user (name, password)
            values(?, ?)`;
        await connetion.query(insertUser, [name, password]);
        await connetion.end();
        res.status(201).send({ message: 'sucess' })

    } catch (error) {
        res.status(500).send(
            {
                message: 'Error adding user!',
                body: error.message,
            }
        );
    }
}

async function GetAllUsers(req, res) {

    try {
        const connetion = await mysql.createConnection(databaseConfig);
        const [users] = await connetion.query('SELECT * FROM user');
        await connetion.end();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).send({
            message: 'Error getting users',
            body: error.message,
        })
    }
}

async function GetUserById(req, res) {
    const { id } = req.params;

    try {
        const connetion = await mysql.createConnection(databaseConfig);
        const [user] = await connetion.query('SELECT * FROM user WHERE id = ?', [id]);
        await connetion.end();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: 'Error updating user',
            body: error.message,
        })

    }
}

async function UpdateUser(req, res) {
    const { name, password } = req.query;
    const {id} = req.params;

    try {
        const connetion = await mysql.createConnection(databaseConfig);
        await connetion.query('UPDATE user SET NAME = ?, password = ? WHERE ID = ?', [name, password, id]);
        await connetion.end();
        res.status(200).json("user updated");

    } catch (error) {
        res.status(500).send({
            message: 'Error getting ID user',
            body: error.message,
        })
    }
}

async function DeleteUser(){
    const { id } = req.query;

    try {
        const connetion = mysql.createConnection(databaseConfig);
        await connetion.put('DELETE FROM user WHERE id = ?', [id]);
        await connetion.end();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send({
            message: 'Error delete user',
            body: error.message,
        })
    }
}
module.exports = {
    CreateUser,
    GetAllUsers,
    GetUserById,
    UpdateUser,
    DeleteUser,
}