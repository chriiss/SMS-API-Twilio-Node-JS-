const nightButton = document.querySelector("#night-button");

export class NightMode {
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
