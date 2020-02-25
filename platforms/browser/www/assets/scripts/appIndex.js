$('#app').hide()
let localDB = window.localStorage


function pushPage(__url){
    setTimeout(function(){
        window.location = __url
    }, 500)
}

if(localDB.getItem("sesIntro") != 1){
    pushPage("intro/index.html")
}
else{
    if(localDB.getItem("sesLogged") != 1){
        pushPage("intro/index.html")
    }
    else{
        setTimeout(function(){
           $('#app').fadeIn("slow")
        },200)
    }
}
