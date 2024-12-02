
let apiKey = "e78d0c1a6648401498fe5353ef92b626";

async function validateEmail() {
    let email = document.getElementById("username").value.trim();
    let url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(email)}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        let result = await res.json();

        // Display result
        let str = '';
        for (let key in result) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }

        resultCont.innerHTML = str;
    } catch (error) {
        console.error("Error:", error);
        resultCont.innerHTML = `<div>Error validating email</div>`;
    }
}

// Example event listener for a button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail();
});
