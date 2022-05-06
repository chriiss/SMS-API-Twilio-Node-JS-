const button = document.querySelector("#send-sms");


export class NotificationSend {
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
