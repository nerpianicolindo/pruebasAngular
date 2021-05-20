import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminComponent } from './admin/admin.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent, pathMatch: 'full'},
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
