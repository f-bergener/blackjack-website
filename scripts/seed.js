"use strict";
const { db, User } = require("../dist/db/index");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  await User.create({
    email: "testuser@email.com",
    username: "testuser",
    password: "12345",
  });

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
