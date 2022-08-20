import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importar previamente todos los idiomas en local
// ng add @angular/localize
import { registerLocaleData } from '@angular/common';
// Español
import localES from '@angular/common/locales/es';
// Francés
import localFR from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
// Registramos el idioma
registerLocaleData(localES);
registerLocaleData(localFR);
// por último Añadir a providers LOCALE_ID para indicar idioma por defecto

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
