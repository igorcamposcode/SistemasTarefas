import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { Dc as InjectionToken, Dl as ɵɵdefineInjectable, Fn as Injectable, Ol as ɵɵdefineInjector, Ui as setClassMetadata, cl as inject, er as Pipe, jl as ɵɵinject, ml as makeEnvironmentProviders, no as ɵɵdefineNgModule, qn as NgModule, ro as ɵɵdefinePipe } from "./core-CXNTKvTk.js";
import { Qn as Subject, Zn as BehaviorSubject } from "./esm5-BupzNxh_.js";
import { D as FormStyle, gt as getLocaleDayPeriods, nt as TranslationWidth, ot as formatDate } from "./common-C7YlTbb3.js";
import { C as warn, u as isNotNil } from "./ng-zorro-antd-core-util-DcoCxePB.js";
//#region node_modules/date-fns/constants.js
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name millisecondsInWeek
* @summary Milliseconds in 1 week.
*/
var millisecondsInWeek = 6048e5;
/**
* @constant
* @name millisecondsInDay
* @summary Milliseconds in 1 day.
*/
var millisecondsInDay = 864e5;
/**
* @constant
* @name millisecondsInMinute
* @summary Milliseconds in 1 minute
*/
var millisecondsInMinute = 6e4;
/**
* @constant
* @name millisecondsInHour
* @summary Milliseconds in 1 hour
*/
var millisecondsInHour = 36e5;
/**
* @constant
* @name millisecondsInSecond
* @summary Milliseconds in 1 second
*/
var millisecondsInSecond = 1e3;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 3600 * 24;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
/**
* @constant
* @name constructFromSymbol
* @summary Symbol enabling Date extensions to inherit properties from the reference date.
*
* The symbol is used to enable the `constructFrom` function to construct a date
* using a reference date and a value. It allows to transfer extra properties
* from the reference date to the new date. It's useful for extensions like
* [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
* a constructor argument.
*/
var constructFromSymbol = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
//#endregion
//#region node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
//#endregion
//#region node_modules/date-fns/addDays.js
/**
* The {@link addDays} function options.
*/
/**
* @name addDays
* @category Day Helpers
* @summary Add the specified number of days to the given date.
*
* @description
* Add the specified number of days to the given date.
*
* **You don't need date-fns\***:
*
* Temporal has a built-in `add` method on all its classes:
*
* - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
* - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
* - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
* - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
* - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
* - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
*
* \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be added.
* @param options - An object with options
*
* @returns The new date with the days added
*
* @example
* // Add 10 days to 1 September 2014:
* const result = addDays(new Date(2014, 8, 1), 10)
* //=> Thu Sep 11 2014 00:00:00
*
* @example
* // Using Temporal:
* // Add 10 days to 1 September 2014:
* Temporal.PlainDate.from("2014-09-01").add({ days: 10 }).toString();
* //=> "2014-09-11"
*/
function addDays(date, amount, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	if (isNaN(amount)) return constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, NaN);
	if (!amount) return _date;
	_date.setDate(_date.getDate() + amount);
	return _date;
}
//#endregion
//#region node_modules/date-fns/addMonths.js
/**
* The {@link addMonths} function options.
*/
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
* @param options - The options object
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	if (isNaN(amount)) return constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
/**
* The {@link addMilliseconds} function options.
*/
/**
* @name addMilliseconds
* @category Millisecond Helpers
* @summary Add the specified number of milliseconds to the given date.
*
* @description
* Add the specified number of milliseconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of milliseconds to be added.
* @param options - The options object
*
* @returns The new date with the milliseconds added
*
* @example
* // Add 750 milliseconds to 10 July 2014 12:45:30.000:
* const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
* //=> Thu Jul 10 2014 12:45:30.750
*/
function addMilliseconds(date, amount, options) {
	return constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, +toDate(date) + amount);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions$1() {
	return defaultOptions;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _defaultOptions$local;
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = (_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0;
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
/**
* The {@link startOfISOWeek} function options.
*/
/**
* @name startOfISOWeek
* @category ISO Week Helpers
* @summary Return the start of an ISO week for the given date.
*
* @description
* Return the start of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week
*
* @example
* // The start of an ISO week for 2 September 2014 11:55:00:
* const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfISOWeek(date, options) {
	return startOfWeek(date, _objectSpread2(_objectSpread2({}, options), {}, { weekStartsOn: 1 }));
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
/**
* The {@link getISOWeekYear} function options.
*/
/**
* @name getISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Get the ISO week-numbering year of the given date.
*
* @description
* Get the ISO week-numbering year of the given date,
* which always starts 3 days before the year's first Thursday.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
*
* @returns The ISO week-numbering year
*
* @example
* // Which ISO-week numbering year is 2 January 2005?
* const result = getISOWeekYear(new Date(2005, 0, 2))
* //=> 2004
*/
function getISOWeekYear(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const year = _date.getFullYear();
	const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
	fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
	fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
	const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
	fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
	fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
/**
* The {@link startOfDay} function options.
*/
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
/**
* The {@link differenceInCalendarDays} function options.
*/
/**
* @name differenceInCalendarDays
* @category Day Helpers
* @summary Get the number of calendar days between the given dates.
*
* @description
* Get the number of calendar days between the given dates. This means that the times are removed
* from the dates and then the difference in days is calculated.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - The options object
*
* @returns The number of calendar days
*
* @example
* // How many calendar days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInCalendarDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 366
* // How many calendar days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInCalendarDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 1
*/
function differenceInCalendarDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options === null || options === void 0 ? void 0 : options.in, laterDate, earlierDate);
	const laterStartOfDay = startOfDay(laterDate_);
	const earlierStartOfDay = startOfDay(earlierDate_);
	const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
	const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
	return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
/**
* The {@link startOfISOWeekYear} function options.
*/
/**
* @name startOfISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Return the start of an ISO week-numbering year for the given date.
*
* @description
* Return the start of an ISO week-numbering year,
* which always starts 3 days before the year's first Thursday.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week-numbering year
*
* @example
* // The start of an ISO week-numbering year for 2 July 2005:
* const result = startOfISOWeekYear(new Date(2005, 6, 2))
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfISOWeekYear(date, options) {
	const year = getISOWeekYear(date, options);
	const fourthOfJanuary = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
	fourthOfJanuary.setFullYear(year, 0, 4);
	fourthOfJanuary.setHours(0, 0, 0, 0);
	return startOfISOWeek(fourthOfJanuary);
}
//#endregion
//#region node_modules/date-fns/addSeconds.js
/**
* The {@link addSeconds} function options.
*/
/**
* @name addSeconds
* @category Second Helpers
* @summary Add the specified number of seconds to the given date.
*
* @description
* Add the specified number of seconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of seconds to be added.
* @param options - An object with options
*
* @returns The new date with the seconds added
*
* @example
* // Add 30 seconds to 10 July 2014 12:45:00:
* const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
* //=> Thu Jul 10 2014 12:45:30
*/
function addSeconds(date, amount, options) {
	return addMilliseconds(date, amount * 1e3, options);
}
//#endregion
//#region node_modules/date-fns/addYears.js
/**
* The {@link addYears} function options.
*/
/**
* @name addYears
* @category Year Helpers
* @summary Add the specified number of years to the given date.
*
* @description
* Add the specified number of years to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The date to be changed
* @param amount - The amount of years to be added.
* @param options - The options
*
* @returns The new date with the years added
*
* @example
* // Add 5 years to 1 September 2014:
* const result = addYears(new Date(2014, 8, 1), 5)
* //=> Sun Sep 01 2019 00:00:00
*/
function addYears(date, amount, options) {
	return addMonths(date, amount * 12, options);
}
//#endregion
//#region node_modules/date-fns/constructNow.js
/**
* @name constructNow
* @category Generic Helpers
* @summary Constructs a new current date using the passed value constructor.
* @pure false
*
* @description
* The function constructs a new current date using the constructor from
* the reference date. It helps to build generic functions that accept date
* extensions and use the current date.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* @param date - The reference date to take constructor from
*
* @returns Current date initialized using the given date constructor
*
* @example
* import { constructNow, isSameDay } from 'date-fns'
*
* function isToday<DateType extends Date>(
*   date: DateArg<DateType>,
* ): boolean {
*   // If we were to use `new Date()` directly, the function would  behave
*   // differently in different timezones and return false for the same date.
*   return isSameDay(date, constructNow(date));
* }
*/
function constructNow(date) {
	return constructFrom(date, Date.now());
}
//#endregion
//#region node_modules/date-fns/isSameDay.js
/**
* The {@link isSameDay} function options.
*/
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options === null || options === void 0 ? void 0 : options.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
//#endregion
//#region node_modules/date-fns/isDate.js
/**
* @name isDate
* @category Common Helpers
* @summary Is the given value a date?
*
* @description
* Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
*
* @param value - The value to check
*
* @returns True if the given value is a date
*
* @example
* // For a valid date:
* const result = isDate(new Date())
* //=> true
*
* @example
* // For an invalid date:
* const result = isDate(new Date(NaN))
* //=> true
*
* @example
* // For some value:
* const result = isDate('2014-02-31')
* //=> false
*
* @example
* // For an object:
* const result = isDate({})
* //=> false
*/
function isDate(value) {
	return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
/**
* @name isValid
* @category Common Helpers
* @summary Is the given date valid?
*
* @description
* Returns false if argument is Invalid Date and true otherwise.
* Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
* Invalid Date is a Date, whose time value is NaN.
*
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @param date - The date to check
*
* @returns The date is valid
*
* @example
* // For the valid date:
* const result = isValid(new Date(2014, 1, 31))
* //=> true
*
* @example
* // For the value, convertible into a date:
* const result = isValid(1393804800000)
* //=> true
*
* @example
* // For the invalid date:
* const result = isValid(new Date(''))
* //=> false
*/
function isValid(date) {
	return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
//#endregion
//#region node_modules/date-fns/getQuarter.js
/**
* The {@link getQuarter} function options.
*/
/**
* @name getQuarter
* @category Quarter Helpers
* @summary Get the year quarter of the given date.
*
* @description
* Get the year quarter of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The quarter
*
* @example
* // Which quarter is 2 July 2014?
* const result = getQuarter(new Date(2014, 6, 2));
* //=> 3
*/
function getQuarter(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	return Math.trunc(_date.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/date-fns/endOfDay.js
/**
* The {@link endOfDay} function options.
*/
/**
* @name endOfDay
* @category Day Helpers
* @summary Return the end of a day for the given date.
*
* @description
* Return the end of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a day
*
* @example
* // The end of a day for 2 September 2014 11:55:00:
* const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 23:59:59.999
*/
function endOfDay(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/isLastDayOfMonth.js
/**
* @name isLastDayOfMonth
* @category Month Helpers
* @summary Is the given date the last day of a month?
*
* @description
* Is the given date the last day of a month?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is the last day of a month
*
* @example
* // Is 28 February 2014 the last day of a month?
* const result = isLastDayOfMonth(new Date(2014, 1, 28))
* //=> true
*/
function isLastDayOfMonth(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
//#endregion
//#region node_modules/date-fns/startOfQuarter.js
/**
* The {@link startOfQuarter} function options.
*/
/**
* @name startOfQuarter
* @category Quarter Helpers
* @summary Return the start of a year quarter for the given date.
*
* @description
* Return the start of a year quarter for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a quarter
*
* @example
* // The start of a quarter for 2 September 2014 11:55:00:
* const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Jul 01 2014 00:00:00
*/
function startOfQuarter(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const currentMonth = _date.getMonth();
	const month = currentMonth - currentMonth % 3;
	_date.setMonth(month, 1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
/**
* The {@link startOfMonth} function options.
*/
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date. The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
* Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
* or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
/**
* The {@link startOfYear} function options.
*/
/**
* @name startOfYear
* @category Year Helpers
* @summary Return the start of a year for the given date.
*
* @description
* Return the start of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a year
*
* @example
* // The start of a year for 2 September 2014 11:55:00:
* const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Jan 01 2014 00:00:00
*/
function startOfYear(date, options) {
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	date_.setFullYear(date_.getFullYear(), 0, 1);
	date_.setHours(0, 0, 0, 0);
	return date_;
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options === null || options === void 0 ? void 0 : options.addSuffix) if (options.comparison && options.comparison > 0) return "in " + result;
	else return result + " ago";
	return result;
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = (options === null || options === void 0 ? void 0 : options.context) ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = (options === null || options === void 0 ? void 0 : options.width) ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = (options === null || options === void 0 ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
	narrow: ["B", "A"],
	abbreviated: ["BC", "AD"],
	wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1st quarter",
		"2nd quarter",
		"3rd quarter",
		"4th quarter"
	]
};
var monthValues = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	wide: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	short: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	wide: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return number + "st";
		case 2: return number + "nd";
		case 3: return number + "rd";
	}
	return number + "th";
};
var localize = {
	ordinalNumber,
	era: buildLocalizeFn({
		values: eraValues,
		defaultWidth: "wide"
	}),
	quarter: buildLocalizeFn({
		values: quarterValues,
		defaultWidth: "wide",
		argumentCallback: (quarter) => quarter - 1
	}),
	month: buildLocalizeFn({
		values: monthValues,
		defaultWidth: "wide"
	}),
	day: buildLocalizeFn({
		values: dayValues,
		defaultWidth: "wide"
	}),
	dayPeriod: buildLocalizeFn({
		values: dayPeriodValues,
		defaultWidth: "wide",
		formattingValues: formattingDayPeriodValues,
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US.js
/**
* @category Locales
* @summary English locale (United States).
* @language English
* @iso-639-2 eng
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var enUS = {
	code: "en-US",
	formatDistance,
	formatLong,
	formatRelative,
	localize,
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
/**
* The {@link getDayOfYear} function options.
*/
/**
* @name getDayOfYear
* @category Day Helpers
* @summary Get the day of the year of the given date.
*
* @description
* Get the day of the year of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The day of year
*
* @example
* // Which day of the year is 2 July 2014?
* const result = getDayOfYear(new Date(2014, 6, 2))
* //=> 183
*/
function getDayOfYear(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	return differenceInCalendarDays(_date, startOfYear(_date)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
/**
* The {@link getISOWeek} function options.
*/
/**
* @name getISOWeek
* @category ISO Week Helpers
* @summary Get the ISO week of the given date.
*
* @description
* Get the ISO week of the given date.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - The options
*
* @returns The ISO week
*
* @example
* // Which week of the ISO-week numbering year is 2 January 2005?
* const result = getISOWeek(new Date(2005, 0, 2))
* //=> 53
*/
function getISOWeek(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
/**
* The {@link getWeekYear} function options.
*/
/**
* @name getWeekYear
* @category Week-Numbering Year Helpers
* @summary Get the local week-numbering year of the given date.
*
* @description
* Get the local week-numbering year of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The local week-numbering year
*
* @example
* // Which week numbering year is 26 December 2004 with the default settings?
* const result = getWeekYear(new Date(2004, 11, 26))
* //=> 2005
*
* @example
* // Which week numbering year is 26 December 2004 if week starts on Saturday?
* const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
* //=> 2004
*
* @example
* // Which week numbering year is 26 December 2004 if the first week contains 4 January?
* const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
* //=> 2004
*/
function getWeekYear(date, options) {
	var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _defaultOptions$local;
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const year = _date.getFullYear();
	const defaultOptions = getDefaultOptions$1();
	const firstWeekContainsDate = (_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1;
	const firstWeekOfNextYear = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
	firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
	firstWeekOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
	const firstWeekOfThisYear = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
	firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
	firstWeekOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
	if (+_date >= +startOfNextYear) return year + 1;
	else if (+_date >= +startOfThisYear) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
/**
* The {@link startOfWeekYear} function options.
*/
/**
* @name startOfWeekYear
* @category Week-Numbering Year Helpers
* @summary Return the start of a local week-numbering year for the given date.
*
* @description
* Return the start of a local week-numbering year.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week-numbering year
*
* @example
* // The start of an a week-numbering year for 2 July 2005 with default settings:
* const result = startOfWeekYear(new Date(2005, 6, 2))
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // The start of a week-numbering year for 2 July 2005
* // if Monday is the first day of week
* // and 4 January is always in the first week of the year:
* const result = startOfWeekYear(new Date(2005, 6, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfWeekYear(date, options) {
	var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _defaultOptions$local;
	const defaultOptions = getDefaultOptions$1();
	const firstWeekContainsDate = (_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1;
	const year = getWeekYear(date, options);
	const firstWeek = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
	firstWeek.setFullYear(year, 0, firstWeekContainsDate);
	firstWeek.setHours(0, 0, 0, 0);
	return startOfWeek(firstWeek, options);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
/**
* The {@link getWeek} function options.
*/
/**
* @name getWeek
* @category Week Helpers
* @summary Get the local week index of the given date.
*
* @description
* Get the local week index of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options
*
* @returns The week
*
* @example
* // Which week of the local week numbering year is 2 January 2005 with default options?
* const result = getWeek(new Date(2005, 0, 2))
* //=> 2
*
* @example
* // Which week of the local week numbering year is 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January?
* const result = getWeek(new Date(2005, 0, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> 53
*/
function getWeek(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
	return (number < 0 ? "-" : "") + Math.abs(number).toString().padStart(targetLength, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
	y(date, token) {
		const signedYear = date.getFullYear();
		const year = signedYear > 0 ? signedYear : 1 - signedYear;
		return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
	},
	M(date, token) {
		const month = date.getMonth();
		return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
	},
	d(date, token) {
		return addLeadingZeros(date.getDate(), token.length);
	},
	a(date, token) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return dayPeriodEnumValue.toUpperCase();
			case "aaa": return dayPeriodEnumValue;
			case "aaaaa": return dayPeriodEnumValue[0];
			default: return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
		}
	},
	h(date, token) {
		return addLeadingZeros(date.getHours() % 12 || 12, token.length);
	},
	H(date, token) {
		return addLeadingZeros(date.getHours(), token.length);
	},
	m(date, token) {
		return addLeadingZeros(date.getMinutes(), token.length);
	},
	s(date, token) {
		return addLeadingZeros(date.getSeconds(), token.length);
	},
	S(date, token) {
		const numberOfDigits = token.length;
		const milliseconds = date.getMilliseconds();
		return addLeadingZeros(Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3)), token.length);
	}
};
//#endregion
//#region node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
};
var formatters = {
	G: function(date, token, localize) {
		const era = date.getFullYear() > 0 ? 1 : 0;
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return localize.era(era, { width: "abbreviated" });
			case "GGGGG": return localize.era(era, { width: "narrow" });
			default: return localize.era(era, { width: "wide" });
		}
	},
	y: function(date, token, localize) {
		if (token === "yo") {
			const signedYear = date.getFullYear();
			const year = signedYear > 0 ? signedYear : 1 - signedYear;
			return localize.ordinalNumber(year, { unit: "year" });
		}
		return lightFormatters.y(date, token);
	},
	Y: function(date, token, localize, options) {
		const signedWeekYear = getWeekYear(date, options);
		const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
		if (token === "YY") return addLeadingZeros(weekYear % 100, 2);
		if (token === "Yo") return localize.ordinalNumber(weekYear, { unit: "year" });
		return addLeadingZeros(weekYear, token.length);
	},
	R: function(date, token) {
		return addLeadingZeros(getISOWeekYear(date), token.length);
	},
	u: function(date, token) {
		return addLeadingZeros(date.getFullYear(), token.length);
	},
	Q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "Q": return String(quarter);
			case "QQ": return addLeadingZeros(quarter, 2);
			case "Qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "QQQ": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return localize.quarter(quarter, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "q": return String(quarter);
			case "qq": return addLeadingZeros(quarter, 2);
			case "qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "qqq": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return localize.quarter(quarter, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "M":
			case "MM": return lightFormatters.M(date, token);
			case "Mo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "MMM": return localize.month(month, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return localize.month(month, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "L": return String(month + 1);
			case "LL": return addLeadingZeros(month + 1, 2);
			case "Lo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "LLL": return localize.month(month, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return localize.month(month, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(date, token, localize, options) {
		const week = getWeek(date, options);
		if (token === "wo") return localize.ordinalNumber(week, { unit: "week" });
		return addLeadingZeros(week, token.length);
	},
	I: function(date, token, localize) {
		const isoWeek = getISOWeek(date);
		if (token === "Io") return localize.ordinalNumber(isoWeek, { unit: "week" });
		return addLeadingZeros(isoWeek, token.length);
	},
	d: function(date, token, localize) {
		if (token === "do") return localize.ordinalNumber(date.getDate(), { unit: "date" });
		return lightFormatters.d(date, token);
	},
	D: function(date, token, localize) {
		const dayOfYear = getDayOfYear(date);
		if (token === "Do") return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
		return addLeadingZeros(dayOfYear, token.length);
	},
	E: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "e": return String(localDayOfWeek);
			case "ee": return addLeadingZeros(localDayOfWeek, 2);
			case "eo": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "eee": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "c": return String(localDayOfWeek);
			case "cc": return addLeadingZeros(localDayOfWeek, token.length);
			case "co": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "ccc": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return localize.day(dayOfWeek, {
				width: "short",
				context: "standalone"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		switch (token) {
			case "i": return String(isoDayOfWeek);
			case "ii": return addLeadingZeros(isoDayOfWeek, token.length);
			case "io": return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
			case "iii": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(date, token, localize) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
		else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
		else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "b":
			case "bb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
		else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
		else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
		else dayPeriodEnumValue = dayPeriodEnum.night;
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(date, token, localize) {
		if (token === "ho") {
			let hours = date.getHours() % 12;
			if (hours === 0) hours = 12;
			return localize.ordinalNumber(hours, { unit: "hour" });
		}
		return lightFormatters.h(date, token);
	},
	H: function(date, token, localize) {
		if (token === "Ho") return localize.ordinalNumber(date.getHours(), { unit: "hour" });
		return lightFormatters.H(date, token);
	},
	K: function(date, token, localize) {
		const hours = date.getHours() % 12;
		if (token === "Ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	k: function(date, token, localize) {
		let hours = date.getHours();
		if (hours === 0) hours = 24;
		if (token === "ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	m: function(date, token, localize) {
		if (token === "mo") return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
		return lightFormatters.m(date, token);
	},
	s: function(date, token, localize) {
		if (token === "so") return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
		return lightFormatters.s(date, token);
	},
	S: function(date, token) {
		return lightFormatters.S(date, token);
	},
	X: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	x: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	O: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	z: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	t: function(date, token, _localize) {
		return addLeadingZeros(Math.trunc(+date / 1e3), token.length);
	},
	T: function(date, token, _localize) {
		return addLeadingZeros(+date, token.length);
	}
};
function formatTimezoneShort(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.trunc(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
	return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
	const minutes = addLeadingZeros(absOffset % 60, 2);
	return sign + hours + delimiter + minutes;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "P": return formatLong.date({ width: "short" });
		case "PP": return formatLong.date({ width: "medium" });
		case "PPP": return formatLong.date({ width: "long" });
		default: return formatLong.date({ width: "full" });
	}
};
var timeLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "p": return formatLong.time({ width: "short" });
		case "pp": return formatLong.time({ width: "medium" });
		case "ppp": return formatLong.time({ width: "long" });
		default: return formatLong.time({ width: "full" });
	}
};
var dateTimeLongFormatter = (pattern, formatLong) => {
	const matchResult = pattern.match(/(P+)(p+)?/) || [];
	const datePattern = matchResult[1];
	const timePattern = matchResult[2];
	if (!timePattern) return dateLongFormatter(pattern, formatLong);
	let dateTimeFormat;
	switch (datePattern) {
		case "P":
			dateTimeFormat = formatLong.dateTime({ width: "short" });
			break;
		case "PP":
			dateTimeFormat = formatLong.dateTime({ width: "medium" });
			break;
		case "PPP":
			dateTimeFormat = formatLong.dateTime({ width: "long" });
			break;
		default:
			dateTimeFormat = formatLong.dateTime({ width: "full" });
			break;
	}
	return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
	p: timeLongFormatter,
	P: dateTimeLongFormatter
};
//#endregion
//#region node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function isProtectedDayOfYearToken(token) {
	return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
	return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
	const _message = message(token, format, input);
	console.warn(_message);
	if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
	const subject = token[0] === "Y" ? "years" : "days of the month";
	return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
* The {@link format} function options.
*/
/**
* @name format
* @alias formatDate
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may vary by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          | a..aa   | AM, PM                            |       |
* |                                 | aaa     | am, pm                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
* |                                 | bbb     | am, pm, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 001, ..., 999                |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
* |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 04/29/1453                        | 7     |
* |                                 | PP      | Apr 29, 1453                      | 7     |
* |                                 | PPP     | April 29th, 1453                  | 7     |
* |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
* |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
*    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
*
* 6. Specific non-location timezones are currently unavailable in `date-fns`,
*    so right now these tokens fall back to GMT timezones.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @param date - The original date
* @param format - The string of tokens
* @param options - An object with options
*
* @returns The formatted date string
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format(date, formatStr, options) {
	var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _defaultOptions$local, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _defaultOptions$local2;
	const defaultOptions = getDefaultOptions$1();
	const locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : enUS;
	const firstWeekContainsDate = (_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 || (_options$locale2 = options.locale) === null || _options$locale2 === void 0 || (_options$locale2 = _options$locale2.options) === null || _options$locale2 === void 0 ? void 0 : _options$locale2.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1;
	const weekStartsOn = (_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale3 = options.locale) === null || _options$locale3 === void 0 || (_options$locale3 = _options$locale3.options) === null || _options$locale3 === void 0 ? void 0 : _options$locale3.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local2 = defaultOptions.locale) === null || _defaultOptions$local2 === void 0 || (_defaultOptions$local2 = _defaultOptions$local2.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0;
	const originalDate = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	if (!isValid(originalDate)) throw new RangeError("Invalid time value");
	let parts = formatStr.match(longFormattingTokensRegExp$1).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter === "p" || firstCharacter === "P") {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp$1).map((substring) => {
		if (substring === "''") return {
			isToken: false,
			value: "'"
		};
		const firstCharacter = substring[0];
		if (firstCharacter === "'") return {
			isToken: false,
			value: cleanEscapedString$1(substring)
		};
		if (formatters[firstCharacter]) return {
			isToken: true,
			value: substring
		};
		if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
		return {
			isToken: false,
			value: substring
		};
	});
	if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
	const formatterOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	return parts.map((part) => {
		if (!part.isToken) return part.value;
		const token = part.value;
		if (!(options === null || options === void 0 ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token) || !(options === null || options === void 0 ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, String(date));
		const formatter = formatters[token[0]];
		return formatter(originalDate, token, locale.localize, formatterOptions);
	}).join("");
}
function cleanEscapedString$1(input) {
	const matched = input.match(escapedStringRegExp$1);
	if (!matched) return input;
	return matched[1].replace(doubleQuoteRegExp$1, "'");
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
/**
* @name getDefaultOptions
* @category Common Helpers
* @summary Get default options.
* @pure false
*
* @description
* Returns an object that contains defaults for
* `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
* arguments for all functions.
*
* You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
*
* @returns The default options
*
* @example
* const result = getDefaultOptions()
* //=> {}
*
* @example
* setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
* const result = getDefaultOptions()
* //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
*/
function getDefaultOptions() {
	return Object.assign({}, getDefaultOptions$1());
}
//#endregion
//#region node_modules/date-fns/getISODay.js
/**
* The {@link getISODay} function options.
*/
/**
* @name getISODay
* @category Weekday Helpers
* @summary Get the day of the ISO week of the given date.
*
* @description
* Get the day of the ISO week of the given date,
* which is 7 for Sunday, 1 for Monday etc.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - An object with options
*
* @returns The day of ISO week
*
* @example
* // Which day of the ISO week is 26 February 2012?
* const result = getISODay(new Date(2012, 1, 26))
* //=> 7
*/
function getISODay(date, options) {
	const day = toDate(date, options === null || options === void 0 ? void 0 : options.in).getDay();
	return day === 0 ? 7 : day;
}
//#endregion
//#region node_modules/date-fns/isFirstDayOfMonth.js
/**
* The {@link isFirstDayOfMonth} function options.
*/
/**
* @name isFirstDayOfMonth
* @category Month Helpers
* @summary Is the given date the first day of a month?
*
* @description
* Is the given date the first day of a month?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is the first day of a month
*
* @example
* // Is 1 September 2014 the first day of a month?
* const result = isFirstDayOfMonth(new Date(2014, 8, 1))
* //=> true
*/
function isFirstDayOfMonth(date, options) {
	return toDate(date, options === null || options === void 0 ? void 0 : options.in).getDate() === 1;
}
//#endregion
//#region node_modules/date-fns/transpose.js
/**
* @name transpose
* @category Generic Helpers
* @summary Transpose the date to the given constructor.
*
* @description
* The function transposes the date to the given constructor. It helps you
* to transpose the date in the system time zone to say `UTCDate` or any other
* date extension.
*
* @typeParam InputDate - The input `Date` type derived from the passed argument.
* @typeParam ResultDate - The result `Date` type derived from the passed constructor.
*
* @param date - The date to use values from
* @param constructor - The date constructor to use
*
* @returns Date transposed to the given constructor
*
* @example
* // Create July 10, 2022 00:00 in locale time zone
* const date = new Date(2022, 6, 10)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
*
* @example
* // Transpose the date to July 10, 2022 00:00 in UTC
* transpose(date, UTCDate)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
*/
function transpose(date, constructor) {
	const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
	date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	return date_;
}
function isConstructor(constructor) {
	var _constructor$prototyp;
	return typeof constructor === "function" && ((_constructor$prototyp = constructor.prototype) === null || _constructor$prototyp === void 0 ? void 0 : _constructor$prototyp.constructor) === constructor;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = class {
	constructor() {
		_defineProperty(this, "subPriority", 0);
	}
	validate(_utcDate, _options) {
		return true;
	}
};
var ValueSetter = class extends Setter {
	constructor(value, validateValue, setValue, priority, subPriority) {
		super();
		this.value = value;
		this.validateValue = validateValue;
		this.setValue = setValue;
		this.priority = priority;
		if (subPriority) this.subPriority = subPriority;
	}
	validate(date, options) {
		return this.validateValue(date, this.value, options);
	}
	set(date, flags, options) {
		return this.setValue(date, flags, this.value, options);
	}
};
var DateTimezoneSetter = class extends Setter {
	constructor(context, reference) {
		super();
		_defineProperty(this, "priority", TIMEZONE_UNIT_PRIORITY);
		_defineProperty(this, "subPriority", -1);
		this.context = context || ((date) => constructFrom(reference, date));
	}
	set(date, flags) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, transpose(date, this.context));
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/Parser.js
var Parser = class {
	run(dateString, token, match, options) {
		const result = this.parse(dateString, token, match, options);
		if (!result) return null;
		return {
			setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
			rest: result.rest
		};
	}
	validate(_utcDate, _value, _options) {
		return true;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/EraParser.js
var EraParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 140);
		_defineProperty(this, "incompatibleTokens", [
			"R",
			"u",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
			case "GGGGG": return match.era(dateString, { width: "narrow" });
			default: return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
		}
	}
	set(date, flags, value) {
		flags.era = value;
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/constants.js
var numericPatterns = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
};
var timezonePatterns = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
	if (!parseFnResult) return parseFnResult;
	return {
		value: mapFn(parseFnResult.value),
		rest: parseFnResult.rest
	};
}
function parseNumericPattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	return {
		value: parseInt(matchResult[0], 10),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseTimezonePattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	if (matchResult[0] === "Z") return {
		value: 0,
		rest: dateString.slice(1)
	};
	const sign = matchResult[1] === "+" ? 1 : -1;
	const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
	const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
	const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
	return {
		value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseAnyDigitsSigned(dateString) {
	return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigit, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigits, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigits, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigits, dateString);
		default: return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
	}
}
function parseNDigitsSigned(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
		default: return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
	}
}
function dayPeriodEnumToHours(dayPeriod) {
	switch (dayPeriod) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
	const isCommonEra = currentYear > 0;
	const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
	let result;
	if (absCurrentYear <= 50) result = twoDigitYear || 100;
	else {
		const rangeEnd = absCurrentYear + 50;
		const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
		const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
		result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
	}
	return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var YearParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 130);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"u",
			"w",
			"I",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "yy"
		});
		switch (token) {
			case "y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value) {
		const currentYear = date.getFullYear();
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, 1);
			date.setHours(0, 0, 0, 0);
			return date;
		}
		const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
		date.setFullYear(year, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 130);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"R",
			"u",
			"Q",
			"q",
			"M",
			"L",
			"I",
			"d",
			"D",
			"i",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "YY"
		});
		switch (token) {
			case "Y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "Yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value, options) {
		const currentYear = getWeekYear(date, options);
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
			date.setHours(0, 0, 0, 0);
			return startOfWeek(date, options);
		}
		const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
		date.setFullYear(year, 0, options.firstWeekContainsDate);
		date.setHours(0, 0, 0, 0);
		return startOfWeek(date, options);
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 130);
		_defineProperty(this, "incompatibleTokens", [
			"G",
			"y",
			"Y",
			"u",
			"Q",
			"q",
			"M",
			"L",
			"w",
			"d",
			"D",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token) {
		if (token === "R") return parseNDigitsSigned(4, dateString);
		return parseNDigitsSigned(token.length, dateString);
	}
	set(date, _flags, value) {
		const firstWeekOfYear = constructFrom(date, 0);
		firstWeekOfYear.setFullYear(value, 0, 4);
		firstWeekOfYear.setHours(0, 0, 0, 0);
		return startOfISOWeek(firstWeekOfYear);
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 130);
		_defineProperty(this, "incompatibleTokens", [
			"G",
			"y",
			"Y",
			"R",
			"w",
			"I",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token) {
		if (token === "u") return parseNDigitsSigned(4, dateString);
		return parseNDigitsSigned(token.length, dateString);
	}
	set(date, _flags, value) {
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var QuarterParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 120);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"q",
			"M",
			"L",
			"w",
			"I",
			"d",
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "Q":
			case "QQ": return parseNDigits(token.length, dateString);
			case "Qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "QQQ": return match.quarter(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.quarter(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 4;
	}
	set(date, _flags, value) {
		date.setMonth((value - 1) * 3, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 120);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"Q",
			"M",
			"L",
			"w",
			"I",
			"d",
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "q":
			case "qq": return parseNDigits(token.length, dateString);
			case "qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "qqq": return match.quarter(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.quarter(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 4;
	}
	set(date, _flags, value) {
		date.setMonth((value - 1) * 3, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var MonthParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"q",
			"Q",
			"L",
			"w",
			"I",
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
		_defineProperty(this, "priority", 110);
	}
	parse(dateString, token, match) {
		const valueCallback = (value) => value - 1;
		switch (token) {
			case "M": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "MM": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Mo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "MMM": return match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		date.setMonth(value, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 110);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"q",
			"Q",
			"M",
			"w",
			"I",
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		const valueCallback = (value) => value - 1;
		switch (token) {
			case "L": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "LL": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Lo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "LLL": return match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		date.setMonth(value, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/setWeek.js
/**
* The {@link setWeek} function options.
*/
/**
* @name setWeek
* @category Week Helpers
* @summary Set the local week to the given date.
*
* @description
* Set the local week to the given date, saving the weekday number.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param week - The week of the new date
* @param options - An object with options
*
* @returns The new date with the local week set
*
* @example
* // Set the 1st week to 2 January 2005 with default options:
* const result = setWeek(new Date(2005, 0, 2), 1)
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // Set the 1st week to 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January:
* const result = setWeek(new Date(2005, 0, 2), 1, {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Sun Jan 4 2004 00:00:00
*/
function setWeek(date, week, options) {
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const diff = getWeek(date_, options) - week;
	date_.setDate(date_.getDate() - diff * 7);
	return toDate(date_, options === null || options === void 0 ? void 0 : options.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 100);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"R",
			"u",
			"q",
			"Q",
			"M",
			"L",
			"I",
			"d",
			"D",
			"i",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "w": return parseNumericPattern(numericPatterns.week, dateString);
			case "wo": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 53;
	}
	set(date, _flags, value, options) {
		return startOfWeek(setWeek(date, value, options), options);
	}
};
//#endregion
//#region node_modules/date-fns/setISOWeek.js
/**
* The {@link setISOWeek} function options.
*/
/**
* @name setISOWeek
* @category ISO Week Helpers
* @summary Set the ISO week to the given date.
*
* @description
* Set the ISO week to the given date, saving the weekday number.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The `Date` type of the context function.
*
* @param date - The date to be changed
* @param week - The ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the ISO week set
*
* @example
* // Set the 53rd ISO week to 7 August 2004:
* const result = setISOWeek(new Date(2004, 7, 7), 53)
* //=> Sat Jan 01 2005 00:00:00
*/
function setISOWeek(date, week, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const diff = getISOWeek(_date, options) - week;
	_date.setDate(_date.getDate() - diff * 7);
	return _date;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 100);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"Y",
			"u",
			"q",
			"Q",
			"M",
			"L",
			"w",
			"d",
			"D",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "I": return parseNumericPattern(numericPatterns.week, dateString);
			case "Io": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 53;
	}
	set(date, _flags, value) {
		return startOfISOWeek(setISOWeek(date, value));
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var DateParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "subPriority", 1);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"q",
			"Q",
			"w",
			"I",
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "d": return parseNumericPattern(numericPatterns.date, dateString);
			case "do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		const isLeapYear = isLeapYearIndex(date.getFullYear());
		const month = date.getMonth();
		if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
		else return value >= 1 && value <= DAYS_IN_MONTH[month];
	}
	set(date, _flags, value) {
		date.setDate(value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "subpriority", 1);
		_defineProperty(this, "incompatibleTokens", [
			"Y",
			"R",
			"q",
			"Q",
			"M",
			"L",
			"w",
			"I",
			"d",
			"E",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "D":
			case "DD": return parseNumericPattern(numericPatterns.dayOfYear, dateString);
			case "Do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		if (isLeapYearIndex(date.getFullYear())) return value >= 1 && value <= 366;
		else return value >= 1 && value <= 365;
	}
	set(date, _flags, value) {
		date.setMonth(0, value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/setDay.js
/**
* The {@link setDay} function options.
*/
/**
* @name setDay
* @category Weekday Helpers
* @summary Set the day of the week to the given date.
*
* @description
* Set the day of the week to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the week of the new date
* @param options - An object with options.
*
* @returns The new date with the day of the week set
*
* @example
* // Set week day to Sunday, with the default weekStartsOn of Sunday:
* const result = setDay(new Date(2014, 8, 1), 0)
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // Set week day to Sunday, with a weekStartsOn of Monday:
* const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 00:00:00
*/
function setDay(date, day, options) {
	var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _defaultOptions$local;
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = (_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0;
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const currentDay = date_.getDay();
	const dayIndex = (day % 7 + 7) % 7;
	const delta = 7 - weekStartsOn;
	return addDays(date_, day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7, options);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var DayParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "incompatibleTokens", [
			"D",
			"i",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"R",
			"u",
			"q",
			"Q",
			"M",
			"L",
			"I",
			"d",
			"D",
			"E",
			"i",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "e":
			case "ee": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "eo": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "eee": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"R",
			"u",
			"q",
			"Q",
			"M",
			"L",
			"I",
			"d",
			"D",
			"E",
			"i",
			"e",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "c":
			case "cc": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "co": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "ccc": return match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/setISODay.js
/**
* The {@link setISODay} function options.
*/
/**
* @name setISODay
* @category Weekday Helpers
* @summary Set the day of the ISO week to the given date.
*
* @description
* Set the day of the ISO week to the given date.
* ISO week starts with Monday.
* 7 is the index of Sunday, 1 is the index of Monday, etc.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the day of the ISO week set
*
* @example
* // Set Sunday to 1 September 2014:
* const result = setISODay(new Date(2014, 8, 1), 7)
* //=> Sun Sep 07 2014 00:00:00
*/
function setISODay(date, day, options) {
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	return addDays(date_, day - getISODay(date_, options), options);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var ISODayParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 90);
		_defineProperty(this, "incompatibleTokens", [
			"y",
			"Y",
			"u",
			"q",
			"Q",
			"M",
			"L",
			"w",
			"d",
			"D",
			"E",
			"e",
			"c",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		const valueCallback = (value) => {
			if (value === 0) return 7;
			return value;
		};
		switch (token) {
			case "i":
			case "ii": return parseNDigits(token.length, dateString);
			case "io": return match.ordinalNumber(dateString, { unit: "day" });
			case "iii": return mapValue(match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiii": return mapValue(match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiiii": return mapValue(match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			default: return mapValue(match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 7;
	}
	set(date, _flags, value) {
		date = setISODay(date, value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var AMPMParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 80);
		_defineProperty(this, "incompatibleTokens", [
			"b",
			"B",
			"H",
			"k",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "a":
			case "aa":
			case "aaa": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 80);
		_defineProperty(this, "incompatibleTokens", [
			"a",
			"B",
			"H",
			"k",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "b":
			case "bb":
			case "bbb": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 80);
		_defineProperty(this, "incompatibleTokens", [
			"a",
			"b",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 70);
		_defineProperty(this, "incompatibleTokens", [
			"H",
			"K",
			"k",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "h": return parseNumericPattern(numericPatterns.hour12h, dateString);
			case "ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 12;
	}
	set(date, _flags, value) {
		const isPM = date.getHours() >= 12;
		if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
		else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 70);
		_defineProperty(this, "incompatibleTokens", [
			"a",
			"b",
			"h",
			"K",
			"k",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "H": return parseNumericPattern(numericPatterns.hour23h, dateString);
			case "Ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 23;
	}
	set(date, _flags, value) {
		date.setHours(value, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 70);
		_defineProperty(this, "incompatibleTokens", [
			"h",
			"H",
			"k",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "K": return parseNumericPattern(numericPatterns.hour11h, dateString);
			case "Ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		if (date.getHours() >= 12 && value < 12) date.setHours(value + 12, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 70);
		_defineProperty(this, "incompatibleTokens", [
			"a",
			"b",
			"h",
			"H",
			"K",
			"t",
			"T"
		]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "k": return parseNumericPattern(numericPatterns.hour24h, dateString);
			case "ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 24;
	}
	set(date, _flags, value) {
		const hours = value <= 24 ? value % 24 : value;
		date.setHours(hours, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var MinuteParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 60);
		_defineProperty(this, "incompatibleTokens", ["t", "T"]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "m": return parseNumericPattern(numericPatterns.minute, dateString);
			case "mo": return match.ordinalNumber(dateString, { unit: "minute" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 59;
	}
	set(date, _flags, value) {
		date.setMinutes(value, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var SecondParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 50);
		_defineProperty(this, "incompatibleTokens", ["t", "T"]);
	}
	parse(dateString, token, match) {
		switch (token) {
			case "s": return parseNumericPattern(numericPatterns.second, dateString);
			case "so": return match.ordinalNumber(dateString, { unit: "second" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 59;
	}
	set(date, _flags, value) {
		date.setSeconds(value, 0);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 30);
		_defineProperty(this, "incompatibleTokens", ["t", "T"]);
	}
	parse(dateString, token) {
		const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
		return mapValue(parseNDigits(token.length, dateString), valueCallback);
	}
	set(date, _flags, value) {
		date.setMilliseconds(value);
		return date;
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 10);
		_defineProperty(this, "incompatibleTokens", [
			"t",
			"T",
			"x"
		]);
	}
	parse(dateString, token) {
		switch (token) {
			case "X": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "XX": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "XXXX": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "XXXXX": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 10);
		_defineProperty(this, "incompatibleTokens", [
			"t",
			"T",
			"X"
		]);
	}
	parse(dateString, token) {
		switch (token) {
			case "x": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "xx": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "xxxx": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "xxxxx": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 40);
		_defineProperty(this, "incompatibleTokens", "*");
	}
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = class extends Parser {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "priority", 20);
		_defineProperty(this, "incompatibleTokens", "*");
	}
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value), { timestampIsSet: true }];
	}
};
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers.js
var parsers = {
	G: new EraParser(),
	y: new YearParser(),
	Y: new LocalWeekYearParser(),
	R: new ISOWeekYearParser(),
	u: new ExtendedYearParser(),
	Q: new QuarterParser(),
	q: new StandAloneQuarterParser(),
	M: new MonthParser(),
	L: new StandAloneMonthParser(),
	w: new LocalWeekParser(),
	I: new ISOWeekParser(),
	d: new DateParser(),
	D: new DayOfYearParser(),
	E: new DayParser(),
	e: new LocalDayParser(),
	c: new StandAloneLocalDayParser(),
	i: new ISODayParser(),
	a: new AMPMParser(),
	b: new AMPMMidnightParser(),
	B: new DayPeriodParser(),
	h: new Hour1to12Parser(),
	H: new Hour0to23Parser(),
	K: new Hour0To11Parser(),
	k: new Hour1To24Parser(),
	m: new MinuteParser(),
	s: new SecondParser(),
	S: new FractionOfSecondParser(),
	X: new ISOTimezoneWithZParser(),
	x: new ISOTimezoneParser(),
	t: new TimestampSecondsParser(),
	T: new TimestampMillisecondsParser()
};
//#endregion
//#region node_modules/date-fns/parse.js
/**
* The {@link parse} function options.
*/
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
* @name parse
* @category Common Helpers
* @summary Parse the date.
*
* @description
* Return the date parsed from string using the given format string.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters in the format string wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
*
* Format of the format string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 5 below the table).
*
* Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
* and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
*
* ```javascript
* parse('23 AM', 'HH a', new Date())
* //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
* ```
*
* See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
*
* Accepted format string patterns:
* | Unit                            |Prior| Pattern | Result examples                   | Notes |
* |---------------------------------|-----|---------|-----------------------------------|-------|
* | Era                             | 140 | G..GGG  | AD, BC                            |       |
* |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 |     | GGGGG   | A, B                              |       |
* | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
* |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
* |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
* |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
* |                                 |     | yyyyy   | ...                               | 2,4   |
* | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
* |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
* |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
* |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
* |                                 |     | YYYYY   | ...                               | 2,4   |
* | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
* |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
* |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
* |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
* |                                 |     | RRRRR   | ...                               | 2,4,5 |
* | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
* |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
* |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
* |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
* |                                 |     | uuuuu   | ...                               | 2,4   |
* | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
* |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | QQ      | 01, 02, 03, 04                    |       |
* |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
* |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | qq      | 01, 02, 03, 04                    |       |
* |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
* | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
* |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | MM      | 01, 02, ..., 12                   |       |
* |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 |     | MMMM    | January, February, ..., December  | 2     |
* |                                 |     | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
* |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | LL      | 01, 02, ..., 12                   |       |
* |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 |     | LLLL    | January, February, ..., December  | 2     |
* |                                 |     | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
* |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
* |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | II      | 01, 02, ..., 53                   | 5     |
* | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
* |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
* |                                 |     | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
* |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
* |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
* |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 |     | DDDD    | ...                               | 2     |
* | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
* |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
* |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
* |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
* |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
* |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
* |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
* | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | ee      | 02, 03, ..., 01                   |       |
* |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | cc      | 02, 03, ..., 01                   |       |
* |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
* |                                 |     | aaaa    | a.m., p.m.                        | 2     |
* |                                 |     | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
* |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 |     | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
* |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
* |                                 |     | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
* |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
* |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
* |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
* |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
* |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
* |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
* |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
* |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
* |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | mm      | 00, 01, ..., 59                   |       |
* | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
* |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | ss      | 00, 01, ..., 59                   |       |
* | Seconds timestamp               |  40 | t       | 512969520                         |       |
* |                                 |     | tt      | ...                               | 2     |
* | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
* |                                 |     | SS      | 00, 01, ..., 99                   |       |
* |                                 |     | SSS     | 000, 001, ..., 999                |       |
* |                                 |     | SSSS    | ...                               | 2     |
* | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
* |                                 |     | TT      | ...                               | 2     |
* | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
* |                                 |     | XX      | -0800, +0530, Z                   |       |
* |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
* |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
* |                                 |     | xx      | -0800, +0530, +0000               |       |
* |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
* |                                 |     | PP      | May 29, 1453                      |       |
* |                                 |     | PPP     | May 29th, 1453                    |       |
* |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
* | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
* |                                 |     | pp      | 12:00:00 AM                       |       |
* | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
* |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
* |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
* |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular.
*    In `format` function, they will produce different result:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
*    `parse` will try to match both formatting and stand-alone units interchangeably.
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table:
*    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
*      as wide as the sequence
*    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
*      These variations are marked with "2" in the last column of the table.
*
* 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 4. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
*
*    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
*
*    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
*
*    while `uu` will just assign the year as is:
*
*    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
*
*    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
*    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
*
* 5. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
*    on the given locale.
*
*    using `en-US` locale: `P` => `MM/dd/yyyy`
*    using `en-US` locale: `p` => `hh:mm a`
*    using `pt-BR` locale: `P` => `dd/MM/yyyy`
*    using `pt-BR` locale: `p` => `HH:mm`
*
* Values will be assigned to the date in the descending order of its unit's priority.
* Units of an equal priority overwrite each other in the order of appearance.
*
* If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
* the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
*
* `referenceDate` must be passed for correct work of the function.
* If you're not sure which `referenceDate` to supply, create a new instance of Date:
* `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
* In this case parsing will be done in the context of the current date.
* If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
* then `Invalid Date` will be returned.
*
* The result may vary by locale.
*
* If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
*
* If parsing failed, `Invalid Date` will be returned.
* Invalid Date is a Date, whose time value is NaN.
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param dateStr - The string to parse
* @param formatStr - The string of tokens
* @param referenceDate - defines values missing from the parsed dateString
* @param options - An object with options.
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @returns The parsed date
*
* @throws `options.locale` must contain `match` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Parse 11 February 2014 from middle-endian format:
* var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
* //=> Tue Feb 11 2014 00:00:00
*
* @example
* // Parse 28th of February in Esperanto locale in the context of 2010 year:
* import eo from 'date-fns/locale/eo'
* var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
*   locale: eo
* })
* //=> Sun Feb 28 2010 00:00:00
*/
function parse(dateStr, formatStr, referenceDate, options) {
	var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _defaultOptions$local, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _defaultOptions$local2;
	const invalidDate = () => constructFrom((options === null || options === void 0 ? void 0 : options.in) || referenceDate, NaN);
	const defaultOptions = getDefaultOptions();
	const locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : enUS;
	const firstWeekContainsDate = (_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 || (_options$locale2 = options.locale) === null || _options$locale2 === void 0 || (_options$locale2 = _options$locale2.options) === null || _options$locale2 === void 0 ? void 0 : _options$locale2.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1;
	const weekStartsOn = (_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale3 = options.locale) === null || _options$locale3 === void 0 || (_options$locale3 = _options$locale3.options) === null || _options$locale3 === void 0 ? void 0 : _options$locale3.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local2 = defaultOptions.locale) === null || _defaultOptions$local2 === void 0 || (_defaultOptions$local2 = _defaultOptions$local2.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0;
	if (!formatStr) return dateStr ? invalidDate() : toDate(referenceDate, options === null || options === void 0 ? void 0 : options.in);
	const subFnOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	const setters = [new DateTimezoneSetter(options === null || options === void 0 ? void 0 : options.in, referenceDate)];
	const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter in longFormatters) {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp);
	const usedTokens = [];
	for (let token of tokens) {
		if (!(options === null || options === void 0 ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		if (!(options === null || options === void 0 ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		const firstCharacter = token[0];
		const parser = parsers[firstCharacter];
		if (parser) {
			const { incompatibleTokens } = parser;
			if (Array.isArray(incompatibleTokens)) {
				const incompatibleToken = usedTokens.find((usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
				if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
			} else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
			usedTokens.push({
				token: firstCharacter,
				fullToken: token
			});
			const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
			if (!parseResult) return invalidDate();
			setters.push(parseResult.setter);
			dateStr = parseResult.rest;
		} else {
			if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
			if (token === "''") token = "'";
			else if (firstCharacter === "'") token = cleanEscapedString(token);
			if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
			else return invalidDate();
		}
	}
	if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) return invalidDate();
	const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map((priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map((setterArray) => setterArray[0]);
	let date = toDate(referenceDate, options === null || options === void 0 ? void 0 : options.in);
	if (isNaN(+date)) return invalidDate();
	const flags = {};
	for (const setter of uniquePrioritySetters) {
		if (!setter.validate(date, subFnOptions)) return invalidDate();
		const result = setter.set(date, flags, subFnOptions);
		if (Array.isArray(result)) {
			date = result[0];
			Object.assign(flags, result[1]);
		} else date = result;
	}
	return date;
}
function cleanEscapedString(input) {
	return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
//#endregion
//#region node_modules/date-fns/isToday.js
/**
* The {@link isToday} function options.
*/
/**
* @name isToday
* @category Day Helpers
* @summary Is the given date today?
* @pure false
*
* @description
* Is the given date today?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is today
*
* @example
* // If today is 6 October 2014, is 6 October 14:00:00 today?
* const result = isToday(new Date(2014, 9, 6, 14, 0))
* //=> true
*/
function isToday(date, options) {
	return isSameDay(constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, date), constructNow((options === null || options === void 0 ? void 0 : options.in) || date));
}
//#endregion
//#region node_modules/date-fns/setMonth.js
/**
* The {@link setMonth} function options.
*/
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
* @param options - The options
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month, options) {
	const _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const midMonth = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
	midMonth.setFullYear(year, month, 15);
	midMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(midMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
//#endregion
//#region node_modules/date-fns/setQuarter.js
/**
* The {@link setQuarter} function options.
*/
/**
* @name setQuarter
* @category Quarter Helpers
* @summary Set the year quarter to the given date.
*
* @description
* Set the year quarter to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param quarter - The quarter of the new date
* @param options - The options
*
* @returns The new date with the quarter set
*
* @example
* // Set the 2nd quarter to 2 July 2014:
* const result = setQuarter(new Date(2014, 6, 2), 2)
* //=> Wed Apr 02 2014 00:00:00
*/
function setQuarter(date, quarter, options) {
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	const diff = quarter - (Math.trunc(date_.getMonth() / 3) + 1);
	return setMonth(date_, date_.getMonth() + diff * 3);
}
//#endregion
//#region node_modules/date-fns/setYear.js
/**
* The {@link setYear} function options.
*/
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param year - The year of the new date
* @param options - An object with options.
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year, options) {
	const date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
	if (isNaN(+date_)) return constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, NaN);
	date_.setFullYear(year);
	return date_;
}
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-time.mjs
var _DateFnsDateAdapter;
var _NativeDateAdapter;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/** Injection token for date configuration. */
var NZ_DATE_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-date-config" : "");
/** Injection token for the date locale used by the configured date adapter. */
var NZ_DATE_LOCALE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-date-locale" : "");
/** Default date configuration. */
var NZ_DATE_CONFIG_DEFAULT = { firstDayOfWeek: void 0 };
/** Merges user config with default config. */
function mergeDateConfig(config) {
	return _objectSpread2(_objectSpread2({}, NZ_DATE_CONFIG_DEFAULT), config);
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NOT_IMPLEMENTED = "NzDateAdapter: method not implemented. Override this method in your adapter to opt in.";
new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-date-adapter-type" : "");
/**
* NzDateAdapter is the abstraction boundary between ng-zorro-antd and any date library.
*
* CONTRACT FOR SUBCLASS AUTHORS:
*
* - You MUST implement all abstract methods.
* - You MAY override derived methods for efficiency.
* - You MAY override optional methods to opt into features.
*
* @see https://github.com/angular/components/blob/main/src/material/core/datetime/date-adapter.ts
*/
var NzDateAdapter = class {
	constructor() {
		_defineProperty(
			this,
			/** The current locale. */
			"locale",
			void 0
		);
		_defineProperty(this, "_localeChanges", new Subject());
		_defineProperty(
			this,
			/** Stream that emits when the locale changes. */
			"localeChanges",
			this._localeChanges
		);
	}
	/** Sets the locale used for formatting and parsing. */
	setLocale(locale) {
		this.locale = locale;
		this._localeChanges.next();
	}
	/**
	* Attempts to deserialize a value to a valid date object.
	* Accepts ISO 8601 strings, Date objects, or null/undefined.
	*/
	deserialize(value) {
		if (value == null || this.isDateInstance(value)) return value;
		return this.invalid();
	}
	/** Gets a valid date object if possible, otherwise returns null. */
	getValidDateOrNull(obj) {
		if (this.isDateInstance(obj)) {
			const date = obj;
			return this.isValid(date) ? date : null;
		}
		return null;
	}
	/** Compares two dates, returning a number indicating their relative order. */
	compareDate(first, second) {
		return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
	}
	/** Checks whether two dates represent the same calendar day. */
	sameDate(first, second) {
		if (first && second) {
			const firstValid = this.isValid(first);
			const secondValid = this.isValid(second);
			if (firstValid && secondValid) return this.compareDate(first, second) === 0;
			return firstValid === secondValid;
		}
		return first === second;
	}
	/** Clamps a date between min and max bounds. */
	clampDate(date, min, max) {
		if (min && this.compareDate(min, date) > 0) return this.clone(min);
		if (max && this.compareDate(date, max) > 0) return this.clone(max);
		return date;
	}
	/** Gets the calendar's start of month (first day at midnight). */
	calendarStartOfMonth(date) {
		return this.createDate(this.getYear(date), this.getMonth(date), 1);
	}
	/** Gets the calendar's start of week. */
	calendarStartOfWeek(date) {
		const diff = (this.getDayOfWeek(date) - this.getFirstDayOfWeek() + 7) % 7;
		return this.addCalendarDays(date, -diff);
	}
	/** Checks whether the given date is the first day of its month. */
	isFirstDayOfMonth(date) {
		return this.getDate(date) === 1;
	}
	/** Checks whether the given date is the last day of its month. */
	isLastDayOfMonth(date) {
		return this.getDate(date) === this.getNumDaysInMonth(date);
	}
	/** Checks whether the given date is today. */
	isToday(date) {
		return this.sameDate(date, this.today());
	}
	/** Sets the time on the given date. */
	setTime(_date, _hours, _minutes, _seconds) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the hours component of the given date. */
	getHours(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the minutes component of the given date. */
	getMinutes(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the seconds component of the given date. */
	getSeconds(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Parses a time value into a date. */
	parseTime(_value, _parseFormat) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Adds the specified number of seconds to the given date. */
	addSeconds(_date, _amount) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Compares two times, returning a number indicating their relative order. */
	compareTime(first, second) {
		return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
	}
	/** Checks whether two dates represent the same time (same hour, minute, second). */
	sameTime(first, second) {
		if (first && second) return !this.isValid(first) && !this.isValid(second) || this.compareTime(first, second) === 0;
		return first === second;
	}
	/** Gets the milliseconds component of the given date. */
	getMilliseconds(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the timestamp (milliseconds since epoch) of the given date. */
	getTime(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the calendar system identifier for the given date. */
	getCalendarId(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/** Gets the timezone offset for the given date. */
	getTimezoneOffset(_date) {
		throw new Error(NOT_IMPLEMENTED);
	}
	/**
	* @deprecated Use `addCalendarYears` instead. Will be removed in v23.
	*/
	addYears(date, amount) {
		return this.addCalendarYears(date, amount);
	}
	/**
	* @deprecated Use `addCalendarMonths` instead. Will be removed in v23.
	*/
	addMonths(date, amount) {
		return this.addCalendarMonths(date, amount);
	}
	/**
	* @deprecated Use `addCalendarDays` instead. Will be removed in v23.
	*/
	addDays(date, amount) {
		return this.addCalendarDays(date, amount);
	}
	/**
	* @deprecated Use `getNumDaysInMonth` instead. Will be removed in v23.
	*/
	getDaysInMonth(date) {
		return this.getNumDaysInMonth(date);
	}
	/**
	* @deprecated Use `getDayOfWeek` instead. Will be removed in v23.
	*/
	getDay(date) {
		return this.getDayOfWeek(date);
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* Date adapter for date-fns.
*
* To use this adapter, add `provideNzDateFnsAdapter()` to your application providers.
*
* @note Requires date-fns as a peer dependency.
*/
var DateFnsDateAdapter = class extends NzDateAdapter {
	constructor() {
		super();
		_defineProperty(this, "dateLocale", inject(NZ_DATE_LOCALE, { optional: true }));
		_defineProperty(this, "dateConfig", inject(NZ_DATE_CONFIG, { optional: true }));
		if (this.dateLocale) super.setLocale(this.dateLocale);
	}
	today() {
		return /* @__PURE__ */ new Date();
	}
	createDate(year, month, date) {
		return new Date(year, month, date);
	}
	clone(date) {
		return new Date(date);
	}
	getYear(date) {
		return date.getFullYear();
	}
	getMonth(date) {
		return date.getMonth();
	}
	getDate(date) {
		return date.getDate();
	}
	getDayOfWeek(date) {
		return date.getDay();
	}
	getNumDaysInMonth(date) {
		return getDaysInMonth(date);
	}
	getYearName(date) {
		return format(date, "yyyy", { locale: this.locale });
	}
	getMonthNames(style) {
		const format$1 = style === "narrow" ? "MMMMM" : style === "short" ? "MMM" : "MMMM";
		return Array.from({ length: 12 }, (_, i) => format(new Date(2024, i, 1), format$1, { locale: this.locale }));
	}
	getDateNames() {
		return Array.from({ length: 31 }, (_, i) => String(i + 1));
	}
	getDayOfWeekNames(style) {
		const format$1 = style === "narrow" ? "EEEEEE" : style === "short" ? "EEE" : "EEEE";
		return Array.from({ length: 7 }, (_, i) => format(new Date(2024, 0, i + 1), format$1, { locale: this.locale }));
	}
	getFirstDayOfWeek() {
		var _this$dateConfig;
		if (((_this$dateConfig = this.dateConfig) === null || _this$dateConfig === void 0 ? void 0 : _this$dateConfig.firstDayOfWeek) != null) return this.dateConfig.firstDayOfWeek;
		else {
			var _this$locale$options$, _this$locale;
			return (_this$locale$options$ = (_this$locale = this.locale) === null || _this$locale === void 0 || (_this$locale = _this$locale.options) === null || _this$locale === void 0 ? void 0 : _this$locale.weekStartsOn) !== null && _this$locale$options$ !== void 0 ? _this$locale$options$ : 1;
		}
	}
	addCalendarYears(date, years) {
		return addYears(date, years);
	}
	addCalendarMonths(date, months) {
		return addMonths(date, months);
	}
	addCalendarDays(date, days) {
		return addDays(date, days);
	}
	format(date, displayFormat) {
		if (!date) return "";
		if (!this.isValid(date)) throw new Error("DateFnsDateAdapter: Cannot format invalid date.");
		return format(date, displayFormat.replace(/\[(.*?)\]/g, "'$1'"), {
			locale: this.locale,
			useAdditionalWeekYearTokens: true,
			useAdditionalDayOfYearTokens: true
		});
	}
	parse(value, parseFormat) {
		if (typeof value === "string" && value.length > 0) {
			const formats = Array.isArray(parseFormat) ? parseFormat : [parseFormat];
			if (!formats.length) throw new Error("Formats array must not be empty.");
			for (const currentFormat of formats) {
				const fromFormat = parse(value, currentFormat.replace(/\[(.*?)\]/g, "'$1'"), /* @__PURE__ */ new Date(), {
					locale: this.locale,
					weekStartsOn: this.getFirstDayOfWeek(),
					useAdditionalWeekYearTokens: true,
					useAdditionalDayOfYearTokens: true
				});
				if (this.isValid(fromFormat)) return fromFormat;
			}
			return this.invalid();
		} else if (typeof value === "number") return new Date(value);
		else if (value instanceof Date) return this.clone(value);
		return null;
	}
	isDateInstance(obj) {
		return obj instanceof Date;
	}
	isValid(date) {
		return isValid(date);
	}
	invalid() {
		return /* @__PURE__ */ new Date(NaN);
	}
	getQuarter(date) {
		return getQuarter(date);
	}
	setQuarter(date, quarter) {
		return setQuarter(date, quarter);
	}
	startOfQuarter(date) {
		return startOfQuarter(date);
	}
	getISOWeek(date) {
		return getISOWeek(date);
	}
	setYear(date, year) {
		return setYear(date, year);
	}
	setMonth(date, month) {
		return setMonth(date, month);
	}
	setDate(date, day) {
		const result = new Date(date);
		result.setDate(day);
		return result;
	}
	setTime(date, hours, minutes, seconds) {
		const result = new Date(date);
		result.setHours(hours, minutes, seconds, 0);
		return result;
	}
	getHours(date) {
		return date.getHours();
	}
	getMinutes(date) {
		return date.getMinutes();
	}
	getSeconds(date) {
		return date.getSeconds();
	}
	parseTime(value, parseFormat) {
		return this.parse(value, parseFormat);
	}
	addSeconds(date, amount) {
		return addSeconds(date, amount);
	}
	getMilliseconds(date) {
		return date.getMilliseconds();
	}
	getTime(date) {
		return date.getTime();
	}
	isFirstDayOfMonth(date) {
		return isFirstDayOfMonth(date);
	}
	isLastDayOfMonth(date) {
		return isLastDayOfMonth(date);
	}
	isToday(date) {
		return isToday(date);
	}
	calendarStartOfMonth(date) {
		return startOfMonth(date);
	}
	calendarStartOfWeek(date) {
		return startOfWeek(date, { weekStartsOn: this.getFirstDayOfWeek() });
	}
};
_DateFnsDateAdapter = DateFnsDateAdapter;
_defineProperty(DateFnsDateAdapter, "ɵfac", function DateFnsDateAdapter_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _DateFnsDateAdapter)();
});
_defineProperty(DateFnsDateAdapter, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _DateFnsDateAdapter,
	factory: _DateFnsDateAdapter.ɵfac,
	providedIn: "root"
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFnsDateAdapter, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/** Matches strings that look like ISO 8601 dates (e.g. 2024-01-15, 2024-01-15T10:30:00). */
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Matches time strings in formats like: 10:30, 10:30:45, 10:30 AM, 10.30.45 PM. */
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
/** Creates an array of length `length` with values derived from `valueFunction`. */
function range(length, valueFunction) {
	const valuesArray = Array(length);
	for (let i = 0; i < length; i++) valuesArray[i] = valueFunction(i);
	return valuesArray;
}
/** Checks if a value is within a specified numeric range. */
function inRange(value, min, max) {
	return !isNaN(value) && value >= min && value <= max;
}
/**
* Date adapter using native Date and Intl.DateTimeFormat.
* Fully aligned with Angular Material's NativeDateAdapter implementation.
*/
var NativeDateAdapter = class extends NzDateAdapter {
	constructor() {
		super();
		_defineProperty(this, "dateLocale", inject(NZ_DATE_LOCALE, { optional: true }));
		_defineProperty(this, "dateConfig", inject(NZ_DATE_CONFIG, { optional: true }));
		if (this.dateLocale !== void 0 && typeof this.dateLocale === "string") this.setLocale(this.dateLocale);
		else this.setLocale("en-US");
	}
	getYear(date) {
		return date.getFullYear();
	}
	getMonth(date) {
		return date.getMonth();
	}
	getDate(date) {
		return date.getDate();
	}
	getDayOfWeek(date) {
		return date.getDay();
	}
	getMonthNames(style) {
		const dtf = new Intl.DateTimeFormat(this.locale, {
			month: style,
			timeZone: "utc"
		});
		return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
	}
	getDateNames() {
		const dtf = new Intl.DateTimeFormat(this.locale, {
			day: "numeric",
			timeZone: "utc"
		});
		return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
	}
	getDayOfWeekNames(style) {
		const dtf = new Intl.DateTimeFormat(this.locale, {
			weekday: style,
			timeZone: "utc"
		});
		return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
	}
	getYearName(date) {
		const dtf = new Intl.DateTimeFormat(this.locale, {
			year: "numeric",
			timeZone: "utc"
		});
		return this._format(dtf, date);
	}
	getFirstDayOfWeek() {
		var _this$dateConfig2;
		if (((_this$dateConfig2 = this.dateConfig) === null || _this$dateConfig2 === void 0 ? void 0 : _this$dateConfig2.firstDayOfWeek) != null) return this.dateConfig.firstDayOfWeek;
		if (typeof Intl !== "undefined" && Intl.Locale) {
			var _firstDay, _ref2, _locale$getWeekInfo;
			const locale = new Intl.Locale(this.locale);
			const firstDay = (_firstDay = (_ref2 = ((_locale$getWeekInfo = locale.getWeekInfo) === null || _locale$getWeekInfo === void 0 ? void 0 : _locale$getWeekInfo.call(locale)) || locale.weekInfo) === null || _ref2 === void 0 ? void 0 : _ref2.firstDay) !== null && _firstDay !== void 0 ? _firstDay : 0;
			return firstDay === 7 ? 0 : firstDay;
		}
		return 0;
	}
	getNumDaysInMonth(date) {
		return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
	}
	clone(date) {
		return new Date(date.getTime());
	}
	createDate(year, month, date) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (month < 0 || month > 11) throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
			if (date < 1) throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
		}
		const result = this._createDateWithOverflow(year, month, date);
		if (result.getMonth() !== month && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error(`Invalid date "${date}" for month with index "${month}".`);
		return result;
	}
	today() {
		return /* @__PURE__ */ new Date();
	}
	parse(value, parseFormat) {
		if (typeof value === "number") return new Date(value);
		if (value instanceof Date) return this.clone(value);
		if (typeof value !== "string") return null;
		const text = value.trim();
		if (!text) return null;
		if (typeof parseFormat === "string") {
			const parsedByFormat = this.parseByToken(text, parseFormat);
			if (parsedByFormat) return parsedByFormat;
		}
		const dateOnly = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
		if (dateOnly) return this.createDateOrInvalid(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]));
		const timestamp = Date.parse(text);
		return isNaN(timestamp) ? this.invalid() : new Date(timestamp);
	}
	format(date, displayFormat) {
		if (!date) return "";
		if (!this.isValid(date)) throw Error("NativeDateAdapter: Cannot format invalid date.");
		if (typeof displayFormat === "object" && displayFormat !== null) {
			const dtf = new Intl.DateTimeFormat(this.locale, _objectSpread2(_objectSpread2({}, displayFormat), {}, { timeZone: "utc" }));
			return this._format(dtf, date);
		}
		return this.formatByToken(date, displayFormat);
	}
	addCalendarYears(date, years) {
		return this.addCalendarMonths(date, years * 12);
	}
	addCalendarMonths(date, months) {
		const newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
		if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) newDate.setDate(0);
		return newDate;
	}
	addCalendarDays(date, days) {
		return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
	}
	deserialize(value) {
		if (typeof value === "string") {
			if (!value) return null;
			if (ISO_8601_REGEX.test(value)) {
				const date = new Date(value);
				if (this.isValid(date)) return date;
			}
		}
		return super.deserialize(value);
	}
	isDateInstance(obj) {
		return obj instanceof Date;
	}
	isValid(date) {
		return !isNaN(date.getTime());
	}
	invalid() {
		return /* @__PURE__ */ new Date(NaN);
	}
	getQuarter(date) {
		return Math.floor(date.getMonth() / 3) + 1;
	}
	setQuarter(date, quarter) {
		const monthOffset = (quarter - this.getQuarter(date)) * 3;
		return this.addCalendarMonths(date, monthOffset);
	}
	startOfQuarter(date) {
		const month = (this.getQuarter(date) - 1) * 3;
		return this.createDate(this.getYear(date), month, 1);
	}
	getISOWeek(date) {
		const target = new Date(date.valueOf());
		const dayNr = (date.getDay() + 6) % 7;
		target.setDate(target.getDate() - dayNr + 3);
		const firstThursday = target.valueOf();
		target.setMonth(0, 1);
		if (target.getDay() !== 4) target.setMonth(0, 1 + (4 - target.getDay() + 7) % 7);
		return 1 + Math.ceil((firstThursday - target.valueOf()) / 6048e5);
	}
	setYear(date, year) {
		const result = this.clone(date);
		result.setFullYear(year);
		return result;
	}
	setMonth(date, month) {
		const result = this.clone(date);
		result.setMonth(month);
		return result;
	}
	setDate(date, day) {
		const result = this.clone(date);
		result.setDate(day);
		return result;
	}
	setTime(target, hours, minutes, seconds) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (!inRange(hours, 0, 23)) throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
			if (!inRange(minutes, 0, 59)) throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
			if (!inRange(seconds, 0, 59)) throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
		}
		const clone = this.clone(target);
		clone.setHours(hours, minutes, seconds, 0);
		return clone;
	}
	getHours(date) {
		return date.getHours();
	}
	getMinutes(date) {
		return date.getMinutes();
	}
	getSeconds(date) {
		return date.getSeconds();
	}
	parseTime(userValue, parseFormat) {
		if (typeof userValue !== "string") return userValue instanceof Date ? new Date(userValue.getTime()) : null;
		const value = userValue.trim();
		if (value.length === 0) return null;
		let result = this._parseTimeString(value);
		if (result === null) {
			const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
			if (withoutExtras.length > 0) result = this._parseTimeString(withoutExtras);
		}
		return result || this.invalid();
	}
	addSeconds(date, amount) {
		return new Date(date.getTime() + amount * 1e3);
	}
	getMilliseconds(date) {
		return date.getMilliseconds();
	}
	getTime(date) {
		return date.getTime();
	}
	getCalendarId(_date) {
		return "gregory";
	}
	isFirstDayOfMonth(date) {
		return this.getDate(date) === 1;
	}
	isLastDayOfMonth(date) {
		return this.getDate(date) === this.getNumDaysInMonth(date);
	}
	isToday(date) {
		return this.sameDate(date, this.today());
	}
	calendarStartOfMonth(date) {
		return this.createDate(this.getYear(date), this.getMonth(date), 1);
	}
	calendarStartOfWeek(date) {
		const diff = (this.getDayOfWeek(date) - this.getFirstDayOfWeek() + 7) % 7;
		const result = this.addCalendarDays(date, -diff);
		result.setHours(0, 0, 0, 0);
		return result;
	}
	/**
	* Creates a date allowing for month/date overflow (e.g., Jan 32 becomes Feb 1).
	* This is how Material handles date creation internally.
	*/
	_createDateWithOverflow(year, month, date) {
		const result = /* @__PURE__ */ new Date();
		result.setFullYear(year, month, date);
		result.setHours(0, 0, 0, 0);
		return result;
	}
	/** Pads a number to two digits for ISO formatting. */
	_2digit(n) {
		return `00${n}`.slice(-2);
	}
	/**
	* Formats a date using Intl.DateTimeFormat while avoiding DST issues.
	* Uses UTC internally to ensure consistent formatting across timezones.
	*/
	_format(dtf, date) {
		const d = /* @__PURE__ */ new Date();
		d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
		d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
		return dtf.format(d);
	}
	/**
	* Parses time strings in various formats (10:30, 10:30:45, 10:30 AM, etc.)
	* Returns null if the string cannot be parsed.
	*/
	_parseTimeString(value) {
		const parsed = value.toUpperCase().match(TIME_REGEX);
		if (parsed) {
			let hours = parseInt(parsed[1]);
			const minutes = parseInt(parsed[2]);
			const seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
			const amPm = parsed[4];
			if (hours === 12) hours = amPm === "AM" ? 0 : hours;
			else if (amPm === "PM") hours += 12;
			if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) return this.setTime(this.today(), hours, minutes, seconds || 0);
		}
		return null;
	}
	/**
	* Parses the date-fns-style token subset used by NG-ZORRO default formats.
	* This intentionally stays small; complex calendar parsing belongs in custom adapters.
	*/
	parseByToken(value, formatStr) {
		const tokenPatterns = {
			yyyy: "(?<year>\\d{4})",
			yy: "(?<year2>\\d{2})",
			MM: "(?<month>\\d{2})",
			M: "(?<month>\\d{1,2})",
			dd: "(?<day>\\d{2})",
			d: "(?<day>\\d{1,2})",
			HH: "(?<hour>\\d{2})",
			H: "(?<hour>\\d{1,2})",
			mm: "(?<minute>\\d{2})",
			m: "(?<minute>\\d{1,2})",
			ss: "(?<second>\\d{2})",
			s: "(?<second>\\d{1,2})"
		};
		const tokens = Object.keys(tokenPatterns).sort((a, b) => b.length - a.length);
		let source = "";
		for (let i = 0; i < formatStr.length;) {
			if (formatStr[i] === "[") {
				const end = formatStr.indexOf("]", i + 1);
				const literal = end === -1 ? formatStr.slice(i + 1) : formatStr.slice(i + 1, end);
				source += this.escapeRegex(literal);
				i = end === -1 ? formatStr.length : end + 1;
				continue;
			}
			const token = tokens.find((item) => formatStr.startsWith(item, i));
			if (token) {
				source += tokenPatterns[token];
				i += token.length;
			} else {
				source += this.escapeRegex(formatStr[i]);
				i++;
			}
		}
		let match;
		try {
			match = value.match(new RegExp(`^${source}$`));
		} catch (_unused) {
			return null;
		}
		if (!(match === null || match === void 0 ? void 0 : match.groups)) return null;
		const year = match.groups["year"] ? Number(match.groups["year"]) : match.groups["year2"] ? 2e3 + Number(match.groups["year2"]) : this.today().getFullYear();
		const month = match.groups["month"] ? Number(match.groups["month"]) - 1 : 0;
		const day = match.groups["day"] ? Number(match.groups["day"]) : 1;
		const hour = match.groups["hour"] ? Number(match.groups["hour"]) : 0;
		const minute = match.groups["minute"] ? Number(match.groups["minute"]) : 0;
		const second = match.groups["second"] ? Number(match.groups["second"]) : 0;
		if (!inRange(month, 0, 11) || !inRange(day, 1, 31) || !inRange(hour, 0, 23) || !inRange(minute, 0, 59) || !inRange(second, 0, 59)) return this.invalid();
		const result = this.createDateOrInvalid(year, month, day);
		if (!this.isValid(result)) return result;
		return this.setTime(result, hour, minute, second);
	}
	createDateOrInvalid(year, month, date) {
		try {
			const result = this.createDate(year, month, date);
			return this.getYear(result) === year && this.getMonth(result) === month && this.getDate(result) === date ? result : this.invalid();
		} catch (_unused2) {
			return this.invalid();
		}
	}
	escapeRegex(value) {
		return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	/**
	* Formats a date using date-fns-style token strings.
	* This is a NG-ZORRO extension for compatibility with existing formats.
	*/
	formatByToken(date, formatStr) {
		if (!formatStr) return "";
		const locale = this.locale;
		const dtfMonthShort = new Intl.DateTimeFormat(locale, {
			month: "short",
			timeZone: "utc"
		});
		const dtfMonthLong = new Intl.DateTimeFormat(locale, {
			month: "long",
			timeZone: "utc"
		});
		const dtfWeekdayNarrow = new Intl.DateTimeFormat(locale, {
			weekday: "narrow",
			timeZone: "utc"
		});
		const dtfWeekdayShort = new Intl.DateTimeFormat(locale, {
			weekday: "short",
			timeZone: "utc"
		});
		const dtfWeekdayLong = new Intl.DateTimeFormat(locale, {
			weekday: "long",
			timeZone: "utc"
		});
		const quarter = this.getQuarter(date);
		const hour12 = date.getHours() % 12 || 12;
		const tokenValues = {
			yyyy: date.getFullYear().toString().padStart(4, "0"),
			yy: this._2digit(date.getFullYear() % 100),
			MMMM: this._format(dtfMonthLong, date),
			MMM: this._format(dtfMonthShort, date),
			MM: this._2digit(date.getMonth() + 1),
			M: (date.getMonth() + 1).toString(),
			dd: this._2digit(date.getDate()),
			d: date.getDate().toString(),
			EEEEEE: this._format(dtfWeekdayNarrow, date),
			EEEEE: this._format(dtfWeekdayNarrow, date),
			EEEE: this._format(dtfWeekdayLong, date),
			EEE: this._format(dtfWeekdayShort, date),
			EE: this._format(dtfWeekdayShort, date),
			E: this._format(dtfWeekdayShort, date),
			HH: this._2digit(date.getHours()),
			H: date.getHours().toString(),
			hh: this._2digit(hour12),
			h: hour12.toString(),
			mm: this._2digit(date.getMinutes()),
			m: date.getMinutes().toString(),
			ss: this._2digit(date.getSeconds()),
			s: date.getSeconds().toString(),
			ww: this._2digit(this.getISOWeek(date)),
			w: this.getISOWeek(date).toString(),
			QQQ: `Q${quarter}`,
			QQ: this._2digit(quarter),
			Q: quarter.toString(),
			a: date.getHours() < 12 ? "AM" : "PM"
		};
		const tokens = Object.keys(tokenValues).sort((a, b) => b.length - a.length);
		let result = "";
		for (let i = 0; i < formatStr.length;) {
			if (formatStr[i] === "[") {
				const end = formatStr.indexOf("]", i + 1);
				result += end === -1 ? formatStr.slice(i + 1) : formatStr.slice(i + 1, end);
				i = end === -1 ? formatStr.length : end + 1;
				continue;
			}
			if (formatStr[i] === "Q") {
				let end = i + 1;
				while (formatStr[end] === "Q") end++;
				const length = end - i;
				result += length >= 4 ? quarter.toString() : tokenValues["Q".repeat(length)];
				i = end;
				continue;
			}
			const token = tokens.find((item) => formatStr.startsWith(item, i));
			if (token) {
				result += tokenValues[token];
				i += token.length;
			} else {
				result += formatStr[i];
				i++;
			}
		}
		return result;
	}
};
_NativeDateAdapter = NativeDateAdapter;
_defineProperty(NativeDateAdapter, "ɵfac", function NativeDateAdapter_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NativeDateAdapter)();
});
_defineProperty(NativeDateAdapter, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NativeDateAdapter,
	factory: _NativeDateAdapter.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{ type: Injectable }], () => [], null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NgTimeParser = class {
	constructor(format, localeId) {
		_defineProperty(this, "format", void 0);
		_defineProperty(this, "localeId", void 0);
		_defineProperty(this, "regex", null);
		_defineProperty(this, "matchMap", {
			hour: null,
			minute: null,
			second: null,
			periodNarrow: null,
			periodWide: null,
			periodAbbreviated: null
		});
		this.format = format;
		this.localeId = localeId;
		this.genRegexp();
	}
	toDate(str) {
		const result = this.getTimeResult(str);
		const time = /* @__PURE__ */ new Date();
		if (isNotNil(result === null || result === void 0 ? void 0 : result.hour)) time.setHours(result.hour);
		if (isNotNil(result === null || result === void 0 ? void 0 : result.minute)) time.setMinutes(result.minute);
		if (isNotNil(result === null || result === void 0 ? void 0 : result.second)) time.setSeconds(result.second);
		if ((result === null || result === void 0 ? void 0 : result.period) === 1 && time.getHours() < 12) time.setHours(time.getHours() + 12);
		return time;
	}
	getTimeResult(str) {
		const match = this.regex.exec(str);
		let period = null;
		if (match) {
			if (isNotNil(this.matchMap.periodNarrow)) period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Narrow).indexOf(match[this.matchMap.periodNarrow + 1]);
			if (isNotNil(this.matchMap.periodWide)) period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Wide).indexOf(match[this.matchMap.periodWide + 1]);
			if (isNotNil(this.matchMap.periodAbbreviated)) period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Abbreviated).indexOf(match[this.matchMap.periodAbbreviated + 1]);
			return {
				hour: isNotNil(this.matchMap.hour) ? Number.parseInt(match[this.matchMap.hour + 1], 10) : null,
				minute: isNotNil(this.matchMap.minute) ? Number.parseInt(match[this.matchMap.minute + 1], 10) : null,
				second: isNotNil(this.matchMap.second) ? Number.parseInt(match[this.matchMap.second + 1], 10) : null,
				period
			};
		} else return null;
	}
	genRegexp() {
		let regexStr = this.format.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$&");
		const hourRegex = /h{1,2}/i;
		const minuteRegex = /m{1,2}/;
		const secondRegex = /s{1,2}/;
		const periodNarrow = /aaaaa/;
		const periodWide = /aaaa/;
		const periodAbbreviated = /a{1,3}/;
		const hourMatch = hourRegex.exec(this.format);
		const minuteMatch = minuteRegex.exec(this.format);
		const secondMatch = secondRegex.exec(this.format);
		const periodNarrowMatch = periodNarrow.exec(this.format);
		let periodWideMatch = null;
		let periodAbbreviatedMatch = null;
		if (!periodNarrowMatch) periodWideMatch = periodWide.exec(this.format);
		if (!periodWideMatch && !periodNarrowMatch) periodAbbreviatedMatch = periodAbbreviated.exec(this.format);
		[
			hourMatch,
			minuteMatch,
			secondMatch,
			periodNarrowMatch,
			periodWideMatch,
			periodAbbreviatedMatch
		].filter((m) => !!m).sort((a, b) => a.index - b.index).forEach((match, index) => {
			switch (match) {
				case hourMatch:
					this.matchMap.hour = index;
					regexStr = regexStr.replace(hourRegex, "(\\d{1,2})");
					break;
				case minuteMatch:
					this.matchMap.minute = index;
					regexStr = regexStr.replace(minuteRegex, "(\\d{1,2})");
					break;
				case secondMatch:
					this.matchMap.second = index;
					regexStr = regexStr.replace(secondRegex, "(\\d{1,2})");
					break;
				case periodNarrowMatch: {
					this.matchMap.periodNarrow = index;
					const periodsNarrow = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Narrow).join("|");
					regexStr = regexStr.replace(periodNarrow, `(${periodsNarrow})`);
					break;
				}
				case periodWideMatch: {
					this.matchMap.periodWide = index;
					const periodsWide = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Wide).join("|");
					regexStr = regexStr.replace(periodWide, `(${periodsWide})`);
					break;
				}
				case periodAbbreviatedMatch: {
					this.matchMap.periodAbbreviated = index;
					const periodsAbbreviated = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Abbreviated).join("|");
					regexStr = regexStr.replace(periodAbbreviated, `(${periodsAbbreviated})`);
					break;
				}
			}
		});
		this.regex = new RegExp(regexStr);
	}
};
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-i18n.mjs
var _NzI18nService;
var _NzI18nPipe;
var _NzI18nModule;
var _DateHelperService;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var en_US = {
	locale: "en",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_US",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	TimePicker: {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"]
	},
	Calendar: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_US",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	global: { placeholder: "Please select" },
	Table: {
		filterTitle: "Filter menu",
		filterConfirm: "OK",
		filterReset: "Reset",
		filterEmptyText: "No filters",
		emptyText: "No data",
		selectAll: "Select current page",
		selectInvert: "Invert current page",
		selectionAll: "Select all data",
		sortTitle: "Sort",
		expand: "Expand row",
		collapse: "Collapse row",
		triggerDesc: "Click to sort descending",
		triggerAsc: "Click to sort ascending",
		cancelSort: "Click to cancel sorting",
		filterCheckall: "Select all items",
		filterSearchPlaceholder: "Search in filters",
		selectNone: "Clear all data"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancel",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancel"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Search here",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remove",
		selectCurrent: "Select current page",
		removeCurrent: "Remove current page",
		selectAll: "Select all data",
		removeAll: "Remove all data",
		selectInvert: "Invert current page"
	},
	Upload: {
		uploading: "Uploading...",
		removeFile: "Remove file",
		uploadError: "Upload error",
		previewFile: "Preview file",
		downloadFile: "Download file"
	},
	Empty: { description: "No Data" },
	Form: { optional: "(optional)" },
	Icon: { icon: "icon" },
	Text: {
		edit: "Edit",
		copy: "Copy",
		copied: "Copied",
		expand: "Expand"
	},
	PageHeader: { back: "Back" },
	Image: { preview: "Preview" },
	CronExpression: {
		cronError: "Invalid cron expression",
		second: "second",
		minute: "minute",
		hour: "hour",
		day: "day",
		month: "month",
		week: "week"
	},
	QRCode: {
		expired: "QR code expired",
		refresh: "Refresh",
		scanned: "Scanned"
	},
	CheckList: {
		checkList: "Check List",
		checkListFinish: "You have successfully completed the list!",
		checkListClose: "Close",
		checkListFooter: "Check list is no longer required",
		checkListCheck: "Do you want to close the list?",
		ok: "OK",
		cancel: "Cancel",
		checkListCheckOther: "No longer required to show"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var zh_CN = {
	locale: "zh-cn",
	Pagination: {
		items_per_page: "条/页",
		jump_to: "跳至",
		jump_to_confirm: "确定",
		page: "页",
		prev_page: "上一页",
		next_page: "下一页",
		prev_5: "向前 5 页",
		next_5: "向后 5 页",
		prev_3: "向前 3 页",
		next_3: "向后 3 页",
		page_size: "页码"
	},
	DatePicker: {
		lang: {
			placeholder: "请选择日期",
			yearPlaceholder: "请选择年份",
			quarterPlaceholder: "请选择季度",
			monthPlaceholder: "请选择月份",
			weekPlaceholder: "请选择周",
			rangePlaceholder: ["开始日期", "结束日期"],
			rangeYearPlaceholder: ["开始年份", "结束年份"],
			rangeQuarterPlaceholder: ["开始季度", "结束季度"],
			rangeMonthPlaceholder: ["开始月份", "结束月份"],
			rangeWeekPlaceholder: ["开始周", "结束周"],
			locale: "zh_CN",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "确定",
			timeSelect: "选择时间",
			dateSelect: "选择日期",
			weekSelect: "选择周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上个月 (翻页上键)",
			nextMonth: "下个月 (翻页下键)",
			monthSelect: "选择月份",
			yearSelect: "选择年份",
			decadeSelect: "选择年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
			previousYear: "上一年 (Control键加左方向键)",
			nextYear: "下一年 (Control键加右方向键)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世纪",
			nextCentury: "下一世纪"
		},
		timePickerLocale: {
			placeholder: "请选择时间",
			rangePlaceholder: ["开始时间", "结束时间"]
		}
	},
	TimePicker: {
		placeholder: "请选择时间",
		rangePlaceholder: ["开始时间", "结束时间"]
	},
	Calendar: {
		lang: {
			placeholder: "请选择日期",
			yearPlaceholder: "请选择年份",
			quarterPlaceholder: "请选择季度",
			monthPlaceholder: "请选择月份",
			weekPlaceholder: "请选择周",
			rangePlaceholder: ["开始日期", "结束日期"],
			rangeYearPlaceholder: ["开始年份", "结束年份"],
			rangeMonthPlaceholder: ["开始月份", "结束月份"],
			rangeWeekPlaceholder: ["开始周", "结束周"],
			locale: "zh_CN",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "确定",
			timeSelect: "选择时间",
			dateSelect: "选择日期",
			weekSelect: "选择周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上个月 (翻页上键)",
			nextMonth: "下个月 (翻页下键)",
			monthSelect: "选择月份",
			yearSelect: "选择年份",
			decadeSelect: "选择年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
			previousYear: "上一年 (Control键加左方向键)",
			nextYear: "下一年 (Control键加右方向键)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世纪",
			nextCentury: "下一世纪"
		},
		timePickerLocale: {
			placeholder: "请选择时间",
			rangePlaceholder: ["开始时间", "结束时间"]
		}
	},
	global: { placeholder: "请选择" },
	Table: {
		filterTitle: "筛选",
		filterConfirm: "确定",
		filterReset: "重置",
		filterEmptyText: "无筛选项",
		selectAll: "全选当页",
		selectInvert: "反选当页",
		selectionAll: "全选所有",
		sortTitle: "排序",
		expand: "展开行",
		collapse: "关闭行",
		triggerDesc: "点击降序",
		triggerAsc: "点击升序",
		cancelSort: "取消排序",
		filterCheckall: "全选",
		filterSearchPlaceholder: "在筛选项中搜索",
		selectNone: "清空所有"
	},
	Modal: {
		okText: "确定",
		cancelText: "取消",
		justOkText: "知道了"
	},
	Popconfirm: {
		cancelText: "取消",
		okText: "确定"
	},
	Transfer: {
		searchPlaceholder: "请输入搜索内容",
		itemUnit: "项",
		itemsUnit: "项",
		remove: "删除",
		selectCurrent: "全选当页",
		removeCurrent: "删除当页",
		selectAll: "全选所有",
		removeAll: "删除全部",
		selectInvert: "反选当页"
	},
	Upload: {
		uploading: "文件上传中",
		removeFile: "删除文件",
		uploadError: "上传错误",
		previewFile: "预览文件",
		downloadFile: "下载文件"
	},
	Empty: { description: "暂无数据" },
	Form: { optional: "(可选)" },
	Icon: { icon: "图标" },
	Text: {
		edit: "编辑",
		copy: "复制",
		copied: "复制成功",
		expand: "展开"
	},
	PageHeader: { back: "返回" },
	Image: { preview: "预览" },
	CronExpression: {
		cronError: "cron 表达式不合法",
		second: "秒",
		minute: "分钟",
		hour: "小时",
		day: "日",
		month: "月",
		week: "周"
	},
	QRCode: {
		expired: "二维码过期",
		refresh: "点击刷新",
		scanned: "已扫描"
	},
	CheckList: {
		checkList: "任务清单",
		checkListFinish: "你已成功完成任务清单！",
		checkListClose: "关闭",
		checkListFooter: "不需要操作指引",
		checkListCheck: "你要关闭操作清单吗",
		ok: "确定",
		cancel: "取消",
		checkListCheckOther: "以后不再需要操作清单"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NZ_I18N = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-i18n" : "");
function provideNzI18n(config) {
	return makeEnvironmentProviders([typeof config === "function" ? {
		provide: NZ_I18N,
		useFactory: config
	} : {
		provide: NZ_I18N,
		useValue: config
	}]);
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzI18nService = class {
	get localeChange() {
		return this._change.asObservable();
	}
	constructor() {
		_defineProperty(this, "_locale", void 0);
		_defineProperty(this, "_change", new BehaviorSubject(this._locale));
		_defineProperty(this, "dateLocale", void 0);
		this.setLocale(inject(NZ_I18N, { optional: true }) || zh_CN);
		this.setDateLocale(inject(NZ_DATE_LOCALE, { optional: true }));
	}
	translate(path, data) {
		let content = this._getObjectPath(this._locale, path);
		if (typeof content === "string") {
			if (data) Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, "g"), data[key]));
			return content;
		}
		return path;
	}
	/**
	* Set/Change current locale globally throughout the WHOLE application
	* NOTE: If called at runtime, rendered interface may not change along with the locale change,
	* because this do not trigger another render schedule.
	*
	* @param locale The translating letters
	*/
	setLocale(locale) {
		if (this._locale && this._locale.locale === locale.locale) return;
		this._locale = locale;
		this._change.next(locale);
	}
	getLocale() {
		return this._locale;
	}
	getLocaleId() {
		return this._locale ? this._locale.locale : "";
	}
	/**
	* @deprecated Intended for internal use only. Provide {@link NZ_DATE_LOCALE} instead.
	*/
	setDateLocale(dateLocale) {
		this.dateLocale = dateLocale;
	}
	/**
	* @deprecated Intended for internal use only. Use `inject(NZ_DATE_LOCALE)` instead.
	*/
	getDateLocale() {
		return this.dateLocale;
	}
	/**
	* Get locale data
	*
	* @param path dot paths for finding exist value from locale data, eg. "a.b.c"
	* @param defaultValue default value if the result is not "truthy"
	*/
	getLocaleData(path, defaultValue) {
		const result = path ? this._getObjectPath(this._locale, path) : this._locale;
		if (!result && !defaultValue) warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
		return result || defaultValue || this._getObjectPath(en_US, path) || {};
	}
	_getObjectPath(obj, path) {
		let res = obj;
		const paths = path.split(".");
		const depth = paths.length;
		let index = 0;
		while (res && index < depth) res = res[paths[index++]];
		return index === depth ? res : null;
	}
};
_NzI18nService = NzI18nService;
_defineProperty(NzI18nService, "ɵfac", function NzI18nService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzI18nService)();
});
_defineProperty(NzI18nService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NzI18nService,
	factory: _NzI18nService.ɵfac,
	providedIn: "root"
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzI18nPipe = class {
	constructor() {
		_defineProperty(this, "_locale", inject(NzI18nService));
	}
	transform(path, keyValue) {
		return this._locale.translate(path, keyValue);
	}
};
_NzI18nPipe = NzI18nPipe;
_defineProperty(NzI18nPipe, "ɵfac", function NzI18nPipe_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzI18nPipe)();
});
_defineProperty(NzI18nPipe, "ɵpipe", /* @__PURE__ */ ɵɵdefinePipe({
	name: "nzI18n",
	type: _NzI18nPipe,
	pure: true
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nPipe, [{
		type: Pipe,
		args: [{ name: "nzI18n" }]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzI18nModule = class {};
_NzI18nModule = NzI18nModule;
_defineProperty(NzI18nModule, "ɵfac", function NzI18nModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzI18nModule)();
});
_defineProperty(NzI18nModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzI18nModule,
	imports: [NzI18nPipe],
	exports: [NzI18nPipe]
}));
_defineProperty(NzI18nModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nModule, [{
		type: NgModule,
		args: [{
			imports: [NzI18nPipe],
			exports: [NzI18nPipe]
		}]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* @deprecated Use `NzDateAdapter` directly instead. Will be removed in v23.
*/
function DATE_HELPER_SERVICE_FACTORY() {
	const i18n = inject(NzI18nService);
	return i18n.getDateLocale() ? new DateHelperByDateFns(i18n) : new DateHelperByDatePipe(i18n);
}
/**
* Abstract DateHelperService(Token via Class)
* Compatibility: compact for original usage by default which using DatePipe
*
* @deprecated Use `NzDateAdapter` directly instead. Will be removed in v23.
*/
var DateHelperService = class {
	constructor(i18n) {
		_defineProperty(this, "i18n", void 0);
		_defineProperty(this, "config", mergeDateConfig(inject(NZ_DATE_CONFIG, { optional: true })));
		this.i18n = i18n;
	}
};
_DateHelperService = DateHelperService;
_defineProperty(DateHelperService, "ɵfac", function DateHelperService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _DateHelperService)(ɵɵinject(NzI18nService));
});
_defineProperty(DateHelperService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _DateHelperService,
	factory: () => DATE_HELPER_SERVICE_FACTORY(),
	providedIn: "root"
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateHelperService, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: DATE_HELPER_SERVICE_FACTORY
		}]
	}], () => [{ type: NzI18nService }], null);
})();
/**
* DateHelper that handles date formats with date-fns
* @deprecated Use {@link NzDateAdapter} directly instead. Will be removed in v23.
*/
var DateHelperByDateFns = class extends DateHelperService {
	getISOWeek(date) {
		return getISOWeek(date);
	}
	getFirstDayOfWeek() {
		let defaultWeekStartsOn;
		try {
			defaultWeekStartsOn = this.i18n.getDateLocale().options.weekStartsOn;
		} catch (_unused) {
			defaultWeekStartsOn = 1;
		}
		return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
	}
	/**
	* Format a date
	*
	* @see https://date-fns.org/docs/format#description
	* @param date Date
	* @param formatStr format string
	*/
	format(date, formatStr) {
		return date ? format(date, formatStr, { locale: this.i18n.getDateLocale() }) : "";
	}
	parseDate(text, formatStr) {
		return parse(text, formatStr, /* @__PURE__ */ new Date(), {
			locale: this.i18n.getDateLocale(),
			weekStartsOn: this.getFirstDayOfWeek()
		});
	}
	parseTime(text, formatStr) {
		return this.parseDate(text, formatStr);
	}
};
/**
* DateHelper that handles date formats with angular's date-pipe
*
* @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
* @deprecated Use `NzDateAdapter` directly instead. Will be removed in v23.
*/
var DateHelperByDatePipe = class extends DateHelperService {
	getISOWeek(date) {
		return +this.format(date, "w");
	}
	getFirstDayOfWeek() {
		if (this.config.firstDayOfWeek === void 0) {
			const locale = this.i18n.getLocaleId();
			return locale && ["zh-cn", "zh-tw"].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
		}
		return this.config.firstDayOfWeek;
	}
	format(date, formatStr) {
		return date ? this.replaceQuarter(formatDate(date, formatStr, this.i18n.getLocaleId()), date) : "";
	}
	parseDate(text) {
		return new Date(text);
	}
	parseTime(text, formatStr) {
		return new NgTimeParser(formatStr, this.i18n.getLocaleId()).toDate(text);
	}
	replaceQuarter(dateStr, date) {
		const quarter = getQuarter(date).toString();
		const record = {
			Q: quarter,
			QQ: `0${quarter}`,
			QQQ: `Q${quarter}`
		};
		return dateStr.replace(/Q+(?![^[]*])/g, (match) => {
			var _record$match;
			return (_record$match = record[match]) !== null && _record$match !== void 0 ? _record$match : quarter;
		}).replace(/\[(Q+)]/g, "$1");
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ar_EG = {
	locale: "ar",
	Pagination: {
		items_per_page: "/ الصفحة",
		jump_to: "الذهاب إلى",
		jump_to_confirm: "تأكيد",
		page: "الصفحة",
		prev_page: "الصفحة السابقة",
		next_page: "الصفحة التالية",
		prev_5: "خمس صفحات سابقة",
		next_5: "خمس صفحات تالية",
		prev_3: "ثلاث صفحات سابقة",
		next_3: "ثلاث صفحات تالية",
		page_size: "مقاس الصفحه"
	},
	DatePicker: {
		lang: {
			placeholder: "اختيار التاريخ",
			yearPlaceholder: "اختيار السنة",
			quarterPlaceholder: "اختيار الربع",
			monthPlaceholder: "اختيار الشهر",
			weekPlaceholder: "اختيار الأسبوع",
			rangePlaceholder: ["البداية", "النهاية"],
			rangeYearPlaceholder: ["سنة البداية", "سنة النهاية"],
			rangeMonthPlaceholder: ["شهر البداية", "شهر النهاية"],
			rangeWeekPlaceholder: ["أسبوع البداية", "أسبوع النهاية"],
			locale: "ar_EG",
			today: "اليوم",
			now: "الأن",
			backToToday: "العودة إلى اليوم",
			ok: "تأكيد",
			clear: "مسح",
			month: "الشهر",
			year: "السنة",
			timeSelect: "اختيار الوقت",
			dateSelect: "اختيار التاريخ",
			weekSelect: "اختيار الأسبوع",
			monthSelect: "اختيار الشهر",
			yearSelect: "اختيار السنة",
			decadeSelect: "اختيار العقد",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "الشهر السابق (PageUp)",
			nextMonth: "الشهر التالى(PageDown)",
			previousYear: "العام السابق (Control + left)",
			nextYear: "العام التالى (Control + right)",
			previousDecade: "العقد السابق",
			nextDecade: "العقد التالى",
			previousCentury: "القرن السابق",
			nextCentury: "القرن التالى"
		},
		timePickerLocale: { placeholder: "اختيار الوقت" },
		dateFormat: "DD-MM-YYYY",
		monthFormat: "MM-YYYY",
		dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
		weekFormat: "wo-YYYY"
	},
	TimePicker: { placeholder: "اختيار الوقت" },
	Calendar: {
		lang: {
			placeholder: "اختيار التاريخ",
			yearPlaceholder: "اختيار السنة",
			quarterPlaceholder: "اختيار الربع",
			monthPlaceholder: "اختيار الشهر",
			weekPlaceholder: "اختيار الأسبوع",
			rangePlaceholder: ["البداية", "النهاية"],
			rangeYearPlaceholder: ["سنة البداية", "سنة النهاية"],
			rangeMonthPlaceholder: ["شهر البداية", "شهر النهاية"],
			rangeWeekPlaceholder: ["أسبوع البداية", "أسبوع النهاية"],
			locale: "ar_EG",
			today: "اليوم",
			now: "الأن",
			backToToday: "العودة إلى اليوم",
			ok: "تأكيد",
			clear: "مسح",
			month: "الشهر",
			year: "السنة",
			timeSelect: "اختيار الوقت",
			dateSelect: "اختيار التاريخ",
			weekSelect: "اختيار الأسبوع",
			monthSelect: "اختيار الشهر",
			yearSelect: "اختيار السنة",
			decadeSelect: "اختيار العقد",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "الشهر السابق (PageUp)",
			nextMonth: "الشهر التالى(PageDown)",
			previousYear: "العام السابق (Control + left)",
			nextYear: "العام التالى (Control + right)",
			previousDecade: "العقد السابق",
			nextDecade: "العقد التالى",
			previousCentury: "القرن السابق",
			nextCentury: "القرن التالى"
		},
		timePickerLocale: { placeholder: "اختيار الوقت" },
		dateFormat: "DD-MM-YYYY",
		monthFormat: "MM-YYYY",
		dateTimeFormat: "DD-MM-YYYY HH:mm:ss",
		weekFormat: "wo-YYYY"
	},
	global: { placeholder: "يرجى التحديد" },
	Table: {
		filterTitle: "الفلاتر",
		filterConfirm: "تأكيد",
		filterReset: "إعادة ضبط",
		selectAll: "اختيار الكل",
		selectInvert: "إلغاء الاختيار",
		selectionAll: "حدد جميع البيانات",
		sortTitle: "رتب",
		expand: "توسيع الصف",
		collapse: "طي الصف",
		triggerDesc: "ترتيب تنازلي",
		triggerAsc: "ترتيب تصاعدي",
		cancelSort: "إلغاء الترتيب"
	},
	Modal: {
		okText: "تأكيد",
		cancelText: "إلغاء",
		justOkText: "تأكيد"
	},
	Popconfirm: {
		okText: "تأكيد",
		cancelText: "إلغاء"
	},
	Transfer: {
		searchPlaceholder: "ابحث هنا",
		itemUnit: "عنصر",
		itemsUnit: "عناصر"
	},
	Upload: {
		uploading: "جاري الرفع...",
		removeFile: "احذف الملف",
		uploadError: "مشكلة فى الرفع",
		previewFile: "استعرض الملف",
		downloadFile: "تحميل الملف"
	},
	Empty: { description: "لا توجد بيانات" },
	Form: { optional: "(اختياري)" },
	Icon: { icon: "أيقونة" },
	Text: {
		edit: "تعديل",
		copy: "نسخ",
		copied: "نقل",
		expand: "وسع"
	},
	PageHeader: { back: "عودة" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var az_AZ = {
	locale: "az",
	Pagination: {
		items_per_page: "/ səhifə",
		jump_to: "Get",
		jump_to_confirm: "təsdiqlə",
		page: "",
		prev_page: "Əvvəlki Səhifə",
		next_page: "Növbəti Səhifə",
		prev_5: "Əvvəlki 5 Səhifə",
		next_5: "Növbəti 5 Səhifə",
		prev_3: "Əvvəlki 3 Səhifə",
		next_3: "Növbəti 3 Səhifə",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Tarix seçin",
			rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"],
			locale: "az_AZ",
			today: "Bugün",
			now: "İndi",
			backToToday: "Bugünə qayıt",
			ok: "Təsdiq",
			clear: "Təmizlə",
			month: "Ay",
			year: "İl",
			timeSelect: "vaxtı seç",
			dateSelect: "tarixi seç",
			weekSelect: "Həftə seç",
			monthSelect: "Ay seç",
			yearSelect: "il seç",
			decadeSelect: "Onillik seçin",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Əvvəlki ay (PageUp)",
			nextMonth: "Növbəti ay (PageDown)",
			previousYear: "Sonuncu il (Control + left)",
			nextYear: "Növbəti il (Control + right)",
			previousDecade: "Sonuncu onillik",
			nextDecade: "Növbəti onillik",
			previousCentury: "Sonuncu əsr",
			nextCentury: "Növbəti əsr"
		},
		timePickerLocale: { placeholder: "Vaxtı seç" }
	},
	TimePicker: { placeholder: "Vaxtı seç" },
	Calendar: {
		lang: {
			placeholder: "Tarix seçin",
			rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"],
			locale: "az_AZ",
			today: "Bugün",
			now: "İndi",
			backToToday: "Bugünə qayıt",
			ok: "Təsdiq",
			clear: "Təmizlə",
			month: "Ay",
			year: "İl",
			timeSelect: "vaxtı seç",
			dateSelect: "tarixi seç",
			weekSelect: "Həftə seç",
			monthSelect: "Ay seç",
			yearSelect: "il seç",
			decadeSelect: "Onillik seçin",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Əvvəlki ay (PageUp)",
			nextMonth: "Növbəti ay (PageDown)",
			previousYear: "Sonuncu il (Control + left)",
			nextYear: "Növbəti il (Control + right)",
			previousDecade: "Sonuncu onillik",
			nextDecade: "Növbəti onillik",
			previousCentury: "Sonuncu əsr",
			nextCentury: "Növbəti əsr"
		},
		timePickerLocale: { placeholder: "Vaxtı seç" }
	},
	Table: {
		filterTitle: "Filter menyu",
		filterConfirm: "Axtar",
		filterReset: "Sıfırla",
		emptyText: "Məlumat yoxdur",
		selectAll: "Cari səhifəni seç",
		selectInvert: "Invert current page"
	},
	Modal: {
		okText: "Bəli",
		cancelText: "Ləğv et",
		justOkText: "Bəli"
	},
	Popconfirm: {
		okText: "Bəli",
		cancelText: "Ləğv et"
	},
	Transfer: {
		titles: ["", ""],
		notFoundContent: "Tapılmadı",
		searchPlaceholder: "Burada axtar",
		itemUnit: "item",
		itemsUnit: "items"
	},
	Select: { notFoundContent: "Tapılmadı" },
	Upload: {
		uploading: "Yüklənir...",
		removeFile: "Faylı sil",
		uploadError: "Yükləmə xətası",
		previewFile: "Fayla önbaxış"
	},
	Form: { optional: "(məcburi)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var bg_BG = {
	locale: "bg",
	Pagination: {
		items_per_page: "/ страница",
		jump_to: "Към",
		jump_to_confirm: "потвърждавам",
		page: "",
		prev_page: "Предишна страница",
		next_page: "Следваща страница",
		prev_5: "Предишни 5 страници",
		next_5: "Следващи 5 страници",
		prev_3: "Предишни 3 страници",
		next_3: "Следващи 3 страници",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Избор на дата",
			rangePlaceholder: ["Начална", "Крайна"],
			locale: "bg_BG",
			today: "Днес",
			now: "Сега",
			backToToday: "Към днес",
			ok: "Добре",
			clear: "Изчистване",
			month: "Месец",
			year: "Година",
			timeSelect: "Избор на час",
			dateSelect: "Избор на дата",
			monthSelect: "Избор на месец",
			yearSelect: "Избор на година",
			decadeSelect: "Десетилетие",
			yearFormat: "YYYY",
			dateFormat: "D M YYYY",
			dayFormat: "D",
			dateTimeFormat: "D M YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Предишен месец (PageUp)",
			nextMonth: "Следващ месец (PageDown)",
			previousYear: "Последна година (Control + left)",
			nextYear: "Следваща година (Control + right)",
			previousDecade: "Предишно десетилетие",
			nextDecade: "Следващо десетилетие",
			previousCentury: "Последен век",
			nextCentury: "Следващ век"
		},
		timePickerLocale: { placeholder: "Избор на час" }
	},
	TimePicker: { placeholder: "Избор на час" },
	Calendar: {
		lang: {
			placeholder: "Избор на дата",
			rangePlaceholder: ["Начална", "Крайна"],
			locale: "bg_BG",
			today: "Днес",
			now: "Сега",
			backToToday: "Към днес",
			ok: "Добре",
			clear: "Изчистване",
			month: "Месец",
			year: "Година",
			timeSelect: "Избор на час",
			dateSelect: "Избор на дата",
			monthSelect: "Избор на месец",
			yearSelect: "Избор на година",
			decadeSelect: "Десетилетие",
			yearFormat: "YYYY",
			dateFormat: "D M YYYY",
			dayFormat: "D",
			dateTimeFormat: "D M YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Предишен месец (PageUp)",
			nextMonth: "Следващ месец (PageDown)",
			previousYear: "Последна година (Control + left)",
			nextYear: "Следваща година (Control + right)",
			previousDecade: "Предишно десетилетие",
			nextDecade: "Следващо десетилетие",
			previousCentury: "Последен век",
			nextCentury: "Следващ век"
		},
		timePickerLocale: { placeholder: "Избор на час" }
	},
	Table: {
		filterTitle: "Филтриране",
		filterConfirm: "Добре",
		filterReset: "Нулриане",
		selectAll: "Избор на текуща страница",
		selectInvert: "Обръщане"
	},
	Modal: {
		okText: "Добре",
		cancelText: "Отказ",
		justOkText: "Добре"
	},
	Popconfirm: {
		okText: "Добре",
		cancelText: "Отказ"
	},
	Transfer: {
		searchPlaceholder: "Търсене",
		itemUnit: "избор",
		itemsUnit: "избори"
	},
	Upload: {
		uploading: "Качване...",
		removeFile: "Премахване",
		uploadError: "Грешка при качването",
		previewFile: "Преглед",
		downloadFile: "Свали файл"
	},
	Empty: { description: "Няма данни" },
	Form: { optional: "(незадължително)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var bn_BD = {
	locale: "bn-bd",
	Pagination: {
		items_per_page: "/ পৃষ্ঠা",
		jump_to: "যাও",
		jump_to_confirm: "নিশ্চিত",
		page: "পৃষ্ঠা",
		prev_page: "আগের পৃষ্ঠা",
		next_page: "পরের পৃষ্ঠা",
		prev_5: "পূর্ববর্তী ৫ পৃষ্ঠা",
		next_5: "পরবর্তী ৫ পৃষ্ঠা",
		prev_3: "পূর্ববর্তী ৩ পৃষ্ঠা",
		next_3: "পরবর্তী ৩ পৃষ্ঠা",
		page_size: "পাতার আকার"
	},
	DatePicker: {
		lang: {
			placeholder: "তারিখ নির্বাচন",
			yearPlaceholder: "বছর নির্বাচন",
			quarterPlaceholder: "কোয়ার্টার নির্বাচন",
			monthPlaceholder: "মাস নির্বাচন",
			weekPlaceholder: "সপ্তাহ নির্বাচন",
			rangePlaceholder: ["শুরুর তারিখ", "শেষ তারিখ"],
			rangeYearPlaceholder: ["শুরুর বছর", "শেষ বছর"],
			rangeMonthPlaceholder: ["শুরুর মাস", "শেষ মাস"],
			rangeWeekPlaceholder: ["শুরুর সপ্তাহ", "শেষ সপ্তাহ"],
			locale: "bn_BD",
			today: "আজ",
			now: "এখন",
			backToToday: "আজকে ফিরে চলুন",
			ok: "ওকে",
			clear: "পরিস্কার",
			month: "মাস",
			year: "বছর",
			timeSelect: "সময় নির্বাচন",
			dateSelect: "তারিখ নির্বাচন",
			weekSelect: "সপ্তাহ পছন্দ করুন",
			monthSelect: "মাস পছন্দ করুন",
			yearSelect: "বছর পছন্দ করুন",
			decadeSelect: "একটি দশক পছন্দ করুন",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "গত মাস (PageUp)",
			nextMonth: "আগামী মাস (PageDown)",
			previousYear: "গত বছর (Control + left)",
			nextYear: "আগামী বছর (Control + right)",
			previousDecade: "গত দশক",
			nextDecade: "পরের দশক",
			previousCentury: "গত শতাব্দী",
			nextCentury: "পরের শতাব্দী"
		},
		timePickerLocale: {
			placeholder: "সময় নির্বাচন",
			rangePlaceholder: ["সময় শুরু", "শেষ সময়"]
		}
	},
	TimePicker: {
		placeholder: "সময় নির্বাচন",
		rangePlaceholder: ["সময় শুরু", "শেষ সময়"]
	},
	Calendar: {
		lang: {
			placeholder: "তারিখ নির্বাচন",
			yearPlaceholder: "বছর নির্বাচন",
			quarterPlaceholder: "কোয়ার্টার নির্বাচন",
			monthPlaceholder: "মাস নির্বাচন",
			weekPlaceholder: "সপ্তাহ নির্বাচন",
			rangePlaceholder: ["শুরুর তারিখ", "শেষ তারিখ"],
			rangeYearPlaceholder: ["শুরুর বছর", "শেষ বছর"],
			rangeMonthPlaceholder: ["শুরুর মাস", "শেষ মাস"],
			rangeWeekPlaceholder: ["শুরুর সপ্তাহ", "শেষ সপ্তাহ"],
			locale: "bn_BD",
			today: "আজ",
			now: "এখন",
			backToToday: "আজকে ফিরে চলুন",
			ok: "ওকে",
			clear: "পরিস্কার",
			month: "মাস",
			year: "বছর",
			timeSelect: "সময় নির্বাচন",
			dateSelect: "তারিখ নির্বাচন",
			weekSelect: "সপ্তাহ পছন্দ করুন",
			monthSelect: "মাস পছন্দ করুন",
			yearSelect: "বছর পছন্দ করুন",
			decadeSelect: "একটি দশক পছন্দ করুন",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "গত মাস (PageUp)",
			nextMonth: "আগামী মাস (PageDown)",
			previousYear: "গত বছর (Control + left)",
			nextYear: "আগামী বছর (Control + right)",
			previousDecade: "গত দশক",
			nextDecade: "পরের দশক",
			previousCentury: "গত শতাব্দী",
			nextCentury: "পরের শতাব্দী"
		},
		timePickerLocale: {
			placeholder: "সময় নির্বাচন",
			rangePlaceholder: ["সময় শুরু", "শেষ সময়"]
		}
	},
	global: { placeholder: "অনুগ্রহ করে নির্বাচন করুন" },
	Table: {
		filterTitle: "ফিল্টার মেনু",
		filterConfirm: "ঠিক",
		filterReset: "রিসেট",
		filterEmptyText: "ফিল্টার নেই",
		emptyText: "কোনও ডেটা নেই",
		selectAll: "বর্তমান পৃষ্ঠা নির্বাচন করুন",
		selectInvert: "বর্তমান পৃষ্ঠাটি উল্টে দিন",
		selectNone: "সমস্ত ডেটা সাফ করুন",
		selectionAll: "সমস্ত ডেটা নির্বাচন করুন",
		sortTitle: "সাজান",
		expand: "সারি প্রসারিত করুন",
		collapse: "সারি সঙ্কুচিত করুন",
		triggerDesc: "অবতরণকে সাজানোর জন্য ক্লিক করুন",
		triggerAsc: "আরোহী বাছাই করতে ক্লিক করুন",
		cancelSort: "বাছাই বাতিল করতে ক্লিক করুন"
	},
	Modal: {
		okText: "ঠিক",
		cancelText: "বাতিল",
		justOkText: "ঠিক"
	},
	Popconfirm: {
		okText: "ঠিক",
		cancelText: "বাতিল"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "এখানে অনুসন্ধান",
		itemUnit: "আইটেম",
		itemsUnit: "আইটেমসমূহ",
		remove: "অপসারণ",
		selectCurrent: "বর্তমান পৃষ্ঠা নির্বাচন করুন",
		removeCurrent: "বর্তমান পৃষ্ঠাটি সরান",
		selectAll: "সমস্ত ডেটা নির্বাচন করুন",
		removeAll: "সমস্ত ডেটা সরান",
		selectInvert: "বর্তমান পৃষ্ঠাটি উল্টে দিন"
	},
	Upload: {
		uploading: "আপলোড হচ্ছে ...",
		removeFile: "ফাইল সরান",
		uploadError: "আপলোডে সমস্যা",
		previewFile: "ফাইলের পূর্বরূপ",
		downloadFile: "ফাইল ডাউনলোড"
	},
	Empty: { description: "কোনও ডেটা নেই" },
	Form: { optional: "(বাছাইযোগ্য)" },
	Icon: { icon: "আইকন" },
	Text: {
		edit: "সম্পাদনা",
		copy: "অনুলিপি",
		copied: "অনুলিপি হয়েছে",
		expand: "বিস্তৃত করা"
	},
	PageHeader: { back: "পেছনে" },
	Image: { preview: "পূর্বরূপ" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var by_BY = {
	locale: "by",
	Pagination: {
		items_per_page: "/старонка",
		jump_to: "Перайсці",
		jump_to_confirm: "Пацвердзіць",
		page: "",
		prev_page: "Назад",
		next_page: "Наперад",
		prev_5: "Папярэднія 5",
		next_5: "Наступныя 5",
		prev_3: "Папярэднія 3",
		next_3: "Наступныя 3",
		page_size: "памер старонкі"
	},
	DatePicker: {
		lang: {
			placeholder: "Выберыце дату",
			yearPlaceholder: "Выберыце год",
			quarterPlaceholder: "Выберыце квартал",
			monthPlaceholder: "Выберыце месяц",
			weekPlaceholder: "Выберыце тыдзень",
			rangePlaceholder: ["Пачатковая дата", "Канчатковая дата"],
			rangeYearPlaceholder: ["Пачатковы год", "Год заканчэння"],
			rangeMonthPlaceholder: ["Пачатковы месяц", "Канчатковы месяц"],
			rangeWeekPlaceholder: ["Пачатковы тыдзень", "Канчатковы тыдзень"],
			locale: "by_BY",
			today: "Сёння",
			now: "Зараз",
			backToToday: "Дадзеная дата",
			ok: "Ok",
			clear: "Ачысціць",
			month: "Месяц",
			year: "Год",
			timeSelect: "Выбраць час",
			dateSelect: "Выбраць дату",
			weekSelect: "Выбраць тыдзень",
			monthSelect: "Выбраць месяц",
			yearSelect: "Выбраць год",
			decadeSelect: "Выбраць дзесяцігоддзе",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Папярэдні месяц (PageUp)",
			nextMonth: "Наступны месяц (PageDown)",
			previousYear: "Папярэдні год (Control + left)",
			nextYear: "Наступны год (Control + right)",
			previousDecade: "Папярэдняе дзесяцігоддзе",
			nextDecade: "Наступнае дзесяцігоддзе",
			previousCentury: "Папярэдні век",
			nextCentury: "Наступны век"
		},
		timePickerLocale: {
			placeholder: "Выберыце час",
			rangePlaceholder: ["Час пачатку", "Час заканчэння"]
		}
	},
	TimePicker: {
		placeholder: "Выберыце час",
		rangePlaceholder: ["Час пачатку", "Час заканчэння"]
	},
	Calendar: {
		lang: {
			placeholder: "Выберыце дату",
			yearPlaceholder: "Выберыце год",
			quarterPlaceholder: "Выберыце квартал",
			monthPlaceholder: "Выберыце месяц",
			weekPlaceholder: "Выберыце тыдзень",
			rangePlaceholder: ["Пачатковая дата", "Канчатковая дата"],
			rangeYearPlaceholder: ["Пачатковы год", "Год заканчэння"],
			rangeMonthPlaceholder: ["Пачатковы месяц", "Канчатковы месяц"],
			rangeWeekPlaceholder: ["Пачатковы тыдзень", "Канчатковы тыдзень"],
			locale: "by_BY",
			today: "Сёння",
			now: "Зараз",
			backToToday: "Дадзеная дата",
			ok: "Ok",
			clear: "Ачысціць",
			month: "Месяц",
			year: "Год",
			timeSelect: "Выбраць час",
			dateSelect: "Выбраць дату",
			weekSelect: "Выбраць тыдзень",
			monthSelect: "Выбраць месяц",
			yearSelect: "Выбраць год",
			decadeSelect: "Выбраць дзесяцігоддзе",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Папярэдні месяц (PageUp)",
			nextMonth: "Наступны месяц (PageDown)",
			previousYear: "Папярэдні год (Control + left)",
			nextYear: "Наступны год (Control + right)",
			previousDecade: "Папярэдняе дзесяцігоддзе",
			nextDecade: "Наступнае дзесяцігоддзе",
			previousCentury: "Папярэдні век",
			nextCentury: "Наступны век"
		},
		timePickerLocale: {
			placeholder: "Выберыце час",
			rangePlaceholder: ["Час пачатку", "Час заканчэння"]
		}
	},
	global: { placeholder: "Калі ласка выберыце" },
	Table: {
		filterTitle: "Фільтр",
		filterConfirm: "OK",
		filterReset: "Скінуць",
		filterEmptyText: "Без фільтраў",
		emptyText: "Няма дадзеных",
		selectAll: "Выбраць усе",
		selectInvert: "Інвертаваць выбар",
		selectionAll: "Выбраць усе дадзеныя",
		sortTitle: "Сартаванне",
		expand: "Разгарнуць радок",
		collapse: "Згарнуць радок",
		triggerDesc: "Націсніце для сартавання па змяншэнні",
		triggerAsc: "Націсніце для сартавання па ўзросту",
		cancelSort: "Націсніце, каб адмяніць сартаванне"
	},
	Modal: {
		okText: "OK",
		cancelText: "Адмена",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Адмена"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Пошук",
		itemUnit: "элем.",
		itemsUnit: "элем.",
		remove: "Выдаліць",
		selectAll: "Выбраць усе дадзеныя",
		selectCurrent: "Вылучыць дадзеную старонку",
		selectInvert: "Паказаць у зваротным парадку",
		removeAll: "Выдаліць усе дадзеныя",
		removeCurrent: "Выдаліць дадзеную старонку"
	},
	Upload: {
		uploading: "Загрузка...",
		removeFile: "Выдаліць файл",
		uploadError: "Адбылася памылка пры загрузцы",
		previewFile: "Прадпрагляд файла",
		downloadFile: "Загрузіць файл"
	},
	Form: { optional: "(неабавязковы)" },
	Empty: { description: "Няма дадзеных" },
	Icon: { icon: "Іконка" },
	Text: {
		edit: "Рэдагаваць",
		copy: "Капіяваць",
		copied: "Капіяванне завершана",
		expand: "Разгарнуць"
	},
	PageHeader: { back: "Назад" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ca_ES = {
	locale: "ca",
	Pagination: {
		items_per_page: "/ pàgina",
		jump_to: "Anar a",
		jump_to_confirm: "Confirma",
		page: "",
		prev_page: "Pàgina prèvia",
		next_page: "Pàgina següent",
		prev_5: "5 pàgines prèvies",
		next_5: "5 pàgines següents",
		prev_3: "3 pàgines prèvies",
		next_3: "3 pàgines següents",
		page_size: "mida de la pàgina"
	},
	DatePicker: {
		lang: {
			placeholder: "Seleccionar data",
			rangePlaceholder: ["Data inicial", "Data final"],
			locale: "ca_ES",
			today: "Avui",
			now: "Ara",
			backToToday: "Tornar a avui",
			ok: "Acceptar",
			clear: "Netejar",
			month: "Mes",
			year: "Any",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar data",
			monthSelect: "Escollir un mes",
			yearSelect: "Escollir un any",
			decadeSelect: "Escollir una dècada",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (PageUp)",
			nextMonth: "Mes següent (PageDown)",
			previousYear: "Any anterior (Control + left)",
			nextYear: "Mes següent (Control + right)",
			previousDecade: "Dècada anterior",
			nextDecade: "Dècada següent",
			previousCentury: "Segle anterior",
			nextCentury: "Segle següent"
		},
		timePickerLocale: { placeholder: "Seleccionar hora" }
	},
	TimePicker: { placeholder: "Seleccionar hora" },
	Calendar: {
		lang: {
			placeholder: "Seleccionar data",
			rangePlaceholder: ["Data inicial", "Data final"],
			locale: "ca_ES",
			today: "Avui",
			now: "Ara",
			backToToday: "Tornar a avui",
			ok: "Acceptar",
			clear: "Netejar",
			month: "Mes",
			year: "Any",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar data",
			monthSelect: "Escollir un mes",
			yearSelect: "Escollir un any",
			decadeSelect: "Escollir una dècada",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (PageUp)",
			nextMonth: "Mes següent (PageDown)",
			previousYear: "Any anterior (Control + left)",
			nextYear: "Mes següent (Control + right)",
			previousDecade: "Dècada anterior",
			nextDecade: "Dècada següent",
			previousCentury: "Segle anterior",
			nextCentury: "Segle següent"
		},
		timePickerLocale: { placeholder: "Seleccionar hora" }
	},
	global: { placeholder: "Seleccionar" },
	Table: {
		filterTitle: "Filtrar el menú",
		filterConfirm: "D’acord",
		filterReset: "Reiniciar",
		filterEmptyText: "Sense filtres",
		selectAll: "Seleccionar la pàgina actual",
		selectInvert: "Invertir la selecció",
		selectionAll: "Seleccionar-ho tot",
		sortTitle: "Ordenar",
		expand: "Ampliar la fila",
		collapse: "Plegar la fila",
		triggerDesc: "Ordre descendent",
		triggerAsc: "Ordre ascendent",
		cancelSort: "Desactivar l’ordre"
	},
	Modal: {
		okText: "D’acord",
		cancelText: "Cancel·lar",
		justOkText: "D’acord"
	},
	Popconfirm: {
		okText: "D’acord",
		cancelText: "Cancel·lar"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Cercar",
		itemUnit: "ítem",
		itemsUnit: "ítems",
		remove: "Eliminar",
		selectCurrent: "Seleccionar la pàgina actual",
		removeCurrent: "Eliminar la selecció",
		selectAll: "Seleccionar-ho tot",
		removeAll: "Eliminar-ho tot",
		selectInvert: "Invertir la selecció"
	},
	Upload: {
		uploading: "Carregant…",
		removeFile: "Eliminar el fitxer",
		uploadError: "Error de càrrega",
		previewFile: "Vista prèvia del fitxer",
		downloadFile: "Baixar el fitxer"
	},
	Empty: { description: "Sense dades" },
	Form: { optional: "(opcional)" },
	Icon: { icon: "icona" },
	Text: {
		edit: "Editar",
		copy: "Copiar",
		copied: "Copiat",
		expand: "Ampliar"
	},
	PageHeader: { back: "Enrere" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var cs_CZ = {
	locale: "cs",
	Pagination: {
		items_per_page: "/ strana",
		jump_to: "Přejít",
		jump_to_confirm: "potvrdit",
		page: "strana",
		prev_page: "Předchozí strana",
		next_page: "Následující strana",
		prev_5: "Předchozích 5 stran",
		next_5: "Následujících 5 stran",
		prev_3: "Předchozí 3 strany",
		next_3: "Následující 3 strany",
		page_size: "velikost stránky"
	},
	DatePicker: {
		lang: {
			placeholder: "Vybrat datum",
			yearPlaceholder: "Vyberte rok",
			quarterPlaceholder: "Vyberte čtvrtletí",
			monthPlaceholder: "Vyberte měsíc",
			weekPlaceholder: "Vyberte týden",
			rangePlaceholder: ["Od", "Do"],
			rangeYearPlaceholder: ["Počáteční rok", "Koncový rok"],
			rangeQuarterPlaceholder: ["Počáteční čtvrtletí", "Koncové čtvrtletí"],
			rangeMonthPlaceholder: ["Počáteční měsíc", "Koncový měsíc"],
			rangeWeekPlaceholder: ["Počáteční týden", "Koncový týden"],
			locale: "cs_CZ",
			today: "Dnes",
			now: "Nyní",
			backToToday: "Zpět na dnešek",
			ok: "Ok",
			clear: "Vymazat",
			month: "Měsíc",
			year: "Rok",
			timeSelect: "Vybrat čas",
			dateSelect: "Vybrat datum",
			weekSelect: "Vyberte týden",
			monthSelect: "Vyberte měsíc",
			yearSelect: "Vyberte rok",
			decadeSelect: "Vyberte dekádu",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Předchozí měsíc (PageUp)",
			nextMonth: "Následující (PageDown)",
			previousYear: "Předchozí rok (Control + left)",
			nextYear: "Následující rok (Control + right)",
			previousDecade: "Předchozí dekáda",
			nextDecade: "Následující dekáda",
			previousCentury: "Předchozí století",
			nextCentury: "Následující století"
		},
		timePickerLocale: {
			placeholder: "Vybrat čas",
			rangePlaceholder: ["Počáteční čas", "Koncový čas"]
		}
	},
	TimePicker: {
		placeholder: "Vybrat čas",
		rangePlaceholder: ["Počáteční čas", "Koncový čas"]
	},
	Calendar: {
		lang: {
			placeholder: "Vybrat datum",
			yearPlaceholder: "Vyberte rok",
			quarterPlaceholder: "Vyberte čtvrtletí",
			monthPlaceholder: "Vyberte měsíc",
			weekPlaceholder: "Vyberte týden",
			rangePlaceholder: ["Od", "Do"],
			rangeYearPlaceholder: ["Počáteční rok", "Koncový rok"],
			rangeMonthPlaceholder: ["Počáteční měsíc", "Koncový měsíc"],
			rangeWeekPlaceholder: ["Počáteční týden", "Koncový týden"],
			locale: "cs_CZ",
			today: "Dnes",
			now: "Nyní",
			backToToday: "Zpět na dnešek",
			ok: "Ok",
			clear: "Vymazat",
			month: "Měsíc",
			year: "Rok",
			timeSelect: "Vybrat čas",
			dateSelect: "Vybrat datum",
			weekSelect: "Vyberte týden",
			monthSelect: "Vyberte měsíc",
			yearSelect: "Vyberte rok",
			decadeSelect: "Vyberte dekádu",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Předchozí měsíc (PageUp)",
			nextMonth: "Následující (PageDown)",
			previousYear: "Předchozí rok (Control + left)",
			nextYear: "Následující rok (Control + right)",
			previousDecade: "Předchozí dekáda",
			nextDecade: "Následující dekáda",
			previousCentury: "Předchozí století",
			nextCentury: "Následující století"
		},
		timePickerLocale: {
			placeholder: "Vybrat čas",
			rangePlaceholder: ["Počáteční čas", "Koncový čas"]
		}
	},
	global: { placeholder: "Prosím vyber" },
	Table: {
		filterTitle: "Filtr",
		filterConfirm: "Potvrdit",
		filterReset: "Obnovit",
		filterEmptyText: "Žádné filtry",
		emptyText: "Žádná data",
		selectAll: "Vybrat všechny řádky na současné stránce",
		selectInvert: "Invertovat výběr na současné stránce",
		selectionAll: "Vybrat všechny řádky",
		sortTitle: "Řadit",
		expand: "Rozbalit řádek",
		collapse: "Zabalit řádek",
		triggerDesc: "Klikni pro sestupné řazení",
		triggerAsc: "Klikni pro vzestupné řazení",
		cancelSort: "Klikni pro zrušení řazení",
		filterCheckall: "Vybrat všechny položky",
		filterSearchPlaceholder: "Hledat ve filtrech",
		selectNone: "Zrušit výběr všech dat"
	},
	Modal: {
		okText: "OK",
		cancelText: "Storno",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Storno"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Vyhledávání",
		itemUnit: "položka",
		itemsUnit: "položek",
		remove: "Odebrat",
		selectCurrent: "Vybrat současnou stránku",
		removeCurrent: "Odebrat současnou stránku",
		selectAll: "Vybrat všechna data",
		removeAll: "Odebrat všechna data",
		selectInvert: "Invertovat současnou stránku"
	},
	Upload: {
		uploading: "Nahrávání...",
		removeFile: "Odstranit soubor",
		uploadError: "Chyba při nahrávání",
		previewFile: "Zobrazit soubor",
		downloadFile: "Stáhnout soubor"
	},
	Empty: { description: "Žádná data" },
	Form: { optional: "(nepovinné)" },
	Icon: { icon: "ikona" },
	Text: {
		edit: "Upravit",
		copy: "Kopírovat",
		copied: "Zkopírováno",
		expand: "Rozbalit"
	},
	PageHeader: { back: "Zpět" },
	Image: { preview: "Náhled" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var da_DK = {
	locale: "da",
	DatePicker: {
		lang: {
			placeholder: "Vælg dato",
			rangePlaceholder: ["Startdato", "Slutdato"],
			locale: "da_DK",
			today: "I dag",
			now: "Nu",
			backToToday: "Gå til i dag",
			ok: "Ok",
			clear: "Ryd",
			month: "Måned",
			year: "År",
			timeSelect: "Vælg tidspunkt",
			dateSelect: "Vælg dato",
			monthSelect: "Vælg måned",
			yearSelect: "Vælg år",
			decadeSelect: "Vælg årti",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Forrige måned (Page Up)",
			nextMonth: "Næste måned (Page Down)",
			previousYear: "Forrige år (Ctrl-venstre pil)",
			nextYear: "Næste år (Ctrl-højre pil)",
			previousDecade: "Forrige årti",
			nextDecade: "Næste årti",
			previousCentury: "Forrige århundrede",
			nextCentury: "Næste århundrede"
		},
		timePickerLocale: {
			placeholder: "Vælg tid",
			rangePlaceholder: ["Starttidspunkt", "Sluttidspunkt"]
		}
	},
	TimePicker: {
		placeholder: "Vælg tid",
		rangePlaceholder: ["Starttidspunkt", "Sluttidspunkt"]
	},
	Calendar: {
		lang: {
			placeholder: "Vælg dato",
			rangePlaceholder: ["Startdato", "Slutdato"],
			locale: "da_DK",
			today: "I dag",
			now: "Nu",
			backToToday: "Gå til i dag",
			ok: "Ok",
			clear: "Ryd",
			month: "Måned",
			year: "År",
			timeSelect: "Vælg tidspunkt",
			dateSelect: "Vælg dato",
			monthSelect: "Vælg måned",
			yearSelect: "Vælg år",
			decadeSelect: "Vælg årti",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Forrige måned (Page Up)",
			nextMonth: "Næste måned (Page Down)",
			previousYear: "Forrige år (Ctrl-venstre pil)",
			nextYear: "Næste år (Ctrl-højre pil)",
			previousDecade: "Forrige årti",
			nextDecade: "Næste årti",
			previousCentury: "Forrige århundrede",
			nextCentury: "Næste århundrede"
		},
		timePickerLocale: {
			placeholder: "Vælg tid",
			rangePlaceholder: ["Starttidspunkt", "Sluttidspunkt"]
		}
	},
	Pagination: {
		items_per_page: "/ side",
		jump_to: "Gå til",
		jump_to_confirm: "bekræft",
		page: "Side",
		prev_page: "Forrige Side",
		next_page: "Næste Side",
		prev_5: "Forrige 5 Sider",
		next_5: "Næste 5 Sider",
		prev_3: "Forrige 3 Sider",
		next_3: "Næste 3 Sider",
		page_size: "sidestørrelse"
	},
	Table: {
		filterTitle: "Filtermenu",
		filterConfirm: "OK",
		filterReset: "Nulstil",
		selectAll: "Vælg alle",
		selectInvert: "Invertér valg",
		filterEmptyText: "Ingen filtre",
		emptyText: "Ingen data",
		selectNone: "Ryd alt data",
		selectionAll: "Vælg alt data",
		sortTitle: "Sortér",
		expand: "Udvid række",
		collapse: "Flet række",
		triggerDesc: "Klik for at sortere faldende",
		triggerAsc: "Klik for at sortere stigende",
		cancelSort: "Klik for at annullere sortering"
	},
	Modal: {
		okText: "OK",
		cancelText: "Afbryd",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Afbryd"
	},
	Transfer: {
		searchPlaceholder: "Søg her",
		itemUnit: "element",
		itemsUnit: "elementer"
	},
	Upload: {
		uploading: "Uploader...",
		removeFile: "Fjern fil",
		uploadError: "Fejl ved upload",
		previewFile: "Forhåndsvisning",
		downloadFile: "Download fil"
	},
	Empty: { description: "Ingen data" },
	Form: { optional: "(valgfrit)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var de_DE = {
	locale: "de",
	Pagination: {
		items_per_page: "/ Seite",
		jump_to: "Gehe zu",
		jump_to_confirm: "bestätigen",
		page: "Seite",
		prev_page: "Vorherige Seite",
		next_page: "Nächste Seite",
		prev_5: "5 Seiten zurück",
		next_5: "5 Seiten vor",
		prev_3: "3 Seiten zurück",
		next_3: "3 Seiten vor",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Datum auswählen",
			yearPlaceholder: "Jahr auswählen",
			quarterPlaceholder: "Quartal auswählen",
			monthPlaceholder: "Monat auswählen",
			weekPlaceholder: "Woche auswählen",
			rangePlaceholder: ["Startdatum", "Enddatum"],
			rangeYearPlaceholder: ["Startjahr", "Endjahr"],
			rangeQuarterPlaceholder: ["Startquartal", "Endquartal"],
			rangeMonthPlaceholder: ["Startmonat", "Endmonat"],
			rangeWeekPlaceholder: ["Startwoche", "Endwoche"],
			locale: "de_DE",
			today: "Heute",
			now: "Jetzt",
			backToToday: "Zurück zu Heute",
			ok: "OK",
			clear: "Zurücksetzen",
			month: "Monat",
			year: "Jahr",
			timeSelect: "Zeit wählen",
			dateSelect: "Datum wählen",
			weekSelect: "Woche wählen",
			monthSelect: "Wähle einen Monat",
			yearSelect: "Wähle ein Jahr",
			decadeSelect: "Wähle ein Jahrzehnt",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorheriger Monat (PageUp)",
			nextMonth: "Nächster Monat (PageDown)",
			previousYear: "Vorheriges Jahr (Strg + links)",
			nextYear: "Nächstes Jahr (Strg + rechts)",
			previousDecade: "Vorheriges Jahrzehnt",
			nextDecade: "Nächstes Jahrzehnt",
			previousCentury: "Vorheriges Jahrhundert",
			nextCentury: "Nächstes Jahrhundert"
		},
		timePickerLocale: {
			placeholder: "Zeit auswählen",
			rangePlaceholder: ["Startzeit", "Endzeit"]
		}
	},
	TimePicker: {
		placeholder: "Zeit auswählen",
		rangePlaceholder: ["Startzeit", "Endzeit"]
	},
	Calendar: {
		lang: {
			placeholder: "Datum auswählen",
			yearPlaceholder: "Jahr auswählen",
			quarterPlaceholder: "Quartal auswählen",
			monthPlaceholder: "Monat auswählen",
			weekPlaceholder: "Woche auswählen",
			rangePlaceholder: ["Startdatum", "Enddatum"],
			rangeYearPlaceholder: ["Startjahr", "Endjahr"],
			rangeMonthPlaceholder: ["Startmonat", "Endmonat"],
			rangeWeekPlaceholder: ["Startwoche", "Endwoche"],
			locale: "de_DE",
			today: "Heute",
			now: "Jetzt",
			backToToday: "Zurück zu Heute",
			ok: "OK",
			clear: "Zurücksetzen",
			month: "Monat",
			year: "Jahr",
			timeSelect: "Zeit wählen",
			dateSelect: "Datum wählen",
			weekSelect: "Woche wählen",
			monthSelect: "Wähle einen Monat",
			yearSelect: "Wähle ein Jahr",
			decadeSelect: "Wähle ein Jahrzehnt",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorheriger Monat (PageUp)",
			nextMonth: "Nächster Monat (PageDown)",
			previousYear: "Vorheriges Jahr (Ctrl + left)",
			nextYear: "Nächstes Jahr (Ctrl + right)",
			previousDecade: "Vorheriges Jahrzehnt",
			nextDecade: "Nächstes Jahrzehnt",
			previousCentury: "Vorheriges Jahrhundert",
			nextCentury: "Nächstes Jahrhundert"
		},
		timePickerLocale: {
			placeholder: "Zeit auswählen",
			rangePlaceholder: ["Startzeit", "Endzeit"]
		}
	},
	global: { placeholder: "Bitte auswählen" },
	Table: {
		filterTitle: "Filter-Menü",
		filterConfirm: "OK",
		filterReset: "Zurücksetzen",
		filterEmptyText: "Keine Filter",
		emptyText: "Keine Daten",
		selectAll: "Selektiere Alle",
		selectInvert: "Selektion Invertieren",
		selectionAll: "Wählen Sie alle Daten aus",
		sortTitle: "Sortieren",
		expand: "Zeile erweitern",
		collapse: "Zeile reduzieren",
		triggerDesc: "Klicken zur absteigenden  Sortierung",
		triggerAsc: "Klicken zur aufsteigenden Sortierung",
		cancelSort: "Klicken zum Abbrechen der Sortierung",
		filterCheckall: "Alle Elemente anwählen",
		filterSearchPlaceholder: "In Filterung suchen",
		selectNone: "Alles löschen"
	},
	Modal: {
		okText: "OK",
		cancelText: "Abbrechen",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Abbrechen"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Suchen",
		itemUnit: "Eintrag",
		itemsUnit: "Einträge",
		remove: "Entfernen",
		selectCurrent: "Alle auf aktueller Seite auswählen",
		removeCurrent: "Auswahl auf aktueller Seite aufheben",
		selectAll: "Alle auswählen",
		removeAll: "Auswahl aufheben",
		selectInvert: "Auswahl umkehren"
	},
	Upload: {
		uploading: "Hochladen...",
		removeFile: "Datei entfernen",
		uploadError: "Fehler beim Hochladen",
		previewFile: "Dateivorschau",
		downloadFile: "Download-Datei"
	},
	Empty: { description: "Keine Daten" },
	Form: { optional: "(optional)" },
	Icon: { icon: "Symbol" },
	Text: {
		edit: "Bearbeiten",
		copy: "Kopieren",
		copied: "Kopiert",
		expand: "Erweitern"
	},
	PageHeader: { back: "Zurück" },
	Image: { preview: "Vorschau" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var el_GR = {
	locale: "el",
	Pagination: {
		items_per_page: "/ σελίδα",
		jump_to: "Μετάβαση",
		jump_to_confirm: "επιβεβαιώνω",
		page: "",
		prev_page: "Προηγούμενη Σελίδα",
		next_page: "Επόμενη Σελίδα",
		prev_5: "Προηγούμενες 5 Σελίδες",
		next_5: "Επόμενες 5 σελίδες",
		prev_3: "Προηγούμενες 3 Σελίδες",
		next_3: "Επόμενες 3 Σελίδες",
		page_size: "Μέγεθος σελίδας"
	},
	DatePicker: {
		lang: {
			placeholder: "Επιλέξτε ημερομηνία",
			yearPlaceholder: "Επιλέξτε χρονιά",
			quarterPlaceholder: "Επιλέξτε τρίμηνο",
			monthPlaceholder: "Επιλέξτε μήνα",
			weekPlaceholder: "Επιλέξτε εβδομάδα",
			rangePlaceholder: ["Αρχική ημερομηνία", "Τελική ημερομηνία"],
			rangeYearPlaceholder: ["Αρχική χρονιά", "Τελική χρονιά"],
			rangeMonthPlaceholder: ["Αρχικός μήνας", "Τελικός μήνας"],
			rangeWeekPlaceholder: ["Αρχική εβδομάδα", "Τελική εβδομάδα"],
			locale: "el_GR",
			today: "Σήμερα",
			now: "Τώρα",
			backToToday: "Πίσω στη σημερινή μέρα",
			ok: "Ok",
			clear: "Καθαρισμός",
			month: "Μήνας",
			year: "Έτος",
			timeSelect: "Επιλογή ώρας",
			dateSelect: "Επιλογή ημερομηνίας",
			weekSelect: "Επιλογή εβδομάδας",
			monthSelect: "Επιλογή μήνα",
			yearSelect: "Επιλογή έτους",
			decadeSelect: "Επιλογή δεκαετίας",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Προηγούμενος μήνας (PageUp)",
			nextMonth: "Επόμενος μήνας (PageDown)",
			previousYear: "Προηγούμενο έτος (Control + αριστερά)",
			nextYear: "Επόμενο έτος (Control + δεξιά)",
			previousDecade: "Προηγούμενη δεκαετία",
			nextDecade: "Επόμενη δεκαετία",
			previousCentury: "Προηγούμενος αιώνας",
			nextCentury: "Επόμενος αιώνας"
		},
		timePickerLocale: {
			placeholder: "Επιλέξτε ώρα",
			rangePlaceholder: ["Ώρα έναρξης", "Ώρα λήξης"]
		}
	},
	TimePicker: {
		placeholder: "Επιλέξτε ώρα",
		rangePlaceholder: ["Ώρα έναρξης", "Ώρα λήξης"]
	},
	Calendar: {
		lang: {
			placeholder: "Επιλέξτε ημερομηνία",
			yearPlaceholder: "Επιλέξτε χρονιά",
			quarterPlaceholder: "Επιλέξτε τρίμηνο",
			monthPlaceholder: "Επιλέξτε μήνα",
			weekPlaceholder: "Επιλέξτε εβδομάδα",
			rangePlaceholder: ["Αρχική ημερομηνία", "Τελική ημερομηνία"],
			rangeYearPlaceholder: ["Αρχική χρονιά", "Τελική χρονιά"],
			rangeMonthPlaceholder: ["Αρχικός μήνας", "Τελικός μήνας"],
			rangeWeekPlaceholder: ["Αρχική εβδομάδα", "Τελική εβδομάδα"],
			locale: "el_GR",
			today: "Σήμερα",
			now: "Τώρα",
			backToToday: "Πίσω στη σημερινή μέρα",
			ok: "Ok",
			clear: "Καθαρισμός",
			month: "Μήνας",
			year: "Έτος",
			timeSelect: "Επιλογή ώρας",
			dateSelect: "Επιλογή ημερομηνίας",
			weekSelect: "Επιλογή εβδομάδας",
			monthSelect: "Επιλογή μήνα",
			yearSelect: "Επιλογή έτους",
			decadeSelect: "Επιλογή δεκαετίας",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Προηγούμενος μήνας (PageUp)",
			nextMonth: "Επόμενος μήνας (PageDown)",
			previousYear: "Προηγούμενο έτος (Control + αριστερά)",
			nextYear: "Επόμενο έτος (Control + δεξιά)",
			previousDecade: "Προηγούμενη δεκαετία",
			nextDecade: "Επόμενη δεκαετία",
			previousCentury: "Προηγούμενος αιώνας",
			nextCentury: "Επόμενος αιώνας"
		},
		timePickerLocale: {
			placeholder: "Επιλέξτε ώρα",
			rangePlaceholder: ["Ώρα έναρξης", "Ώρα λήξης"]
		}
	},
	Table: {
		filterTitle: "Μενού φίλτρων",
		filterConfirm: "ΟΚ",
		filterReset: "Επαναφορά",
		selectAll: "Επιλογή τρέχουσας σελίδας",
		selectInvert: "Αντιστροφή τρέχουσας σελίδας"
	},
	Modal: {
		okText: "ΟΚ",
		cancelText: "Άκυρο",
		justOkText: "ΟΚ"
	},
	Popconfirm: {
		okText: "ΟΚ",
		cancelText: "Άκυρο"
	},
	Transfer: {
		searchPlaceholder: "Αναζήτηση",
		itemUnit: "αντικείμενο",
		itemsUnit: "αντικείμενα"
	},
	Upload: {
		uploading: "Μεταφόρτωση...",
		removeFile: "Αφαίρεση αρχείου",
		uploadError: "Σφάλμα μεταφόρτωσης",
		previewFile: "Προεπισκόπηση αρχείου",
		downloadFile: "Λήψη αρχείου"
	},
	Empty: { description: "Δεν υπάρχουν δεδομένα" },
	Form: { optional: "(ανάγκη)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var en_AU = {
	locale: "en-au",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_AU",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	TimePicker: {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"]
	},
	Calendar: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_AU",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	global: { placeholder: "Please select" },
	Table: {
		filterTitle: "Filter menu",
		filterConfirm: "OK",
		filterReset: "Reset",
		filterEmptyText: "No filters",
		emptyText: "No data",
		selectAll: "Select current page",
		selectInvert: "Invert current page",
		selectionAll: "Select all data",
		sortTitle: "Sort",
		expand: "Expand row",
		collapse: "Collapse row",
		triggerDesc: "Click to sort descending",
		triggerAsc: "Click to sort ascending",
		cancelSort: "Click to cancel sorting",
		filterCheckall: "Select all items",
		filterSearchPlaceholder: "Search in filters",
		selectNone: "Clear all data"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancel",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancel"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Search here",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remove",
		selectCurrent: "Select current page",
		removeCurrent: "Remove current page",
		selectAll: "Select all data",
		removeAll: "Remove all data",
		selectInvert: "Invert current page"
	},
	Upload: {
		uploading: "Uploading...",
		removeFile: "Remove file",
		uploadError: "Upload error",
		previewFile: "Preview file",
		downloadFile: "Download file"
	},
	Empty: { description: "No Data" },
	Form: { optional: "(optional)" },
	Icon: { icon: "icon" },
	Text: {
		edit: "Edit",
		copy: "Copy",
		copied: "Copied",
		expand: "Expand"
	},
	PageHeader: { back: "Back" },
	Image: { preview: "Preview" },
	CronExpression: {
		cronError: "Invalid cron expression",
		second: "second",
		minute: "minute",
		hour: "hour",
		day: "day",
		month: "month",
		week: "week"
	},
	QRCode: {
		expired: "QR code expired",
		refresh: "Refresh",
		scanned: "Scanned"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var en_GB = {
	locale: "en-gb",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_GB",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "Select time",
			dateSelect: "Select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	TimePicker: {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"]
	},
	Calendar: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_GB",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "Select time",
			dateSelect: "Select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	global: { placeholder: "Please select" },
	Table: {
		filterTitle: "Filter menu",
		filterConfirm: "OK",
		filterReset: "Reset",
		filterEmptyText: "No filters",
		emptyText: "No data",
		selectAll: "Select current page",
		selectInvert: "Invert current page",
		selectionAll: "Select all data",
		sortTitle: "Sort",
		expand: "Expand row",
		collapse: "Collapse row",
		triggerDesc: "Click to sort descending",
		triggerAsc: "Click to sort ascending",
		cancelSort: "Click to cancel sorting",
		selectNone: "Clear all data"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancel",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancel"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Search here",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remove",
		selectCurrent: "Select current page",
		removeCurrent: "Remove current page",
		selectAll: "Select all data",
		removeAll: "Remove all data",
		selectInvert: "Invert current page"
	},
	Upload: {
		uploading: "Uploading...",
		removeFile: "Remove file",
		uploadError: "Upload error",
		previewFile: "Preview file",
		downloadFile: "Download file"
	},
	Empty: { description: "No data" },
	Form: { optional: "(optional)" },
	Icon: { icon: "icon" },
	Text: {
		edit: "Edit",
		copy: "Copy",
		copied: "Copied",
		expand: "Expand"
	},
	PageHeader: { back: "Back" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var es_ES = {
	locale: "es",
	Pagination: {
		items_per_page: "/ página",
		jump_to: "Ir a",
		jump_to_confirm: "confirmar",
		page: "Página",
		prev_page: "Página anterior",
		next_page: "Página siguiente",
		prev_5: "5 páginas previas",
		next_5: "5 páginas siguientes",
		prev_3: "3 páginas previas",
		next_3: "3 páginas siguientes",
		page_size: "tamaño de página"
	},
	DatePicker: {
		lang: {
			placeholder: "Seleccionar fecha",
			yearPlaceholder: "Seleccionar año",
			quarterPlaceholder: "Seleccionar trimestre",
			monthPlaceholder: "Seleccionar mes",
			weekPlaceholder: "Seleccionar semana",
			rangePlaceholder: ["Fecha inicial", "Fecha final"],
			rangeYearPlaceholder: ["Año inicial", "Año final"],
			rangeQuarterPlaceholder: ["Trimestre inicial", "Trimestre final"],
			rangeMonthPlaceholder: ["Mes inicial", "Mes final"],
			rangeWeekPlaceholder: ["Semana inicial", "Semana final"],
			locale: "es_ES",
			today: "Hoy",
			now: "Ahora",
			backToToday: "Volver a hoy",
			ok: "Aceptar",
			clear: "Limpiar",
			month: "Mes",
			year: "Año",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar fecha",
			weekSelect: "Elegir una semana",
			monthSelect: "Elegir un mes",
			yearSelect: "Elegir un año",
			decadeSelect: "Elegir una década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (PageUp)",
			nextMonth: "Mes siguiente (PageDown)",
			previousYear: "Año anterior (Control + left)",
			nextYear: "Año siguiente (Control + right)",
			previousDecade: "Década anterior",
			nextDecade: "Década siguiente",
			previousCentury: "Siglo anterior",
			nextCentury: "Siglo siguiente"
		},
		timePickerLocale: {
			placeholder: "Seleccionar hora",
			rangePlaceholder: ["Hora inicial", "Hora final"]
		}
	},
	TimePicker: {
		placeholder: "Seleccionar hora",
		rangePlaceholder: ["Hora inicial", "Hora final"]
	},
	Calendar: {
		lang: {
			placeholder: "Seleccionar fecha",
			yearPlaceholder: "Seleccionar año",
			quarterPlaceholder: "Seleccionar trimestre",
			monthPlaceholder: "Seleccionar mes",
			weekPlaceholder: "Seleccionar semana",
			rangePlaceholder: ["Fecha inicial", "Fecha final"],
			rangeYearPlaceholder: ["Año inicial", "Año final"],
			rangeMonthPlaceholder: ["Mes inicial", "Mes final"],
			rangeWeekPlaceholder: ["Semana inicial", "Semana final"],
			locale: "es_ES",
			today: "Hoy",
			now: "Ahora",
			backToToday: "Volver a hoy",
			ok: "Aceptar",
			clear: "Limpiar",
			month: "Mes",
			year: "Año",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar fecha",
			weekSelect: "Elegir una semana",
			monthSelect: "Elegir un mes",
			yearSelect: "Elegir un año",
			decadeSelect: "Elegir una década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (AvPág)",
			nextMonth: "Mes siguiente (RePág)",
			previousYear: "Año anterior (Control + izquierda)",
			nextYear: "Año siguiente (Control + derecha)",
			previousDecade: "Década anterior",
			nextDecade: "Década siguiente",
			previousCentury: "Siglo anterior",
			nextCentury: "Siglo siguiente"
		},
		timePickerLocale: {
			placeholder: "Seleccionar hora",
			rangePlaceholder: ["Hora inicial", "Hora final"]
		}
	},
	global: { placeholder: "Seleccione" },
	Table: {
		filterTitle: "Filtrar menú",
		filterConfirm: "Aceptar",
		filterReset: "Reiniciar",
		filterEmptyText: "Sin filtros",
		emptyText: "Sin datos",
		selectAll: "Seleccionar todo",
		selectInvert: "Invertir selección",
		selectionAll: "Seleccionar todos los datos",
		sortTitle: "Ordenar",
		expand: "Expandir fila",
		collapse: "Colapsar fila",
		triggerDesc: "Click para ordenar descendentemente",
		triggerAsc: "Click para ordenar ascendentemenre",
		cancelSort: "Click para cancelar ordenación",
		filterCheckall: "Seleccionar todos los filtros",
		filterSearchPlaceholder: "Buscar en filtros",
		selectNone: "Vaciar todo"
	},
	Modal: {
		okText: "Aceptar",
		cancelText: "Cancelar",
		justOkText: "Aceptar"
	},
	Popconfirm: {
		okText: "Aceptar",
		cancelText: "Cancelar"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Buscar aquí",
		itemUnit: "elemento",
		itemsUnit: "elementos",
		remove: "Eliminar",
		selectCurrent: "Seleccionar página actual",
		removeCurrent: "Eliminar página actual",
		selectAll: "Seleccionar todos los datos",
		removeAll: "Eliminar todos los datos",
		selectInvert: "Invertir página actual"
	},
	Upload: {
		uploading: "Subiendo...",
		removeFile: "Eliminar archivo",
		uploadError: "Error al subir el archivo",
		previewFile: "Vista previa",
		downloadFile: "Descargar archivo"
	},
	Empty: { description: "No hay datos" },
	Form: { optional: "(opcional)" },
	Icon: { icon: "icono" },
	Text: {
		edit: "Editar",
		copy: "Copiar",
		copied: "Copiado",
		expand: "Expandir"
	},
	PageHeader: { back: "Volver" },
	Image: { preview: "Previsualización" },
	CronExpression: {
		cronError: "Expresión cron inválida",
		second: "segundo",
		minute: "minuto",
		hour: "hora",
		day: "día",
		month: "mes",
		week: "semana"
	},
	QRCode: {
		expired: "Código QR expirado",
		refresh: "Actualizar",
		scanned: "Escaneado"
	},
	CheckList: {
		checkList: "Lista de tareas",
		checkListFinish: "¡Has completado la lista correctamente!",
		checkListClose: "Cerrar",
		checkListFooter: "La lista ya no es necesaria",
		checkListCheck: "¿Quiere cerrar la lista?",
		ok: "OK",
		cancel: "Cancelar",
		checkListCheckOther: "No mostrar de nuevo"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var et_EE = {
	locale: "et",
	Pagination: {
		items_per_page: "/ leheküljel",
		jump_to: "Hüppa",
		jump_to_confirm: "Kinnitage",
		page: "",
		prev_page: "Eelmine leht",
		next_page: "Järgmine leht",
		prev_5: "Eelmised 5 lehekülge",
		next_5: "Järgmised 5 lehekülge",
		prev_3: "Eelmised 3 lehekülge",
		next_3: "Järgmised 3 lehekülge",
		page_size: "lehe suurus"
	},
	DatePicker: {
		lang: {
			placeholder: "Vali kuupäev",
			rangePlaceholder: ["Algus kuupäev", "Lõpu kuupäev"],
			locale: "et_EE",
			today: "Täna",
			now: "Praegu",
			backToToday: "Tagasi tänase juurde",
			ok: "Ok",
			clear: "Tühista",
			month: "Kuu",
			year: "Aasta",
			timeSelect: "Vali aeg",
			dateSelect: "Vali kuupäev",
			monthSelect: "Vali kuu",
			yearSelect: "Vali aasta",
			decadeSelect: "Vali dekaad",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Eelmine kuu (PageUp)",
			nextMonth: "Järgmine kuu (PageDown)",
			previousYear: "Eelmine aasta (Control + left)",
			nextYear: "Järgmine aasta (Control + right)",
			previousDecade: "Eelmine dekaad",
			nextDecade: "Järgmine dekaad",
			previousCentury: "Eelmine sajand",
			nextCentury: "Järgmine sajand"
		},
		timePickerLocale: { placeholder: "Vali aeg" }
	},
	TimePicker: { placeholder: "Vali aeg" },
	Calendar: {
		lang: {
			placeholder: "Vali kuupäev",
			rangePlaceholder: ["Algus kuupäev", "Lõpu kuupäev"],
			locale: "et_EE",
			today: "Täna",
			now: "Praegu",
			backToToday: "Tagasi tänase juurde",
			ok: "Ok",
			clear: "Tühista",
			month: "Kuu",
			year: "Aasta",
			timeSelect: "Vali aeg",
			dateSelect: "Vali kuupäev",
			monthSelect: "Vali kuu",
			yearSelect: "Vali aasta",
			decadeSelect: "Vali dekaad",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Eelmine kuu (PageUp)",
			nextMonth: "Järgmine kuu (PageDown)",
			previousYear: "Eelmine aasta (Control + left)",
			nextYear: "Järgmine aasta (Control + right)",
			previousDecade: "Eelmine dekaad",
			nextDecade: "Järgmine dekaad",
			previousCentury: "Eelmine sajand",
			nextCentury: "Järgmine sajand"
		},
		timePickerLocale: { placeholder: "Vali aeg" }
	},
	Table: {
		filterTitle: "Filtri menüü",
		filterConfirm: "OK",
		filterReset: "Nulli",
		selectAll: "Vali kõik",
		selectInvert: "Inverteeri valik",
		filterEmptyText: "Filtreid pole",
		filterCheckall: "Vali kõik",
		filterSearchPlaceholder: "Otsi filtritest",
		emptyText: "Andmed puuduvad",
		selectNone: "Kustuta kõik andmed",
		selectionAll: "Vali kõik andmed",
		sortTitle: "Sorteeri",
		expand: "Laienda rida",
		collapse: "Ahenda rida",
		triggerDesc: "Klõpsa kahanevalt sortimiseks",
		triggerAsc: "Klõpsa kasvavalt sortimiseks",
		cancelSort: "Klõpsa sortimise tühistamiseks"
	},
	Modal: {
		okText: "OK",
		cancelText: "Tühista",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Tühista"
	},
	Transfer: {
		searchPlaceholder: "Otsi siit",
		itemUnit: "kogus",
		itemsUnit: "kogused",
		titles: ["", ""],
		remove: "Eemalda",
		selectCurrent: "Vali praegune leht",
		removeCurrent: "Eemalda praegune leht",
		selectAll: "Vali kõik",
		removeAll: "Eemalda kõik andmed",
		selectInvert: "Inverteeri valik"
	},
	Upload: {
		uploading: "Üleslaadimine...",
		removeFile: "Eemalda fail",
		uploadError: "Üleslaadimise tõrge",
		previewFile: "Faili eelvaade",
		downloadFile: "Lae fail alla"
	},
	Empty: { description: "Andmed puuduvad" },
	global: { placeholder: "Palun vali" },
	Form: { optional: "(valikuline)" },
	Icon: { icon: "ikoon" },
	Text: {
		edit: "Muuda",
		copy: "Kopeeri",
		copied: "Kopeeritud",
		expand: "Laienda"
	},
	PageHeader: { back: "Tagasi" },
	Image: { preview: "Eelvaade" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var fa_IR = {
	locale: "fa",
	Pagination: {
		items_per_page: "/ صفحه",
		jump_to: "برو به",
		jump_to_confirm: "تایید",
		page: "",
		prev_page: "صفحه قبلی",
		next_page: "صفحه بعدی",
		prev_5: "۵ صفحه قبلی",
		next_5: "۵ صفحه بعدی",
		prev_3: "۳ صفحه قبلی",
		next_3: "۳ صفحه بعدی",
		page_size: "اندازه صفحه"
	},
	DatePicker: {
		lang: {
			placeholder: "انتخاب تاریخ",
			yearPlaceholder: "انتخاب سال",
			quarterPlaceholder: "انتخاب فصل",
			monthPlaceholder: "انتخاب ماه",
			weekPlaceholder: "انتخاب هفته",
			rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"],
			rangeYearPlaceholder: ["سال شروع", "سال پایان"],
			rangeQuarterPlaceholder: ["فصل شروع", "فصل پایان"],
			rangeMonthPlaceholder: ["ماه شروع", "ماه پایان"],
			rangeWeekPlaceholder: ["هفته شروع", "هفته پایان"],
			locale: "fa_IR",
			today: "امروز",
			now: "اکنون",
			backToToday: "بازگشت به روز",
			ok: "باشه",
			clear: "پاک کردن",
			month: "ماه",
			year: "سال",
			timeSelect: "انتخاب زمان",
			dateSelect: "انتخاب تاریخ",
			weekSelect: "یک هفته رو انتخاب کنید",
			monthSelect: "یک ماه را انتخاب کنید",
			yearSelect: "یک سال را انتخاب کنید",
			decadeSelect: "یک دهه را انتخاب کنید",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "ماه قبل (PageUp)",
			nextMonth: "ماه بعد (PageDown)",
			previousYear: "سال قبل (Control + left)",
			nextYear: "سال بعد (Control + right)",
			previousDecade: "دهه قبل",
			nextDecade: "دهه بعد",
			previousCentury: "قرن قبل",
			nextCentury: "قرن بعد"
		},
		timePickerLocale: {
			placeholder: "انتخاب زمان",
			rangePlaceholder: ["زمان شروع", "زمان پایان"]
		}
	},
	TimePicker: {
		placeholder: "انتخاب زمان",
		rangePlaceholder: ["زمان شروع", "زمان پایان"]
	},
	Calendar: {
		lang: {
			placeholder: "انتخاب تاریخ",
			yearPlaceholder: "انتخاب سال",
			quarterPlaceholder: "انتخاب فصل",
			monthPlaceholder: "انتخاب ماه",
			weekPlaceholder: "انتخاب هفته",
			rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"],
			rangeYearPlaceholder: ["سال شروع", "سال پایان"],
			rangeMonthPlaceholder: ["ماه شروع", "ماه پایان"],
			rangeWeekPlaceholder: ["هفته شروع", "هفته پایان"],
			locale: "fa_IR",
			today: "امروز",
			now: "اکنون",
			backToToday: "بازگشت به روز",
			ok: "باشه",
			clear: "پاک کردن",
			month: "ماه",
			year: "سال",
			timeSelect: "انتخاب زمان",
			dateSelect: "انتخاب تاریخ",
			weekSelect: "انتخاب هفته",
			monthSelect: "یک ماه را انتخاب کنید",
			yearSelect: "یک سال را انتخاب کنید",
			decadeSelect: "یک دهه را انتخاب کنید",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "ماه قبل (PageUp)",
			nextMonth: "ماه بعد (PageDown)",
			previousYear: "سال قبل (Control + left)",
			nextYear: "سال بعد (Control + right)",
			previousDecade: "دهه قبل",
			nextDecade: "دهه بعد",
			previousCentury: "قرن قبل",
			nextCentury: "قرن بعد"
		},
		timePickerLocale: {
			placeholder: "انتخاب زمان",
			rangePlaceholder: ["زمان شروع", "زمان پایان"]
		}
	},
	global: { placeholder: "لطفا انتخاب کنید" },
	Table: {
		filterTitle: "منوی فیلتر",
		filterConfirm: "تایید",
		filterReset: "پاک کردن",
		filterEmptyText: "بدون فیلتر",
		emptyText: "بدون داده",
		selectAll: "انتخاب صفحه‌ی کنونی",
		selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی",
		selectionAll: "انتخاب همه داده‌ها",
		sortTitle: "مرتب سازی",
		expand: "باز شدن ردیف",
		collapse: "بستن ردیف",
		triggerDesc: "ترتیب نزولی",
		triggerAsc: "ترتیب صعودی",
		cancelSort: "لغوِ ترتیبِ داده شده",
		filterCheckall: "انتخاب همه موارد",
		filterSearchPlaceholder: "جست‌و‌جو در فیلتر‌ها",
		selectNone: "انتخاب هیچکدام"
	},
	Modal: {
		okText: "تایید",
		cancelText: "لغو",
		justOkText: "تایید"
	},
	Popconfirm: {
		okText: "تایید",
		cancelText: "لغو"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "جستجو",
		itemUnit: "عدد",
		itemsUnit: "عدد",
		remove: "حذف",
		selectCurrent: "انتخاب صفحه فعلی",
		removeCurrent: "پاک کردن انتخاب‌های صفحه فعلی",
		selectAll: "انتخاب همه",
		removeAll: "پاک کردن همه انتخاب‌ها",
		selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی"
	},
	Upload: {
		uploading: "در حال آپلود...",
		removeFile: "حذف فایل",
		uploadError: "خطا در آپلود",
		previewFile: "مشاهده‌ی فایل",
		downloadFile: "دریافت فایل"
	},
	Empty: { description: "داده‌ای موجود نیست" },
	Form: { optional: "(اختیاری)" },
	Icon: { icon: "آیکن" },
	Text: {
		edit: "ویرایش",
		copy: "کپی",
		copied: "کپی شد",
		expand: "توسعه"
	},
	PageHeader: { back: "برگشت" },
	Image: { preview: "نمایش" },
	CronExpression: {
		cronError: "Invalid cron expression",
		second: "ثانیه",
		minute: "دقیقه",
		hour: "ساعت",
		day: "روز",
		month: "ماه",
		week: "هفته"
	},
	QRCode: {
		expired: "کد QR منقضی شده است",
		refresh: "تازه کردن",
		scanned: "اسکن شده"
	},
	CheckList: {
		checkList: "چک لیست",
		checkListFinish: "چک ‌لیست با موفقیت تکمیل شد",
		checkListClose: "بستن",
		checkListFooter: "نیازی به نمایش چک ‌لیست نیست",
		checkListCheck: "آیا می‌خواهید چک ‌لیست را ببندید؟",
		ok: "تایید",
		cancel: "لغو",
		checkListCheckOther: "دیگر نمایش داده نشود"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var fi_FI = {
	locale: "fi",
	Pagination: {
		items_per_page: "/ sivu",
		jump_to: "Mene",
		jump_to_confirm: "Potvrdite",
		page: "Sivu",
		prev_page: "Edellinen sivu",
		next_page: "Seuraava sivu",
		prev_5: "Edelliset 5 sivua",
		next_5: "Seuraavat 5 sivua",
		prev_3: "Edelliset 3 sivua",
		next_3: "Seuraavat 3 sivua",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Valitse päivä",
			rangePlaceholder: ["Alkamispäivä", "Päättymispäivä"],
			locale: "fi_FI",
			today: "Tänään",
			now: "Nyt",
			backToToday: "Tämä päivä",
			ok: "Ok",
			clear: "Tyhjennä",
			month: "Kuukausi",
			year: "Vuosi",
			timeSelect: "Valise aika",
			dateSelect: "Valitse päivä",
			monthSelect: "Valitse kuukausi",
			yearSelect: "Valitse vuosi",
			decadeSelect: "Valitse vuosikymmen",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Edellinen kuukausi (PageUp)",
			nextMonth: "Seuraava kuukausi (PageDown)",
			previousYear: "Edellinen vuosi (Control + left)",
			nextYear: "Seuraava vuosi (Control + right)",
			previousDecade: "Edellinen vuosikymmen",
			nextDecade: "Seuraava vuosikymmen",
			previousCentury: "Edellinen vuosisata",
			nextCentury: "Seuraava vuosisata"
		},
		timePickerLocale: { placeholder: "Valitse aika" }
	},
	TimePicker: { placeholder: "Valitse aika" },
	Calendar: {
		lang: {
			placeholder: "Valitse päivä",
			rangePlaceholder: ["Alkamispäivä", "Päättymispäivä"],
			locale: "fi_FI",
			today: "Tänään",
			now: "Nyt",
			backToToday: "Tämä päivä",
			ok: "Ok",
			clear: "Tyhjennä",
			month: "Kuukausi",
			year: "Vuosi",
			timeSelect: "Valise aika",
			dateSelect: "Valitse päivä",
			monthSelect: "Valitse kuukausi",
			yearSelect: "Valitse vuosi",
			decadeSelect: "Valitse vuosikymmen",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Edellinen kuukausi (PageUp)",
			nextMonth: "Seuraava kuukausi (PageDown)",
			previousYear: "Edellinen vuosi (Control + left)",
			nextYear: "Seuraava vuosi (Control + right)",
			previousDecade: "Edellinen vuosikymmen",
			nextDecade: "Seuraava vuosikymmen",
			previousCentury: "Edellinen vuosisata",
			nextCentury: "Seuraava vuosisata"
		},
		timePickerLocale: { placeholder: "Valitse aika" }
	},
	Table: {
		filterTitle: "Suodatus valikko",
		filterConfirm: "OK",
		filterReset: "Tyhjennä",
		selectAll: "Valitse kaikki",
		selectInvert: "Valitse päinvastoin",
		sortTitle: "Lajittele",
		triggerDesc: "Lajittele laskevasti",
		triggerAsc: "Lajittele nousevasti",
		cancelSort: "Peruuta lajittelu"
	},
	Modal: {
		okText: "OK",
		cancelText: "Peruuta",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Peruuta"
	},
	Transfer: {
		searchPlaceholder: "Etsi täältä",
		itemUnit: "kohde",
		itemsUnit: "kohdetta"
	},
	Upload: {
		uploading: "Lähetetään...",
		removeFile: "Poista tiedosto",
		uploadError: "Virhe lähetyksessä",
		previewFile: "Esikatsele tiedostoa",
		downloadFile: "Lataa tiedosto"
	},
	Empty: { description: "Ei kohteita" },
	Form: { optional: "(valinnainen)" },
	Text: {
		edit: "Muokkaa",
		copy: "Kopioi",
		copied: "Kopioitu",
		expand: "Näytä lisää"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var fr_BE = {
	locale: "fr",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Aller à",
		jump_to_confirm: "confirmer",
		page: "Page",
		prev_page: "Page précédente",
		next_page: "Page suivante",
		prev_5: "5 Pages précédentes",
		next_5: "5 Pages suivantes",
		prev_3: "3 Pages précédentes",
		next_3: "3 Pages suivantes",
		page_size: "taille de la page"
	},
	DatePicker: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_BE",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			weekSelect: "Choisissez une semaine",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	TimePicker: {
		placeholder: "Sélectionner l'heure",
		rangePlaceholder: ["Heure de début", "Heure de fin"]
	},
	Calendar: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_BE",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	global: { placeholder: "Sélectionner" },
	Table: {
		filterTitle: "Filtrer",
		filterConfirm: "OK",
		filterReset: "Réinitialiser",
		selectAll: "Sélectionner la page actuelle",
		selectInvert: "Inverser la sélection de la page actuelle",
		selectionAll: "Sélectionner toutes les données",
		sortTitle: "Trier",
		expand: "Développer la ligne",
		collapse: "Réduire la ligne",
		triggerDesc: "Trier par ordre décroissant",
		triggerAsc: "Trier par ordre croissant",
		cancelSort: "Annuler le tri",
		filterEmptyText: "Aucun filtre",
		emptyText: "Aucune donnée",
		selectNone: "Désélectionner toutes les données"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annuler",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annuler"
	},
	Transfer: {
		searchPlaceholder: "Rechercher",
		itemUnit: "élément",
		itemsUnit: "éléments",
		titles: ["", ""],
		remove: "Désélectionner",
		selectCurrent: "Sélectionner la page actuelle",
		removeCurrent: "Désélectionner la page actuelle",
		selectAll: "Sélectionner toutes les données",
		removeAll: "Désélectionner toutes les données",
		selectInvert: "Inverser la sélection de la page actuelle"
	},
	Empty: { description: "Aucune donnée" },
	Upload: {
		uploading: "Téléchargement...",
		removeFile: "Effacer le fichier",
		uploadError: "Erreur de téléchargement",
		previewFile: "Fichier de prévisualisation",
		downloadFile: "Télécharger un fichier"
	},
	Form: { optional: "(optionnel)" },
	Text: {
		edit: "Éditer",
		copy: "Copier",
		copied: "Copie effectuée",
		expand: "Développer"
	},
	PageHeader: { back: "Retour" },
	Icon: { icon: "icône" },
	Image: { preview: "Aperçu" },
	CronExpression: {
		cronError: "Expression CRON invalide",
		second: "seconde",
		minute: "minute",
		hour: "heure",
		day: "jour",
		month: "mois",
		week: "semaine"
	},
	QRCode: {
		expired: "QR code expiré",
		refresh: "Rafraîchir",
		scanned: "Scanné"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var fr_CA = {
	locale: "fr",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Aller à",
		jump_to_confirm: "confirmer",
		page: "Page",
		prev_page: "Page précédente",
		next_page: "Page suivante",
		prev_5: "5 Pages précédentes",
		next_5: "5 Pages suivantes",
		prev_3: "3 Pages précédentes",
		next_3: "3 Pages suivantes",
		page_size: "taille de la page"
	},
	DatePicker: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_CA",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			weekSelect: "Choisissez une semaine",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	TimePicker: {
		placeholder: "Sélectionner l'heure",
		rangePlaceholder: ["Heure de début", "Heure de fin"]
	},
	Calendar: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_CA",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	global: { placeholder: "Sélectionner" },
	Table: {
		filterTitle: "Filtrer",
		filterConfirm: "OK",
		filterReset: "Réinitialiser",
		selectAll: "Sélectionner la page actuelle",
		selectInvert: "Inverser la sélection de la page actuelle",
		selectionAll: "Sélectionner toutes les données",
		sortTitle: "Trier",
		expand: "Développer la ligne",
		collapse: "Réduire la ligne",
		triggerDesc: "Trier par ordre décroissant",
		triggerAsc: "Trier par ordre croissant",
		cancelSort: "Annuler le tri",
		filterEmptyText: "Aucun filtre",
		emptyText: "Aucune donnée",
		selectNone: "Désélectionner toutes les données"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annuler",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annuler"
	},
	Transfer: {
		searchPlaceholder: "Rechercher",
		itemUnit: "élément",
		itemsUnit: "éléments",
		titles: ["", ""],
		remove: "Désélectionner",
		selectCurrent: "Sélectionner la page actuelle",
		removeCurrent: "Désélectionner la page actuelle",
		selectAll: "Sélectionner toutes les données",
		removeAll: "Désélectionner toutes les données",
		selectInvert: "Inverser la sélection de la page actuelle"
	},
	Empty: { description: "Aucune donnée" },
	Upload: {
		uploading: "Téléchargement...",
		removeFile: "Effacer le fichier",
		uploadError: "Erreur de téléchargement",
		previewFile: "Fichier de prévisualisation",
		downloadFile: "Télécharger un fichier"
	},
	Text: {
		edit: "Éditer",
		copy: "Copier",
		copied: "Copie effectuée",
		expand: "Développer"
	},
	PageHeader: { back: "Retour" },
	Form: { optional: "(optionnel)" },
	Icon: { icon: "icône" },
	Image: { preview: "Aperçu" },
	CronExpression: {
		cronError: "Expression CRON invalide",
		second: "seconde",
		minute: "minute",
		hour: "heure",
		day: "jour",
		month: "mois",
		week: "semaine"
	},
	QRCode: {
		expired: "QR code expiré",
		refresh: "Rafraîchir",
		scanned: "Scanné"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var fr_FR = {
	locale: "fr",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Aller à",
		jump_to_confirm: "confirmer",
		page: "Page",
		prev_page: "Page précédente",
		next_page: "Page suivante",
		prev_5: "5 Pages précédentes",
		next_5: "5 Pages suivantes",
		prev_3: "3 Pages précédentes",
		next_3: "3 Pages suivantes",
		page_size: "taille de la page"
	},
	DatePicker: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_FR",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			weekSelect: "Choisissez une semaine",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	TimePicker: {
		placeholder: "Sélectionner l'heure",
		rangePlaceholder: ["Heure de début", "Heure de fin"]
	},
	Calendar: {
		lang: {
			placeholder: "Sélectionner une date",
			yearPlaceholder: "Sélectionner une année",
			quarterPlaceholder: "Sélectionner un trimestre",
			monthPlaceholder: "Sélectionner un mois",
			weekPlaceholder: "Sélectionner une semaine",
			rangePlaceholder: ["Date de début", "Date de fin"],
			rangeYearPlaceholder: ["Année de début", "Année de fin"],
			rangeMonthPlaceholder: ["Mois de début", "Mois de fin"],
			rangeWeekPlaceholder: ["Semaine de début", "Semaine de fin"],
			locale: "fr_FR",
			today: "Aujourd'hui",
			now: "Maintenant",
			backToToday: "Aujourd'hui",
			ok: "Ok",
			clear: "Rétablir",
			month: "Mois",
			year: "Année",
			timeSelect: "Sélectionner l'heure",
			dateSelect: "Sélectionner la date",
			monthSelect: "Choisissez un mois",
			yearSelect: "Choisissez une année",
			decadeSelect: "Choisissez une décennie",
			yearFormat: "YYYY",
			dateFormat: "DD/MM/YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mois précédent (PageUp)",
			nextMonth: "Mois suivant (PageDown)",
			previousYear: "Année précédente (Ctrl + gauche)",
			nextYear: "Année prochaine (Ctrl + droite)",
			previousDecade: "Décennie précédente",
			nextDecade: "Décennie suivante",
			previousCentury: "Siècle précédent",
			nextCentury: "Siècle suivant"
		},
		timePickerLocale: {
			placeholder: "Sélectionner l'heure",
			rangePlaceholder: ["Heure de début", "Heure de fin"]
		}
	},
	global: { placeholder: "Sélectionner" },
	Table: {
		filterTitle: "Filtrer",
		filterConfirm: "OK",
		filterReset: "Réinitialiser",
		selectAll: "Sélectionner la page actuelle",
		selectInvert: "Inverser la sélection de la page actuelle",
		selectionAll: "Sélectionner toutes les données",
		sortTitle: "Trier",
		expand: "Développer la ligne",
		collapse: "Réduire la ligne",
		triggerDesc: "Trier par ordre décroissant",
		triggerAsc: "Trier par ordre croissant",
		cancelSort: "Annuler le tri",
		filterEmptyText: "Aucun filtre",
		emptyText: "Aucune donnée",
		selectNone: "Désélectionner toutes les données"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annuler",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annuler"
	},
	Transfer: {
		searchPlaceholder: "Rechercher",
		itemUnit: "élément",
		itemsUnit: "éléments",
		titles: ["", ""],
		remove: "Désélectionner",
		selectCurrent: "Sélectionner la page actuelle",
		removeCurrent: "Désélectionner la page actuelle",
		selectAll: "Sélectionner toutes les données",
		removeAll: "Désélectionner toutes les données",
		selectInvert: "Inverser la sélection de la page actuelle"
	},
	Empty: { description: "Aucune donnée" },
	Upload: {
		uploading: "Téléchargement...",
		removeFile: "Effacer le fichier",
		uploadError: "Erreur de téléchargement",
		previewFile: "Fichier de prévisualisation",
		downloadFile: "Télécharger un fichier"
	},
	Form: { optional: "(optionnel)" },
	Text: {
		edit: "Éditer",
		copy: "Copier",
		copied: "Copie effectuée",
		expand: "Développer"
	},
	PageHeader: { back: "Retour" },
	Icon: { icon: "icône" },
	Image: { preview: "Aperçu" },
	CronExpression: {
		cronError: "Expression CRON invalide",
		second: "seconde",
		minute: "minute",
		hour: "heure",
		day: "jour",
		month: "mois",
		week: "semaine"
	},
	QRCode: {
		expired: "QR code expiré",
		refresh: "Rafraîchir",
		scanned: "Scanné"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ga_IE = {
	locale: "ga",
	Pagination: {
		items_per_page: "/ leathanach",
		jump_to: "Téigh",
		jump_to_confirm: "dheimhnigh",
		page: "",
		prev_page: "Leathanach Roimhe Seo",
		next_page: "An chéad leathanach eile",
		prev_5: "5 leathanach roimhe seo",
		next_5: "Ar Aghaidh 5 Leathanaigh",
		prev_3: "3 leathanach roimhe seo",
		next_3: "Ar Aghaidh 3 Leathanaigh",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Roghnaigh dáta",
			yearPlaceholder: "Roghnaigh bliain",
			quarterPlaceholder: "Roghnaigh ráithe",
			monthPlaceholder: "Roghnaigh mí",
			weekPlaceholder: "Roghnaigh seachtain",
			rangePlaceholder: ["Dáta tosaigh", "Dáta deiridh"],
			rangeYearPlaceholder: ["Tús na bliana", "Deireadh na bliana"],
			rangeMonthPlaceholder: ["Tosaigh mhí", "Deireadh mhí"],
			rangeWeekPlaceholder: ["Tosaigh an tseachtain", "Deireadh na seachtaine"],
			locale: "ga_IE",
			today: "inniu",
			now: "anois",
			backToToday: "Ar ais inniu",
			ok: "ceart go leor",
			clear: "soiléir",
			month: "mhí",
			year: "bhliain",
			timeSelect: "roghnaigh am",
			dateSelect: "roghnaigh dáta",
			weekSelect: "Roghnaigh seachtain",
			monthSelect: "Roghnaigh mí",
			yearSelect: "Roghnaigh bliain",
			decadeSelect: "Roghnaigh deich mbliana",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "An mhí roimhe seo (PageUp)",
			nextMonth: "An mhí seo chugainn (PageDown)",
			previousYear: "Anuraidh (Control + left)",
			nextYear: "An bhliain seo chugainn (Control + right)",
			previousDecade: "Le deich mbliana anuas",
			nextDecade: "Deich mbliana amach romhainn",
			previousCentury: "An chéid seo caite",
			nextCentury: "An chéad aois eile"
		},
		timePickerLocale: {
			placeholder: "Roghnaigh am",
			rangePlaceholder: ["Am tosaigh", "Am deiridh"]
		}
	},
	TimePicker: {
		placeholder: "Roghnaigh am",
		rangePlaceholder: ["Am tosaigh", "Am deiridh"]
	},
	Calendar: {
		lang: {
			placeholder: "Roghnaigh dáta",
			yearPlaceholder: "Roghnaigh bliain",
			quarterPlaceholder: "Roghnaigh ráithe",
			monthPlaceholder: "Roghnaigh mí",
			weekPlaceholder: "Roghnaigh seachtain",
			rangePlaceholder: ["Dáta tosaigh", "Dáta deiridh"],
			rangeYearPlaceholder: ["Tús na bliana", "Deireadh na bliana"],
			rangeMonthPlaceholder: ["Tosaigh mhí", "Deireadh mhí"],
			rangeWeekPlaceholder: ["Tosaigh an tseachtain", "Deireadh na seachtaine"],
			locale: "ga_IE",
			today: "inniu",
			now: "anois",
			backToToday: "Ar ais inniu",
			ok: "ceart go leor",
			clear: "soiléir",
			month: "mhí",
			year: "bhliain",
			timeSelect: "roghnaigh am",
			dateSelect: "roghnaigh dáta",
			weekSelect: "Roghnaigh seachtain",
			monthSelect: "Roghnaigh mí",
			yearSelect: "Roghnaigh bliain",
			decadeSelect: "Roghnaigh deich mbliana",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "An mhí roimhe seo (PageUp)",
			nextMonth: "An mhí seo chugainn (PageDown)",
			previousYear: "Anuraidh (Control + left)",
			nextYear: "An bhliain seo chugainn (Control + right)",
			previousDecade: "Le deich mbliana anuas",
			nextDecade: "Deich mbliana amach romhainn",
			previousCentury: "An chéid seo caite",
			nextCentury: "An chéad aois eile"
		},
		timePickerLocale: {
			placeholder: "Roghnaigh am",
			rangePlaceholder: ["Am tosaigh", "Am deiridh"]
		}
	},
	global: { placeholder: "Please select" },
	Table: {
		filterTitle: "Filter menu",
		filterConfirm: "OK",
		filterReset: "Reset",
		selectAll: "Select current page",
		selectInvert: "Invert current page",
		selectionAll: "Select all data",
		sortTitle: "Sort",
		expand: "Expand row",
		collapse: "Collapse row",
		triggerDesc: "Click to sort descending",
		triggerAsc: "Click to sort ascending",
		cancelSort: "Click to cancel sorting"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancel",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancel"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Search here",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remove",
		selectCurrent: "Select current page",
		removeCurrent: "Remove current page",
		selectAll: "Select all data",
		removeAll: "Remove all data",
		selectInvert: "Invert current page"
	},
	Upload: {
		uploading: "Uploading...",
		removeFile: "Remove file",
		uploadError: "Upload error",
		previewFile: "Preview file",
		downloadFile: "Download file"
	},
	Empty: { description: "No Data" },
	Form: { optional: "(optional)" },
	Icon: { icon: "icon" },
	Text: {
		edit: "Edit",
		copy: "Copy",
		copied: "Copied",
		expand: "Expand"
	},
	PageHeader: { back: "Back" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var gl_ES = {
	locale: "gl",
	Pagination: {
		items_per_page: "/ páxina",
		jump_to: "Ir a",
		jump_to_confirm: "confirmar",
		page: "",
		prev_page: "Páxina anterior",
		next_page: "Páxina seguinte",
		prev_5: "5 páxinas previas",
		next_5: "5 páxinas seguintes",
		prev_3: "3 páxinas previas",
		next_3: "3 páxinas seguintes",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Escolla data",
			rangePlaceholder: ["Data inicial", "Data final"],
			locale: "gl_ES",
			today: "Hoxe",
			now: "Agora",
			backToToday: "Voltar a hoxe",
			ok: "Aceptar",
			clear: "Limpar",
			month: "Mes",
			year: "Ano",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar data",
			monthSelect: "Elexir un mes",
			yearSelect: "Elexir un año",
			decadeSelect: "Elexir unha década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (PageUp)",
			nextMonth: "Mes seguinte (PageDown)",
			previousYear: "Ano anterior (Control + left)",
			nextYear: "Ano seguinte (Control + right)",
			previousDecade: "Década anterior",
			nextDecade: "Década seguinte",
			previousCentury: "Século anterior",
			nextCentury: "Século seguinte"
		},
		timePickerLocale: { placeholder: "Escolla hora" }
	},
	TimePicker: { placeholder: "Escolla hora" },
	Calendar: {
		lang: {
			placeholder: "Escolla data",
			rangePlaceholder: ["Data inicial", "Data final"],
			locale: "gl_ES",
			today: "Hoxe",
			now: "Agora",
			backToToday: "Voltar a hoxe",
			ok: "Aceptar",
			clear: "Limpar",
			month: "Mes",
			year: "Ano",
			timeSelect: "Seleccionar hora",
			dateSelect: "Seleccionar data",
			monthSelect: "Elexir un mes",
			yearSelect: "Elexir un año",
			decadeSelect: "Elexir unha década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Mes anterior (PageUp)",
			nextMonth: "Mes seguinte (PageDown)",
			previousYear: "Ano anterior (Control + left)",
			nextYear: "Ano seguinte (Control + right)",
			previousDecade: "Década anterior",
			nextDecade: "Década seguinte",
			previousCentury: "Século anterior",
			nextCentury: "Século seguinte"
		},
		timePickerLocale: { placeholder: "Escolla hora" }
	},
	global: { placeholder: "Escolla" },
	Table: {
		filterTitle: "Filtrar menú",
		filterConfirm: "Aceptar",
		filterReset: "Reiniciar",
		selectAll: "Seleccionar todo",
		selectInvert: "Invertir selección",
		sortTitle: "Ordenar"
	},
	Modal: {
		okText: "Aceptar",
		cancelText: "Cancelar",
		justOkText: "Aceptar"
	},
	Popconfirm: {
		okText: "Aceptar",
		cancelText: "Cancelar"
	},
	Transfer: {
		searchPlaceholder: "Buscar aquí",
		itemUnit: "elemento",
		itemsUnit: "elementos"
	},
	Upload: {
		uploading: "Subindo...",
		removeFile: "Eliminar arquivo",
		uploadError: "Error ao subir o arquivo",
		previewFile: "Vista previa",
		downloadFile: "Descargar arquivo"
	},
	Empty: { description: "Non hai datos" },
	Form: { optional: "(opcional)" },
	Icon: { icon: "icona" },
	Text: {
		edit: "editar",
		copy: "copiar",
		copied: "copiado",
		expand: "expandir"
	},
	PageHeader: { back: "voltar" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var he_IL = {
	locale: "he",
	Pagination: {
		items_per_page: "/ עמוד",
		jump_to: "עבור אל",
		jump_to_confirm: "אישור",
		page: "",
		prev_page: "העמוד הקודם",
		next_page: "העמוד הבא",
		prev_5: "5 עמודים קודמים",
		next_5: "5 עמודים הבאים",
		prev_3: "3 עמודים קודמים",
		next_3: "3 עמודים הבאים",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "בחר תאריך",
			yearPlaceholder: "בחר שנה",
			quarterPlaceholder: "בחר רבעון",
			monthPlaceholder: "בחר חודש",
			weekPlaceholder: "בחר שבוע",
			rangePlaceholder: ["תאריך התחלה", "תאריך סיום"],
			rangeYearPlaceholder: ["שנת התחלה", "שנת סיום"],
			rangeQuarterPlaceholder: ["רבעון התחלה", "רבעון סיום"],
			rangeMonthPlaceholder: ["חודש התחלה", "חודש סיום"],
			rangeWeekPlaceholder: ["שבוע התחלה", "שבוע סיום"],
			locale: "he_IL",
			today: "היום",
			now: "עכשיו",
			backToToday: "חזור להיום",
			ok: "אישור",
			clear: "איפוס",
			month: "חודש",
			year: "שנה",
			timeSelect: "בחר שעה",
			dateSelect: "בחר תאריך",
			weekSelect: "בחר שבוע",
			monthSelect: "בחר חודש",
			yearSelect: "בחר שנה",
			decadeSelect: "בחר עשור",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "חודש קודם (PageUp)",
			nextMonth: "חודש הבא (PageDown)",
			previousYear: "שנה שעברה (Control + left)",
			nextYear: "שנה הבאה (Control + right)",
			previousDecade: "העשור הקודם",
			nextDecade: "העשור הבא",
			previousCentury: "המאה הקודמת",
			nextCentury: "המאה הבאה"
		},
		timePickerLocale: {
			placeholder: "בחר שעה",
			rangePlaceholder: ["שעת התחלה", "שעת סיום"]
		}
	},
	TimePicker: {
		placeholder: "בחר שעה",
		rangePlaceholder: ["שעת התחלה", "שעת סיום"]
	},
	Calendar: {
		lang: {
			placeholder: "בחר תאריך",
			yearPlaceholder: "בחר שנה",
			quarterPlaceholder: "בחר רבעון",
			monthPlaceholder: "בחר חודש",
			weekPlaceholder: "בחר שבוע",
			rangePlaceholder: ["תאריך התחלה", "תאריך סיום"],
			rangeYearPlaceholder: ["שנת התחלה", "שנת סיום"],
			rangeMonthPlaceholder: ["חודש התחלה", "חודש סיום"],
			rangeWeekPlaceholder: ["שבוע התחלה", "שבוע סיום"],
			locale: "he_IL",
			today: "היום",
			now: "עכשיו",
			backToToday: "חזור להיום",
			ok: "אישור",
			clear: "איפוס",
			month: "חודש",
			year: "שנה",
			timeSelect: "בחר שעה",
			dateSelect: "בחר תאריך",
			weekSelect: "בחר שבוע",
			monthSelect: "בחר חודש",
			yearSelect: "בחר שנה",
			decadeSelect: "בחר עשור",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "חודש קודם (PageUp)",
			nextMonth: "חודש הבא (PageDown)",
			previousYear: "שנה שעברה (Control + left)",
			nextYear: "שנה הבאה (Control + right)",
			previousDecade: "העשור הקודם",
			nextDecade: "העשור הבא",
			previousCentury: "המאה הקודמת",
			nextCentury: "המאה הבאה"
		},
		timePickerLocale: {
			placeholder: "בחר שעה",
			rangePlaceholder: ["שעת התחלה", "שעת סיום"]
		}
	},
	global: { placeholder: "אנא בחר" },
	Table: {
		filterTitle: "תפריט סינון",
		filterConfirm: "אישור",
		filterReset: "איפוס",
		selectAll: "בחר הכל",
		selectInvert: "הפוך בחירה",
		selectionAll: "בחר את כל הנתונים",
		sortTitle: "מיון",
		expand: "הרחב שורה",
		collapse: "צמצם שורה",
		triggerDesc: "לחץ על מיון לפי סדר יורד",
		triggerAsc: "לחץ על מיון לפי סדר עולה",
		cancelSort: "לחץ כדי לבטל את המיון"
	},
	Modal: {
		okText: "אישור",
		cancelText: "ביטול",
		justOkText: "אישור"
	},
	Popconfirm: {
		okText: "אישור",
		cancelText: "ביטול"
	},
	Transfer: {
		searchPlaceholder: "חפש כאן",
		itemUnit: "פריט",
		itemsUnit: "פריטים"
	},
	Upload: {
		uploading: "מעלה...",
		removeFile: "הסר קובץ",
		uploadError: "שגיאת העלאה",
		previewFile: "הצג קובץ",
		downloadFile: "הורד קובץ"
	},
	Empty: { description: "אין מידע" },
	Form: { optional: "(אופציונלי)" },
	Icon: { icon: "סמל" },
	Text: {
		edit: "ערוך",
		copy: "העתק",
		copied: "הועתק",
		expand: "הרחב"
	},
	PageHeader: { back: "חזרה" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var hi_IN = {
	locale: "hi",
	Pagination: {
		items_per_page: "/ पृष्ठ",
		jump_to: "इस पर चलें",
		jump_to_confirm: "पुष्टि करें",
		page: "",
		prev_page: "पिछला पृष्ठ",
		next_page: "अगला पृष्ठ",
		prev_5: "पिछले 5 पृष्ठ",
		next_5: "अगले 5 पृष्ठ",
		prev_3: "पिछले 3 पृष्ठ",
		next_3: "अगले 3 पेज",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "तारीख़ चुनें",
			rangePlaceholder: ["प्रारंभ तिथि", "समाप्ति तिथि"],
			locale: "hi_IN",
			today: "आज",
			now: "अभी",
			backToToday: "आज तक",
			ok: "ठीक",
			clear: "स्पष्ट",
			month: "महीना",
			year: "साल",
			timeSelect: "समय का चयन करें",
			dateSelect: "तारीख़ चुनें",
			weekSelect: "एक सप्ताह चुनें",
			monthSelect: "एक महीना चुनें",
			yearSelect: "एक वर्ष चुनें",
			decadeSelect: "एक दशक चुनें",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "पिछला महीना (पेजअप)",
			nextMonth: "अगले महीने (पेजडाउन)",
			previousYear: "पिछले साल (Ctrl + बाएं)",
			nextYear: "अगले साल (Ctrl + दाहिना)",
			previousDecade: "पिछला दशक",
			nextDecade: "अगले दशक",
			previousCentury: "पीछ्ली शताब्दी",
			nextCentury: "अगली सदी",
			yearPlaceholder: "वर्ष चुनें",
			quarterPlaceholder: "तिमाही चुनें",
			monthPlaceholder: "महीना चुनिए",
			weekPlaceholder: "सप्ताह चुनें",
			rangeYearPlaceholder: ["आरंभिक वर्ष", "अंत वर्ष"],
			rangeMonthPlaceholder: ["आरंभिक महीना", "अंत महीना"],
			rangeWeekPlaceholder: ["आरंभिक सप्ताह", "अंत सप्ताह"]
		},
		timePickerLocale: {
			placeholder: "समय का चयन करें",
			rangePlaceholder: ["आरंभिक समय", "अंत समय"]
		}
	},
	TimePicker: {
		placeholder: "समय का चयन करें",
		rangePlaceholder: ["आरंभिक समय", "अंत समय"]
	},
	Calendar: {
		lang: {
			placeholder: "तारीख़ चुनें",
			rangePlaceholder: ["प्रारंभ तिथि", "समाप्ति तिथि"],
			locale: "hi_IN",
			today: "आज",
			now: "अभी",
			backToToday: "आज तक",
			ok: "ठीक",
			clear: "स्पष्ट",
			month: "महीना",
			year: "साल",
			timeSelect: "समय का चयन करें",
			dateSelect: "तारीख़ चुनें",
			weekSelect: "एक सप्ताह चुनें",
			monthSelect: "एक महीना चुनें",
			yearSelect: "एक वर्ष चुनें",
			decadeSelect: "एक दशक चुनें",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "पिछला महीना (पेजअप)",
			nextMonth: "अगले महीने (पेजडाउन)",
			previousYear: "पिछले साल (Ctrl + बाएं)",
			nextYear: "अगले साल (Ctrl + दाहिना)",
			previousDecade: "पिछला दशक",
			nextDecade: "अगले दशक",
			previousCentury: "पीछ्ली शताब्दी",
			nextCentury: "अगली सदी",
			yearPlaceholder: "वर्ष चुनें",
			quarterPlaceholder: "तिमाही चुनें",
			monthPlaceholder: "महीना चुनिए",
			weekPlaceholder: "सप्ताह चुनें",
			rangeYearPlaceholder: ["आरंभिक वर्ष", "अंत वर्ष"],
			rangeMonthPlaceholder: ["आरंभिक महीना", "अंत महीना"],
			rangeWeekPlaceholder: ["आरंभिक सप्ताह", "अंत सप्ताह"]
		},
		timePickerLocale: {
			placeholder: "समय का चयन करें",
			rangePlaceholder: ["आरंभिक समय", "अंत समय"]
		}
	},
	global: { placeholder: "कृपया चुनें" },
	Table: {
		filterTitle: "सूची बंद करें",
		filterConfirm: "अच्छी तरह से",
		filterReset: "रीसेट",
		emptyText: "कोई जानकारी नहीं",
		selectAll: "वर्तमान पृष्ठ का चयन करें",
		selectInvert: "वर्तमान पृष्ठ घुमाएं",
		sortTitle: "द्वारा क्रमबद्ध करें",
		filterEmptyText: "कोई फ़िल्टर नहीं",
		selectNone: "सभी डेटा साफ़ करें",
		selectionAll: "सभी डेटा का चयन करें",
		expand: "पंक्ति का विस्तार करें",
		collapse: "पंक्ति संक्षिप्त करें",
		triggerDesc: "अवरोही क्रमित करने के लिए क्लिक करें",
		triggerAsc: "आरोही क्रमित करने के लिए क्लिक करें",
		cancelSort: "छँटाई रद्द करने के लिए क्लिक करें"
	},
	Modal: {
		okText: "अच्छी तरह से",
		cancelText: "रद्द करना",
		justOkText: "अच्छी तरह से"
	},
	Popconfirm: {
		okText: "अच्छी तरह से",
		cancelText: "रद्द करना"
	},
	Transfer: {
		titles: ["", ""],
		notFoundContent: "नहीं मिला",
		searchPlaceholder: "यहां खोजें",
		itemUnit: "तत्त्व",
		itemsUnit: "विषय-वस्तु",
		remove: "हटाए",
		selectCurrent: "वर्तमान पृष्ठ का चयन करें",
		removeCurrent: "वर्तमान पृष्ठ हटाएं",
		selectAll: "सभी डेटा का चयन करें",
		removeAll: "सभी डेटा हटाएं",
		selectInvert: "वर्तमान पृष्ठ को उल्टा करें"
	},
	Select: { notFoundContent: "नहीं मिला" },
	Upload: {
		uploading: "अपलोड हो रहा...",
		removeFile: "फ़ाइल निकालें",
		uploadError: "अपलोड में त्रुटि",
		previewFile: "फ़ाइल पूर्वावलोकन",
		downloadFile: "फ़ाइल डाउनलोड करें"
	},
	Empty: { description: "कोई आकड़ा उपलब्ध नहीं है" },
	Form: { optional: "(वैकल्पिक)" },
	Icon: { icon: "आइकन" },
	Text: {
		edit: "संपादित करें",
		copy: "प्रतिलिपि",
		copied: "कॉपी किया गया",
		expand: "विस्तार"
	},
	PageHeader: { back: "वापस" },
	Image: { preview: "पूर्वावलोकन" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var hr_HR = {
	locale: "hr",
	Pagination: {
		items_per_page: "/ str",
		jump_to: "Idi na",
		jump_to_confirm: "potvrdi",
		page: "",
		prev_page: "Prijašnja stranica",
		next_page: "Sljedeća stranica",
		prev_5: "Prijašnjih 5 stranica",
		next_5: "Sljedećih 5 stranica",
		prev_3: "Prijašnje 3 stranice",
		next_3: "Sljedeće 3 stranice",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Odaberite datum",
			rangePlaceholder: ["Početni datum", "Završni datum"],
			locale: "hr_HR",
			today: "Danas",
			now: "Sad",
			backToToday: "Natrag na danas",
			ok: "Ok",
			clear: "Očisti",
			month: "Mjesec",
			year: "Godina",
			timeSelect: "odaberite vrijeme",
			dateSelect: "odaberite datum",
			weekSelect: "Odaberite tjedan",
			monthSelect: "Odaberite mjesec",
			yearSelect: "Odaberite godinu",
			decadeSelect: "Odaberite desetljeće",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Prošli mjesec (PageUp)",
			nextMonth: "Sljedeći mjesec (PageDown)",
			previousYear: "Prošla godina (Control + left)",
			nextYear: "Sljedeća godina (Control + right)",
			previousDecade: "Prošlo desetljeće",
			nextDecade: "Sljedeće desetljeće",
			previousCentury: "Prošlo stoljeće",
			nextCentury: "Sljedeće stoljeće",
			yearPlaceholder: "Odaberite godinu",
			quarterPlaceholder: "Odaberite četvrtinu",
			monthPlaceholder: "Odaberite mjesec",
			weekPlaceholder: "Odaberite tjedan",
			rangeYearPlaceholder: ["Početna godina", "Završna godina"],
			rangeMonthPlaceholder: ["Početni mjesec", "Završni mjesec"],
			rangeWeekPlaceholder: ["Početni tjedan", "Završni tjedan"]
		},
		timePickerLocale: {
			placeholder: "Odaberite vrijeme",
			rangePlaceholder: ["Vrijeme početka", "Vrijeme završetka"]
		}
	},
	TimePicker: {
		placeholder: "Odaberite vrijeme",
		rangePlaceholder: ["Vrijeme početka", "Vrijeme završetka"]
	},
	Calendar: {
		lang: {
			placeholder: "Odaberite datum",
			rangePlaceholder: ["Početni datum", "Završni datum"],
			locale: "hr_HR",
			today: "Danas",
			now: "Sad",
			backToToday: "Natrag na danas",
			ok: "Ok",
			clear: "Očisti",
			month: "Mjesec",
			year: "Godina",
			timeSelect: "odaberite vrijeme",
			dateSelect: "odaberite datum",
			weekSelect: "Odaberite tjedan",
			monthSelect: "Odaberite mjesec",
			yearSelect: "Odaberite godinu",
			decadeSelect: "Odaberite desetljeće",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Prošli mjesec (PageUp)",
			nextMonth: "Sljedeći mjesec (PageDown)",
			previousYear: "Prošla godina (Control + left)",
			nextYear: "Sljedeća godina (Control + right)",
			previousDecade: "Prošlo desetljeće",
			nextDecade: "Sljedeće desetljeće",
			previousCentury: "Prošlo stoljeće",
			nextCentury: "Sljedeće stoljeće",
			yearPlaceholder: "Odaberite godinu",
			quarterPlaceholder: "Odaberite četvrtinu",
			monthPlaceholder: "Odaberite mjesec",
			weekPlaceholder: "Odaberite tjedan",
			rangeYearPlaceholder: ["Početna godina", "Završna godina"],
			rangeMonthPlaceholder: ["Početni mjesec", "Završni mjesec"],
			rangeWeekPlaceholder: ["Početni tjedan", "Završni tjedan"]
		},
		timePickerLocale: {
			placeholder: "Odaberite vrijeme",
			rangePlaceholder: ["Vrijeme početka", "Vrijeme završetka"]
		}
	},
	global: { placeholder: "Molimo označite" },
	Table: {
		filterTitle: "Filter meni",
		filterConfirm: "OK",
		filterReset: "Reset",
		selectAll: "Označi trenutnu stranicu",
		selectInvert: "Invertiraj trenutnu stranicu",
		sortTitle: "Sortiraj",
		filterEmptyText: "Nema filtera",
		emptyText: "Nema podataka",
		selectionAll: "Odaberite sve podatke",
		expand: "Proširi redak",
		collapse: "Sažmi redak",
		triggerDesc: "Kliknite za sortiranje silazno",
		triggerAsc: "Kliknite za sortiranje uzlazno",
		cancelSort: "Kliknite da biste otkazali sortiranje"
	},
	Modal: {
		okText: "OK",
		cancelText: "Odustani",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Odustani"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Pretraži ovdje",
		itemUnit: "stavka",
		itemsUnit: "stavke",
		remove: "Ukloniti",
		selectCurrent: "Odaberite trenutnu stranicu",
		removeCurrent: "Ukloni trenutnu stranicu",
		selectAll: "Odaberite sve podatke",
		removeAll: "Uklonite sve podatke",
		selectInvert: "Obrni trenutnu stranicu"
	},
	Upload: {
		uploading: "Upload u tijeku...",
		removeFile: "Makni datoteku",
		uploadError: "Greška kod uploada",
		previewFile: "Pogledaj datoteku",
		downloadFile: "Preuzmi datoteku"
	},
	Form: { optional: "(neobavezno)" },
	Empty: { description: "Nema podataka" },
	Icon: { icon: "ikona" },
	Text: {
		edit: "Uredi",
		copy: "Kopiraj",
		copied: "Kopiranje uspješno",
		expand: "Proširi"
	},
	PageHeader: { back: "Natrag" },
	Image: { preview: "Pregled" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var hu_HU = {
	locale: "hu",
	Pagination: {
		items_per_page: "/ oldal",
		jump_to: "Ugrás",
		jump_to_confirm: "megerősít",
		page: "",
		prev_page: "Előző oldal",
		next_page: "Következő oldal",
		prev_5: "Előző 5 oldal",
		next_5: "Következő 5 oldal",
		prev_3: "Előző 3 oldal",
		next_3: "Következő 3 oldal",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Válasszon dátumot",
			yearPlaceholder: "Válasszon évet",
			quarterPlaceholder: "Válasszon negyedévet",
			monthPlaceholder: "Válasszon hónapot",
			weekPlaceholder: "Válasszon hetet",
			rangePlaceholder: ["Kezdő dátum", "Befejezés dátuma"],
			rangeYearPlaceholder: ["Kezdő év", "Befejezés éve"],
			rangeMonthPlaceholder: ["Kezdő hónap", "Befejezés hónapja"],
			rangeWeekPlaceholder: ["Kezdő hét", "Befejezés hete"],
			locale: "hu_HU",
			today: "Ma",
			now: "Most",
			backToToday: "Vissza a mai napra",
			ok: "Ok",
			clear: "Törlés",
			month: "Hónap",
			year: "Év",
			timeSelect: "Időpont kiválasztása",
			dateSelect: "Dátum kiválasztása",
			weekSelect: "Hét kiválasztása",
			monthSelect: "Hónap kiválasztása",
			yearSelect: "Év kiválasztása",
			decadeSelect: "Évtized kiválasztása",
			yearFormat: "YYYY",
			dateFormat: "YYYY/MM/DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Előző hónap (PageUp)",
			nextMonth: "Következő hónap (PageDown)",
			previousYear: "Múlt év (Control + left)",
			nextYear: "Jövő év (Control + right)",
			previousDecade: "Előző évtized",
			nextDecade: "Következő évtized",
			previousCentury: "Múlt évszázad",
			nextCentury: "Jövő évszázad",
			rangeQuarterPlaceholder: ["Kezdő negyedév", "Befejezés negyedéve"]
		},
		timePickerLocale: {
			placeholder: "Válasszon időt",
			rangePlaceholder: ["Kezdő idő", "Befejezés ideje"]
		}
	},
	TimePicker: {
		placeholder: "Válasszon időt",
		rangePlaceholder: ["Kezdő idő", "Befejezés ideje"]
	},
	Calendar: {
		lang: {
			placeholder: "Válasszon dátumot",
			yearPlaceholder: "Válasszon évet",
			quarterPlaceholder: "Válasszon negyedévet",
			monthPlaceholder: "Válasszon hónapot",
			weekPlaceholder: "Válasszon hetet",
			rangePlaceholder: ["Kezdő dátum", "Befejezés dátuma"],
			rangeYearPlaceholder: ["Kezdő év", "Befejezés éve"],
			rangeMonthPlaceholder: ["Kezdő hónap", "Befejezés hónapja"],
			rangeWeekPlaceholder: ["Kezdő hét", "Befejezés hete"],
			locale: "hu_HU",
			today: "Ma",
			now: "Most",
			backToToday: "Vissza a mai napra",
			ok: "Ok",
			clear: "Törlés",
			month: "Hónap",
			year: "Év",
			timeSelect: "Időpont kiválasztása",
			dateSelect: "Dátum kiválasztása",
			weekSelect: "Hét kiválasztása",
			monthSelect: "Hónap kiválasztása",
			yearSelect: "Év kiválasztása",
			decadeSelect: "Évtized kiválasztása",
			yearFormat: "YYYY",
			dateFormat: "YYYY/MM/DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Előző hónap (PageUp)",
			nextMonth: "Következő hónap (PageDown)",
			previousYear: "Múlt év (Control + left)",
			nextYear: "Jövő év (Control + right)",
			previousDecade: "Előző évtized",
			nextDecade: "Következő évtized",
			previousCentury: "Múlt évszázad",
			nextCentury: "Jövő évszázad"
		},
		timePickerLocale: {
			placeholder: "Válasszon időt",
			rangePlaceholder: ["Kezdő idő", "Befejezés ideje"]
		}
	},
	global: { placeholder: "Kérlek, válassz" },
	Table: {
		filterTitle: "Szűrők",
		filterConfirm: "Alkalmazás",
		filterReset: "Visszaállítás",
		filterEmptyText: "No filters",
		emptyText: "Nincs adat",
		selectAll: "Jelenlegi oldal kiválasztása",
		selectInvert: "Jelenlegi oldal inverze",
		selectionAll: "Összes adat kiválasztása",
		sortTitle: "Rendezés",
		expand: "Sor kinyitása",
		collapse: "Sor becsukása",
		triggerDesc: "Kattintson a csökkenő sorrendbe rendezéshez",
		triggerAsc: "Kattintson a növekvő sorrendbe rendezéshez",
		cancelSort: "Kattintson a rendezés visszavonásához",
		selectNone: "Összes visszavonása"
	},
	Modal: {
		okText: "Alkalmazás",
		cancelText: "Visszavonás",
		justOkText: "Alkalmazás"
	},
	Popconfirm: {
		okText: "Alkalmazás",
		cancelText: "Visszavonás"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Keresés",
		itemUnit: "elem",
		itemsUnit: "elemek",
		remove: "Eltávolít",
		selectCurrent: "Jelenlegi oldal kiválasztása",
		removeCurrent: "Jelenlegi oldal eltávolítása",
		selectAll: "Összes adat kiválasztása",
		removeAll: "Összes adat eltávolítása",
		selectInvert: "Jelenlegi oldal inverze"
	},
	Upload: {
		uploading: "Feltöltés...",
		removeFile: "Fájl eltávolítása",
		uploadError: "Feltöltési hiba",
		previewFile: "Fájl előnézet",
		downloadFile: "Fájl letöltése"
	},
	Form: { optional: "(nem kötelező)" },
	Empty: { description: "Nincs adat" },
	Icon: { icon: "ikon" },
	Text: {
		edit: "Szerkesztés",
		copy: "Másolás",
		copied: "Másolva",
		expand: "Kiterjesztés"
	},
	PageHeader: { back: "Vissza" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var hy_AM = {
	locale: "hy-am",
	Pagination: {
		items_per_page: "/ էջ",
		jump_to: "Գնալ",
		jump_to_confirm: "հաստատել",
		page: "",
		prev_page: "Նախորդ Էջ",
		next_page: "Հաջորդ Էջ",
		prev_5: "Նախորդ 5 Էջերը",
		next_5: "Հաջորդ 5 Էջերը",
		prev_3: "Նախորդ 3 Էջերը",
		next_3: "Հաջորդ 3 Էջերը"
	},
	DatePicker: {
		lang: {
			locale: "hy-am",
			placeholder: "Ընտրեք ամսաթիվը",
			rangePlaceholder: ["Մեկնարկի ամսաթիվ", "Ավարտի ամսաթիվը"],
			today: "Այսօր",
			now: "Հիմա",
			backToToday: "Վերադառնալ այսօր",
			ok: "Օկ",
			clear: "Մաքրել",
			month: "Ամիս",
			year: "Տարի",
			timeSelect: "ընտրեք ժամը",
			dateSelect: "ընտրեք ամսաթիվը",
			weekSelect: "Ընտրեք շաբաթը",
			monthSelect: "Ընտրեք ամիսը",
			yearSelect: "Ընտրեք տարին",
			decadeSelect: "Ընտրեք տասնամյակը",
			yearFormat: "YYYY",
			dateFormat: "DD/MM//YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM//YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Անցած ամիս (PageUp)",
			nextMonth: "Մյուս ամիս (PageDown)",
			previousYear: "Անցած տարի (Control + left)",
			nextYear: "Մյուս տարի (Control + right)",
			previousDecade: "Անցած տասնամյակ",
			nextDecade: "Մյուս տասնամյակ",
			previousCentury: "Անցած դար",
			nextCentury: "Մյուս դար"
		},
		timePickerLocale: { placeholder: "Ընտրեք ժամը" }
	},
	TimePicker: { placeholder: "Ընտրեք ժամը" },
	Calendar: {
		lang: {
			locale: "hy-am",
			placeholder: "Ընտրեք ամսաթիվը",
			rangePlaceholder: ["Մեկնարկի ամսաթիվ", "Ավարտի ամսաթիվը"],
			today: "Այսօր",
			now: "Հիմա",
			backToToday: "Վերադառնալ այսօր",
			ok: "Օկ",
			clear: "Մաքրել",
			month: "Ամիս",
			year: "Տարի",
			timeSelect: "ընտրեք ժամը",
			dateSelect: "ընտրեք ամսաթիվը",
			weekSelect: "Ընտրեք շաբաթը",
			monthSelect: "Ընտրեք ամիսը",
			yearSelect: "Ընտրեք տարին",
			decadeSelect: "Ընտրեք տասնամյակը",
			yearFormat: "YYYY",
			dateFormat: "DD/MM//YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD/MM//YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Անցած ամիս (PageUp)",
			nextMonth: "Մյուս ամիս (PageDown)",
			previousYear: "Անցած տարի (Control + left)",
			nextYear: "Մյուս տարի (Control + right)",
			previousDecade: "Անցած տասնամյակ",
			nextDecade: "Մյուս տասնամյակ",
			previousCentury: "Անցած դար",
			nextCentury: "Մյուս դար"
		},
		timePickerLocale: { placeholder: "Ընտրեք ժամը" }
	},
	global: { placeholder: "Ընտրեք" },
	Table: {
		filterTitle: "ֆիլտրի ընտրացանկ",
		filterConfirm: "ֆիլտրել",
		filterReset: "Զրոյացնել",
		selectAll: "Ընտրեք ընթացիկ էջը",
		selectInvert: "Փոխարկել ընթացիկ էջը",
		sortTitle: "Տեսակավորել",
		expand: "Ընդլայնեք տողը",
		collapse: "Կրճատել տողը"
	},
	Modal: {
		okText: "Օկ",
		cancelText: "Չեղարկել",
		justOkText: "Օկ"
	},
	Popconfirm: {
		okText: "Հաստատել",
		cancelText: "Մերժել"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Որոնեք այստեղ",
		itemUnit: "պարագան",
		itemsUnit: "պարագաները"
	},
	Upload: {
		uploading: "Ներբեռնում...",
		removeFile: "Հեռացնել ֆայլը",
		uploadError: "Ներբեռնման սխալ",
		previewFile: "Դիտել ֆայլը",
		downloadFile: "Ներբեռնել ֆայլը"
	},
	Empty: { description: "Տվյալներ չկան" },
	Form: { optional: "(ընտրելի)" },
	Icon: { icon: "պատկեր" },
	Text: {
		edit: "Խմբագրել",
		copy: "Պատճենել",
		copied: "Պատճենվել է",
		expand: "Տեսնել ավելին"
	},
	PageHeader: { back: "Հետ" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var id_ID = {
	locale: "id",
	Pagination: {
		items_per_page: "/ halaman",
		jump_to: "Menuju",
		jump_to_confirm: "konfirmasi",
		page: "Halaman",
		prev_page: "Halaman Sebelumnya",
		next_page: "Halaman Berikutnya",
		prev_5: "5 Halaman Sebelumnya",
		next_5: "5 Halaman Berikutnya",
		prev_3: "3 Halaman Sebelumnya",
		next_3: "3 Halaman Berikutnya",
		page_size: "ukuran halaman"
	},
	DatePicker: {
		lang: {
			placeholder: "Pilih tanggal",
			rangePlaceholder: ["Mulai tanggal", "Tanggal akhir"],
			locale: "id_ID",
			today: "Hari ini",
			now: "Sekarang",
			backToToday: "Kembali ke hari ini",
			ok: "Baik",
			clear: "Bersih",
			month: "Bulan",
			year: "Tahun",
			timeSelect: "pilih waktu",
			dateSelect: "pilih tanggal",
			weekSelect: "Pilih satu minggu",
			monthSelect: "Pilih satu bulan",
			yearSelect: "Pilih satu tahun",
			decadeSelect: "Pilih satu dekade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Bulan sebelumnya (PageUp)",
			nextMonth: "Bulan selanjutnya (PageDown)",
			previousYear: "Tahun lalu (Control + kiri)",
			nextYear: "Tahun selanjutnya (Kontrol + kanan)",
			previousDecade: "Dekade terakhir",
			nextDecade: "Dekade berikutnya",
			previousCentury: "Abad terakhir",
			nextCentury: "Abad berikutnya"
		},
		timePickerLocale: { placeholder: "Pilih waktu" }
	},
	TimePicker: { placeholder: "Pilih waktu" },
	Calendar: {
		lang: {
			placeholder: "Pilih tanggal",
			rangePlaceholder: ["Mulai tanggal", "Tanggal akhir"],
			locale: "id_ID",
			today: "Hari ini",
			now: "Sekarang",
			backToToday: "Kembali ke hari ini",
			ok: "Baik",
			clear: "Bersih",
			month: "Bulan",
			year: "Tahun",
			timeSelect: "pilih waktu",
			dateSelect: "pilih tanggal",
			weekSelect: "Pilih satu minggu",
			monthSelect: "Pilih satu bulan",
			yearSelect: "Pilih satu tahun",
			decadeSelect: "Pilih satu dekade",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Bulan sebelumnya (PageUp)",
			nextMonth: "Bulan selanjutnya (PageDown)",
			previousYear: "Tahun lalu (Control + kiri)",
			nextYear: "Tahun selanjutnya (Kontrol + kanan)",
			previousDecade: "Dekade terakhir",
			nextDecade: "Dekade berikutnya",
			previousCentury: "Abad terakhir",
			nextCentury: "Abad berikutnya"
		},
		timePickerLocale: { placeholder: "Pilih waktu" }
	},
	Table: {
		filterTitle: "Saring",
		filterConfirm: "OK",
		filterReset: "Hapus",
		selectAll: "Pilih semua di halaman ini",
		selectInvert: "Balikkan pilihan di halaman ini",
		sortTitle: "Urutkan"
	},
	Modal: {
		okText: "OK",
		cancelText: "Batal",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Batal"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Cari",
		itemUnit: "item",
		itemsUnit: "item"
	},
	Upload: {
		uploading: "Mengunggah...",
		removeFile: "Hapus file",
		uploadError: "Kesalahan pengunggahan",
		previewFile: "File pratinjau",
		downloadFile: "Unduh berkas"
	},
	Empty: { description: "Tidak ada data" },
	Form: { optional: "(pilihan)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var is_IS = {
	locale: "is",
	Pagination: {
		items_per_page: "/ síðu",
		jump_to: "Síða",
		jump_to_confirm: "staðfest",
		page: "",
		prev_page: "Fyrri síða",
		next_page: "Næsta síða",
		prev_5: "Til baka 5 síður",
		next_5: "Áfram 5 síður",
		prev_3: "Til baka 3 síður",
		next_3: "Áfram 3 síður",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Veldu dag",
			rangePlaceholder: ["Upphafsdagur", "Lokadagur"],
			locale: "is_IS",
			today: "Í dag",
			now: "Núna",
			backToToday: "Til baka til dagsins í dag",
			ok: "Í lagi",
			clear: "Hreinsa",
			month: "Mánuður",
			year: "Ár",
			timeSelect: "Velja tíma",
			dateSelect: "Velja dag",
			monthSelect: "Velja mánuð",
			yearSelect: "Velja ár",
			decadeSelect: "Velja áratug",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Fyrri mánuður (PageUp)",
			nextMonth: "Næsti mánuður (PageDown)",
			previousYear: "Fyrra ár (Control + left)",
			nextYear: "Næsta ár (Control + right)",
			previousDecade: "Fyrri áratugur",
			nextDecade: "Næsti áratugur",
			previousCentury: "Fyrri öld",
			nextCentury: "Næsta öld"
		},
		timePickerLocale: { placeholder: "Velja tíma" }
	},
	TimePicker: { placeholder: "Velja tíma" },
	Calendar: {
		lang: {
			placeholder: "Veldu dag",
			rangePlaceholder: ["Upphafsdagur", "Lokadagur"],
			locale: "is_IS",
			today: "Í dag",
			now: "Núna",
			backToToday: "Til baka til dagsins í dag",
			ok: "Í lagi",
			clear: "Hreinsa",
			month: "Mánuður",
			year: "Ár",
			timeSelect: "Velja tíma",
			dateSelect: "Velja dag",
			monthSelect: "Velja mánuð",
			yearSelect: "Velja ár",
			decadeSelect: "Velja áratug",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Fyrri mánuður (PageUp)",
			nextMonth: "Næsti mánuður (PageDown)",
			previousYear: "Fyrra ár (Control + left)",
			nextYear: "Næsta ár (Control + right)",
			previousDecade: "Fyrri áratugur",
			nextDecade: "Næsti áratugur",
			previousCentury: "Fyrri öld",
			nextCentury: "Næsta öld"
		},
		timePickerLocale: { placeholder: "Velja tíma" }
	},
	Table: {
		filterTitle: "Afmarkanir",
		filterConfirm: "Staðfesta",
		filterReset: "Núllstilla",
		selectAll: "Velja allt",
		selectInvert: "Viðsnúa vali"
	},
	Modal: {
		okText: "Áfram",
		cancelText: "Hætta við",
		justOkText: "Í lagi"
	},
	Popconfirm: {
		okText: "Áfram",
		cancelText: "Hætta við"
	},
	Transfer: {
		searchPlaceholder: "Leita hér",
		itemUnit: "færsla",
		itemsUnit: "færslur"
	},
	Upload: {
		uploading: "Hleð upp...",
		removeFile: "Fjarlægja skrá",
		uploadError: "Villa við að hlaða upp",
		previewFile: "Forskoða skrá",
		downloadFile: "Hlaða niður skrá"
	},
	Empty: { description: "Engin gögn" },
	Form: { optional: "(valfrjálst)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var it_IT = {
	locale: "it",
	Pagination: {
		items_per_page: "/ pagina",
		jump_to: "vai a",
		jump_to_confirm: "Conferma",
		page: "Pagina",
		prev_page: "Pagina precedente",
		next_page: "Pagina successiva",
		prev_5: "Precedente 5 pagine",
		next_5: "Prossime 5 pagine",
		prev_3: "Precedente 3 pagine",
		next_3: "Prossime 3 pagine",
		page_size: "dimensioni della pagina"
	},
	DatePicker: {
		lang: {
			placeholder: "Selezionare la data",
			yearPlaceholder: "Selezionare l'anno",
			quarterPlaceholder: "Selezionare il trimestre",
			monthPlaceholder: "Selezionare il mese",
			weekPlaceholder: "Selezionare la settimana",
			rangePlaceholder: ["Data d'inizio", "Data di fine"],
			rangeYearPlaceholder: ["Anno d'inizio", "Anno di fine"],
			rangeMonthPlaceholder: ["Mese d'inizio ", "Mese di fine"],
			rangeWeekPlaceholder: ["Settimana d'inizio", "Settimana di fine"],
			locale: "it_IT",
			today: "Oggi",
			now: "Adesso",
			backToToday: "Torna ad oggi",
			ok: "Ok",
			clear: "Cancella",
			month: "Mese",
			year: "Anno",
			timeSelect: "Seleziona l'ora",
			dateSelect: "Seleziona la data",
			weekSelect: "Seleziona la settimana",
			monthSelect: "Seleziona il mese",
			yearSelect: "Seleziona l'anno",
			decadeSelect: "Seleziona il decennio",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Il mese scorso (PageUp)",
			nextMonth: "Il prossimo mese (PageDown)",
			previousYear: "L'anno scorso (Control + sinistra)",
			nextYear: "L'anno prossimo (Control + destra)",
			previousDecade: "Ultimo decennio",
			nextDecade: "Prossimo decennio",
			previousCentury: "Secolo precedente",
			nextCentury: "Prossimo secolo"
		},
		timePickerLocale: {
			placeholder: "Selezionare l'orario",
			rangePlaceholder: ["Ora d'inizio", "Ora di fine"]
		}
	},
	TimePicker: {
		placeholder: "Selezionare l'orario",
		rangePlaceholder: ["Ora d'inizio", "Ora di fine"]
	},
	Calendar: {
		lang: {
			placeholder: "Selezionare la data",
			yearPlaceholder: "Selezionare l'anno",
			quarterPlaceholder: "Selezionare il trimestre",
			monthPlaceholder: "Selezionare il mese",
			weekPlaceholder: "Selezionare la settimana",
			rangePlaceholder: ["Data d'inizio", "Data di fine"],
			rangeYearPlaceholder: ["Anno d'inizio", "Anno di fine"],
			rangeMonthPlaceholder: ["Mese d'inizio ", "Mese di fine"],
			rangeWeekPlaceholder: ["Settimana d'inizio", "Settimana di fine"],
			locale: "it_IT",
			today: "Oggi",
			now: "Adesso",
			backToToday: "Torna ad oggi",
			ok: "Ok",
			clear: "Cancella",
			month: "Mese",
			year: "Anno",
			timeSelect: "Seleziona l'ora",
			weekSelect: "Seleziona la settimana",
			dateSelect: "Seleziona la data",
			monthSelect: "Seleziona il mese",
			yearSelect: "Seleziona l'anno",
			decadeSelect: "Seleziona il decennio",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Il mese scorso (PageUp)",
			nextMonth: "Il prossimo mese (PageDown)",
			previousYear: "L'anno scorso (Control + sinistra)",
			nextYear: "L'anno prossimo (Control + destra)",
			previousDecade: "Ultimo decennio",
			nextDecade: "Prossimo decennio",
			previousCentury: "Secolo precedente",
			nextCentury: "Prossimo secolo"
		},
		timePickerLocale: {
			placeholder: "Selezionare l'orario",
			rangePlaceholder: ["Ora d'inizio", "Ora di fine"]
		}
	},
	global: { placeholder: "Selezionare" },
	Table: {
		filterTitle: "Menù Filtro",
		filterConfirm: "OK",
		filterReset: "Reset",
		filterEmptyText: "Nessun filtro",
		emptyText: "Nessun dato",
		selectAll: "Seleziona pagina corrente",
		selectInvert: "Inverti selezione nella pagina corrente",
		selectionAll: "Seleziona tutti i dati",
		sortTitle: "Ordina",
		expand: "Esapandi riga",
		collapse: "Chiudi riga",
		triggerDesc: "Clicca per ordinare in modo discendente",
		triggerAsc: "Clicca per ordinare in modo ascendente",
		cancelSort: "Clicca per eliminare i filtri",
		filterCheckall: "Seleziona tutto",
		filterSearchPlaceholder: "Cerca nei filtri",
		selectNone: "Pulisci tutti i dati"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annulla",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annulla"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Cerca qui",
		itemUnit: "elemento",
		itemsUnit: "elementi",
		remove: "Rimuovi",
		selectCurrent: "Seleziona pagina corrente",
		removeCurrent: "Rimuovi pagina corrente",
		selectAll: "Selezione tutti i dati",
		removeAll: "Rimuovi tutti i dati",
		selectInvert: "Inverti selezione nella pagina corrente"
	},
	Upload: {
		uploading: "Caricamento...",
		removeFile: "Rimuovi il file",
		uploadError: "Errore di caricamento",
		previewFile: "Anteprima file",
		downloadFile: "Download file"
	},
	Form: { optional: "(opzionale)" },
	Empty: { description: "Nessun dato" },
	Icon: { icon: "icona" },
	Text: {
		edit: "modifica",
		copy: "copia",
		copied: "copia effettuata",
		expand: "espandi"
	},
	PageHeader: { back: "Indietro" },
	Image: { preview: "Anteprima" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ja_JP = {
	locale: "ja",
	Pagination: {
		items_per_page: "件 / ページ",
		jump_to: "移動",
		jump_to_confirm: "確認する",
		page: "ページ",
		prev_page: "前のページ",
		next_page: "次のページ",
		prev_5: "前 5ページ",
		next_5: "次 5ページ",
		prev_3: "前 3ページ",
		next_3: "次 3ページ",
		page_size: "ページサイズ"
	},
	DatePicker: {
		lang: {
			placeholder: "日付を選択",
			yearPlaceholder: "年を選択",
			quarterPlaceholder: "四半期を選択",
			monthPlaceholder: "月を選択",
			weekPlaceholder: "週を選択",
			rangePlaceholder: ["開始日付", "終了日付"],
			rangeYearPlaceholder: ["開始年", "終了年"],
			rangeQuarterPlaceholder: ["開始四半期", "終了四半期"],
			rangeMonthPlaceholder: ["開始月", "終了月"],
			rangeWeekPlaceholder: ["開始週", "終了週"],
			locale: "ja_JP",
			today: "今日",
			now: "現在時刻",
			backToToday: "今日に戻る",
			ok: "決定",
			timeSelect: "時間を選択",
			dateSelect: "日時を選択",
			weekSelect: "週を選択",
			clear: "クリア",
			month: "月",
			year: "年",
			previousMonth: "前月 (ページアップキー)",
			nextMonth: "翌月 (ページダウンキー)",
			monthSelect: "月を選択",
			yearSelect: "年を選択",
			decadeSelect: "年代を選択",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "前年 (Controlを押しながら左キー)",
			nextYear: "翌年 (Controlを押しながら右キー)",
			previousDecade: "前の年代",
			nextDecade: "次の年代",
			previousCentury: "前の世紀",
			nextCentury: "次の世紀"
		},
		timePickerLocale: {
			placeholder: "時間を選択",
			rangePlaceholder: ["開始時間", "終了時間"]
		}
	},
	TimePicker: {
		placeholder: "時間を選択",
		rangePlaceholder: ["開始時間", "終了時間"]
	},
	Calendar: {
		lang: {
			placeholder: "日付を選択",
			rangePlaceholder: ["開始日付", "終了日付"],
			locale: "ja_JP",
			today: "今日",
			now: "現在時刻",
			backToToday: "今日に戻る",
			ok: "決定",
			timeSelect: "時間を選択",
			dateSelect: "日時を選択",
			weekSelect: "週を選択",
			clear: "クリア",
			month: "月",
			year: "年",
			previousMonth: "前月 (ページアップキー)",
			nextMonth: "翌月 (ページダウンキー)",
			monthSelect: "月を選択",
			yearSelect: "年を選択",
			decadeSelect: "年代を選択",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "前年 (Controlを押しながら左キー)",
			nextYear: "翌年 (Controlを押しながら右キー)",
			previousDecade: "前の年代",
			nextDecade: "次の年代",
			previousCentury: "前の世紀",
			nextCentury: "次の世紀"
		},
		timePickerLocale: {
			placeholder: "時間を選択",
			rangePlaceholder: ["開始時間", "終了時間"]
		}
	},
	Table: {
		filterTitle: "フィルター",
		filterConfirm: "OK",
		filterReset: "リセット",
		filterEmptyText: "フィルターなし",
		selectAll: "ページ単位で選択",
		selectInvert: "ページ単位で反転",
		selectionAll: "すべてを選択",
		sortTitle: "ソート",
		expand: "展開する",
		collapse: "折り畳む",
		triggerDesc: "クリックで降順にソート",
		triggerAsc: "クリックで昇順にソート",
		cancelSort: "ソートをキャンセル"
	},
	Modal: {
		okText: "OK",
		cancelText: "キャンセル",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "キャンセル"
	},
	Transfer: {
		searchPlaceholder: "ここを検索",
		itemUnit: "アイテム",
		itemsUnit: "アイテム"
	},
	Upload: {
		uploading: "アップロード中...",
		removeFile: "ファイルを削除",
		uploadError: "アップロードエラー",
		previewFile: "ファイルをプレビュー",
		downloadFile: "ダウンロードファイル"
	},
	Empty: { description: "データがありません" },
	Form: { optional: "(任意)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ka_GE = {
	locale: "ka",
	Pagination: {
		items_per_page: "/ გვერდი.",
		jump_to: "გადასვლა",
		jump_to_confirm: "დადასტურება",
		page: "",
		prev_page: "წინა გვერდი",
		next_page: "შემდეგი გვერდი",
		prev_5: "წინა 5 გვერდი",
		next_5: "შემდეგი 5 გვერდი",
		prev_3: "წინა 3 გვერდი",
		next_3: "შემდეგი 3 გვერდი",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "აირჩიეთ თარიღი",
			yearPlaceholder: "აირჩიეთ წელი",
			quarterPlaceholder: "აირჩიეთ მეოთხედი",
			monthPlaceholder: "აირჩიეთ თვე",
			weekPlaceholder: "აირჩიეთ კვირა",
			rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"],
			rangeYearPlaceholder: ["საწყისი წელი", "საბოლოო წელი"],
			rangeMonthPlaceholder: ["საწყისი თვე", "საბოლოო თვე"],
			rangeWeekPlaceholder: ["საწყისი კვირა", "საბოლოო კვირა"],
			locale: "ka_GE",
			today: "დღეს",
			now: "ახლა",
			backToToday: "მიმდინარე თარიღი",
			ok: "Ok",
			clear: "გასუფთავება",
			month: "თვე",
			year: "წელი",
			timeSelect: "დროის არჩევა",
			dateSelect: "თარიღის არჩევა",
			weekSelect: "კვირის არჩევა",
			monthSelect: "თვის არჩევა",
			yearSelect: "წლის არჩევა",
			decadeSelect: "ათწლეულის არჩევა",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "წინა თვე (PageUp)",
			nextMonth: "მომდევნო თვე (PageDown)",
			previousYear: "წინა წელი (Control + left)",
			nextYear: "მომდევნო წელი (Control + right)",
			previousDecade: "წინა ათწლეული",
			nextDecade: "მომდევნო ათწლეული",
			previousCentury: "გასული საუკუნე",
			nextCentury: "მომდევნო საუკუნე"
		},
		timePickerLocale: {
			placeholder: "აირჩიეთ დრო",
			rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"]
		}
	},
	TimePicker: {
		placeholder: "აირჩიეთ დრო",
		rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"]
	},
	Calendar: {
		lang: {
			placeholder: "აირჩიეთ თარიღი",
			yearPlaceholder: "აირჩიეთ წელი",
			quarterPlaceholder: "აირჩიეთ მეოთხედი",
			monthPlaceholder: "აირჩიეთ თვე",
			weekPlaceholder: "აირჩიეთ კვირა",
			rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"],
			rangeYearPlaceholder: ["საწყისი წელი", "საბოლოო წელი"],
			rangeMonthPlaceholder: ["საწყისი თვე", "საბოლოო თვე"],
			rangeWeekPlaceholder: ["საწყისი კვირა", "საბოლოო კვირა"],
			locale: "ka_GE",
			today: "დღეს",
			now: "ახლა",
			backToToday: "მიმდინარე თარიღი",
			ok: "Ok",
			clear: "გასუფთავება",
			month: "თვე",
			year: "წელი",
			timeSelect: "დროის არჩევა",
			dateSelect: "თარიღის არჩევა",
			weekSelect: "კვირის არჩევა",
			monthSelect: "თვის არჩევა",
			yearSelect: "წლის არჩევა",
			decadeSelect: "ათწლეულის არჩევა",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "წინა თვე (PageUp)",
			nextMonth: "მომდევნო თვე (PageDown)",
			previousYear: "წინა წელი (Control + left)",
			nextYear: "მომდევნო წელი (Control + right)",
			previousDecade: "წინა ათწლეული",
			nextDecade: "მომდევნო ათწლეული",
			previousCentury: "გასული საუკუნე",
			nextCentury: "მომდევნო საუკუნე"
		},
		timePickerLocale: {
			placeholder: "აირჩიეთ დრო",
			rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"]
		}
	},
	global: { placeholder: "გთხოვთ აირჩიოთ" },
	Table: {
		filterTitle: "ფილტრის მენიუ",
		filterConfirm: "კარგი",
		filterReset: "გასუფთავება",
		filterEmptyText: "ფილტრები არაა",
		emptyText: "ინფორმაცია არაა",
		selectAll: "აირჩიეთ მიმდინარე გვერდი",
		selectInvert: "შეაბრუნეთ მიმდინარე გვერდი",
		selectionAll: "ყველას მონიშვნა",
		sortTitle: "დალაგება",
		expand: "სტრიქონის გაშლა",
		collapse: "სტრიქონის შეკუმშვა",
		triggerDesc: "დაღმავალი დალაგება",
		triggerAsc: "აღმავალი დალაგება",
		cancelSort: "დალაგების გაუქმება",
		selectNone: "მონაცემების გასუფთავება"
	},
	Modal: {
		okText: "კარგი",
		cancelText: "გაუქმება",
		justOkText: "ოკ"
	},
	Popconfirm: {
		okText: "კარგი",
		cancelText: "გაუქმება"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "მოძებნე აქ",
		itemUnit: "ერთეული",
		itemsUnit: "ერთეულები",
		remove: "ამოშლა",
		selectCurrent: "მიმდინარე გვერდის არჩევა",
		removeCurrent: "მიმდინარე გვერდის ამოშლა",
		selectAll: "ყველას მონიშვნა",
		removeAll: "ყველას წაშლა",
		selectInvert: "მიმდინარე გვერდის შებრუნება"
	},
	Upload: {
		uploading: "იტვირთება...",
		removeFile: "ფაილის ამოშლა",
		uploadError: "ატვირთვის შეცდომა",
		previewFile: "ფაილის გადახედვა",
		downloadFile: "ფაილის ჩამოტვირთვა"
	},
	Empty: { description: "ინფორმაცია არაა" },
	Form: { optional: "(არასავალდებულო)" },
	Icon: { icon: "ხატულა" },
	Text: {
		edit: "რედაქტირება",
		copy: "ასლი",
		copied: "ასლი აღებულია",
		expand: "გაშლა"
	},
	PageHeader: { back: "უკან" },
	Image: { preview: "გადახედვა" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var km_KH = {
	locale: "km",
	Pagination: {
		items_per_page: "/ ទំព័រ",
		jump_to: "លោត​ទៅ",
		jump_to_confirm: "បញ្ជាក់",
		page: "ទំព័រ",
		prev_page: "ទំព័រ​មុន",
		next_page: "ទំព័រ​​បន្ទាប់",
		prev_5: "៥ ទំព័រថយក្រោយ",
		next_5: "៥ ទំព័រទៅមុខ",
		prev_3: "៣ ទំព័រថយក្រោយ",
		next_3: "៣ ទំព័រទៅមុខ",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "រើសថ្ងៃ",
			yearPlaceholder: "រើសឆ្នាំ",
			quarterPlaceholder: "រើសត្រីមាស",
			monthPlaceholder: "រើសខែ",
			weekPlaceholder: "រើសសប្តាហ៍",
			rangePlaceholder: ["ថ្ងៃចាប់ផ្ដើម", "ថ្ងៃបញ្ចប់"],
			rangeYearPlaceholder: ["ឆ្នាំចាប់ផ្ដើម", "ឆ្នាំបញ្ចប់"],
			rangeMonthPlaceholder: ["ខែចាប់ផ្ដើម", "ខែបញ្ចប់"],
			rangeWeekPlaceholder: ["សប្ដាហ៍ចាប់ផ្ដើម", "សប្ដាហ៍បញ្ចប់"],
			locale: "km",
			today: "ថ្ងៃនេះ",
			now: "ឥឡូវ​នេះ",
			backToToday: "ត្រលប់ទៅថ្ងៃនេះ",
			ok: "កំណត់",
			timeSelect: "រយៈពេលជ្រើសរើស",
			dateSelect: "ជ្រើសរើសកាលបរិច្ឆេទ",
			weekSelect: "ជ្រើសរើសសប្តាហ៍",
			clear: "ច្បាស់",
			month: "ខែ",
			year: "ឆ្នាំ",
			previousMonth: "ខែមុន (ឡើងទំព័រ)",
			nextMonth: "ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)",
			monthSelect: "ជ្រើសរើសខែ",
			yearSelect: "ជ្រើសរើសឆ្នាំ",
			decadeSelect: "ជ្រើសរើសអាយុ",
			yearFormat: "YYYY",
			dayFormat: "D",
			dateFormat: "YYYY-M-D",
			dateTimeFormat: "YYYY-M-D HH:mm:ss",
			previousYear: "ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)",
			nextYear: "ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)",
			previousDecade: "ជំនាន់ចុងក្រោយ",
			nextDecade: "ជំនាន់​ក្រោយ",
			previousCentury: "សតវត្សចុងក្រោយ",
			nextCentury: "សតវត្សរ៍បន្ទាប់",
			monthBeforeYear: true
		},
		timePickerLocale: {
			placeholder: "រើសម៉ោង",
			rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
		}
	},
	TimePicker: {
		placeholder: "រើសម៉ោង",
		rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
	},
	Calendar: {
		lang: {
			placeholder: "រើសថ្ងៃ",
			yearPlaceholder: "រើសឆ្នាំ",
			quarterPlaceholder: "រើសត្រីមាស",
			monthPlaceholder: "រើសខែ",
			weekPlaceholder: "រើសសប្តាហ៍",
			rangePlaceholder: ["ថ្ងៃចាប់ផ្ដើម", "ថ្ងៃបញ្ចប់"],
			rangeYearPlaceholder: ["ឆ្នាំចាប់ផ្ដើម", "ឆ្នាំបញ្ចប់"],
			rangeMonthPlaceholder: ["ខែចាប់ផ្ដើម", "ខែបញ្ចប់"],
			rangeWeekPlaceholder: ["សប្ដាហ៍ចាប់ផ្ដើម", "សប្ដាហ៍បញ្ចប់"],
			locale: "km",
			today: "ថ្ងៃនេះ",
			now: "ឥឡូវ​នេះ",
			backToToday: "ត្រលប់ទៅថ្ងៃនេះ",
			ok: "កំណត់",
			timeSelect: "រយៈពេលជ្រើសរើស",
			dateSelect: "ជ្រើសរើសកាលបរិច្ឆេទ",
			weekSelect: "ជ្រើសរើសសប្តាហ៍",
			clear: "ច្បាស់",
			month: "ខែ",
			year: "ឆ្នាំ",
			previousMonth: "ខែមុន (ឡើងទំព័រ)",
			nextMonth: "ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)",
			monthSelect: "ជ្រើសរើសខែ",
			yearSelect: "ជ្រើសរើសឆ្នាំ",
			decadeSelect: "ជ្រើសរើសអាយុ",
			yearFormat: "YYYY",
			dayFormat: "D",
			dateFormat: "YYYY-M-D",
			dateTimeFormat: "YYYY-M-D HH:mm:ss",
			previousYear: "ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)",
			nextYear: "ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)",
			previousDecade: "ជំនាន់ចុងក្រោយ",
			nextDecade: "ជំនាន់​ក្រោយ",
			previousCentury: "សតវត្សចុងក្រោយ",
			nextCentury: "សតវត្សរ៍បន្ទាប់",
			monthBeforeYear: true
		},
		timePickerLocale: {
			placeholder: "រើសម៉ោង",
			rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
		}
	},
	global: { placeholder: "សូមជ្រើសរើស" },
	Table: {
		filterTitle: "បញ្ចីតម្រៀប",
		filterConfirm: "យល់ព្រម",
		filterReset: "ត្រឡប់ដើម",
		filterEmptyText: "គ្មានបញ្ចីតម្រៀប",
		emptyText: "គ្មានទិន្នន័យ",
		selectAll: "រើសក្នុងទំព័រនេះ",
		selectInvert: "បញ្ច្រាសក្នុងទំព័រនេះ",
		selectNone: "លុបចេញទាំងអស់",
		selectionAll: "រើសយកទាំងអស់",
		sortTitle: "តម្រៀប",
		expand: "ពន្លាត",
		collapse: "បិតបាំង",
		triggerDesc: "ចុចដើម្បីរៀបតាមលំដាប់ធំ",
		triggerAsc: "ចុចដើម្បីរៀបតាមលំដាប់តូច​",
		cancelSort: "ចុចដើម្បីបោះបង់"
	},
	Modal: {
		okText: "យល់ព្រម",
		cancelText: "បោះបង់",
		justOkText: "យល់ព្រម"
	},
	Popconfirm: {
		okText: "យល់ព្រម",
		cancelText: "បោះបង់"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "ស្វែងរកនៅទីនេះ",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "លុប",
		selectCurrent: "រើសទំព័របច្ចុប្បន្ន",
		removeCurrent: "លុបទំព័របច្ចុប្បន្ន",
		selectAll: "រើសទិន្នន័យទាំងអស់",
		removeAll: "លុបទិន្នន័យទាំងអស់",
		selectInvert: "បញ្ច្រាសទំព័របច្ចុប្បន្ន"
	},
	Upload: {
		uploading: "កំពុងបញ្ចូលឡើង...",
		removeFile: "លុបឯកសារ",
		uploadError: "បញ្ចូលមិនជោកជ័យ",
		previewFile: "មើលឯកសារ",
		downloadFile: "ទាញយកឯកសារ"
	},
	Empty: { description: "គ្មានទិន្នន័យ" },
	Form: { optional: "(ជំរុញ)" },
	Icon: { icon: "icon" },
	Text: {
		edit: "កែ",
		copy: "Copy",
		copied: "Copied",
		expand: "ពង្រីក"
	},
	PageHeader: { back: "Back" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var kk_KZ = {
	locale: "kk",
	Pagination: {
		items_per_page: "/ бет",
		jump_to: "Секіру",
		jump_to_confirm: "Растау",
		page: "",
		prev_page: "Артқа",
		next_page: "Алға",
		prev_5: "Алдыңғы 5",
		next_5: "Келесі 5",
		prev_3: "Алдыңғы 3",
		next_3: "Келесі 3",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Күнді таңдаңыз",
			yearPlaceholder: "Жылды таңдаңыз",
			quarterPlaceholder: "Тоқсанды таңдаңыз",
			monthPlaceholder: "Айды таңдаңыз",
			weekPlaceholder: "Аптаны таңдаңыз",
			rangePlaceholder: ["Бастау күні", "Аяқталу күні"],
			rangeYearPlaceholder: ["Бастау жылы", "Аяқталу жылы"],
			rangeMonthPlaceholder: ["Бастау айы", "Аяқталу айы"],
			rangeWeekPlaceholder: ["Бастау апта", "Аяқталу апта"],
			locale: "kk_KZ",
			today: "Бүгін",
			now: "Қазір",
			backToToday: "Ағымдағы күн",
			ok: "Таңдау",
			clear: "Таза",
			month: "Ай",
			year: "Жыл",
			timeSelect: "Уақытты таңдау",
			dateSelect: "Күнді таңдау",
			monthSelect: "Айды таңдаңыз",
			yearSelect: "Жылды таңдаңыз",
			decadeSelect: "Онжылды таңдаңыз",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Алдыңғы ай (PageUp)",
			nextMonth: "Келесі ай (PageDown)",
			previousYear: "Алдыңғы жыл (Control + left)",
			nextYear: "Келесі жыл (Control + right)",
			previousDecade: "Алдыңғы онжылдық",
			nextDecade: "Келесі онжылдық",
			previousCentury: "Алдыңғы ғасыр",
			nextCentury: "Келесі ғасыр"
		},
		timePickerLocale: {
			placeholder: "Уақытты таңдаңыз",
			rangePlaceholder: ["Бастау уақыты", "Аяқталу уақыты"]
		}
	},
	TimePicker: {
		placeholder: "Уақытты таңдаңыз",
		rangePlaceholder: ["Бастау уақыты", "Аяқталу уақыты"]
	},
	Calendar: {
		lang: {
			placeholder: "Күнді таңдаңыз",
			yearPlaceholder: "Жылды таңдаңыз",
			quarterPlaceholder: "Тоқсанды таңдаңыз",
			monthPlaceholder: "Айды таңдаңыз",
			weekPlaceholder: "Аптаны таңдаңыз",
			rangePlaceholder: ["Бастау күні", "Аяқталу күні"],
			rangeYearPlaceholder: ["Бастау жылы", "Аяқталу жылы"],
			rangeMonthPlaceholder: ["Бастау айы", "Аяқталу айы"],
			rangeWeekPlaceholder: ["Бастау апта", "Аяқталу апта"],
			locale: "kk_KZ",
			today: "Бүгін",
			now: "Қазір",
			backToToday: "Ағымдағы күн",
			ok: "Таңдау",
			clear: "Таза",
			month: "Ай",
			year: "Жыл",
			timeSelect: "Уақытты таңдау",
			dateSelect: "Күнді таңдау",
			monthSelect: "Айды таңдаңыз",
			yearSelect: "Жылды таңдаңыз",
			decadeSelect: "Онжылды таңдаңыз",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Алдыңғы ай (PageUp)",
			nextMonth: "Келесі ай (PageDown)",
			previousYear: "Алдыңғы жыл (Control + left)",
			nextYear: "Келесі жыл (Control + right)",
			previousDecade: "Алдыңғы онжылдық",
			nextDecade: "Келесі онжылдық",
			previousCentury: "Алдыңғы ғасыр",
			nextCentury: "Келесі ғасыр"
		},
		timePickerLocale: {
			placeholder: "Уақытты таңдаңыз",
			rangePlaceholder: ["Бастау уақыты", "Аяқталу уақыты"]
		}
	},
	global: { placeholder: "Таңдаңыз" },
	Table: {
		filterTitle: "Фильтр",
		filterConfirm: "OK",
		filterReset: "Тазарту",
		filterEmptyText: "Фильтр жоқ",
		emptyText: "Деректер жоқ",
		selectAll: "Барлығын таңдау",
		selectInvert: "Таңдауды төңкеру",
		selectionAll: "Барлық деректерді таңдаңыз",
		sortTitle: "Сұрыптау",
		expand: "Жолды жазу",
		collapse: "Жолды бүктеу",
		triggerDesc: "Төмендеуді сұрыптау үшін басыңыз",
		triggerAsc: "Өсу ретімен сұрыптау үшін басыңыз",
		cancelSort: "Сұрыптаудан бас тарту үшін басыңыз"
	},
	Modal: {
		okText: "Жарайды",
		cancelText: "Болдырмау",
		justOkText: "Жарайды"
	},
	Popconfirm: {
		okText: "Жарайды",
		cancelText: "Болдырмау"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Іздеу",
		itemUnit: "элемент.",
		itemsUnit: "элемент.",
		remove: "Жою",
		selectAll: "Барлық деректерді таңдау",
		selectCurrent: "Ағымдағы бетті таңдау",
		selectInvert: "Кері тәртіпте көрсету",
		removeAll: "Барлық деректерді жою",
		removeCurrent: "Ағымдағы парақты өшіру"
	},
	Upload: {
		uploading: "Жүктеу...",
		removeFile: "Файлды жою",
		uploadError: "Жүктеу кезінде қате пайда болды",
		previewFile: "Файлды алдын ала қарау",
		downloadFile: "Файлды жүктеу"
	},
	Empty: { description: "Деректер жоқ" },
	Form: { optional: "(міндетті емес)" },
	Icon: { icon: "белгішесі" },
	Text: {
		edit: "Өңдеу",
		copy: "Көшіру",
		copied: "Көшірілді",
		expand: "Жазу"
	},
	PageHeader: { back: "Артқа" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var kmr_IQ = {
	locale: "ku",
	Pagination: {
		items_per_page: "/ rûpel",
		jump_to: "Biçe",
		jump_to_confirm: "piştrast bike",
		page: "",
		prev_page: "Rûpelê Pêş",
		next_page: "Rûpelê Paş",
		prev_5: "5 Rûpelên Pêş",
		next_5: "5 Rûpelên Paş",
		prev_3: "3 Rûpelên Pêş",
		next_3: "3 Rûpelên Paş",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Dîrok hilbijêre",
			rangePlaceholder: ["Dîroka destpêkê", "Dîroka dawîn"],
			locale: "ku",
			today: "Îro",
			now: "Niha",
			backToToday: "Vegere îro",
			ok: "Temam",
			clear: "Paqij bike",
			month: "Meh",
			year: "Sal",
			timeSelect: "Demê hilbijêre",
			dateSelect: "Dîrok hilbijêre",
			monthSelect: "Meh hilbijêre",
			yearSelect: "Sal hilbijêre",
			decadeSelect: "Dehsal hilbijêre",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Meha peş (PageUp))",
			nextMonth: "Meha paş (PageDown)",
			previousYear: "Sala peş (Control + şep)",
			nextYear: "Sala paş (Control + rast)",
			previousDecade: "Dehsalen peş",
			nextDecade: "Dehsalen paş",
			previousCentury: "Sedsalen peş",
			nextCentury: "Sedsalen paş"
		},
		timePickerLocale: { placeholder: "Demê hilbijêre" }
	},
	TimePicker: { placeholder: "Demê hilbijêre" },
	Calendar: {
		lang: {
			placeholder: "Dîrok hilbijêre",
			rangePlaceholder: ["Dîroka destpêkê", "Dîroka dawîn"],
			locale: "ku",
			today: "Îro",
			now: "Niha",
			backToToday: "Vegere îro",
			ok: "Temam",
			clear: "Paqij bike",
			month: "Meh",
			year: "Sal",
			timeSelect: "Demê hilbijêre",
			dateSelect: "Dîrok hilbijêre",
			monthSelect: "Meh hilbijêre",
			yearSelect: "Sal hilbijêre",
			decadeSelect: "Dehsal hilbijêre",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Meha peş (PageUp))",
			nextMonth: "Meha paş (PageDown)",
			previousYear: "Sala peş (Control + şep)",
			nextYear: "Sala paş (Control + rast)",
			previousDecade: "Dehsalen peş",
			nextDecade: "Dehsalen paş",
			previousCentury: "Sedsalen peş",
			nextCentury: "Sedsalen paş"
		},
		timePickerLocale: { placeholder: "Demê hilbijêre" }
	},
	Table: {
		filterTitle: "Menuê peldanka",
		filterConfirm: "Temam",
		filterReset: "Jê bibe",
		selectAll: "Hemî hilbijêre",
		selectInvert: "Hilbijartinan veguhere"
	},
	Modal: {
		okText: "Temam",
		cancelText: "Betal ke",
		justOkText: "Temam"
	},
	Popconfirm: {
		okText: "Temam",
		cancelText: "Betal ke"
	},
	Transfer: {
		searchPlaceholder: "Lêgerîn",
		itemUnit: "tişt",
		itemsUnit: "tişt"
	},
	Upload: {
		uploading: "Bardike...",
		removeFile: "Pelê rabike",
		uploadError: "Xeta barkirine",
		previewFile: "Pelê pêşbibîne",
		downloadFile: "Pelê dakêşin"
	},
	Empty: { description: "Agahî tune" },
	Form: { optional: "(êzîfî)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var kn_IN = {
	locale: "kn",
	Pagination: {
		items_per_page: "/ ಪುಟ",
		jump_to: "ಜಿಗಿತವನ್ನು",
		jump_to_confirm: "ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು",
		page: "",
		prev_page: "ಹಿಂದಿನ ಪುಟ",
		next_page: "ಮುಂದಿನ ಪುಟ",
		prev_5: "ಹಿಂದಿನ 5 ಪುಟಗಳು",
		next_5: "ಮುಂದಿನ 5 ಪುಟಗಳು",
		prev_3: "ಹಿಂದಿನ 3 ಪುಟಗಳು",
		next_3: "ಮುಂದಿನ 3 ಪುಟಗಳು",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
			rangePlaceholder: ["ಪ್ರಾರಂಭ ದಿನಾಂಕ", "ಅಂತಿಮ ದಿನಾಂಕ"],
			locale: "kn_IN",
			today: "ಇಂದು",
			now: "ಈಗ",
			backToToday: "ಇಂದು ಹಿಂದಿರುಗಿ",
			ok: "ಸರಿ",
			clear: "ಸ್ಪಷ್ಟ",
			month: "ತಿಂಗಳು",
			year: "ವರ್ಷ",
			timeSelect: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
			dateSelect: "ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
			weekSelect: "ಒಂದು ವಾರದ ಆರಿಸಿ",
			monthSelect: "ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ",
			yearSelect: "ಒಂದು ವರ್ಷ ಆರಿಸಿ",
			decadeSelect: "ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)",
			nextMonth: "ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)",
			previousYear: "ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)",
			nextYear: "ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)",
			previousDecade: "ಕಳೆದ ದಶಕ",
			nextDecade: "ಮುಂದಿನ ದಶಕ",
			previousCentury: "ಕಳೆದ ಶತಮಾನ",
			nextCentury: "ಮುಂದಿನ ಶತಮಾನ"
		},
		timePickerLocale: { placeholder: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ" }
	},
	TimePicker: { placeholder: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ" },
	Calendar: {
		lang: {
			placeholder: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
			rangePlaceholder: ["ಪ್ರಾರಂಭ ದಿನಾಂಕ", "ಅಂತಿಮ ದಿನಾಂಕ"],
			locale: "kn_IN",
			today: "ಇಂದು",
			now: "ಈಗ",
			backToToday: "ಇಂದು ಹಿಂದಿರುಗಿ",
			ok: "ಸರಿ",
			clear: "ಸ್ಪಷ್ಟ",
			month: "ತಿಂಗಳು",
			year: "ವರ್ಷ",
			timeSelect: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
			dateSelect: "ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
			weekSelect: "ಒಂದು ವಾರದ ಆರಿಸಿ",
			monthSelect: "ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ",
			yearSelect: "ಒಂದು ವರ್ಷ ಆರಿಸಿ",
			decadeSelect: "ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)",
			nextMonth: "ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)",
			previousYear: "ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)",
			nextYear: "ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)",
			previousDecade: "ಕಳೆದ ದಶಕ",
			nextDecade: "ಮುಂದಿನ ದಶಕ",
			previousCentury: "ಕಳೆದ ಶತಮಾನ",
			nextCentury: "ಮುಂದಿನ ಶತಮಾನ"
		},
		timePickerLocale: { placeholder: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ" }
	},
	global: { placeholder: "ದಯವಿಟ್ಟು ಆರಿಸಿ" },
	Table: {
		filterTitle: "ಪಟ್ಟಿ ಸೋಸಿ",
		filterConfirm: "ಸರಿ",
		filterReset: "ಮರುಹೊಂದಿಸಿ",
		emptyText: "ಮಾಹಿತಿ ಇಲ್ಲ",
		selectAll: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
		selectInvert: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ",
		sortTitle: "ವಿಂಗಡಿಸಿ"
	},
	Modal: {
		okText: "ಸರಿ",
		cancelText: "ರದ್ದು",
		justOkText: "ಸರಿ"
	},
	Popconfirm: {
		okText: "ಸರಿ",
		cancelText: "ರದ್ದು"
	},
	Transfer: {
		titles: ["", ""],
		notFoundContent: "ದೊರೆತಿಲ್ಲ",
		searchPlaceholder: "ಇಲ್ಲಿ ಹುಡುಕಿ",
		itemUnit: "ವಿಷಯ",
		itemsUnit: "ವಿಷಯಗಳು"
	},
	Select: { notFoundContent: "ದೊರೆತಿಲ್ಲ" },
	Upload: {
		uploading: "ಏರಿಸಿ...",
		removeFile: "ಫೈಲ್ ತೆಗೆದುಹಾಕಿ",
		uploadError: "ಏರಿಸುವ ದೋಷ",
		previewFile: "ಫೈಲ್ ಮುನ್ನೋಟ",
		downloadFile: "ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
	},
	Form: { optional: "(ಅಗತ್ಯ)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ko_KR = {
	locale: "ko",
	Pagination: {
		items_per_page: "/ 쪽",
		jump_to: "이동하기",
		jump_to_confirm: "확인하다",
		page: "페이지",
		prev_page: "이전 페이지",
		next_page: "다음 페이지",
		prev_5: "이전 5 페이지",
		next_5: "다음 5 페이지",
		prev_3: "이전 3 페이지",
		next_3: "다음 3 페이지",
		page_size: "페이지 크기"
	},
	DatePicker: {
		lang: {
			placeholder: "날짜 선택",
			yearPlaceholder: "연도 선택",
			quarterPlaceholder: "분기 선택",
			monthPlaceholder: "월 선택",
			weekPlaceholder: "주 선택",
			rangePlaceholder: ["시작일", "종료일"],
			rangeYearPlaceholder: ["시작 연도", "종료 연도"],
			rangeQuarterPlaceholder: ["시작 분기", "종료 분기"],
			rangeMonthPlaceholder: ["시작 월", "종료 월"],
			rangeWeekPlaceholder: ["시작 주", "종료 주"],
			locale: "ko_KR",
			today: "오늘",
			now: "현재 시각",
			backToToday: "오늘로 돌아가기",
			ok: "확인",
			clear: "지우기",
			month: "월",
			year: "년",
			timeSelect: "시간 선택",
			dateSelect: "날짜 선택",
			weekSelect: "주 선택",
			monthSelect: "달 선택",
			yearSelect: "연 선택",
			decadeSelect: "연대 선택",
			yearFormat: "YYYY년",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "Do",
			dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "이전 달 (PageUp)",
			nextMonth: "다음 달 (PageDown)",
			previousYear: "이전 해 (Control + left)",
			nextYear: "다음 해 (Control + right)",
			previousDecade: "이전 연대",
			nextDecade: "다음 연대",
			previousCentury: "이전 세기",
			nextCentury: "다음 세기"
		},
		timePickerLocale: {
			placeholder: "시간 선택",
			rangePlaceholder: ["시작 시간", "종료 시간"]
		}
	},
	TimePicker: {
		placeholder: "시간 선택",
		rangePlaceholder: ["시작 시간", "종료 시간"]
	},
	Calendar: {
		lang: {
			placeholder: "날짜 선택",
			yearPlaceholder: "연도 선택",
			quarterPlaceholder: "분기 선택",
			monthPlaceholder: "월 선택",
			weekPlaceholder: "주 선택",
			rangePlaceholder: ["시작일", "종료일"],
			rangeYearPlaceholder: ["시작 연도", "종료 연도"],
			rangeMonthPlaceholder: ["시작 월", "종료 월"],
			rangeWeekPlaceholder: ["시작 주", "종료 주"],
			locale: "ko_KR",
			today: "오늘",
			now: "현재 시각",
			backToToday: "오늘로 돌아가기",
			ok: "확인",
			clear: "지우기",
			month: "월",
			year: "년",
			timeSelect: "시간 선택",
			dateSelect: "날짜 선택",
			weekSelect: "주 선택",
			monthSelect: "달 선택",
			yearSelect: "연 선택",
			decadeSelect: "연대 선택",
			yearFormat: "YYYY년",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "Do",
			dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "이전 달 (PageUp)",
			nextMonth: "다음 달 (PageDown)",
			previousYear: "이전 해 (Control + left)",
			nextYear: "다음 해 (Control + right)",
			previousDecade: "이전 연대",
			nextDecade: "다음 연대",
			previousCentury: "이전 세기",
			nextCentury: "다음 세기"
		},
		timePickerLocale: {
			placeholder: "시간 선택",
			rangePlaceholder: ["시작 시간", "종료 시간"]
		}
	},
	global: { placeholder: "선택해 주세요" },
	Table: {
		filterTitle: "필터 메뉴",
		filterConfirm: "확인",
		filterReset: "초기화",
		filterEmptyText: "필터 없음",
		emptyText: "데이터 없음",
		selectAll: "모두 선택",
		selectInvert: "선택 반전",
		selectionAll: "전체 데이터 선택",
		sortTitle: "정렬",
		expand: "행 펼치기",
		collapse: "행 접기",
		triggerDesc: "내림차순 정렬",
		triggerAsc: "오름차순 정렬",
		cancelSort: "정렬 취소",
		filterCheckall: "전체 선택",
		filterSearchPlaceholder: "필터 검색",
		selectNone: "전체 선택 해제"
	},
	Modal: {
		okText: "확인",
		cancelText: "취소",
		justOkText: "확인"
	},
	Popconfirm: {
		okText: "확인",
		cancelText: "취소"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "여기에 검색하세요",
		itemUnit: "개",
		itemsUnit: "개",
		remove: "삭제",
		selectCurrent: "현재 페이지 선택",
		removeCurrent: "현재 페이지 삭제",
		selectAll: "전체 선택",
		removeAll: "전체 삭제",
		selectInvert: "현재 페이지 반전"
	},
	Upload: {
		uploading: "업로드 중...",
		removeFile: "파일 삭제",
		uploadError: "업로드 실패",
		previewFile: "파일 미리보기",
		downloadFile: "파일 다운로드"
	},
	Empty: { description: "데이터 없음" },
	Form: { optional: "(선택)" },
	Icon: { icon: "아이콘" },
	Text: {
		edit: "편집",
		copy: "복사",
		copied: "복사됨",
		expand: "펼치기"
	},
	PageHeader: { back: "뒤로" },
	Image: { preview: "미리보기" },
	CronExpression: {
		cronError: "잘못된 cron 표현식입니다",
		second: "초",
		minute: "분",
		hour: "시",
		day: "일",
		month: "월",
		week: "주"
	},
	QRCode: {
		expired: "QR 코드가 만료되었습니다",
		refresh: "새로고침",
		scanned: "스캔됨"
	},
	CheckList: {
		checkList: "체크리스트",
		checkListFinish: "목록을 모두 완료했습니다!",
		checkListClose: "닫기",
		checkListFooter: "더 이상 체크리스트가 필요하지 않습니다",
		checkListCheck: "목록을 닫으시겠습니까?",
		ok: "확인",
		cancel: "취소",
		checkListCheckOther: "다시 표시하지 않음"
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ku_IQ = {
	locale: "ku-iq",
	Pagination: {
		items_per_page: "/ rûpel",
		jump_to: "Biçe",
		jump_to_confirm: "piştrast bike",
		page: "",
		prev_page: "Rûpelê Pêş",
		next_page: "Rûpelê Paş",
		prev_5: "5 Rûpelên Pêş",
		next_5: "5 Rûpelên Paş",
		prev_3: "3 Rûpelên Pêş",
		next_3: "3 Rûpelên Paş",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Dîrok hilbijêre",
			rangePlaceholder: ["Dîroka destpêkê", "Dîroka dawîn"],
			locale: "ku",
			today: "Îro",
			now: "Niha",
			backToToday: "Vegere îro",
			ok: "Temam",
			clear: "Paqij bike",
			month: "Meh",
			year: "Sal",
			timeSelect: "Demê hilbijêre",
			dateSelect: "Dîrok hilbijêre",
			monthSelect: "Meh hilbijêre",
			yearSelect: "Sal hilbijêre",
			decadeSelect: "Dehsal hilbijêre",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Meha peş (PageUp))",
			nextMonth: "Meha paş (PageDown)",
			previousYear: "Sala peş (Control + şep)",
			nextYear: "Sala paş (Control + rast)",
			previousDecade: "Dehsalen peş",
			nextDecade: "Dehsalen paş",
			previousCentury: "Sedsalen peş",
			nextCentury: "Sedsalen paş"
		},
		timePickerLocale: { placeholder: "Demê hilbijêre" }
	},
	TimePicker: { placeholder: "Demê hilbijêre" },
	Calendar: {
		lang: {
			placeholder: "Dîrok hilbijêre",
			rangePlaceholder: ["Dîroka destpêkê", "Dîroka dawîn"],
			locale: "ku",
			today: "Îro",
			now: "Niha",
			backToToday: "Vegere îro",
			ok: "Temam",
			clear: "Paqij bike",
			month: "Meh",
			year: "Sal",
			timeSelect: "Demê hilbijêre",
			dateSelect: "Dîrok hilbijêre",
			monthSelect: "Meh hilbijêre",
			yearSelect: "Sal hilbijêre",
			decadeSelect: "Dehsal hilbijêre",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Meha peş (PageUp))",
			nextMonth: "Meha paş (PageDown)",
			previousYear: "Sala peş (Control + şep)",
			nextYear: "Sala paş (Control + rast)",
			previousDecade: "Dehsalen peş",
			nextDecade: "Dehsalen paş",
			previousCentury: "Sedsalen peş",
			nextCentury: "Sedsalen paş"
		},
		timePickerLocale: { placeholder: "Demê hilbijêre" }
	},
	Table: {
		filterTitle: "Menuê peldanka",
		filterConfirm: "Temam",
		filterReset: "Jê bibe",
		selectAll: "Hemî hilbijêre",
		selectInvert: "Hilbijartinan veguhere"
	},
	Modal: {
		okText: "Temam",
		cancelText: "Betal ke",
		justOkText: "Temam"
	},
	Popconfirm: {
		okText: "Temam",
		cancelText: "Betal ke"
	},
	Transfer: {
		searchPlaceholder: "Lêgerîn",
		itemUnit: "tişt",
		itemsUnit: "tişt"
	},
	Upload: {
		uploading: "Bardike...",
		removeFile: "Pelê rabike",
		uploadError: "Xeta barkirine",
		previewFile: "Pelê pêşbibîne",
		downloadFile: "Pelê dakêşin"
	},
	Empty: { description: "Agahî tune" },
	Form: { optional: "(êzîfî)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var lt_LT = {
	locale: "lt",
	Pagination: {
		items_per_page: "/ psl.",
		jump_to: "Pereiti",
		jump_to_confirm: "patvirtinti",
		page: "",
		prev_page: "Atgal",
		next_page: "Pirmyn",
		prev_5: "Grįžti 5 pls.",
		next_5: "Peršokti 5 pls.",
		prev_3: "Grįžti 3 pls.",
		next_3: "Peršokti 3 pls.",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Pasirinkite datą",
			yearPlaceholder: "Pasirinkite metus",
			quarterPlaceholder: "Pasirinkite ketvirtį",
			monthPlaceholder: "Pasirinkite mėnesį",
			weekPlaceholder: "Pasirinkite savaitę",
			rangePlaceholder: ["Pradžios data", "Pabaigos data"],
			rangeYearPlaceholder: ["Pradžios metai", "Pabaigos metai"],
			rangeMonthPlaceholder: ["Pradžios mėnesis", "Pabaigos mėnesis"],
			rangeWeekPlaceholder: ["Pradžios savaitė", "Pabaigos savaitė"],
			locale: "lt_LT",
			today: "Šiandien",
			now: "Dabar",
			backToToday: "Rodyti šiandien",
			ok: "Gerai",
			clear: "Išvalyti",
			month: "Mėnesis",
			year: "Metai",
			timeSelect: "Pasirinkti laiką",
			dateSelect: "Pasirinkti datą",
			monthSelect: "Pasirinkti mėnesį",
			yearSelect: "Pasirinkti metus",
			decadeSelect: "Pasirinkti dešimtmetį",
			yearFormat: "YYYY",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY-MM-DD HH:MM:SS",
			monthBeforeYear: true,
			previousMonth: "Buvęs mėnesis (PageUp)",
			nextMonth: "Sekantis mėnesis (PageDown)",
			previousYear: "Buvę metai (Control + left)",
			nextYear: "Sekantis metai (Control + right)",
			previousDecade: "Buvęs dešimtmetis",
			nextDecade: "Sekantis dešimtmetis",
			previousCentury: "Buvęs amžius",
			nextCentury: "Sekantis amžius"
		},
		timePickerLocale: {
			placeholder: "Pasirinkite laiką",
			rangePlaceholder: ["Pradžios laikas", "Pabaigos laikas"]
		}
	},
	TimePicker: {
		placeholder: "Pasirinkite laiką",
		rangePlaceholder: ["Pradžios laikas", "Pabaigos laikas"]
	},
	Calendar: {
		lang: {
			placeholder: "Pasirinkite datą",
			yearPlaceholder: "Pasirinkite metus",
			quarterPlaceholder: "Pasirinkite ketvirtį",
			monthPlaceholder: "Pasirinkite mėnesį",
			weekPlaceholder: "Pasirinkite savaitę",
			rangePlaceholder: ["Pradžios data", "Pabaigos data"],
			rangeYearPlaceholder: ["Pradžios metai", "Pabaigos metai"],
			rangeMonthPlaceholder: ["Pradžios mėnesis", "Pabaigos mėnesis"],
			rangeWeekPlaceholder: ["Pradžios savaitė", "Pabaigos savaitė"],
			locale: "lt_LT",
			today: "Šiandien",
			now: "Dabar",
			backToToday: "Rodyti šiandien",
			ok: "Gerai",
			clear: "Išvalyti",
			month: "Mėnesis",
			year: "Metai",
			timeSelect: "Pasirinkti laiką",
			dateSelect: "Pasirinkti datą",
			monthSelect: "Pasirinkti mėnesį",
			yearSelect: "Pasirinkti metus",
			decadeSelect: "Pasirinkti dešimtmetį",
			yearFormat: "YYYY",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY-MM-DD HH:MM:SS",
			monthBeforeYear: true,
			previousMonth: "Buvęs mėnesis (PageUp)",
			nextMonth: "Sekantis mėnesis (PageDown)",
			previousYear: "Buvę metai (Control + left)",
			nextYear: "Sekantis metai (Control + right)",
			previousDecade: "Buvęs dešimtmetis",
			nextDecade: "Sekantis dešimtmetis",
			previousCentury: "Buvęs amžius",
			nextCentury: "Sekantis amžius"
		},
		timePickerLocale: {
			placeholder: "Pasirinkite laiką",
			rangePlaceholder: ["Pradžios laikas", "Pabaigos laikas"]
		}
	},
	Table: {
		filterTitle: "Filtras",
		filterConfirm: "Gerai",
		filterReset: "Atstatyti",
		filterEmptyText: "Be filtrų",
		emptyText: "Nėra duomenų",
		selectAll: "Pasirinkti viską",
		selectInvert: "Apversti pasirinkimą",
		selectionAll: "Rinktis visus",
		sortTitle: "Rikiavimas",
		expand: "Išskleisti",
		collapse: "Suskleisti",
		triggerDesc: "Spustelėkite norėdami rūšiuoti mažėjančia tvarka",
		triggerAsc: "Spustelėkite norėdami rūšiuoti didėjančia tvarka",
		cancelSort: "Spustelėkite, kad atšauktumėte rūšiavimą"
	},
	Modal: {
		okText: "Taip",
		cancelText: "Atšaukti",
		justOkText: "Gerai"
	},
	Popconfirm: {
		okText: "Taip",
		cancelText: "Atšaukti"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Paieška",
		itemUnit: "vnt.",
		itemsUnit: "vnt.",
		remove: "Pašalinti",
		selectAll: "Pasirinkti visus",
		selectCurrent: "Pasirinkite dabartinį puslapį",
		selectInvert: "Atkeist pasirinkimą",
		removeAll: "Ištrinti visus duomenis",
		removeCurrent: "Ištrinti dabartinį puslapį"
	},
	Upload: {
		uploading: "Gaunami duomenys...",
		removeFile: "Ištrinti failą",
		uploadError: "Įkeliant įvyko klaida",
		previewFile: "Failo peržiūra",
		downloadFile: "Įkelti failą"
	},
	Empty: { description: "Nėra duomenų" },
	Icon: { icon: "piktograma" },
	Text: {
		edit: "Redaguoti",
		copy: "Kopijuoti",
		copied: "Nukopijuota",
		expand: "Plačiau"
	},
	PageHeader: { back: "Atgal" },
	Form: { optional: "(neprivaloma)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var lv_LV = {
	locale: "lv",
	Pagination: {
		items_per_page: "/ lappuse",
		jump_to: "iet uz",
		jump_to_confirm: "apstiprināt",
		page: "",
		prev_page: "Iepriekšējā lapa",
		next_page: "Nākamā lapa",
		prev_5: "Iepriekšējās 5 lapas",
		next_5: "Nākamās 5 lapas",
		prev_3: "Iepriekšējās 3 lapas",
		next_3: "Nākamās 3 lapas",
		page_size: "Lapas izmērs"
	},
	DatePicker: {
		lang: {
			placeholder: "Izvēlieties datumu",
			yearPlaceholder: "Izvēlieties gadu",
			quaterPlaceholder: "Izvēlieties ceturksni",
			monthPlaceholder: "Izvēlieties mēnesi",
			weekPlaceholder: "Izvēlieties nedēļu",
			rangePlaceholder: ["Sākuma datums", "Beigu datums"],
			rangeYearPlaceholder: ["Sākuma gads", "Beigu gads"],
			rangeMonthPlaceholder: ["Sākuma mēnesis", "Beigu mēnesis"],
			rangeWeekPlaceholder: ["Sākuma nedēļa", "Beigu nedēļa"],
			locale: "lv_LV",
			today: "Šodien",
			now: "Tagad",
			backToToday: "Atpakaļ uz šodienu",
			ok: "Ok",
			clear: "Notīrīt",
			month: "Mēnesis",
			year: "Gads",
			timeSelect: "Izvēlieties laiku",
			dateSelect: "Izvēlieties datumu",
			monthSelect: "Izvēlieties mēnesi",
			yearSelect: "Izvēlieties gadu",
			decadeSelect: "Izvēlieties dekādi",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Iepriekšējais mēnesis (PageUp)",
			nextMonth: "Nākammēnes (PageDown)",
			previousYear: "Pagājušais gads (Control + left)",
			nextYear: "Nākamgad (Control + right)",
			previousDecade: "Iepriekšējā dekāde",
			nextDecade: "Nākamā dekāde",
			previousCentury: "Pagājušajā gadsimtā",
			nextCentury: "Nākamajā gadsimtā"
		},
		timePickerLocale: {
			placeholder: "Izvēlieties laiku",
			rangePlaceholder: ["Sākuma laiks", "Beigu laiks"]
		}
	},
	TimePicker: {
		placeholder: "Izvēlieties laiku",
		rangePlaceholder: ["Sākuma laiks", "Beigu laiks"]
	},
	Calendar: {
		lang: {
			placeholder: "Izvēlieties datumu",
			yearPlaceholder: "Izvēlieties gadu",
			quarterPlaceholder: "Izvēlieties ceturksni",
			monthPlaceholder: "Izvēlieties mēnesi",
			weekPlaceholder: "Izvēlieties nedēļu",
			rangePlaceholder: ["Sākuma datums", "Beigu datums"],
			rangeYearPlaceholder: ["Sākuma gads", "Beigu gads"],
			rangeMonthPlaceholder: ["Sākuma mēnesis", "Beigu mēnesis"],
			rangeWeekPlaceholder: ["Sākuma nedēļa", "Beigu nedēļa"],
			locale: "lv_LV",
			today: "Šodien",
			now: "Tagad",
			backToToday: "Atpakaļ pie šodienas",
			ok: "Ok",
			clear: "Notīrīt",
			month: "Mēnesis",
			year: "Gads",
			timeSelect: "Izvēlieties laiku",
			dateSelect: "Izvēlieties datumu",
			monthSelect: "Izvēlieties mēnesi",
			yearSelect: "Izvēlieties gadu",
			decadeSelect: "Izvēlieties dekādi",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Iepriekšējais mēnesis (PageUp)",
			nextMonth: "Nākammēnes (PageDown)",
			previousYear: "Pagājušais gads (Control + left)",
			nextYear: "Nākamgad (Control + right)",
			previousDecade: "Iepriekšējā dekāde",
			nextDecade: "Nākamā dekāde",
			previousCentury: "Pagājušajā gadsimtā",
			nextCentury: "Nākamajā gadsimtā"
		},
		timePickerLocale: {
			placeholder: "Izvēlieties laiku",
			rangePlaceholder: ["Sākuma laiks", "Beigu laiks"]
		}
	},
	global: { placeholder: "Lūdzu izvēlieties" },
	Table: {
		filterTitle: "Filtrēšanas izvēlne",
		filterConfirm: "OK",
		filterReset: "Atiestatīt",
		filterEmptyText: "Nav filtru",
		emptyText: "Nav datu",
		selectAll: "Atlasīt pašreizējo lapu",
		selectInvert: "Pārvērst pašreizējo lapu",
		selectionAll: "Izvēlēties visu",
		sortTitle: "Kārtot",
		expand: "Izvērst",
		collapse: "Aizvērt",
		triggerDesc: "Nospiediet lai kārtotu dilstošā secībā",
		triggerAsc: "Nospiediet lai kārtotu augošā secībā",
		cancelSort: "Nospiediet lai atceltu kārtošanu",
		filterCheckall: "Izvēlēties visus ierakstus",
		filterSearchPlaceholder: "Meklēt filtros",
		selectNone: "Notīrīt visus datus"
	},
	Modal: {
		okText: "OK",
		cancelText: "Atcelt",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Atcelt"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Meklēt šeit",
		itemUnit: "vienumu",
		itemsUnit: "vienumus",
		remove: "Noņemt",
		selectCurrent: "Izvēlēties pašreizējo lapu",
		removeCurrent: "Noņemt pašreizējo lapu",
		selectAll: "Izvēlēties visus datus",
		removeAll: "Noņemt visus datus",
		selectInvert: "Pārvērst pašreizējo lapu"
	},
	Upload: {
		uploading: "Augšupielāde...",
		removeFile: "Noņemt failu",
		uploadError: "Augšupielādes kļūda",
		previewFile: "Priekšskatiet failu",
		downloadFile: "Lejupielādēt failu"
	},
	Empty: { description: "Nav datu" },
	Icon: { icon: "ikona" },
	Text: {
		edit: "Labot",
		copy: "Kopēt",
		copied: "Nokopēts",
		expand: "Izvērst"
	},
	PageHeader: { back: "Atpakaļ" },
	Image: { preview: "Priekšskatījums" },
	CronExpression: {
		cronError: "Nekorekta cron izteiksme",
		second: "sekunde",
		minute: "minūte",
		hour: "stunda",
		day: "diena",
		month: "mēnesis",
		week: "nedēļa"
	},
	QRCode: {
		expired: "QR koda termiņš ir beidzies",
		refresh: "Atjaunot",
		scanned: "Skenēts"
	},
	Form: { optional: "(nepieciešams)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var mk_MK = {
	locale: "mk",
	Pagination: {
		items_per_page: "/ стр",
		jump_to: "Оди на",
		jump_to_confirm: "потврди",
		page: "",
		prev_page: "Претходна страница",
		next_page: "Наредна страница",
		prev_5: "Претходни 5 страници",
		next_5: "Наредни 5 страници",
		prev_3: "Претходни 3 страници",
		next_3: "Наредни 3 страници",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Избери датум",
			rangePlaceholder: ["Од датум", "До датум"],
			locale: "mk_MK",
			today: "Денес",
			now: "Сега",
			backToToday: "Назад до денес",
			ok: "ОК",
			clear: "Избриши",
			month: "Месец",
			year: "Година",
			timeSelect: "Избери време",
			dateSelect: "Избери датум",
			monthSelect: "Избери месец",
			yearSelect: "Избери година",
			decadeSelect: "Избери деценија",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Претходен месец (PageUp)",
			nextMonth: "Нареден месец (PageDown)",
			previousYear: "Претходна година (Control + left)",
			nextYear: "Наредна година (Control + right)",
			previousDecade: "Претходна деценија",
			nextDecade: "Наредна деценија",
			previousCentury: "Претходен век",
			nextCentury: "Нареден век"
		},
		timePickerLocale: { placeholder: "Избери време" }
	},
	TimePicker: { placeholder: "Избери време" },
	Calendar: {
		lang: {
			placeholder: "Избери датум",
			rangePlaceholder: ["Од датум", "До датум"],
			locale: "mk_MK",
			today: "Денес",
			now: "Сега",
			backToToday: "Назад до денес",
			ok: "ОК",
			clear: "Избриши",
			month: "Месец",
			year: "Година",
			timeSelect: "Избери време",
			dateSelect: "Избери датум",
			monthSelect: "Избери месец",
			yearSelect: "Избери година",
			decadeSelect: "Избери деценија",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Претходен месец (PageUp)",
			nextMonth: "Нареден месец (PageDown)",
			previousYear: "Претходна година (Control + left)",
			nextYear: "Наредна година (Control + right)",
			previousDecade: "Претходна деценија",
			nextDecade: "Наредна деценија",
			previousCentury: "Претходен век",
			nextCentury: "Нареден век"
		},
		timePickerLocale: { placeholder: "Избери време" }
	},
	global: { placeholder: "Ве молиме означете" },
	Table: {
		filterTitle: "Мени за филтрирање",
		filterConfirm: "ОК",
		filterReset: "Избриши",
		selectAll: "Одбери страница",
		selectInvert: "Инвертирај страница"
	},
	Modal: {
		okText: "ОК",
		cancelText: "Откажи",
		justOkText: "ОК"
	},
	Popconfirm: {
		okText: "ОК",
		cancelText: "Откажи"
	},
	Transfer: {
		searchPlaceholder: "Пребарај тука",
		itemUnit: "предмет",
		itemsUnit: "предмети"
	},
	Upload: {
		uploading: "Се прикачува...",
		removeFile: "Избриши фајл",
		uploadError: "Грешка при прикачување",
		previewFile: "Прикажи фајл",
		downloadFile: "Преземи фајл"
	},
	Empty: { description: "Нема податоци" },
	Icon: { icon: "Икона" },
	Text: {
		edit: "Уреди",
		copy: "Копирај",
		copied: "Копирано",
		expand: "Зголеми"
	},
	PageHeader: { back: "Назад" },
	Form: { optional: "(незадолжително)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ml_IN = {
	locale: "ml",
	Pagination: {
		items_per_page: "/ പേജ്",
		jump_to: "അടുത്തത്",
		jump_to_confirm: "ഉറപ്പാക്കുക",
		page: "",
		prev_page: "മുൻപുള്ള പേജ്",
		next_page: "അടുത്ത പേജ്",
		prev_5: "മുൻപുള്ള 5 പേജുകൾ",
		next_5: "അടുത്ത 5 പേജുകൾ",
		prev_3: "മുൻപുള്ള 3 പേജുകൾ",
		next_3: "അടുത്ത 3 പേജുകൾ",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "തിയതി തിരഞ്ഞെടുക്കുക",
			yearPlaceholder: "വർഷം തിരഞ്ഞെടുക്കുക",
			quarterPlaceholder: "ത്രൈമാസം തിരഞ്ഞെടുക്കുക",
			monthPlaceholder: "മാസം തിരഞ്ഞെടുക്കുക",
			weekPlaceholder: "വാരം തിരഞ്ഞെടുക്കുക",
			rangePlaceholder: ["ആരംഭ ദിനം", "അവസാന ദിനം"],
			rangeYearPlaceholder: ["ആരംഭ വർഷം", "അവസാന വർഷം"],
			rangeMonthPlaceholder: ["ആരംഭ മാസം", "അവസാന മാസം"],
			rangeWeekPlaceholder: ["ആരംഭ വാരം", "അവസാന വാരം"],
			locale: "ml_IN",
			today: "ഇന്ന്",
			now: "ഇപ്പോൾ",
			backToToday: "ഇന്നത്തെ ദിവസത്തിലേക്ക് തിരിച്ചു പോകുക",
			ok: "ശരിയാണ്",
			clear: "നീക്കം ചെയ്യുക",
			month: "മാസം",
			year: "വർഷം",
			timeSelect: "സമയം തിരഞ്ഞെടുക്കുക",
			dateSelect: "ദിവസം തിരഞ്ഞെടുക്കുക",
			weekSelect: "വാരം തിരഞ്ഞെടുക്കുക",
			monthSelect: "മാസം തിരഞ്ഞെടുക്കുക",
			yearSelect: "വർഷം തിരഞ്ഞെടുക്കുക",
			decadeSelect: "ദശാബ്ദം തിരഞ്ഞെടുക്കുക",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "കഴിഞ്ഞ മാസം (PageUp)",
			nextMonth: "അടുത്ത മാസം (PageDown)",
			previousYear: "കഴിഞ്ഞ വർഷം (Control + left)",
			nextYear: "അടുത്ത വർഷം (Control + right)",
			previousDecade: "കഴിഞ്ഞ ദശാബ്ദം",
			nextDecade: "അടുത്ത ദശാബ്ദം",
			previousCentury: "കഴിഞ്ഞ നൂറ്റാണ്ട്",
			nextCentury: "അടുത്ത നൂറ്റാണ്ട്"
		},
		timePickerLocale: {
			placeholder: "സമയം തിരഞ്ഞെടുക്കുക",
			rangePlaceholder: ["ആരംഭ സമയം", "അവസാന സമയം"]
		}
	},
	TimePicker: {
		placeholder: "സമയം തിരഞ്ഞെടുക്കുക",
		rangePlaceholder: ["ആരംഭ സമയം", "അവസാന സമയം"]
	},
	Calendar: {
		lang: {
			placeholder: "തിയതി തിരഞ്ഞെടുക്കുക",
			yearPlaceholder: "വർഷം തിരഞ്ഞെടുക്കുക",
			quarterPlaceholder: "ത്രൈമാസം തിരഞ്ഞെടുക്കുക",
			monthPlaceholder: "മാസം തിരഞ്ഞെടുക്കുക",
			weekPlaceholder: "വാരം തിരഞ്ഞെടുക്കുക",
			rangePlaceholder: ["ആരംഭ ദിനം", "അവസാന ദിനം"],
			rangeYearPlaceholder: ["ആരംഭ വർഷം", "അവസാന വർഷം"],
			rangeMonthPlaceholder: ["ആരംഭ മാസം", "അവസാന മാസം"],
			rangeWeekPlaceholder: ["ആരംഭ വാരം", "അവസാന വാരം"],
			locale: "ml_IN",
			today: "ഇന്ന്",
			now: "ഇപ്പോൾ",
			backToToday: "ഇന്നത്തെ ദിവസത്തിലേക്ക് തിരിച്ചു പോകുക",
			ok: "ശരിയാണ്",
			clear: "നീക്കം ചെയ്യുക",
			month: "മാസം",
			year: "വർഷം",
			timeSelect: "സമയം തിരഞ്ഞെടുക്കുക",
			dateSelect: "ദിവസം തിരഞ്ഞെടുക്കുക",
			weekSelect: "വാരം തിരഞ്ഞെടുക്കുക",
			monthSelect: "മാസം തിരഞ്ഞെടുക്കുക",
			yearSelect: "വർഷം തിരഞ്ഞെടുക്കുക",
			decadeSelect: "ദശാബ്ദം തിരഞ്ഞെടുക്കുക",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "കഴിഞ്ഞ മാസം (PageUp)",
			nextMonth: "അടുത്ത മാസം (PageDown)",
			previousYear: "കഴിഞ്ഞ വർഷം (Control + left)",
			nextYear: "അടുത്ത വർഷം (Control + right)",
			previousDecade: "കഴിഞ്ഞ ദശാബ്ദം",
			nextDecade: "അടുത്ത ദശാബ്ദം",
			previousCentury: "കഴിഞ്ഞ നൂറ്റാണ്ട്",
			nextCentury: "അടുത്ത നൂറ്റാണ്ട്"
		},
		timePickerLocale: {
			placeholder: "സമയം തിരഞ്ഞെടുക്കുക",
			rangePlaceholder: ["ആരംഭ സമയം", "അവസാന സമയം"]
		}
	},
	global: { placeholder: "ദയവായി തിരഞ്ഞെടുക്കുക" },
	Table: {
		filterTitle: "ഫിൽറ്റർ",
		filterConfirm: "ശരിയാണ്",
		filterReset: "പുനഃക്രമീകരിക്കുക",
		filterEmptyText: "ഫിൽറ്ററുകളൊന്നുമില്ല",
		emptyText: "ഡാറ്റയൊന്നുമില്ല",
		selectAll: "നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക",
		selectInvert: "നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക",
		selectNone: "എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക",
		selectionAll: "എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക",
		sortTitle: "ക്രമമാക്കുക",
		expand: "വരി വികസിപ്പിക്കുക",
		collapse: "വരി ചുരുക്കുക",
		triggerDesc: "അവരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക",
		triggerAsc: "ആരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക",
		cancelSort: "ക്രമീകരണം ഒഴിവാക്കുന്നതിനായി ക്ലിക്ക് ചെയ്യുക"
	},
	Modal: {
		okText: "ശരിയാണ്",
		cancelText: "റദ്ദാക്കുക",
		justOkText: "ശരിയാണ്"
	},
	Popconfirm: {
		okText: "ശരിയാണ്",
		cancelText: "റദ്ദാക്കുക"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "ഇവിടെ തിരയുക",
		itemUnit: "ഇനം",
		itemsUnit: "ഇനങ്ങൾ",
		remove: "നീക്കം ചെയ്യുക",
		selectCurrent: "നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക",
		removeCurrent: "നിലവിലെ പേജ് നീക്കം ചെയ്യുക",
		selectAll: "എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക",
		removeAll: "എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക",
		selectInvert: "നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക"
	},
	Upload: {
		uploading: "അപ്‌ലോഡ് ചെയ്തു കൊണ്ടിരിക്കുന്നു...",
		removeFile: "ഫയൽ നീക്കം ചെയ്യുക",
		uploadError: "അപ്‌ലോഡിൽ പിശക് സംഭവിച്ചിരിക്കുന്നു",
		previewFile: "ഫയൽ പ്രിവ്യൂ ചെയ്യുക",
		downloadFile: "ഫയൽ ഡൗൺലോഡ് ചെയ്യുക"
	},
	Empty: { description: "ഡാറ്റയൊന്നുമില്ല" },
	Icon: { icon: "ഐക്കൺ" },
	Text: {
		edit: "തിരുത്തുക",
		copy: "കോപ്പി ചെയ്യുക",
		copied: "കോപ്പി ചെയ്തു",
		expand: "വികസിപ്പിക്കുക"
	},
	PageHeader: { back: "തിരികെ" },
	Image: { preview: "പ്രിവ്യൂ" },
	Form: { optional: "(ആവശ്യകമായ)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var mn_MN = {
	locale: "mn-mn",
	Pagination: {
		items_per_page: "/ хуудас",
		jump_to: "Шилжих",
		jump_to_confirm: "сонгох",
		page: "",
		prev_page: "Өмнөх хуудас",
		next_page: "Дараагийн хуудас",
		prev_5: "Дараагийн 5 хуудас",
		next_5: "Дараагийн 5 хуудас",
		prev_3: "Дараагийн 3 хуудас",
		next_3: "Дараагийн 3 хуудас",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Огноо сонгох",
			rangePlaceholder: ["Эхлэх огноо", "Дуусах огноо"],
			locale: "mn_MN",
			today: "Өнөөдөр",
			now: "Одоо",
			backToToday: "Өнөөдөрлүү буцах",
			ok: "Ok",
			clear: "Цэвэрлэх",
			month: "Сар",
			year: "Жил",
			timeSelect: "Цаг сонгох",
			dateSelect: "Огноо сонгох",
			weekSelect: "7 хоног сонгох",
			monthSelect: "Сар сонгох",
			yearSelect: "Жил сонгох",
			decadeSelect: "Арван сонгох",
			yearFormat: "YYYY",
			dateFormat: "YYYY/MM/DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Өмнөх сар (PageUp)",
			nextMonth: "Дараа сар (PageDown)",
			previousYear: "Өмнөх жил (Control + left)",
			nextYear: "Дараа жил (Control + right)",
			previousDecade: "Өмнөх арван",
			nextDecade: "Дараа арван",
			previousCentury: "Өмнөх зуун",
			nextCentury: "Дараа зуун"
		},
		timePickerLocale: { placeholder: "Цаг сонгох" }
	},
	TimePicker: { placeholder: "Цаг сонгох" },
	Calendar: {
		lang: {
			placeholder: "Огноо сонгох",
			rangePlaceholder: ["Эхлэх огноо", "Дуусах огноо"],
			locale: "mn_MN",
			today: "Өнөөдөр",
			now: "Одоо",
			backToToday: "Өнөөдөрлүү буцах",
			ok: "Ok",
			clear: "Цэвэрлэх",
			month: "Сар",
			year: "Жил",
			timeSelect: "Цаг сонгох",
			dateSelect: "Огноо сонгох",
			weekSelect: "7 хоног сонгох",
			monthSelect: "Сар сонгох",
			yearSelect: "Жил сонгох",
			decadeSelect: "Арван сонгох",
			yearFormat: "YYYY",
			dateFormat: "YYYY/MM/DD",
			dayFormat: "DD",
			dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Өмнөх сар (PageUp)",
			nextMonth: "Дараа сар (PageDown)",
			previousYear: "Өмнөх жил (Control + left)",
			nextYear: "Дараа жил (Control + right)",
			previousDecade: "Өмнөх арван",
			nextDecade: "Дараа арван",
			previousCentury: "Өмнөх зуун",
			nextCentury: "Дараа зуун"
		},
		timePickerLocale: { placeholder: "Цаг сонгох" }
	},
	Table: {
		filterTitle: "Хайх цэс",
		filterConfirm: "OK",
		filterReset: "Цэвэрлэх",
		selectAll: "Бүгдийг сонгох",
		selectInvert: "Бусдыг сонгох"
	},
	Modal: {
		okText: "OK",
		cancelText: "Цуцлах",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Цуцлах"
	},
	Transfer: {
		searchPlaceholder: "Хайх",
		itemUnit: "Зүйл",
		itemsUnit: "Зүйлүүд"
	},
	Upload: {
		uploading: "Хуулж байна...",
		removeFile: "Файл устгах",
		uploadError: "Хуулахад алдаа гарлаа",
		previewFile: "Файлыг түргэн үзэх",
		downloadFile: "Файлыг татах"
	},
	Empty: { description: "Мэдээлэл байхгүй байна" },
	Form: { optional: "(заавалгүй)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ms_MY = {
	locale: "ms-my",
	Pagination: {
		items_per_page: "/ halaman",
		jump_to: "Lompat ke",
		jump_to_confirm: "Sahkan",
		page: "",
		prev_page: "Halaman sebelumnya",
		next_page: "Halam seterusnya",
		prev_5: "5 halaman sebelum",
		next_5: "5 halaman seterusnya",
		prev_3: "3 halaman sebelumnya",
		next_3: "3 halaman seterusnya",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Pilih tarikh",
			rangePlaceholder: ["Tarikh mula", "Tarikh akhir"],
			locale: "ms_MY",
			today: "Hari ini",
			now: "Sekarang",
			backToToday: "Kembali ke hari ini",
			ok: "Ok",
			timeSelect: "Pilih masa",
			dateSelect: "Pilih tarikh",
			weekSelect: "Pilih minggu",
			clear: "Padam",
			month: "Bulan",
			year: "Tahun",
			previousMonth: "Bulan lepas",
			nextMonth: "Bulan depan",
			monthSelect: "Pilih bulan",
			yearSelect: "Pilih tahun",
			decadeSelect: "Pilih dekad",
			yearFormat: "YYYY",
			dayFormat: "D",
			dateFormat: "M/D/YYYY",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			previousYear: "Tahun lepas (Ctrl+left)",
			nextYear: "Tahun depan (Ctrl+right)",
			previousDecade: "Dekad lepas",
			nextDecade: "Dekad depan",
			previousCentury: "Abad lepas",
			nextCentury: "Abad depan"
		},
		timePickerLocale: { placeholder: "Sila pilih masa" }
	},
	TimePicker: { placeholder: "Sila pilih masa" },
	Calendar: {
		lang: {
			placeholder: "Pilih tarikh",
			rangePlaceholder: ["Tarikh mula", "Tarikh akhir"],
			locale: "ms_MY",
			today: "Hari ini",
			now: "Sekarang",
			backToToday: "Kembali ke hari ini",
			ok: "Ok",
			timeSelect: "Pilih masa",
			dateSelect: "Pilih tarikh",
			weekSelect: "Pilih minggu",
			clear: "Padam",
			month: "Bulan",
			year: "Tahun",
			previousMonth: "Bulan lepas",
			nextMonth: "Bulan depan",
			monthSelect: "Pilih bulan",
			yearSelect: "Pilih tahun",
			decadeSelect: "Pilih dekad",
			yearFormat: "YYYY",
			dayFormat: "D",
			dateFormat: "M/D/YYYY",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			previousYear: "Tahun lepas (Ctrl+left)",
			nextYear: "Tahun depan (Ctrl+right)",
			previousDecade: "Dekad lepas",
			nextDecade: "Dekad depan",
			previousCentury: "Abad lepas",
			nextCentury: "Abad depan"
		},
		timePickerLocale: { placeholder: "Sila pilih masa" }
	},
	global: { placeholder: "Sila pilih" },
	PageHeader: { back: "Kembali" },
	Text: {
		edit: "Sunting",
		copy: "Salin",
		copied: "Berjaya menyalin",
		expand: "Kembang"
	},
	Empty: { description: "Tiada data" },
	Table: {
		filterTitle: "Cari dengan tajuk",
		filterConfirm: "OK",
		filterReset: "Menetapkan semula",
		emptyText: "Tiada data",
		selectAll: "Pilih semua",
		selectInvert: "Terbalikkan"
	},
	Modal: {
		okText: "OK",
		cancelText: "Batal",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Batal"
	},
	Transfer: {
		notFoundContent: "Tidak dijumpai",
		searchPlaceholder: "Carian di sini",
		itemUnit: "item",
		itemsUnit: "item"
	},
	Icon: { icon: "ikon" },
	Select: { notFoundContent: "Tidak Dijumpai" },
	Upload: {
		uploading: "Sedang memuat naik...",
		removeFile: "Buang fail",
		uploadError: "Masalah muat naik",
		previewFile: "Tengok fail",
		downloadFile: "Muat turun fail"
	},
	Form: { optional: "(pilihan)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var nb_NO = {
	locale: "nb",
	Pagination: {
		items_per_page: "/ side",
		jump_to: "Gå til side",
		jump_to_confirm: "bekreft",
		page: "Side",
		prev_page: "Forrige side",
		next_page: "Neste side",
		prev_5: "5 forrige",
		next_5: "5 neste",
		prev_3: "3 forrige",
		next_3: "3 neste",
		page_size: "sidestørrelse"
	},
	DatePicker: {
		lang: {
			placeholder: "Velg dato",
			yearPlaceholder: "Velg år",
			quarterPlaceholder: "Velg kvartal",
			monthPlaceholder: "Velg måned",
			weekPlaceholder: "Velg uke",
			rangePlaceholder: ["Startdato", "Sluttdato"],
			rangeYearPlaceholder: ["Startår", "Sluttår"],
			rangeQuarterPlaceholder: ["Startkvartal", "Sluttkvartal"],
			rangeMonthPlaceholder: ["Startmåned", "Sluttmåned"],
			rangeWeekPlaceholder: ["Start uke", "Sluttuke"],
			locale: "nb_NO",
			today: "I dag",
			now: "Nå",
			backToToday: "Gå til i dag",
			ok: "Ok",
			clear: "Annuller",
			month: "Måned",
			year: "År",
			timeSelect: "Velg tidspunkt",
			dateSelect: "Velg dato",
			weekSelect: "Velg uke",
			monthSelect: "Velg måned",
			yearSelect: "Velg år",
			decadeSelect: "Velg tiår",
			yearFormat: "YYYY",
			dateFormat: "DD.MM.YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Forrige måned (PageUp)",
			nextMonth: "Neste måned (PageDown)",
			previousYear: "Forrige år (Control + venstre)",
			nextYear: "Neste år (Control + høyre)",
			previousDecade: "Forrige tiår",
			nextDecade: "Neste tiår",
			previousCentury: "Forrige århundre",
			nextCentury: "Neste århundre"
		},
		timePickerLocale: {
			placeholder: "Velg tid",
			rangePlaceholder: ["Starttid", "Sluttid"]
		}
	},
	TimePicker: {
		placeholder: "Velg tid",
		rangePlaceholder: ["Starttid", "Sluttid"]
	},
	Calendar: {
		lang: {
			placeholder: "Velg dato",
			yearPlaceholder: "Velg år",
			quarterPlaceholder: "Velg kvartal",
			monthPlaceholder: "Velg måned",
			weekPlaceholder: "Velg uke",
			rangePlaceholder: ["Startdato", "Sluttdato"],
			rangeYearPlaceholder: ["Startår", "Sluttår"],
			rangeMonthPlaceholder: ["Startmåned", "Sluttmåned"],
			rangeWeekPlaceholder: ["Start uke", "Sluttuke"],
			locale: "nb_NO",
			today: "I dag",
			now: "Nå",
			backToToday: "Gå til i dag",
			ok: "Ok",
			clear: "Annuller",
			month: "Måned",
			year: "År",
			timeSelect: "Velg tidspunkt",
			dateSelect: "Velg dato",
			weekSelect: "Velg uke",
			monthSelect: "Velg måned",
			yearSelect: "Velg år",
			decadeSelect: "Velg tiår",
			yearFormat: "YYYY",
			dateFormat: "DD.MM.YYYY",
			dayFormat: "DD",
			dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Forrige måned (PageUp)",
			nextMonth: "Neste måned (PageDown)",
			previousYear: "Forrige år (Control + venstre)",
			nextYear: "Neste år (Control + høyre)",
			previousDecade: "Forrige tiår",
			nextDecade: "Neste tiår",
			previousCentury: "Forrige århundre",
			nextCentury: "Neste århundre"
		},
		timePickerLocale: {
			placeholder: "Velg tid",
			rangePlaceholder: ["Starttid", "Sluttid"]
		}
	},
	global: { placeholder: "Vennligst velg" },
	Table: {
		filterTitle: "Filtermeny",
		filterConfirm: "OK",
		filterReset: "Nullstill",
		filterEmptyText: "Ingen filtre",
		emptyText: "Ingen data",
		selectAll: "Velg alle",
		selectInvert: "Inverter gjeldende side",
		selectionAll: "Velg all data",
		sortTitle: "Sorter",
		expand: "Utvid rad",
		collapse: "Skjul rad",
		triggerDesc: "Sorter data i synkende rekkefølge",
		triggerAsc: "Sorterer data i stigende rekkefølge",
		cancelSort: "Klikk for å avbryte sorteringen",
		filterCheckall: "Velg alle elementer",
		filterSearchPlaceholder: "Søk i filtre",
		selectNone: "Tøm alle data"
	},
	Modal: {
		okText: "OK",
		cancelText: "Avbryt",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Avbryt"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Søk her",
		itemUnit: "element",
		itemsUnit: "elementer",
		remove: "Fjern",
		selectCurrent: "Velg gjeldende side",
		removeCurrent: "Fjern gjeldende side",
		selectAll: "Velg all data",
		removeAll: "Fjern all data",
		selectInvert: "Inverter gjeldende side"
	},
	Upload: {
		uploading: "Laster opp...",
		removeFile: "Fjern fil",
		uploadError: "Feil ved opplastning",
		previewFile: "Forhåndsvisning",
		downloadFile: "Last ned fil"
	},
	Empty: { description: "Ingen data" },
	Icon: { icon: "ikon" },
	Text: {
		edit: "Rediger",
		copy: "Kopier",
		copied: "Kopiert",
		expand: "Utvid"
	},
	PageHeader: { back: "Tilbake" },
	Image: { preview: "Forhåndsvis" },
	CronExpression: {
		cronError: "Ugyldig cron-uttrykk",
		second: "sekund",
		minute: "minutt",
		hour: "time",
		day: "dag",
		month: "måned",
		week: "uke"
	},
	QRCode: {
		expired: "QR-koden er utløpt",
		refresh: "Oppdater",
		scanned: "Skannet"
	},
	Form: { optional: "(valgfritt)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ne_NP = {
	locale: "ne-np",
	Pagination: {
		items_per_page: "/ page",
		jump_to: "Go to",
		jump_to_confirm: "confirm",
		page: "Page",
		prev_page: "Previous Page",
		next_page: "Next Page",
		prev_5: "Previous 5 Pages",
		next_5: "Next 5 Pages",
		prev_3: "Previous 3 Pages",
		next_3: "Next 3 Pages",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_US",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	TimePicker: {
		placeholder: "Select time",
		rangePlaceholder: ["Start time", "End time"]
	},
	Calendar: {
		lang: {
			placeholder: "Select date",
			yearPlaceholder: "Select year",
			quarterPlaceholder: "Select quarter",
			monthPlaceholder: "Select month",
			weekPlaceholder: "Select week",
			rangePlaceholder: ["Start date", "End date"],
			rangeYearPlaceholder: ["Start year", "End year"],
			rangeMonthPlaceholder: ["Start month", "End month"],
			rangeWeekPlaceholder: ["Start week", "End week"],
			locale: "en_US",
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		},
		timePickerLocale: {
			placeholder: "Select time",
			rangePlaceholder: ["Start time", "End time"]
		}
	},
	Table: {
		filterTitle: "फिल्टर मेनु",
		filterConfirm: "हो",
		filterReset: "रीसेट",
		selectAll: "सबै छान्नुुहोस्",
		selectInvert: "छनौट उल्टाउनुहोस"
	},
	Modal: {
		okText: "हो",
		cancelText: "होईन",
		justOkText: "हो"
	},
	Popconfirm: {
		okText: "हो",
		cancelText: "होईन"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "यहाँ खोज्नुहोस्",
		itemUnit: "वस्तु",
		itemsUnit: "वस्तुहरू"
	},
	Upload: {
		uploading: "अपलोड गर्दै...",
		removeFile: "फाइल हटाउनुहोस्",
		uploadError: "अप्लोडमा समस्या भयो",
		previewFile: "फाइल पूर्वावलोकन गर्नुहोस्",
		downloadFile: "डाउनलोड फाइल"
	},
	Empty: { description: "डाटा छैन" },
	Form: { optional: "(वैकल्पिक)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var nl_BE = {
	locale: "nl-be",
	Pagination: {
		items_per_page: "/ pagina",
		jump_to: "Ga naar",
		jump_to_confirm: "bevestigen",
		page: "",
		prev_page: "Vorige pagina",
		next_page: "Volgende pagina",
		prev_5: "Vorige 5 pagina's",
		next_5: "Volgende 5 pagina's",
		prev_3: "Vorige 3 pagina's",
		next_3: "Volgende 3 pagina's",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Selecteer datum",
			rangePlaceholder: ["Begin datum", "Eind datum"],
			locale: "nl_BE",
			today: "Vandaag",
			now: "Nu",
			backToToday: "Terug naar vandaag",
			ok: "Ok",
			clear: "Reset",
			month: "Maand",
			year: "Jaar",
			timeSelect: "Selecteer tijd",
			dateSelect: "Selecteer datum",
			monthSelect: "Kies een maand",
			yearSelect: "Kies een jaar",
			decadeSelect: "Kies een decennium",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorige maand (PageUp)",
			nextMonth: "Volgende maand (PageDown)",
			previousYear: "Vorig jaar (Control + left)",
			nextYear: "Volgend jaar (Control + right)",
			previousDecade: "Vorig decennium",
			nextDecade: "Volgend decennium",
			previousCentury: "Vorige eeuw",
			nextCentury: "Volgende eeuw",
			monthPlaceholder: "Selecteer maand",
			quarterPlaceholder: "Selecteer kwartaal",
			rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
			rangeWeekPlaceholder: ["Begin week", "Eind week"],
			rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
			weekPlaceholder: "Selecteer week",
			yearPlaceholder: "Selecteer jaar"
		},
		timePickerLocale: {
			placeholder: "Selecteer tijd",
			rangePlaceholder: ["Start tijd", "Eind tijd"]
		}
	},
	TimePicker: {
		placeholder: "Selecteer tijd",
		rangePlaceholder: ["Start tijd", "Eind tijd"]
	},
	Calendar: {
		lang: {
			placeholder: "Selecteer datum",
			rangePlaceholder: ["Begin datum", "Eind datum"],
			locale: "nl_BE",
			today: "Vandaag",
			now: "Nu",
			backToToday: "Terug naar vandaag",
			ok: "Ok",
			clear: "Reset",
			month: "Maand",
			year: "Jaar",
			timeSelect: "Selecteer tijd",
			dateSelect: "Selecteer datum",
			monthSelect: "Kies een maand",
			yearSelect: "Kies een jaar",
			decadeSelect: "Kies een decennium",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorige maand (PageUp)",
			nextMonth: "Volgende maand (PageDown)",
			previousYear: "Vorig jaar (Control + left)",
			nextYear: "Volgend jaar (Control + right)",
			previousDecade: "Vorig decennium",
			nextDecade: "Volgend decennium",
			previousCentury: "Vorige eeuw",
			nextCentury: "Volgende eeuw",
			monthPlaceholder: "Selecteer maand",
			quarterPlaceholder: "Selecteer kwartaal",
			rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
			rangeWeekPlaceholder: ["Begin week", "Eind week"],
			rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
			weekPlaceholder: "Selecteer week",
			yearPlaceholder: "Selecteer jaar"
		},
		timePickerLocale: {
			placeholder: "Selecteer tijd",
			rangePlaceholder: ["Start tijd", "Eind tijd"]
		}
	},
	Table: {
		filterTitle: "Filteren",
		filterConfirm: "OK",
		filterReset: "Reset",
		selectAll: "Selecteer huidige pagina",
		selectInvert: "Keer volgorde om",
		cancelSort: "Klik om sortering te annuleren",
		collapse: "Rij inklappen",
		emptyText: "Geen data",
		expand: "Rij uitklappen",
		filterEmptyText: "Geen filters",
		selectNone: "Maak selectie leeg",
		selectionAll: "Selecteer alle data",
		sortTitle: "Sorteren",
		triggerAsc: "Klik om oplopend te sorteren",
		triggerDesc: "Klik om aflopend te sorteren"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annuleer",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annuleer"
	},
	Transfer: {
		searchPlaceholder: "Zoek hier",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Verwijder",
		removeAll: "Verwijder alles",
		removeCurrent: "Verwijder huidige pagina",
		selectAll: "Selecteer alles",
		selectCurrent: "Selecteer huidige pagina",
		selectInvert: "Huidige pagina omkeren",
		titles: ["", ""]
	},
	Upload: {
		uploading: "Uploaden...",
		removeFile: "Verwijder bestand",
		uploadError: "Fout tijdens uploaden",
		previewFile: "Preview file",
		downloadFile: "Bestand downloaden"
	},
	Empty: { description: "Geen gegevens" },
	global: { placeholder: "Maak een selectie" },
	Icon: { icon: "icoon" },
	Text: {
		edit: "Bewerken",
		copy: "kopiëren",
		copied: "Gekopieerd",
		expand: "Uitklappen"
	},
	PageHeader: { back: "Terug" },
	Image: { preview: "Voorbeeld" },
	Form: { optional: "(optioneel)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var nl_NL = {
	locale: "nl",
	Pagination: {
		items_per_page: "/ pagina",
		jump_to: "Ga naar",
		jump_to_confirm: "bevestigen",
		page: "Pagina",
		prev_page: "Vorige pagina",
		next_page: "Volgende pagina",
		prev_5: "Vorige 5 pagina's",
		next_5: "Volgende 5 pagina's",
		prev_3: "Vorige 3 pagina's",
		next_3: "Volgende 3 pagina's",
		page_size: "pagina grootte"
	},
	DatePicker: {
		lang: {
			placeholder: "Selecteer datum",
			rangePlaceholder: ["Begin datum", "Eind datum"],
			locale: "nl_NL",
			today: "Vandaag",
			now: "Nu",
			backToToday: "Terug naar vandaag",
			ok: "Ok",
			clear: "Reset",
			month: "Maand",
			year: "Jaar",
			timeSelect: "Selecteer tijd",
			dateSelect: "Selecteer datum",
			monthSelect: "Kies een maand",
			yearSelect: "Kies een jaar",
			decadeSelect: "Kies een decennium",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorige maand (PageUp)",
			nextMonth: "Volgende maand (PageDown)",
			previousYear: "Vorig jaar (Control + left)",
			nextYear: "Volgend jaar (Control + right)",
			previousDecade: "Vorig decennium",
			nextDecade: "Volgend decennium",
			previousCentury: "Vorige eeuw",
			nextCentury: "Volgende eeuw",
			monthPlaceholder: "Selecteer maand",
			quarterPlaceholder: "Selecteer kwartaal",
			rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
			rangeWeekPlaceholder: ["Begin week", "Eind week"],
			rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
			weekPlaceholder: "Selecteer week",
			yearPlaceholder: "Selecteer jaar"
		},
		timePickerLocale: {
			placeholder: "Selecteer tijd",
			rangePlaceholder: ["Start tijd", "Eind tijd"]
		}
	},
	TimePicker: {
		placeholder: "Selecteer tijd",
		rangePlaceholder: ["Start tijd", "Eind tijd"]
	},
	Calendar: {
		lang: {
			placeholder: "Selecteer datum",
			rangePlaceholder: ["Begin datum", "Eind datum"],
			locale: "nl_NL",
			today: "Vandaag",
			now: "Nu",
			backToToday: "Terug naar vandaag",
			ok: "Ok",
			clear: "Reset",
			month: "Maand",
			year: "Jaar",
			timeSelect: "Selecteer tijd",
			dateSelect: "Selecteer datum",
			monthSelect: "Kies een maand",
			yearSelect: "Kies een jaar",
			decadeSelect: "Kies een decennium",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Vorige maand (PageUp)",
			nextMonth: "Volgende maand (PageDown)",
			previousYear: "Vorig jaar (Control + left)",
			nextYear: "Volgend jaar (Control + right)",
			previousDecade: "Vorig decennium",
			nextDecade: "Volgend decennium",
			previousCentury: "Vorige eeuw",
			nextCentury: "Volgende eeuw",
			monthPlaceholder: "Selecteer maand",
			quarterPlaceholder: "Selecteer kwartaal",
			rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
			rangeWeekPlaceholder: ["Begin week", "Eind week"],
			rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
			weekPlaceholder: "Selecteer week",
			yearPlaceholder: "Selecteer jaar"
		},
		timePickerLocale: {
			placeholder: "Selecteer tijd",
			rangePlaceholder: ["Start tijd", "Eind tijd"]
		}
	},
	global: { placeholder: "Maak een selectie" },
	Table: {
		filterTitle: "Filteren",
		filterConfirm: "OK",
		filterReset: "Reset",
		selectAll: "Selecteer huidige pagina",
		selectInvert: "Keer volgorde om",
		sortTitle: "Sorteren",
		expand: "Rij uitklappen",
		collapse: "Rij inklappen",
		cancelSort: "Klik om sortering te annuleren",
		emptyText: "Geen data",
		filterEmptyText: "Geen filters",
		selectNone: "Maak selectie leeg",
		selectionAll: "Selecteer alle data",
		triggerAsc: "Klik om oplopend te sorteren",
		triggerDesc: "Klik om aflopend te sorteren"
	},
	Modal: {
		okText: "OK",
		cancelText: "Annuleer",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Annuleer"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Zoek hier",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Verwijder",
		removeAll: "Verwijder alles",
		removeCurrent: "Verwijder huidige pagina",
		selectAll: "Selecteer alles",
		selectCurrent: "Selecteer huidige pagina",
		selectInvert: "Huidige pagina omkeren"
	},
	Upload: {
		uploading: "Uploaden...",
		removeFile: "Verwijder bestand",
		uploadError: "Fout tijdens uploaden",
		previewFile: "Preview file",
		downloadFile: "Bestand downloaden"
	},
	Empty: { description: "Geen gegevens" },
	Icon: { icon: "icoon" },
	Text: {
		edit: "Bewerken",
		copy: "kopiëren",
		copied: "Gekopieerd",
		expand: "Uitklappen"
	},
	PageHeader: { back: "Terug" },
	Image: { preview: "Voorbeeld" },
	Form: { optional: "(optioneel)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var pl_PL = {
	locale: "pl",
	Pagination: {
		items_per_page: "na stronę",
		jump_to: "Idź do",
		jump_to_confirm: "potwierdź",
		page: "",
		prev_page: "Poprzednia strona",
		next_page: "Następna strona",
		prev_5: "Poprzednie 5 stron",
		next_5: "Następne 5 stron",
		prev_3: "Poprzednie 3 strony",
		next_3: "Następne 3 strony",
		page_size: "rozmiar strony"
	},
	DatePicker: {
		lang: {
			placeholder: "Wybierz datę",
			yearPlaceholder: "Wybierz rok",
			monthPlaceholder: "Wybierz miesiąc",
			weekPlaceholder: "Wybierz tydzień",
			rangePlaceholder: ["Data początkowa", "Data końcowa"],
			rangeYearPlaceholder: ["Początkowy rok", "Końcowy rok"],
			rangeMonthPlaceholder: ["Początkowy miesiąc", "Końcowy miesiąc"],
			rangeWeekPlaceholder: ["Początkowy tydzień", "Końcowy tydzień"],
			locale: "pl_PL",
			today: "Dzisiaj",
			now: "Teraz",
			backToToday: "Ustaw dzisiaj",
			ok: "Ok",
			clear: "Wyczyść",
			month: "Miesiąc",
			year: "Rok",
			timeSelect: "Ustaw czas",
			dateSelect: "Ustaw datę",
			monthSelect: "Wybierz miesiąc",
			yearSelect: "Wybierz rok",
			decadeSelect: "Wybierz dekadę",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Poprzedni miesiąc (PageUp)",
			nextMonth: "Następny miesiąc (PageDown)",
			previousYear: "Ostatni rok (Ctrl + left)",
			nextYear: "Następny rok (Ctrl + right)",
			previousDecade: "Ostatnia dekada",
			nextDecade: "Następna dekada",
			previousCentury: "Ostatni wiek",
			nextCentury: "Następny wiek"
		},
		timePickerLocale: { placeholder: "Wybierz godzinę" }
	},
	TimePicker: { placeholder: "Wybierz godzinę" },
	Calendar: {
		lang: {
			placeholder: "Wybierz datę",
			rangePlaceholder: ["Data początkowa", "Data końcowa"],
			locale: "pl_PL",
			today: "Dzisiaj",
			now: "Teraz",
			backToToday: "Ustaw dzisiaj",
			ok: "Ok",
			clear: "Wyczyść",
			month: "Miesiąc",
			year: "Rok",
			timeSelect: "Ustaw czas",
			dateSelect: "Ustaw datę",
			monthSelect: "Wybierz miesiąc",
			yearSelect: "Wybierz rok",
			decadeSelect: "Wybierz dekadę",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Poprzedni miesiąc (PageUp)",
			nextMonth: "Następny miesiąc (PageDown)",
			previousYear: "Ostatni rok (Ctrl + left)",
			nextYear: "Następny rok (Ctrl + right)",
			previousDecade: "Ostatnia dekada",
			nextDecade: "Następna dekada",
			previousCentury: "Ostatni wiek",
			nextCentury: "Następny wiek"
		},
		timePickerLocale: { placeholder: "Wybierz godzinę" }
	},
	Table: {
		filterTitle: "Menu filtra",
		filterConfirm: "OK",
		filterReset: "Usuń filtry",
		selectAll: "Zaznacz bieżącą stronę",
		selectInvert: "Odwróć zaznaczenie",
		triggerDesc: "Sortuj malejąco",
		triggerAsc: "Sortuj rosnąco",
		cancelSort: "Usuń sortowanie",
		filterEmptyText: "Brak filtrów",
		filterCheckall: "Wybierz wszystkie elementy",
		filterSearchPlaceholder: "Szukaj w filtrach",
		emptyText: "Brak danych",
		selectNone: "Wyczyść",
		selectionAll: "Wybierz wszystkie",
		sortTitle: "Sortowanie",
		expand: "Rozwiń wiersz",
		collapse: "Zwiń wiersz"
	},
	Modal: {
		okText: "OK",
		cancelText: "Anuluj",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Anuluj"
	},
	Transfer: {
		searchPlaceholder: "Szukaj",
		itemUnit: "obiekt",
		itemsUnit: "obiekty",
		titles: ["", ""],
		remove: "Usuń",
		selectCurrent: "Wybierz aktualną stronę",
		removeCurrent: "Usuń aktualną stronę",
		selectAll: "Wybierz wszystkie",
		removeAll: "Usuń wszystkie",
		selectInvert: "Odwróć wybór"
	},
	Upload: {
		uploading: "Wysyłanie...",
		removeFile: "Usuń plik",
		uploadError: "Błąd wysyłania",
		previewFile: "Podejrzyj plik",
		downloadFile: "Pobieranie pliku"
	},
	Empty: { description: "Brak danych" },
	global: { placeholder: "Wybierz" },
	Icon: { icon: "Ikona" },
	Text: {
		edit: "Edytuj",
		copy: "Kopiuj",
		copied: "Skopiowany",
		expand: "Rozwiń"
	},
	PageHeader: { back: "Wstecz" },
	Image: { preview: "Podgląd" },
	Form: { optional: "(opcjonalne)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var pt_BR = {
	locale: "pt-br",
	Pagination: {
		items_per_page: "/ página",
		jump_to: "Vá até",
		jump_to_confirm: "confirme",
		page: "Página",
		prev_page: "Página anterior",
		next_page: "Próxima página",
		prev_5: "5 páginas anteriores",
		next_5: "5 próximas páginas",
		prev_3: "3 páginas anteriores",
		next_3: "3 próximas páginas",
		page_size: "tamanho da página"
	},
	DatePicker: {
		lang: {
			placeholder: "Selecionar data",
			yearPlaceholder: "Selecionar ano",
			quarterPlaceholder: "Selecionar trimestre",
			monthPlaceholder: "Selecionar mês",
			weekPlaceholder: "Selecionar semana",
			rangePlaceholder: ["Data inicial", "Data final"],
			rangeYearPlaceholder: ["Ano inicial", "Ano Final"],
			rangeMonthPlaceholder: ["Mês inicial", "Mês final"],
			rangeWeekPlaceholder: ["Semana inicial", "Semana final"],
			locale: "pt_BR",
			today: "Hoje",
			now: "Agora",
			backToToday: "Voltar para hoje",
			ok: "Ok",
			clear: "Limpar",
			month: "Mês",
			year: "Ano",
			timeSelect: "Selecionar hora",
			dateSelect: "Selecionar data",
			weekSelect: "Escolher semana",
			monthSelect: "Escolher mês",
			yearSelect: "Escolher ano",
			decadeSelect: "Escolher década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "Mês anterior (PageUp)",
			nextMonth: "Próximo mês (PageDown)",
			previousYear: "Ano anterior (Control + esquerda)",
			nextYear: "Próximo ano (Control + direita)",
			previousDecade: "Década anterior",
			nextDecade: "Próxima década",
			previousCentury: "Século anterior",
			nextCentury: "Próximo século",
			shortWeekDays: [
				"Dom",
				"Seg",
				"Ter",
				"Qua",
				"Qui",
				"Sex",
				"Sáb"
			],
			shortMonths: [
				"Jan",
				"Fev",
				"Mar",
				"Abr",
				"Mai",
				"Jun",
				"Jul",
				"Ago",
				"Set",
				"Out",
				"Nov",
				"Dez"
			]
		},
		timePickerLocale: {
			placeholder: "Hora",
			rangePlaceholder: ["Hora inicial", "Hora final"]
		}
	},
	TimePicker: {
		placeholder: "Hora",
		rangePlaceholder: ["Hora inicial", "Hora final"]
	},
	Calendar: {
		lang: {
			placeholder: "Selecionar data",
			yearPlaceholder: "Selecionar ano",
			quarterPlaceholder: "Selecionar trimestre",
			monthPlaceholder: "Selecionar mês",
			weekPlaceholder: "Selecionar semana",
			rangePlaceholder: ["Data inicial", "Data final"],
			rangeYearPlaceholder: ["Ano inicial", "Ano Final"],
			rangeMonthPlaceholder: ["Mês inicial", "Mês final"],
			rangeWeekPlaceholder: ["Semana inicial", "Semana final"],
			locale: "pt_BR",
			today: "Hoje",
			now: "Agora",
			backToToday: "Voltar para hoje",
			ok: "Ok",
			clear: "Limpar",
			month: "Mês",
			year: "Ano",
			timeSelect: "Selecionar hora",
			dateSelect: "Selecionar data",
			weekSelect: "Escolher semana",
			monthSelect: "Escolher mês",
			yearSelect: "Escolher ano",
			decadeSelect: "Escolher década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "Mês anterior (PageUp)",
			nextMonth: "Próximo mês (PageDown)",
			previousYear: "Ano anterior (Control + esquerda)",
			nextYear: "Próximo ano (Control + direita)",
			previousDecade: "Década anterior",
			nextDecade: "Próxima década",
			previousCentury: "Século anterior",
			nextCentury: "Próximo século",
			shortWeekDays: [
				"Dom",
				"Seg",
				"Ter",
				"Qua",
				"Qui",
				"Sex",
				"Sáb"
			],
			shortMonths: [
				"Jan",
				"Fev",
				"Mar",
				"Abr",
				"Mai",
				"Jun",
				"Jul",
				"Ago",
				"Set",
				"Out",
				"Nov",
				"Dez"
			]
		},
		timePickerLocale: {
			placeholder: "Hora",
			rangePlaceholder: ["Hora inicial", "Hora final"]
		}
	},
	global: { placeholder: "Por favor escolha" },
	Table: {
		filterTitle: "Menu de Filtro",
		filterConfirm: "OK",
		filterReset: "Resetar",
		filterEmptyText: "Sem filtros",
		emptyText: "Sem conteúdo",
		selectAll: "Selecionar página atual",
		selectInvert: "Inverter seleção",
		selectionAll: "Selecionar todo o conteúdo",
		sortTitle: "Ordenar título",
		expand: "Expandir linha",
		collapse: "Colapsar linha",
		triggerDesc: "Clique organiza por descendente",
		triggerAsc: "Clique organiza por ascendente",
		cancelSort: "Clique para cancelar organização",
		selectNone: "Apagar todo o conteúdo"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancelar",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancelar"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Procurar",
		itemUnit: "item",
		itemsUnit: "items",
		remove: "Remover",
		selectCurrent: "Selecionar página atual",
		removeCurrent: "Remover página atual",
		selectAll: "Selecionar todos",
		removeAll: "Remover todos",
		selectInvert: "Inverter seleção atual"
	},
	Upload: {
		uploading: "Enviando...",
		removeFile: "Remover arquivo",
		uploadError: "Erro no envio",
		previewFile: "Visualizar arquivo",
		downloadFile: "Baixar arquivo"
	},
	Empty: { description: "Não há dados" },
	Icon: { icon: "ícone" },
	Text: {
		edit: "editar",
		copy: "copiar",
		copied: "copiado",
		expand: "expandir"
	},
	PageHeader: { back: "Retornar" },
	Image: { preview: "Pré-visualização" },
	CronExpression: {
		cronError: "Erro verifique as informações",
		second: "Segundo",
		minute: "Minuto",
		hour: "Hora",
		day: "Dia",
		month: "Mês",
		week: "Semana"
	},
	Form: { optional: "(opcional)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var pt_PT = {
	locale: "pt",
	Pagination: {
		items_per_page: "/ página",
		jump_to: "Saltar",
		jump_to_confirm: "confirmar",
		page: "Página",
		prev_page: "Página Anterior",
		next_page: "Página Seguinte",
		prev_5: "Recuar 5 Páginas",
		next_5: "Avançar 5 Páginas",
		prev_3: "Recuar 3 Páginas",
		next_3: "Avançar 3 Páginas",
		page_size: "mărimea paginii"
	},
	DatePicker: {
		lang: {
			yearPlaceholder: "Selecionar ano",
			quarterPlaceholder: "Selecionar trimestre",
			monthPlaceholder: "Selecionar mês",
			weekPlaceholder: "Selecionar semana",
			rangePlaceholder: ["Data inicial", "Data final"],
			rangeYearPlaceholder: ["Ano inicial", "Ano final"],
			rangeMonthPlaceholder: ["Mês inicial", "Mês final"],
			rangeWeekPlaceholder: ["Semana inicial", "Semana final"],
			locale: "pt_PT",
			today: "Hoje",
			now: "Agora",
			backToToday: "Hoje",
			ok: "OK",
			clear: "Limpar",
			month: "Mês",
			year: "Ano",
			timeSelect: "Hora",
			dateSelect: "Selecionar data",
			monthSelect: "Selecionar mês",
			yearSelect: "Selecionar ano",
			decadeSelect: "Selecionar década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "Mês anterior (PageUp)",
			nextMonth: "Mês seguinte (PageDown)",
			previousYear: "Ano anterior (Control + left)",
			nextYear: "Ano seguinte (Control + right)",
			previousDecade: "Última década",
			nextDecade: "Próxima década",
			previousCentury: "Último século",
			nextCentury: "Próximo século",
			placeholder: "Data",
			monthFormat: "MMMM"
		},
		timePickerLocale: { placeholder: "Hora" }
	},
	TimePicker: { placeholder: "Hora" },
	Calendar: {
		lang: {
			locale: "pt_PT",
			today: "Hoje",
			now: "Agora",
			backToToday: "Hoje",
			ok: "OK",
			clear: "Limpar",
			month: "Mês",
			year: "Ano",
			timeSelect: "Hora",
			dateSelect: "Selecionar data",
			monthSelect: "Selecionar mês",
			yearSelect: "Selecionar ano",
			decadeSelect: "Selecionar década",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: false,
			previousMonth: "Mês anterior (PageUp)",
			nextMonth: "Mês seguinte (PageDown)",
			previousYear: "Ano anterior (Control + left)",
			nextYear: "Ano seguinte (Control + right)",
			previousDecade: "Última década",
			nextDecade: "Próxima década",
			previousCentury: "Último século",
			nextCentury: "Próximo século",
			placeholder: "Data",
			rangePlaceholder: ["Data inicial", "Data final"],
			monthFormat: "MMMM"
		},
		timePickerLocale: { placeholder: "Hora" }
	},
	Table: {
		filterTitle: "Filtro",
		filterConfirm: "Aplicar",
		filterReset: "Reiniciar",
		selectAll: "Selecionar página atual",
		selectInvert: "Inverter seleção",
		sortTitle: "Ordenação"
	},
	Modal: {
		okText: "OK",
		cancelText: "Cancelar",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Cancelar"
	},
	Transfer: {
		searchPlaceholder: "Procurar...",
		itemUnit: "item",
		itemsUnit: "itens"
	},
	Upload: {
		uploading: "A carregar...",
		removeFile: "Remover",
		uploadError: "Erro ao carregar",
		previewFile: "Pré-visualizar",
		downloadFile: "Baixar"
	},
	Empty: { description: "Sem resultados" },
	Form: { optional: "(opcional)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ro_RO = {
	locale: "ro",
	Pagination: {
		items_per_page: "/ pagină",
		jump_to: "Mergi la",
		jump_to_confirm: "confirm",
		page: "",
		prev_page: "Pagina Anterioară",
		next_page: "Pagina Următoare",
		prev_5: "5 Pagini Anterioare",
		next_5: "5 Pagini Următoare",
		prev_3: "3 Pagini Anterioare",
		next_3: "3 Pagini Următoare",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Selectează data",
			rangePlaceholder: ["Data start", "Data sfârșit"],
			locale: "ro_RO",
			today: "Azi",
			now: "Acum",
			backToToday: "Înapoi la azi",
			ok: "Ok",
			clear: "Șterge",
			month: "Lună",
			year: "An",
			timeSelect: "selectează timpul",
			dateSelect: "selectează data",
			weekSelect: "Alege o săptămână",
			monthSelect: "Alege o lună",
			yearSelect: "Alege un an",
			decadeSelect: "Alege un deceniu",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Luna anterioară (PageUp)",
			nextMonth: "Luna următoare (PageDown)",
			previousYear: "Anul anterior (Control + stânga)",
			nextYear: "Anul următor (Control + dreapta)",
			previousDecade: "Deceniul anterior",
			nextDecade: "Deceniul următor",
			previousCentury: "Secolul anterior",
			nextCentury: "Secolul următor"
		},
		timePickerLocale: { placeholder: "Selectează ora" }
	},
	TimePicker: { placeholder: "Selectează ora" },
	Calendar: {
		lang: {
			placeholder: "Selectează data",
			rangePlaceholder: ["Data start", "Data sfârșit"],
			locale: "ro_RO",
			today: "Azi",
			now: "Acum",
			backToToday: "Înapoi la azi",
			ok: "Ok",
			clear: "Șterge",
			month: "Lună",
			year: "An",
			timeSelect: "selectează timpul",
			dateSelect: "selectează data",
			weekSelect: "Alege o săptămână",
			monthSelect: "Alege o lună",
			yearSelect: "Alege un an",
			decadeSelect: "Alege un deceniu",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Luna anterioară (PageUp)",
			nextMonth: "Luna următoare (PageDown)",
			previousYear: "Anul anterior (Control + stânga)",
			nextYear: "Anul următor (Control + dreapta)",
			previousDecade: "Deceniul anterior",
			nextDecade: "Deceniul următor",
			previousCentury: "Secolul anterior",
			nextCentury: "Secolul următor"
		},
		timePickerLocale: { placeholder: "Selectează ora" }
	},
	global: { placeholder: "Selectează" },
	Table: {
		filterTitle: "Filtrează",
		filterConfirm: "OK",
		filterReset: "Resetează",
		selectAll: "Selectează pagina curentă",
		selectInvert: "Inversează pagina curentă",
		sortTitle: "Ordonează",
		expand: "Extinde rândul",
		collapse: "Micșorează rândul",
		filterEmptyText: "Fără filtre",
		emptyText: "Nu există date",
		selectNone: "Șterge selecția",
		selectionAll: "Selectează toate datele",
		triggerDesc: "Apasă pentru ordonare descrescătoare",
		triggerAsc: "Apasă pentru ordonare crescătoare",
		cancelSort: "Apasă pentru a anula ordonarea"
	},
	Modal: {
		okText: "OK",
		cancelText: "Anulare",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Anulare"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Căutare",
		itemUnit: "element",
		itemsUnit: "elemente",
		remove: "Șterge",
		selectCurrent: "Selectează pagina curentă",
		removeCurrent: "Șterge pagina curentă",
		selectAll: "Selectează toate datele",
		removeAll: "Șterge toate datele",
		selectInvert: "Inversează pagina curentă"
	},
	Upload: {
		uploading: "Se transferă...",
		removeFile: "Înlătură fișierul",
		uploadError: "Eroare la upload",
		previewFile: "Previzualizare fișier",
		downloadFile: "Descărcare fișier"
	},
	Empty: { description: "Fără date" },
	Icon: { icon: "icon" },
	Text: {
		edit: "editează",
		copy: "copiază",
		copied: "copiat",
		expand: "extinde"
	},
	PageHeader: { back: "înapoi" },
	Image: { preview: "Preview" },
	Form: { optional: "(opțional)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ru_RU = {
	locale: "ru",
	Pagination: {
		items_per_page: "/ стр.",
		jump_to: "Перейти",
		jump_to_confirm: "подтвердить",
		page: "Страница",
		prev_page: "Назад",
		next_page: "Вперед",
		prev_5: "Предыдущие 5",
		next_5: "Следующие 5",
		prev_3: "Предыдущие 3",
		next_3: "Следующие 3",
		page_size: "размер страницы"
	},
	DatePicker: {
		lang: {
			placeholder: "Выберите дату",
			yearPlaceholder: "Выберите год",
			quarterPlaceholder: "Выберите квартал",
			monthPlaceholder: "Выберите месяц",
			weekPlaceholder: "Выберите неделю",
			rangePlaceholder: ["Начальная дата", "Конечная дата"],
			rangeYearPlaceholder: ["Начальный год", "Год окончания"],
			rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
			rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
			locale: "ru_RU",
			today: "Сегодня",
			now: "Сейчас",
			backToToday: "Текущая дата",
			ok: "ОК",
			clear: "Очистить",
			month: "Месяц",
			year: "Год",
			timeSelect: "Выбрать время",
			dateSelect: "Выбрать дату",
			monthSelect: "Выбрать месяц",
			yearSelect: "Выбрать год",
			decadeSelect: "Выбрать десятилетие",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Предыдущий месяц (PageUp)",
			nextMonth: "Следующий месяц (PageDown)",
			previousYear: "Предыдущий год (Control + left)",
			nextYear: "Следующий год (Control + right)",
			previousDecade: "Предыдущее десятилетие",
			nextDecade: "Следущее десятилетие",
			previousCentury: "Предыдущий век",
			nextCentury: "Следующий век"
		},
		timePickerLocale: {
			placeholder: "Выберите время",
			rangePlaceholder: ["Время начала", "Время окончания"]
		}
	},
	TimePicker: {
		placeholder: "Выберите время",
		rangePlaceholder: ["Время начала", "Время окончания"]
	},
	Calendar: {
		lang: {
			placeholder: "Выберите дату",
			yearPlaceholder: "Выберите год",
			quarterPlaceholder: "Выберите квартал",
			monthPlaceholder: "Выберите месяц",
			weekPlaceholder: "Выберите неделю",
			rangePlaceholder: ["Начальная дата", "Конечная дата"],
			rangeYearPlaceholder: ["Начальный год", "Год окончания"],
			rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
			rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
			locale: "ru_RU",
			today: "Сегодня",
			now: "Сейчас",
			backToToday: "Текущая дата",
			ok: "ОК",
			clear: "Очистить",
			month: "Месяц",
			year: "Год",
			timeSelect: "Выбрать время",
			dateSelect: "Выбрать дату",
			monthSelect: "Выбрать месяц",
			yearSelect: "Выбрать год",
			decadeSelect: "Выбрать десятилетие",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Предыдущий месяц (PageUp)",
			nextMonth: "Следующий месяц (PageDown)",
			previousYear: "Предыдущий год (Control + left)",
			nextYear: "Следующий год (Control + right)",
			previousDecade: "Предыдущее десятилетие",
			nextDecade: "Следущее десятилетие",
			previousCentury: "Предыдущий век",
			nextCentury: "Следующий век"
		},
		timePickerLocale: {
			placeholder: "Выберите время",
			rangePlaceholder: ["Время начала", "Время окончания"]
		}
	},
	global: { placeholder: "Пожалуйста выберите" },
	Table: {
		filterTitle: "Фильтр",
		filterConfirm: "OK",
		filterReset: "Сбросить",
		filterEmptyText: "Без фильтров",
		emptyText: "Нет данных",
		selectAll: "Выбрать всё",
		selectInvert: "Инвертировать выбор",
		selectionAll: "Выбрать все данные",
		sortTitle: "Сортировка",
		expand: "Развернуть строку",
		collapse: "Свернуть строку",
		triggerDesc: "Нажмите для сортировки по убыванию",
		triggerAsc: "Нажмите для сортировки по возрастанию",
		cancelSort: "Нажмите, чтобы отменить сортировку",
		selectNone: "Очистить все данные"
	},
	Modal: {
		okText: "OK",
		cancelText: "Отмена",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Отмена"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Поиск",
		itemUnit: "элем.",
		itemsUnit: "элем.",
		remove: "Удалить",
		selectAll: "Выбрать все данные",
		selectCurrent: "Выбрать текущую страницу",
		selectInvert: "Показать в обратном порядке",
		removeAll: "Удалить все данные",
		removeCurrent: "Удалить текущую страницу"
	},
	Upload: {
		uploading: "Загрузка...",
		removeFile: "Удалить файл",
		uploadError: "При загрузке произошла ошибка",
		previewFile: "Предпросмотр файла",
		downloadFile: "Загрузить файл"
	},
	Empty: { description: "Нет данных" },
	Icon: { icon: "иконка" },
	Text: {
		edit: "Редактировать",
		copy: "Копировать",
		copied: "Скопировано",
		expand: "Раскрыть"
	},
	PageHeader: { back: "Назад" },
	Image: { preview: "Предпросмотр" },
	Form: { optional: "(необязательно)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var sk_SK = {
	locale: "sk",
	Pagination: {
		items_per_page: "/ strana",
		jump_to: "Choď na",
		jump_to_confirm: "potvrdiť",
		page: "strana",
		prev_page: "Predchádzajúca strana",
		next_page: "Nasledujúca strana",
		prev_5: "Predchádzajúcich 5 strán",
		next_5: "Nasledujúcich 5 strán",
		prev_3: "Predchádzajúce 3 strany",
		next_3: "Nasledujúce 3 strany",
		page_size: "Veľkosť strany"
	},
	DatePicker: {
		lang: {
			placeholder: "Vybrať dátum",
			yearPlaceholder: "Vybrať rok",
			quarterPlaceholder: "Vybrať štvrťrok",
			monthPlaceholder: "Vybrať mesiac",
			weekPlaceholder: "Vybrať týždeň",
			rangePlaceholder: ["Od", "Do"],
			rangeYearPlaceholder: ["Začiatočný rok", "Koncový rok"],
			rangeQuarterPlaceholder: ["Začiatočný štvrťrok", "Koncový štvrťrok"],
			rangeMonthPlaceholder: ["Začiatočný mesiac", "Koncový mesiac"],
			rangeWeekPlaceholder: ["Začiatočný týždeň", "Koncový týždeň"],
			locale: "sk_SK",
			today: "Dnes",
			now: "Teraz",
			backToToday: "Späť na dnes",
			ok: "Ok",
			clear: "Vymazať",
			month: "Mesiac",
			year: "Rok",
			timeSelect: "Vybrať čas",
			dateSelect: "Vybrať dátum",
			weekSelect: "Vybrať týždeň",
			monthSelect: "Vybrať mesiac",
			yearSelect: "Vybrať rok",
			decadeSelect: "Vybrať dekádu",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Predchádzajúci mesiac (PageUp)",
			nextMonth: "Nasledujúci mesiac (PageDown)",
			previousYear: "Predchádzajúci rok (Control + left)",
			nextYear: "Nasledujúci rok (Control + right)",
			previousDecade: "Predchádzajúca dekáda",
			nextDecade: "Nasledujúca dekáda",
			previousCentury: "Predchádzajúce storočie",
			nextCentury: "Nasledujúce storočie"
		},
		timePickerLocale: {
			placeholder: "Vybrať čas",
			rangePlaceholder: ["Začiatočný čas", "Koncový čas"]
		}
	},
	TimePicker: {
		placeholder: "Vybrať čas",
		rangePlaceholder: ["Začiatočný čas", "Koncový čas"]
	},
	Calendar: {
		lang: {
			placeholder: "Vybrať dátum",
			yearPlaceholder: "Vybrať rok",
			quarterPlaceholder: "Vybrať štvrťrok",
			monthPlaceholder: "Vybrať mesiac",
			weekPlaceholder: "Vybrať týždeň",
			rangePlaceholder: ["Od", "Do"],
			rangeYearPlaceholder: ["Začiatočný rok", "Koncový rok"],
			rangeMonthPlaceholder: ["Začiatočný mesiac", "Koncový mesiac"],
			rangeWeekPlaceholder: ["Začiatočný týždeň", "Koncový týždeň"],
			locale: "sk_SK",
			today: "Dnes",
			now: "Teraz",
			backToToday: "Späť na dnes",
			ok: "Ok",
			clear: "Vymazať",
			month: "Mesiac",
			year: "Rok",
			timeSelect: "Vybrať čas",
			dateSelect: "Vybrať dátum",
			weekSelect: "Vybrať týždeň",
			monthSelect: "Vybrať mesiac",
			yearSelect: "Vybrať rok",
			decadeSelect: "Vybrať dekádu",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Predchádzajúci mesiac (PageUp)",
			nextMonth: "Nasledujúci mesiac (PageDown)",
			previousYear: "Predchádzajúci rok (Control + left)",
			nextYear: "Nasledujúci rok (Control + right)",
			previousDecade: "Predchádzajúca dekáda",
			nextDecade: "Nasledujúca dekáda",
			previousCentury: "Predchádzajúce storočie",
			nextCentury: "Nasledujúce storočie"
		},
		timePickerLocale: {
			placeholder: "Vybrať čas",
			rangePlaceholder: ["Začiatočný čas", "Koncový čas"]
		}
	},
	global: { placeholder: "Prosím vyberte" },
	Table: {
		filterTitle: "Filter",
		filterConfirm: "OK",
		filterReset: "Obnoviť",
		filterEmptyText: "Žiadne filtre",
		emptyText: "Žiadne dáta",
		selectAll: "Vybrať všetko",
		selectInvert: "Vybrať opačné",
		selectionAll: "Vybrať všetky dáta",
		sortTitle: "Zoradiť",
		expand: "Rozbaliť riadok",
		collapse: "Zbaliť riadok",
		triggerDesc: "Kliknite pre zoradenie zostupne",
		triggerAsc: "Kliknite pre zoradenie vzostupne",
		cancelSort: "Kliknite pre zrušenie zoradenia",
		filterCheckall: "Vybrať všetky položky",
		filterSearchPlaceholder: "Hľadať vo filtroch",
		selectNone: "Zrušiť výber všetkých dát"
	},
	Modal: {
		okText: "OK",
		cancelText: "Zrušiť",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Zrušiť"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Vyhľadávanie",
		itemUnit: "položka",
		itemsUnit: "položiek",
		remove: "Odstrániť",
		selectCurrent: "Vybrať aktuálnu stranu",
		removeCurrent: "Odstrániť aktuálnu stranu",
		selectAll: "Vybrať všetky dáta",
		removeAll: "Odstrániť všetky dáta",
		selectInvert: "Invertovať aktuálnu stranu"
	},
	Upload: {
		uploading: "Nahrávanie...",
		removeFile: "Odstrániť súbor",
		uploadError: "Chyba pri nahrávaní",
		previewFile: "Zobraziť súbor",
		downloadFile: "Stiahnuť súbor"
	},
	Empty: { description: "Žiadne dáta" },
	Icon: { icon: "ikona" },
	Text: {
		edit: "Upraviť",
		copy: "Kopírovať",
		copied: "Skopírované",
		expand: "Zväčšiť"
	},
	PageHeader: { back: "Späť" },
	Image: { preview: "Náhľad" },
	Form: { optional: "(nepovinné)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var sl_SI = {
	locale: "sl",
	Pagination: {
		items_per_page: "/ strani",
		jump_to: "Pojdi na",
		jump_to_confirm: "potrdi",
		page: "",
		prev_page: "Prejšnja stran",
		next_page: "Naslednja stran",
		prev_5: "Prejšnjih 5 strani",
		next_5: "Naslednjih 5 strani",
		prev_3: "Prejšnje 3 strani",
		next_3: "Naslednje 3 strani",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			locale: "sl",
			placeholder: "Izberite datum",
			rangePlaceholder: ["Začetni datum", "Končni datum"],
			today: "Danes",
			now: "Trenutno",
			backToToday: "Nazaj na trenutni datum",
			ok: "OK",
			clear: "Počisti",
			month: "Mesec",
			year: "Leto",
			timeSelect: "Izberi čas",
			dateSelect: "Izberi datum",
			monthSelect: "Izberite mesec",
			yearSelect: "Izberite leto",
			decadeSelect: "Izberite desetletje",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthFormat: "MMMM",
			monthBeforeYear: true,
			previousMonth: "Prejšnji mesec (PageUp)",
			nextMonth: "Naslednji mesec (PageDown)",
			previousYear: "Lansko leto (Control + left)",
			nextYear: "Naslednje leto (Control + right)",
			previousDecade: "Prejšnje desetletje",
			nextDecade: "Naslednje desetletje",
			previousCentury: "Zadnje stoletje",
			nextCentury: "Naslednje stoletje"
		},
		timePickerLocale: { placeholder: "Izberite čas" }
	},
	TimePicker: { placeholder: "Izberite čas" },
	Calendar: {
		lang: {
			locale: "sl",
			placeholder: "Izberite datum",
			rangePlaceholder: ["Začetni datum", "Končni datum"],
			today: "Danes",
			now: "Trenutno",
			backToToday: "Nazaj na trenutni datum",
			ok: "OK",
			clear: "Počisti",
			month: "Mesec",
			year: "Leto",
			timeSelect: "Izberi čas",
			dateSelect: "Izberi datum",
			monthSelect: "Izberite mesec",
			yearSelect: "Izberite leto",
			decadeSelect: "Izberite desetletje",
			yearFormat: "YYYY",
			dateFormat: "D.M.YYYY",
			dayFormat: "D",
			dateTimeFormat: "D.M.YYYY HH:mm:ss",
			monthFormat: "MMMM",
			monthBeforeYear: true,
			previousMonth: "Prejšnji mesec (PageUp)",
			nextMonth: "Naslednji mesec (PageDown)",
			previousYear: "Lansko leto (Control + left)",
			nextYear: "Naslednje leto (Control + right)",
			previousDecade: "Prejšnje desetletje",
			nextDecade: "Naslednje desetletje",
			previousCentury: "Zadnje stoletje",
			nextCentury: "Naslednje stoletje"
		},
		timePickerLocale: { placeholder: "Izberite čas" }
	},
	Table: {
		filterTitle: "Filter",
		filterConfirm: "Filtriraj",
		filterReset: "Pobriši filter",
		selectAll: "Izberi vse na trenutni strani",
		selectInvert: "Obrni izbor na trenutni strani"
	},
	Modal: {
		okText: "V redu",
		cancelText: "Prekliči",
		justOkText: "V redu"
	},
	Popconfirm: {
		okText: "v redu",
		cancelText: "Prekliči"
	},
	Transfer: {
		searchPlaceholder: "Išči tukaj",
		itemUnit: "Objekt",
		itemsUnit: "Objektov"
	},
	Upload: {
		uploading: "Nalaganje...",
		removeFile: "Odstrani datoteko",
		uploadError: "Napaka pri nalaganju",
		previewFile: "Predogled datoteke",
		downloadFile: "Prenos datoteke"
	},
	Empty: { description: "Ni podatkov" },
	Form: { optional: "(neobvezen)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var sr_RS = {
	locale: "sr",
	Pagination: {
		items_per_page: "/ strani",
		jump_to: "Idi na",
		page: "",
		prev_page: "Prethodna strana",
		next_page: "Sledeća strana",
		prev_5: "Prethodnih 5 Strana",
		next_5: "Sledećih 5 Strana",
		prev_3: "Prethodnih 3 Strane",
		next_3: "Sledećih 3 Strane",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Izaberi datum",
			rangePlaceholder: ["Datum početka", "Datum završetka"],
			locale: "sr_RS",
			today: "Danas",
			now: "Sada",
			backToToday: "Vrati se na danas",
			ok: "U redu",
			clear: "Obriši",
			month: "Mesec",
			year: "Godina",
			timeSelect: "Izaberi vreme",
			dateSelect: "Izaberi datum",
			monthSelect: "Izaberi mesec",
			yearSelect: "Izaberi godinu",
			decadeSelect: "Izaberi deceniju",
			yearFormat: "YYYY",
			dateFormat: "DD.MM.YYYY",
			dayFormat: "D",
			dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Prethodni mesec (PageUp)",
			nextMonth: "Sledeći mesec (PageDown)",
			previousYear: "Prethodna godina (Control + left)",
			nextYear: "Sledeća godina (Control + right)",
			previousDecade: "Prethodna decenija",
			nextDecade: "Sledeća decenija",
			previousCentury: "Prethodni vek",
			nextCentury: "Sledeći vek",
			yearPlaceholder: "Izaberi godinu",
			quarterPlaceholder: "Izaberi tromesečje",
			monthPlaceholder: "Izaberi mesec",
			weekPlaceholder: "Izaberi sedmicu",
			rangeYearPlaceholder: ["Godina početka", "Godina završetka"],
			rangeMonthPlaceholder: ["Mesec početka", "Mesec završetka"],
			rangeWeekPlaceholder: ["Sedmica početka", "Sedmica završetka"]
		},
		timePickerLocale: {
			placeholder: "Izaberi vreme",
			rangePlaceholder: ["Vreme početka", "Vreme završetka"]
		}
	},
	TimePicker: {
		placeholder: "Izaberi vreme",
		rangePlaceholder: ["Vreme početka", "Vreme završetka"]
	},
	Calendar: {
		lang: {
			placeholder: "Izaberi datum",
			rangePlaceholder: ["Datum početka", "Datum završetka"],
			locale: "sr_RS",
			today: "Danas",
			now: "Sada",
			backToToday: "Vrati se na danas",
			ok: "U redu",
			clear: "Obriši",
			month: "Mesec",
			year: "Godina",
			timeSelect: "Izaberi vreme",
			dateSelect: "Izaberi datum",
			monthSelect: "Izaberi mesec",
			yearSelect: "Izaberi godinu",
			decadeSelect: "Izaberi deceniju",
			yearFormat: "YYYY",
			dateFormat: "DD.MM.YYYY",
			dayFormat: "D",
			dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Prethodni mesec (PageUp)",
			nextMonth: "Sledeći mesec (PageDown)",
			previousYear: "Prethodna godina (Control + left)",
			nextYear: "Sledeća godina (Control + right)",
			previousDecade: "Prethodna decenija",
			nextDecade: "Sledeća decenija",
			previousCentury: "Prethodni vek",
			nextCentury: "Sledeći vek",
			yearPlaceholder: "Izaberi godinu",
			quarterPlaceholder: "Izaberi tromesečje",
			monthPlaceholder: "Izaberi mesec",
			weekPlaceholder: "Izaberi sedmicu",
			rangeYearPlaceholder: ["Godina početka", "Godina završetka"],
			rangeMonthPlaceholder: ["Mesec početka", "Mesec završetka"],
			rangeWeekPlaceholder: ["Sedmica početka", "Sedmica završetka"]
		},
		timePickerLocale: {
			placeholder: "Izaberi vreme",
			rangePlaceholder: ["Vreme početka", "Vreme završetka"]
		}
	},
	Table: {
		filterTitle: "Meni filtera",
		filterConfirm: "U redu",
		filterReset: "Poništi",
		selectAll: "Izaberi trenutnu stranicu",
		selectInvert: "Obrni izbor trenutne stranice",
		filterEmptyText: "Nema filtera",
		emptyText: "Nema podataka",
		selectNone: "Obriši sve podatke",
		selectionAll: "Izaberi sve podatke",
		sortTitle: "Sortiraj",
		expand: "Proširi red",
		collapse: "Skupi red",
		triggerDesc: "Klikni da sortiraš po padajućem redosledu",
		triggerAsc: "Klikni da sortiraš po rastućem redosledu",
		cancelSort: "Klikni da otkažeš sortiranje"
	},
	Modal: {
		okText: "U redu",
		cancelText: "Otkaži",
		justOkText: "U redu"
	},
	Popconfirm: {
		okText: "U redu",
		cancelText: "Otkaži"
	},
	Transfer: {
		searchPlaceholder: "Pretraži ovde",
		itemUnit: "stavka",
		itemsUnit: "stavki",
		titles: ["", ""],
		remove: "Ukloni",
		selectCurrent: "Izaberi trenutnu stranicu",
		removeCurrent: "Ukloni trenutnu stranicu",
		selectAll: "Izaberi sve podatke",
		removeAll: "Ukloni sve podatke",
		selectInvert: "Obrni izbor trenutne stranice"
	},
	Upload: {
		uploading: "Otpremanje...",
		removeFile: "Ukloni datoteku",
		uploadError: "Greška pri otpremanju",
		previewFile: "Pregledaj datoteku",
		downloadFile: "Preuzmi datoteku"
	},
	Empty: { description: "Nema podataka" },
	global: { placeholder: "Izaberi" },
	Icon: { icon: "ikona" },
	Text: {
		edit: "Uredi",
		copy: "Kopiraj",
		copied: "Kopirano",
		expand: "Proširi"
	},
	PageHeader: { back: "Nazad" },
	Image: { preview: "Pregled" },
	Form: { optional: "(neobavezno)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var sv_SE = {
	locale: "sv",
	Pagination: {
		items_per_page: "/ sida",
		jump_to: "Gå till",
		jump_to_confirm: "bekräfta",
		page: "Sida",
		prev_page: "Föreg sida",
		next_page: "Nästa sida",
		prev_5: "Föreg 5 sidor",
		next_5: "Nästa 5 sidor",
		prev_3: "Föreg 3 sidor",
		next_3: "Nästa 3 sidor",
		page_size: "sidstorlek"
	},
	DatePicker: {
		lang: {
			placeholder: "Välj datum",
			rangePlaceholder: ["Startdatum", "Slutdatum"],
			locale: "sv_SE",
			today: "I dag",
			now: "Nu",
			backToToday: "Till idag",
			ok: "Ok",
			clear: "Avbryt",
			month: "Månad",
			year: "År",
			timeSelect: "Välj tidpunkt",
			dateSelect: "Välj datum",
			monthSelect: "Välj månad",
			yearSelect: "Välj år",
			decadeSelect: "Välj årtionde",
			yearFormat: "YYYY",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "D",
			dateTimeFormat: "YYYY-MM-DD H:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Förra månaden (PageUp)",
			nextMonth: "Nästa månad (PageDown)",
			previousYear: "Föreg år (Control + left)",
			nextYear: "Nästa år (Control + right)",
			previousDecade: "Föreg årtionde",
			nextDecade: "Nästa årtionde",
			previousCentury: "Föreg århundrade",
			nextCentury: "Nästa århundrade",
			yearPlaceholder: "Välj år",
			quarterPlaceholder: "Välj kvartal",
			monthPlaceholder: "Välj månad",
			weekPlaceholder: "Välj vecka",
			rangeYearPlaceholder: ["Startår", "Slutår"],
			rangeMonthPlaceholder: ["Startmånad", "Slutmånad"],
			rangeWeekPlaceholder: ["Startvecka", "Slutvecka"]
		},
		timePickerLocale: { placeholder: "Välj tid" }
	},
	TimePicker: { placeholder: "Välj tid" },
	Calendar: {
		lang: {
			placeholder: "Välj datum",
			rangePlaceholder: ["Startdatum", "Slutdatum"],
			locale: "sv_SE",
			today: "I dag",
			now: "Nu",
			backToToday: "Till idag",
			ok: "Ok",
			clear: "Avbryt",
			month: "Månad",
			year: "År",
			timeSelect: "Välj tidpunkt",
			dateSelect: "Välj datum",
			monthSelect: "Välj månad",
			yearSelect: "Välj år",
			decadeSelect: "Välj årtionde",
			yearFormat: "YYYY",
			dateFormat: "YYYY-MM-DD",
			dayFormat: "D",
			dateTimeFormat: "YYYY-MM-DD H:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Förra månaden (PageUp)",
			nextMonth: "Nästa månad (PageDown)",
			previousYear: "Föreg år (Control + left)",
			nextYear: "Nästa år (Control + right)",
			previousDecade: "Föreg årtionde",
			nextDecade: "Nästa årtionde",
			previousCentury: "Föreg århundrade",
			nextCentury: "Nästa århundrade",
			yearPlaceholder: "Välj år",
			quarterPlaceholder: "Välj kvartal",
			monthPlaceholder: "Välj månad",
			weekPlaceholder: "Välj vecka",
			rangeYearPlaceholder: ["Startår", "Slutår"],
			rangeMonthPlaceholder: ["Startmånad", "Slutmånad"],
			rangeWeekPlaceholder: ["Startvecka", "Slutvecka"]
		},
		timePickerLocale: { placeholder: "Välj tid" }
	},
	Table: {
		filterTitle: "Filtermeny",
		filterConfirm: "OK",
		filterReset: "Återställ",
		filterEmptyText: "Inga filter",
		emptyText: "Ingen data",
		selectAll: "Markera nuvarande sida",
		selectInvert: "Invertera nuvarande sida",
		selectNone: "Avmarkera all data",
		selectionAll: "Markera all data",
		sortTitle: "Sortera",
		expand: "Expandera rad",
		collapse: "Komprimera rad",
		triggerDesc: "Klicka för att sortera i fallande ordning",
		triggerAsc: "Klicka för att sortera i stigande ordning",
		cancelSort: "Klicka för att avbryta sortering"
	},
	Modal: {
		okText: "OK",
		cancelText: "Avbryt",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Avbryt"
	},
	Transfer: {
		searchPlaceholder: "Sök här",
		itemUnit: "objekt",
		itemsUnit: "objekt",
		titles: ["", ""],
		remove: "Ta bort",
		selectCurrent: "Markera nuvarande sida",
		removeCurrent: "Ta bort nuvarande sida",
		selectAll: "Markera all data",
		removeAll: "Ta bort all data",
		selectInvert: "Invertera nuvarande sida"
	},
	Empty: { description: "Ingen data" },
	Text: {
		edit: "Redigera",
		copy: "Kopiera",
		copied: "Kopierad",
		expand: "Expandera"
	},
	Upload: {
		uploading: "Laddar upp...",
		removeFile: "Ta bort fil",
		uploadError: "Uppladdningsfel",
		previewFile: "Förhandsgranska fil",
		downloadFile: "Ladda ned fil"
	},
	global: { placeholder: "Vänligen välj" },
	Icon: { icon: "ikon" },
	PageHeader: { back: "Tillbaka" },
	Image: { preview: "Förhandsgranska" },
	Form: { optional: "(valfritt)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ta_IN = {
	locale: "ta",
	Pagination: {
		items_per_page: "/ பக்கம்",
		jump_to: "அடுத்த",
		jump_to_confirm: "உறுதிப்படுத்தவும்",
		page: "",
		prev_page: "முந்தைய பக்கம்",
		next_page: "அடுத்த பக்கம்",
		prev_5: "முந்தைய 5 பக்கங்கள்",
		next_5: "அடுத்த 5 பக்கங்கள்",
		prev_3: "முந்தைய 3 பக்கங்கள்",
		next_3: "அடுத்த 3 பக்கங்கள்",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "தேதியைத் தேர்ந்தெடுக்கவும்",
			rangePlaceholder: ["தொடக்க தேதி", "கடைசி தேதி"],
			locale: "ta_IN",
			today: "இன்று",
			now: "இப்போது",
			backToToday: "இன்றுக்கு திரும்பு",
			ok: "சரி",
			clear: "அழி",
			month: "மாதம்",
			year: "வருடம்",
			timeSelect: "நேரத்தைத் தேர்ந்தெடு",
			dateSelect: "தேதியைத் தேர்ந்தெடு",
			weekSelect: "வாரத்தைத் தேர்வுசெய்க",
			monthSelect: "மாதத்தைத் தேர்வுசெய்க",
			yearSelect: "வருடத்தைத் தேர்வுசெய்க",
			decadeSelect: "தசாப்தத்தைத் தேர்வுசெய்க",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "முந்தைய மாதம் (PageUp)",
			nextMonth: "அடுத்த மாதம் (PageDown)",
			previousYear: "முந்தைய வருடம் (Control + left)",
			nextYear: "அடுத்த வருடம் (Control + right)",
			previousDecade: "முந்தைய தசாப்தம்",
			nextDecade: "அடுத்த தசாப்தம்",
			previousCentury: "முந்தைய நூற்றாண்டு",
			nextCentury: "அடுத்த நூற்றாண்டு"
		},
		timePickerLocale: { placeholder: "நேரத்தைத் தேர்ந்தெடுக்கவும்" }
	},
	TimePicker: { placeholder: "நேரத்தைத் தேர்ந்தெடுக்கவும்" },
	Calendar: {
		lang: {
			placeholder: "தேதியைத் தேர்ந்தெடுக்கவும்",
			rangePlaceholder: ["தொடக்க தேதி", "கடைசி தேதி"],
			locale: "ta_IN",
			today: "இன்று",
			now: "இப்போது",
			backToToday: "இன்றுக்கு திரும்பு",
			ok: "சரி",
			clear: "அழி",
			month: "மாதம்",
			year: "வருடம்",
			timeSelect: "நேரத்தைத் தேர்ந்தெடு",
			dateSelect: "தேதியைத் தேர்ந்தெடு",
			weekSelect: "வாரத்தைத் தேர்வுசெய்க",
			monthSelect: "மாதத்தைத் தேர்வுசெய்க",
			yearSelect: "வருடத்தைத் தேர்வுசெய்க",
			decadeSelect: "தசாப்தத்தைத் தேர்வுசெய்க",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "முந்தைய மாதம் (PageUp)",
			nextMonth: "அடுத்த மாதம் (PageDown)",
			previousYear: "முந்தைய வருடம் (Control + left)",
			nextYear: "அடுத்த வருடம் (Control + right)",
			previousDecade: "முந்தைய தசாப்தம்",
			nextDecade: "அடுத்த தசாப்தம்",
			previousCentury: "முந்தைய நூற்றாண்டு",
			nextCentury: "அடுத்த நூற்றாண்டு"
		},
		timePickerLocale: { placeholder: "நேரத்தைத் தேர்ந்தெடுக்கவும்" }
	},
	global: { placeholder: "தேதியைத் தேர்ந்தெடுக்கவும்" },
	Table: {
		filterTitle: "பட்டியலை மூடு",
		filterConfirm: "சரி",
		filterReset: "மீட்டமை",
		emptyText: "தகவல் இல்லை",
		selectAll: "அனைத்தையும் தேர்வுசெய்",
		selectInvert: "தலைகீழாக மாற்று",
		sortTitle: "தலைப்பை வரிசைப்படுத்தவும்"
	},
	Modal: {
		okText: "சரி",
		cancelText: "ரத்து செய்யவும்",
		justOkText: "பரவாயில்லை, சரி"
	},
	Popconfirm: {
		okText: "சரி",
		cancelText: "ரத்து செய்யவும்"
	},
	Transfer: {
		titles: ["", ""],
		notFoundContent: "உள்ளடக்கம் கிடைக்கவில்லை",
		searchPlaceholder: "இங்கு தேடவும்",
		itemUnit: "தகவல்",
		itemsUnit: "தகவல்கள்"
	},
	Upload: {
		uploading: "பதிவேற்றுகிறது...",
		removeFile: "கோப்பை அகற்று",
		uploadError: "பதிவேற்றுவதில் பிழை",
		previewFile: "கோப்பை முன்னோட்டமிடுங்கள்",
		downloadFile: "பதிவிறக்க கோப்பு"
	},
	Empty: { description: "தகவல் இல்லை" },
	Icon: { icon: "உருவம்" },
	Text: {
		edit: "திருத்து",
		copy: "நகல் எடு",
		copied: "நகல் எடுக்கப்பட்டது",
		expand: "விரிவாக்கவும்"
	},
	PageHeader: { back: "பின் செல்லவும்" },
	Form: { optional: "(தேர்வுமுறை)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var th_TH = {
	locale: "th",
	Pagination: {
		items_per_page: "/ หน้า",
		jump_to: "ไปยัง",
		jump_to_confirm: "ยืนยัน",
		page: "หน้า",
		prev_page: "หน้าก่อนหน้า",
		next_page: "หน้าถัดไป",
		prev_5: "ย้อนกลับ 5 หน้า",
		next_5: "ถัดไป 5 หน้า",
		prev_3: "ย้อนกลับ 3 หน้า",
		next_3: "ถัดไป 3 หน้า",
		page_size: "ขนาดหน้า"
	},
	DatePicker: {
		lang: {
			placeholder: "เลือกวันที่",
			yearPlaceholder: "เลือกปี",
			quarterPlaceholder: "เลือกไตรมาส",
			monthPlaceholder: "เลือกเดือน",
			weekPlaceholder: "เลือกสัปดาห์",
			rangePlaceholder: ["วันเริ่มต้น", "วันสิ้นสุด"],
			rangeYearPlaceholder: ["ปีเริ่มต้น", "ปีสิ้นสุด"],
			rangeMonthPlaceholder: ["เดือนเริ่มต้น", "เดือนสิ้นสุด"],
			rangeWeekPlaceholder: ["สัปดาห์เริ่มต้น", "สัปดาห์สิ้นสุด"],
			locale: "th_TH",
			today: "วันนี้",
			now: "ตอนนี้",
			backToToday: "กลับไปยังวันนี้",
			ok: "ตกลง",
			clear: "ลบล้าง",
			month: "เดือน",
			year: "ปี",
			timeSelect: "เลือกเวลา",
			dateSelect: "เลือกวัน",
			monthSelect: "เลือกเดือน",
			yearSelect: "เลือกปี",
			decadeSelect: "เลือกทศวรรษ",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "เดือนก่อนหน้า (PageUp)",
			nextMonth: "เดือนถัดไป (PageDown)",
			previousYear: "ปีก่อนหน้า (Control + left)",
			nextYear: "ปีถัดไป (Control + right)",
			previousDecade: "ทศวรรษก่อนหน้า",
			nextDecade: "ทศวรรษถัดไป",
			previousCentury: "ศตวรรษก่อนหน้า",
			nextCentury: "ศตวรรษถัดไป"
		},
		timePickerLocale: { placeholder: "เลือกเวลา" }
	},
	TimePicker: { placeholder: "เลือกเวลา" },
	Calendar: {
		lang: {
			placeholder: "เลือกวันที่",
			yearPlaceholder: "เลือกปี",
			quarterPlaceholder: "เลือกไตรมาส",
			monthPlaceholder: "เลือกเดือน",
			weekPlaceholder: "เลือกสัปดาห์",
			rangePlaceholder: ["วันเริ่มต้น", "วันสิ้นสุด"],
			rangeYearPlaceholder: ["ปีเริ่มต้น", "ปีสิ้นสุด"],
			rangeMonthPlaceholder: ["เดือนเริ่มต้น", "เดือนสิ้นสุด"],
			rangeWeekPlaceholder: ["สัปดาห์เริ่มต้น", "สัปดาห์สิ้นสุด"],
			locale: "th_TH",
			today: "วันนี้",
			now: "ตอนนี้",
			backToToday: "กลับไปยังวันนี้",
			ok: "ตกลง",
			clear: "ลบล้าง",
			month: "เดือน",
			year: "ปี",
			timeSelect: "เลือกเวลา",
			dateSelect: "เลือกวัน",
			monthSelect: "เลือกเดือน",
			yearSelect: "เลือกปี",
			decadeSelect: "เลือกทศวรรษ",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "เดือนก่อนหน้า (PageUp)",
			nextMonth: "เดือนถัดไป (PageDown)",
			previousYear: "ปีก่อนหน้า (Control + left)",
			nextYear: "ปีถัดไป (Control + right)",
			previousDecade: "ทศวรรษก่อนหน้า",
			nextDecade: "ทศวรรษถัดไป",
			previousCentury: "ศตวรรษก่อนหน้า",
			nextCentury: "ศตวรรษถัดไป"
		},
		timePickerLocale: { placeholder: "เลือกเวลา" }
	},
	global: { placeholder: "กรุณาเลือก" },
	Table: {
		filterTitle: "ตัวกรอง",
		filterConfirm: "ยืนยัน",
		filterReset: "รีเซ็ต",
		filterEmptyText: "ไม่มีตัวกรอง",
		emptyText: "ไม่มีข้อมูล",
		selectAll: "เลือกทั้งหมดในหน้านี้",
		selectInvert: "กลับสถานะการเลือกในหน้านี้",
		selectionAll: "เลือกข้อมูลทั้งหมด",
		sortTitle: "เรียง",
		expand: "แสดงแถวข้อมูล",
		collapse: "ย่อแถวข้อมูล",
		triggerDesc: "คลิกเรียงจากมากไปน้อย",
		triggerAsc: "คลิกเรียงจากน้อยไปมาก",
		cancelSort: "คลิกเพื่อยกเลิกการเรียง"
	},
	Modal: {
		okText: "ตกลง",
		cancelText: "ยกเลิก",
		justOkText: "ตกลง"
	},
	Popconfirm: {
		okText: "ตกลง",
		cancelText: "ยกเลิก"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "ค้นหา",
		itemUnit: "ชิ้น",
		itemsUnit: "ชิ้น",
		remove: "นำออก",
		selectCurrent: "เลือกทั้งหมดในหน้านี้",
		removeCurrent: "นำออกทั้งหมดในหน้านี้",
		selectAll: "เลือกข้อมูลทั้งหมด",
		removeAll: "นำข้อมูลออกทั้งหมด",
		selectInvert: "กลับสถานะการเลือกในหน้านี้"
	},
	Upload: {
		uploading: "กำลังอัปโหลด...",
		removeFile: "ลบไฟล์",
		uploadError: "เกิดข้อผิดพลาดในการอัปโหลด",
		previewFile: "ดูตัวอย่างไฟล์",
		downloadFile: "ดาวน์โหลดไฟล์"
	},
	Empty: { description: "ไม่มีข้อมูล" },
	Icon: { icon: "ไอคอน" },
	Text: {
		edit: "แก้ไข",
		copy: "คัดลอก",
		copied: "คัดลอกแล้ว",
		expand: "ขยาย"
	},
	PageHeader: { back: "ย้อนกลับ" },
	Form: { optional: "(ไม่จำเป็น)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var tr_TR = {
	locale: "tr",
	Pagination: {
		items_per_page: "/ sayfa",
		jump_to: "Git",
		jump_to_confirm: "onayla",
		page: "Sayfa",
		prev_page: "Önceki Sayfa",
		next_page: "Sonraki Sayfa",
		prev_5: "Önceki 5 Sayfa",
		next_5: "Sonraki 5 Sayfa",
		prev_3: "Önceki 3 Sayfa",
		next_3: "Sonraki 3 Sayfa",
		page_size: "sayfa boyutu"
	},
	DatePicker: {
		lang: {
			placeholder: "Tarih seç",
			yearPlaceholder: "Yıl seç",
			quarterPlaceholder: "Çeyrek seç",
			monthPlaceholder: "Ay seç",
			weekPlaceholder: "Hafta seç",
			rangePlaceholder: ["Başlangıç tarihi", "Bitiş tarihi"],
			rangeYearPlaceholder: ["Başlangıç yılı", "Bitiş yılı"],
			rangeMonthPlaceholder: ["Başlangıç ayı", "Bitiş ayı"],
			rangeWeekPlaceholder: ["Başlangıç haftası", "Bitiş haftası"],
			locale: "tr_TR",
			today: "Bugün",
			now: "Şimdi",
			backToToday: "Bugüne Geri Dön",
			ok: "tamam",
			clear: "Temizle",
			month: "Ay",
			year: "Yıl",
			timeSelect: "Zaman Seç",
			dateSelect: "Tarih Seç",
			monthSelect: "Ay Seç",
			yearSelect: "Yıl Seç",
			decadeSelect: "On Yıl Seç",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Önceki Ay (PageUp)",
			nextMonth: "Sonraki Ay (PageDown)",
			previousYear: "Önceki Yıl (Control + Sol)",
			nextYear: "Sonraki Yıl (Control + Sağ)",
			previousDecade: "Önceki On Yıl",
			nextDecade: "Sonraki On Yıl",
			previousCentury: "Önceki Yüzyıl",
			nextCentury: "Sonraki Yüzyıl"
		},
		timePickerLocale: {
			placeholder: "Zaman seç",
			rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
		}
	},
	TimePicker: {
		placeholder: "Zaman seç",
		rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
	},
	Calendar: {
		lang: {
			placeholder: "Tarih seç",
			yearPlaceholder: "Yıl seç",
			quarterPlaceholder: "Çeyrek seç",
			monthPlaceholder: "Ay seç",
			weekPlaceholder: "Hafta seç",
			rangePlaceholder: ["Başlangıç tarihi", "Bitiş tarihi"],
			rangeYearPlaceholder: ["Başlangıç yılı", "Bitiş yılı"],
			rangeMonthPlaceholder: ["Başlangıç ayı", "Bitiş ayı"],
			rangeWeekPlaceholder: ["Başlangıç haftası", "Bitiş haftası"],
			locale: "tr_TR",
			today: "Bugün",
			now: "Şimdi",
			backToToday: "Bugüne Geri Dön",
			ok: "tamam",
			clear: "Temizle",
			month: "Ay",
			year: "Yıl",
			timeSelect: "Zaman Seç",
			dateSelect: "Tarih Seç",
			monthSelect: "Ay Seç",
			yearSelect: "Yıl Seç",
			decadeSelect: "On Yıl Seç",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Önceki Ay (PageUp)",
			nextMonth: "Sonraki Ay (PageDown)",
			previousYear: "Önceki Yıl (Control + Sol)",
			nextYear: "Sonraki Yıl (Control + Sağ)",
			previousDecade: "Önceki On Yıl",
			nextDecade: "Sonraki On Yıl",
			previousCentury: "Önceki Yüzyıl",
			nextCentury: "Sonraki Yüzyıl"
		},
		timePickerLocale: {
			placeholder: "Zaman seç",
			rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
		}
	},
	global: { placeholder: "Lütfen seçiniz" },
	Table: {
		filterTitle: "Filtre menüsü",
		filterConfirm: "Tamam",
		filterReset: "Sıfırla",
		filterEmptyText: "Filtre yok",
		selectAll: "Tüm sayfayı seç",
		selectInvert: "Tersini seç",
		selectionAll: "Tümünü seç",
		sortTitle: "Sırala",
		expand: "Satırı genişlet",
		collapse: "Satırı daralt",
		triggerDesc: "Azalan düzende sırala",
		triggerAsc: "Artan düzende sırala",
		cancelSort: "Sıralamayı kaldır"
	},
	Modal: {
		okText: "Tamam",
		cancelText: "İptal",
		justOkText: "Tamam"
	},
	Popconfirm: {
		okText: "Tamam",
		cancelText: "İptal"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "Arama",
		itemUnit: "Öğe",
		itemsUnit: "Öğeler",
		remove: "Kaldır",
		selectCurrent: "Tüm sayfayı seç",
		removeCurrent: "Sayfayı kaldır",
		selectAll: "Tümünü seç",
		removeAll: "Tümünü kaldır",
		selectInvert: "Tersini seç"
	},
	Upload: {
		uploading: "Yükleniyor...",
		removeFile: "Dosyayı kaldır",
		uploadError: "Yükleme hatası",
		previewFile: "Dosyayı önizle",
		downloadFile: "Dosyayı indir"
	},
	Empty: { description: "Veri Yok" },
	Icon: { icon: "ikon" },
	Text: {
		edit: "Düzenle",
		copy: "Kopyala",
		copied: "Kopyalandı",
		expand: "Genişlet"
	},
	PageHeader: { back: "Geri" },
	Image: { preview: "Önizleme" },
	Form: { optional: "(isteğe bağlı)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var uk_UA = {
	locale: "uk",
	Pagination: {
		items_per_page: "/ сторінці",
		jump_to: "Перейти",
		jump_to_confirm: "підтвердити",
		page: "",
		prev_page: "Попередня сторінка",
		next_page: "Наступна сторінка",
		prev_5: "Попередні 5 сторінок",
		next_5: "Наступні 5 сторінок",
		prev_3: "Попередні 3 сторінки",
		next_3: "Наступні 3 сторінки",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "Оберіть дату",
			yearPlaceholder: "Оберіть рік",
			quarterPlaceholder: "Оберіть квартал",
			monthPlaceholder: "Оберіть місяць",
			weekPlaceholder: "Оберіть тиждень",
			rangePlaceholder: ["Початкова дата", "Кінцева дата"],
			rangeYearPlaceholder: ["Початковий рік", "Рік закінчення"],
			rangeMonthPlaceholder: ["Початковий місяць", "Кінцевий місяць"],
			rangeWeekPlaceholder: ["Початковий тиждень", "Кінцевий тиждень"],
			locale: "uk_UA",
			today: "Сьогодні",
			now: "Зараз",
			backToToday: "Поточна дата",
			ok: "Ok",
			clear: "Очистити",
			month: "Місяць",
			year: "Рік",
			timeSelect: "Обрати час",
			dateSelect: "Обрати дату",
			monthSelect: "Обрати місяць",
			yearSelect: "Обрати рік",
			decadeSelect: "Обрати десятиріччя",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Попередній місяць (PageUp)",
			nextMonth: "Наступний місяць (PageDown)",
			previousYear: "Попередній рік (Control + left)",
			nextYear: "Наступний рік (Control + right)",
			previousDecade: "Попереднє десятиріччя",
			nextDecade: "Наступне десятиріччя",
			previousCentury: "Попереднє століття",
			nextCentury: "Наступне століття"
		},
		timePickerLocale: {
			placeholder: "Оберіть час",
			rangePlaceholder: ["Час початку", "Час закінчення"]
		}
	},
	TimePicker: {
		placeholder: "Оберіть час",
		rangePlaceholder: ["Час початку", "Час закінчення"]
	},
	Calendar: {
		lang: {
			placeholder: "Оберіть дату",
			rangePlaceholder: ["Початкова дата", "Кінцева дата"],
			locale: "uk_UA",
			today: "Сьогодні",
			now: "Зараз",
			backToToday: "Поточна дата",
			ok: "Ok",
			clear: "Очистити",
			month: "Місяць",
			year: "Рік",
			timeSelect: "Обрати час",
			dateSelect: "Обрати дату",
			monthSelect: "Обрати місяць",
			yearSelect: "Обрати рік",
			decadeSelect: "Обрати десятиріччя",
			yearFormat: "YYYY",
			dateFormat: "D-M-YYYY",
			dayFormat: "D",
			dateTimeFormat: "D-M-YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Попередній місяць (PageUp)",
			nextMonth: "Наступний місяць (PageDown)",
			previousYear: "Попередній рік (Control + left)",
			nextYear: "Наступний рік (Control + right)",
			previousDecade: "Попереднє десятиріччя",
			nextDecade: "Наступне десятиріччя",
			previousCentury: "Попереднє століття",
			nextCentury: "Наступне століття"
		},
		timePickerLocale: { placeholder: "Оберіть час" }
	},
	Table: {
		filterTitle: "Фільтрувати",
		filterConfirm: "OK",
		filterReset: "Скинути",
		selectAll: "Обрати всі",
		selectInvert: "Інвертувати вибір"
	},
	Modal: {
		okText: "Гаразд",
		cancelText: "Скасувати",
		justOkText: "Гаразд"
	},
	Popconfirm: {
		okText: "Гаразд",
		cancelText: "Скасувати"
	},
	Transfer: {
		searchPlaceholder: "Введіть текст для пошуку",
		itemUnit: "елем.",
		itemsUnit: "елем."
	},
	Upload: {
		uploading: "Завантаження ...",
		removeFile: "Видалити файл",
		uploadError: "Помилка завантаження",
		previewFile: "Попередній перегляд файлу",
		downloadFile: "Завантажити файл"
	},
	Empty: { description: "Даних немає" },
	Icon: { icon: "іконка" },
	Text: {
		edit: "Редагувати",
		copy: "Копіювати",
		copied: "Скопійовано",
		expand: "Розгорнути"
	},
	PageHeader: { back: "Назад" },
	Form: { optional: "(необовʼязково)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ur_PK = {
	locale: "ur",
	Pagination: {
		items_per_page: "/ صفحہ",
		jump_to: "پاس جاؤ",
		jump_to_confirm: "تصدیق کریں",
		page: "",
		prev_page: "پچھلا صفحہ",
		next_page: "اگلا صفحہ",
		prev_5: "پچھلے 5 صفحات",
		next_5: "اگلے 5 صفحات",
		prev_3: "پچھلے 3 صفحات",
		next_3: "اگلے 3 صفحات",
		page_size: "Page Size"
	},
	DatePicker: {
		lang: {
			placeholder: "تاریخ منتخب کریں",
			yearPlaceholder: "سال کو منتخب کریں",
			quarterPlaceholder: "کوارٹر منتخب کریں",
			monthPlaceholder: "ماہ منتخب کریں",
			weekPlaceholder: "ہفتہ منتخب کریں",
			rangePlaceholder: ["شروع کرنے کی تاریخ", "آخری تاریخ"],
			rangeYearPlaceholder: ["آغاز سال", "آخر سال"],
			rangeMonthPlaceholder: ["مہینہ شروع", "اختتامی مہینہ"],
			rangeWeekPlaceholder: ["ہفتے شروع کریں", "اختتام ہفتہ"],
			locale: "ur_PK",
			today: "آج",
			now: "ابھی",
			backToToday: "آج واپس",
			ok: "ٹھیک ہے",
			clear: "صاف",
			month: "مہینہ",
			year: "سال",
			timeSelect: "وقت منتخب کریں",
			dateSelect: "تاریخ منتخب کریں",
			weekSelect: "ایک ہفتہ کا انتخاب کریں",
			monthSelect: "ایک مہینہ کا انتخاب کریں",
			yearSelect: "ایک سال کا انتخاب کریں",
			decadeSelect: "ایک دہائی کا انتخاب کریں",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "پچھلے مہینے (PageUp)",
			nextMonth: "اگلے مہینے (PageDown)",
			previousYear: "گزشتہ سال (Control + left)",
			nextYear: "اگلے سال (Control + right)",
			previousDecade: "پچھلی دہائی",
			nextDecade: "اگلی دہائی",
			previousCentury: "پچھلی صدی",
			nextCentury: "اگلی صدی"
		},
		timePickerLocale: {
			placeholder: "وقت منتخب کریں",
			rangePlaceholder: ["وقت منتخب کریں", "آخر وقت"]
		}
	},
	TimePicker: {
		placeholder: "وقت منتخب کریں",
		rangePlaceholder: ["وقت منتخب کریں", "آخر وقت"]
	},
	Calendar: {
		lang: {
			placeholder: "تاریخ منتخب کریں",
			yearPlaceholder: "سال کو منتخب کریں",
			quarterPlaceholder: "کوارٹر منتخب کریں",
			monthPlaceholder: "ماہ منتخب کریں",
			weekPlaceholder: "ہفتہ منتخب کریں",
			rangePlaceholder: ["شروع کرنے کی تاریخ", "آخری تاریخ"],
			rangeYearPlaceholder: ["آغاز سال", "آخر سال"],
			rangeMonthPlaceholder: ["مہینہ شروع", "اختتامی مہینہ"],
			rangeWeekPlaceholder: ["ہفتے شروع کریں", "اختتام ہفتہ"],
			locale: "ur_PK",
			today: "آج",
			now: "ابھی",
			backToToday: "آج واپس",
			ok: "ٹھیک ہے",
			clear: "صاف",
			month: "مہینہ",
			year: "سال",
			timeSelect: "وقت منتخب کریں",
			dateSelect: "تاریخ منتخب کریں",
			weekSelect: "ایک ہفتہ کا انتخاب کریں",
			monthSelect: "ایک مہینہ کا انتخاب کریں",
			yearSelect: "ایک سال کا انتخاب کریں",
			decadeSelect: "ایک دہائی کا انتخاب کریں",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "پچھلے مہینے (PageUp)",
			nextMonth: "اگلے مہینے (PageDown)",
			previousYear: "گزشتہ سال (Control + left)",
			nextYear: "اگلے سال (Control + right)",
			previousDecade: "پچھلی دہائی",
			nextDecade: "اگلی دہائی",
			previousCentury: "پچھلی صدی",
			nextCentury: "اگلی صدی"
		},
		timePickerLocale: {
			placeholder: "وقت منتخب کریں",
			rangePlaceholder: ["وقت منتخب کریں", "آخر وقت"]
		}
	},
	global: { placeholder: "منتخب کریں" },
	Table: {
		filterTitle: "فلٹر مینو",
		filterConfirm: "ٹھیک ہے",
		filterReset: "ری سیٹ کریں",
		filterEmptyText: "فلٹرز نہیں",
		emptyText: "کوئی ڈیٹا نہیں",
		selectAll: "موجودہ صفحہ منتخب کریں",
		selectInvert: "موجودہ صفحے کو الٹ دیں",
		selectNone: "تمام ڈیٹا صاف کریں",
		selectionAll: "تمام ڈیٹا کو منتخب کریں",
		sortTitle: "ترتیب دیں",
		expand: "پھیلائیں",
		collapse: "سمیٹیں",
		triggerDesc: "نزولی کو ترتیب دینے کیلئے کلک کریں",
		triggerAsc: "چڑھنے کو ترتیب دینے کیلئے کلک کریں",
		cancelSort: "ترتیب کو منسوخ کرنے کیلئے دبائیں"
	},
	Modal: {
		okText: "ٹھیک ہے",
		cancelText: "منسوخ کریں",
		justOkText: "ٹھیک ہے"
	},
	Popconfirm: {
		okText: "ٹھیک ہے",
		cancelText: "منسوخ کریں"
	},
	Transfer: {
		titles: ["", ""],
		searchPlaceholder: "یہاں تلاش کریں",
		itemUnit: "شے",
		itemsUnit: "اشیاء",
		remove: "ہٹائیں",
		selectCurrent: "موجودہ صفحہ منتخب کریں",
		removeCurrent: "موجودہ صفحہ ہٹائیں",
		selectAll: "تمام ڈیٹا کو منتخب کریں",
		removeAll: "تمام ڈیٹا کو ہٹا دیں",
		selectInvert: "موجودہ صفحے کو الٹ دیں"
	},
	Upload: {
		uploading: "اپ لوڈ ہو رہا ہے…",
		removeFile: "فائل کو ہٹا دیں",
		uploadError: "اپ لوڈ کی خرابی",
		previewFile: "پیش نظار فائل",
		downloadFile: "فائل ڈاؤن لوڈ کریں"
	},
	Empty: { description: "کوئی ڈیٹا نہیں" },
	Icon: { icon: "آئیکن" },
	Text: {
		edit: "ترمیم",
		copy: "کاپی",
		copied: "کاپی ہوگیا",
		expand: "پھیلائیں"
	},
	PageHeader: { back: "پیچھے" },
	Image: { preview: "پیش نظارہ" },
	Form: { optional: "(اختیاری)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var vi_VN = {
	locale: "vi",
	Pagination: {
		items_per_page: "/ trang",
		jump_to: "Đến",
		jump_to_confirm: "xác nhận",
		page: "Trang",
		prev_page: "Trang Trước",
		next_page: "Trang Kế",
		prev_5: "Về 5 Trang Trước",
		next_5: "Đến 5 Trang Kế",
		prev_3: "Về 3 Trang Trước",
		next_3: "Đến 3 Trang Kế",
		page_size: "kích thước trang"
	},
	DatePicker: {
		lang: {
			placeholder: "Chọn thời điểm",
			yearPlaceholder: "Chọn năm",
			quarterPlaceholder: "Chọn quý",
			monthPlaceholder: "Chọn tháng",
			weekPlaceholder: "Chọn tuần",
			rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
			rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
			rangeQuarterPlaceholder: ["Qúy bắt đầu", "Quý kết thúc"],
			rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
			rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"],
			locale: "vi_VN",
			today: "Hôm nay",
			now: "Bây giờ",
			backToToday: "Trở về hôm nay",
			ok: "Ok",
			clear: "Xóa",
			month: "Tháng",
			year: "Năm",
			timeSelect: "Chọn thời gian",
			dateSelect: "Chọn ngày",
			weekSelect: "Chọn tuần",
			monthSelect: "Chọn tháng",
			yearSelect: "Chọn năm",
			decadeSelect: "Chọn thập kỷ",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Tháng trước (PageUp)",
			nextMonth: "Tháng sau (PageDown)",
			previousYear: "Năm trước (Control + left)",
			nextYear: "Năm sau (Control + right)",
			previousDecade: "Thập kỷ trước",
			nextDecade: "Thập kỷ sau",
			previousCentury: "Thế kỷ trước",
			nextCentury: "Thế kỷ sau"
		},
		timePickerLocale: { placeholder: "Chọn thời gian" }
	},
	TimePicker: { placeholder: "Chọn thời gian" },
	Calendar: {
		lang: {
			placeholder: "Chọn thời điểm",
			yearPlaceholder: "Chọn năm",
			quarterPlaceholder: "Chọn quý",
			monthPlaceholder: "Chọn tháng",
			weekPlaceholder: "Chọn tuần",
			rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
			rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
			rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
			rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"],
			locale: "vi_VN",
			today: "Hôm nay",
			now: "Bây giờ",
			backToToday: "Trở về hôm nay",
			ok: "Ok",
			clear: "Xóa",
			month: "Tháng",
			year: "Năm",
			timeSelect: "Chọn thời gian",
			dateSelect: "Chọn ngày",
			weekSelect: "Chọn tuần",
			monthSelect: "Chọn tháng",
			yearSelect: "Chọn năm",
			decadeSelect: "Chọn thập kỷ",
			yearFormat: "YYYY",
			dateFormat: "D/M/YYYY",
			dayFormat: "D",
			dateTimeFormat: "D/M/YYYY HH:mm:ss",
			monthBeforeYear: true,
			previousMonth: "Tháng trước (PageUp)",
			nextMonth: "Tháng sau (PageDown)",
			previousYear: "Năm trước (Control + left)",
			nextYear: "Năm sau (Control + right)",
			previousDecade: "Thập kỷ trước",
			nextDecade: "Thập kỷ sau",
			previousCentury: "Thế kỷ trước",
			nextCentury: "Thế kỷ sau"
		},
		timePickerLocale: { placeholder: "Chọn thời gian" }
	},
	Table: {
		filterTitle: "Bộ ",
		filterConfirm: "OK",
		filterReset: "Tạo Lại",
		selectAll: "Chọn Tất Cả",
		selectInvert: "Chọn Ngược Lại"
	},
	Modal: {
		okText: "OK",
		cancelText: "Huỷ",
		justOkText: "OK"
	},
	Popconfirm: {
		okText: "OK",
		cancelText: "Huỷ"
	},
	Transfer: {
		searchPlaceholder: "Tìm ở đây",
		itemUnit: "mục",
		itemsUnit: "mục"
	},
	Upload: {
		uploading: "Đang tải lên...",
		removeFile: "Gỡ bỏ tập tin",
		uploadError: "Lỗi tải lên",
		previewFile: "Xem thử tập tin",
		downloadFile: "Tải tập tin"
	},
	Empty: { description: "Trống" },
	Form: { optional: "(tùy chọn)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var zh_HK = {
	locale: "zh-hk",
	Pagination: {
		items_per_page: "條/頁",
		jump_to: "跳至",
		jump_to_confirm: "確定",
		page: "頁",
		prev_page: "上一頁",
		next_page: "下一頁",
		prev_5: "向前 5 頁",
		next_5: "向後 5 頁",
		prev_3: "向前 3 頁",
		next_3: "向後 3 頁",
		page_size: "頁碼"
	},
	DatePicker: {
		lang: {
			placeholder: "請選擇日期",
			rangePlaceholder: ["開始日期", "結束日期"],
			locale: "zh_TW",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "確定",
			timeSelect: "選擇時間",
			dateSelect: "選擇日期",
			weekSelect: "選擇周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上個月 (翻頁上鍵)",
			nextMonth: "下個月 (翻頁下鍵)",
			monthSelect: "選擇月份",
			yearSelect: "選擇年份",
			decadeSelect: "選擇年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "上一年 (Control鍵加左方向鍵)",
			nextYear: "下一年 (Control鍵加右方向鍵)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世紀",
			nextCentury: "下一世紀",
			yearPlaceholder: "請選擇年份",
			quarterPlaceholder: "請選擇季度",
			monthPlaceholder: "請選擇月份",
			weekPlaceholder: "請選擇周",
			rangeYearPlaceholder: ["開始年份", "結束年份"],
			rangeQuarterPlaceholder: ["開始季度", "結束季度"],
			rangeMonthPlaceholder: ["開始月份", "結束月份"],
			rangeWeekPlaceholder: ["開始周", "結束周"]
		},
		timePickerLocale: { placeholder: "請選擇時間" }
	},
	TimePicker: { placeholder: "請選擇時間" },
	Calendar: {
		lang: {
			placeholder: "請選擇日期",
			rangePlaceholder: ["開始日期", "結束日期"],
			locale: "zh_TW",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "確定",
			timeSelect: "選擇時間",
			dateSelect: "選擇日期",
			weekSelect: "選擇周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上個月 (翻頁上鍵)",
			nextMonth: "下個月 (翻頁下鍵)",
			monthSelect: "選擇月份",
			yearSelect: "選擇年份",
			decadeSelect: "選擇年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "上一年 (Control鍵加左方向鍵)",
			nextYear: "下一年 (Control鍵加右方向鍵)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世紀",
			nextCentury: "下一世紀",
			yearPlaceholder: "請選擇年份",
			quarterPlaceholder: "請選擇季度",
			monthPlaceholder: "請選擇月份",
			weekPlaceholder: "請選擇周",
			rangeYearPlaceholder: ["開始年份", "結束年份"],
			rangeMonthPlaceholder: ["開始月份", "結束月份"],
			rangeWeekPlaceholder: ["開始周", "結束周"]
		},
		timePickerLocale: { placeholder: "請選擇時間" }
	},
	global: { placeholder: "請選擇" },
	Table: {
		filterTitle: "篩選器",
		filterConfirm: "確定",
		filterReset: "重置",
		filterEmptyText: "無篩選項",
		selectAll: "全部選取",
		selectInvert: "反向選取",
		selectionAll: "全選所有",
		sortTitle: "排序",
		expand: "展開行",
		collapse: "關閉行",
		triggerDesc: "點擊降序",
		triggerAsc: "點擊升序",
		cancelSort: "取消排序",
		selectNone: "清空所有"
	},
	Modal: {
		okText: "確定",
		cancelText: "取消",
		justOkText: "知道了"
	},
	Popconfirm: {
		okText: "確定",
		cancelText: "取消"
	},
	Transfer: {
		searchPlaceholder: "搜尋資料",
		itemUnit: "項目",
		itemsUnit: "項目",
		remove: "刪除",
		selectCurrent: "全選當頁",
		removeCurrent: "刪除當頁",
		selectAll: "全選所有",
		removeAll: "刪除全部",
		selectInvert: "反選當頁"
	},
	Upload: {
		uploading: "正在上傳...",
		removeFile: "刪除檔案",
		uploadError: "上傳失敗",
		previewFile: "檔案預覽",
		downloadFile: "下载文件"
	},
	Empty: { description: "無此資料" },
	Icon: { icon: "圖標" },
	Text: {
		edit: "編輯",
		copy: "複製",
		copied: "複製成功",
		expand: "展開"
	},
	PageHeader: { back: "返回" },
	Image: { preview: "預覽" },
	Form: { optional: "(可選)" }
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var zh_TW = {
	locale: "zh-tw",
	Pagination: {
		items_per_page: "條/頁",
		jump_to: "跳至",
		jump_to_confirm: "確定",
		page: "頁",
		prev_page: "上一頁",
		next_page: "下一頁",
		prev_5: "向前 5 頁",
		next_5: "向後 5 頁",
		prev_3: "向前 3 頁",
		next_3: "向後 3 頁",
		page_size: "頁碼"
	},
	DatePicker: {
		lang: {
			placeholder: "請選擇日期",
			rangePlaceholder: ["開始日期", "結束日期"],
			locale: "zh_TW",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "確定",
			timeSelect: "選擇時間",
			dateSelect: "選擇日期",
			weekSelect: "選擇周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上個月 (翻頁上鍵)",
			nextMonth: "下個月 (翻頁下鍵)",
			monthSelect: "選擇月份",
			yearSelect: "選擇年份",
			decadeSelect: "選擇年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "上一年 (Control鍵加左方向鍵)",
			nextYear: "下一年 (Control鍵加右方向鍵)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世紀",
			nextCentury: "下一世紀",
			yearPlaceholder: "請選擇年份",
			quarterPlaceholder: "請選擇季度",
			monthPlaceholder: "請選擇月份",
			weekPlaceholder: "請選擇周",
			rangeYearPlaceholder: ["開始年份", "結束年份"],
			rangeMonthPlaceholder: ["開始月份", "結束月份"],
			rangeWeekPlaceholder: ["開始周", "結束周"],
			rangeQuarterPlaceholder: ["開始季度", "結束季度"]
		},
		timePickerLocale: {
			placeholder: "請選擇時間",
			rangePlaceholder: ["開始時間", "結束時間"]
		}
	},
	TimePicker: {
		placeholder: "請選擇時間",
		rangePlaceholder: ["開始時間", "結束時間"]
	},
	Calendar: {
		lang: {
			placeholder: "請選擇日期",
			rangePlaceholder: ["開始日期", "結束日期"],
			locale: "zh_TW",
			today: "今天",
			now: "此刻",
			backToToday: "返回今天",
			ok: "確定",
			timeSelect: "選擇時間",
			dateSelect: "選擇日期",
			weekSelect: "選擇周",
			clear: "清除",
			month: "月",
			year: "年",
			previousMonth: "上個月 (翻頁上鍵)",
			nextMonth: "下個月 (翻頁下鍵)",
			monthSelect: "選擇月份",
			yearSelect: "選擇年份",
			decadeSelect: "選擇年代",
			yearFormat: "YYYY年",
			dayFormat: "D日",
			dateFormat: "YYYY年M月D日",
			dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
			previousYear: "上一年 (Control鍵加左方向鍵)",
			nextYear: "下一年 (Control鍵加右方向鍵)",
			previousDecade: "上一年代",
			nextDecade: "下一年代",
			previousCentury: "上一世紀",
			nextCentury: "下一世紀",
			yearPlaceholder: "請選擇年份",
			quarterPlaceholder: "請選擇季度",
			monthPlaceholder: "請選擇月份",
			weekPlaceholder: "請選擇周",
			rangeYearPlaceholder: ["開始年份", "結束年份"],
			rangeMonthPlaceholder: ["開始月份", "結束月份"],
			rangeWeekPlaceholder: ["開始周", "結束周"]
		},
		timePickerLocale: {
			placeholder: "請選擇時間",
			rangePlaceholder: ["開始時間", "結束時間"]
		}
	},
	global: { placeholder: "請選擇" },
	Table: {
		filterTitle: "篩選器",
		filterConfirm: "確定",
		filterReset: "重置",
		filterEmptyText: "無篩選項",
		selectAll: "全部選取",
		selectInvert: "反向選取",
		selectionAll: "全選所有",
		sortTitle: "排序",
		expand: "展開行",
		collapse: "關閉行",
		triggerDesc: "點擊降序",
		triggerAsc: "點擊升序",
		cancelSort: "取消排序",
		filterCheckall: "全選",
		filterSearchPlaceholder: "在篩選項中搜尋",
		selectNone: "清空所有"
	},
	Modal: {
		okText: "確定",
		cancelText: "取消",
		justOkText: "知道了"
	},
	Popconfirm: {
		okText: "確定",
		cancelText: "取消"
	},
	Transfer: {
		searchPlaceholder: "搜尋資料",
		itemUnit: "項目",
		itemsUnit: "項目",
		remove: "删除",
		selectCurrent: "全選當頁",
		removeCurrent: "删除當頁",
		selectAll: "全選所有",
		removeAll: "删除全部",
		selectInvert: "反選當頁"
	},
	Upload: {
		uploading: "正在上傳...",
		removeFile: "刪除檔案",
		uploadError: "上傳失敗",
		previewFile: "檔案預覽",
		downloadFile: "下載文件"
	},
	Empty: { description: "無此資料" },
	Icon: { icon: "圖標" },
	Text: {
		edit: "編輯",
		copy: "複製",
		copied: "複製成功",
		expand: "展開"
	},
	PageHeader: { back: "返回" },
	Image: { preview: "預覽" },
	CronExpression: {
		cronError: "cron 表達式不合法",
		second: "秒",
		minute: "分",
		hour: "時",
		day: "日",
		month: "月",
		week: "週"
	},
	QRCode: {
		expired: "二維條碼已過期",
		refresh: "點擊刷新",
		scanned: "已掃描"
	},
	Form: { optional: "(可選)" }
};
//#endregion
export { nb_NO as $, gl_ES as A, ka_GE as B, et_EE as C, NZ_DATE_CONFIG_DEFAULT as Ct, fr_CA as D, fr_BE as E, hy_AM as F, ko_KR as G, km_KH as H, id_ID as I, lv_LV as J, ku_IQ as K, is_IS as L, hi_IN as M, hr_HR as N, fr_FR as O, hu_HU as P, ms_MY as Q, it_IT as R, es_ES as S, NZ_DATE_CONFIG as St, fi_FI as T, mergeDateConfig as Tt, kmr_IQ as U, kk_KZ as V, kn_IN as W, ml_IN as X, mk_MK as Y, mn_MN as Z, de_DE as _, ur_PK as _t, NZ_I18N as a, pt_BR as at, en_GB as b, zh_HK as bt, NzI18nService as c, ru_RU as ct, bg_BG as d, sr_RS as dt, ne_NP as et, bn_BD as f, sv_SE as ft, da_DK as g, uk_UA as gt, cs_CZ as h, tr_TR as ht, DateHelperService as i, provideNzI18n as it, he_IL as j, ga_IE as k, ar_EG as l, sk_SK as lt, ca_ES as m, th_TH as mt, DateHelperByDateFns as n, nl_NL as nt, NzI18nModule as o, pt_PT as ot, by_BY as p, ta_IN as pt, lt_LT as q, DateHelperByDatePipe as r, pl_PL as rt, NzI18nPipe as s, ro_RO as st, DATE_HELPER_SERVICE_FACTORY as t, nl_BE as tt, az_AZ as u, sl_SI as ut, el_GR as v, vi_VN as vt, fa_IR as w, NZ_DATE_LOCALE as wt, en_US as x, zh_TW as xt, en_AU as y, zh_CN as yt, ja_JP as z };
