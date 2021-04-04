document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();
  
  tl.fromTo('.bg-loader', 1, 
    {height: '100%'},
    {height: '0%', delay: 3, ease: Expo.easeInOut})
    
    .fromTo('.bg-video', 1.2,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')
    
    .fromTo('.logo', 0.7,
    {y: 50, opacity: 0},
    {y: 0, opacity: 1, ease: Back.easeOut}, '-=0.5')
    
    .fromTo('.nav-list', 0.7,
    {y: 50, opacity: 0},
    {y: 0, opacity: 1, ease: Back.easeOut}, '-=0.5')
    
    .fromTo('.nav-social', 0.7,
    {y: 50, opacity: 0},
    {y: 0, opacity: 1, ease: Back.easeOut}, '-=0.5')
    
    .fromTo('.container-item-1', 0.7,
    {y: 50, opacity: 0},
    {y: 0, opacity: 1, ease: Back.easeOut}, '-=0.5')

    .fromTo('.leon', 1,
    {opacity: 0},
    {opacity: 1, ease: Back.easeOut}, '-=0.5');
});