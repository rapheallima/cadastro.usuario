# Etapa 1: build com Maven e JDK 17
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app

# Copia só o pom.xml da pasta backend para baixar as dependências
COPY Backend/pom.xml .

# Baixa as dependências
RUN mvn dependency:go-offline

# Copia o restante do código da pasta backend
COPY backend/src ./src

# Builda o projeto
RUN mvn clean package -DskipTests

# Etapa 2: runtime com JDK 17
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copia o JAR gerado
COPY --from=build /app/target/perfil.usuario-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
