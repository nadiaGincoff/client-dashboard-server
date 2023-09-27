import { Knex } from 'knex';
 
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('providers', (table) => {
    table.increments('id').primary();
    table.string('name', 60).notNullable().unique();
    table.string('url', 100);
    table.integer('phoneNumber');
    table.string('email', 100).notNullable();
    table.string('address', 100);
    table.timestamp('publishedAt');
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable();
  });
}
 
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('providers');
}