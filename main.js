document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#thought-submit").disabled = true;

    document.querySelector("#new-thought").onkeyup = () => {
        if (document.querySelector("#new-thought").value.length > 0) {
            document.querySelector("#thought-submit").disabled = false;
        } else {
            document.querySelector("#thought-submit").disabled = true;
        }
    }

    document.querySelector('#thoughts-form').onsubmit = () => {
        const userThought = document.querySelector("#new-thought").value;
        
        const li = document.createElement("li");
        li.innerHTML = userThought;

        document.querySelector("#thoughts-board").append(li);

        document.querySelector("#new-thought").value = "";
        
        document.querySelector("#thought-submit").disabled = true;
        
        // Stop form from submitting
        return false;
    }
})