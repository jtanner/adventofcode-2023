// https://adventofcode.com/2023/day/1

import * as fs from "fs";

const data = fs.readFileSync("input").toString();
const lines = data.trim().split("\n");

const calibrations = lines.map((line) => {
  const numbers = line.match(/\d/g) || [];
  const calibration = `${numbers[0]}${numbers[numbers.length - 1]}`;
  return Number(calibration);
});

const sum = calibrations.reduce((a, b) => a + b, 0);
console.log(sum);
