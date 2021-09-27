import * as fs from 'fs';
import * as parser from "fast-xml-parser";

export type Shortcut = { '@_first-keystroke': string }

export type TargetKeymapItem = {'keyboard-shortcut': Shortcut | Shortcut[]}

export type Keymap = {'keymap': { 'action': [TargetKeymapItem | any] }}

const parseOption = {
    ignoreAttributes: false,
    parseNodeValue : false,
    parseAttributeValue : true,
    trimValues: true,
}

const keymapConfigReadStream = fs.readFileSync('./resources/osx10_5_plus.xml').toString()

const parsedKeymap = parser.parse(keymapConfigReadStream, parseOption) as Keymap

//TODO: translate keymap to ahk script.

console.log(JSON.stringify(parsedKeymap.keymap))