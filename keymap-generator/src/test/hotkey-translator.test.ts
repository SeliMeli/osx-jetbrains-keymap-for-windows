import {translateKey} from "../hotkey-translator";
import * as chai from "chai";

chai.should()

describe('hotkey translator tests', () => {
    describe('should translate modifier keys success', ()=>{
        const modifierTranslationTable = [
            ['meta', '#'],
            ['control', '^'],
            ['shift', '+'],
            ['alt',  '!']
        ]
        modifierTranslationTable.forEach(([modifier, ahkHotkey]) => {
            it(`should translate ${modifier} to ${ahkHotkey} success`, () => {
                const result = translateKey(modifier)
                result.should.equal(ahkHotkey)
            });
        })
    })
})