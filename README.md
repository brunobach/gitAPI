# gitAPi

## Iniciando o projeto

* Rode o comando no terminal:
``` 
yarn
```
#### Depois de instalar os pacotes e dependencias no node_modules
* Rode o comando para iniciar o servidor:
``` 
yarn dev 
````
#### Salvando Usúario no banco mongodb (Ou qualquer outro)
* Para testar o projeto utilize o insomnia ou Postman para enviar um usuario via rota post, utilizando no body do header o nome de usuario do github por exemplo:


![img](https://i.imgur.com/avsdEi9.png)

- Neste exemplo utilizei o postman para enviar a requiçao via post para o servidor passando um corpo no formato JSON:
```JSON
{
    "username": "brunobach"
}
```
> Me retornando: 
```JSON
{
    "_id": "5d69c1ebb35b6c0ebcbb40ac",
    "login": "brunobach",
    "user": "brunobach",
    "bio": "const Bio = require('Bio')",
    "avatar": "https://avatars3.githubusercontent.com/u/42494225?v=4",
    "createdAt": "2019-08-31T00:40:11.319Z",
    "updatedAt": "2019-08-31T00:40:11.319Z",
    "__v": 0
}
```

### Definiçao dos campos que você quer pegar fica no arquivo
> Controller.js
```JS
const {login, name, bio, avatar_url: avatar} = response.data
     const dev = await Dev.create({
        login, // Coloquei este campo para teste
        name,
        user: username,
        bio,
        avatar 
    })
```
