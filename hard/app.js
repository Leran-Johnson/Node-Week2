const express = require('express');
const app = express();
const employees = require('./employees.json');

// Endpoint to get information for all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// Endpoint to get information for a specific employee by employeeID
app.get('/employees/:employeeID', (req, res) => {
    const employeeID = parseInt(req.params.employeeID);

    // Find the employee with the given employeeID
    const employee = employees.find(emp => emp.employeeID === employeeID);

    if (employee) {
        // Employee found, send their information
        res.json(employee);
    } else {
        // Employee not found, send an error response
        res.status(404).json({ error: 'Employee not found' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
