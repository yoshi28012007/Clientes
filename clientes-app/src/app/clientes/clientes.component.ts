import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


/* clientes: Cliente[] = [

   { id: 1 , nombre: 'Andres', apellido:'Guzman' , email: 'aguzman@gmail.com', createAt: '2020-12-12'},
   { id: 2 , nombre: 'Shirley', apellido:'Timoteo' , email: 'stimoteo@gmail.com', createAt: '2020-12-12'}

 ];
 */

 clientes? : Cliente[];

  constructor( private clienteService : ClienteService) {}

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(

      clientes   => this.clientes = clientes

    );
  }

}
