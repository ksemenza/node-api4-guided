const express = require('express');
const server = require('./api/server.js');

const port = proces.env.PORT || 7000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
