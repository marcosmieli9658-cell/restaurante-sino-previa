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

const routeTrigger = document.querySelector('#route-trigger');
const routeDialog = document.querySelector('#route-dialog');

if (routeTrigger && routeDialog) {
  const closeRouteDialog = () => {
    if (typeof routeDialog.close === 'function') routeDialog.close();
    else routeDialog.removeAttribute('open');
  };

  routeTrigger.addEventListener('click', () => {
    if (typeof routeDialog.showModal === 'function') routeDialog.showModal();
    else routeDialog.setAttribute('open', '');
  });

  routeDialog.querySelector('[data-close-route]').addEventListener('click', closeRouteDialog);
  routeDialog.querySelectorAll('.route-options a').forEach((option) => {
    option.addEventListener('click', closeRouteDialog);
  });
  routeDialog.addEventListener('click', (event) => {
    if (event.target === routeDialog) closeRouteDialog();
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const cards = document.querySelectorAll('.flavor-card, .gallery-item, .video-frame, .map-wrap, .question-item');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const siblingIndex = Array.from(entry.target.parentElement.children).indexOf(entry.target);
      if (typeof entry.target.animate === 'function') {
        entry.target.animate(
          [
            { opacity: 0, transform: 'translateY(16px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 680, delay: Math.min(siblingIndex, 2) * 95, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'backwards' },
        );
      }
      cardObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  cards.forEach((card) => cardObserver.observe(card));
}
