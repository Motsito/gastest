const mysql = require("mysql2/promise");

const dbConfig = {
  host: "precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com",
  user: "candidatoPrueba",
  password: "gaspre21.M",
  database: "prueba",
  port: 3306,
};

const getData = async (req, res) => {
  const estacionId = req.params.id;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const query = `
    SELECT 
        Nombre AS NombreEstacion,
        Distancia,
        PrecioProducto,
        estacion.Marca,
      competidores.DiferenciaPrecio
    FROM estaciones AS estacion
    LEFT JOIN competidores ON estacion.Id = competidores.IdEstacion
    WHERE estacion.Id = ?;
  `;

    const [rows] = await connection.execute(query, [estacionId]);

    await connection.end();

    if (rows.length === 0) {
      return res.status(404).json({ error: "Estación no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports(getData);
