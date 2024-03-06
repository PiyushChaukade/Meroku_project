# Packages Required

1. JSON web token: Used for generating and verifying JSON Web Tokens (JWT).

2. express: Popular web framework for Node.js used for building web applications and APIs.

3. bcryptjs or bcrypt: Used for hashing passwords before storing them in the database.

4. dotenv: Used for loading environment variables from a .env file into process.env.

5. body-parser: Middleware for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.

6. cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.

7. mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

8. jsonwebtoken: JSON Web Token (JWT) implementation for Node.js.

# Use Postman for testing the Endpoint

  - [postman](https://web.postman.co/workspace/My-Workspace~89b7c15c-0c0b-4db3-8836-4454373cf629/request/create?requestId=7d39237e-5df3-4533-8f74-57e389f21211) 

# Running the app

node app.py
go to the browser and type (i.e (http://localhost:5000/Report))

![image](https://github.com/PiyushChaukade/Meroku_project/assets/93372962/902891a7-b1f3-42eb-ae45-794e52adc405)

**Oops you don't have Permission**

#  Login and get the JWT Token First

  - Utilize the POST method with the endpoint http://localhost:5000/login.

  - Within the <b>Body</b> section, select the <b>raw</b> format and choose <b>JSON</b>.

  - Input the username as test@123 and the password as 12345:

  - {"username":"test@123","password":"12345"}

  - Click on send,copy the response JWT Token

   ![image](https://github.com/PiyushChaukade/Meroku_project/assets/93372962/9a530d1a-16ae-404b-899b-f18d1a665e95)

# GET REPORT DATA

  - Access the endpoint http://localhost:5000/Report using the GET method.

  - Within the <b>Headers</b> section, include the key as <b>Authorization</b> and the value as the <b>Copied JWT token</b>.
    - If <b>Token is invalid!</b>, please login in again with same cred.

   ![image](https://github.com/PiyushChaukade/Meroku_project/assets/93372962/7c190b97-1b04-4f09-8573-3c3dfb85e324)


  - Proceed by clicking on Send, which will result in a response displaying Report Data in postman.

   ![image](https://github.com/PiyushChaukade/Meroku_project/assets/93372962/1ff8f092-5d71-4203-bd85-79e7cdf06c12)

# NOTED 

- The data we are fetching originates from Supabase, where I have been pushing data from [alchemy.com](https://www.alchemy.com/) for the last 1000 transactions.


