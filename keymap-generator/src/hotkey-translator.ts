import _ = require("lodash");

export const translateKey = (shortcut: string) => {
    const keymapTable = {
        'COMMA': ',',
        'SEMICOLON': ';',
        'SLASH': '/',
        'PAGE_DOWN': 'PgDown',
        'OPEN_BRACKET': '[',
        'CLOSE_BRACKET': ']',
        'ADD': '!=',
        'MINUS': '-',
        'SUBSTRATE': '-',
        'meta': '#',
        'control': '^',
        'shift': '+',
        'alt': '!',
        'BACK_SPACE': 'Backspace',
        'PAGE_UP': 'PgUp',
        'DELETE': 'Del',
    }
    if (keymapTable[shortcut]!=undefined) {
        return keymapTable[shortcut]
    }

    if (isAlphabet(shortcut)) {
        return shortcut.toLowerCase()
    }

    if (shortcut.toUpperCase() === shortcut) {
        return _.capitalize(shortcut)
    }

    // TODO: symbols
    throw `unknown key: ${shortcut}`
}

const isAlphabet = (s: string) => /^[a-zA-Z]$/.test(s)