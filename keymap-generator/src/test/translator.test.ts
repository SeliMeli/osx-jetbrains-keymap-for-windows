import * as chai from "chai";
import {translate, TranslateResult} from "../translator";

chai.should()

describe('translator tests', () => {
    it('should translate key action to ahkscript instruction success with action name', () => {
        const keyAction = [{keys: ['meta', 'K', 'M', 'P'], action: 'test one'}]
        const result = translate(keyAction)

        result.length.should.equal(1)
        const target = result[0] as TranslateResult
        target.action.should.equal('test one')
    })
    it('should translate keys to left construction success', () => {
        const keyAction = [{keys: ['control', 'meta', 'shift', 'alt', 'K', 'M', 'P'], action: 'test one'}]
        const result = translate(keyAction)

        const target = result[0] as TranslateResult
        target.left.should.equal('^#+!kmp')
    })
    it('should translate modifier keys to right construction success', () => {
        const keyAction = [{keys: ['control', 'meta', 'shift', 'alt'], action: 'test one'}]
        const result = translate(keyAction)

        result.length.should.equal(1)
        const target = result[0] as TranslateResult
        target.right.should.eql(['LCtrl', 'LWin', 'LShift', 'LAlt'])
    })
    it('should translate other keys to right as hotkey mapper success', () => {
        const keyAction = [{keys: ['meta', 'K', 'UP', 'HOME'], action: 'test one'}]
        const result = translate(keyAction)

        const target = result[0] as TranslateResult
        target.right.should.eql(['LWin', 'k', 'Up', 'Home'])
    })
    it('should return error msg when keys contains unknown key', () => {
        const unknownKey = 'WrongKey'
        const action = 'test one';
        const unknownKeyAction = [{keys: ['WrongKey', 'K', 'UP', 'HOME'], action: action}]
        const result = translate(unknownKeyAction)

        const target = result[0] as string
        target.should.be.equal(`unknown key: ${unknownKey}, skip action: ${action}`)
    })
    it('should not map keys without meta or arrow keys', () => {
        const keyAction = [{keys: ['K', 'HOME'], action: 'skip one'}]
        const result = translate(keyAction)

        result.length.should.be.equal(0)
    })
    it('should translate constructions with same keys success', () => {
        const keyAction = [{keys: ['meta', 'K'], action: 'test one'}, {keys: ['meta', 'K'], action: 'test two'}]
        const result = translate(keyAction)

        result.length.should.be.equal(1)
        const target = result[0] as TranslateResult
        target.right.should.eql(['LWin', 'k'])
        target.action.should.eql('test one & test two')
    })
})