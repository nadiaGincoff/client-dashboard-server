import { PrismaClient, Provider } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllProviders() {
  const providers: Provider[] = await prisma.provider.findMany();
  return providers
}

export {
  getAllProviders
}