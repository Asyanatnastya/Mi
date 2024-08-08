// document.getElementById('burger').addEventListener('click', () => {
//     document.getElementById('openedmenu').classList.toggle('active');
//     document.getElementById('burger').classList.toggle('touched');
// });

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('touched');
    document.querySelector('.navigation__menu').classList.toggle('navigation__menu--active');
  });