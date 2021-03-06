Given(/^The user arrives on the duckduckgo search page$/, async () => {
  await helpers.loadPage(env.web_url, 10);
});

When(/^they input (.*)$/, async (searchWord) => {
  /** use a method on the page object which also returns a promise */
  await pageObjects.duckDuckGoSearch.performSearch(searchWord);
});

When(/^they use (.*)$/, async (searchWord) => {
  /** use a method on the page object which also returns a promise */
  await pageObjects.duckDuckGoSearch.performSearch(searchWord);
});

Then(/^they should see some results$/, async () => {
  /** return the promise of an element to the following then */
  await pageObjects.duckDuckGoSearch.searchResult();
});

When(/^The screenshots should differ with the filenames "([^"]*)" & "([^"]*)"$/, async (fileName1, fileName2) => {
  const numDiffPixels = await helpers.imagePixelMatch(fileName1, fileName2);
  assert.isAbove(numDiffPixels, 0, 'Num of pixels should be greater than 0');
});
