import { read, readFileSync } from "fs";
import { DiagnosticMarchine } from "./diagnostic-machine";

const readInput = (): string[] => readFileSync('./day3/input.txt', 'utf-8').split('\n');
const rawData = readInput();

const diagnostic = new DiagnosticMarchine();
diagnostic.processData(rawData);

const powerConsumption = diagnostic.calculatePowerConsumption();
console.log(powerConsumption);