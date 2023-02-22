import formatDuration from '../src/formatDuration';

test('Should be "1 minute and 2 seconds" for this case 62', () => {
  expect(formatDuration(62)).toBe('1 minute and 2 seconds');
});

test('Should be "1 minute and 1 second" for this case 61', () => {
  expect(formatDuration(61)).toBe('1 minute and 1 second');
});

test('Should be "1 hour, 1 minute and 2 seconds" for this case "3662" ', () => {
  expect(formatDuration(3662)).toBe('1 hour, 1 minute and 2 seconds');
});

test('Should be "1 day" for this case "86400" ', () => {
  expect(formatDuration(86400)).toBe('1 day');
});

test('Should be "5 days, 18 hours, 53 minutes and 20 seconds" for this case "500000" ', () => {
  expect(formatDuration(500000)).toBe('5 days, 18 hours, 53 minutes and 20 seconds');
});

test('Should be "2 years" for this case "63072000" ', () => {
  expect(formatDuration(63072000)).toBe('2 years');
});

test('Should be "1 year" for this case "31536000" ', () => {
  expect(formatDuration(31536000)).toBe('1 year');
});

test('Should be "1 year, 40 days, 2 hours, 13 minutes and 20 seconds" for this case "35000000" ', () => {
  expect(formatDuration(35000000)).toBe('1 year, 40 days, 2 hours, 13 minutes and 20 seconds');
});