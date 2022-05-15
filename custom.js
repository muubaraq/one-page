$('.filter-button').on('click', (e) => {
  const filter = $(e.target).attr('data-filter');
  console.log(filter);
 	const items = $('.item-content').parent();
  for (item of items) {
    if (filter == '') {
      
        $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');
      
     
      console.log('x');
    }else if ($(item).attr('data-category') == filter) {
      $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');
    } else {
      $(item).addClass('d-none');
      $(item).parent().addClass('d-none');
      $(item).removeClass('animated zoomIn faster');
      $(item).parent().removeClass('animated zoomIn faster');
    }
  }
});



// Regular map
function regular_map() {
  var var_location = new google.maps.LatLng(40.725118, -73.997699);

  var var_mapoptions = {
    center: var_location,
    zoom: 14
  };

  var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);

  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title: "New York"
  });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
