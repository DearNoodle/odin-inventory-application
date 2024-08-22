import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export default new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST, // or wherever the db is hosted
  port: process.env.PGPORT, // The default port
  database: process.env.PGDATABASE,
});
