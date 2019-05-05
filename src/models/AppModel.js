export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  async getClipNames() {
    const { url } = this.state; // деструктуризация == const url = this.state.url
    const response = await fetch(url);
    const data = await response.json();

    return AppModel.extractClipNames(data);

    // fetch(url) // для сравнения с async/await
    //   .then(res => res.json()) // вернёт js формат
    //   .then(res => console.log(res));
  }
}
