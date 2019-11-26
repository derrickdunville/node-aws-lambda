// import { Pool } from 'pg';
import { Tenant } from './models/Tenant';

export const hello =  async function(event, context) {

  console.log("EVENT: ");
  console.dir(event);
  console.log("CONTEXT: ");
  console.dir(context);

  // Find all users
  try {
    const users = await Tenant.findAll();
    console.log("All users:", JSON.stringify(users, null, 4));
    return {
      statusCode: 200,
      body: JSON.stringify(users)
    };
  } catch (error) {
    return {
      statusCode: 501,
      body: JSON.stringify({
        error: error.stack
      })
    };
  }
};