import {
  Personas,
  Maquinaria,
  Productos,
  Almacen,
  Parcelas,
  Datos,
  Actividad,
} from "../models/models.js";

export async function createPersonal(req, res) {
  Personas.create({
    nombre: req.body.nombre,
    dni: req.body.dni,
    email: req.body.email,
    telefono: req.body.telefono,
  }).then((persona) => {
    res.send(persona);
  });
}

export async function createMaquinaria(req, res) {
  Maquinaria.create({
    nombre: req.body.nombre,
    mantenimiento: req.body.mantenimiento,
    propiedad: req.body.propiedad,
    tipo: req.body.tipo,
  }).then((maquinaria) => {
    res.send(maquinaria);
  });
}

export async function createProductos(req, res) {
  Productos.create({
    tipo: req.body.tipo,
    nombre: req.body.nombre,
    concentracion: req.body.concentracion,
    cantidad: req.body.cantidad,
    almacen: req.body.almacen,
  }).then((producto) => {
    res.send(producto);
  });
}

export async function createParcelas(req, res) {
  const parcelas = {
    nombre: req.body.nombre,
    superficie: req.body.superficie,
    cultivos: req.body.cultivos,
    grupos: req.body.grupos,
    recintos: req.body.recintos,
  };

  Parcelas.create(parcelas).then((parcelas) => {
    res.send(parcelas);
  });
}

export async function createAlmacen(req, res) {
  const almacen = {
    nombre: req.body.nombre,
    direccion: req.body.direccion,
  };
  Almacen.create(almacen).then((almacen) => {
    res.send(almacen);
  });
}

export async function createDatos(req, res) {
  const datos = {
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    dni: req.body.dni,
    razonsocial: req.body.razonsocial,
    direccion: req.body.direccion,
    poblacion: req.body.poblacion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    localizacion: req.body.localizacion,
    codigoexplotacion: req.body.codigoexplotacion,
    carnet: req.body.carnet,
  };

  Datos.create(datos).then((datos) => {
    res.send(datos);
  });
}

export async function createActividades(req, res) {
  const actividad = {
    datestart: req.body.datestart,
    dateend: req.body.dateend,
    tiempo: req.body.tiempo,
    nombre: req.body.nombre,
    numexplotacion: req.body.numexplotacion,
    trabajo: req.body.trabajo,
    parcela: req.body.parcela,
    cultivo: req.body.cultivo,
    campana: req.body.campana,
    producto: req.body.producto,
    cantidad: req.body.cantidad,
    personal: req.body.personal,
    maquinaria: req.body.maquinaria,
  };

  Actividad.create(actividad).then((actividad) => {
    res.send(actividad);
    res.sendStatus(200);
  });
}
