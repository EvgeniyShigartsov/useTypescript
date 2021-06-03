export {}

enum Status {
  pending, // 0
  accepted, // 1
  rejected // 2
}

const request = Status.pending
console.log(request) // 0
