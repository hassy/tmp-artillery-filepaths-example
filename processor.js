const fs = require('fs');

module.exports = { statFiles };

function statFiles(req, userContext, events, done) {
  const filenames = fs.readdirSync('./data/files');
  console.log('filenames', filenames);
  console.log(fs.statSync(`./data/files/${filenames[0]}`));
  return done();
}
