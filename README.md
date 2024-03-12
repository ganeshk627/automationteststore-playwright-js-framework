# automationteststore-playwright-js-framework


# 01. To Clone the project

    git clone https://github.com/ganeshk627/automationteststore-playwright-js-framework.git


# 02. To Install Packages, use below command

```bash
npm install
```
    
#### Outcome:- 'node_modules' folder should be created

# 03. To Run Tests in Microsoft Azure only against chrome

```bash
npx playwright test --headed --project=chrome --workers=20 --config=playwright.service.config.js
```