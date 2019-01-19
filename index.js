
const styles = {
    // OPTION
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
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
    bgWhite: "\x1b[47m"
};

class ECConsole {

    constructor(text) {
        this._text = text;
    }

    // OPTION
    get reset() { return new ECConsole(styles.reset + this._text); };
    get bright() { return new ECConsole(styles.bright + this._text); };
    get dim() { return new ECConsole(styles.dim + this._text); };
    get underscore() { return new ECConsole(styles.underscore + this._text); };
    get blink() { return new ECConsole(styles.blink + this._text); };
    get reverse() { return new ECConsole(styles.reverse + this._text); };
    get hidden() { return new ECConsole(styles.hidden + this._text); };
    // FOREGROUNG
    get fgBlack() { return new ECConsole(styles.fgBlack + this._text); };
    get fgRed() { return new ECConsole(styles.fgRed + this._text); };
    get fgGreen() { return new ECConsole(styles.fgGreen + this._text); };
    get fgYellow() { return new ECConsole(styles.fgYellow + this._text); };
    get fgBlue() { return new ECConsole(styles.fgBlue + this._text); };
    get fgMagenta() { return new ECConsole(styles.fgMagenta + this._text); };
    get fgCyan() { return new ECConsole(styles.fgCyan + this._text); };
    get fgWhite() { return new ECConsole(styles.fgWhite + this._text); };
    // BACKGROUND
    get bgBlack() { return new ECConsole(styles.bgBlack + this._text); };
    get bgRed() { return new ECConsole(styles.bgRed + this._text); };
    get bgGreen() { return new ECConsole(styles.bgGreen + this._text); };
    get bgYellow() { return new ECConsole(styles.bgYellow + this._text); };
    get bgBlue() { return new ECConsole(styles.bgBlue + this._text); };
    get bgMagenta() { return new ECConsole(styles.bgMagenta + this._text); };
    get bgCyan() { return new ECConsole(styles.bgCyan + this._text); };
    get bgWhite() { return new ECConsole(styles.bgWhite + this._text); };

    get set() { return this._text + styles.reset; };

}

module.exports = ECConsole;