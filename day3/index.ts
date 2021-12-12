import { read, readFileSync } from "fs";
import { DiagnosticMarchine } from "./diagnostic-machine";

const readInput = (): string[] => readFileSync('./day3/input.txt', 'utf-8').split('\n');
const rawData = readInput();

const diagnostic = new DiagnosticMarchine(rawData);
diagnostic.processData();

console.log(diagnostic.result);