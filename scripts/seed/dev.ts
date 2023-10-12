import prisma from '../../src/modules/db';

const run = async () => {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'nadia gincoff',
        password: '123456789',
        email: 'nadia.gincoff@gmail.com',
        role: 'ADMIN',
      },
      {
        id: 2,
        name: 'Got Just',
        password: '123456789',
        email: 'got-just@gmail.com',
        role: 'ADMIN',
      },
    ]
  })
}

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log(`Data seed complete`);
    process.exit()
  })
}