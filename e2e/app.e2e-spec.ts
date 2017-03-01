import { CleanScoresPage } from './app.po';

describe('clean-scores App', function() {
  let page: CleanScoresPage;

  beforeEach(() => {
    page = new CleanScoresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
