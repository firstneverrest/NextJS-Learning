# Next.js
Next.js is a React framework which provides a solution for React project like server-side rendering.

## Key features & Benefits
1. file-based routing - define pages and routes with files and folders instead of code which is less code, less work and highly understandable
2. server-side rendering - automatic page pre-rendering which great for SEO and initial load
3. Fullstack capabilities - easily add backend code to your Next/React apps which storing data, getting data, authentication etc. can be added to your React projects

## Installation
1. download Node.js
2. use npx to install
    ```
    npx create-next-app project-name
    ```

## Add Page in pages folder
You don't need to install react-router-dom to use router in Next project. Next has already set up all these things. Therefore, index.js is the first page in the root route which is yourdomain/. If you want to add yourdomain/new you have to create new.js in pages/new.js

You can also add nested paths like yourdomain/price/enterprise by create pages/price/enterprise/index.js or pages/price/enterprise.js

## Creating dynamic pages

