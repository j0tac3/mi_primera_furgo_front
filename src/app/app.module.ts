import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CamperizacionComponent } from './pages/camperizacion/camperizacion.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { EtiquetasComponent } from './pages/administrar/etiquetas/etiquetas.component';
import { EntradasComponent } from './pages/administrar/entradas/entradas.component';
import { UsuariosComponent } from './pages/administrar/usuarios/usuarios.component';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    CamperizacionComponent,
    ArticulosComponent,
    AdministrarComponent,
    EntradasComponent,
    EtiquetasComponent,
    UsuariosComponent,
    OptionMenuComponent,
    BackButtonComponent,
    NewPostFormComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
