import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  testimonials = [
    {
      name: 'Silvia Figuera',
      story: 'Tu contribución permitió a la Sra. Figuera recibir una silla de ruedas para poder movilizarse.',
      imageUrl: 'assets/img/testimonial-1.jpg' // <-- Debes poner tus imágenes aquí
    },
    {
      name: 'Oswaldo Urbina',
      story: 'Gracias a las donaciones realizadas, Oswaldo pudo recibir algunos de los medicamentos necesarios para su recuperación.',
      imageUrl: 'assets/img/testimonial-2.jpg' 
    },
    {
      name: 'Milagros Marcano',
      story: 'Conoce a la persona que confió en esta Fundación (...) Milagros recibió la medicina y mejoró su calidad de vida.',
      imageUrl: 'assets/img/testimonial-3.jpg' 
    },
    {
      name: 'Joel Armijos',
      story: 'Te comparto los testimonios que Joel (...) necesitaba y recibió medicamentos y alimentos de varias de...',
      imageUrl: 'assets/img/testimonial-4.jpg' 
    }
  ];

  constructor() { }

}
