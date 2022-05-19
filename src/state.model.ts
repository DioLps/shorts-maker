export interface State {
  searchTerm: string;
  prefix: string;
  sentences?: Sentence[]
}

interface Sentence {
  text?: string;
  keywoard?: string;
  image?: string;
}
