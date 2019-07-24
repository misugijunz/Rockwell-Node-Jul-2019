const url = require('url'),
    util= require('util'),
    http = require('http'),
    path = require('path'),
    calcmod = require('./calculator');

let req = http.get({
    host: 'localhost',
    path: '/calculator',
    port: 9090,
    method: 'POST'
  }, (req, res) => {
    const _url = url.parse(req.ulr);
    if (_url.pathname !== '/calculator'){
        res.statusCode = 404;
        res.end();
        return;
    }
    const queries = util.inspect(req.query),
        op = queries['op'].toLowerCast(),
        n1 = queries['n1']
        n2 = queries['n2'],
        result = calcmod[op](parseInt(n1), parseInt(n2));
    res.write(result + "");

});