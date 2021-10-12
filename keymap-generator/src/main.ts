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

const keyAction = [] as any[]

const actions = parsedKeymap.keymap.action;

for (let i=0; i<actions.length; i++){
    const actionName = actions[i]['@_id'];
    console.log(actionName)
    const keys = actions[i]["keyboard-shortcut"]
    if(keys){
        if(keys.length){ 
            for (let key of keys) {
                keyAction.push({"key": key["@_first-keystroke"],"action": actionName})
            }
        } else{
            keyAction.push({"key": keys["@_first-keystroke"],"action": actionName})
        }
    }
}

console.log(keyAction)

//TODO: translate keymap to ahk script.