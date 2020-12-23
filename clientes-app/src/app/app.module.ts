import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { HeaderComponent } from './header/header.component';

//GEP-INI
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';

const routes : Routes = [
  {path:'', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes' , component: ClientesComponent},
  {path: 'directivas', component: DirectivaComponent}
];

//GEP-FIN

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
