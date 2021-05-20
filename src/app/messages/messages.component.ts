import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from "./messages.service"
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('search')

  searchElement: ElementRef
  mensajes : string[] = [];
  mensaje : string = '';

  constructor(public messageService: MessageService) {
    this.searchElement = new ElementRef('search');
   }

  ngOnInit(): void {
    this.messageService.add("prueba");
    this.mensajes = this.messageService.getAll();
  }

  createMessage(): void {
    this.messageService.add(this.mensaje);
    this.mensaje = '';
    this.mensajes = this.messageService.getAll();
    this.searchElement.nativeElement.focus()
  }

}
