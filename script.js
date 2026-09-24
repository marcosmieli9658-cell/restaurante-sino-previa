const videoLaunch = document.querySelector('.video-launch');

if (videoLaunch) {
  videoLaunch.addEventListener('click', (event) => {
    event.preventDefault();

    const player = document.createElement('iframe');
    player.src = 'https://www.instagram.com/reel/DdC1VkBOfuF/embed/';
    player.title = 'Vídeo do Restaurante do Sino divulgado pela TV Vanguarda';
    player.allow = 'autoplay; encrypted-media; picture-in-picture';
    player.allowFullscreen = true;
    player.referrerPolicy = 'no-referrer-when-downgrade';

    videoLaunch.replaceWith(player);
  });
}
