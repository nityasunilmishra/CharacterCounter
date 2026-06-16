const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxLength = 280;

textInput.addEventListener('input', () => {
    const count = textInput.value.length;
    charCount.innerText = count

    if (count >= maxLength) {
        // charCount.style.color = 'red';
        charCount.classList.add("danger");

    }
    else if (count > 250) {
        // charCount.style.color = 'orange';
        charCount.classList.add("warning");
    }
    else {
        charCount.classList.add("success");
        //     charCount.style.color = 'green';
    }

    if (count > maxLength) {
        textInput.value = textInput.value.slice(0, maxLength);
        charCount.innerText = maxLength;
        charCount.classList.add("danger");
    }
});

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "Light Mode";
    }
    else {
        toggleBtn.innerText = "Dark Mode";
    }

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
       else
    {
        localStorage.setItem("theme", "light");
    }


});

window.addEventListener('load', () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        toggleBtn.innerText = "Light Mode";
    }
 else{
        toggleBtn.innerText = "Dark Mode";
    }
 }
);