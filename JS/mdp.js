$(document).ready(function(){
    $("#submit1").click(function(){
        var email = $("#email").val();
        if(email.length == ""){
            $("#p2").text("Please enter your email");
            $("#email").focus();
            return false;
        }
        else{
            var code = confirm("Un code vous avez été envoyé à votre email")
            if(code == true){
                alert("Entrez le code dans son champ spécifique")
            }
        }
    })
    $("#submit2").click(function(){
        var submit1 = $("#submit1").val();
        var email = $("#email").val();
        var pass = $("#password").val();
        if(pass.length == "", email.length == ""){
            $("#p2").text("Please enter your email");
            $("#email").focus();
            $("#p3").text("Please enter your password");
            $("#password").focus();
            return false;
        }
        else if(email.length == "", pass.length == ""){
            $("#p2").text("Please enter your email");
            $("#email").focus();
            $("#p3").text("Please enter your password");
            $("#password").focus();
            return false;
        }
        else if(submit1.click == ""){
            alert("Veuillez cliquez sur recevoir un code")
            return false
        }
        else{
            var registrer = confirm("Aviez-vous fini? Si oui cliquez sur 'OK'");
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