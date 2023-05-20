import Recognizer from './Recognizer';
import LexerATNSimulator from './atn/LexerATNSimulator';
import CharStream from './CharStream';
import Token from './Token';

export default Lexer;
declare class Lexer extends Recognizer<number> {

    static DEFAULT_MODE: number;

    _input: CharStream;
    _interp: LexerATNSimulator;
    text: string;
    line: number;
    column: number;
    _tokenStartCharIndex: number;
    _tokenStartLine: number;
    _tokenStartColumn: number;
    _type: number;

    constructor(input: CharStream);
    reset(): void;
    nextToken(): Token;
    skip(): void;
    more(): void;
    more(m: number): void;
    pushMode(m: number): void;
    popMode(): number;
    emitToken(token: Token): void;
    emit(): Token;
    emitEOF(): Token;
    getAllTokens(): Token[];
}
