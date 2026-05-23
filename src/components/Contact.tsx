import { useState, type FormEvent } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ndrs082904@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Message from Portfolio',
          message: message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('sent');
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
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              status === 'sending' ? 'Sending message...' : 
              status === 'sent' ? 'Message sent successfully!' : 
              status === 'error' ? 'Error sending message. Try again?' : 
              'Say hello (include your email/contact info!)'
            }
            disabled={status === 'sending'}
            required 
          />
          <button type="submit" aria-label="Send" disabled={status === 'sending'}>&rarr;</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
