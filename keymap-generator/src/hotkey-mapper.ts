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
    'meta': '#',
    'control': '^',
    'shift': '+',
    'alt': '!',
    'BACK_SPACE': 'Backspace',
    'PAGE_UP': 'PgUp',
    'DELETE': 'Del',
    'EQUAL': '=',
}

const allowedNormalKeys = new Set(['HOME', 'END', 'ENTER', 'TAB', 'SPACE', 'INSERT', 'RIGHT', 'LEFT', 'UP', 'DOWN'])

const isAlphabet = (s: string) => /^[a-zA-Z]$/.test(s)

export const translateKey = (shortcut: string) => {

    if (keymapTable[shortcut]!=undefined) {
        return keymapTable[shortcut]
    }

    if (isAlphabet(shortcut)) {
        return shortcut.toLowerCase()
    }

    if (allowedNormalKeys.has(shortcut)) {
        return _.capitalize(shortcut)
    }

    throw `unknown key: ${shortcut}`
}