var Map = (function() {
    var map;
    function changeCenter(lat, long) {
        var newcenter = new google.maps.LatLng(lat, long);
        map.setCenter(newcenter);
    }
    function findnewlocation(e) {
        e.preventDefault();
        var address = $('#loc').val();
        $.ajax({
            url : 'https://maps.googleapis.com/maps/api/geocode/json',
            method: 'GET', 
            data: {'address' : address},
            dataType: 'json',
            success: function(data) {
                var location = data.results[0].geometry.location;
                changeCenter(location.lat, location.lng);
            },
            error : function() {
            },
        });
    }
    function init() {
        var mapProp = {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:15,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        navigator.geolocation.getCurrentPosition(function (pos) {
            changeCenter(pos.coords.latitude, pos.coords.longitude);
        });
        $('#btn').click(findnewlocation);
    }
    return {
        init : init
    };
})();
