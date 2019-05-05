import AppModel from './AppModel';

// eslint-disable-next-line max-len
// если пакет jest скачан и describe подсвечивается eslintом, что не определён, то надо добавить в eslint - env { ... jest: true }
describe('AppModel.extractClipsNames', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipNames).toBeInstanceOf(Function);
  });

  it('Should return array of string that contains clip titles', () => {
    const data = {
      items: [
        {
          snippet: {
            title: 'title 1',
          },
        },
        {
          snippet: {
            title: 'title 2',
          },
        },
        {
          snippet: {
            title: 'Super title 3',
          },
        },
      ],
    }; // объект который содержит данные, что мы ожидаем увидеть от YoutubeAPI, например

    const result = AppModel.extractClipNames(data);

    expect(result).toEqual(['title 1', 'title 2', 'Super title 3']);
  });
});
