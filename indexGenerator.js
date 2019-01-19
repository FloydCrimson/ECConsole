const fs = require('fs');
const path = require('path');

const ANSIEscapeCodesPath = path.join(__dirname, 'assets', 'ANSIEscapeCodes.json');
console.log('[indexGenerator] - ANSIEscapeCodes.json found.');
const ANSIEscapeCodesJSON = require(ANSIEscapeCodesPath);
console.log('[indexGenerator] - ANSIEscapeCodes.json loaded.');
console.log('[indexGenerator] - index.js building started...');
var indexJS = '';
indexJS += '\n';
indexJS += 'const ANSIEscapeCodes = {\n';
for (var ANSIEscapeCode in ANSIEscapeCodesJSON) {
    indexJS += '\t' + ANSIEscapeCode + ': "' + ANSIEscapeCodesJSON[ANSIEscapeCode] + '",\n';
}
indexJS += '};\n';
indexJS += '\n';
indexJS += 'class ECConsole {\n';
indexJS += '\n';
indexJS += '\tconstructor(text) {\n';
indexJS += '\t\tthis._text = text;\n';
indexJS += '\t}\n';
indexJS += '\n';
for (var ANSIEscapeCode in ANSIEscapeCodesJSON) {
    indexJS += '\tget ' + ANSIEscapeCode + '() { return new ECConsole(ANSIEscapeCodes.' + ANSIEscapeCode + ' + this._text); };\n';
}
indexJS += '\n';
indexJS += '\tget set() { return this._text + ANSIEscapeCodes.reset; };\n';
indexJS += '\n';
indexJS += '}\n';
indexJS += '\n';
indexJS += 'module.exports.ANSIEscapeCodes = ANSIEscapeCodes;\n';
indexJS += 'module.exports.ECConsole = ECConsole;';
console.log('[indexGenerator] - index.js building completed.');
console.log('[indexGenerator] - index.js saving started...');
fs.writeFileSync(path.join(__dirname, 'index.js'), indexJS, { encoding: 'utf8' });
console.log('[indexGenerator] - index.js saving completed.');