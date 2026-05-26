import { useState, type FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: false, contactInfo: false, message: false });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !name.trim(),
      contactInfo: !contactInfo.trim(),
      message: !message.trim()
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.contactInfo || newErrors.message) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ndrs082904@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          contactInfo: contactInfo,
          _subject: 'New Message from Portfolio',
          message: message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('sent');
        setName('');
        setContactInfo('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-content">
        <h2 className="title">LET'S WORK TOGETHER</h2>
        <p style={{color: '#999', marginBottom: '2rem'}}>ndrs082904@gmail.com | +63 922 518 7961</p>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: false }));
              }}
              placeholder="Your name"
              disabled={status === 'sending'}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">Please provide your name</span>}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="contactInfo"
              value={contactInfo}
              onChange={(e) => {
                setContactInfo(e.target.value);
                if (errors.contactInfo) setErrors(prev => ({ ...prev, contactInfo: false }));
              }}
              placeholder="Email or phone number"
              disabled={status === 'sending'}
              className={errors.contactInfo ? 'error' : ''}
            />
            {errors.contactInfo && <span className="error-text">Please provide contact info</span>}
          </div>
          <div className="input-group">
            <input 
              type="text" 
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: false }));
              }}
              placeholder={
                status === 'sending' ? 'Sending message...' : 
                status === 'sent' ? 'Message sent successfully!' : 
                status === 'error' ? 'Error sending message. Try again?' : 
                'Say hello!'
              }
              disabled={status === 'sending'}
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-text">Please write a message</span>}
          </div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE \u2192'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
