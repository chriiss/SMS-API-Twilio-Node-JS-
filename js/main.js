import { NightMode } from "../js/components/nightMode.js";
import { FormsValidate } from "./components/formsValidate.js";
import { NotificationSend } from "./components/notificationSend.js";

let nightMode = new NightMode;
nightMode.night();


let formsValidate = new FormsValidate;
formsValidate.validate();


let notificationSend = new NotificationSend;
notificationSend.toastSend();