import * as _ from "lodash";
import {translateKey} from "./hotkey-mapper";

export interface KeyAction {
    keys: string[],
    action: string
}

const modifierMap = {
    '^': 'LCtrl',
    '!': 'LAlt',
    '+': 'LShift',
    '#': 'LWin'
}
export const ArrowKeys = ['UP', 'DOWN', 'RIGHT', 'LEFT']
export const MetaKey = 'meta'

export interface TranslateResult {
    action: string,
    left: string,
    right: string[]
}

export const translate: (actions: KeyAction[]) => (string | TranslateResult)[] = (actions: KeyAction[]) => {

    let ahkStore: { [Key: string]: TranslateResult } = {}
    const errStore: (string | TranslateResult)[] = []

    _.filter(actions,action => action.keys.some(key => key === MetaKey || ArrowKeys.includes(key)))
        .forEach((action) => {
            try {
                const translated = _.map(action.keys, (key) => translateKey(key))
                let left = translated.join('')
                if (ahkStore[left]) {
                    ahkStore[left].action = `${ahkStore[left].action} & ${action.action}`
                } else {
                    ahkStore[left] = {action: action.action, left: left, right: translateRight(translated)}
                }
            } catch (e) {
                errStore.push(`${e}, skip action: ${action.action}`)
            }
        })
    return [...Object.values(ahkStore),...errStore]
}

const translateRight = (translated: string[]) => {
    return _.map(translated, (key) => modifierMap[key] ?? key)
}