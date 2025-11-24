function customizePage()
{
    let nameInput = document.getElementById("username").value;

    let output = document.getElementById("greeting");
    output.innerHTML = "Hello, " + nameInput;

    let messageInput = document.getElementById("userMessage").value;

    let output1 = document.getElementById("message");
    output1.innerHTML = messageInput;

    let label = document.getElementById("label");
    //label.textContent = "Select a background color.";
    document.body.style.backgroundColor = document.getElementById("options").value;
}

            
    