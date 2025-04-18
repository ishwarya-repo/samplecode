document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("saveButton").addEventListener("click", saveResponse);
    displayResponses();
});

function saveResponse() {
    let message = document.getElementById("autoReplyMessage").value;

    if (message.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    let responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.push(message);
    localStorage.setItem("responses", JSON.stringify(responses));

    document.getElementById("autoReplyMessage").value = "";
    displayResponses();
}

function displayResponses() {
    let responseList = document.getElementById("responseList");
    responseList.innerHTML = "";

    let responses = JSON.parse(localStorage.getItem("responses")) || [];

    responses.forEach((response, index) => {
        let li = document.createElement("li");
        li.textContent = response;

        // Create Update Button
        let updateBtn = document.createElement("button");brew install node

        updateBtn.textContent = "Update";
        updateBtn.onclick = function () {
            updateResponse(index);
        };

        // Create Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteResponse(index);
        };

        // Append buttons to list item
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        responseList.appendChild(li);
    });
}

function updateResponse(index) {
    let responses = JSON.parse(localStorage.getItem("responses")) || [];
    let newMessage = prompt("Enter new response:", responses[index]);

    if (newMessage !== null && newMessage.trim() !== "") {
        responses[index] = newMessage;
        localStorage.setItem("responses", JSON.stringify(responses));
        displayResponses();
    }
}

function deleteResponse(index) {
    let responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.splice(index, 1);
    localStorage.setItem("responses", JSON.stringify(responses));
    displayResponses();
}
