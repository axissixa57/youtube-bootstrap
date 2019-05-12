export default class AppView {
  constructor(titles) {
    this.titles = titles;
  }

  render() {
    // const content = document.createElement('ul');
    // content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');
    const divItems = document.createElement('div');
    divItems.classList.add('items');
    document.body.appendChild(divItems);

    for (let i = 0; i < this.titles.length; i += 1) {
      const content = document.createElement('div');
      content.classList.add('item');
      content.innerHTML = `<p>${this.titles[i]}</p>`;
      divItems.appendChild(content);
    }

    this.slider();
  }

  // eslint-disable-next-line class-methods-use-this
  slider() {
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX; // запоминает х координату, где была нажата мышка
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft; // slider.offsetLeft - значение в margin у slider
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft; // будет меняться если двигать мышкой
      // eslint-disable-next-line max-len
      const walk = (x - startX) * 3; // считывает расстояние от нажатой точки(если вправо - положительный результат, влево - отрицалеьный); * 3 = скорость прокрутки
      slider.scrollLeft = scrollLeft - walk; // процесс передвижения
    });
  }
}
