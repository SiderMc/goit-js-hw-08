import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

const onPlay = function (data) {
  localStorage.setItem(LOCAL_KEY, data.seconds);
  if (data.seconds === data.duration || data.seconds === 0) {
    localStorage.removeItem(LOCAL_KEY);
    return;
  }
};

player.on('timeupdate', throttle(onPlay, 1000));
