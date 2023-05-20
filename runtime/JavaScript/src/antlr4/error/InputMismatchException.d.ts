import {RecognitionException} from "./RecognitionException";
import {Parser} from "../Parser";

export default InputMismatchException;
declare class InputMismatchException extends RecognitionException {
    constructor(recognizer: Parser);
}