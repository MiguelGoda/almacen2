import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
  console.log(result)
  res.json(result)
}

export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);

  if (result.length == 0)
    return res.status(404).json({ message: "Tasks not found" });


  res.json(result[0])
}

export const createTasks = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query("INSERT INTO tasks( title, description) VALUES (?, ?)", [title, description]);
  res.json({
    id: result.insertId,
    title,
    description
  })
}

export const updateTasks = (req, res) => {
  res.send('actualizando tareas')
}

export const deleteTasks = (req, res) => {
  res.send('eliminando tarea')
}

