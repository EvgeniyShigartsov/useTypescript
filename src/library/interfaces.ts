export {}

interface Rect {
  id: string
  size: {
    height: number
    width: number
  }
}
interface Rect2 {
  readonly id: string
  color?: string
  size: {
    height: number
    width: number
  }
}

const rect1 = {} as Rect

rect1.size = {
  width: 100,
  height: 100,
}
rect1.id = 'someID'

const rect2 = <Rect2>{
  id: '100',
}
const rect3: Rect2 = {
  id: '10',
  size: {
    width: 20,
    height: 20,
  },
}

/// //////////
interface RectWithArea extends Rect2 {
  getArea: (scale: number) => number
}

const rect4: RectWithArea = {
  id: '1',
  color: 'gray',
  size: {
    width: 100,
    height: 100,
  },
  getArea(scale) {
    return (this.size.height + this.size.width) * scale
  },
}
interface RectWithArea2 extends Rect2 {
  getArea(scale: number): number
}

const rect5: RectWithArea2 = {
  id: '1',
  color: 'gray',
  size: {
    width: 100,
    height: 100,
  },
  getArea(scale) {
    return (this.size.height + this.size.width) * scale
  },
}

interface IClock{
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

interface Styles {
  [key: string]: string
}

const css: Styles = {
  transform: 'translateX(-20px)',
  color: 'tomato',
  margin: '20px',
}
