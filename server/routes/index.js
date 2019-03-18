const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { parse } = require('url');
const { join } = require('path');

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
      return res.sendFile(path);
    }

    return handle(req, res);
  });
};
