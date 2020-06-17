import React, { useState, useCallback } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const serviceId = 'gmail';
  const templateId = 'template_3iMgPqqS';
  const userId = 'user_a3E3c3KitnzEbH5FMH54i';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('');
  const [messageError, setMessageError] = useState('');

  // to check if form has succesfully submitted
  const [submitted, setSubmitted] = useState(false);

  const onNameChange = useCallback((e) => {
    setName(e.target.value);
    validateName(e.target.value);
  }, []);

  const onEmailChange = useCallback((e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }, []);

  const onMessageChange = useCallback((e) => {
    setMessage(e.target.value);
    validateMessage(e.target.value);
  }, []);

  const validateName = (value) => {
    const error = value ? '' : 'You must enter your first name';
    setNameError(error);
    return error;
  };

  const validateEmail = (value) => {
    const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value,
    )
      ? ''
      : 'You must enter a valid email address';
    setEmailAddressError(error);
    return error;
  };

  const validateMessage = (value) => {
    const error = value ? '' : 'You must enter your first name';
    setMessageError(error);
    return error;
  };

  const setEmailBeforeSending = (e) => {
    e.preventDefault();

    const nameValidationError = validateName(name);
    const emailAddressValidationError = validateEmail(email);
    const messageValidationError = validateMessage(message);

    if (
      nameValidationError === '' &&
      emailAddressValidationError === '' &&
      messageValidationError === ''
    ) {
      const result = {
        name: name,
        email: email,
        message: message,
      };
      sendEmail(result);
      setSubmitted(true); // maybe move into submitEmail function
    }
  };

  const sendEmail = (result) => {
    emailjs.sendForm(serviceId, templateId, result, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <section id="content-contact" className="container-fluid">
      <div id="content-contact-title">
        <h4>Contact</h4>
      </div>
      <div id="content-contact-body" className="container">
        <div class="row">
          <form
            noValidate={true}
            class="col s12 contact-form"
            onSubmit={setEmailBeforeSending}
          >
            <div className="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  value={name}
                  onChange={onNameChange}
                />
                <label for="icon_prefix">Name</label>
                <span className="error">{nameError}</span>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">email</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  value={email}
                  onChange={onEmailChange}
                />
                <label for="icon_prefix">Email</label>
                <span className="error">{emailAddressError}</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                  value={message}
                  onChange={onMessageChange}
                ></textarea>
                <label for="textarea1">Message</label>
                <span className="error">{messageError}</span>
              </div>
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              disabled={submitted}
            >
              Send
              <i class="material-icons right">send</i>
            </button>
            {submitted && (
              <div className="row">
                <span
                  className={submitted ? 'submit-success' : 'submit-failure'}
                >
                  {submitted}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
