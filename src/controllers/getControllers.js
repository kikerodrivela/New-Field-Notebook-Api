import {
  Personas,
  Maquinaria,
  Productos,
  Almacen,
  Parcelas,
  Datos,
  Actividades,
} from "../models/models.js";

export async function itsWorks(req, res) {
  res.send("It's works!");
}

export async function getPersonal(req, res) {
  Personas.findAll().then((personas) => {
    res.send(personas);
    res.sendStatus(200);
  });
}

export async function getMaquinaria(req, res) {
  Maquinaria.findAll().then((maquinaria) => {
    res.send(maquinaria);
    res.sendStatus(200);
  });
}

export async function getProductos(req, res) {
  Productos.findAll().then((productos) => {
    res.send(productos);
    res.sendStatus(200);
  });
}

export async function getAlmacen(req, res) {
  Almacen.findAll().then((almacen) => {
    res.send(almacen);
    res.sendStatus(200);
  });
}

export async function getParcelas(req, res) {
  Parcelas.findAll().then((parcelas) => {
    res.send(parcelas);
    res.sendStatus(200);
  });
}

export async function getPersonalCarnet(req, res) {
  Personas.findAll({
    where: {
      carnet: req.params.carnet,
    },
  }).then((personas) => {
    res.send(personas);
    res.sendStatus(200);
  });
}

export async function getParcelasbyID(req, res) {
  Parcelas.findAll({
    where: {
      id: req.params.id,
    },
  }).then((parcelas) => {
    res.send(parcelas);
    res.sendStatus(200);
  });
}

export async function getAlmacenbyID(req, res) {
  Almacen.findAll({
    where: {
      id: req.params.id,
    },
  }).then((almacen) => {
    res.send(almacen);
    res.sendStatus(200);
  });
}

export async function getDatos(req, res) {
  Datos.findAll().then((datos) => {
    res.send(datos);
    res.sendStatus(200);
  });
}

export async function getActividades(req, res) {
  Actividades.findAll().then((actividades) => {
    res.send(actividades);
    res.sendStatus(200);
  });
}

export async function getActividadesbyDate(req, res) {
  // The user enter 2 dates, the first one is the initial date and the second one is the final date and filter the actividades by the dates

  // The initial date is the first day of the month
  let initialDate = new Date(req.params.initialDate);
  initialDate.setDate(1);

  // The final date is the last day of the month
  let finalDate = new Date(req.params.finalDate);
  finalDate.setMonth(finalDate.getMonth() + 1);
  finalDate.setDate(0);

  Actividades.findAll({
    where: {
      datestart: {
        [Op.between]: [initialDate],
      },
      dateend: {
        [Op.between]: [finalDate],
      },
    },
  }).then((actividades) => {
    res.send(actividades);
    res.sendStatus(200);
  });
}
