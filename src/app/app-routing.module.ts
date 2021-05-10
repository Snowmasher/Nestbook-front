import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ListaCanariosComponent } from './lista-canarios/lista-canarios.component';
import { CanarioComponent } from './canario/canario.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'principal/miembros', component: MiembrosComponent},
  {path: 'panel', component: UserPanelComponent},
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
