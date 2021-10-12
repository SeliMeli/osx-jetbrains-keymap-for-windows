
export const translateKey = (shortcut: string) => {
    switch (shortcut) {
        case 'meta':
            return '#'
        case 'control':
            return '^'
        case 'shift':
            return '+'
        case 'alt':
            return '!'
        case 'LEFT':
            return 'Left'
        case 'UP':
            return'Up'
        case 'DOWN':
            return 'Down'
        case 'RIGHT':
            return 'Right'
    }

    if (isAlphabet(shortcut)) {
        return shortcut.toLowerCase()
    }

    // TODO: symbols, upper case alphabets, return, delete(backspace), tab
    throw 'unknown key'
}

const isAlphabet = (s: string) => /^[a-zA-Z]$/.test(s)