import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Carousel } from './layout/carousel/carousel';
import { HomeFeatures } from './components/home-features/home-features';
import { Testimonials } from './components/testimonials/testimonials';
import { PlatformIntro } from './components/platform-intro/platform-intro';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Carousel,
    HomeFeatures,
    Testimonials,
    PlatformIntro
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
