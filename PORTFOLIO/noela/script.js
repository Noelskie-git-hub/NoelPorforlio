// script.js
// function SendMail(){
    
//        var from_name = document.getElementById("fullName");
//        var email_id = document.getElementById("email_id");
//        var message = document.getElementById("message");
//     if(from_name.value == "" || email_id.value ==""){
//         document.getElementById("fullName").disable=true;
//         document.getElementById("email_id").disable=true;
//     }else{
//         emailjs.send("service_13r8kjc","template_trj1tyl", params)
//         .then(function (res){
//             alert("Success!" + res.status);
//     })
//     }
// }


function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_13r8kjc","template_trj1tyl", params)
        .then(function (res){
            alert("Success!" + res.status);
    })
}