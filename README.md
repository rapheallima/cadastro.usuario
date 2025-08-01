# 🧑‍💻 Perfil de Usuário – Desafio Fullstack

Este projeto é uma aplicação fullstack desenvolvida para o desafio técnico da Sync360. O objetivo é permitir a visualização e edição de um perfil de usuário, com salvamento das informações em um banco de dados MySQL.


OBS: (O front-end está hospedado na Vercel, o link está aqui ao lado direito, o back-end/banco de dados está na Render no plano grátuito então pode levar alguns segundos para abrir, por favor aguarde ou tente novamente)

## 🎯 Objetivo

Criar uma interface de **perfil de usuário** com:

- Exibição das seguintes informações:
  - Imagem de perfil
  - Nome completo
  - Idade
  - Endereço (rua, bairro, estado)
  - Biografia

- Formulário para edição e envio dos dados
- Salvamento das informações no banco de dados
- Interface responsiva (mobile e desktop)

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- REST API

### Frontend *(em desenvolvimento)*
- React
- JavaScript
- CSS (Tailwind ou Bootstrap)

---

## 📦 Endpoints da API

- `GET /usuario` – Retorna os dados do usuário
- `POST /usuario` – Cria ou atualiza os dados do usuário

---

## 🧪 Como rodar o backend localmente

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd backend

## Configure o banco MySQL:

```sql
CREATE DATABASE usuarios_db;
```

## Altere as credenciais em application.properties:
```properties
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA
```

## Rode o projeto com o Spring Boot:
```bash
./mvnw spring-boot:run
```

## Teste no Postman:
```http
GET: http://localhost:8080/usuario

POST: http://localhost:8080/usuario
```
