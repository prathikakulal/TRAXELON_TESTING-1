import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Shield } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    badge: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-surface text-text-primary pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-6xl tracking-wider mb-4">
            CONTACT <span className="text-primary">US</span>
          </h1>
          <p className="font-body text-text-secondary max-w-xl mx-auto">
            For technical support, new registrations, or partnership inquiries.
            Our team is available Monday-Saturday, 9AM-6PM IST.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="md:col-span-2 flex flex-col gap-6 h-full">

            {/* GET IN TOUCH */}
            <div className="bg-surface-elevated border border-surface-border rounded-2xl p-6 space-y-5">
              <h3 className="font-display text-xl tracking-wider">
                GET IN <span className="text-primary">TOUCH</span>
              </h3>

              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "educatorananth@gmail.com",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Hotline",
                  value: "+91 89515 11111",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Office",
                  value:
                    "SurePass Academy #9, II Floor, Manasa Towers, P.V.S Junction, Mangalore 575004",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* MAP */}
            <div className="bg-surface-elevated border border-surface-border rounded-2xl overflow-hidden flex flex-col flex-1">

              <div className="relative w-full flex-1">
                <iframe
                  title="SurePass Academy Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=SurePass+Academy,+Manasa+Towers,+P.V.S+Junction,+Mangalore+575004&output=embed"
                />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=SurePass+Academy,+Manasa+Towers,+P.V.S+Junction,+Mangalore+575004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
                >
                  Open in Maps ↗
                </a>
              </div>

              <div className="px-4 py-3 border-t border-surface-border flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <p className="text-xs text-text-muted leading-relaxed">
                  SurePass Academy, #9, II Floor,<br />
                  Manasa Towers, P.V.S Junction,<br />
                  Mangalore - 575004
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-6 h-full">
            <div className="bg-surface-elevated border border-surface-border rounded-2xl p-6">

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✔</div>
                  <h3 className="text-2xl text-primary mb-2">
                    MESSAGE SENT
                  </h3>
                  <p className="text-text-secondary">
                    We will respond within 24 working hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-2.5 border border-surface-border rounded-lg text-sm hover:border-primary hover:text-primary transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Officer Name"
                      required
                    />
                    <FormInput
                      label="Badge ID"
                      name="badge"
                      value={form.badge}
                      onChange={handleChange}
                      placeholder="KA-2024-001"
                    />
                  </div>

                  <FormInput
                    label="Official Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="officer@police.gov.in"
                    required
                  />

                  <FormInput
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Technical issue / New registration / Other"
                    required
                  />

                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Describe your issue or query..."
                      className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-primary text-surface font-bold rounded-lg hover:bg-primary-dark transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* SECURITY BOX */}
            <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <Shield className="w-6 h-6 text-primary mb-3" />
              <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
                All communications are encrypted and logged for security purposes.
                Please use your official government email when contacting us.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
