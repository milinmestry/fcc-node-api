let express = require('express');
// let app = express();
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello Express!!');
  console.log('Hello World');
});

module.exports = router;