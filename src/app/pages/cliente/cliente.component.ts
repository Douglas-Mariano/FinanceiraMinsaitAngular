import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  clientes: ICliente[] = [];

  constructor(private clienteService: ClientesService, private router: Router) {}

  ngOnInit() {
    this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) =>{
      this.clientes = result;
    });
  }

  deletarCliente(cpf: number) {
    this.clienteService.deletarCliente(cpf).subscribe(() => {
      Swal.fire(
        'Cliente deletado',
        '',
        'success'
      );
      this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) => {
        this.clientes = result;
      });
    }, (error) => {
      Swal.fire(
        'Erro',
        'Ocorreu um erro ao deletar o cliente',
        'error'
      );
    });
  }

}
