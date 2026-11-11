import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({ standalone: true, imports: [FormsModule, RouterLink], template: `
<section class="login-section"><div class="login-art"><div class="login-art-copy"><span class="eyebrow light">VIAJEJÁ · PAINEL</span><h1>Organize experiências.<br><em>Inspire destinos.</em></h1><p>Área de acesso administrativo da plataforma.</p></div></div><div class="login-panel"><div class="login-box"><span class="eyebrow">BEM-VINDO DE VOLTA</span><h2>Acesse sua conta.</h2><p>Entre para gerenciar os pacotes da plataforma.</p><form (ngSubmit)="submit()"><label>E-mail<input type="email" name="email" [(ngModel)]="email" placeholder="admin@viajeja.com" required></label><label>Senha<input type="password" name="password" [(ngModel)]="password" placeholder="Sua senha" required></label>@if (error) {<p class="form-error">{{error}}</p>}<button class="button button-primary button-full" type="submit">Entrar no painel ↗</button></form><div class="demo-hint"><strong>Acesso demonstrativo</strong><span>admin@viajeja.com</span><span>viajeja123</span></div><a routerLink="/" class="text-link">← Voltar ao site</a></div></div></section>
` })
export class LoginComponent {
  email = ''; password = ''; error = ''; private auth = inject(AuthService); private router = inject(Router);
  submit(): void { if (this.auth.login(this.email, this.password)) { this.error = ''; void this.router.navigate(['/admin']); } else { this.error = 'E-mail ou senha incorretos. Confira os dados demonstrativos.'; } }
}
