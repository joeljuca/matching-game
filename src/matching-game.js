var App = App || {}

App.MatchingGame = (function () {
  var lastCard

  function start () {
    console.log('The Matching Game is starting')

    var numbers = App.RandomNumbers(8)

    var boardHTML = '<div class="board">@content</div>'

    var cardsHTML = ''
    for (var i = 0; i < numbers.length; i++) {
      var cardHTML = '<div class="card" data-id="@id">@content</div>'
      cardHTML = cardHTML
        .replace('@content', numbers[i])
        .replace('@id', i)
      cardsHTML += cardHTML
    }

    boardHTML = boardHTML.replace('@content', cardsHTML)

    $('#root').html(boardHTML)
    $('#root .card').mousedown(function (ev) {
      var card = $(ev.target)

      if (card.hasClass('done')) return

      card.css('background', 'red')

      if (lastCard && card.data('id') !== lastCard.data('id') && card.html() === lastCard.html()) {
        card.css('background', 'red').addClass('done')
        lastCard.css('background', 'red').addClass('done')
      }
    })




    $('#root .card').mouseup(function (ev) {
      var card = $(ev.target)

      if (card.hasClass('done')) return

      card.css('background', 'black')
      lastCard = card
    })
  }

  return {
    start: start
  }
})()
