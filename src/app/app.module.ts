import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './GrupoLogin/login/login.component';
import { PrincipalComponent } from './GrupoPrincipal/principal/principal.component';
import { ErrorPageComponent } from './GrupoGeneral/error-page/error-page.component';
import { NavbarComponent } from './GrupoGeneral/navbar/navbar.component';
import { InfoBarComponent } from './GrupoGeneral/info-bar/info-bar.component';
import { FooterComponent } from './GrupoGeneral/footer/footer.component';
import { MiembrosComponent } from './GrupoPrincipal/miembros/miembros.component';
import { InfoBarUserComponent } from './GrupoGeneral/info-bar-user/info-bar-user.component';
import { UserPanelComponent } from './GrupoPanelUsuario/user-panel/user-panel.component';
import { ActionButtonsModComponent } from './GrupoPanelUsuario/action-buttons-mod/action-buttons-mod.component';
import { ActionButtonsAdmComponent } from './GrupoPanelUsuario/action-buttons-adm/action-buttons-adm.component';
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
import { TablaNotificacionesComponent } from './GrupoNotificaciones/tabla-notificaciones/tabla-notificaciones.component';
import { TablaCanarioUserComponent } from './GrupoCanario/tabla-canario-user/tabla-canario-user.component';
import { InfoNotificacionComponent } from './GrupoNotificaciones/info-notificacion/info-notificacion.component';
import { ActionButtonsUsrComponent } from './GrupoPanelUsuario/action-buttons-usr/action-buttons-usr.component';
import { ConfigComponent } from './GrupoPanelUsuario/config/config.component';
import { ManualComponent } from './GrupoPanelUsuario/manual/manual.component';
import { UserComponent } from './GrupoPanelUsuario/manual/user/user.component';
import { ModComponent } from './GrupoPanelUsuario/manual/mod/mod.component';
import { AdminComponent } from './GrupoPanelUsuario/manual/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ErrorPageComponent,
    NavbarComponent,
    InfoBarComponent,
    FooterComponent,
    MiembrosComponent,
    InfoBarUserComponent,
    UserPanelComponent,
    ActionButtonsModComponent,
    ActionButtonsAdmComponent,
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
    TablaNotificacionesComponent,
    TablaCanarioUserComponent,
    InfoNotificacionComponent,
    ActionButtonsUsrComponent,
    ConfigComponent,
    ManualComponent,
    UserComponent,
    ModComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AppModule { }
