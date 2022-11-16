# Node TS Starter!

This boilerplate contains:

- Node with TypeScript
- TypeGraphQL to generate the GraphQL API
- TypeORM to generate the database schema
- A first entity and its resolver to create some users

Everything is dockerized, just install Docker on you host machine then run:

```
docker compose up --build
```

To work locally, you should install the NPM dependencies by running:

```
npm i
```

Please note that everytime you install a new NPM package, you should rerun you docker compose command.
