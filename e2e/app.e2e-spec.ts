import { RAVisualImpactPage } from './app.po';

describe('ravisual-impact App', () => {
  let page: RAVisualImpactPage;

  beforeEach(() => {
    page = new RAVisualImpactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
