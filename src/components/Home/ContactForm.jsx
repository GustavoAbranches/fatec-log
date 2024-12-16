import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_wko3vh7";
    const templateId = "template_odkxqsf";
    const publicKey = "AspI67_4nsbZUo8su";
    console.log('Form submitted:', formData);


    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("E-mail enviado com sucesso", response);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Erro no envio da menssagem:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-fatec-gray text-white">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Contato</h1>
        <p className="text-xl mb-8">Envie-nos uma mensagem!</p>
        <p className="text-gray-300 mb-8">
          Preencha o formulário ao lado para falar com a organização do XVI FatecLog
        </p>
        
        {/* Componente retirado do protótipo */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fale com a gente</h2>
          <p className="text-gray-300 mb-4">
            Estamos disponíveis de segunda a sexta-feira, das 8h às 19h
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5" />
            <span>(11) 4184-8404</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Fatec Carapicuíba – Av. Francisco Pignatari, 650</span>
          </div>
        </div> */}
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-1/2 p-8 pt-0 md:p-16 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-slate-800"
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-slate-800"
              placeholder="email@seuemail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2">Assunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-slate-800"
              placeholder="Assunto"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-slate-800 h-32"
              placeholder="Sua mensagem vai aqui..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-fatec-orange text-white py-3 px-6 rounded hover:bg-amber-700 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;