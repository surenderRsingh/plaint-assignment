import BasePage from "./basePage";
import { clickElement, setValue } from "../lib/elementOperations/actionsOps";
import { logMessage } from "../lib/util";
import {
  assertElementTextEquals,
  assertElementDoesNotExist,
} from "../lib/elementOperations/validationOps";

export default class ContactPage extends BasePage {
  constructor() {
    super();
    this.foreNameEdit = "#forename";
    this.emailEdit = "#email";
    this.messageEdit = "#message";
    this.telephoneEdit = "#telephone";
    this.submitBtn = ".btn.btn-primary";

    this.foreNameError = "#forename-err";
    this.emailError = "#email-err";
    this.messageError = "#message-err";
    this.telephoneError = "#telephone-err";

    this.alertMsgContainer = ".alert";
  }

  async submit() {
    await clickElement(this.submitBtn, "Submit button");
  }

  enterFieldValues(details) {
    for (let counter = 0; counter < details.hashes().length; counter++) {
      let field = details.hashes()[counter].Field;
      let value = details.hashes()[counter].Value;

      switch (field) {
        case "Email":
          setValue(this.emailEdit, value, "Email");
          break;
        case "Forename":
          setValue(this.foreNameEdit, value, "ForeName");
          break;
        case "Message":
          setValue(this.messageEdit, value, "Message");
          break;
        case "Telephone":
          setValue(this.telephoneEdit, value, "Telephone");
          break;
        default:
          throw new Error(`Field ${field} is not defined`);
      }
    }
  }

  validateFieldErrorMsgs(errors) {
    for (let counter = 0; counter < errors.hashes().length; counter++) {
      let field = errors.hashes()[counter].Field;
      let msg = errors.hashes()[counter].Error;
      switch (field) {
        case "Email":
          assertElementTextEquals(this.emailError, msg);
          break;
        case "Forename":
          assertElementTextEquals(this.foreNameError, msg);
          break;
        case "Message":
          assertElementTextEquals(this.messageError, msg);

          break;
        case "Telephone":
          assertElementTextEquals(this.telephoneError, msg);
          break;
        default:
          throw new Error(`Field ${field} is not mandatory field`);
      }
    }
  }

  validateNoErrorIsDisplayed() {
    assertElementDoesNotExist(this.messageError);
    assertElementDoesNotExist(this.foreNameError);
    assertElementDoesNotExist(this.emailError);
  }

  validateAlertMessage(message) {
    assertElementTextEquals(this.alertMsgContainer, message);
  }
}
