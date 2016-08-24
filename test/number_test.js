var test = require('tape');

// a pair of dummy tests to illustrate gulpfile

test('addition', function (t) {
  t.equal(1 + 0, 1);
  t.equal(1 + 1, 2);
  t.end();
});
test('subtraction', function (t) {
  t.equal(1 - 1, 0);
  t.equal(2 - 1, 1);
  t.end();
});
