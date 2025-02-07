document.getElementById("showFormBtn").addEventListener("click", function() {
    let welcomeBox = this.parentElement;
    let registrationForm = document.getElementById("registrationForm");

    welcomeBox.style.transform = "translateX(-100%)";
    welcomeBox.style.opacity = "0";

    
    setTimeout(() => {
        welcomeBox.classList.add("hidden");
        registrationForm.classList.remove("hidden");
        registrationForm.style.transform = "translateX(0)";
        registrationForm.style.opacity = "1";
    }, 500);
});


document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let registrationForm = document.getElementById("registrationForm");
    let successMessage = document.getElementById("successMessage");

    
    if (fullName === "" || email === "" || mobile === "" || mobile.length !== 10 || isNaN(mobile)) {
        alert("Please fill all required fields correctly.");
        return;
    }

    registrationForm.style.transform = "translateY(-20px)";
    registrationForm.style.opacity = "0";

    
    setTimeout(() => {
        registrationForm.classList.add("hidden");
        successMessage.classList.remove("hidden");
        successMessage.style.opacity = "1"; 
        successMessage.style.transform = "scale(1)";
    }, 600); 
});


document.getElementById("mobile").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});
