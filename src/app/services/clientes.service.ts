import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpoint = 'clientes'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosClientes() {
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarCliente(cliente: ICliente) {
    return this.http.post(`${this.api}/${this.endpoint}`, cliente);
  }

  buscarCLientePorCPF(cpf: number) {
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`);
  }

  atualizarCliente(cliente: ICliente) {
    return this.http.put<ICliente>(`${this.api}/${this.endpoint}/${cliente.cpf}`, cliente);
  }

  deletarCliente(cpf: number) {
    return this.http.delete<ICliente>(`${this.api}/${this.endpoint}/${cpf}`);
  }
  
}
