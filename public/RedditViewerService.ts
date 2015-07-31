/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./models/RedditImage.ts"/>

interface RedditPost {
  data: {
    id: string;
    url: string;
    title: string;
    comments: number;
    subReddit: string;
  }
}

class SubRedditService {
  constructor(private $http: ng.IHttpService) {}
  get(subRedditName: string): ng.IPromise<Models.Image[]> {
    return this.$http.get('http://www.reddit.com/r/' + subRedditName + '.json')
      .then((response: any) => {
        let data = response.data;
        return data.data.children.map((post: RedditPost) => {
          let url = /http\:\/\/imgur\.com/.test(post.data.url) ? post.data.url.replace('http://', 'http://i.') + '.jpg' : post.data.url;
          url = url.replace('.jpg', 'm.jpg').replace('.gif', 'm.gif').replace('.png', 'm.png');
          return new Models.Image(url, post.data.title);
        });
      });
  }
}

angular
  .module('RedditViewerServices')
  .service('SubRedditService', SubRedditService);
