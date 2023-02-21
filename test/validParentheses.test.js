import validParentheses from '../src/validParentheses';

test('Should be True for this case "(())((()())())"', () => {
  expect(validParentheses("(())((()())())")).toBe(true);
});

test('Should be True for this case "()" ', () => {
  expect(validParentheses("()")).toBe(true);
});

test('Should be False for this case ")(()))"', () => {
  expect(validParentheses("(")).toBe(false);
});
test('Should be False for this case ")(()))"', () => {
  expect(validParentheses(")(()))")).toBe(false);
});

test('Should be False for this case  "(()))())"', () => {
  expect(validParentheses("(()))())")).toBe(false);
});