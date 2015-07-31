/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./RedditViewerService.ts"/>
/// <reference path="./models/RedditImage.ts"/>

interface IndexScope {
  subredditName: string;
  images: Models.Image[];
  loadImages(): void;
}

class IndexController {
  constructor(public $scope: IndexScope, public SubRedditService: SubRedditService) {
    this.$scope.images = [];
    this.$scope.subredditName = 'earthporn';
    this.$scope.loadImages = () => {
      SubRedditService.get(this.$scope.subredditName).then((images: Models.Image[]) => {
        this.$scope.images = images;
      });
    };
  }
}

angular
  .module('RedditViewer')
  .controller('IndexController', IndexController);
