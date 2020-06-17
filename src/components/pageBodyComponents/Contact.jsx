import React, { useState, useCallback } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

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
  const [submitResult, setSubmitResult] = useState({
    success: false,
    message: '',
  });

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
    const error = value ? '' : 'You must enter your name';
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
    const error = value ? '' : 'You must enter any message';
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
      const request = {
        name: name,
        email: email,
        message: message,
      };
      sendEmail(request);
      setSubmitted(true);
    }
  };

  const sendEmail = (request) => {
    emailjs.send(serviceId, templateId, request, userId).then(
      (response) => {
        setSubmitResult({
          ...submitResult,
          success: true,
          message: 'Thank you, Your message was successfully delivered',
        });
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        setSubmitResult({
          ...submitResult,
          message: 'Network is unstable. Please try again later',
        });
      },
    );
  };

  return (
    <section id="content-contact" className="container-fluid">
      <div id="content-contact-title" style={{ fontSize: 'x-large' }}>
        CONTACT
      </div>
      <div id="content-contact-body" className="container-fluid">
        <div class="row">
          <form
            noValidate={true}
            class="col s12 contact-form"
            onSubmit={setEmailBeforeSending}
          >
            <div className="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="input-name"
                  type="text"
                  class="validate"
                  value={name}
                  maxLength="30"
                  onChange={onNameChange}
                />
                <label for="icon_prefix">Name</label>
                <span className="error">{nameError}</span>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input
                  id="input-email"
                  type="text"
                  class="validate"
                  value={email}
                  maxLength="40"
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
                  id="input-message"
                  class="materialize-textarea"
                  value={message}
                  maxLength="300"
                  onChange={onMessageChange}
                ></textarea>
                <label for="textarea1">Message</label>
                <span className="error">{messageError}</span>
              </div>
            </div>
            <div id="button-area">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                disabled={submitted && submitResult.success}
              >
                Send
                <i class="material-icons right">send</i>
              </button>

              {submitted && (
                <div className="row">
                  <span
                    className={
                      submitResult.success ? 'submit-success' : 'submit-failure'
                    }
                  >
                    {submitResult.message}
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
