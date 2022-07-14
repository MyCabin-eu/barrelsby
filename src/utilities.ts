/** A location in the file tree. */
export interface Location {
  /** The full path of the location including the name. */
  path: string;
  /** The local name of the location. */
  name: string;
}

/** A directory in the file tree. */
export interface Directory extends Location {
  /** The directories within the directory. */
  directories: Directory[];
  /** The files within the directory. */
  files: Location[];
  /** The barrel within the directory if one exists. */
  barrel?: Location;
}

/** Convert path separator from windows to unix */
export function convertPathSeparator(path: string): string {
  return path.replace(/\\+/g, "/");
}
/** transform file extension (.SVG) to lowercase */
export function convertFileExtensionToLowercase(path: string): string {
  return path.replace(/\.SVG+/g, ".svg")
}

export const isTypeScriptFile = /\.tsx?$/m;
export const isSVGFile = /\.svg?$|\.SVG?$/m;
export const nonAlphaNumeric = /\W+/g;
export const thisDirectory = /^\.[\\\/]/g;
export const indentation = "  ";
