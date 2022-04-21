import {
  Personas,
  Maquinaria,
  Productos,
  Almacen,
  Parcelas,
  Datos,
} from "../models/models.js";

export async function itsWorks(req, res) {
  res.send("It's works!");
}

export async function getPersonal(req, res) {
  Personas.findAll().then((personas) => {
    res.send(personas);
  });
}

export async function getMaquinaria(req, res) {
  Maquinaria.findAll().then((maquinaria) => {
    res.send(maquinaria);
  });
}

export async function getProductos(req, res) {
  Productos.findAll().then((productos) => {
    res.send(productos);
  });
}

export async function getAlmacen(req, res) {
  Almacen.findAll().then((almacen) => {
    res.send(almacen);
  });
}

export async function getParcelas(req, res) {
  Parcelas.findAll().then((parcelas) => {
    res.send(parcelas);
  });
}

export async function getPersonalCarnet(req, res) {
  Personas.findAll({
    where: {
      carnet: req.params.carnet,
    },
  }).then((personas) => {
    res.send(personas);
  });
}

export async function getParcelasbyID(req, res) {
  Parcelas.findAll({
    where: {
      id: req.params.id,
    },
  }).then((parcelas) => {
    res.send(parcelas);
  });
}

export async function getAlmacenbyID(req, res) {
  Almacen.findAll({
    where: {
      id: req.params.id,
    },
  }).then((almacen) => {
    res.send(almacen);
  });
}

export async function getDatos(req, res) {
  Datos.findAll().then((datos) => {
    res.send(datos);
  });
}
