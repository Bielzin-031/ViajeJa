import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TravelService } from '../services/travel.service';
@Component({ standalone: true, imports: [CommonModule, RouterLink], template: `
<section class="admin-section"><div class="container"><div class="admin-heading"><div><span class="eyebrow">VISÃO GERAL</span><h1>Painel de <em>gestão.</em></h1><p>Acompanhe os pacotes cadastrados no ViajeJá.</p></div><button class="button button-dark" (click)="logout()">Sair do painel</button></div><div class="stats-grid"><article class="stat-card"><span>Pacotes cadastrados</span><strong>{{packages.length}}</strong><small>Experiências disponíveis</small></article><article class="stat-card"><span>Destinos nacionais</span><strong>{{nationalCount}}</strong><small>Pacotes no Brasil</small></article><article class="stat-card"><span>Preço médio</span><strong>{{average | currency:'BRL':'symbol':'1.0-0':'pt-BR'}}</strong><small>Entre os pacotes cadastrados</small></article></div><div class="admin-table-wrap"><div class="table-heading"><div><span class="eyebrow">CATÁLOGO</span><h2>Pacotes de viagem</h2></div><a routerLink="/viagens" class="text-link">Visualizar site ↗</a></div><div class="table-scroll"><table><thead><tr><th>Destino</th><th>Categoria</th><th>Duração</th><th>Preço</th></tr></thead><tbody>@for (item of packages; track item.id) {<tr><td><strong>{{item.destination}}</strong><small>{{item.title}}</small></td><td>{{item.category}}</td><td>{{item.duration}}</td><td>{{item.price | currency:'BRL':'symbol':'1.0-0':'pt-BR'}}</td></tr>}</tbody></table></div></div><p class="admin-note">Esta versão utiliza dados demonstrativos. As operações de API estão estruturadas para integração com JSON Server.</p></div></section>
` })
export class AdminComponent {
  private travel = inject(TravelService); private auth = inject(AuthService); private router = inject(Router);
  packages = this.travel.getMockPackages(); nationalCount = this.packages.filter((item) => item.country === 'Brasil').length;
  average = this.packages.reduce((sum, item) => sum + item.price, 0) / this.packages.length;
  logout(): void { this.auth.logout(); void this.router.navigate(['/']); }
}
