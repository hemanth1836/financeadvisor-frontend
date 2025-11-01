import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import "./Contact.css";

const { TextArea } = Input;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("⚠️ Please fill out all fields!");
      return;
    }

    try {
      await axios.post("https://financeadvisor-backend-kreo.onrender.com/api/contact/", formData);
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear inputs
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Please try again!");
    }
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        {/* Header */}
        <section className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold display-6 text-primary">📞 Get in Touch</h1>
          <p className="text-muted lead mt-3">
            We’d love to hear from you! Whether you have questions, feedback, or
            partnership ideas — reach out anytime.
          </p>
        </section>

        {/* Contact Info */}
        <section className="row text-center mb-5 gy-4 animate__animated animate__fadeInUp">
          <div className="col-md-4">
            <div className="info-card shadow-sm p-4 rounded-4 h-100">
              <h5 className="fw-bold text-primary">📍 Address</h5>
              <p className="text-muted mb-0">Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card shadow-sm p-4 rounded-4 h-100">
              <h5 className="fw-bold text-primary">📧 Email</h5>
              <p className="text-muted mb-0">support@financeadvisor.com</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card shadow-sm p-4 rounded-4 h-100">
              <h5 className="fw-bold text-primary">📞 Phone</h5>
              <p className="text-muted mb-0">+91 98765 43210</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="row justify-content-center animate__animated animate__fadeInUp">
          <div className="col-lg-8 col-md-10">
            <div className="card border-0 shadow-lg p-4 rounded-4">
              <h3 className="fw-bold text-center mb-4 text-primary">
                Send Us a Message ✉️
              </h3>

              <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item label="Your Name" required>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    size="large"
                  />
                </Form.Item>

                <Form.Item label="Your Email" required>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    size="large"
                  />
                </Form.Item>

                <Form.Item label="Your Message" required>
                  <TextArea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                  />
                </Form.Item>

                <div className="text-center mt-3">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{
                      backgroundColor: "#0d6efd",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 30px",
                      fontWeight: "500",
                    }}
                  >
                    Send Message 🚀
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
