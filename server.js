let express = require('express');
let app = express();
app.disable("x-powered-by");
let port = 3300

app.get('/message', function (req, res) {
     res.send('This is the message');
});

app.get('/status', function (req, res) {
     return res.status(200).json({
          status: 'true'
     });
});

app.get('/media', function (req, res) {
     var response = {
          podcasts: [{
               "description": "some text",
               "id": 574,
               "title": "Why long-term value is a winning bet",
               "media": "podcast",
               "publishedDate": "2018-12-19T18:00:00.000Z",
               "isLive": true,
               "isDeleted": false,
               "link": "https://podcasts.com/search?q=",
               "createdAt": "2018-12-20T06:30:00.618Z",
               "updatedAt": "2019-01-31T06:30:00.864Z"
          }],
          total: 1
     }
     if (response.podcasts.length > 0) {
          res.send(response);
          console.log(response);
     } else {
          var errorObj = {
               httpCode: 404,
               message: 'NOT_FOUND',
               description: 'The resource referenced by request does not exists.',
               details: 'Podcast is not available'
          }
          res.status(404);
          res.send(errorObj)
          console.log(response);
     }
});

app.listen(port, function () {
     console.log("\nServer is running on port " + port);
});
module.exports = app;