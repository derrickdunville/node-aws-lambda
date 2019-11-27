import { hello } from '../handler';
import { db } from "../db";

test('hello', async() => {
  const event = 'event';
  const context = 'context';
  const users = await hello(event, context);
  expect(users.body).not.toBe({});
});

test('database connection', async() => {
  return db.authenticate().then(() => {
    expect(1).toBe(1);
    // We need to close the connection when the test is complete so jest doesn't hang.
    db.close();
  }).catch(error => {
    console.log(error.stack);
    expect(0).toBe(1);
    db.close();
  });
});

