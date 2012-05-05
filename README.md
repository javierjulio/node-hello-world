This is an example Node app I wrote using CoffeeScript, Express, Jade and Stylus. So far I have it running locally against Node 0.6.5 but I haven't had any luck deploying to Heroku as it only supports 0.4.7 (at least what I can tell from their documentation).

# Installation

- Install Node either by [source](http://increaseyourgeek.wordpress.com/2010/08/18/install-node-js-without-using-sudo/) or by [downloading installers](http://nodejs.org/#download)
- ```git clone git://github.com/sstephenson/rbenv.git node-hello-world```
- ```cd node-hello-world```
- Run ```npm install``` to install packages locally (in node-hello-world/node_modules)
- ```gem install foreman```
- Run application ```foreman start```
