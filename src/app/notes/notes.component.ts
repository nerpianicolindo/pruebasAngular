import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('search')

  searchElement: ElementRef;
  notes: string[];
  note: string = '';

  constructor() {
    this.notes = [];
    this.searchElement = new ElementRef('search');
   }

  ngOnInit(): void {
    this.searchElement.nativeElement.focus();
  }

  createNote(){
    if (this.note){
      this.notes.push(this.note)
      this.note = '';
      this.searchElement.nativeElement.focus()
    }
  }

}
