var simulationIsRunning = false;// Now, the animation time!$('#start').on({  click: function(){    simulationIsRunning = true;    document.getElementById('start').className = 'small button secondary disabled';    document.getElementById('stop').className = 'small button alert';    document.getElementById('slider').className = 'range-slider radius vertical-range disabled';  }});$('#stop').on({  click: function(){    simulationIsRunning = false;    document.getElementById('start').className = 'small button success';    document.getElementById('stop').className = 'small button secondary disabled';    document.getElementById('slider').className = 'range-slider radius vertical-range';  }});