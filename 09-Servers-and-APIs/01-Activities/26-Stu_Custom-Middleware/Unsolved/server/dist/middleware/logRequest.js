const logRequest = (req, _res, next) => {
    //TODO: log both the incoming request method and url.
    //TODO: call the next function.
    console.log(`${req.method} request received to ${req.url}`); // get request recieved to 
    next();
};
export default logRequest;
