import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['Typescript', 'Javascript', 'Java SE', 'C#', 'C', 'Scala','Typescript', 'Javascript', 'Java SE', 'C#', 'C', 'Scala','Typescript', 'Javascript', 'Java SE', 'C#', 'C', 'Scala'];

  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true)? false:true;
  }


  constructor() {  }

}
