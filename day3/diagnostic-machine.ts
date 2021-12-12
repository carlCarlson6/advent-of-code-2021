export class DiagnosticMarchine {
    private gamma = '';
    private epsilon = '';
    private oxygenGeneratorRate = '';
    private CO2ScrubberRating = '';

    processGammaEpsilonRates(binaryData: string[]): void {
        this.gamma = this.transpose(binaryData.map(data => data.split(''))).map(data => this.mode(data)).join('');
        this.epsilon = this.gamma.split('').map(g => g === '1'? '0': '1').join('');
    }

    calculatePowerConsumption(): number {
        return parseInt(this.gamma, 2) * parseInt(this.epsilon, 2);
    }

    processOxygenCO2Rates(binaryData: string[]): void {}

    calculateLifeSupportRating(): number {
        return parseInt(this.oxygenGeneratorRate, 2) * parseInt(this.CO2ScrubberRating, 2);
    }

    private transpose(matrix: string[][]): string[][] {
        return matrix[0].map((x,i) => matrix.map(x => x[i]));
    }

    private mode(arr: string[]): string {
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop()!;
    }
}
