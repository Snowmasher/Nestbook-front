import { TestComponent } from './test/test.component';
import { UpdateCanarioComponent } from './GrupoFormularios/Updates/update-canario/update-canario.component';
import { UpdatePostComponent } from './GrupoFormularios/Updates/update-post/update-post.component';
import { UpdateUsuarioComponent } from './GrupoFormularios/Updates/update-usuario/update-usuario.component';
import { UpdateAsociacionComponent } from './GrupoFormularios/Updates/update-asociacion/update-asociacion.component';
import { PostSelectedComponent } from './GrupoPanelUsuario/Info/post-selected/post-selected.component';
import { AsociacionSelectedComponent } from './GrupoPanelUsuario/Info/asociacion-selected/asociacion-selected.component';
import { UpdateModComponent } from './GrupoFormularios/Updates/update-mod/update-mod.component';
import { UserSelectedComponent } from './GrupoPanelUsuario/Info/user-selected/user-selected.component';
import { FormularioNuevoPostComponent } from './GrupoFormularios/Creates/formulario-nuevo-post/formulario-nuevo-post.component';
import { FormularioNuevoCanarioComponent } from './GrupoFormularios/Creates/formulario-nuevo-canario/formulario-nuevo-canario.component';
import { FormularioNuevoModeradorComponent } from './GrupoFormularios/Creates/formulario-nuevo-moderador/formulario-nuevo-moderador.component';
import { FormularioNuevaAsociacionComponent } from './GrupoFormularios/Creates/formulario-nueva-asociacion/formulario-nueva-asociacion.component';
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
import { TablaModeradoresComponent } from './GrupoPanelUsuario//administrarModeradores/tabla-moderadores/tabla-moderadores.component';
import { TablaAsociacionesComponent } from './GrupoPanelUsuario//administrarAsociaciones/tabla-asociaciones/tabla-asociaciones.component';
import { FormularioNuevoUsuarioComponent } from './GrupoFormularios/Creates/formulario-nuevo-usuario/formulario-nuevo-usuario.component';

const routes: Routes = [

  {path: 'test', component: TestComponent},

  // Login y registro ----------------
  {path: 'login', component: LoginComponent},
  {path: 'loggedout', redirectTo: 'login', pathMatch: 'full'},
  {path: 'secure', component: SecureComponent},

  // Principal ----------------
  {path: 'principal', component: PrincipalComponent},
  {path: 'principal/user/:id', component: UserSelectedComponent},
  {path: 'principal/asociacion/:id', component: AsociacionSelectedComponent},
  {path: 'principal/post/:id', component: PostSelectedComponent},
  {path: 'principal/miembros', component: MiembrosComponent},

  // Paneles ----------------
  {path: 'panel', component: UserPanelComponent},

  // Moderadores
  {path: 'panel/adminMod', component: TablaModeradoresComponent},
  {path: 'panel/adminMod/registerMod', component: FormularioNuevoModeradorComponent},
  {path: 'panel/adminMod/updateMod/:id', component: UpdateModComponent},

  // Asociaciones
  {path: 'panel/adminAsoc', component: TablaAsociacionesComponent},
  {path: 'panel/adminAsoc/registerAsoc', component: FormularioNuevaAsociacionComponent},
  {path: 'panel/adminAsoc/updateAsoc/:id', component: UpdateAsociacionComponent},

  // Usuarios
  {path: 'panel/adminUser', component: TablaUsuariosComponent},
  {path: 'panel/adminUser/registerUser', component: FormularioNuevoUsuarioComponent},
  {path: 'panel/adminUser/updateUser/:id', component: UpdateUsuarioComponent},

  // Publicaciones
  {path: 'panel/adminPost', component: TablaPublicacionesComponent},
  {path: 'panel/adminPost/create', component: FormularioNuevoPostComponent},
  {path: 'panel/adminPost/updatePost/:id', component: UpdatePostComponent},

  // Canarios
  {path: 'canarios', component: ListaCanariosComponent},
  {path: 'canarios/create', component: FormularioNuevoCanarioComponent},
  {path: 'canarios/update/:id', component: UpdateCanarioComponent},
  {path: 'canarios/:id', component: CanarioComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
