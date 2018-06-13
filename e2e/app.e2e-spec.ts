import { SiemensOrderingAppPage } from './app.po';

describe('siemens-ordering-app App', () => {
  let page: SiemensOrderingAppPage;

  beforeEach(() => {
    page = new SiemensOrderingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
