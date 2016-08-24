var test = require('tape');

test('string length', function (t) {
  t.equal('string'.length, 6);
  t.end();
});

test('string splitting', function (t) {
  // deepEqual is needed to compare arrays
  t.deepEqual('remove middle word'.split('middle'), ['remove ', ' word']);
  t.end();
})
