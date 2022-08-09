const fs = require('fs')

function session_count (tp) {
console.log(tp.file.path(true));
    length = fs.readdirSync(tp.file.path().replace(tp.file.title + '.md', '')).length;
    return length;
}
module.exports = session_count;

