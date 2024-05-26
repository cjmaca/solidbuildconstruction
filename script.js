function sendMail(){
    let parm = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_mjq0vm5","template_2m1x2y2",parms).then(alert("Email sent!!!"))
}