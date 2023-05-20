import {ErrorListener} from "./error";

export default Recognizer;
declare class Recognizer<TSymbol> {

    state: number;

    removeErrorListeners(): void;
    addErrorListener(listener: ErrorListener<TSymbol>): void;
}
