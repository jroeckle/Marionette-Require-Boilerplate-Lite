MRB-Trimmed (Marionette Require Boilerplate)
==================================
![Example](http://sidnet.info/sites/default/files/marionette-logo.png)   ![Example](http://3.bp.blogspot.com/-JFOJ-k6tLnA/TsiKgBYPvqI/AAAAAAAAAT8/dGXeu0LeuTE/s320/backbone-js-logo.png) ![Example](http://requirejs.org/i/logo.png)

#Description
A Lightweight boilerplate project based off [Marionette-Require-Boilerplate](https://github.com/brettjonesdev/Marionette-Require-Boilerplate), providing a simple Marionette application built with Require.js and Grunt in keeping with best practices.  Part of the [BoilerplateMVC](https://github.com/BoilerplateMVC) suite.

#What's different from Marionette-Require-Boilerplate-Lite? 

   Removed libraries I don't typically boilerplate. Handlebars, Jasmine, jQuery UI, and Bootstrap have been removed.  

   RequireJS, MarionetteJS, Backbone, Lo-Dash, Almond, jQuery, and TextJS has been updated. jQuery has been updated to the latest 1x build.

   Added [normalize.css](https://github.com/necolas/normalize.css), and other snippets from [html5-boilerplate](https://github.com/h5bp/html5-boilerplate).

#Getting Started
   1. Download and install [Node.js](http://nodejs.org/#download)
   2. Clone this repository
   3. On the command line, type `npm install nodemon -g` to install the [nodemon](https://github.com/remy/nodemon) library globally.  If it complains about user permissions type `sudo npm install nodemon -g`.
   4.  If you have installed [Grunt](http://gruntjs.com/) globally in the past, you will need to remove it first by typing `npm uninstall -g grunt`.  If it complains about user permissions, type `sudo npm uninstall -g grunt`.
   5.  Next, install the latest version of [Grunt](http://gruntjs.com/) by typing `npm install -g grunt-cli`.  If it complains about user permissions, type `sudo npm install -g grunt-cli`. 
   6. Navigate to inside of the **Backbone-Require-Boilerplate** folder and type `npm install`
   7.  Install [Bower](http://bower.io/) in command line with `npm install -g bower`.
   8. Run Bower install in command line with `bower install`.
   8. Next, type `nodemon` (this will start your Node.js web server and restart the server any time you make a file change thanks to the wonderful **nodemon** library)
   9. To view the demo page, go to `http://localhost:8001`

#TODO

Evaluate Gulp.js to reduce Grunt.js complexities.

##Change Log

`0.0.2` - April 3, 2014

Added Bower to for package management on the front end.  Updated [normalize.css](http://necolas.github.io/normalize.css/) and other components.  Updated related Grunt tasks.

`0.0.1` - August 14, 2013

Forked project from [BoilerplateMVC](https://github.com/BoilerplateMVC)'s [Marionette-Require-Boilerplate-Lite](https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate-Lite) project.  

Removed Handlebars, Jasmine, Bootstrap, and jQuery UI

Updated jQuery, Almond, Backbone, Backbone.Marionette, Lo-Dash, TextJS, and RequireJS

Added [normalize.css](https://github.com/necolas/normalize.css), and other snippets from [html5-boilerplate](https://github.com/h5bp/html5-boilerplate).

##Contributors
[Jason Roeckle](https://github.com/jroeckle)

## License
Copyright (c) 2013 Jason Roeckle  
Licensed under the MIT license.		