import * as fs from "fs";

const data = fs.readFileSync("input").toString();
const lines = data.trim().split("\n");

const numberNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// Find all matches even if they overlap e.g. oneight
function matchAll(str, regex) {
  const matches = [];
  let match;
  while ((match = regex.exec(str)) != null) {
    matches.push(match[0]);
    regex.lastIndex = match.index + 1; // advance to avoid infinite loop
  }
  return matches;
}

const calibrations = lines.map((line) => {
  const regex = /\d|one|two|three|four|five|six|seven|eight|nine/g;
  const numbers = matchAll(line, regex).map((match) =>
    numberNames.includes(match) ? numberNames.indexOf(match) + 1 : Number(match)
  );

  const calibration = `${numbers[0]}${numbers[numbers.length - 1]}`;
  return Number(calibration);
});

const sum = calibrations.reduce((a, b) => a + b, 0);
console.log(sum);
