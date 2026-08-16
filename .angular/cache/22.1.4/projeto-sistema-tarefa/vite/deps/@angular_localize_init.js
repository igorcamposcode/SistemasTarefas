/**
* @license Angular v22.1.2
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var Endian;
(function(Endian) {
	Endian[Endian["Little"] = 0] = "Little";
	Endian[Endian["Big"] = 1] = "Big";
})(Endian || (Endian = {}));
function findEndOfBlock(cooked, raw) {
	for (let cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) if (raw[rawIndex] === "\\") rawIndex++;
	else if (cooked[cookedIndex] === ":") return cookedIndex;
	throw new Error(`Unterminated $localize metadata block in "${raw}".`);
}
var $localize = function(messageParts, ...expressions) {
	if ($localize.translate) {
		const translation = $localize.translate(messageParts, expressions);
		messageParts = translation[0];
		expressions = translation[1];
	}
	let message = stripBlock(messageParts[0], messageParts.raw[0]);
	for (let i = 1; i < messageParts.length; i++) message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
	return message;
};
var BLOCK_MARKER = ":";
function stripBlock(messagePart, rawMessagePart) {
	return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}
//#endregion
//#region node_modules/@angular/localize/fesm2022/init.mjs
/**
* @license Angular v22.1.2
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
globalThis.$localize = $localize;
//#endregion
export { $localize };
