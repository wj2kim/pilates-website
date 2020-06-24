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
  const [loading, setLoading] = useState(false);

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
    const error = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value,
    )
      ? ''
      : 'You must enter a valid email address';
    setEmailAddressError(error);
    return error;
  };

  const validateMessage = (value) => {
    const error = value ? '' : 'You must enter a message';
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
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    }
  };

  const sendEmail = async (request) => {
    setLoading(true);
    await emailjs.send(serviceId, templateId, request, userId).then(
      (response) => {
        setSubmitResult({
          ...submitResult,
          success: true,
          message: 'Thank you! Your message was successfully delivered.',
        });
      },
      (error) => {
        setSubmitResult({
          ...submitResult,
          message: 'Network is unstable. Please try again later.',
        });
      },
    );
    setLoading(false);
  };

  return (
    <section id="content-contact" className="container-fluid">
      <div id="content-contact-title">
        <div className="link-2">Contact</div>
      </div>
      <div id="content-contact-subtitle">
        Let's work together or have some coffee!
      </div>
      <div id="content-contact-body" className="contact-body row card">
        <div id="content-main-contact" className="col s12 m6 row">
          <form
            noValidate={true}
            className="col s12 contact-form"
            onSubmit={setEmailBeforeSending}
          >
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="input-name"
                  type="text"
                  className="validate"
                  value={name}
                  maxLength="30"
                  onChange={onNameChange}
                />
                <label htmlFor="input-name" style={{ fontSize: '12px' }}>
                  Name <span className="required-mark">*</span>
                </label>
                <span className="error">{nameError}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input
                  id="input-email"
                  type="email"
                  className="validate"
                  value={email}
                  maxLength="40"
                  onChange={onEmailChange}
                />
                <label htmlFor="input-email" style={{ fontSize: '12px' }}>
                  Email <span className="required-mark">*</span>
                </label>
                <span className="error">{emailAddressError}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input
                  id="input-message"
                  type="text"
                  className="validate"
                  value={message}
                  maxLength="300"
                  onChange={onMessageChange}
                />
                <label htmlFor="input-message" style={{ fontSize: '12px' }}>
                  Message <span className="required-mark">*</span>
                </label>
                <span className="error">{messageError}</span>
              </div>
            </div>
            <div id="button-area" className="button-area row">
              {!loading && (
                <div className="col s3" style={{ padding: 0 }}>
                  <button
                    className="btn waves-light"
                    type="submit"
                    name="action"
                    disabled={submitted && submitResult.success}
                  >
                    Send
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              )}
              {loading && (
                <div className="col s12" style={{ paddingLeft: '2.5rem' }}>
                  <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-cyan-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                        <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                id="thankyou-message"
                className="col s9"
                style={{
                  padding: 0,
                  paddingLeft: '2rem',
                  paddingRight: '1rem',
                  alignSelf: 'center',
                }}
              >
                {submitted && (
                  <span
                    className={
                      submitResult.success ? 'submit-success' : 'submit-failure'
                    }
                  >
                    {submitResult.message}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="col s12 m6" style={{ padding: 0 }}>
          <div id="contact-illustration"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
