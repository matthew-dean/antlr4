export declare class CharStreamClass {
    index: number; // defined as property
    size: number;// defined as property

    constructor(data: string);
    constructor(data: string, decodeToUnicodeCodePoints: boolean);

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
// export declare interface CharStream extends CharStreamClass {}


// interface CharStreamClass {
//     index: number; // defined as property
//     size: number;// defined as property

//     reset(): void;
//     consume(): void;
//     LA(offset: number): number;
//     LT(offset: number): number;
//     mark(): number;
//     release(marker: number): void;
//     seek(index: number): void;
//     getText(start: number, stop: number): string;
//     toString(): string;
// }
// export let CharStreamType: {
//     new(data: string): CharStreamType;
//     new(data: string, decodeToUnicodeCodePoints: boolean): CharStreamType;
// };

// declare const CharStreamClass: {
//     new(data: string): CharStream;
//     new(data: string, decodeToUnicodeCodePoints: boolean): CharStream;
// };
// export type CharStream = typeof CharStreamClass