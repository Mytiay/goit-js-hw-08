import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const onTimeUpdate = (e) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
};

player.on('timeupdate', onTimeUpdate);
player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });;
