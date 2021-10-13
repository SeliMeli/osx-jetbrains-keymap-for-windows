import * as chai from "chai";
import {print} from "../ahk-script-printer";

chai.should()

const expectedResult = (processName: string, ...results: string[]) => {
    return `
LAlt::LWin
LWin::LAlt
#IfWinActive ahk_exe ${processName}
{  
    ${results.join('\n')}
}
    `
}


describe('printer tests', () => {
    it('should print result success', () => {
        const translateResult = [
            {action: 'first', left: '#k', right: ['LWin', 'k']},
            {action: 'second', left: '#+k', right: ['LWin', 'LShift','k']}
        ]
        const result = print('java.exe', translateResult)
        result.should.be.equal(expectedResult('java.exe',
            '$#k::ControlSend ,,{Blind}{LWin down}{k down}{k up}{LWin up},ahk_exe java.exe ; first',
            '$#+k::ControlSend ,,{Blind}{LWin down}{LShift down}{k down}{k up}{LShift up}{LWin up},ahk_exe java.exe ; second'
        ))
    })
    it('should print warning when translate result is error msg', () => {
        const translateResult = ['I am an error!']
        const result = print('java.exe', translateResult)
        result.should.be.equal(expectedResult('java.exe',
            '; I am an error!'
        ))
    })
})
