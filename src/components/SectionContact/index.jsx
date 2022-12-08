import React from "react";
import "./styles.css";
import Translator from "../i18n/Translator";

import BoxInfoContact from "./BoxInfoContact";

function SectionContact() {
  return (
    <>
      <div className="hr-wave-background"></div>
      <div className="content-contact-section">
        <form
          action="https://formsubmit.co/ls4803326@gmail.com"
          id="form-contact"
          method="post"
        >
          <fieldset className="fieldset-form-contact">
            <input
              type="text"
              autoComplete="on"
              name="name"
              id="user-name"
              placeholder="Name"
              required
              className="form-fields form-input"
            />

            <input
              type="email"
              autoComplete="on"
              name="email"
              id="user-email"
              placeholder="Email"
              required
              className="form-fields form-input"
            />
            <input type="hidden" name="_template" value="basic" />
            <input
              type="hidden"
              name="_next"
              value="http://127.0.0.1:5173/"
            ></input>
            <input type="hidden" name="_captcha" value="false" />
          </fieldset>
          <fieldset className="fieldset-form-contact">
            <textarea
              name="message"
              id="user-msg"
              cols="auto"
              rows="10"
              placeholder="Mensagem"
              className="form-fields form-input"
            ></textarea>
            <button id="btn-send-form-contact" type="submit">
              <Translator path="form_contact.btn_text" />
            </button>
          </fieldset>
        </form>
        <div className="info-contact">
          <BoxInfoContact
            icon="bxs-phone"
            desc="43 9999-9999"
            title={<Translator path="footer.phone" />}
          />
          <BoxInfoContact
            icon="bx-envelope"
            desc="ls4803326@gmail.com"
            title="Email"
          />
          <BoxInfoContact
            icon="bx-current-location"
            desc="Mauá da Serra, PR"
            title={<Translator path="footer.addres" />}
          />
        </div>
      </div>
    </>
  );
}

export default SectionContact;
