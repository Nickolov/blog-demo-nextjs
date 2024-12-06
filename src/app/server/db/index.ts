
import postgres from 'postgres'
import process from 'node:process';

const db = postgres( (process.env.DB_CONN_STR as string));

export default db;