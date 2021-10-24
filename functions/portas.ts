import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const presente = numero === portaComPresente
    return new PortaModel(numero, presente)
  })
}


export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map(portaAtual => {
    const igualAModificada = portaAtual.numero === portaModificada.numero

    if (igualAModificada) {
      return portaModificada
    }
    else {
      return portaModificada.aberta ? portaAtual : portaAtual.deselecionar()
    }
  })
}
