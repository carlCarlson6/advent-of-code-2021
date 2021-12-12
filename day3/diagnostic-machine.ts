export class DiagnosticMarchine {
    private gamma: string = '';
    private epsilon: string = '';

    constructor(
        private readonly rawData: string[]
    ) {}

    processData(): void {
        this.calculateGammaRate();
        this.calculateEpsilonRate();
    }

    private calculateGammaRate() {
        throw new Error("");
    }

    private calculateEpsilonRate() {
        const epsilonArray = this.gamma.split('').map(g => g === '1'? '0': '1');
        this.epsilon = epsilonArray.join('');
    }

    get result(): number {
        return parseInt(this.gamma, 2) * parseInt(this.epsilon, 2);
    }
}
