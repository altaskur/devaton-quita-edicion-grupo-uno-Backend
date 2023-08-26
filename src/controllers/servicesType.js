const { db } = require('../db/db');

const listServicesType = async (req, res) => {
  try {
    const query = 'SELECT * FROM service_type';
    const data = await db.any(query);
    console.log(data);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Error to get services type' });
  }
};

const createServicesType = async (req, res) => {
  try {
    const {
      name,
    } = req.body;

    if (!name) return res.status(404).json({ error: 'Name is required' });
    const query = 'SELECT COUNT(*) FROM service_type';
    const { count } = await db.one(query);
    const id = parseInt(count, 10) + 1;

    const query2 = 'INSERT INTO service_type (id, service_type_name) VALUES ($1, $2)';
    await db.oneOrNone(query2, [id, name]);

    return res.status(200).json({ message: 'Service type created' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to create service type' });
  }
};

const updateServicesType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) return res.status(404).json({ error: 'Missing arguments' });

    const query = 'UPDATE service_type SET service_type_name = $1 WHERE id = $2';
    await db.oneOrNone(query, [name, id]);

    return res.status(200).json({ message: 'Service type updated' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to update service type' });
  }
};

const deleteServicesType = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(404).json({ error: 'Id is required' });

    const query = 'DELETE FROM service_type WHERE id = $1';
    await db.oneOrNone(query, [id]);

    return res.status(200).json({ message: 'Service type deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to delete service type' });
  }
};

module.exports = {
  listServicesType,
  createServicesType,
  updateServicesType,
  deleteServicesType,
};
