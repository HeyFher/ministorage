# Ministorage
##### v.0.0.1

Almacena y gestiona pequeñas porciones de información dentro de localStorage.
Inspirado en minimongo.



### new Collection(nombre)
```javascript
/**
 *  new Collection(nombre)
 *
 * D E S C R I P C I O N
 *     Constructor para crear la colección.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     Nombre que recibirá la colección al crearse.
 */

const Users = new Collection('users');
```



### Collection.insert(documento)
```javascript
/**
 * Collection.insert(documento)
 *
 * D E S C R I P C I O N
 *    Inserta un documento dentro de la colección.
 *
 * A R G U M E N T O S
 *   - documento [Object]
 *     Almacena dentro de la colleción un objeto pasado por parametro.
 */

const Users = new Collection('users');

Users.insert({
  username: 'Fer0910',
  name: 'Fernando Saldaña',
  age 20
})

// Almacenando informacón dinamicamente
Users.insert({
  username: document.querySelector('username-input').value,
  name: document.querySelector('name-input').value,
  age: document.querySelector('age-input').value
});

// Dentro de la consola, al usar el método insert, se retornara el ID
// del documento que se acaba de crear.
```



### Collection.find(nombre)
```javascript
/**
 * Collection.find(nombre)
 *
 * D E S C R I P C I O N
 *    El método find retorna un objeto que coincida con el ID
 *    pasado por parametro.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento que se quiere recuperar.
 */

let User = Users.find('shsEd0A1as2');
```



### Collection.findIndex(nombre)
```javascript
/**
 * Collection.findIndex(nombre)
 *
 * D E S C R I P C I O N
 *    El método findIndex retorna la posición del documento
 *    dentro de la colección.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento que se quiere recuperar.
 */

Users.findIndex('shsEd0A1as2');
```



### Collection.findAll()
```javascript
/**
 * Collection.findAll()
 *
 * D E S C R I P C I O N
 *    El método findAll retorna un array de objetos con todo los
 *    documentos almacenados en la colección.
 */

let allUsers = Users.findAll();
```



### Collection.update(nombre, documento)
```javascript
/**
 * Collection.update(nombre, documento)
 *
 * D E S C R I P C I O N
 *    Remplaza el mismo documento por otro pasado como argumento
 *    dentro de la colección. El nuevo documento conservara el
 *    mismo ID del documento anterior.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento que se quiere remover
 *   - documento [Object]
 *     Nuevo documento por el que se remplazara el anterior
 */

Users.update('shsEd0A1as2', {
  username: 'Salda0923'
  name: 'Fernando Saldaña',
  age: 21,
  country: 'México'
});
```



### Collection.remove(nombre)
```javascript
/**
 * Collection.remove(nombre)
 *
 * D E S C R I P C I O N
 *    Remueve un documento de la colección
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento que se quiere remover
 */

Users.remove('shsEd0A1as2');
```



### Collection.count()
```javascript
/**
 * Collection.count()
 *
 * D E S C R I P C I O N
 *    Retorna el número de documetos dentro de la colección.
 */

Users.count();
```



### Collection.reset()
```javascript
/**
 * Collection.reset()
 *
 * D E S C R I P C I O N
 *    Reinicia la colección
 */

Users.reset();
```
