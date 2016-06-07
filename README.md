# BAngular

    Frontend for BFlask API.

This app displays a map and bus stops and departure times from NextBus database using BFlask API.

For more information, refer to [BFlask README](https://github.com/ulyssesv/bflask/blob/master/README.md).

**Backend repository**  
https://github.com/ulyssesv/bflask/

**Frontend repository**  
https://github.com/ulyssesv/bangular/

**Backend host**  
http://bflask-dev.us-east-1.elasticbeanstalk.com/

**Frontend host**  
http://bangular-static.s3-website-us-east-1.amazonaws.com/

**Documentation**  
http://bflask.readthedocs.io/en/latest/

## Development Environment

At a bare minimum you'll need:
- Node
- NPM
- Bower

Assuming you have the required dependencies, then run:

```bash
$ git clone <repo>
$ cd <project>
$ npm install
$ bower install
```

The API URL is configured in `src/app/index.constants.js`.

To run the development server, run `$ gulp serve`.

To build, run `$ gulp build`.
