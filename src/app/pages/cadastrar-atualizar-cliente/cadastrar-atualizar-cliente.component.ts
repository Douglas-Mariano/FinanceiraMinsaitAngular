import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-cliente',
  templateUrl: './cadastrar-atualizar-cliente.component.html',
  styleUrls: ['./cadastrar-atualizar-cliente.component.css']
})
export class CadastrarAtualizarClienteComponent {

  clienteForm = new FormGroup({
    cpf: new FormControl(0, Validators.required),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    rendimentoMensal: new FormControl(0, Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required)
    })
  })
  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private titleService: Title, private router: Router) {}

  clientecpf = 0;
  ngOnInit() {
    this.clientecpf = Number(this.route.snapshot.paramMap.get('cpf'));
    if (this.clientecpf) {
      this.clientesService.buscarCLientePorCPF(this.clientecpf).subscribe((cliente: ICliente) => {
        this.clienteForm.setValue({
          cpf: cliente.cpf,
          nome: cliente.nome,
          telefone: cliente.telefone,
          rendimentoMensal: cliente.rendimentoMensal,
          endereco:{
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            cep: cliente.endereco.cep
          }
        });
        this.titleService.setTitle(`Editar Cliente - ${cliente.cpf}`);
      });
    } else {
      this.titleService.setTitle('Cadastrar Cliente');
    }
  }

  cadastrar() {
    const cliente = this.clienteForm.value as ICliente;
    if (this.clientecpf) {
      this.clientesService.atualizarCliente(cliente).subscribe(() => {
        Swal.fire(
          'Sucesso!',
          'Cliente atualizado com sucesso!',
          'success'
        );
        this.voltar();
      });
    } else {
      this.clientesService.cadastrarCliente(cliente).subscribe(() => {
        Swal.fire(
          'Sucesso!',
          'Cliente cadastrado com sucesso!',
          'success'
        );
        this.clienteForm.reset();
        this.voltar();
      });
    }
  }

  voltar() {
    window.history.back();
  }

}
