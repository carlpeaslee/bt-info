'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_bodyParser2.default.json());

var port = process.env.PORT || 5000;

server.post('/vis', function (req, res) {
  console.log(req.body);
});

server.listen(port, function () {
  console.log('Server is listening on port ' + port);
});