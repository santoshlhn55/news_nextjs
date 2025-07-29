// path: ./config/database.js
// Strapi PostgreSQL Database Configuration

const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const connectionString = env('DATABASE_URL');
  const config = connectionString ? parse(connectionString) : {};

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', config.host || '127.0.0.1'), // Fallback to config.host from DATABASE_URL or localhost
        port: env.int('DATABASE_PORT', config.port || 5432), // Fallback to config.port from DATABASE_URL or 5432
        database: env('DATABASE_NAME', config.database || 'strapi'), // Fallback to config.database from DATABASE_URL or 'strapi'
        user: env('DATABASE_USERNAME', config.user || 'strapi'), // Fallback to config.user from DATABASE_URL or 'strapi'
        password: env('DATABASE_PASSWORD', config.password || 'strapi'), // Fallback to config.password from DATABASE_URL or 'strapi'
        ssl: env.bool('DATABASE_SSL', false), // Set to true if your database requires SSL (Coolify might add this later)
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
      debug: env.bool('DATABASE_DEBUG', false),
    },
  };
};

/*
######################################
Why this change?

client: 'postgres': Explicitly tells Strapi to use PostgreSQL.

require('pg-connection-string'): This library helps parse a single DATABASE_URL environment variable, 
which is a common and convenient way to provide database connection details. We will use this in Coolify.

env(...): Strapi's built-in utility to read environment variables. This is crucial for Coolify, 
as you'll set these variables directly in Coolify's interface.

ssl: env.bool('DATABASE_SSL', false): By default, we're setting SSL to false unless DATABASE_SSL 
is explicitly set to true in environment variables. For a local PostgreSQL instance on your VPS, 
SSL might not be enabled by default. Coolify might add an SSL proxy or require it for external 
databases, but we'll start with false for now for simplicity.

######################################
Environment Variables for Coolify:

DATABASE_URL=postgresql://username:password@host:port/database
DATABASE_HOST=your-postgres-host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-secure-password
DATABASE_SSL=false
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
DATABASE_DEBUG=false

######################################
Installation Requirements:

npm install pg-connection-string

######################################
Coolify Configuration:

1. In Coolify dashboard, go to your Strapi application
2. Add these environment variables:
   - DATABASE_URL (if using connection string)
   - DATABASE_HOST
   - DATABASE_PORT
   - DATABASE_NAME
   - DATABASE_USERNAME
   - DATABASE_PASSWORD
   - DATABASE_SSL (set to true if required)
   - DATABASE_POOL_MIN
   - DATABASE_POOL_MAX
   - DATABASE_DEBUG

3. For local development, create a .env file:
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=strapi
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your-password
   DATABASE_SSL=false

######################################
Troubleshooting:

1. Connection Issues:
   - Check if PostgreSQL is running
   - Verify host and port
   - Check firewall settings
   - Verify username and password

2. SSL Issues:
   - Set DATABASE_SSL=true if required
   - Check SSL certificate configuration

3. Pool Issues:
   - Adjust DATABASE_POOL_MIN and DATABASE_POOL_MAX
   - Monitor connection usage

4. Debug Mode:
   - Set DATABASE_DEBUG=true for detailed logs
   - Check Strapi logs for connection details

######################################
*/ 