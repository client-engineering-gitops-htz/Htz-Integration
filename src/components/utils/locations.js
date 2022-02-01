import { MenuItem } from "@blueprintjs/core";
import * as React from "react";
const usLocations = require("../../assets/ATPxref_US_first_20.json");

export const importedUSLocations = usLocations.map((l, index) => ({
  ...l,
  rank: index + 1,
}));

export const renderLocation = (data, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${data.OAG_CODE}`;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={data.LOC_NM}
      key={data.rank}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

export const filterLocation = (query, location) => {
  return (
    `${
      location.rank
    }. ${location.OAG_CODE.toLowerCase()} ${location.LOC_NM.toLowerCase()}`.indexOf(
      query.toLowerCase()
    ) >= 0
  );
};

function highlightText(text, query) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const locationSelectProps = {
  itemPredicate: filterLocation,
  itemRenderer: renderLocation,
  items: importedUSLocations,
};
