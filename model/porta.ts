export default class PortaModel {
  #numero: number
  #presente: boolean
  #selecionada: boolean
  #aberta: boolean

  constructor(numero: number, presente = false, selecionada = false, aberta = false) {
    this.#numero = numero;
    this.#presente = presente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  get numero() {
    return this.#numero;
  }

  get presente() {
    return this.#presente;
  }

  get selecionada() {
    return this.#selecionada;
  }

  get aberta() {
    return this.#aberta;
  }

  get fechada() {
    return !this.aberta;
  }

  deselecionar() {
    const selecionada = false;
    return new PortaModel(this.numero, this.presente, selecionada, this.aberta);
  }

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(this.numero, this.presente, selecionada, this.aberta);
  }

  abrir() {
    const aberta = true;
    return new PortaModel(this.numero, this.presente, this.selecionada, aberta);
  }
}
