(function (win, doc, $) {

  var google_map = {
    canvas: null,
    map: null,
    geocoder: new google.maps.Geocoder(),
    options: {
      center: new google.maps.LatLng(35.681382,139.766084),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    initialize: function() {
      var canvas = this.canvas,
          options = this.options,
          map = new google.maps.Map(canvas, options);

      this.map = map;
    },
    geocode: function (address) {
      var geocoder = this.geocoder,
          that = this;
      geocoder.geocode({"address": address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latlng = results[0].geometry.location;
          that.map.setCenter(latlng);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    },
    reverse_geocode: function () {
    },
    create: function (elem) {
      this.canvas = elem;
      this.initialize();
      return this;
    }
  };

  win.google_map_wrapper = google_map;

} (window, document, jQuery))