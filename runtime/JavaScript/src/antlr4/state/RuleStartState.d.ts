import {ATNState, RuleStopState} from "./index";

export default RuleStartState;
declare class RuleStartState extends ATNState {
    stopState: RuleStopState;
    isLeftRecursiveRule: boolean;
}
