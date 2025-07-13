import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get In Touch</h2>
      <p style={styles.subtext}>
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello — fill out the form below.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your message has been sent! ✅");
        }}
        style={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          style={styles.input}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "2rem",
    borderRadius: "10px",
    background: "#fffaf5",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#4B2E2E",
    textAlign: "center",
  },
  subtext: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#5e4a42",
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #d1c0b1",
    borderRadius: "6px",
    outline: "none",
    backgroundColor: "#fff",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #d1c0b1",
    borderRadius: "6px",
    resize: "vertical",
    outline: "none",
    backgroundColor: "#fff",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#8B4513", // Brownish
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Contact;
