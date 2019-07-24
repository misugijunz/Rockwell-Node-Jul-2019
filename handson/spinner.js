var spinner = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      up: function() {
        changeBy(1);
        console.log(privateCounter)
      },
      down: function() {
        changeBy(-1);
        console.log(privateCounter)
      },
      value: function() {
        return privateCounter;
      }
    };
  })();