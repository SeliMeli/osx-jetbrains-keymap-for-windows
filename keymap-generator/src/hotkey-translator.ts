
export const translateKey = (shortcut: string) => {
    if (shortcut === 'meta') return '#'
    if (shortcut === 'control') return '^'
    if (shortcut === 'shift') return '+'
    if (shortcut === 'alt') return '!'
    // TODO: symbols, upper case alphabets, return, delete(backspace), tab
    throw 'unknown key'
}