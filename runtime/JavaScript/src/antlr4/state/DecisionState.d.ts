import {ATNState} from "./index";

export default DecisionState;
declare class DecisionState extends ATNState {
    decision: number;
    nonGreedy: boolean;
}
