$('#app').hide()
let localDB = window.localStorage

if(localDB.getItem("sesIntro") != 1){
    function pushPage(__url){
        setTimeout(function(){
            window.location = __url
        }, 500)
    }
    pushPage("intro/index.html")
}
else{
    setTimeout(function(){
       $('#app').fadeIn("slow")
    },200)
}
