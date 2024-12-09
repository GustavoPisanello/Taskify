import { PrismaClient } from "@prisma/client";

//Global is excluded from hot reoad. This entire thing is here to help CPU. If a const db already exists, it doesn't run again.

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;