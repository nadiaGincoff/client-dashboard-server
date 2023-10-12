import prisma from '../modules/db';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
  // Add other roles as needed
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

async function getAllUsers() {
  const usersFromPrisma = await prisma.user.findMany();

  // Convert Prisma-generated Role enum to typescript enum
  const users: User[] = usersFromPrisma.map((user) => ({
    ...user,
    role: user.role as Role,
  }));

  return users;
}

export {
  getAllUsers
}