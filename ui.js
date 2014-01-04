(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var game = new Hanoi.Game();



  var TowersUI = Hanoi.TowersUI = function () {

    TowersUI.prototype.startClickHandler = function() {
      var startTower = this;

      $('.peg').on('click', function () {
        var that = $(this);
        startTower.start = $(this).data('peg');
        $('.peg').off();
        $('.peg').on('click', endTower);
      })
      function endTower() {
        var end = $(this).data('peg');
        game.takeTurn(parseInt(startTower.start), parseInt(end));
        $('.peg').off();
        startTower.render();
        if (game.isWon()) {
          alert("You win!");
        }
        startTower.startClickHandler();
      }

    }

    TowersUI.prototype.render = function() {
      $('.peg').each( function(idx, value) {
        console.log(value);
        $(value).html(" ");
        game.towers[idx].forEach( function (disc) {
          $(value).prepend('<div class="disc" style="width:' + 20 * disc + 'px"> </div>');
        });
      });
    }
  };

  $(document).ready(function () {
    var UI = new TowersUI();
    UI.render();
    UI.startClickHandler();
  })


})(this)

