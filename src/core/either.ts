/**
 * FUNCTIONAL ERROR HANDLING
 * ERROR / SUCCESS
 *
 * UI -> CONTROLLER -> CASOS DE USO -> ENTIDADE -> CASOS DE USO -> REPOSITORIO -> BANCO DE DADOS (FLUXO INDO PARA DENTRO (SUCCESS))
 *
 * Quando colocado na função this is -> estamos informando ao typescript que no Caso da Classe<Error|Success> quando ela for chamado
 * o método isSuccess, eu assumo automaticamente que o retorno dali para frente da variavel é do Tipo Success ou Error
 */

// Error
export class Error<E, S> {
  readonly value: E

  constructor(value: E) {
    this.value = value
  }

  isSuccess(): this is Success<E, S> {
    return false
  }

  isError(): this is Error<E, S> {
    return true
  }
}

// Sucess
export class Success<E, S> {
  readonly value: S

  constructor(value: S) {
    this.value = value
  }

  isSuccess(): this is Success<E, S> {
    return true
  }

  isError(): this is Error<E, S> {
    return false
  }
}

export type Either<E, S> = Error<E, S> | Success<E, S>

export const error = <E, S>(value: E): Either<E, S> => {
  return new Error(value)
}

export const success = <E, S>(value: S): Either<E, S> => {
  return new Success(value)
}
