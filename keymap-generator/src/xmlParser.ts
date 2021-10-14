import * as parser from "fast-xml-parser";
import * as _ from "lodash";

type Shortcut = { '@_first-keystroke': string }

type TargetKeymapItem = { 'keyboard-shortcut': Shortcut | Shortcut[] }

type Keymap = { 'keymap': { 'action': [TargetKeymapItem | any] } }

const parseOption = {
    ignoreAttributes: false,
    parseNodeValue: false,
    parseAttributeValue: true,
    trimValues: true,
}


export const getParsedResult = (rawXml: string) => {
    const parsedKeymap = parser.parse(rawXml, parseOption) as Keymap

    const actions = parsedKeymap.keymap.action;

    return _.chain(actions)
        .filter((action) => action['keyboard-shortcut'])
        .flatMap((action) =>
            _.map(tryConvertToCollection(action['keyboard-shortcut']),
                (key) => ({"keys": (key["@_first-keystroke"] as string).split(' '), "action": action['@_id'] as string})
            )
        ).value()
}

const tryConvertToCollection = <T>(input: T | T[]) => {
    if (Array.isArray(input)) {
        return input
    } else {
        return [input]
    }
}

