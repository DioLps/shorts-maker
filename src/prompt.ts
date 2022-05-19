import { question, keyInSelect } from 'readline-sync';

export class Prompt {
  static getSearchTermFromPrompt(): string {
    return question('Type a Wikipedia search term: ');
  }

  static getSearchPrefixFromPrompt(
    prefixes = [
      'Who is ',
      'What is ',
      'The history of ',
    ]
  ): string {
    const selectedIndex = keyInSelect(prefixes, 'Select a prefix: ');
    return prefixes[selectedIndex];
  }

}
