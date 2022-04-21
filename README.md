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
├── requests
│   ├── projects.http
│   └── tasks.http
├── sql
│   └── db.sql
└── src
    ├── app.js
    ├── controllers
    │   ├── project.controller.js
    │   └── task.controller.js
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   ├── Project.js
    │   └── Task.js
    └── routes
        ├── projects.routes.js
        └── tasks.routes.js

7 directories, 15 files
```
