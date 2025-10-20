import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Carousel {
  
  slides = [
    {
      imageUrl: 'assets/img/carousel-bg-1.jpg',
      tagline: 'CUIDA TU SALUD',
      title: 'Salud = Bienestar',
      subtitle: 'Conoce tu estado de salud y establece acciones para lograr una vida saludable con nuestra aplicación.'
    },
    {
      imageUrl: 'assets/img/carousel-bg-2.jpg',
      tagline: 'CITAS MÉDICAS FÁCILES',
      title: 'Agenda tu Cita Online',
      subtitle: 'Accede a la disponibilidad de nuestros especialistas y reserva tu cita en minutos, sin llamadas.'
    },
    {
      imageUrl: 'assets/img/carousel-bg-3.jpg',
      tagline: 'TU HISTORIAL A MANO',
      title: 'Accede a tus Resultados',
      subtitle: 'Consulta tus recetas, tratamientos e historial médico desde cualquier lugar y en cualquier momento.'
    }
  ];

}
