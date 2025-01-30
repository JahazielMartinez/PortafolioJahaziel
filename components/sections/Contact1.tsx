"use client";

import Link from "next/link";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/util/firebaseConfig.mjs"; // Ajusta la ruta según tu configuración

export default function Contact1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Enviando...");
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData, // Campos del formulario
                timestamp: new Date(), // ¡Así está correcto!
            });
            setStatus("Mensaje enviado con éxito");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            setStatus("Error al enviar el mensaje");
        }
    };
    

    

    return (
        <>
            <section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
                <div className="container position-relative z-1">
                    <h3 className="ds-3 mt-3 mb-3 text-primary-1">Let’s Connect</h3>
                    <span className="fs-5 fw-medium text-200">
                        Looking for a creative partner or expert in technology and design? <br /> Don’t hesitate to reach out.
                    </span>
                    <div className="row mt-8">
                        <div className="col-lg-4 d-flex flex-column">
                            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                    <i className="ri-phone-fill text-primary-1 fs-26" />
                                </div>
                                <div className="ps-3">
                                    <span className="text-400 fs-5">Phone Number</span>
                                    <h6 className="mb-0">+52 55-8380-7733</h6>
                                </div>
                                <Link href="tel:+525583807733" className="position-absolute top-0 start-0 w-100 h-100" />
                            </div>
                            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                    <i className="ri-mail-fill text-primary-1 fs-26" />
                                </div>
                                <div className="ps-3">
                                    <span className="text-400 fs-5">Email</span>
                                    <h6 className="mb-0">jahazielm3@gmail.com</h6>
                                </div>
                                <Link href="mailto:jahazielm3@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
                            </div>
                            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                    <i className="ri-linkedin-fill text-primary-1 fs-26" />
                                </div>
                                <div className="ps-3">
                                    <span className="text-400 fs-5">Linkedin</span>
                                    <h6 className="mb-0">Jahaziel Martínez</h6>
                                </div>
                                <Link href="https://www.linkedin.com/in/jdmloficial/" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
                            </div>
                            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                                <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                                    <i className="ri-map-2-fill text-primary-1 fs-26" />
                                </div>
                                <div className="ps-3">
                                    <span className="text-400 fs-5">Address</span>
                                    <h6 className="mb-0">Mexico City, Mexico</h6>
                                </div>
                                <Link href="https://maps.app.goo.gl/87AQrigjAcLaTNSx5" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
                            <div className="position-relative">
                                <div className="position-relative z-2">
                                    <h3>Leave a message</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
                                                <input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary-1">*</span></label>
                                                <input type="email" className="form-control border rounded-3" id="email" name="email" placeholder="contact@gmail.com" value={formData.email} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
                                                <input type="tel" className="form-control border rounded-3" id="phone" name="phone" placeholder="+52 5555 5555" value={formData.phone} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
                                                <input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for..." value={formData.subject} onChange={handleChange} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
                                                <textarea className="form-control border rounded-3" id="message" name="message" rows={4} placeholder="Your message here..." value={formData.message} onChange={handleChange} required></textarea>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button type="submit" className="btn btn-gradient">
                                                    Send Message
                                                    <i className="ri-arrow-right-up-line" />
                                                </button>
                                                {status && <p className="mt-2">{status}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
                    <div className="wow img-custom-anim-top">
                        <h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">JahazielMartinez</h3>
                    </div>
                </div>
            </section>
        </>
    );
}
