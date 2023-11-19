import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostDTO } from 'src/app/comum/dto/HostDTO';
import { HostService } from 'src/app/comum/servicos/host.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  listaHosts = new Array<HostDTO>();

  constructor(private hostService: HostService, public router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.hostService.getListaHosts().subscribe(hosts => {
        this.listaHosts = hosts;
      });
    }, 10000);
  }

  detalhesHost(ip: string) {
    this.router.navigate([`/clientes/host/${ip}`])
  }
}
