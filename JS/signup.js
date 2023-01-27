$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#password").val();
        var confpass = $("#confirmpassword").val();

        if(name.length == ""){
            $("#p1").text("Please enter your name");
            $("#name").focus();
            return false;
        }
        else if(email.length == ""){
            $("#p2").text("Please enter your email");
            $("#email").focus();
            return false;
        }
        else if(pass.length == ""){
            $("#p3").text("Please enter your password");
            $("#password").focus();
            return false;
        }
        else if(confpass != pass){
            $("#p4").text("Please check your password");
            $("#confirmpassword").focus();
            return false;
        }
        else{
            var registrer = confirm("Aviez-vous fini? Si oui cliquez sur 'oui'");
            if(registrer == true){
                alert("Cliquez sur 'OK' afin que nous puissions de bien revérifier vos informations et de vous redirigez vers votre page d'acceuil");
                return true;
            }
            else{
                return false;
            }
        }
    })
})