/* eslint-disable @typescript-eslint/no-unused-vars */
export {}

const add = (a: number, b: number): number => a + b

interface MyPosition {
  x: number | null
  y: number | null
}
interface MyPositionWithDefault extends MyPosition {
  default: string
}

// function position(): MyPosition
// function position(a: number): MyPositionWithDefault
// function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: null, y: 20 }
  }

  if (a && !b) {
    return { x: 42, y: null, default: a.toString() }
  }

  return {
    x: a,
    y: b,
  }
}

console.log(position());
console.log(position(100));
console.log(position(100, 200));
