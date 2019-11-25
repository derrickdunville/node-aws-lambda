import { Pool } from 'pg';

export const hello =  async function(event, context) {

  console.log("EVENT: ");
  console.dir(event);
  console.log("CONTEXT: ");
  console.dir(context);

  const pool = new Pool({
    user: 'postgres',
    host: 'database-2.cmoyznpl1emx.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
  });

  let rows = null;
  let error = null;

  await pool.connect().then(client => {
    return client.query('SELECT * FROM tenant').then(res => {
      client.release();
      rows = res.rows;
      console.log(res.rows);
    }).catch(e => {
      client.release();
      error = e;
      console.log(e.stack);
    });
  });

  if(!error){
    return {
      statusCode: 200,
      body: JSON.stringify({
        rows: rows
      })
    };
  } else {
    return error.stack;
  }
};