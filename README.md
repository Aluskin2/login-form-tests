# Login App

Aplikacja logowania zbudowana w React, z prostym formularzem umożliwiającym użytkownikom logowanie.
Aplikacja używa Express jako backendu oraz Cypress do automatycznych testów.

## Uruchomienie aplikacji
### Docker
1. Budujemy kontener
```bash
$ docker-compose build 
```
2. Uruchamiamy zbudowany kontener
```bash
$ docker-compose up
```

4. Aplikacje powinny być dostępne domyślnie pod adrami:

```
React http://localhost:3000
API http://localhost:5000
```

## Uruchomienie testów automatycznych
```
npx cypress open
```