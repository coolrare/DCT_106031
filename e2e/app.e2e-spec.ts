import { Ng4AdvancedPage } from './app.po';

describe('ng4-advanced App', () => {
  let page: Ng4AdvancedPage;

  beforeEach(() => {
    page = new Ng4AdvancedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
