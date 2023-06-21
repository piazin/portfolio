import './styles.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import Translator from '../i18n/Translator';

import BoxInfoContact from './BoxInfoContact';

function SectionContact() {
  const initialStateFields = {
    name: '',
    email: '',
    message: '',
  };

  const [fields, setFields] = useState(initialStateFields);

  const [fieldsLoading, setFieldsLoading] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setFieldsLoading(true);

    try {
      await axios.post('https://mailman.lucasouza.tech/send/ls4803326@gmail.com', fields);

      setFieldsLoading(false);
      showAlert('success', 'Formulario recebido com sucesso!');
      setFields(initialStateFields);
    } catch (error) {
      setFieldsLoading(false);
      showAlert('error', 'Ops! ainda estamos em desenvolvimento');
      setFields(initialStateFields);
    }
  }

  const changeFields = (e) =>
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });

  const showAlert = (type, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: type,
      title,
      background: '#1e1e1e',
      color: '#fff',
    });
  };

  return (
    <>
      <div className="hr-wave-background"></div>
      <div className="content-contact-section">
        <form id="form-contact" onSubmit={submitForm}>
          <fieldset className="fieldset-form-contact">
            <input
              value={fields.name}
              onChange={changeFields}
              type="text"
              autoComplete="on"
              name="name"
              id="user-name"
              placeholder="Name"
              required
              className="form-fields form-input"
              disabled={fieldsLoading}
            />

            <input
              value={fields.email}
              onChange={changeFields}
              type="email"
              autoComplete="on"
              name="email"
              id="user-email"
              placeholder="Email"
              required
              className="form-fields form-input"
              disabled={fieldsLoading}
            />
          </fieldset>
          <fieldset className="fieldset-form-contact">
            <textarea
              value={fields.message}
              onChange={changeFields}
              name="message"
              id="user-msg"
              cols="auto"
              rows="10"
              placeholder="Mensagem"
              className="form-fields form-input"
              disabled={fieldsLoading}
            ></textarea>
            <button id="btn-send-form-contact" type="submit" disabled={fieldsLoading}>
              {fieldsLoading ? (
                <span className="spinner"></span>
              ) : (
                <Translator path="form_contact.btn_text" />
              )}
            </button>
          </fieldset>
        </form>
        <div className="info-contact">
          <BoxInfoContact icon="bx-envelope" desc="ls4803326@gmail.com" title="Email" />
          <BoxInfoContact
            icon="bx-current-location"
            desc="Paraná, Brazil"
            title={<Translator path="footer.addres" />}
          />
        </div>
      </div>
    </>
  );
}

export default SectionContact;
