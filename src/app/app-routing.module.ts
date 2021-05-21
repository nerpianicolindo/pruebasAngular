import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { MessagesComponent } from './messages/messages.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminComponent } from './admin/admin.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: "full" },
  { path: 'register', component: RegisterComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'notes', component: NotesComponent, pathMatch: 'full'},
  { path: 'messages', component: MessagesComponent, pathMatch: 'full'},
  { path: 'users', component: UsersComponent,  pathMatch: 'full'},
  { path: 'items', component: ItemListComponent,  pathMatch: 'full'},
  { path: 'item/:id', component: ItemDetailComponent,  pathMatch: 'full'},
  { path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: AdminMainComponent, },
      {path: 'settings', component: SettingsComponent, }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
