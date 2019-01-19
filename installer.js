const fs = require('fs');
const path = require('path');

const ANSIEscapeCodesPath = './assets/ANSIEscapeCodes.json';
console.log('[ECConsole] - ' + ANSIEscapeCodesPath + ' loading...');
const ANSIEscapeCodesJSON = require(ANSIEscapeCodesPath);
console.log('[ECConsole] - ' + ANSIEscapeCodesPath + ' loaded.');
console.log('[ECConsole] - Building started...');
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
console.log('[ECConsole] - Building completed.');
var indexPath = './index.js';
console.log('[ECConsole] - ' + indexPath + ' saving...');
fs.writeFileSync(indexPath, indexJS, { encoding: 'utf8' });
console.log('[ECConsole] - ' + indexPath + ' saved.');