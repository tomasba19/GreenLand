import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const OrderTable = ({ ordersData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>User</TableCell>
            {/* Agrega más encabezados de columna según tus necesidades */}
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersData.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.totalPrice}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.userId}</TableCell>
              {/* Agrega más celdas de acuerdo a tus necesidades */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


