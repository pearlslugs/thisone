exports.up = function (knex) {
  return knex.schema
    .createTable("accounts", function (table) {
      table.increments().primary();
      table.integer("user_id").index().notNullable();
      table.string("provider_type").notNullable();
      table.string("provider_id").index().notNullable();
      table.string("provider_account_id").index().notNullable();
      table.string("compound_id").unique().notNullable();
      table.text("refresh_token");
      table.text("access_token");
      table.timestamp("access_token_expires");
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    })
    .createTable("sessions", function (table) {
      table.increments().primary();
      table.integer("user_id").notNullable();
      table.timestamp("expires").notNullable();
      table.string("session_token").unique().notNullable();
      table.string("access_token").unique().notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    })
    .createTable("users", function (table) {
      table.increments().primary();
      table.string("name");
      table.string("email").unique();
      table.timestamp("email_verified");
      table.string("image");
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    })
    .createTable("verification_requests", function (table) {
      table.increments().primary();
      table.string("identifier").notNullable();
      table.string("token").unique().notNullable();
      table.timestamp("expires").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    })
    .createTable("client_content", function (table) {
      table.increments().primary();
      table.string("client_email").unsigned().notNullable();
      table.json("content").notNullable();

      table.foreign("client_email").references("email").inTable("users");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("accounts")
    .dropTable("sessions")
    .dropTable("users")
    .dropTable("verification_requests")
    .dropTable("client_content");
};
