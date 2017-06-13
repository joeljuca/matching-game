var App = App || {}

App.RandomNumbers = (function () {
  function randomNumbers (quantity) {
    var numbers = []

    for (var i = 1; i <= quantity; i++) {
      numbers.push(i)
      numbers.push(i)
    }

    numbers.sort(function () {
      return Math.round(Math.random())
        ? -1
        : 1
    })

    return numbers
  }

  return randomNumbers
})()
