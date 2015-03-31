$(window).load(function() {
  
  // Store the list element.
  var obj = $('.portrait-details');
  // Store half width of the portrait div.
  var push = $('.portrait').width() / 2;
  
  // Since every list element will have different content widths make an individual function for each of it.
  obj.each(function() {
    // Step 1: Get width of list element
    var objWidth = $(this).outerWidth();
    // Step 2: Pull list element to the left by half of its own width to align its own center with the left side of the portrait div. Then push back half of portrait width (stored above) to align both their center axes.
    $(this).css('margin-left', -(objWidth / 2 - push) + 'px');
  });
  
  // Make a mouse event function. I used click because I don't like the user to get attacked by stuff out of nowhere. The pointer should be enough of an indicator.
  $('.portrait').on('click', function(e) {
    // Prevent parent DOM from firing any of this.
    e.stopPropagation();
    // Only fire if it is the actual element, no childs allowed.
    if(e.target != this) return;
    // Toggle a class and make siblings remove it.
    $(this).toggleClass('show').siblings().removeClass('show');
  });
  
  // Too keep this intuitive make a second function to remove on document click. (Don't force mouse movements.)
  $(document).click(function() {
    $('.portrait').removeClass('show');
  });
  
});


var chart_1= new CanvasJS.Chart("chartContainer1", {
    title:{
        text: "Basic chart with date time values"
    },
    axisX:{
        minimum: new Date(2002,0,1),
        valueFormatString: "YYYY"
    },
    data: [
        {
            type: "line",
            dataPoints: [
                { x: new Date(2002,6,8), y : 2.0 },
                { x: new Date(2006,10,19), y : 1.0 },
                { x: new Date(2007,5,15), y : 1.0 },
                { x: new Date(2008,3,25), y : 2.0 },
                { x: new Date(2009,12,22), y : 1.0 },
                { x: new Date(2011,7,21), y : 2.0 },
                { x: new Date(2011,11,17), y : 2.0 },
                { x: new Date(2011,12,8), y : 2.0 },
                { x: new Date(2012,4,15), y : 2.0 },
                { x: new Date(2011,10,20), y : 2.0 }
            ]
        }
    ]
});
chart_1.render();

// Weight.html script

var chart_1= new CanvasJS.Chart("chartContainer1", {
    title:{
        text: "Basic chart with date time values"
    },
    axisX:{
        minimum: new Date(2002,0,1),
        valueFormatString: "YYYY"
    },
    data: [
        {
            type: "line",
            dataPoints: [
                { x: new Date(2002,6,8), y : 2.0 },
                { x: new Date(2006,10,19), y : 1.0 },
                { x: new Date(2007,5,15), y : 1.0 },
                { x: new Date(2008,3,25), y : 2.0 },
                { x: new Date(2009,12,22), y : 1.0 },
                { x: new Date(2011,7,21), y : 2.0 },
                { x: new Date(2011,11,17), y : 2.0 },
                { x: new Date(2011,12,8), y : 2.0 },
                { x: new Date(2012,4,15), y : 2.0 },
                { x: new Date(2011,10,20), y : 2.0 }
            ]
        }
    ]
});
chart_1.render();

