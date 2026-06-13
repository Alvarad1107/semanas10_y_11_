// 1. Crear usuario 'coordinador' con permisos dbAdmin en gestion_academica
use("gestion_academica")
db.createUser({
  user: "coordinador",
  pwd: "Coordinador123*",
  roles: [
    { role: "dbAdmin", db: "gestion_academica" }
  ]
})

// 2. Crear usuario 'auditor' con permisos únicamente de lectura
use("gestion_academica")
db.createUser({
  user: "auditor",
  pwd: "Auditor123*",
  roles: [
    { role: "read", db: "gestion_academica" }
  ]
})
