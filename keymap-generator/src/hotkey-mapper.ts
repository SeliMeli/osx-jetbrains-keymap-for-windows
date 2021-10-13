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
    'ctrl': '^',
    'shift': '+',
    'alt': '!',
    'BACK_SPACE': 'Backspace',
    'PAGE_UP': 'PgUp',
    'DELETE': 'Del',
    'EQUAL': '=',
    'BACK_QUOTE': '`',
    'MULTIPLY': '*'
}

const allowedNormalKeys = new Set(['HOME', 'END', 'ENTER', 'TAB', 'SPACE', 'INSERT', 'RIGHT', 'LEFT', 'UP', 'DOWN'])

const isAlphanumeric = (s: string) => /^[a-zA-Z0-9]$/.test(s)

const isFunctionKey = (s: string) => /^F[1-2]*[0-9]$/.test(s)

export const translateKey = (shortcut: string) => {

    if (keymapTable[shortcut]!=undefined) {
        return keymapTable[shortcut]
    }

    if (isAlphanumeric(shortcut)) {
        return shortcut.toLowerCase()
    }

    if (isFunctionKey(shortcut)) {
        return shortcut
    }

    if (allowedNormalKeys.has(shortcut)) {
        return _.capitalize(shortcut)
    }

    throw `unknown key: ${shortcut}`
}