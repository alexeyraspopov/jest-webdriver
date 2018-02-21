# Jest WebDriver — Writing Tests

<!-- link to jest guide -->

<!-- link to api -->

When it comes to using Selenium WebDriver for writing tests, it mostly about
making end-to-end tests where a test case emulates the user's behavior in real
web browser and asserts the page state afterwards.

In order to emulate the behavior, the test case programmatically need to open
the target page, find necessary elements to interact with, perform a set of
actions (such as clicks, keyboard inputs, etc), and check the expectations
(presence or absence of elements, output matching, etc).

```javascript
it('should increment the counter', async () => {
  await browser.get('/url');
  let button = await element(by.css('#incrementButton'));
  let counter = await element(by.css('#output'));

  await button.click();
  let output = await counter.getText();
  expect(output).toBe('1');
});
```

While the code is fine in isolation, it has potential issues that can come up
with growing number of test cases or application changes that require test
implementation details to adapt even when the testing logic wasn't changed.
Next patterns describe the way to organize testing code for the sake of
preventing such cases, establishing consistent code structure, and improving
developer experience.

## Page Object

To separate implementation details from testing logic and provide higher level
domain-specific interface for writing test cases.

Locators, elements selecting, etc are the implementation details of testing
logic.

```javascript
class CounterPage {
  constructor() {
    this.incrementButton = by.css('#incrementButton');
    this.counterLabel = by.css('#output');
  }

  openPage() {
    return browser.get('/url');
  }

  async performIncrement() {
    let trigger = await element(this.incrementButton);
    return trigger.click();
  }

  async getCounterOutput() {
    let label = await element(this.counterLabel);
    return label.getText();
  }
}
```

```javascript
it('should increment the counter', async () => {
  let counter = new CounterPage();
  await counter.openPage();
  await counter.performIncrement();
  let output = await counter.getCounterOutput();
  expect(output).toBe('1');
});
```

 1. Repeat actions without copy-pasting its details
 2. Reusing page objects in different specs
 3. Isolating implementation details from testing logic

 * Despite the term "page" object, these objects shouldn't usually be built
   for each page, but rather for the significant elements on a page

<!-- brings context to testing logic -->

<!-- split technical details and testing logic -->

<!-- code reuse -->

## Chain of Invocations

```javascript
it('should have license defined', async () => {
  let github = new GitHubSite();
  let project = await github.openProject('alexeyraspopov/dataclass');
  let license = await project.getLicenseType();
  expect(license).toBe('MIT');
});
```

 1. Ensures correct order of actions
 2. Enforces more specific page objects

 * Having page objects be responsible for creating other page objects in
   response to things like navigation is common advice. However some
   practitioners prefer that page objects return some generic browser context,
   and the tests control which page objects to build on top of that context
   based on the flow of the test (particularly conditional flows). Their
   preference is based on the fact that the test script knows what pages are
   expected next and this knowledge doesn't need to be duplicated in the page
   objects themselves. They increase their preference when using statically
   typed languages which usually reveal page navigations in type signatures.

<!-- ensures correct order of PO actions -->

## Strategy

 1. Allows to use the same testing logic for partially different cases

<!-- switching between different scenarios with the same outcome -->
