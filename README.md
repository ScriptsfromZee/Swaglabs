
# Swaglabs-Demo
Swag Labs, also known as Sauce Labs, is a web application designed for testing and showcasing e-commerce functionality. Here are some key details about the site:

## Overview
Purpose: The site serves as a demo for users to interact with a simulated e-commerce environment, allowing for testing of various features like product selection, cart management and checkout processes.

User Interface: The interface is straightforward and user-friendly, featuring a grid layout of products with images, descriptions, prices and an "Add to Cart" button.

## Key Features
Product Listings: Users can view a variety of products available for purchase, each with relevant details such as name, price and description.

Shopping Cart: The application allows users to add products to their shopping cart and view the cart contents.

User Authentication: The site includes a login feature, enabling users to access their accounts and manage their shopping experience.

## Functionality
Adding to Cart: Users can click on the "Add to Cart" button for each product to include it in their shopping cart even though one item of each product can be added 

Removing from Cart: Items can also be removed from the cart, allowing users to manage their selections easily.

Checkout Process: The site simulates the checkout process, providing a realistic experience for testing purposes.
 
## Testing and Development
Automation and Testing: Swag Labs is often used in automated testing scenarios, particularly with tools like Cypress or Selenium, to validate e-commerce functionalities.

The scripts present here were written using Cypress. 

## Prerequisites
Have an IDE installed on your computer to be able to view the code locally.

Have a good working knowledge of Git and Github and well as JavaScript.

Have a browser installed on your computer.

## Setup
Open a command line terminal (Git bash preferably) and navigate to a directory where you would like to save the work folder using cd.

Clone the repository with git clone https://github.com/ScriptsfromZee/Swaglabs-Demo-

Once you are done cloning, you should navigate to the folder you cloned.

You should type: "cd Swaglabs-Demo-"

This command will move you into that directory.

To get the current working tree, git fetch --all, then checkout to "main" branch.

Finally, run the test scripts within the e2e folder by doing the following:

Navigate to the root directory with a command line terminal.

Run npm install, this install all the project dependencies.

If you have Chrome installed run npm run cy-chrome or npm run cy-firefox if you have Firefox installed to start the test.

