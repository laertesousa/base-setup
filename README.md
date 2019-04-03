# Base Setup
Monolithic web application setup with Node.js, MongoDB, Next.js and React

# Environment Variables
## Database
```
NODE_ENV=[development|production]
DB_URL=mongodb://localhost:27017/[replace-with-application-name]
DB_USER=[db-username]
DB_PASSWORD=[db-password]
DOMAIN_NAME=[full-base-domain] (only set this env variable in production)
```
#Test
# Database
MongoDB is used as our source of truth database.
## Getting a fresh copy
#### `Pre-requisite: Install mongo cli, and MongoDB database engine`
#### `Set mongo binary to system path`
#### `Install Unix Make utility`

# Following command are available at root level of project
## Getting data from production
>make get-data

## Restoring development database
>make restore
