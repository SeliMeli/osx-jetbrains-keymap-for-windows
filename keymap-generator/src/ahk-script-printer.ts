import {TranslateResult} from "./translator";
import * as _ from "lodash";



export const print = (processName: string, translateResults: (string | TranslateResult)[]) => {
    const printOneLine = printTranslateResult(processName)
    return `
LAlt::LWin
LWin::LAlt
#IfWinActive ahk_exe ${processName}
{  
    ${_.map(translateResults, r => printOneLine(r)).join('\n')}
}
    `
}

const printTranslateResult = (processName: string) => (translateResult: TranslateResult | string) => {
    if (typeof translateResult === 'string') {
        return `; ${translateResult}`
    }
    return `$${translateResult.left}::ControlSend ,,{Blind}${printRightResult(translateResult.right)},ahk_exe ${processName} ; ${translateResult.action}`
}

const printRightResult = (right: string[]) => {
    const downStrike = _.map(right, s => `{${s} down}`).join('')
    const upStrike = _.map(right.reverse(), s => `{${s} up}`).join('')
    return downStrike+upStrike
}