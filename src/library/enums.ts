/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
export {}

enum Status {
  pending, // 0
  accepted, // 1
  rejected // 2
}

const request = Status.pending
console.log(request) // 0
const requestReverse = Status[2]
const requestReverse2 = Status[100]

console.log(requestReverse)
console.log(requestReverse2)

enum ProgrammingLaunguages {
  JS = 'JS',
  PHYTON = 'PHYTON',
  JAVA = 'JAVA',
  SCALA = 'SCALA'
}

const bestLang = ProgrammingLaunguages.JS
