import q = require('q');
import express = require('express');
import request = require('request');
import http = require('http');
var app = express();

class RedditComment {
  name: string = 'pepe';
}

app.use(express.static('public'));

app.get('/subreddits/:subRedditName', (req: express.Request, res: express.Response) => {
  let url = 'http://reddit.com/r/' + req.params.subRedditName + '.json';
  console.log(url);
  request.get(url, (error: any, response: http.IncomingMessage, body: any) => {
      res.type('text/json');
      res.send(body);
      res.end();
    });
  });



app.listen(3000);
