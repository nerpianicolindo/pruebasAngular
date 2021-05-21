import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { routing } from './app.routing';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { NotesComponent } from './notes/notes.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/messages.service';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ItemListComponent,
    ItemDetailComponent,
    AdminComponent,
    SettingsComponent,
    AdminMainComponent,
    NotesComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //routing
  ],
  providers: [
    MessageService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
