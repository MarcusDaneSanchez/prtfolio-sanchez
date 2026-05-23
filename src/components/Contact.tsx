const Contact = () => {
  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-content">
        <h2 className="title">LET'S WORK TOGETHER</h2>
        <p style={{color: '#999', marginBottom: '2rem'}}>ndrs082904@gmail.com | +63 922 518 7961</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Say hello..." required />
          <button type="submit" aria-label="Send">&rarr;</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
