const { v4 } = require('uuid');
const { db } = require('../db/db');

const listServices = async (req, res) => {
  try {
    const quety2 = `SELECT s.id, s.user_id, s.description, s.title, st.service_type_name, st.id AS service_type_id
    FROM public.service AS s
    LEFT JOIN public.service_type AS st ON s.service_type_id = st.id;
    `;
    const data = await db.any(quety2);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to get services' });
  }
};

const createService = async (req, res) => {
  try {
    const id = v4();
    const {
      description, title,
    } = req.body;

    const { id: userId } = req.user;

    const query = 'INSERT INTO service (id, description, title, user_id) VALUES ($1, $2, $3, $4)';
    const data = await db.oneOrNone(query, [id, description, title, userId]);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to create service' });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, title, type } = req.body;

    if (!id) return res.status(404).json({ error: 'Id is required' });

    const query = 'UPDATE service SET description = $1, title = $2, service_type_id = $3 WHERE id = $4';
    await db.oneOrNone(query, [description, title, type, id]);

    return res.status(200).json({ message: 'Service updated' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to update the service' });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(404).json({ error: 'Id is required' });

    const query = 'DELETE FROM service WHERE id = $1';
    await db.one(query, [id]);

    return res.status(200).json({ message: 'Service deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to delete Service' });
  }
};

module.exports = {
  listServices,
  createService,
  updateService,
  deleteService,
};
