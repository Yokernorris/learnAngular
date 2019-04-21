import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core'; //Añadimos LOCALE_ID pipe español

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CapitalizadoPipe} from './pipes/capitalizado.pipe';

//Importamos esto para añadir la funcion del pipe que traduce a español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DoomseguroPipe } from './pipes/doomseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DoomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], //añadimos { provide: LOCALE_ID, useValue: 'es' } para ponerlo en espalol
  bootstrap: [AppComponent]
})
export class AppModule { }
