import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa6";



const WhatsApp = () => {
   

    return (
        <button>
            <a
        href="https://web.whatsapp.com/send?phone=916367242853"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp"><FaWhatsapp /></i>
      </a>
        </button>
    );
};

export default WhatsApp;
