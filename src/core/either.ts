/**
 * FUNCTIONAL ERROR HANDLING
 * LEFT / RIGHT
 *
 * UI -> CONTROLLER -> CASOS DE USO -> ENTIDADE -> CASOS DE USO -> REPOSITORIO -> BANCO DE DADOS (FLUXO INDO PARA DENTRO (RIGHT))
 *
 * Quando colocado na função this is -> estamos informando ao typescript que no Caso da Classe<Left|Right> quando ela for chamado
 * o método isRight, eu assumo automaticamente que o retorno dali para frente da variavel é do Tipo Right ou Left
 */

// Error
export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return false
  }

  isLeft(): this is Left<L, R> {
    return true
  }
}

// Sucess
export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return true
  }

  isLeft(): this is Left<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
