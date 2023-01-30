module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'geria_strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '!Pass123'),
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    debug: true,
    acquireConnectionTimeout: 1000000,
  },
});
