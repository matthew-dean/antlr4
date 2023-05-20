import {ATNConfigSet} from "../atn";
import {Recognizer} from "../Recognizer";
import { Token } from "../Token";
import {RecognitionException} from "./RecognitionException";

export default NoViableAltException;
declare class NoViableAltException extends RecognitionException {

    deadEndConfigs: ATNConfigSet;

    constructor(recognizer: Recognizer<any>);

    startToken: Token;
}
