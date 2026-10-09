function validarDimensoes(...dimensoes) {
  for (const dimensao of dimensoes) {
    if (typeof dimensao !== 'number' || !Number.isFinite(dimensao)) {
      throw new TypeError('As dimensões devem ser números finitos.');
    }

    if (dimensao < 0) {
      throw new RangeError('As dimensões não podem ser negativas.');
    }
  }
}

export class Forma {
  constructor(nome) {
    if (new.target === Forma) {
      throw new TypeError('Forma é uma classe abstrata e não pode ser instanciada.');
    }

    this.nome = nome;
  }

  CalcularArea() {
    throw new Error('As classes concretas devem implementar CalcularArea().');
  }
}

export class Quadrado extends Forma {
  constructor(lado) {
    super('Quadrado');
    validarDimensoes(lado);
    this.lado = lado;
  }

  CalcularArea() {
    return this.lado * this.lado;
  }
}

export class Circulo extends Forma {
  constructor(raio) {
    super('Circulo');
    validarDimensoes(raio);
    this.raio = raio;
  }

  CalcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

export class Triangulo extends Forma {
  constructor(base, altura) {
    super('Triangulo');
    validarDimensoes(base, altura);
    this.base = base;
    this.altura = altura;
  }

  CalcularArea() {
    return (this.base * this.altura) / 2;
  }
}

export class Retangulo extends Forma {
  constructor(base, altura) {
    super('Retangulo');
    validarDimensoes(base, altura);
    this.base = base;
    this.altura = altura;
  }

  CalcularArea() {
    return this.base * this.altura;
  }
}
