import _ = require("lodash");

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
    'META': '#',
    'CONTROL': '^',
    'CTRL': '^',
    'SHIFT': '+',
    'ALT': '!',
    'BACK_SPACE': 'Backspace',
    'PAGE_UP': 'PgUp',
    'DELETE': 'Del',
    'EQUAL': '=',
    'EQUALS': '=',
    'DIVIDE': '/',
    'BACK_QUOTE': '`',
    'MULTIPLY': '*'
}

const allowedNormalKeys = new Set(['HOME', 'END', 'ENTER', 'TAB', 'SPACE', 'INSERT', 'RIGHT', 'LEFT', 'UP', 'DOWN'])

const isAlphanumeric = (s: string) => /^[a-zA-Z0-9]$/.test(s)

const isFunctionKey = (s: string) => /^F[1-2]*[0-9]$/.test(s)

export const translateKey = (shortcut: string) => {
    const uppercaseShortcut = shortcut.toUpperCase()
    if (keymapTable[uppercaseShortcut]!=undefined) {
        return keymapTable[uppercaseShortcut]
    }

    if (isAlphanumeric(uppercaseShortcut)) {
        return shortcut.toLowerCase()
    }

    if (isFunctionKey(uppercaseShortcut)) {
        return uppercaseShortcut
    }

    if (allowedNormalKeys.has(uppercaseShortcut)) {
        return _.capitalize(uppercaseShortcut)
    }

    throw `unknown key: ${shortcut}`
}