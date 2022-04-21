# New Field Notebook Api

This is a the new version of the field notebook api and its works with this stack 
- nodejs
- express
- postgreSQL
- sequelize

## Future Changes

In future commit we add this api to a docker file to put in a docker container a run it

## Project Structure

```bash
.
├── package.json
└── src
    ├── app.jsz
    ├── controllers
    │   ├── deleteControllers.js
    │   ├── getControllers.js
    │   └── postControllers.js
    │
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   └── models.js
    │  
    └── routes
        ├── deleteRoutes.js
        ├── getRoutes.js
        └── postRoutes.js

```
