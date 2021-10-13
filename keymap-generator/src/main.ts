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

var xmlFilePath = "./resources/osx10_5_plus.xml"
var executable = "java.exe"
console.log(process.argv)
var args = process.argv;
for (var i=0; i<args.length-1; i++){
    if(args[i] == '-f' && args[i+1]){
        xmlFilePath = args[i+1];
    }
    if(args[i] == '-ex' && args[i+1]){
        executable = args[i+1];
    }
}

const keymapConfigReadStream = fs.readFileSync(xmlFilePath).toString()
//./resources/osx10_5_plus.xml
const parsedKeymap = parser.parse(keymapConfigReadStream, parseOption) as Keymap

var keyAction = [] as any;

var actions = parsedKeymap.keymap.action;

for (var i=0;i<actions.length;i++){
    var actionName = actions[i]['@_id'];
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

console.log(JSON.stringify(parsedKeymap.keymap));
