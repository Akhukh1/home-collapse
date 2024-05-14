import Widget from '../js/widget';

const btn = document.querySelector('.btn');

const widget = new Widget();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  widget.render(btn);
});

