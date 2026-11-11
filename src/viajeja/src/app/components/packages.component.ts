import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TravelService } from '../services/travel.service';
import { TravelPackage } from '../models/package.model';
@Component({ standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `
<section class="page-hero"><div class="container"><span class="eyebrow light">ESCOLHA SEU PRÓXIMO DESTINO</span><h1>Encontre uma viagem<br><em>com a sua cara.</em></h1><p>Inspire-se, pesquise e comece a planejar sua próxima experiência.</p></div></section>
<section class="container listing-section"><div class="filter-bar"><label class="search-field"><span>⌕</span><input [(ngModel)]="term" (ngModelChange)="filterPackages()" placeholder="Para onde você quer ir?" aria-label="Pesquisar destino"></label><label class="category-field"><span>Categoria</span><select [(ngModel)]="category" (ngModelChange)="filterPackages()"><option>Todas</option><option>Praia</option><option>Aventura</option><option>Cultura</option><option>Natureza</option></select></label><span class="result-count">{{filtered.length}} experiências</span></div><div class="package-grid listing-grid">@for (item of filtered; track item.id) {<article class="package-card"><a [routerLink]="['/viagens', item.id]" class="card-image"><img [src]="item.image" [alt]="item.destination" loading="lazy"><span class="card-tag">{{item.category}}</span></a><div class="card-body"><span class="card-location">{{item.destination}} · {{item.country}}</span><h3>{{item.title}}</h3><p class="card-description">{{item.description}}</p><div class="card-bottom"><span>{{item.duration}}</span><strong>{{item.price | currency:'BRL':'symbol':'1.0-0':'pt-BR'}}</strong></div><a [routerLink]="['/viagens', item.id]" class="card-link">Ver detalhes <span>↗</span></a></div></article>} @empty {<div class="empty-state"><span>⌕</span><h3>Nenhuma viagem encontrada</h3><p>Tente outro destino ou escolha uma categoria diferente.</p><button class="button button-dark" (click)="clearFilters()">Limpar filtros</button></div>}</div></section>
`, })
export class PackagesComponent implements OnInit {
  term = ''; category = 'Todas'; filtered: TravelPackage[] = this.travel.getMockPackages();
  constructor(private travel: TravelService) {}
  ngOnInit(): void { this.travel.getPackages().subscribe((items) => { this.filtered = items; }); }
  filterPackages(): void { this.filtered = this.travel.search(this.term, this.category); }
  clearFilters(): void { this.term = ''; this.category = 'Todas'; this.filterPackages(); }
}
