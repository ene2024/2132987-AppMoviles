import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AplicacionNotasComponent } from './aplicacion-notas/aplicacion-notas.component';
import { AgregarnotasComponent } from './agregarnotas/agregarnotas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AplicacionNotasComponent, AgregarnotasComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
