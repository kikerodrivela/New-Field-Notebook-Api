import {
  Personas,
  Maquinaria,
  Productos,
  Almacen,
  Parcelas,
  Actividad
  
} from "../models/models.js";

export async function deleteParcelabyID(req, res) {
  Parcelas.destroy({
    where: {
      id: req.params.id,
    },
  }).then((parcelas) => {
    res.send(parcelas);
  });
}

export async function deletePersonalbyID(req, res) {
  Personas.destroy({
    where: {
      id: req.params.id,
    },
  }).then((personas) => {
    res.send(personas);
  });
}

export async function deleteMaquinariabyID(req, res) {
  Maquinaria.destroy({
    where: {
      id: req.params.id,
    },
  }).then((maquinaria) => {
    res.send(maquinaria);
  });
}

export async function deleteProductobyID(req, res) {
  Productos.destroy({
    where: {
      id: req.params.id,
    },
  }).then((productos) => {
    res.send(productos);
  });
}

export async function deleteAlmacenbyID(req, res) {
  Almacen.destroy({
    where: {
      id: req.params.id,
    },
  }).then((almacen) => {
    res.send(almacen);
  });
}

export async function deleteDatosbyID(req, res) {
  Datos.destroy({
    where: {
      id: req.params.id,
    },
  }).then((datos) => {
    res.send(datos);
  });
}

export async function deleteActividadesbyID(req, res){
  Actividad.destroy({
    where: {
      id: req.params.id,
    },
  }).then((actividad) => {
    res.send(actividad);
  });
}