import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tablee = () => {
  const rows = [
    {
      id: 1,
      product: "Shoes",
      img: "https://api.lorem.space/image/shoes?w=640&h=480&r=8248",
      customer: "Uday Kulkarni",
      date: "1st May 2022",
      amount: 500,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Generic Frozen Table",
      img: "https://api.lorem.space/image?w=640&h=480&r=9546",
      customer: "Pratik Kulkarni",
      date: "2st May 2022",
      amount: 200,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 3,
      product: "Licensed Concrete Soap",
      img: "https://api.lorem.space/image/watch?w=640&h=480&r=7528",
      customer: "Sandesh Kulkarni",
      date: "3rd May 2022",
      amount: 238,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 4,
      product: "Handmade Granite Pants",
      img: "https://api.lorem.space/image/shoes?w=640&h=480&r=3484",
      customer: "Sandhya Kulkarni",
      date: "5st May 2022",
      amount: 600,
      method: "Online",
      status: "Pending",
    },
    {
      id: 5,
      product: "Practical Rubber Gloves",
      img: "https://api.lorem.space/image?w=640&h=480&r=5",
      customer: "Milind Kulkarni",
      date: "7th May 2022",
      amount: 800,
      method: "Card",
      status: "Approved",
    },
    {
      id: 6,
      product: "Incredible Cotton Chips",
      img: "https://api.lorem.space/image/furniture?w=640&h=480&r=9691",
      customer: "Nihira Kulkarni",
      date: "1st Nov 2022",
      amount: 500,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 7,
      product: "Practical Frozen Bacon",
      img: "https://api.lorem.space/image/shoes?w=640&h=480&r=6713",
      customer: "Nirmala Kulkarni",
      date: "1st Dec 2022",
      amount: 240,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 8,
      product: "Licensed Granite Shoes",
      img: "https://api.lorem.space/image/shoes?w=640&h=480&r=9652",
      customer: "Pranjali Kulkarni",
      date: "1st Nov 2022",
      amount: 570,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 9,
      product: "Awesome Metal Gloves",
      img: "https://api.lorem.space/image/fashion?w=640&h=480&r=1186",
      customer: "Savita Kulkarni",
      date: "1st Aug 2022",
      amount: 570,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 10,
      product: "Small Granite Pizza",
      img: "https://api.lorem.space/image/furniture?w=640&h=480&r=5388",
      customer: "Nitin Kulkarni",
      date: "1st June 2022",
      amount: 240,
      method: "Cash On Delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                <div className="cellWrapper">
                  <img className="image" src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tablee;
