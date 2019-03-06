import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: 
      { part: 'snippet',
        maxResults: options.max,
        q: options.query,
        key: options.key,
        type: 'video',
        videoEmbeddable: true
      },
    success: function(data) { 
      console.log('success', data.items); 
      callback(data.items);
    },
    error: function(data) {
      console.log('failed');
      console.log(data);
    }
  });
};

export default searchYouTube;
/*url: 'https://www.googleapis.com/youtube/v3/search',
    part: options.snippet,
    maxResults: 5,
    q: options.query,
    key: YOUTUBE_API_KEY,
    type: 'GET',
    success: function() { console.log('success'); },
    error: error || function(error) {
      console.error('failed');
    }
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    key: 'AIzaSyAPgwkr4zMbbdhAOJz-COVucnBZpx6n7yk',
    part: options.snippet,
    success: function(data) { 
      callback(data.items);
      console.log('success'); 
    },
    error: error || function(error) {
      console.error('failed');
    }
    */