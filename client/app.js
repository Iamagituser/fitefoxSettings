const settings = document.getElementById("settings");
const payments = document.getElementById("payments");
const para = document.getElementById("demo");
settings.addEventListener("click", display);
payments.addEventListener("click", displayPay);



// function display(msg, field) {
//     field.innerText = msg;
// }
function display() {
    document.getElementById("demo").innerHTML = SettingHtml;
}
function displayPay() {
    document.getElementById("demo").innerHTML = "Payments";
}

const SettingHtml = '<div class = "settings"> <h2>Settings</h2><div class="sample"></div> </div>';