require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenidos al curso');
});

// 🔴 ESTA ES LA CLAVE: usar 0.0.0.0 como host
app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicación corriendo en el puerto: ${port}`);
});
