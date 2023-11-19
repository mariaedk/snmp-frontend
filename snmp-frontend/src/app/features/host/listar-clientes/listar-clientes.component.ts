import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HostDTO } from 'src/app/comum/dto/HostDTO';
import { ARRAY_HOST_DTO } from 'src/app/comum/mock/HostDTOMock';
import { HostService } from 'src/app/comum/servicos/host.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  listaHosts$ = new Observable<HostDTO[]>();
  listaHosts = new Array<HostDTO>();

  constructor(private hostService: HostService, public router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.listaHosts$ = this.hostService.getListaHosts();
    }, 5000);
    this.listaHosts = ARRAY_HOST_DTO;
  }

  detalhesHost(ip: string) {
    this.router.navigate([`/clientes/host/${ip}`])
  }
}
