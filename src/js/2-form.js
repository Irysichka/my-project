let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const KEY = "feedback-form-state";


const dataSave = localStorage.getItem(KEY);
if (dataSave) {
    formData = JSON.parse(dataSave);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

form.addEventListener("input", event => {
    const {name, value} = event.target;
    if (name === "email" || name === "message")
        formData[name] = value.trim();
    localStorage.setItem(KEY, JSON.stringify(formData))
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
        return;}
    console.log(formData);
    form.reset();
    localStorage.removeItem(KEY);
});