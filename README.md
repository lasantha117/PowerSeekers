* Frontend
- Framework **Angular**
- **SCSS**

* Backend
    - Serveur **Node.JS** and Framework **Express**
    - Packages: Multer, JsonWebTokens, uuid, helmet, nodemon, dotenv, keyv & bcryp
    - Database **PostgreSQL**

### 🔍 Frontend

This project was generated with Angular CLI version.

- `cd ./Frontend`
- `npm install`
- Run `ng serve` for a dev server. Navigate to http://localhost:4200/ . The app will automatically reload if you change any of the source files.

### 🔍 Backend
This project was generated with NodeJs

- `cd ./Backend`

#### 🚧 In dev mode :

- `npm install`
- `npm start`
  you will access to more packages (morgan, morganBody)

#### 🚀 In product mode :

- `npm install --only=prod`
- `npm run start:prod #`
  With nodemon the app will automatically reload if you change any of the source file.

After npm is done installing, set any environment variables in a .env file (in the folder Backend) , with this key :

```
# Database
DATABASE_HOST=XXX
DATABASE_USER=XXX
DATABASE_PASSWORD=XXX
DATABASE_PORT=XXX
DATABASE_NAME=XXX

# Random secret token
JWT_KEY=

# To configure module Keyv use your mysql login (to support blackList Token)
KEYV_PARAM=postgres://username:password@host:port/database

AWS_BUCKET_NAME=

```
