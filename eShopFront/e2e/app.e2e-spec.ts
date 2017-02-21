import { EShopFrontPage } from './app.po';

describe('e-shop-front App', function() {
  let page: EShopFrontPage;

  beforeEach(() => {
    page = new EShopFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
