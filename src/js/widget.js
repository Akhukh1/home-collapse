export default class Widget {
  render(btn) {
    const card = document.querySelector('.collapse');
    card.classList.toggle('block');
    btn.classList.add('btn-shadow');
    btn.addEventListener('mouseout', () => {
      card.classList.remove('block');
      btn.classList.remove('btn-shadow');
    });
  }

}