import React, { useEffect, useState } from 'react'
import style from './CustomerSection.module.css'
import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


// export const CustomerSection = () => {
//   return (
//     <div className={style.CustomerSection}>
//        <h2>aca va la tabla de usuarios</h2>
//     </div>
//   )
// }


// function createData(name, trackingId, date, status) {
//   return { name, trackingId, date, status };
// }

// const rows = [
//   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Active"),
//   createData("Big Baza Bang ", 18908424, "2 March 2022", "Disable"),
//   createData("Mouth Freshner", 18908424, "2 March 2022", "Active"),
//   createData("Cupcake", 18908421, "2 March 2022", "Disable"),
// ];


const makeStyle = (status) => {
  // console.log(status);
  if (String(status) === 'true') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
      padding: '5px 30px 5px 30px',
    }
  }
  else if (String(status) === 'false') {
    return {
      background: '#ffadad8f',
      color: 'red',
      padding: '5px 30px 5px 30px',
    }
  }
  else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
}

export const CustomerSection = () => {
  const [rows, setRows] = useState([])
  const [statusUser, setstatusUSer] = useState(false)

  // const dispatch = useDispatch()
  // const rows = allUsersState
  if (rows.length < 1) {
    axios.get(`${VITE_SERVER_URL}/products`)
      .then((resp) => {
        setRows(resp.data)
      })
      .catch((error) => {
        alert("error: " + error.response.data.error)
      });
  }
  // console.log(rows);
  const handleStatus = (event) => {
    console.log(event.target.value);
    console.log(statusUser);
    state = event.target.value
    if (state === 'true') {
      state = 'false'
      alert('active')
    }

  }
  useEffect(() => {
    setstatusUSer()
  }, [])

  return (
    <div className={style.Table}>

      <TableContainer
        // component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={style.head}>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Origin</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white", backgroundColor: "transparent" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.rating}</TableCell>
                <TableCell align="left">
                  <button className={style.buttonstatus}
                    style={makeStyle(row.active)}
                    value={row.active}
                    onClick={handleStatus}
                  >
                    {String(row.active)}
                  </button>
                </TableCell>
                <TableCell align="left" className={style.Details}>Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}