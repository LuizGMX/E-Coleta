import Knex from 'knex';

export async function up(Knex: Knex){
   return Knex.schema.createTable('points', table=>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitute').notNullable();
        table.decimal('latitude').notNullable();
        table.string('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
}

export async function down (Knex: Knex){
    return Knex.schema.dropTable('points');
}