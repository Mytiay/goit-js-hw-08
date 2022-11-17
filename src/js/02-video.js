import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

function onTimeUpdate() { };

console.log(player);

player.on('timeupdate', onTimeUpdate);
