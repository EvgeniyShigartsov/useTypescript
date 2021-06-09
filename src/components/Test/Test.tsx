/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-this-in-sfc */
import React, { FC } from 'react'

export const Test: FC = () => {
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

  return null
}
