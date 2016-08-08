# Ministorage

Almacena y gestiona pequeñas porciones de información dentro de localStorage. Inspirado en minimongo.

LocalStorage nos permite almacenar información de forma permanente en el lado del client, ya sa para una aplicación TODO o simplemente almacenar el estado de un checkbox, Ministorage pretende facilitar esa tarea con una seríe de métodos que nos permitiran realizar operaciónes CRUD.

## Versión

0.0.1

## API

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
 *     Nombre de la colección
 */

var Users = new Collection('users');
// Cuando la instancia sea removida la colección también lo será.
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
 *     Objeto a almacenar
 */

var Users = new Collection('users');

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
// del documento que se creó.
```



### Collection.find(nombre)
```javascript
/**
 * Collection.find(nombre)
 *
 * D E S C R I P C I O N
 *    El método find retorna un objeto que coincida con el ID
 *    pasado por argumento.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento
 */

var User = Users.find('shsEd0A1as2');
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
 *     ID del documento
 */

Users.findIndex('shsEd0A1as2');
```



### Collection.findAll()
```javascript
/**
 * Collection.findAll()
 *
 * D E S C R I P C I O N
 *    El método findAll retorna un array con todos los documentos
 *    dentro de la colección.
 */

let allUsers = Users.findAll();
// [Object, Object, Object, Object, ...]
```



### Collection.update(nombre, documento)
```javascript
/**
 * Collection.update(nombre, documento)
 *
 * D E S C R I P C I O N
 *    Remplaza el documento que coincida con la ID. El nuevo documento conservara el
 *    mismo ID del documento anterior.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento
 *   - documento [Object]
 *     Objeto que remplazara al anterior
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
 *    Remueve un documento.
 *
 * A R G U M E N T O S
 *   - nombre [String]
 *     ID del documento
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
 *    Reinicia la colección.
 */

Users.reset();
```
