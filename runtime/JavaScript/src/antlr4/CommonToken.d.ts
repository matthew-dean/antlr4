import { Token } from './Token';

declare class CommonToken extends Token {
    constructor(source: number, type: number, channel: number, start: number, stop: number);
    clone(): CommonToken;
    cloneWithType(type: number): CommonToken;
    toString(): string;
}

export default CommonToken;
