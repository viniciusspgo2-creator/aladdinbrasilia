import { PrismaClient } from '@prisma/client';
const globalDb = globalThis as unknown as { prisma?: PrismaClient };
export const prisma = globalDb.prisma ?? new PrismaClient({log:['error']});
if(process.env.NODE_ENV!=='production')globalDb.prisma=prisma;
export const dbReady=Boolean(process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('USER:PASSWORD'));
