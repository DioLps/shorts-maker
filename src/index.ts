#!/usr/bin/env node

import { PromptService } from './prompt.service';
import { State } from './state.model';
import { WikiService } from './wiki.service';
// import { writeFile } from 'fs';

const start = async () => {
  const state: State = {
    searchTerm: PromptService.getSearchTermFromPrompt(),
    prefix: PromptService.getSearchPrefixFromPrompt()
  };

  const wikiService = new WikiService(state.searchTerm);

  await wikiService.query();

  const summaries = await wikiService.getWikiSummaryText();
  const categories = await wikiService.getWikiCategoryText();

  state.sentences = summaries.map((summary, index) => {
    return {
      text: summary,
      keywoard: categories[index] ? `${state.searchTerm} ${categories[index]}` : '',
      images: '',
    }
  });

  console.log('state.sentences', state.sentences);


  // writeFile(`./src/${state.prefix}${state.searchTerm}.json`, JSON.stringify(state.sourceContent), err => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   // file written successfully
  // });



};

start();

export { };
