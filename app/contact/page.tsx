"use client";

import { FormEvent, useState } from "react";
import Footer from "../../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("ข้อความของคุณถูกส่งแล้ว! เราจะติดต่อกลับภายใน 24 ชั่วโมง.");
  }

  return (
    <>
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Get in Touch</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Contact the Safety Officer Team</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">ส่งคำถามหรือแจ้งความต้องการขององค์กรคุณ เราพร้อมช่วยวางระบบและค้นหา จป. ที่เหมาะสม</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-950">Send us a message</h2>
              <p className="mt-3 text-slate-600">บอกเราถึงข้อมูลงาน ความต้องการ หรือคำถามเกี่ยวกับบริการ Safety Officer ของคุณ</p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 h-40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
                <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-white transition hover:bg-slate-800" type="submit">
                  Send Message
                </button>
              </form>

              {status ? (
                <p className="mt-6 rounded-2xl bg-emerald-100 px-6 py-4 text-emerald-900">{status}</p>
              ) : null}
            </div>

            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Contact Details</h3>
                <p className="mt-3 text-slate-600">ติดต่อเราเพื่อขอข้อมูลเพิ่มเติมหรือปรึกษาบริการ Safety Officer</p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="font-semibold">Email</p>
                <p className="mt-2 text-slate-200">contact@bprofessional.com</p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="font-semibold">Phone</p>
                <p className="mt-2 text-slate-200">+66 92 123 4567</p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="font-semibold">Office</p>
                <p className="mt-2 text-slate-200">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}