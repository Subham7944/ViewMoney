import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//globalThis.prisma: This global variable ensures that the Prisma client
// instance is resued across hot reloads during development. Without this,
// each time your application reloads, a new instance of the Prisma client
//would be created potantially leading to connections issues.
