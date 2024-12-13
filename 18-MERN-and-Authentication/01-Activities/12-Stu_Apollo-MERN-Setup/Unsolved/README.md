# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {

// before starting the client-side application.
// builds the client side of the applicaiton and start up the node sever
  "start": "npm run client:build && npm run server", //Builds the client-side application (likely using a tool like Webpack or Vite).

    //Runs multiple commands concurrently  //Starts the server in development mode, usually with tools like nodemon to enable hot reloading. 
    //wait-on tcp:3001: Waits until the server is available on port 3001
  "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"", // This 
  
  //script runs both the server and the client in development mode simultaneously
  "install": "cd server && npm i && cd ../client && npm i",

    //Builds the server-side application for production.
  "build": "cd server && npm run build",

// Seeds the database for the server application
  "seed": "cd server && npm run seed",
  // ...other scripts
},
```

## Client-side Functionality

* TODO: Explain what this object does in the client-side `client/vite.config.ts` file:

// object defines a proxy configuration in the client/vite.config.ts file
```js
  proxy: {

    //This key specifies the path prefix for requests that need to be proxied.
    '/graphql': {

      //Specifies the server to which the proxy will forward requests.
      target: 'http://localhost:3001',

      //Indicates that the origin of the host header in proxied requests should be changed to match the target.
      //Some back-end servers might reject requests if the Host header doesn’t match their expected domain.
      //Setting changeOrigin: true ensures the back-end server sees the request as if it came directly from http://localhost:3001.
      changeOrigin: true,

      //Indicates whether to verify the SSL certificate when connecting to the target server.
      //Setting secure: false allows proxying to servers using self-signed or invalid SSL certificates (commonly used in local development environments).
      secure: false,
    },
  },
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/src/server.ts`:

```js

// In production mode, serve the client-side application:
// 1. Serve static files from the `client/dist` directory, which contains the built React/Vite app.
// 2. For any route not explicitly handled by the server, respond with the `index.html` file from the `client/dist` directory.
//    This ensures that React's client-side routing works correctly by letting the front-end handle all unmatched routes.

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```
