import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactMe = () => {
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(`service_ili7eos`, `template_umw2cdp`, form.current, `x22iLk0sW4jvg_UGp`)
            .then(function (response) {
                // console.log('SUCCESS!', response.status, response.text);
                toast.success('thanks for your message');
                e.target.reset();
            }, function (error) {
                // console.log('FAILED...', error);
            });
    }
    return (
        <div id='contactMe' className='mt-20 mb-10'>
            <h3 className="text-md underline underline-offset-2 text-center my-4 text-accent">Contact Me</h3>
            <div className=" min-h-screen">
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" className="w-full max-w-xl p-5 rounded-xl ">
                        <h3 className="text-md text-center text-primary underline underline-offset-2 py-3">Contact Info</h3>
                        <div className='flex items-center justify-evenly my-8'>
                            <div onClick={() => {
                                window.open('https://www.instagram.com/_pawan_bagda?igsh=MXdhazVzNXFyMmdqOQ==');
                            }} className="flex flex-col items-center hover:underline  cursor-pointer bg-white rounded-2xl py-4 px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path d="m224 202.66a53.34 53.34 0 1 0 53.36 53.34 53.38 53.38 0 0 0 -53.36-53.34zm124.71-41a54 54 0 0 0 -30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0 -30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zm-124.71 176.34a82 82 0 1 1 82-82 81.9 81.9 0 0 1 -82 82zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14 19.1 19.1 0 0 1 -19.09 19.18zm90.62-157.7h-352a48 48 0 0 0 -48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-352a48 48 0 0 0 -48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z"/></svg>
                                <p className='underline-offset-2 text-black mt-1'>Instagram</p>
                            </div>
                            <div onClick={() => {
                                window.open('https://www.linkedin.com/in/pawan-sharma-14b50125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
                            }} className="flex flex-col items-center hover:underline  cursor-pointer bg-white rounded-2xl p-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                <p className='underline-offset-2 text-black mt-1'>LinkedIn</p>
                            </div>
                            <div onClick={() => {
                                window.open('https://www.facebook.com/profile.php?id=100066260770940&mibextid=ZbWKwL')
                            }} className="flex flex-col items-center hover:underline  cursor-pointer bg-white rounded-2xl py-4 px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg>
                                <p className='underline-offset-2 text-black mt-1'>Facebook</p>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className="text-2xl">Phone</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <a href="tel:+916367242853">+91 6367242853</a>
                            </figure>
                        </div>
                        <div className='my-5'>
                            <h2 className="text-2xl">Email</h2>
                            <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:pawansharma636724@gmail.com">pawansharma636724@gmail.com</a>
                            </figure>
                        </div>
                        <div>
                            <h2 className="text-2xl">Address</h2>

                            <a href='https://maps.app.goo.gl/NWJWvPcFn1Fn5w6E6' target='_blank'>
                                <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <address>Near Homeopathy University, Sanagner, Jaipur, Rajshahi </address>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card flex-shrink-0 w-full max-w-lg shadow-xl">
                        <div className="card-body">
                            <h3 className="text-md text-center text-primary underline underline-offset-2">Direct Mail</h3>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required type="name" name='user_name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" name='user_email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea required type="text" name='message' rows={6} className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value='Send' className="btn btn-accent"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;



/* 
<svg 
xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
</svg> 

*/
