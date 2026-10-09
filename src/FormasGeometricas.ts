function validarDimensoes(...dimensoes: number[]): void {
  for (const dimensao of dimensoes) {
    if (!Number.isFinite(dimensao)) {
      throw new TypeError('As dimensões devem ser números finitos.');
    }

    if (dimensao < 0) {
      throw new RangeError('As dimensões não podem ser negativas.');
    }
  }
}

export abstract class Forma {
  protected constructor(public readonly nome: string) {}

  abstract CalcularArea(): number;
}

export class Quadrado extends Forma {
  constructor(public readonly lado: number) {
    super('Quadrado');
    validarDimensoes(lado);
  }

  CalcularArea(): number {
    return this.lado * this.lado;
  }
}

export class Circulo extends Forma {
  constructor(public readonly raio: number) {
    super('Circulo');
    validarDimensoes(raio);
  }

  CalcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

export class Triangulo extends Forma {
  constructor(
    public readonly base: number,
    public readonly altura: number,
  ) {
    super('Triangulo');
    validarDimensoes(base, altura);
  }

  CalcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

export class Retangulo extends Forma {
  constructor(
    public readonly base: number,
    public readonly altura: number,
  ) {
    super('Retangulo');
    validarDimensoes(base, altura);
  }

  CalcularArea(): number {
    return this.base * this.altura;
  }
}
