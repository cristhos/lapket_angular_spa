import { TestAnCliPage } from './app.po';

describe('test-an-cli App', () => {
  let page: TestAnCliPage;

  beforeEach(() => {
    page = new TestAnCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
