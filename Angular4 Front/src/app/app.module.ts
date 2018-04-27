import { PostProvider } from '../providers/SendService';
import { UsersProvider } from '../providers/Service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SaveComponent } from './save/save.component';
import { EidtComponent } from './eidt/eidt.component';
import { ShowComponent } from './show/show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EditsubComponent } from './editsub/editsub.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const routes: Routes = [
{ path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent,
    children: [
  { path: 'edit', component: EidtComponent,
      children: [{ path: 'editsub', component: EditsubComponent}]}, // , outlet: 'editpage'},
  { path: 'save', component: SaveComponent}, // , outlet: 'savepage'},
  { path: 'show', component: ShowComponent} // , outlet: 'showpage'}
]}
];
@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    LoginComponent,
    MenuComponent,
    SaveComponent,
    EidtComponent,
    ShowComponent,
    EditsubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UsersProvider,
  PostProvider,
SaveComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
