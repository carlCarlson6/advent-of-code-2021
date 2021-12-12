export class DiagnosticMarchine {
    private gamma: string = '';
    private epsilon: string = '';

    processData(binaryData: string[]): void {
        this.gamma = this.calculateGammaRate(binaryData);
        this.epsilon = this.calculateEpsilonRate(this.gamma);
    }

    private calculateGammaRate(binaryData: string[]): string {        
        return this.transpose(binaryData.map(data => data.split(''))).map(data => this.mode(data)).join('');
    }

    private calculateEpsilonRate(gammaRate: string): string {
        return this.gamma.split('').map(g => g === '1'? '0': '1').join('');
    }

    calculatePowerConsumption(): number {
        return parseInt(this.gamma, 2) * parseInt(this.epsilon, 2);
    }

    private transpose(matrix: string[][]) {
        return matrix[0].map((x,i) => matrix.map(x => x[i]));
    }

    private mode(arr: string[]){
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }
}
