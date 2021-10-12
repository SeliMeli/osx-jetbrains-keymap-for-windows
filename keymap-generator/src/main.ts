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

var keyAction = [] as any;

var actions = parsedKeymap.keymap.action;

for (var i=0;i<actions.length;i++){
    var actionName = actions[i]['@_id'];
    console.log(actionName)
    var keys = actions[i]["keyboard-shortcut"]
    if(keys){
        if(keys.length){ 
            for (var key of keys) {
                keyAction.push({"key": key["@_first-keystroke"],"action": actionName})
            }
        } else{
            keyAction.push({"key": keys["@_first-keystroke"],"action": actionName})
        }
    }
}

console.log(keyAction)

//TODO: translate keymap to ahk script.

console.log(JSON.stringify(parsedKeymap.keymap))