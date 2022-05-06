const form = document.querySelector("#frm");
const phoneNumber = document.querySelector("#phone");
const messageWrite = document.querySelector("#message");
const button = document.querySelector("#send-sms");


export class FormsValidate {
    validate() {
        button.style.opacity = ".5";
        form.addEventListener('input', () => {
            if(phoneNumber.value.length === 12 && messageWrite.value.length >= 1) {
                button.style.opacity = "1";
                button.removeAttribute('disabled');
            }

            if(phoneNumber.value.length < 12 || phoneNumber.value.length > 12) {
                button.style.opacity = ".5";
                button.setAttribute('disabled', 'disabled');
            }
        });

        messageWrite.addEventListener("keyup", (e) => {
            if(e.target.value === "" || e.target.value == null) {
                button.style.opacity = ".5";
                button.setAttribute('disabled', 'disabled');
            }
        })
    }
}