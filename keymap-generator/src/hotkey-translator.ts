
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

    // TODO: symbols, upper case alphabets, return, delete(backspace), tab
    throw 'unknown key'
}