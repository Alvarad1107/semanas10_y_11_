# Proyecto de Validación y Seguridad en MongoDB


## Contenido del Repositorio

### Semana 10: Validación de documentos con `$jsonSchema`
Implementación de reglas de validación estricta para asegurar que la información ingresada a la base de datos `gestion_academica_validation` cumpla con los formatos, tipos de datos y campos requeridos.
* `VALIDATION.mongodb.js`: Script principal con la creación de colecciones y sus respectivas reglas de validación (carreras, docentes, estudiantes, materias, grupos, inscripciones, evaluaciones y calificaciones).
* `pruebas_insercion_retos.js`: Resolución de los 3 retos evaluados. Contiene pruebas de inserciones válidas y la demostración (con comentarios explicativos) de inserciones inválidas que son bloqueadas por el esquema.

### Semana 11: Autenticación, Autorización y Respaldos
Configuración de seguridad aplicando el principio de mínimo privilegio y resguardo de la información.
* usuarios_semana11.js`: Script de creación de perfiles de acceso. Incluye al usuario `coordinador` (con permisos `dbAdmin`) y al usuario `auditor` (con permisos `read`).
* Carpeta `backups/`: Contiene las copias de seguridad binarias de las bases de datos solicitadas.

---

## Investigación Teórica (Semana 11)

A continuación, se detallan los procedimientos investigados para la administración del servidor MongoDB:

**1. Realizar y restaurar copias de seguridad (Backups)**
Para realizar respaldos físicos de las bases de datos, se utilizan las *MongoDB Database Tools* desde la terminal del sistema operativo (fuera de `mongosh`):
* **Respaldar:** `mongodump --db gestion_academica --out backups`
  `mongodump --db biblioteca_estrella_de_la_manana --out backups`
* **Restaurar:** `mongorestore --db gestion_academica backups/gestion_academica`

**2. Listar todos los usuarios creados**
Para visualizar los usuarios registrados en el sistema, se debe acceder a `mongosh` y ejecutar el siguiente comando dentro de la base de datos específica o en la base `admin`:
```javascript
db.getUsers()