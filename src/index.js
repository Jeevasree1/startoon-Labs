const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const sequelize = new Sequelize('mysql://username:password@localhost:3306/patientDB');

// Define a Patient model
const Patient = sequelize.define('Patient', {
  name: { type: DataTypes.STRING, allowNull: false },
  patientId: { type: DataTypes.STRING, allowNull: false },
  phoneNo: { type: DataTypes.STRING, allowNull: false },
  mailId: { type: DataTypes.STRING, allowNull: false },
  affectedSide: { type: DataTypes.STRING, allowNull: false },
  condition: { type: DataTypes.STRING, allowNull: false },
  speciality: { type: DataTypes.STRING, allowNull: false },
  medicalHistory: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false });

// Sync the model
sequelize.sync();

// Routes
app.get('/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/patients', async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
