import { CharStream } from './CharStream';

export abstract class Token {

    static EOF: number;

    tokenIndex: number;
    line: number;
    column: number;
    channel: number;
    text: string;
    type: number;
    start : number;
    stop: number;

    abstract clone(): Token;
    abstract cloneWithType(type: number): Token;
    abstract getInputStream(): CharStream;
}
