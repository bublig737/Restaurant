## Restaurant

#### Please do all follow steps before run the project:

1. At first you need to power mySQL server, for example you can use XAMPP on localhost(like me) or something else.
Make sure that credentials of your mySQL server is much with credentials in file ```src/config/sequelize.js```

2. After step one, in terminal go to the root folder of project and execute the commands as follow:

    ```npm install``` (for build node_modules package)
    
    ```npx sequelize-cli db:migrate``` (running migrations to the database for creating tables)
    
    ```npx sequelize-cli db:seed:all``` (making test data in database)

3. Now you can run project by ```npm start``` command.
You can use ```Postman collection``` that in the root folder for comfortable testing project.