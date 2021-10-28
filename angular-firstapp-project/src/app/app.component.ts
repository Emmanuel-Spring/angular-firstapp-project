import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenidos a angular-firstapp-project';

  curso: String = 'Curso Spring Boot con angular';
  estudiante: String = 'Emmanuel Nieto';
}
