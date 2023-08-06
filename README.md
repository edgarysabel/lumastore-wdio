# Lumastore WebdriverIO.

This is an automation framework designed to test the website (UI Test) [https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com/).

## Tech Stack
- [Node.js](https://nodejs.org/en/download/)
- [WebDriverIO](https://webdriver.io/)
- [Allure Report](https://qameta.io/allure-report/)

### UI testing

The test cases have been documented in platform [qatouch.com](https://www.qatouch.com/). To access the test suite, can reach me at:
edgarysabel@gmail.com. These were the scenerios documented as well as automated:

## URL

https://magento.softwaretestingboard.com/

### UI testing

    1. Sign up.✅

    2. Add item to shopping cart.✅

    3. Search Item.✅

    4. Subscribe to newsletter.

    5. Logout.

    6. Checkout.

    7. Delete item from shopping cart.

    8. Verify My Orders.

    9. Contact Us.

    10. Shop From Hot Sellers.

    11. Advance Search.

    12. Verify Customer Service Page

    13. Popular Search Terms

    14. Shop From Women Section

    15. Shop From Men Section

    16. Verify Deals Section

    17. Orders And Returns

    18. Shop Eco Friendly

    19. Add your Review

    20. Add To WishList

    21. Add Address

## Run Locally

#### Required to run project

- [Node.js](https://nodejs.org/en/download/)

##

- Clone repository:

```bash
  git clone https://github.com/edgarysabel/lumastore-wdio.git
```

- Install dependencies:

```bash
  npm install
```

- Run project in headless mode:
```bash
  npm run wdio:pipeline
```

- Run project in headed/local mode:

```bash
  npm run wdio:local
```

This will run all the tests and generate a report at the end of the execution.

## Run CI

CI has been configured with Github Actions for ease of use and integration since project is already hosted on Github. To run it just go to actions and run the workflow `Allure-report` under your preferred Branch. Aditionally, pipeline always run whenever there is a new commit.

Note: To be able to do commits or run workflows please reach me at edgarysabel@gmail.com.

#### Test Reports

Test report have been done with Allure Report and stored with GitHub Pages, so pipeline is run, the reports are generated along it. To access reports go to [https://edgarysabel.github.io/lumastore-wdio](https://edgarysabel.github.io/lumastore-wdio/). Through this page one will have access to all previous automation runs and it can be selected which one we want to see so we can compare the latest to the previous executions.

## Project Structure

#### UI testing configuration

The file wdio.shared.conf under config in the directory contains needed capabilities and general configuration for the project. There are 3 files under this section. It has wdio.shared.conf which serve as a common configuration file for local and pipeline configuration files which uses different capabilities.

Every capabilitie can be changed to fit the current needs of testing. i.e: every test case can be changed in the needed configuration file modifying the specs field:

```bash
  (config.specs = ["../test/specs/TC-001.**"]),
```

## Must Know

- A custom POM Pattern with Javascript and Cypress was used.

- The static data is stored on `utils/data` for each test case.

- The website [automationpractice.com](http://automationpractice.com/index.php) has loading issues and can make tests fail.