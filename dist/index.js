import React, { useRef } from 'react';
import { useButton, useCalendarCell, useLocale, useCalendarGrid, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';

const Button = (props) => {
    let ref = useRef();
    let { buttonProps } = useButton(props, ref);
    let { children } = props;
    return (React.createElement("button", Object.assign({}, buttonProps, { ref: ref, style: props.btnStyles }), children));
};

function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
    * Copyright 2020 Adobe. All rights reserved.
    * This file is licensed to you under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License. You may obtain a copy
    * of the License at http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software distributed under
    * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
    * OF ANY KIND, either express or implied. See the License for the specific language
    * governing permissions and limitations under the License.
    */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
    * Copyright 2020 Adobe. All rights reserved.
    * This file is licensed to you under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License. You may obtain a copy
    * of the License at http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software distributed under
    * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
    * OF ANY KIND, either express or implied. See the License for the specific language
    * governing permissions and limitations under the License.
    */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}
const $3b62074eb05584b2$var$EPOCH = 1721426; // 001/01/03 Julian C.E.
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
  year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
  let y1 = year - 1;
  let monthOffset = -2;
  if (month <= 2) monthOffset = 0;else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
  return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
  return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
  let era = "AD";
  if (year <= 0) {
    era = "BC";
    year = 1 - year;
  }
  return [era, year];
}
const $3b62074eb05584b2$var$daysInMonth = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class $3b62074eb05584b2$export$80ee6245ec4f29ec {
  fromJulianDay(jd) {
    let jd0 = jd;
    let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
    let leapAdj = 2;
    if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
    let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
    let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
  }
  toJulianDay(date) {
    return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(date) {
    return 12;
  }
  getDaysInYear(date) {
    return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date) {
    return 9999;
  }
  getEras() {
    return ["BC", "AD"];
  }
  isInverseEra(date) {
    return date.era === "BC";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BC" ? "AD" : "BC";
      date.year = 1 - date.year;
    }
  }
  constructor() {
    this.identifier = "gregory";
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Data from https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json
// Locales starting on Sunday have been removed for compression.
const $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  // If julian is negative, then julian % 7 will be negative, so we adjust
  // accordingly.  Julian day 0 is Monday.
  let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
  if (dayOfWeek < 0) dayOfWeek += 7;
  return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
  return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
  return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
  return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
let $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
  // TODO: invalidate this somehow?
  if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
  // Use `subtract` instead of `set` so we don't get constrained in an era.
  return date.subtract({
    days: date.day - 1
  });
}
const $14e0f24ef4ac5c92$var$cachedRegions = new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
  // If the Intl.Locale API is available, use it to get the region for the locale.
  // @ts-ignore
  if (Intl.Locale) {
    // Constructing an Intl.Locale is expensive, so cache the result.
    let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
    if (!region) {
      // @ts-ignore
      region = new Intl.Locale(locale).maximize().region;
      $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
    }
    return region;
  }
  // If not, just try splitting the string.
  // If the second part of the locale string is 'u',
  // then this is a unicode extension, so ignore it.
  // Otherwise, it should be the region.
  let part = locale.split("-")[1];
  return part === "u" ? null : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
  // TODO: use Intl.Locale for this once browsers support the weekInfo property
  // https://github.com/tc39/proposal-intl-locale-info
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  return ($2fe286d2fb449abb$export$7a5acbd77d414bd9)[region] || 0;
}
function $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(date, locale) {
  let days = date.calendar.getDaysInMonth(date);
  return Math.ceil(($14e0f24ef4ac5c92$export$2061056d06d7cdf7($14e0f24ef4ac5c92$export$a5a3b454ada2268e(date), locale) + days) / 7);
}
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
  date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
  let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
  return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
  // Note: Date.UTC() interprets one and two-digit years as being in the
  // 20th century, so don't use it
  let date = new Date();
  date.setUTCHours(hour, minute, second, millisecond);
  date.setUTCFullYear(year, month - 1, day);
  return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
  // Fast path for UTC.
  if (timeZone === "UTC") return 0;
  // Fast path: for local timezone after 1970, use native Date.
  if (ms > 0 && timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)()) return new Date(ms).getTimezoneOffset() * -60000;
  let {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second
  } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
  let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
  return utc - Math.floor(ms / 1000) * 1000;
}
const $11d87f3f76e88657$var$formattersByTimeZone = new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
  let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour12: false,
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
  }
  let parts = formatter.formatToParts(new Date(ms));
  let namedParts = {};
  for (let part of parts) if (part.type !== "literal") namedParts[part.type] = part.value;
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
    month: +namedParts.month,
    day: +namedParts.day,
    hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
    minute: +namedParts.minute,
    second: +namedParts.second
  };
}
const $11d87f3f76e88657$var$DAYMILLIS = 86400000;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
  let found = earlier === later ? [earlier] : [earlier, later];
  return found.filter(absolute => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
  let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
  return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
  let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
  // Fast path: if the time zone is UTC, use native Date.
  if (timeZone === "UTC") return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
  if (timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === "compatible") {
    dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
    // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
    let date = new Date();
    let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
    date.setFullYear(year, dateTime.month - 1, dateTime.day);
    date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date.getTime();
  }
  let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
  if (valid.length === 1) return valid[0];
  if (valid.length > 1) switch (disambiguation) {
    // 'compatible' means 'earlier' for "fall back" transitions
    case "compatible":
    case "earlier":
      return valid[0];
    case "later":
      return valid[valid.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (disambiguation) {
    case "earlier":
      return Math.min(ms - offsetBefore, ms - offsetAfter);
    // 'compatible' means 'later' for "spring forward" transitions
    case "compatible":
    case "later":
      return Math.max(ms - offsetBefore, ms - offsetAfter);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
  return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
  let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0;
  if ("timeZone" in date) ({
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond
  } = date);else if ("hour" in date && !time) return date;
  if (time) ({
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond
  } = time);
  return new ($35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
  if (date.calendar.identifier === calendar.identifier) return date;
  let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
  let copy = date.copy();
  copy.calendar = calendar;
  copy.era = calendarDate.era;
  copy.year = calendarDate.year;
  copy.month = calendarDate.month;
  copy.day = calendarDate.day;
  ($735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
  return copy;
}
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
  let mutableDate = date.copy();
  let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
  $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
  if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
  mutableDate.month += duration.months || 0;
  $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
  $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
  mutableDate.day += (duration.weeks || 0) * 7;
  mutableDate.day += duration.days || 0;
  mutableDate.day += days;
  $735220c2d4774dd3$var$balanceDay(mutableDate);
  if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
  // Constrain in case adding ended up with a date outside the valid range for the calendar system.
  // The behavior here is slightly different than when constraining in the `set` function in that
  // we adjust smaller fields to their minimum/maximum values rather than constraining each field
  // individually. This matches the general behavior of `add` vs `set` regarding how fields are balanced.
  if (mutableDate.year < 1) {
    mutableDate.year = 1;
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
  if (mutableDate.year > maxYear) {
    var _mutableDate_calendar, _mutableDate_calendar_isInverseEra;
    let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
    mutableDate.year = maxYear;
    mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
    mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  if (mutableDate.month < 1) {
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
  if (mutableDate.month > maxMonth) {
    mutableDate.month = maxMonth;
    mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
  return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
  var _date_calendar, _date_calendar_isInverseEra;
  if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
  date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
  while (date.month < 1) {
    $735220c2d4774dd3$var$addYears(date, -1);
    date.month += date.calendar.getMonthsInYear(date);
  }
  let monthsInYear = 0;
  while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
    date.month -= monthsInYear;
    $735220c2d4774dd3$var$addYears(date, 1);
  }
}
function $735220c2d4774dd3$var$balanceDay(date) {
  while (date.day < 1) {
    date.month--;
    $735220c2d4774dd3$var$balanceYearMonth(date);
    date.day += date.calendar.getDaysInMonth(date);
  }
  while (date.day > date.calendar.getDaysInMonth(date)) {
    date.day -= date.calendar.getDaysInMonth(date);
    date.month++;
    $735220c2d4774dd3$var$balanceYearMonth(date);
  }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
  date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
  date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
  if (date.calendar.constrainDate) date.calendar.constrainDate(date);
  date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
  $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
  let inverseDuration = {};
  for (let key in duration) if (typeof duration[key] === "number") inverseDuration[key] = -duration[key];
  return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
  return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
  let mutableDate = date.copy();
  if (fields.era != null) mutableDate.era = fields.era;
  if (fields.year != null) mutableDate.year = fields.year;
  if (fields.month != null) mutableDate.month = fields.month;
  if (fields.day != null) mutableDate.day = fields.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
  return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
  let mutableValue = value.copy();
  if (fields.hour != null) mutableValue.hour = fields.hour;
  if (fields.minute != null) mutableValue.minute = fields.minute;
  if (fields.second != null) mutableValue.second = fields.second;
  if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
  $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
  return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
  time.second += Math.floor(time.millisecond / 1000);
  time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1000);
  time.minute += Math.floor(time.second / 60);
  time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
  time.hour += Math.floor(time.minute / 60);
  time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
  let days = Math.floor(time.hour / 24);
  time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
  return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
  time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
  time.second = Math.max(0, Math.min(time.second, 59));
  time.minute = Math.max(0, Math.min(time.minute, 59));
  time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
  let result = a % b;
  if (result < 0) result += b;
  return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
  time.hour += duration.hours || 0;
  time.minute += duration.minutes || 0;
  time.second += duration.seconds || 0;
  time.millisecond += duration.milliseconds || 0;
  return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "era":
      {
        let eras = value.calendar.getEras();
        let eraIndex = eras.indexOf(value.era);
        if (eraIndex < 0) throw new Error("Invalid era: " + value.era);
        eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
        mutable.era = eras[eraIndex];
        // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
        $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
        break;
      }
    case "year":
      var _mutable_calendar, _mutable_calendar_isInverseEra;
      if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
      // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
      // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
      // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
      mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
      if (mutable.year === -Infinity) mutable.year = 1;
      if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
      break;
    case "month":
      mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    case "day":
      mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
  return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "hour":
      {
        let hours = value.hour;
        let min = 0;
        let max = 23;
        if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
          let isPM = hours >= 12;
          min = isPM ? 12 : 0;
          max = isPM ? 23 : 11;
        }
        mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
        break;
      }
    case "minute":
      mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "second":
      mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "millisecond":
      mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
  if (round) {
    value += Math.sign(amount);
    if (value < min) value = max;
    let div = Math.abs(amount);
    if (amount > 0) value = Math.ceil(value / div) * div;else value = Math.floor(value / div) * div;
    if (value > max) value = min;
  } else {
    value += amount;
    if (value < min) value = max - (min - value - 1);else if (value > max) value = min + (value - max - 1);
  }
  return value;
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
  let gregorianDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
  return `${String(gregorianDate.year).padStart(4, "0")}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
  // @ts-ignore
  return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
  let calendar = typeof args[0] === "object" ? args.shift() : new ($3b62074eb05584b2$export$80ee6245ec4f29ec)();
  let era;
  if (typeof args[0] === "string") era = args.shift();else {
    let eras = calendar.getEras();
    era = eras[eras.length - 1];
  }
  let year = args.shift();
  let month = args.shift();
  let day = args.shift();
  return [calendar, era, year, month, day];
}
var
// This prevents TypeScript from allowing other types with the same fields to match.
// i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
// If that behavior is desired, use the AnyCalendarDate interface instead.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type = /*#__PURE__*/new WeakMap();
class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
  /** Returns a copy of this date. */copy() {
    if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(duration) {
    return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(duration) {
    return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(timeZone) {
    return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ($fae977aafc393c5c$export$60dfd74aa96791bd)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    return ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
  }
  constructor(...args) {
    (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
}
var
// This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type2 = /*#__PURE__*/new WeakMap();
class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
  /** Returns a copy of this date. */copy() {
    if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(duration) {
    return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(($735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    switch (field) {
      case "era":
      case "year":
      case "month":
      case "day":
        return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
      default:
        return ($735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(timeZone, disambiguation) {
    return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ($fae977aafc393c5c$export$4223de14708adc63)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b) {
    let res = ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
    if (res === 0) return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, ($11d87f3f76e88657$export$b21e0b124e224484)(b));
    return res;
  }
  constructor(...args) {
    (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $62225008020f0a13$var$ERA_START_DATES = [[1868, 9, 8], [1912, 7, 30], [1926, 12, 25], [1989, 1, 8], [2019, 5, 1]];
const $62225008020f0a13$var$ERA_END_DATES = [[1912, 7, 29], [1926, 12, 24], [1989, 1, 7], [2019, 4, 30]];
const $62225008020f0a13$var$ERA_ADDENDS = [1867, 1911, 1925, 1988, 2018];
const $62225008020f0a13$var$ERA_NAMES = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
  const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day]) => {
    if (date.year < year) return true;
    if (date.year === year && date.month < month) return true;
    if (date.year === year && date.month === month && date.day < day) return true;
    return false;
  });
  if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
  if (idx === 0) return 0;
  return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
  let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
  if (!eraAddend) throw new Error("Unknown era: " + date.era);
  return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
  }
  balanceDate(date) {
    let gregorianDate = $62225008020f0a13$var$toGregorian(date);
    let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
    if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
      date.era = $62225008020f0a13$var$ERA_NAMES[era];
      date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
    }
    // Constrain in case we went before the first supported era.
    this.constrainDate(date);
  }
  constrainDate(date) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let end = $62225008020f0a13$var$ERA_END_DATES[idx];
    if (end != null) {
      let [endYear, endMonth, endDay] = end;
      // Constrain the year to the maximum possible value in the era.
      // Then constrain the month and day fields within that.
      let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
      date.year = Math.max(1, Math.min(maxYear, date.year));
      if (date.year === maxYear) {
        date.month = Math.min(endMonth, date.month);
        if (date.month === endMonth) date.day = Math.min(endDay, date.day);
      }
    }
    if (date.year === 1 && idx >= 0) {
      let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
      date.month = Math.max(startMonth, date.month);
      if (date.month === startMonth) date.day = Math.max(startDay, date.day);
    }
  }
  getEras() {
    return $62225008020f0a13$var$ERA_NAMES;
  }
  getYearsInEra(date) {
    // Get the number of years in the era, taking into account the date's month and day fields.
    let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    let cur = $62225008020f0a13$var$ERA_START_DATES[era];
    let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
    if (next == null)
      // 9999 gregorian is the maximum year allowed.
      return 9999 - cur[0] + 1;
    let years = next[0] - cur[0];
    if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
    return years;
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
  }
  getMinimumMonthInYear(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start ? start[1] : 1;
  }
  getMinimumDayInMonth(date) {
    let start = $62225008020f0a13$var$getMinimums(date);
    return start && date.month === start[1] ? start[2] : 1;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "japanese";
  }
}
function $62225008020f0a13$var$getMinimums(date) {
  if (date.year === 1) {
    let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
    return $62225008020f0a13$var$ERA_START_DATES[idx];
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let gregorianDate = super.fromJulianDay(jd);
    let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(gregorianDate.era, gregorianDate.year);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
  }
  getEras() {
    return ["BE"];
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
  }
  balanceDate() {}
  constructor(...args) {
    super(...args);
    this.identifier = "buddhist";
  }
}
function $8d73d47422ca7302$var$toGregorian(date) {
  let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
  return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
  return date.era === "minguo" ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
  let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  if (y > 0) return ["minguo", y];else return ["before_minguo", 1 - y];
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    let date = super.fromJulianDay(jd);
    let extendedYear = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, date.month, date.day);
  }
  toJulianDay(date) {
    return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getEras() {
    return ["before_minguo", "minguo"];
  }
  balanceDate(date) {
    let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
    date.era = era;
    date.year = year;
  }
  isInverseEra(date) {
    return date.era === "before_minguo";
  }
  getDaysInMonth(date) {
    return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
  }
  getYearsInEra(date) {
    return date.era === "before_minguo" ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "roc" // Republic of China
    ;
  }
}

function $5f31bd6f0c8940b2$var$toGregorian(date) {
  let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)($5f31bd6f0c8940b2$var$gregorianYear(date));
  return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948321; // 622/03/19 Julian C.E.
function $f3ed2e4472ae7e25$var$isLeapYear(year) {
  let y0 = year > 0 ? year - 474 : year - 473;
  let y1 = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(y0, 2820) + 474;
  return ($2b4dce13dd5a17fa$export$842a2cf37af977e1)((y1 + 38) * 31, 128) < 31;
}
function $f3ed2e4472ae7e25$var$persianToJulianDay(year, month, day) {
  let y0 = year > 0 ? year - 474 : year - 473;
  let y1 = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(y0, 2820) + 474;
  let offset = month <= 7 ? 31 * (month - 1) : 30 * (month - 1) + 6;
  return $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 1029983 * Math.floor(y0 / 2820) + 365 * (y1 - 1) + Math.floor((31 * y1 - 5) / 128) + offset + day;
}
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
  fromJulianDay(jd) {
    let d0 = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(475, 1, 1);
    let n2820 = Math.floor(d0 / 1029983);
    let d1 = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(d0, 1029983);
    let y2820 = d1 === 1029982 ? 2820 : Math.floor((128 * d1 + 46878) / 46751);
    let year = 474 + 2820 * n2820 + y2820;
    if (year <= 0) year--;
    let yDay = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(year, 1, 1) + 1;
    let month = yDay <= 186 ? Math.ceil(yDay / 31) : Math.ceil((yDay - 6) / 31);
    let day = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(year, month, 1) + 1;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month, day);
  }
  toJulianDay(date) {
    return $f3ed2e4472ae7e25$var$persianToJulianDay(date.year, date.month, date.day);
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(date) {
    if (date.month <= 6) return 31;
    if (date.month <= 11) return 30;
    return $f3ed2e4472ae7e25$var$isLeapYear(date.year) ? 30 : 29;
  }
  getEras() {
    return ["AP"];
  }
  getYearsInEra() {
    // 9378-10-10 persian is 9999-12-31 gregorian.
    // Round down to 9377 to set the maximum full year.
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

// Starts in 78 AD,
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
  fromJulianDay(jd) {
    // Gregorian date for Julian day
    let date = super.fromJulianDay(jd);
    // Year in Saka era
    let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
    // Day number in Gregorian year (starting from 0)
    let yDay = jd - ($3b62074eb05584b2$export$f297eb839006d339)(date.era, date.year, 1, 1);
    let leapMonth;
    if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
      //  Day is at the end of the preceding Saka year
      indianYear--;
      // Days in leapMonth this year, previous Gregorian year
      leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year - 1) ? 31 : 30;
      yDay += leapMonth + 155 + 90 + 10;
    } else {
      // Days in leapMonth this year
      leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year) ? 31 : 30;
      yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
    }
    let indianMonth;
    let indianDay;
    if (yDay < leapMonth) {
      indianMonth = 1;
      indianDay = yDay + 1;
    } else {
      let mDay = yDay - leapMonth;
      if (mDay < 155) {
        indianMonth = Math.floor(mDay / 31) + 2;
        indianDay = mDay % 31 + 1;
      } else {
        mDay -= 155;
        indianMonth = Math.floor(mDay / 30) + 7;
        indianDay = mDay % 30 + 1;
      }
    }
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, indianYear, indianMonth, indianDay);
  }
  toJulianDay(date) {
    let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
    let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)(extendedYear);
    let leapMonth;
    let jd;
    if (($3b62074eb05584b2$export$553d7fa8e3805fc0)(year)) {
      leapMonth = 31;
      jd = ($3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 21);
    } else {
      leapMonth = 30;
      jd = ($3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 22);
    }
    if (date.month === 1) return jd + date.day - 1;
    jd += leapMonth + Math.min(date.month - 2, 5) * 31;
    if (date.month >= 8) jd += (date.month - 7) * 30;
    jd += date.day - 1;
    return jd;
  }
  getDaysInMonth(date) {
    if (date.month === 1 && ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
    if (date.month >= 2 && date.month <= 6) return 31;
    return 30;
  }
  getYearsInEra() {
    // 9999-12-31 gregorian is 9920-10-10 indian.
    // Round down to 9919 for the last full year.
    return 9919;
  }
  getEras() {
    return ["saka"];
  }
  balanceDate() {}
  constructor(...args) {
    super(...args);
    this.identifier = "indian";
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
  return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
  let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
  let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
  let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
  return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
  return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let length = 29 + date.month % 2;
    if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
    return length;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(date) {
    return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
  }
  getYearsInEra() {
    // 9999 gregorian
    return 9665;
  }
  getEras() {
    return ["AH"];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
  }
  toJulianDay(date) {
    return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
  }
  constructor(...args) {
    super(...args);
    this.identifier = "islamic-tbla";
  }
}
// Generated by scripts/generate-umalqura.js
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
  let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
  let mask = 0x01 << 11 - (month - 1);
  if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
  let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
  for (let i = 1; i < month; i++) day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
  return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
  return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
  fromJulianDay(jd) {
    let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
    let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
    let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
    if (days < startDays || days > endDays) return super.fromJulianDay(jd);else {
      let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
      let m = 1;
      let d = 1;
      while (d > 0) {
        y++;
        d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
        let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
        if (d === yearLength) {
          m = 12;
          break;
        } else if (d < yearLength) {
          let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
          m = 1;
          while (d > monthLength) {
            d -= monthLength;
            m++;
            monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
          }
          break;
        }
      }
      return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
    }
  }
  toJulianDay(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
    return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
  }
  getDaysInMonth(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
    return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
  }
  getDaysInYear(date) {
    if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
    return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
  }
  constructor() {
    super();
    this.identifier = "islamic-umalqura";
    if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), c => c.charCodeAt(0)).buffer);
    if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
      $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
      let yearStart = 0;
      for (let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++) {
        $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
        for (let i = 1; i <= 12; i++) yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
      }
    }
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
  return ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
  let months = Math.floor((235 * year - 234) / 19);
  let parts = 12084 + 13753 * months;
  let day = months * 29 + Math.floor(parts / 25920);
  if (($2b4dce13dd5a17fa$export$842a2cf37af977e1)(3 * (day + 1), 7) < 3) day += 1;
  return day;
}
// Check for delay in start of new year due to length of adjacent years
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
  let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
  let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
  let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
  if (next - present === 356) return 2;
  if (present - last === 382) return 1;
  return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
  return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
  return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
  let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
  if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
  switch (yearLength) {
    case 353:
      return 0;
    // deficient
    case 354:
      return 1;
    // normal
    case 355:
      return 2;
    // complete
  }
}

function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
  // Normalize month numbers from 1 - 13, even on non-leap years
  if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
  // First of all, dispose of fixed-length 29 day months
  if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
  let yearType = $7c5f6fbf42389787$var$getYearType(year);
  // If it's Heshvan, days depend on length of year
  if (month === 2) return yearType === 2 ? 30 : 29;
  // Similarly, Kislev varies with the length of year
  if (month === 3) return yearType === 0 ? 29 : 30;
  // Adar I only exists in leap years
  if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
  return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
  fromJulianDay(jd) {
    let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
    let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS; // Months (approx)
    let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
    let ys = $7c5f6fbf42389787$var$startOfYear(year); // 1st day of year
    let dayOfYear = Math.floor(d - ys);
    // Because of the postponement rules, it's possible to guess wrong.  Fix it.
    while (dayOfYear < 1) {
      year--;
      ys = $7c5f6fbf42389787$var$startOfYear(year);
      dayOfYear = Math.floor(d - ys);
    }
    // Now figure out which month we're in, and the date within that month
    let month = 1;
    let monthStart = 0;
    while (monthStart < dayOfYear) {
      monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
      month++;
    }
    month--;
    monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
    let day = dayOfYear - monthStart;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month, day);
  }
  toJulianDay(date) {
    let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
    for (let month = 1; month < date.month; month++) jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
    return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
  }
  getDaysInMonth(date) {
    return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear(date) {
    return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
  }
  getDaysInYear(date) {
    return $7c5f6fbf42389787$var$getDaysInYear(date.year);
  }
  getYearsInEra() {
    // 6239 gregorian
    return 9999;
  }
  getEras() {
    return ["AM"];
  }
  balanceYearMonth(date, previousDate) {
    // Keep date in the same month when switching between leap years and non leap years
    if (previousDate.year !== date.year) {
      if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
    }
  }
  constructor() {
    this.identifier = "hebrew";
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
  return epoch // difference from Julian epoch to 1,1,1
  + 365 * year // number of days from years
  + Math.floor(year / 4) // extra day of leap year
  + 30 * (month - 1 // number of days from months (1 based)
  ) + day - 1 // number of days for present month (1 based)
  ;
}

function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
  let year = Math.floor(4 * (jd - epoch) / 1461);
  let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
  let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
  return [year, month, day];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
  return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
  // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
  // an intercalary month at the end of the year of 5 or 6 days, depending whether
  // the year is a leap year or not. The Leap Year follows the same rules as the
  // Julian Calendar so that the extra month always has six days in the year before
  // a Julian Leap Year.
  if (month % 13 !== 0)
    // not intercalary month
    return 30;else
    // intercalary month 5 days + possible leap day
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    let era = "AM";
    if (year <= 0) {
      era = "AA";
      year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    }
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "AA") year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(date) {
    return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
  }
  getYearsInEra(date) {
    // 9999-12-31 gregorian is 9992-20-02 ethiopic.
    // Round down to 9991 for the last full year.
    // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
    return date.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return ["AA", "AM"];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
    year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, "AA", year, month, day);
  }
  getEras() {
    return ["AA"];
  }
  getYearsInEra() {
    // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
    return 9999;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "ethioaa" // also known as 'ethiopic-amete-alem' in ICU
    ;
  }
}

class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
  fromJulianDay(jd) {
    let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
    let era = "CE";
    if (year <= 0) {
      era = "BCE";
      year = 1 - year;
    }
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
  }
  toJulianDay(date) {
    let year = date.year;
    if (date.era === "BCE") year = 1 - year;
    return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
  }
  getDaysInMonth(date) {
    let year = date.year;
    if (date.era === "BCE") year = 1 - year;
    return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
  }
  isInverseEra(date) {
    return date.era === "BCE";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BCE" ? "CE" : "BCE";
      date.year = 1 - date.year;
    }
  }
  getEras() {
    return ["BCE", "CE"];
  }
  getYearsInEra(date) {
    // 9999-12-30 gregorian is 9716-02-20 coptic.
    // Round down to 9715 for the last full year.
    // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
    return date.era === "BCE" ? 9999 : 9715;
  }
  constructor(...args) {
    super(...args);
    this.identifier = "coptic";
  }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

function $64244302c3013299$export$dd0bbc9b26defe37(name) {
  switch (name) {
    case "buddhist":
      return new ($8d73d47422ca7302$export$42d20a78301dee44)();
    case "ethiopic":
      return new ($b956b2d7a6cf451f$export$26ba6eab5e20cd7d)();
    case "ethioaa":
      return new ($b956b2d7a6cf451f$export$d72e0c37005a4914)();
    case "coptic":
      return new ($b956b2d7a6cf451f$export$fe6243cbe1a4b7c1)();
    case "hebrew":
      return new ($7c5f6fbf42389787$export$ca405048b8fb5af)();
    case "indian":
      return new ($82c358003bdda0a8$export$39f31c639fa15726)();
    case "islamic-civil":
      return new ($f2f3e0e3a817edbd$export$2066795aadd37bfc)();
    case "islamic-tbla":
      return new ($f2f3e0e3a817edbd$export$37f0887f2f9d22f7)();
    case "islamic-umalqura":
      return new ($f2f3e0e3a817edbd$export$5baab4758c231076)();
    case "japanese":
      return new ($62225008020f0a13$export$b746ab2b60cdffbf)();
    case "persian":
      return new ($f3ed2e4472ae7e25$export$37fccdbfd14c5939)();
    case "roc":
      return new ($5f31bd6f0c8940b2$export$65e01080afcb0799)();
    case "gregory":
    default:
      return new ($3b62074eb05584b2$export$80ee6245ec4f29ec)();
  }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function CalendarCell(_a) {
    var { state, date } = _a, props = __rest(_a, ["state", "date"]);
    let ref = React.useRef(null);
    let { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, isUnavailable, formattedDate, } = useCalendarCell({ date }, state, ref);
    return (React.createElement("td", Object.assign({}, cellProps),
        React.createElement("div", Object.assign({ style: Object.assign({ background: `${isSelected
                    ? props.cellBackgroundSelected
                    : props.cellBackgroundNonSelected}` }, props.cellStyles) }, buttonProps, { ref: ref, hidden: isOutsideVisibleRange, className: `cell ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""} ${isUnavailable ? "unavailable" : ""}` }), formattedDate)));
}

function CalendarGrid(_a) {
    var { state } = _a, props = __rest(_a, ["state"]);
    let { locale } = useLocale();
    let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
    // Get the number of weeks in the month so we can render the proper number of rows.
    let weeksInMonth = $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(state.visibleRange.start, locale);
    return (React.createElement("table", Object.assign({}, gridProps),
        React.createElement("thead", Object.assign({}, headerProps),
            React.createElement("tr", null, weekDays.map((day, index) => {
                var _a, _b;
                return (React.createElement("th", { style: Object.assign(Object.assign({}, (_a = props === null || props === void 0 ? void 0 : props.gridStyles) === null || _a === void 0 ? void 0 : _a.weekStyles), { color: (_b = props === null || props === void 0 ? void 0 : props.gridStyles) === null || _b === void 0 ? void 0 : _b.weekColor }), key: index }, day));
            }))),
        React.createElement("tbody", null, [...new Array(weeksInMonth).keys()].map((weekIndex) => (React.createElement("tr", { key: weekIndex }, state
            .getDatesInWeek(weekIndex)
            .map((date, i) => {
            var _a, _b, _c;
            return date ? (React.createElement(CalendarCell, { key: i, state: state, date: date, cellBackgroundNonSelected: (_a = props === null || props === void 0 ? void 0 : props.gridStyles) === null || _a === void 0 ? void 0 : _a.cellBackground, cellBackgroundSelected: (_b = props === null || props === void 0 ? void 0 : props.gridStyles) === null || _b === void 0 ? void 0 : _b.cellBackgroundSelected, cellStyles: Object.assign({}, (_c = props === null || props === void 0 ? void 0 : props.gridStyles) === null || _c === void 0 ? void 0 : _c.cellStyles) })) : (React.createElement("td", { key: i }));
        })))))));
}

function RangeCalendar(props) {
    let { locale } = useLocale();
    let state = useRangeCalendarState(Object.assign(Object.assign({}, props), { locale,
        createCalendar: $64244302c3013299$export$dd0bbc9b26defe37 }));
    let ref = React.useRef(null);
    let { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar(props, state, ref);
    return (React.createElement("div", Object.assign({}, calendarProps, { ref: ref, className: "calendar" }),
        React.createElement("div", { className: "header" },
            React.createElement("h2", { style: props.headreStyle }, title),
            React.createElement(Button, Object.assign({ btnStyles: Object.assign(Object.assign({}, props.btnStyles), { background: props.btnBackground }) }, prevButtonProps), "<"),
            React.createElement(Button, Object.assign({ btnStyles: Object.assign(Object.assign({}, props.btnStyles), { background: props.btnBackground }) }, nextButtonProps), ">")),
        React.createElement(CalendarGrid, { state: state, gridStyles: {
                weekStyles: props.weekStyles,
                cellStyles: props.cellStyles,
                weekColor: props.weekColor,
                cellBackground: props.cellBackground,
                cellBackgroundSelected: props.cellBackgroundSelected,
            } })));
}

export { Button, RangeCalendar };
