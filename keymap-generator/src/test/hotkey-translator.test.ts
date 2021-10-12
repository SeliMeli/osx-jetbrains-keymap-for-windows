import {translateKey} from "../hotkey-translator";
import * as chai from "chai";
import {expect} from "chai";

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

    describe('should translate arrow keys success', ()=>{
        const modifierTranslationTable = [
            ['LEFT', 'Left'],
            ['UP', 'Up'],
            ['DOWN', 'Down'],
            ['RIGHT',  'Right']
        ]
        modifierTranslationTable.forEach(([arrowKey, ahkHotkey]) => {
            it(`should translate ${arrowKey} to ${ahkHotkey} success`, () => {
                const result = translateKey(arrowKey)
                result.should.equal(ahkHotkey)
            });
        })
    })

    it('should throw error if unknown key is passed', () => {
        const unknownKey = 'unknown'
        expect(() => translateKey(unknownKey)).to.throws('unknown key')
    })
})