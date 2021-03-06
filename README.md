### Demo
Please visit: **[Demo](https://agis.group/medisante)**

### Requirements
- Golang 1.10+
- NPM 5.3.0+

### Quick Overview
Clone repository to your computer:
```
git clone https://github.com/evgeniybutenko/medisante.git
```
Go to **./files/www/app/** and run following code to install all javascript dependencies. It can take few minutes.
```
npm install
```
After all dependencies will be installed, project should be compiled. To compile the project run following code: 
```
npm run-script build
```
After script will finished folder **./files/www/app/build/** should be created. This folder contain compiled and compressed React application. 

Now project is ready to run. Open **./**(root) folder and run command:
```
go run main/main.go
```
Application will be served on port **3031**. To see index page, please open in your browser following link:
```
localhost:3031/medisante
```

### License
This project is licensed under the Apache License 2.0
