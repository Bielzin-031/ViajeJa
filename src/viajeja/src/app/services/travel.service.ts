import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { TravelPackage } from '../models/package.model';

@Injectable({ providedIn: 'root' })
export class TravelService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/packages';
  private readonly mockPackages: TravelPackage[] = [
    { id: 1, title: 'Paraíso em Porto de Galinhas', destination: 'Porto de Galinhas', country: 'Brasil', duration: '5 dias / 4 noites', price: 1890, category: 'Praia', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85', description: 'Dias de descanso em águas cristalinas, piscinas naturais e paisagens inesquecíveis no litoral pernambucano.', highlights: ['Hospedagem com café da manhã', 'Passeio às piscinas naturais', 'Traslado aeroporto–hotel'], featured: true },
    { id: 2, title: 'Aventura em Foz do Iguaçu', destination: 'Foz do Iguaçu', country: 'Brasil', duration: '4 dias / 3 noites', price: 1590, category: 'Natureza', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85', description: 'Conheça uma das maiores maravilhas naturais do mundo e viva uma experiência cercada por natureza.', highlights: ['Visita ao Parque Nacional', 'Ingresso para as cataratas', 'Café da manhã incluso'] },
    { id: 3, title: 'Cultura e charme em Lisboa', destination: 'Lisboa', country: 'Portugal', duration: '7 dias / 6 noites', price: 4890, category: 'Cultura', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85', description: 'Explore ruas históricas, miradouros, gastronomia e a atmosfera única da capital portuguesa.', highlights: ['Hotel bem localizado', 'City tour guiado', 'Café da manhã incluso'], featured: true },
    { id: 4, title: 'Aventura na Chapada dos Veadeiros', destination: 'Alto Paraíso', country: 'Brasil', duration: '5 dias / 4 noites', price: 2190, category: 'Aventura', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85', description: 'Trilhas, cachoeiras e paisagens impressionantes em um dos destinos mais especiais do Cerrado.', highlights: ['Hospedagem selecionada', 'Passeios com guia local', 'Experiências em cachoeiras'] },
    { id: 5, title: 'Sol e mar em Maceió', destination: 'Maceió', country: 'Brasil', duration: '6 dias / 5 noites', price: 2390, category: 'Praia', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85', description: 'Aproveite praias de tons azul-turquesa, piscinas naturais e a culinária alagoana.', highlights: ['Hotel com café da manhã', 'Passeio pelo litoral sul', 'Traslados incluídos'] },
    { id: 6, title: 'Montanhas de Bariloche', destination: 'Bariloche', country: 'Argentina', duration: '6 dias / 5 noites', price: 3690, category: 'Natureza', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85', description: 'Cenários de montanha, lagos e experiências aconchegantes na Patagônia argentina.', highlights: ['Hospedagem central', 'Circuito Chico', 'Café da manhã incluso'] }
  ];

  getPackages(): Observable<TravelPackage[]> { return this.http.get<TravelPackage[]>(this.apiUrl).pipe(catchError(() => of(this.getMockPackages()))); }
  getMockPackages(): TravelPackage[] { return [...this.mockPackages]; }
  getById(id: number): TravelPackage | undefined { return this.mockPackages.find((item) => item.id === id); }
  search(term: string, category = 'Todas'): TravelPackage[] {
    const normalized = term.trim().toLocaleLowerCase('pt-BR');
    return this.mockPackages.filter((item) => (category === 'Todas' || item.category === category) && (!normalized || `${item.title} ${item.destination} ${item.country}`.toLocaleLowerCase('pt-BR').includes(normalized)));
  }
  create(item: TravelPackage): Observable<TravelPackage> { return this.http.post<TravelPackage>(this.apiUrl, item); }
  update(id: number, item: Partial<TravelPackage>): Observable<TravelPackage> { return this.http.patch<TravelPackage>(`${this.apiUrl}/${id}`, item); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}
