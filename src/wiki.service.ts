import wtf from 'wtf_wikipedia';

export class WikiService {

  public searchTerm: string;
  private doc: any;

  constructor(searchTerm: string = 'Feijoada') {
    this.searchTerm = searchTerm;
  }
  async query(): Promise<void> {
    this.doc = await wtf.fetch(this.searchTerm);
  }

  async getWikiSummaryText(): Promise<string[]> {
    if (this.canExecute()) {
      return (this.doc?.sections()[0].paragraphs() as Array<any>)
        .map(paragraph => paragraph.text());
    }

    return [];
  }

  async getWikiCategoryText(): Promise<string[]> {
    if (this.canExecute()) {
      return this.doc.categories();
    }

    return [];
  }

  private canExecute(): boolean {
    if (!this.doc) {
      console.warn('Make sure that query was called !');
      throw (`Term not found: ${this.searchTerm}`);
    }
    return true;
  }

}
