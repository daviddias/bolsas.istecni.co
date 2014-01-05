bolsas.istecni.co
==============

![logo](assets/branding/logo/black-on-transparent.png)

A information retrieval system for the IST, UTL student to get notified about new scholarships that are available.

## Idea behind this project

It all started....



----------
## What is under the hood and where to learn more

### Javascript
* [Javascript Design Patterns](http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [JS in Ten Minutes](https://github.com/spencertipping/js-in-ten-minutes/blob/master/js-in-ten-minutes.pdf?raw=true)
* [Writting modular Javascript](http://addyosmani.com/writing-modular-js)
* [Javascript Allonge](https://leanpub.com/javascript-allonge/read)
* [Javascript Succintly](http://www.syncfusion.com/resources/techportal/ebooks/javascript)
* [Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [Programming Javascript Applications](http://chimera.labs.oreilly.com/books/1234000000262/index.html)
* [JS the right way](http://jstherightway.org/)
* [Basic Javascript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html)


### Node.js
* [Node.js](http://nodejs.org/)
* [Mastering Node.js](http://github.com/visionmedia/masteringnode/raw/master/book.pdf)
* [nodeschool.io](http://nodeschool.io/)
* [Streams](https://github.com/substack/stream-handbook)
* [Up and Running with Nodejs](http://chimera.labs.oreilly.com/books/1234000001808/index.html)
* [Mixu's node book](http://book.mixu.net/)
* [The Node Beginner Book](http://www.nodebeginner.org/#about)


### hapi
* [hapi](http://hapijs.com/)


### MongoDB
* [MongoDB](http://www.mongodb.org/)
* [mongoosejs](http://mongoosejs.com/)
* [The Little MongoDB Book](http://openmymind.net/mongodb.pdf)
* [MongoDB basics](http://www.talentbuddy.co/set/5266e2c04af0110af3835886)


### Angularjs
* [angular.js](http://angularjs.org/)
* [angularjs fundamental in 60 minutes](http://fastandfluid.com/publicdownloads/AngularJSIn60MinutesIsh_DanWahlin_May2013.pdf)
* [egghead - tutorial videos](https://egghead.io/)
* [angular.js, learn to build modern web apps](http://www.thinkster.io/pick/GUIDJbpIie/angularjs-tutorial-learn-to-build-modern-web-apps)


### Twitter bootstrap
* [bootstrap](http://getbootstrap.com/)
* [boostrap, responsive web development](https://github.com/whyisjake/bootstrap)




----------
## How to Contribute
1.1 fork

1.2 Set up your machine

1.3 Commit

1.4 Submit a pull request




----------
## Development

Install the necessary dependencies
```bash
$ npm install 
```


When you change .js files in ./lib, run browserify by:
```bash
$ npm run dist
```

You can start the app by:
```bash
$ npm start
```

Or with nodemon by:
```bash
$ npm run mon
```

## Automate

```bash
# set the permissions to be able to execute, just once
$ chmod +x bin/watch.js
```

then
```bash
$ bin/watch.js
```


---------
## API

```
GET /scholarships                       // Get all the scholarships
GET /scholarships?param1=a&param2=b...  // example active=true
```
