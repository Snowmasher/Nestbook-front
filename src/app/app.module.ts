import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './GrupoLogin/login/login.component';
import { PrincipalComponent } from './GrupoPrincipal/principal/principal.component';
import { ErrorPageComponent } from './GrupoGeneral/error-page/error-page.component';
import { NavbarComponent } from './GrupoGeneral/navbar/navbar.component';
import { InfoBarComponent } from './GrupoGeneral/info-bar/info-bar.component';
import { PostComponent } from './GrupoPrincipal/post/post.component';
import { FooterComponent } from './GrupoGeneral/footer/footer.component';
import { MiembrosComponent } from './GrupoPrincipal/miembros/miembros.component';
import { ListaMiembrosComponent } from './GrupoPrincipal/lista-miembros/lista-miembros.component';
import { ItemMiembroComponent } from './GrupoPrincipal/item-miembro/item-miembro.component';
import { InfoBarUserComponent } from './GrupoGeneral/info-bar-user/info-bar-user.component';
import { UserPanelComponent } from './GrupoPanelUsuario/user-panel/user-panel.component';
import { ActionButtonsModComponent } from './GrupoPanelUsuario/action-buttons-mod/action-buttons-mod.component';
import { ActionButtonsAdmComponent } from './GrupoPanelUsuario/action-buttons-adm/action-buttons-adm.component';
import { ListaCanariosComponent } from './GrupoCanario/lista-canarios/lista-canarios.component';
import { TablaCanariosComponent } from './GrupoCanario/tabla-canarios/tabla-canarios.component';
import { CanarioComponent } from './GrupoCanario/canario/canario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecureComponent } from './GrupoLogin/secure/secure.component';
import { LoggedoutComponent } from './GrupoLogin/loggedout/loggedout.component';
import { TablaModeradoresComponent } from './GrupoPanelUsuario/administrarModeradores/tabla-moderadores/tabla-moderadores.component';
import { TablaAsociacionesComponent } from './GrupoPanelUsuario//administrarAsociaciones/tabla-asociaciones/tabla-asociaciones.component';
import { TablaUsuariosComponent } from './GrupoPanelUsuario/administrarUsuarios/tabla-usuarios/tabla-usuarios.component';
import { TablaPublicacionesComponent } from './GrupoPanelUsuario/administrarPublicaciones/tabla-publicaciones/tabla-publicaciones.component';
import { FormularioNuevoUsuarioComponent } from './GrupoFormularios/Creates/formulario-nuevo-usuario/formulario-nuevo-usuario.component';
import { FormularioNuevaAsociacionComponent } from './GrupoFormularios/Creates/formulario-nueva-asociacion/formulario-nueva-asociacion.component';
import { FormularioNuevoModeradorComponent } from './GrupoFormularios/Creates/formulario-nuevo-moderador/formulario-nuevo-moderador.component';
import { FormularioNuevoCanarioComponent } from './GrupoFormularios/Creates/formulario-nuevo-canario/formulario-nuevo-canario.component';
import { FormularioNuevoPostComponent } from './GrupoFormularios/Creates/formulario-nuevo-post/formulario-nuevo-post.component';
import { UserSelectedComponent } from './GrupoPanelUsuario/Info/user-selected/user-selected.component';
import { UpdateModComponent } from './GrupoFormularios/Updates/update-mod/update-mod.component';
import { UpdateCanarioComponent } from './GrupoFormularios/Updates/update-canario/update-canario.component';
import { UpdatePostComponent } from './GrupoFormularios/Updates/update-post/update-post.component';
import { UpdateAsociacionComponent } from './GrupoFormularios/Updates/update-asociacion/update-asociacion.component';
import { UpdateUsuarioComponent } from './GrupoFormularios/Updates/update-usuario/update-usuario.component';
import { PostSelectedComponent } from './GrupoPanelUsuario/Info/post-selected/post-selected.component';
import { AsociacionSelectedComponent } from './GrupoPanelUsuario/Info/asociacion-selected/asociacion-selected.component';
import { TestComponent } from './test/test.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ErrorPageComponent,
    NavbarComponent,
    InfoBarComponent,
    PostComponent,
    FooterComponent,
    MiembrosComponent,
    ListaMiembrosComponent,
    ItemMiembroComponent,
    InfoBarUserComponent,
    UserPanelComponent,
    ActionButtonsModComponent,
    ActionButtonsAdmComponent,
    ListaCanariosComponent,
    TablaCanariosComponent,
    CanarioComponent,
    SecureComponent,
    LoggedoutComponent,
    TablaModeradoresComponent,
    TablaAsociacionesComponent,
    TablaUsuariosComponent,
    TablaPublicacionesComponent,
    FormularioNuevoUsuarioComponent,
    FormularioNuevaAsociacionComponent,
    FormularioNuevoModeradorComponent,
    FormularioNuevoCanarioComponent,
    FormularioNuevoPostComponent,
    UserSelectedComponent,
    UpdateModComponent,
    UpdateCanarioComponent,
    UpdatePostComponent,
    UpdateAsociacionComponent,
    UpdateUsuarioComponent,
    PostSelectedComponent,
    AsociacionSelectedComponent,
    TestComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
