const form = document.querySelector("#frm");
const phoneNumber = document.querySelector("#phone");
const messageWrite = document.querySelector("#message");
const button = document.querySelector("#send-sms");
const nightButton = document.querySelector("#night-button");

class NightMode {
    night() {
        nightButton.innerHTML = "Night Mode"
        nightButton.addEventListener("click", () => {
            document.querySelector("body").classList.toggle("active");
            nightButton.classList.toggle('active-button');

            if(nightButton.innerHTML === "Night Mode") {
                nightButton.innerHTML = "Day Mode"
            } else {
                nightButton.innerHTML = "Night Mode"
            }
        })
    }
}

let nightMode = new NightMode;
nightMode.night();

class FormsValidate {
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

let formsValidate = new FormsValidate;
formsValidate.validate();


class NotifSend {
    toastSend() {
        button.addEventListener("click", () => {
            setTimeout(() => {
                document.querySelector("#frm").reset();
                button.style.opacity = ".5";
                button.setAttribute('disabled', 'disabled');
            }, 3000)

            document.querySelector(".notification").style.display = "block";

            setTimeout(() => {
                document.querySelector(".notification").style.display = "none";
            }, 2000)
        })
    }
}


let notifSend = new NotifSend;
notifSend.toastSend();