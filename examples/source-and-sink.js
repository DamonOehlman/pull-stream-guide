var pull = require('pull-stream');

pull(
  pull.values([1, 2, 3]),   // source
  pull.log()                // sink
);
