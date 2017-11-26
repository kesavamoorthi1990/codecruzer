import { Codecruzer.ComPage } from './app.po';

describe('codecruzer.com App', () => {
  let page: Codecruzer.ComPage;

  beforeEach(() => {
    page = new Codecruzer.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
