import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CamperizacionComponent } from "./pages/camperizacion/camperizacion.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ArticulosComponent } from "./pages/articulos/articulos.component";
import { AdministrarComponent } from "./pages/administrar/administrar.component";
/* Rutas de administracion */
import { EntradasComponent } from "./pages/administrar/entradas/entradas.component";
import { EtiquetasComponent } from "./pages/administrar/etiquetas/etiquetas.component";
import { UsuariosComponent } from "./pages/administrar/usuarios/usuarios.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'camperizar', component: CamperizacionComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'articulos', component: ArticulosComponent },
  {path: 'administrar', component: AdministrarComponent },
  {path: 'administrar/etiquetas', component: EtiquetasComponent },
  {path: 'administrar/entradas', component: EntradasComponent },
  {path: 'usuarios', component: UsuariosComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
