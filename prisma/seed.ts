import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // seeding logic
}

main().catch(e => console.error(e)).finally(async () => {
  await prisma.$disconnect();
});