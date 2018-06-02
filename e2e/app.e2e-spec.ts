import { Angular4RestaurantPage } from './app.po';

describe('angular4-restaurant App', () => {
  let page: Angular4RestaurantPage;

  beforeEach(() => {
    page = new Angular4RestaurantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
