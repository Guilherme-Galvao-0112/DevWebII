import Lowdb from 'lowdb';
import { JSONFilePreset } from 'lowdb/node';

// Read or create db.json
const defaultData = { Usuarios: [] };
const db = await JSONFilePreset('db.json', defaultData);


const { Usuarios } = db.data
const first = Usuarios.at(0)
const results = Usuarios.find((palavra) => Usuarios.id==1)


await db.write();
module.exports = Lowdb;