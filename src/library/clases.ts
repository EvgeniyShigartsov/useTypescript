/* eslint-disable max-classes-per-file */
export {}

class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly model: string

  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
    this.model = theModel
  }
}

// class Car2 {
//   readonly numberOfWheels: number = 4

//   constructor(readonly model: string) {}
// }
