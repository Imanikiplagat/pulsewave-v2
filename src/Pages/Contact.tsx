import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Send,
} from "lucide-react";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { FadeIn, SectionHeader } from "@/layouts/Section";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const inputCls =
  "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-[var(--navy)] outline-none transition focus:border-[var(--blue-brand)] focus:ring-4 focus:ring-[var(--blue-brand)]/15";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Contact form submission", data);

    await new Promise((resolve) => setTimeout(resolve, 600));

    setSent(true);
    reset();
  };

  return (
    <div>
      <section style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-20 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
            Contact
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] text-[var(--navy)] sm:text-6xl md:text-7xl">
            Let's build something{" "}
            <span className="underline-lime">meaningful</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[var(--dark-gray)]">
            Tell us about your project, product or challenge.
            We'll get back within one business day.
          </p>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <FadeIn>
              <div className="space-y-5">
                <SectionHeader
                  eyebrow="Get in touch"
                  title="We're here to help."
                />

                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <MapPin className="mt-0.5 h-5 w-5 text-[var(--blue-brand)]" />

                    <div>
                      <p className="font-bold text-[var(--navy)]">
                        Head office
                      </p>

                      <p className="text-sm text-[var(--dark-gray)]">
                        Phileo Arcade, Ruiru
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <Phone className="mt-0.5 h-5 w-5 text-[var(--blue-brand)]" />

                    <div>
                      <p className="font-bold text-[var(--navy)]">
                        Phone
                      </p>

                      <p className="text-sm text-[var(--dark-gray)]">
                        +254 796 222 111
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <Mail className="mt-0.5 h-5 w-5 text-[var(--blue-brand)]" />

                    <div>
                      <p className="font-bold text-[var(--navy)]">
                        Email
                      </p>

                      <div className="flex flex-col text-sm text-[var(--dark-gray)]">
                        <a
                          href="mailto:info@pulsewavetechnologies.com"
                          className="break-all hover:text-[var(--navy)]"
                        >
                          info@pulsewavetechnologies.com
                        </a>
                      </div>

                      <p className="mt-2 text-xs text-[var(--dark-gray)]">
                        Tonny Kosgey — Chief Executive Officer
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex gap-3">
                  {[FaLinkedinIn, FaXTwitter, FaFacebookF].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-white text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)] shadow-[var(--shadow-card)]">
                  <iframe
                    title="PulseWave Technologies office location"
                    src="https://www.google.com/maps?q=Phileo+Arcade+Ruiru+Kenya&z=16&output=embed"
                    className="block h-[360px] w-full border-0 md:h-[420px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <FadeIn delay={0.1}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-8 lg:p-10"
              >
                <h3 className="text-2xl font-black text-[var(--navy)]">
                  Send us a message
                </h3>

                <p className="mt-1 text-sm text-[var(--dark-gray)]">
                  All fields marked * are required.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full name *"
                    error={errors.name?.message}
                  >
                    <input
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className={inputCls}
                      placeholder="Jane Doe"
                    />
                  </Field>

                  <Field
                    label="Work email *"
                    error={errors.email?.message}
                  >
                                        <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email",
                        },
                      })}
                      className={inputCls}
                      placeholder="jane@company.com"
                    />
                  </Field>

                  <Field label="Company">
                    <input
                      {...register("company")}
                      className={inputCls}
                      placeholder="Company Ltd"
                    />
                  </Field>

                  <Field label="Phone">
                    <input
                      {...register("phone")}
                      className={inputCls}
                      placeholder="+254 ..."
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field
                    label="How can we help? *"
                    error={errors.message?.message}
                  >
                    <textarea
                      rows={6}
                      {...register("message", {
                        required: "Please tell us about your project",
                      })}
                      className={inputCls}
                      placeholder="Tell us about your project..."
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)] disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {sent && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--lime-brand)]/40 px-3 py-2 text-sm font-semibold text-[var(--navy)]">
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks — we'll be in touch shortly.
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-[var(--navy)]">
        {label}
      </span>

      {children}

      {error && (
        <span className="mt-1 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}