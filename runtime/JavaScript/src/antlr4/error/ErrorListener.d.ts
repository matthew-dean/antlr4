import {Recognizer} from "../Recognizer";
import {RecognitionException} from "./RecognitionException";

export default ErrorListener;
declare class ErrorListener<TSymbol> {
    syntaxError(recognizer: Recognizer<TSymbol>, offendingSymbol: TSymbol, line: number, column: number, msg: string, e: RecognitionException | undefined): void;
}
