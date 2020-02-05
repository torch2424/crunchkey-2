import { AstNode, AST_NODE_TYPES } from "../parser/ast-node";
import { wasmBrowserInstantiate } from "../instantiate-wasm";

const wasmLoad = (async () => {
    const wasmModule = await wasmBrowserInstantiate("./index.wasm");

    const wasmExports = wasmModule.instance.exports;

    return {
        "log":  (values) => wasmExports.log(values[0]),
        "ln":   (values) => wasmExports.ln(values[0]),
        "sqrt": (values) => wasmExports.sqrt(values[0]),
        "+":    (values) => wasmExports.add(values[0], values[1]),
        "-":    (values) => wasmExports.subtract(values[0], values[1]),
        "/":    (values) => wasmExports.divide(values[0], values[1]),
        "*":    (values) => wasmExports.multiply(values[0], values[1]),
        "^":    (values) => wasmExports.pow(values[0], values[1]),
        "%":    (values) => wasmExports.mod(values[0], values[1]),
    };
})();

const evaluate = async (node: AstNode) => {
    const handlers = await wasmLoad;

    const values = node.children.map(childNode => childNode.type === AST_NODE_TYPES.OPERATOR ? evaluate(childNode) : childNode.value);

    return handlers[node.value](values);
}
