This is an example Node app I wrote using CoffeeScript, Express, Jade and Stylus. So far I have it running locally against Node 0.6.5 but I haven't had any luck deploying to Heroku as it only supports 0.4.7 (at least what I can tell from their documentation). I continue to add to this project to learn new things about each of the modules used since I like them all (particularly the Stylus syntax).

# Rails Asset Pipeline Attempt

I've attempted a Rails asset pipeline style compiling into a single `application.css` and `application.js` files but its not bulletproof. For example, CoffeeScript includes the files based on the order they are retrieved in, their is no file where I can specify the order (at least not that I know of). With Stylus though I can create an `application.styl` file that can import other Stylus files in any order I want but I determine where the final result outputs too which is nice. The CSS is compressed too.

# Installation

- Install Node either by [source](http://increaseyourgeek.wordpress.com/2010/08/18/install-node-js-without-using-sudo/) or by [downloading installers](http://nodejs.org/#download)
- ```git clone git://github.com/sstephenson/rbenv.git node-hello-world```
- ```cd node-hello-world```
- Run ```npm install``` to install packages locally (in node-hello-world/node_modules)
- ```gem install foreman```
- Run application ```foreman start```
