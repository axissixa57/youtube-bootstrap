import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.state = {
      // .json
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBb4J1i_FkOzLfdQo6Dwny7d1sh4CW7AM4&type=video&part=snippet&maxResults=15&q=js',
    };
  }

  // eslint-disable-next-line max-len
  async start() { // ф-ция возращает промис и чтобы дальше его обработать нужно обращаться при помощи await к промису
    const model = new AppModel(this.state);
    const data = await model.getClipNames(); // асинхронная ф-ция
    const view = new AppView(data); // закинули данные, которые будут отображаться на страницу html

    view.render(); // загружаем данные на страницу html с помощью списка ul
  }
}
