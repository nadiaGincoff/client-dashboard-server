import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 60).notNullable;
    table.string('password', 16).notNullable;
    table.string('email', 100).unique().notNullable();
    table.enum('role', ['USER', 'ADMIN']).notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable();
  });
}
 
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}