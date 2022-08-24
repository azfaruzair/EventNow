$(function(){
    $('a#logout').click(function(){
        if(confirm('Are you sure to logout')) {
            return true;
        }

        return false;
    });
});

myFunction()

    var select = document.getElementById('events');
var option;

for (var i=0; i<select.options.length; i++) {
option = select.options[i];

if (option.text == 'PUBG Gaming') {
// or
//  {
 option.setAttribute('selected', true);

 // For a single select, the job's done
 return; 
    } 
}

/*
$("#events option[value=4]").prop("selected", "selected");

("#events option").val('4')​.attr("selected", true);​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

$('#events > option[value *= "4"] ').attr('selected',true);

*/
