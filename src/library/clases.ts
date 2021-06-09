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

//   something: string

//   constructor(readonly model: string) {
//     this.something = 'some'
//   }
// }

class Animal {
  protected voice: string

  public color = 'tomato'

  constructor(voice: string, color: string) {
    this.voice = voice
    this.color = color
  }

  private go() {
    console.log(this.voice)
  }
}
const test = new Animal('some', 'som')
console.log(test)

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}
const cat = new Cat('voice', 'black')

/// /////////////////////////////////////////

abstract class Component {
  abstract render(): void | undefined

  abstract info(): string
}

class AppComponent extends Component {
  info(): string {
    const a = this.info
    return ''
  }

  render(): void {
    const b = this.render

    return undefined
  }
}
