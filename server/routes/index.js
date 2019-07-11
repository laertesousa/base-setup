const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { parse } = require('url');
const { join } = require('path');
const fs = require('fs');

const usersRoutes = require('./users');

const rootStaticFiles = [
  '/manifest.json',
  '/sw.js',
];


module.exports = (express, nextApp) => {
  const handle = nextApp.getRequestHandler();
  express.use(bodyParser.json());
  express.use(bodyParser.urlencoded({extended: false}));
  express.use(cookieParser());

  usersRoutes(express);

  // Resolves Next.js page routes and assets
  express.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, '../../static', parsedUrl.pathname);

      if (parsedUrl.pathname !== '/sw.js') return res.sendFile(path);

      let fileData = fs.readFileSync(path).toString();

      const envVariables = {
        isProduction: process.env.NODE_ENV === 'production',
      };

      fileData = fileData.replace('\'{{NODE_ENV}}\'', JSON.stringify(envVariables));

      res.set('Content-Type', 'text/javascript');
      return res.send(fileData);
    }

    return handle(req, res);
  });
};
