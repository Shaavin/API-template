import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // do stuff here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
