import pg from 'pg';
const { Client } = pg;

import dotenv from 'dotenv';
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS products
(id SERIAL PRIMARY KEY ,
name VARCHAR(255) ,
amount INT,
category VARCHAR(255)
);

INSERT INTO products (name, amount, category) VALUES
('Supreme Angus Beef', 6, 'burger'),
('Steak Sandwiches', 23, 'burger'),
('Nugget 4-pc', 50 , 'chicken'),
('Nugget 6-pc', 32 , 'chicken'),
('Nugget 20-pc', 1 , 'chicken'),
('Spoocy ChickWing', 47 , 'chicken'),
('Soda', 29, 'drink'),
('Orange Juice', 15, 'drink'),
('Lemon Tea', 9, 'drink'),
('French Fries', 61, 'other'),
('Apple pie', 18, 'other');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    ssl: {
      sslmode: 'require',
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
