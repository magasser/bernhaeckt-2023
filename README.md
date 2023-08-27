# bernhaeckt-2023

## Infrastructure
Start the needed infrastructure in the docker directory with the following command:
```bash
$ docker compose up
```

## Backend
### Docker
Build backend with docker using the following command:
```bash
$ cd backend
$ docker build -t backend .
```
After this step you have just created the docker image but not started anything.

With this step you can start the container. Run this docker command:
```bash
$ docker run -p 1337:1337 --env HOST=host.docker.internal  --name backend -d -it backend
```

### Maven
Build the Project with maven on your machine.

```bash
$ mvn clean install
```

The application will be available here --> http://localhost:1337

## Swagger
The swagger for the backend calls is available here --> http://localhost:1337/swagger-ui/index.html

## Frontend
To start the Frontend Project just run.

```bash
$ ng serve
```
or
```bash
$ npm run start
```

The application will be available here --> http://localhost:4200

## Database
The database will be created by flyway and is available after the startup of the backend.
All needed tables and views will be generated in the correct order.

To change anything directly on the database to the following steps:

```bash
# Connect to the docker container directly
$ docker exec -it database bash

# Change the user to the postgres
$ su postgres

# Open the postgres console
$ psql
```