export interface CharStream {
    index: number; // defined as property
    size: number;// defined as property

    constructor(data: string): CharStream;
    constructor(data: string, decodeToUnicodeCodePoints?: boolean): CharStream;

    reset(): void;
    consume(): void;
    LA(offset: number): number;
    LT(offset: number): number;
    mark(): number;
    release(marker: number): void;
    seek(index: number): void;
    getText(start: number, stop: number): string;
    toString(): string;
}

export declare class CharStream {}
export default CharStream;
