import {ParserRuleContext} from "../context";
import {ParseTree} from "./ParseTree";
import {Token} from "../Token";

export default TerminalNode;
declare class TerminalNode extends ParseTree {
    symbol: Token;
    parentCtx: ParserRuleContext;
}
