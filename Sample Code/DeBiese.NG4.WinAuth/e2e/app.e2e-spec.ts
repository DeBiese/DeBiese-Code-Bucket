import { DeBiese.NG4.WinAuthPage } from './app.po';

describe('de-biese.ng4.win-auth App', () => {
  let page: DeBiese.NG4.WinAuthPage;

  beforeEach(() => {
    page = new DeBiese.NG4.WinAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
