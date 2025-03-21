# Project name: Mediquick
## An online medicine shop
## Live server link: https://mediquick-client.vercel.app

## Admin login credentials : "email": "admin@mediquick.com",     "password": "admin123",

## Technology used:
* Node.js
* Express.js
* Mongoose
* NextJs
* Redux
* TypeScript
* tailwindcss
* shadcn/ui


In addition to those I installed -
* eslint - to check and fix code errors.
* prettier - to format code to have better look.
* ts-node-dev - to run the server every time the code is updated


## The project has a database named blog-project and has two collections - blogs and users.




## How it works:

The project has frontend and backend

1. Any one can visit the website and go through the medicine listings and check detail page.
2. If any user wants to buy a medicine he/she needs to login first if registered already. if not registered then he/she needs to register first and then login to buy. 
3. Once the order is placed he/she will be diverted to cart page and then with all the medicines cost he/she can proceed to checkout page where he/she can pay by card through stripe.
4. Before payment, user must input the city, address and prescription link if required.
5. After login customer will be diverted to profile page where he/she can see her profile. he/she can update his/her profile by update profile button
6. Customer can see his/her order details in order page.
7. Admin will see his dashboard link in navbar after login (not visible with customer login) and he will see the summery of the business as total order, total revenue and medicine stock details.
8. Admin can see all the users, can see their order history.
9. Admin can see all the orders placed. can update order status.
10. Admin can create medicine data and update medicine data and delete any order.



