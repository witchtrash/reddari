# reddari

Website for aspirational alcoholics.

### Dev

For local development, you need Docker and Docker Compose.

1. Start the local database and pgAdmin with `docker compose up -d`

You can access pgAdmin at `localhost:8888`, with the email `root@example.com` and password `hunter2`
Register the database under Servers, use `reddari-db` as the hostname and `postgres` as the username and password.

### Migrations

Migrations are done with Prisma, and follows a code-first approach.

1. Make updates to the `prisma.schema`
2. Generate a migration with `prisma migrate dev`

### Typesense

A Typesense container is also contained within the Docker compose file. You will need to create a search-only API key, used in the frontend.

See https://typesense.org/docs/0.25.2/api/api-keys.html#create-an-api-key

After generating the key, add it to your `.env.local`
