import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TravelService } from '../services/travel.service';
@Component({ standalone: true, imports: [CommonModule, RouterLink], template: `
@if (item) {<section class="detail-hero" [style.background-image]="'linear-gradient(90deg,rgba(4,32,42,.82),rgba(4,32,42,.12)),url(' + item.image + ')'"><div class="container detail-hero-content"><a routerLink="/viagens" class="back-link">← Voltar para pacotes</a><span class="eyebrow light">{{item.category}} · {{item.country}}</span><h1>{{item.destination}}<br><em>espera por você.</em></h1><span class="detail-duration">{{item.duration}}</span></div></section><section class="container detail-layout"><div class="detail-copy"><span class="eyebrow">SOBRE A EXPERIÊNCIA</span><h2>{{item.title}}</h2><p>{{item.description}}</p><h3>O que está incluído</h3><ul class="highlight-list">@for (point of item.highlights; track point) {<li><span>✓</span>{{point}}</li>}</ul></div><aside class="booking-card"><span class="eyebrow">INVESTIMENTO</span><span class="booking-price">{{item.price | currency:'BRL':'symbol':'1.0-0':'pt-BR'}}</span><span class="booking-caption">por pessoa · valor ilustrativo</span><a class="button button-primary button-full" [href]="'mailto:contato@viajeja.com?subject=Interesse%20em%20' + item.title">Solicitar reserva ↗</a><p>Entre em contato para consultar datas e condições.</p></aside></section>} @else {<section class="container not-found"><h1>Não encontramos esse destino.</h1><a routerLink="/viagens" class="button button-dark">Ver pacotes</a></section>}
` })
export class PackageDetailComponent {
  private route = inject(ActivatedRoute); private travel = inject(TravelService);
  item = this.travel.getById(Number(this.route.snapshot.paramMap.get('id')));
}
