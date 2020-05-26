function compare(a, b) {
  if (a.order > b.order) {
    return 1
  }
  if (a.order < b.order) {
    return -1
  }
  return 0;
}

var m = [{id: 1, order: 0}, {id: 2, order: 0}, {id: 3, order: 0}, {id: 4, order: 0}, {id: 5, order: 0}, {id: 6, order: 0}, {id: 7, order: 0}, {id: 8, order: 0}, {id: 9, order: 0}, {id: 10, order: 0}, {id: 11, order: 0}];

console.log(m.sort(compare));