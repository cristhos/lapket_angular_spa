import { AnclitestPage } from './app.po';

describe('angular2spa App', () => {
  let page: AnclitestPage;

  beforeEach(() => {
    page = new AnclitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
