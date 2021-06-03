/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

interface PrimitiveTypes {
  string: string,
  number: number,
  boolean: boolean,
  null: null,
  undefined: undefined
}

interface BasicTypes {
  symbol: symbol,
  bigint: bigint,
  function: () => void | any
  object: {
    primitive: PrimitiveTypes,
    orOtherObj: PrimitiveTypes
  }
}

interface ArrayTypes {
  anyArray: any[]
}

interface TSTypes {
  tuple: [string, number, boolean, 'etc']
  any: any
  void: void // usually using in functions
  never: never // usually using in functions that will NEVER stop, like thow new Error, or has Infinity Loop
}

// custom types

type IsAdmin = boolean
const admin: IsAdmin = true

type ID = string | number
const firstID: ID = 42
const secondID: ID = 'someID'
