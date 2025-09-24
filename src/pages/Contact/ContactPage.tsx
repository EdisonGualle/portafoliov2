import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@shared/components/Button';
import Card from '@shared/components/Card';
import { sendContactMessage } from '@services/contactService';
import type { ContactPayload } from '@types/contact';

const initialForm: ContactPayload = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: ''
};

const ContactPage = (): JSX.Element => {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await sendContactMessage(form);
      setStatus('success');
      setFeedback(response.message);
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'No pudimos enviar tu mensaje.');
    }
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-base-content">Construyamos algo memorable</h1>
        <p className="text-lg text-base-content/70">
          Cuéntame sobre tu proyecto, equipo o idea. Me interesa colaborar en productos que combinen impacto, diseño y
          tecnología.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="bg-base-100/80">
            <h2 className="text-xl font-semibold text-base-content">Servicios</h2>
            <ul className="mt-3 space-y-2 text-base-content/70">
              <li>· Consultoría en arquitectura frontend</li>
              <li>· Diseño y desarrollo de sistemas de diseño</li>
              <li>· Optimización de performance y accesibilidad</li>
            </ul>
          </Card>
          <Card className="bg-base-100/80">
            <h2 className="text-xl font-semibold text-base-content">Colaboración</h2>
            <ul className="mt-3 space-y-2 text-base-content/70">
              <li>· Equipos remotos y async</li>
              <li>· Mentorías y workshops</li>
              <li>· Proyectos a medio y largo plazo</li>
            </ul>
          </Card>
        </div>
      </div>

      <Card className="bg-base-100/80">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-base-content">
              Nombre
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-base-content">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-base-content">
              Empresa / Proyecto
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Opcional"
                className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-base-content">
              Presupuesto estimado
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Opcional"
                className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-base-content">
            ¿En qué puedo ayudarte?
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 focus:border-primary focus:outline-none"
            />
          </label>
          <Button type="submit" loading={status === 'loading'} className="w-full">
            Enviar mensaje
          </Button>
          {status !== 'idle' && (
            <p className={`text-sm ${status === 'success' ? 'text-success' : 'text-error'}`}>{feedback}</p>
          )}
        </form>
      </Card>
    </section>
  );
};

export default ContactPage;
