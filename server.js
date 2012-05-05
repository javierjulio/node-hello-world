/**
 * Neat trick where we can use CoffeeScript to compile our app on 
 * the fly and so Node uses this file to start a dev server.
 * http://stackoverflow.com/questions/7596230/use-coffee-instead-of-node-command-in-production
 */
require("coffee-script");
require("./web");
