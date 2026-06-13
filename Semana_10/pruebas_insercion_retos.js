use("gestion_academica_validation")

// Inserción Válida - Materias
db.materias_validadas.insertOne({
  codigo: "PRG104", 
  nombre: "Programación Estructurada",
  uv: 4,
  ciclo: 1,
  area: "Programación",
  prerequisitos: [],
  activo: true
});

// Inserción Inválida - Materias
db.materias_validadas.insertOne({
  codigo: "prg-1", // No cumple el patrón (deben ser mayúsculas y números)
  nombre: "Pro", //No cumple el minLength (mínimo 5 caracteres)
  uv: 8, //Supera el maximum (el máximo es 6)
  ciclo: 1,
  area: "Matemáticas", //"Matemáticas" no está en el catálogo enum
  activo: true
});

// Inserción Válida - Evaluaciones
db.evaluaciones_validadas.insertOne({
  codigo_evaluacion: "EV-PRG104-001", 
  codigo_grupo: "PRG104-G01",
  nombre_evaluacion: "Primer Parcial",
  porcentaje: 25,
  fecha: new Date("2026-06-20"),
  activo: true
});

// Inserción Inválida - Evaluaciones
db.evaluaciones_validadas.insertOne({
  codigo_evaluacion: "evaluacion1", //No cumple el patrón ^EV-[A-Z0-9]+-[0-9]{3}$
  codigo_grupo: "PRG104-G01",
  nombre_evaluacion: "Examen Sorpresa", //No está en la lista de enum permitidos
  porcentaje: 150, //Supera el máximo permitido de 100
  fecha: "20-06-2026", //Tipo de dato incorrecto (es un string, no un tipo Date)
  activo: true
});

// Inserción Válida - Inscripciones
db.inscripciones_validadas.insertOne({
  carnet_estudiante: "2026-TID-001",
  codigo_grupo: "PRG104-G01",
  fecha_inscripcion: new Date("2026-01-15"),
  estado: "Inscrito"
});

// Inserción Inválida - Inscripciones
db.inscripciones_validadas.insertOne({
  carnet_estudiante: "2026-TID-001",
  //Falta el campo obligatorio "codigo_grupo" (required)
  fecha_inscripcion: "2026-01-15", //Debe ser un tipo Date, no un string
  estado: "Pendiente" //"Pendiente" no está en el enum (Solo acepta Inscrito, Retirado, Aprobado, Reprobado)
});