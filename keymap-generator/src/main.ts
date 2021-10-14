import * as fs from 'fs';

import {translate} from "./translator";
import {print} from "./ahk-script-printer";
import {Command} from "commander";
import {getParsedResult} from "./xmlParser";


const keyGeneratorProgram = new Command()
keyGeneratorProgram
    .usage('kmg [options]')
    .requiredOption('-f, --file <file>', 'path of jetbrains keymap xml file')
    .option('-e, --exec <exec>', 'windows process name that ahk need to send key strike to', 'java.exe')
    .option('-d, --destination <destination>', 'generated ahk script file location')
    .showSuggestionAfterError()
    .showHelpAfterError()

keyGeneratorProgram.parse()

const options = keyGeneratorProgram.opts()

const keymapConfigReadStream = fs.readFileSync(options.file).toString()

const translateResult = translate(getParsedResult(keymapConfigReadStream))
const script = print(options.exec, translateResult)


const destination = options.destination;

if (destination) {
    if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
        throw `destination is directory: ${destination}`
    }
    console.info(`Generated file: ${destination}`)
    fs.writeFileSync(destination, script)
} else {
    console.info(script)
}