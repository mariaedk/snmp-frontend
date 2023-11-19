import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesHostDTO } from 'src/app/comum/dto/DetalhesHostDTO';
import { HostDTO } from 'src/app/comum/dto/HostDTO';
import { MOCK_DETALHES_HOST_DTO } from 'src/app/comum/mock/DetalhesHostDTOMock';
import { ARRAY_HOST_DTO } from 'src/app/comum/mock/HostDTOMock';
import { HostService } from 'src/app/comum/servicos/host.service';

@Component({
  selector: 'app-detalhes-host',
  templateUrl: './detalhes-host.component.html',
  styleUrls: ['./detalhes-host.component.scss']
})
export class DetalhesHostComponent implements OnInit {

  ip: string = '';
  host: DetalhesHostDTO = MOCK_DETALHES_HOST_DTO[0];

  constructor(public route: ActivatedRoute, private hostService: HostService) {}

  ngOnInit(): void {
    this.ip = this.route.snapshot.params["id"];
    this.hostService.getDetalhesHost(this.ip).subscribe(host => {
      this.host = host;
    });
  }

}
