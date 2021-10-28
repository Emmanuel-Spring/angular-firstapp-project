import { Component, OnInit } from '@angular/core'
import {Cliente} from './cliente'
import {ClienteService} from "./cliente.service"
import { Router } from "@angular/router"
import Swal from 'sweetalert2'

function swal(nuevoCliente: string, s: string, success: string) {
  
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo:string = "Crear Cliente";


  constructor(private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void { }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, `Success!!!`)
      }
    );
  }
}