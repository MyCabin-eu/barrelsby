"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
const path_1 = __importDefault(require("path"));
function buildFlatBarrel(directory, modules, quoteCharacter, semicolonCharacter, logger, baseUrl, exportDefault) {
    return modules.reduce((previous, current) => {
        const importPath = builder_1.buildImportPath(directory, current, baseUrl);
        logger(`Including path ${importPath}`);
        if (exportDefault) {
            const filename = path_1.default.basename(current.path).split(".")[0];
            previous += `export { default as Icon${filename} } from ${quoteCharacter}${importPath}${quoteCharacter}${semicolonCharacter}
`;
        }
        return previous;
        // return (previous += `export * from ${quoteCharacter}${importPath}${quoteCharacter}${semicolonCharacter}
        // `);
    }, "");
}
exports.buildFlatBarrel = buildFlatBarrel;
//# sourceMappingURL=flat.js.map