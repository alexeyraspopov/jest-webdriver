# Jest WebDriver — Writing Tests

When it comes to using Selenium WebDriver for writing tests, it mostly about
making end-to-end tests where a test case emulates the user's behavior in real
web browser and asserts the page state afterwards.

In order to emulate the behavior, the test cases programmatically need to open
the target page, find necessary elements to interact with, perform a set of
actions (such as clicks, keyboard inputs, etc), and check the expectations
(presence or absence of elements, output matching, etc).

A basic test case may look like this:

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

Which executes following steps:

 1. Opens a testing page by setting browser's URL
 2. Queries HTML elements on the page by their CSS selectors
 3. Performs click event on a specific button
 4. Extracts text content from a specific label
 5. Asserts text content to equals expected value

Steps above describe different concerns being mixed in a single piece of code.
The test case becomes aware of the testing logic (user scenario being asserted)
while at the same time it is aware of _how_ elements are queried and used
(implementation details).

While the code is fine in isolation, it has potential issues that can come up
with growing number of test cases or application changes that require test
implementation details to adapt even when the testing logic wasn't changed.

The example above may introduce issues when another test cases are created that
also interact with the same `#output` element. Once the target UI is changed
(new design applied, or the output element becomes more complex), each existing
test case (that touches the element) is required to be fixed in favor to be
passing again. Having such implementation details spread over dozens of test
cases make it harder to apply UI changes in the project since huge cost
introduced to end-to-end tests maintaining.

## Page Object

The Page Object pattern is created to address the separation of concerns in
end-to-end tests. It hides a test implementation details (such as element
queries, events emulation, browser interaction) and provides higher level and
domain-specific interface that is used for describing testing logic.

A page object represents an element (or set of elements) on different pages of
the project. Despite the term "page" object, these objects shouldn't usually be
built for each page, but rather for the significant elements on a page.

A page object can be implemented using ES classes. Element locators should be
organized in a list of object's properties and accessed from the public methods.
These methods represent domain-specific logic of interaction with the target
element.

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

Resulting class includes a single list of used selectors which is a thing the
most coupled to the testing page. Having it structured in expected place in the
code makes it cheaper to update testing code without breaking testing logic.
Public method represent concise user-related actions while can include a set of
different UI-related actions that are now hidden from the test cases.

The example test case, given in the beginning of the guide, can be now updated
to use page object:

```javascript
it('should increment the counter', async () => {
  let counter = new CounterPage();
  await counter.openPage();
  await counter.performIncrement();
  let output = await counter.getCounterOutput();
  expect(output).toBe('1');
});
```
