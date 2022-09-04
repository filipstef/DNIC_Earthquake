var data1;
function loadModal(i)
{
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    var title = data1.features[i].properties.title;
    var mag = data1.features[i].properties.mag;
    var location = data1.features[i].properties.place;

    var time = data1.features[i].properties.time;
    var date = new Date(time);

    //var time = date.getHours() +":"+ (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes() )
    var url = data1.features[i].properties.url;

    $('#modal-title').html(title);
    $('#modal-location').html("<b>Location: </b>>"+location);
    $('#modal-mag').html("<b>Magnitude: </b>"+mag);
    $('#modal-time').html("<b>Time of earthquake: </b>"+date.getHours() +":"+ (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes() ));
    $('#modal-url').html("<b>More info at: </b><a href='"+url+"' target='_blank'>"+url+"</a>");

}

$(document).ready(function () {
    $.ajax(
        {
            url:'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson',
            type:'GET',
            //dataType:"JSON",
            data:JSON.stringify({ }),
            success:function(data){
                data1 = data;
                for(var i=0; i<15; i++)
                {
                    var place = data.features[i].properties.title;
                    var magnitude = data.features[i].properties.mag;
                    var time = data.features[i].properties.time;

                    var date = new Date(time);

                    $('#ListGrp').append(
                        "<a href='#' class='list-group-item list-group-item-action d-flex gap-3 py-3' aria-current='false' onclick='loadModal("+i+")' data-toggle='modal' data-target='#exampleModal'>" +
                        "<img src='https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png' alt='twbs' class='rounded-circle flex-shrink-0' width='32' height='32'>"+
                        "<div class='d-flex gap-2 w-100 justify-content-between'>" +
                        "<div>"+
                        "<h6 class='mb-0'>"+place+"</h6>" +
                        //"<p class='mb-0 opacity-75'>"+magnitude+"</p>" +
                        "</div>" +
                        "<small class='opacity-50 text-nowrap'>"+date.getHours() +":"+ (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes() )+"</small>" +
                        "</div>" +
                        "</a>"
                    );
                }
            }
        });
});

function deleteModalData()
{
    var t = document.getElementById('#modal-title');
    t.innerText="";
}