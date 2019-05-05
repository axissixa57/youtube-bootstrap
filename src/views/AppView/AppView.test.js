// для того чтобы проверить DOM с помощью тестов в jest есть snapshots
import AppView from './AppView';
// обращаемся через prototype т.к. метод к котору мы хотим получить доступ не static
describe('AppView.prototype.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    const context = {
      titles: [
        'Video about JS',
        'Another video ...',
        'I need more video',
        'I need more video',
      ],
    };

    AppView.prototype.render.call(context);

    expect(document.body.innerHTML).toMatchSnapshot(); // toMatchSnapshot() создаёт папку __snapshots, если добавим какие-то элементы в context и тест будет провальным, то можно обновить с помощью u(в коносле есть подсказка)
  });
});
