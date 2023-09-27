import db from '../../src/modules/db';

const run = async () => {
  await db.provider.createMany({
    data: [
      {
        id: 1,
        name: 'nadia gincoff',
        url: 'nadia-gincoff',
        phoneNumber: 23232323,
        email: 'nadia.gincoff@gmail.com',
        address: 'Calle falsa 123'
      },
      {
        id: 2,
        name: 'Got Just',
        url: 'got-just',
        phoneNumber: 23232323,
        email: 'got-just@gmail.com',
        address: 'Calle falsa 123'
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