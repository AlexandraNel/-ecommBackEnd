
# Ecomm Back End
![License Badge](license-badge.svg)
        
## Description

**Motivation:** With the unquestionable popularity of ecommerce, it is vital that an ecomm website run an efficient back end for their products. In order to remain competitive this Eccom Back End was created. 

**The Why:** In order to manage stock, accurately catgeories and tag items within a database, a functional back end was created. 

**Problem Solved:** This solved the problem of having to manually keep track of each individual item of stock. The database can be updated, items can be created, edited and deleted to maintain a dynamic warehouse of products. 

**Lessons:** With this project I learned about creating routes, models, sequelize and sql integration. 


## Table of Contents

> 1. Technologies 

> 2. Installation 

> 3. Usage 

> 4. Roadmap 

> 5. Support 

> 6. License 

## Technologies

- VS Code
- Github
- MYSQL2
- Sequelize
- Nodemon
- Insomnia
- node
- express

## Installation

Open in VS Code. Open integrated terminal on db>schema. in integrated terminal navigate into mysql -u root - p (making sure you have a dot.env completed with your DB_NAME, DB_USER and DB_PASSWORD details). Once inside mysql, type in SOURCE schema.sql. This will initialise your database. Type exit to exit my sql. Open a new terminal by right clicking seeds>index.js. Within the terminal type npm run seed. This will seed your database. Again (for ease of relative pathways) open a new terminal by right clicking server.js and choosing integrated terminal. Here we can initialise our dependencies by writing npm i. This will install dependencies. Now with nodemon  installed we can type nodemon server. This will open our server at localhost:3001

## Usage

This application can be tested and utilised using insomnia. You can update, delete and create routes via the insomnia app.
[Please see functionality of routes here] (https://drive.google.com/file/d/1G2WKdD9WkmCaG9uLY-ojWfY1l4WkY_o6/view?usp=sharing)

## Roadmap

Adding a front end to integrate the back end functionality will allow us to access the functionality without use of insomnia

## Support

Alexandra Nel. https://github.com/AlexandraNel
Chat GPT
Monash University Coding Bootcamp Tutors, Lecturers and TA

## Credits

[Alexandra Nel] (https://github.com/AlexandraNel)

## License
        
MIT License


