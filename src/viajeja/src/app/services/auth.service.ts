import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAdmin = signal(false);
  login(email: string, password: string): boolean {
    const valid = email === 'admin@viajeja.com' && password === 'viajeja123';
    this.isAdmin.set(valid);
    return valid;
  }
  logout(): void { this.isAdmin.set(false); }
}
