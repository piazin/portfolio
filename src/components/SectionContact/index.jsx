import React from "react";
import "./styles.css";

import BoxInfoContact from "./BoxInfoContact";

function SectionContact() {
  return (
    <>
      <div className="hr-wave-background"></div>
      <div className="content-contact-section">
        <form action="" id="form-contact">
          <fieldset className="fieldset-form-contact">
            <input
              type="text"
              autoComplete="on"
              name="user-name"
              id="user-name"
              placeholder="Name"
              required
              className="form-fields form-input"
            />

            <input
              type="email"
              autoComplete="on"
              name="user-email"
              id="user-email"
              placeholder="Email"
              required
              className="form-fields form-input"
            />
          </fieldset>
          <fieldset className="fieldset-form-contact">
            <textarea
              name="user-msg"
              id="user-msg"
              cols="60"
              rows="10"
              placeholder="Mensagem"
              className="form-fields form-input"
            ></textarea>
            <button id="btn-send-form-contact">Send</button>
          </fieldset>
        </form>
        <div className="info-contact">
          <BoxInfoContact icon="bxs-phone" desc="43 9999-9999" title="Phone" />
          <BoxInfoContact
            icon="bx-envelope"
            desc="ls4803326@gmail.com"
            title="Email"
          />
          <BoxInfoContact
            icon="bx-current-location"
            desc="Mauá da Serra, PR"
            title="Addres"
          />
        </div>
      </div>
    </>
  );
}

export default SectionContact;
