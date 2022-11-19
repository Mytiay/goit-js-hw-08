import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const onTimeUpdate = (e) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    if (!localStorage.getItem('videoplayer-current-time'));
    return;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        if (localStorage.getItem('videoplayer-current-time') === 0);
        break;
      
      default:
        break;
    }
  });;
