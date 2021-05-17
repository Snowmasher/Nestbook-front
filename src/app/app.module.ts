import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { ListaMiembrosComponent } from './lista-miembros/lista-miembros.component';
import { ItemMiembroComponent } from './item-miembro/item-miembro.component';
import { InfoBarUserComponent } from './info-bar-user/info-bar-user.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ActionButtonsModComponent } from './action-buttons-mod/action-buttons-mod.component';
import { ActionButtonsAdmComponent } from './action-buttons-adm/action-buttons-adm.component';
import { ListaCanariosComponent } from './lista-canarios/lista-canarios.component';
import { TablaCanariosComponent } from './tabla-canarios/tabla-canarios.component';
import { CanarioComponent } from './canario/canario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecureComponent } from './secure/secure.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { RegisterComponent } from './register/register.component';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
