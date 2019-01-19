
const ANSIEscapeCodes = {
    // OPTION
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    underline: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    // FOREGROUNG
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    // BACKGROUND
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
    // FOREGROUNG BRIGHT
    fgBlackBright: "\x1b[90m",
    fgRedBright: "\x1b[91m",
    fgGreenBright: "\x1b[92m",
    fgYellowBright: "\x1b[93m",
    fgBlueBright: "\x1b[94m",
    fgMagentaBright: "\x1b[95m",
    fgCyanBright: "\x1b[96m",
    fgWhiteBright: "\x1b[97m",
    // BACKGROUND BRIGHT
    bgBlackBright: "\x1b[100m",
    bgRedBright: "\x1b[101m",
    bgGreenBright: "\x1b[102m",
    bgYellowBright: "\x1b[103m",
    bgBlueBright: "\x1b[104m",
    bgMagentaBright: "\x1b[105m",
    bgCyanBright: "\x1b[106m",
    bgWhiteBright: "\x1b[107m",
};

class ECConsole {

    constructor(text) {
        this._text = text;
    }

    // OPTION
    get reset() { return new ECConsole(ANSIEscapeCodes.reset + this._text); };
    get bold() { return new ECConsole(ANSIEscapeCodes.bold + this._text); };
    get dim() { return new ECConsole(ANSIEscapeCodes.dim + this._text); };
    get underline() { return new ECConsole(ANSIEscapeCodes.underline + this._text); };
    get blink() { return new ECConsole(ANSIEscapeCodes.blink + this._text); };
    get reverse() { return new ECConsole(ANSIEscapeCodes.reverse + this._text); };
    get hidden() { return new ECConsole(ANSIEscapeCodes.hidden + this._text); };
    // FOREGROUNG
    get fgBlack() { return new ECConsole(ANSIEscapeCodes.fgBlack + this._text); };
    get fgRed() { return new ECConsole(ANSIEscapeCodes.fgRed + this._text); };
    get fgGreen() { return new ECConsole(ANSIEscapeCodes.fgGreen + this._text); };
    get fgYellow() { return new ECConsole(ANSIEscapeCodes.fgYellow + this._text); };
    get fgBlue() { return new ECConsole(ANSIEscapeCodes.fgBlue + this._text); };
    get fgMagenta() { return new ECConsole(ANSIEscapeCodes.fgMagenta + this._text); };
    get fgCyan() { return new ECConsole(ANSIEscapeCodes.fgCyan + this._text); };
    get fgWhite() { return new ECConsole(ANSIEscapeCodes.fgWhite + this._text); };
    // BACKGROUND
    get bgBlack() { return new ECConsole(ANSIEscapeCodes.bgBlack + this._text); };
    get bgRed() { return new ECConsole(ANSIEscapeCodes.bgRed + this._text); };
    get bgGreen() { return new ECConsole(ANSIEscapeCodes.bgGreen + this._text); };
    get bgYellow() { return new ECConsole(ANSIEscapeCodes.bgYellow + this._text); };
    get bgBlue() { return new ECConsole(ANSIEscapeCodes.bgBlue + this._text); };
    get bgMagenta() { return new ECConsole(ANSIEscapeCodes.bgMagenta + this._text); };
    get bgCyan() { return new ECConsole(ANSIEscapeCodes.bgCyan + this._text); };
    get bgWhite() { return new ECConsole(ANSIEscapeCodes.bgWhite + this._text); };
    // FOREGROUNG BRIGHT
    get fgBlackBright() { return new ECConsole(ANSIEscapeCodes.fgBlackBright + this._text); };
    get fgRedBright() { return new ECConsole(ANSIEscapeCodes.fgRedBright + this._text); };
    get fgGreenBright() { return new ECConsole(ANSIEscapeCodes.fgGreenBright + this._text); };
    get fgYellowBright() { return new ECConsole(ANSIEscapeCodes.fgYellowBright + this._text); };
    get fgBlueBright() { return new ECConsole(ANSIEscapeCodes.fgBlueBright + this._text); };
    get fgMagentaBright() { return new ECConsole(ANSIEscapeCodes.fgMagentaBright + this._text); };
    get fgCyanBright() { return new ECConsole(ANSIEscapeCodes.fgCyanBright + this._text); };
    get fgWhiteBright() { return new ECConsole(ANSIEscapeCodes.fgWhiteBright + this._text); };
    // BACKGROUND BRIGHT
    get bgBlackBright() { return new ECConsole(ANSIEscapeCodes.bgBlackBright + this._text); };
    get bgRedBright() { return new ECConsole(ANSIEscapeCodes.bgRedBright + this._text); };
    get bgGreenBright() { return new ECConsole(ANSIEscapeCodes.bgGreenBright + this._text); };
    get bgYellowBright() { return new ECConsole(ANSIEscapeCodes.bgYellowBright + this._text); };
    get bgBlueBright() { return new ECConsole(ANSIEscapeCodes.bgBlueBright + this._text); };
    get bgMagentaBright() { return new ECConsole(ANSIEscapeCodes.bgMagentaBright + this._text); };
    get bgCyanBright() { return new ECConsole(ANSIEscapeCodes.bgCyanBright + this._text); };
    get bgWhiteBright() { return new ECConsole(ANSIEscapeCodes.bgWhiteBright + this._text); };

    get set() { return this._text + ANSIEscapeCodes.reset; };

}

module.exports.ANSIEscapeCodes = ANSIEscapeCodes;
module.exports.ECConsole = ECConsole;