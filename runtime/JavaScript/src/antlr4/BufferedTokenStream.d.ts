import TokenStream from './TokenStream';
import Lexer from './Lexer';

export default BufferedTokenStream;
declare class BufferedTokenStream extends TokenStream {

    tokenSource: Lexer;

}
