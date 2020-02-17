
// Local Database
let localDB = window.localStorage

$('#app').hide()
setTimeout(function(){
   $('#app').fadeIn("slow")
},200)

function pushPage(__url){
    setTimeout(function(){
        $('#app').fadeOut("slow")
    }, 200)
    setTimeout(function(){
        window.location = __url
    }, 500)
}