Cypress Demo Project - Sauce Labs End-to-End UI Automation
This is a demo project to showcase end-to-end UI automation using Cypress, JavaScript, and Sauce Labs. This demo will walk you through how to automate the product search, add to cart, checkout, and order placement workflow for an eCommerce platform, simulating a user journey. The automation will be run using Cypress, and we will integrate it with Sauce Labs to run tests on a cloud-based grid.

Prerequisites
Before running the tests, you need to set up the environment and install the required tools. Follow the steps below:

1. Install Node.js and npm
Make sure that Node.js and npm are installed on your system. You can download and install them from the Node.js official website.

Check the installation by running the following commands in your terminal:

bash
Copy
node -v
npm -v
2. Install Cypress
Next, install Cypress. In your project directory, run the following commands:

Initialize npm (if you haven't already):

bash
Copy
npm init -y
Install Cypress via npm:

bash
Copy
npm install cypress --save-dev
3. Install Visual Studio Code (VS Code)
Visual Studio Code is the recommended code editor for this project. Download and install it from here.

4. Set Up Sauce Labs Account
You will need a Sauce Labs account to run the tests on their cloud-based grid. Create an account at Sauce Labs if you don't have one.

Once you've signed up, get your SAUCE_USERNAME and SAUCE_ACCESS_KEY from your Sauce Labs account settings.

5. Set Up Cypress Configuration for Sauce Labs
In your project, create a cypress.json file and configure it to use Sauce Labs for running tests.

json
Copy
{
  "integrationFolder": "cypress/integration",
  "testFiles": "**/*.spec.js",
  "env": {
    "sauce_username": "your-sauce-username",
    "sauce_access_key": "your-sauce-access-key"
  },
  "video": false
}
Replace "your-sauce-username" and "your-sauce-access-key" with your actual credentials.

6. Install Sauce Labs Plugin for Cypress
To integrate Sauce Labs with Cypress, you need the Sauce Labs Cypress Plugin. Install it by running:

bash
Copy
npm install @saucelabs/cypress --save-dev
7. Create Cypress Tests
In the cypress/integration folder, create a new file named sauce-labs-demo.spec.js to write your test cases. This file will include tests for the product search, add to cart, checkout, and order placement functionality.

8. Start Sauce Labs and Configure Browser Testing
To configure your tests to run in Sauce Labs, we will need to modify our Cypress configuration file (cypress.json) to include the Sauce Labs-specific capabilities.

json
Copy
{
  "env": {
    "sauce_username": "your-sauce-username",
    "sauce_access_key": "your-sauce-access-key",
    "sauce_region": "us-west-1"
  },
  "integrationFolder": "cypress/integration",
  "testFiles": "**/*.spec.js"
}

9. Run Tests Locally
To run the tests locally in the Cypress browser, execute the following command:

bash
Copy
npx cypress open
This will open the Cypress Test Runner, where you can choose and run individual test cases in an interactive mode.

10. Run Tests on Sauce Labs
To run the tests on Sauce Labs, you can use the following command to trigger the test execution on Sauce Labs' cloud grid:

bash
Copy
npx cypress run --record --key your-sauce-access-key --parallel --ci-build-id "build-id"
Replace "build-id" with an appropriate identifier for your CI/CD pipeline or test run.

11. View Test Results on Sauce Labs
After running the tests on Sauce Labs, you can view the results on your Sauce Labs dashboard. It will show you detailed logs, screenshots, and video recordings of your test execution.

Summary
This demo project demonstrates how to use Cypress for end-to-end UI testing with Sauce Labs for running the tests on their cloud grid. The test includes common e-commerce functionality, such as logging in, searching for products, adding them to the cart, checking out, and placing an order. With Cypress and Sauce Labs, you can efficiently automate and scale UI testing for web applications.

Useful Links:
Cypress Documentation
Sauce Labs Documentation






