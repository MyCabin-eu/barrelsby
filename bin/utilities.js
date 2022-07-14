"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Convert path separator from windows to unix */
function convertPathSeparator(path) {
    return path.replace(/\\+/g, "/");
}
exports.convertPathSeparator = convertPathSeparator;
/** transform file extension (.SVG) to lowercase */
function convertFileExtensionToLowercase(path) {
    return path.replace(/\.SVG+/g, ".svg");
}
exports.convertFileExtensionToLowercase = convertFileExtensionToLowercase;
exports.isTypeScriptFile = /\.tsx?$/m;
exports.isSVGFile = /\.svg?$|\.SVG?$/m;
exports.nonAlphaNumeric = /\W+/g;
exports.thisDirectory = /^\.[\\\/]/g;
exports.indentation = "  ";
//# sourceMappingURL=utilities.js.map