import { DrumTabMetronomePage } from './app.po';

describe('drum-tab-metronome App', () => {
  let page: DrumTabMetronomePage;

  beforeEach(() => {
    page = new DrumTabMetronomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
