import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive], template: `
<header class="site-header"><div class="container nav-wrap"><a routerLink="/" class="brand"><span class="brand-mark">V</span><span>viaje<span class="brand-accent">já</span></span></a><nav class="main-nav"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Início</a><a routerLink="/viagens" routerLinkActive="active">Pacotes</a><a routerLink="/login" routerLinkActive="active">Área administrativa</a></nav><a routerLink="/viagens" class="nav-cta">Encontrar viagem <span>↗</span></a></div></header>
<main><router-outlet /></main>
<footer class="site-footer"><div class="container footer-inner"><a routerLink="/" class="brand footer-brand"><span class="brand-mark">V</span><span>viaje<span class="brand-accent">já</span></span></a><p>O mundo é grande. Sua próxima história também pode ser.</p><span>© 2026 ViajeJá · Projeto acadêmico</span></div></footer>
` })
export class AppComponent { readonly auth = inject(AuthService); }
