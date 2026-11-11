# ViajeJá

Aplicação acadêmica de turismo desenvolvida com Angular. O objetivo é apresentar pacotes de viagem e permitir que visitantes consultem destinos e solicitem informações de reserva.

## Tecnologias
- Angular (standalone components e lazy loading)
- TypeScript
- HTML e CSS responsivo
- JSON Server (API REST simulada)

## Requisitos
- Node.js compatível com Angular 20
- npm

## Como executar

```bash
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:4200`.

## API simulada (JSON Server)
Em outro terminal, execute:

```bash
npm run json-server
```

A API ficará em `http://localhost:3000/packages`.

## Acesso demonstrativo do painel
- E-mail: `admin@viajeja.com`
- Senha: `viajeja123`

> Credenciais exclusivamente demonstrativas para o protótipo acadêmico. Não utilizar em produção.

## Estrutura
- `src/app/components`: páginas e componentes da aplicação.
- `src/app/services`: serviços para dados de viagens e autenticação.
- `src/app/guards`: proteção da rota administrativa.
- `src/app/models`: modelos TypeScript.
- `db.json`: dados iniciais para o JSON Server.

## Observação acadêmica
O catálogo exibido na interface utiliza mock objects locais para permitir a demonstração imediata. O serviço também contém métodos HTTP para integração CRUD com o JSON Server. A autenticação é simulada no navegador e não representa um sistema seguro de produção.
