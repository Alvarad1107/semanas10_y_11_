# Proyecto de Validación y Seguridad en MongoDB - Gestión Académica

Repositorio con las prácticas de las Semanas 10 y 11 para el módulo de Diseño de Bases de Datos no Relacionales del Técnico en Ingeniería de Desarrollo de Software.

## Contenido del Repositorio

### Semana 10: Validación de documentos con $jsonSchema
Implementación de reglas de validación en colecciones de MongoDB para asegurar la integridad de los datos académicos.
* `VALIDATION.mongodb.js`: Script de creación de colecciones con restricciones de tipos de datos, rangos y arreglos.
* `pruebas_insercion_retos.js`: Script con los 3 retos evaluados (Materias, Evaluaciones, Inscripciones) demostrando inserciones válidas y el análisis de errores en inserciones inválidas.

### Semana 11: Autenticación, autorización y seguridad
Scripts de endurecimiento de la base de datos aplicando el principio de mínimo privilegio.
* `usuarios_semana11.js`: Creación de usuarios con roles específicos (`dbAdmin` y `read`) y control de accesos.

---

## Investigación: Administración y Seguridad en MongoDB (Semana 11)

A continuación, se detallan los comandos investigados para la administración y respaldo de las bases de datos:

**1. Realizar copias de seguridad (Backup) y restauración:**
Para realizar los respaldos desde la terminal (usando las herramientas de base de datos de MongoDB, fuera de mongosh), se utiliza `mongodump`.
* *Respaldo de Gestión Académica:* `mongodump --db gestion_academica --out /ruta/backup`
* *Respaldo de la Biblioteca:* `mongodump --db biblioteca_estrella_de_la_manana --out /ruta/backup`
* *Para restaurar una base de datos:* `mongorestore --db gestion_academica /ruta/backup/gestion_academica`

**2. Listar todos los usuarios creados:**
Dentro de mongosh, situándose en la base de datos específica o en la base `admin`, se ejecuta:
`db.getUsers()`

**3. Crear roles personalizados y asignarlos:**
Se utiliza el comando `db.createRole()`. Ejemplo para un rol que solo permita insertar documentos (sin permisos para borrar o actualizar):
```javascript
db.createRole({
  role: "soloInsercion",
  privileges: [
    { resource: { db: "gestion_academica", collection: "" }, actions: [ "insert" ] }
  ],
  roles: []
})