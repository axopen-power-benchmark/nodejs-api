# Node API avec Express et Sequelize

Ce projet fait partie de l'étude de la consommation énergétique des frameworks
de développement en conditions réelles.

Des informations sur le protocole utilisé pour les tests se trouve [ici](https://github.com/axopen-power-benchmark/setup-benchmark)

## Dépendances

Pour compiler le projet les dépendances suivantes doivent être installé :
```shell
node
npm

# Dans le dossier du projet
npm install # Installe Express Sequelize et toutes les dépendances du projet
```

## Développement

```shell
# Démarrage du serveur en mode développement
npm start
```

## Lancement du serveur

```shell
# Démarrage du serveur en mode production
node server.js
```

## Configuration

Dans dossier courant lors du lancement de l'API doit se trouver un fichier
```.env```

On retrouve la configuration de la base de données dans ce fichier :
```dotenv
# Ne pas modifier
SECRET_JWT=eyJhbGciOiJSUzI1NiIsImtpZCI6IjJiZjg0MThiMjk2M2
# Configuration de la base de données
DB_DATABASE=power_benchmark_2
DB_HOST=localhost
DB_USER=user
DB_PASSWORD=password
DB_PORT=3307
```

## Route

### GET /api/chantier

Retourne un chantier random en mode eager

### POST /api/chantier

Update un chantier random avec des valeurs random et retourne le chantier updater
