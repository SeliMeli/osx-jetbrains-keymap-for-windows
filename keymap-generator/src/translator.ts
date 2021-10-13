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
    return _.chain(actions)
        .filter(action => action.keys.some(key => key === MetaKey || ArrowKeys.includes(key)))
        .map((action) => {
            let translated
            try {
                translated = _.map(action.keys, (key) => translateKey(key))
            } catch (e) {
                return `${e}, skip action: ${action.action}`
            }
            return {action: action.action, left: translated.join(''), right: translateRight(translated)}
        }).value()
}

const translateRight = (translated: string[]) => {
    return _.map(translated, (key) => modifierMap[key] ?? key)
}