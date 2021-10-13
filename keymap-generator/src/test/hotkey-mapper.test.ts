import {translateKey} from "../hotkey-mapper";
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

    describe('should translate all alphabetic keys to lowercase success', ()=>{
        const uppercaseAlphabetTranslations = [
            ['A', 'a'],
            ['B', 'b'],
            ['c', 'c'],
        ]
        uppercaseAlphabetTranslations.forEach(([arrowKey, ahkHotkey]) => {
            it(`should translate ${arrowKey} to ${ahkHotkey} success`, () => {
                const result = translateKey(arrowKey)
                result.should.equal(ahkHotkey)
            });
        })
    })

    describe('should translate all other keys to success', ()=>{
        const uppercaseAlphabetTranslations = [
            ['LEFT', 'Left'],
            ['UP', 'Up'],
            ['DOWN', 'Down'],
            ['RIGHT',  'Right'],
            ['ENTER', 'Enter'],
            ['TAB', 'Tab'],
            ['SPACE', 'Space'],
        ]
        uppercaseAlphabetTranslations.forEach(([arrowKey, ahkHotkey]) => {
            it(`should translate ${arrowKey} to ${ahkHotkey} success`, () => {
                const result = translateKey(arrowKey)
                result.should.equal(ahkHotkey)
            });
        })
    })

    describe('should translate special defined keys success', ()=>{
        const specialDefinedKeys = [
            ['BACK_SPACE', 'Backspace'],
            ['DELETE', 'Del'],
            ['PAGE_UP', 'PgUp'],
            ['PAGE_DOWN', 'PgDown'],
        ]
        specialDefinedKeys.forEach(([specialDefinedKey, ahkHotkey]) => {
            it(`should translate ${specialDefinedKey} to ${ahkHotkey} success`, () => {
                const result = translateKey(specialDefinedKey)
                result.should.equal(ahkHotkey)
            });
        })
    })

    describe('should translate symbols success', () => {
        const symbolsTranslation = [
            ['COMMA', ','],
            ['SEMICOLON', ';'],
            ['SLASH', '/'],
            ['OPEN_BRACKET', '['],
            ['CLOSE_BRACKET', ']'],
            ['ADD', '!='],
            ['MINUS', '-'],
            ['SUBSTRATE', '-'],
            ['EQUAL', '='],
        ]
        symbolsTranslation.forEach(([symbol, ahkHotkey]) => {
            it(`should translate ${symbol} to ${ahkHotkey} success`, () => {
                const result = translateKey(symbol)
                result.should.equal(ahkHotkey)
            });
        })
    })

    it('should throw error if unknown key is passed', () => {
        const unknownKey = 'HELL'
        expect(() => translateKey(unknownKey)).to.throws(`unknown key: ${unknownKey}`)
    })
})