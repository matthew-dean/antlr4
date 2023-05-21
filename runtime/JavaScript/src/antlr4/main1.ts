export interface Print {
  ping(txt: string): void;
}
export class TextBook implements Print {
  print() {}
}
