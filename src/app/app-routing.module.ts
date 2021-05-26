import { TablaPublicacionesComponent } from './GrupoPanelUsuario/administrarPublicaciones/tabla-publicaciones/tabla-publicaciones.component';
import { TablaUsuariosComponent } from './GrupoPanelUsuario/administrarUsuarios/tabla-usuarios/tabla-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './GrupoPrincipal/principal/principal.component';
import { LoginComponent } from './GrupoLogin/login/login.component';
import { ErrorPageComponent } from './GrupoGeneral/error-page/error-page.component';
import { MiembrosComponent } from './GrupoPrincipal/miembros/miembros.component';
import { UserPanelComponent } from './GrupoPanelUsuario/user-panel/user-panel.component';
import { ListaCanariosComponent } from './GrupoCanario/lista-canarios/lista-canarios.component';
import { CanarioComponent } from './GrupoCanario/canario/canario.component';
import { SecureComponent } from './GrupoLogin/secure/secure.component';
import { LoggedoutComponent } from './GrupoLogin/loggedout/loggedout.component';
import { RegisterComponent } from './register/register.component';
import { TablaModeradoresComponent } from './GrupoPanelUsuario//administrarModeradores/tabla-moderadores/tabla-moderadores.component';
import { TablaAsociacionesComponent } from './GrupoPanelUsuario//administrarAsociaciones/tabla-asociaciones/tabla-asociaciones.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'loggedout', redirectTo: 'login', pathMatch: 'full'},
  {path: 'secure', component: SecureComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'principal/miembros', component: MiembrosComponent},
  {path: 'panel', component: UserPanelComponent},
  {path: 'panel/adminMod', component: TablaModeradoresComponent},
  {path: 'panel/adminAsoc', component: TablaAsociacionesComponent},
  {path: 'panel/adminUser', component: TablaUsuariosComponent},
  {path: 'panel/adminPost', component: TablaPublicacionesComponent},
  {path: 'canarios', component: ListaCanariosComponent},
  {path: 'canarios/anilla', component: CanarioComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
