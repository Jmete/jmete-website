
function showToast(type){

    if(type=="error"){
        Toastify({
            text: "Sorry, an error occured.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            positionLeft: false,
            className: "alert-warning"
        }).showToast();
    } else{
        Toastify({
            text: "Message Sent!",
            duration: 3000,
            close: true,
            gravity: "bottom",
            positionLeft: false,
            className: "alert-warning"
        }).showToast();
    }

}

function testAlert(){
    alert("this is a test in the main js file");
}

async function submitForm(e){

    alert("this is a test!");
    // Prevent the form from submitting and refreshing the page
    e.preventDefault();

    // Get the values from the form directly
    const nameValue = document.getElementById("contact-name").value;
    const emailValue = document.getElementById("contact-email").value;
    const messageValue = document.getElementById("contact-message").value;

    // Make sure all fields are not empty, else continue
    if (!nameValue || !emailValue || !messageValue){
        showToast("error");
    }
    try {
        const { data } = await axios.post('/api/email', {
            nameValue,
            emailValue,
            messageValue,
        });
        showToast();
    } catch (err) {
        showToast("error");
    }



}
