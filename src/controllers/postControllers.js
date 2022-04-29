import {
  Personas,
  Maquinaria,
  Productos,
  Almacen,
  Parcelas,
  Datos,
  Actividades,
} from "../models/models.js";

export async function createPersonal(req, res) {
  const persona = {
    nombre: req.body.nombre,
    dni: req.body.dni,
    tipo: req.body.tipo,
    telefono: req.body.telefono,
    email: req.body.email,
    fitosanitario: req.body.fitosanitario,
    nif: req.body.nif,
    ropo: req.body.ropo,
    carnet: req.body.carnet,
  };

  Personas.create(persona).then((persona) => {
    res.send(persona);
    res.sendStatus(200);
  });
}

export async function createMaquinaria(req, res) {
  const maquinaria = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    matricula: req.body.matricula,
    propiedad: req.body.propiedad,
    mantenimiento: req.body.mantenimiento,
  };

  Maquinaria.create(maquinaria).then((maquinaria) => {
    res.send(maquinaria);
    res.sendStatus(200);
  });
}

export async function createProductos(req, res) {
  const producto = {
    tipo: req.body.tipo,
    nombre: req.body.nombre,
    concentracion: req.body.concentracion,
    cantidad: req.body.cantidad,
    almacen: req.body.almacen,
  };

  Productos.create(producto).then((producto) => {
    res.send(producto);
    res.sendStatus(200);
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
    res.sendStatus(200);
  });
}

export async function createAlmacen(req, res) {
  const almacen = {
    nombre: req.body.nombre,
    direccion: req.body.direccion,
  };
  Almacen.create(almacen).then((almacen) => {
    res.send(almacen);
    res.sendStatus(200);
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
    res.sendStatus(200);
  });
}

export async function createActividades(req, res) {
  const actividad = {
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
    datestart: req.body.datestart,
    dateend: req.body.dateend,
  };

  Actividades.create(actividad).then((actividad) => {
    res.send(actividad);
    res.sendStatus(200);
  });
}
