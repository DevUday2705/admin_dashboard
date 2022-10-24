export const userCols = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="imge" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "Uday Kulkarni",
    img: "https://api.lorem.space/image/shoes?w=640&h=480&r=8248",
    status: "active",
    email: "uday@gmail.com",
    age: 32,
  },
  {
    id: 2,
    img: "https://api.lorem.space/image?w=640&h=480&r=9546",
    username: "Pratik Kulkarni",
    status: "active",
    email: "pratik@gmail.com",
    age: 88,
  },
  {
    id: 3,
    img: "https://api.lorem.space/image/watch?w=640&h=480&r=7528",
    username: "Sandesh Kulkarni",
    status: "active",
    email: "sandesh@gmail.com",
    age: 84,
  },
  {
    id: 4,
    img: "https://api.lorem.space/image/shoes?w=640&h=480&r=3484",
    username: "Sandhya Kulkarni",
    status: "active",
    email: "sandhya@gmail.com",
    age: 48,
  },
  {
    id: 5,
    img: "https://api.lorem.space/image?w=640&h=480&r=5",
    username: "Milind Kulkarni",
    status: "inActive",
    email: "Milind@gmail.com",
    age: 65,
  },
  {
    id: 6,
    img: "https://api.lorem.space/image/furniture?w=640&h=480&r=9691",
    username: "Nihira Kulkarni",
    status: "active",
    email: "Nihira@gmail.com",
    age: 32,
  },
  {
    id: 7,
    img: "https://api.lorem.space/image/shoes?w=640&h=480&r=6713",
    username: "Nirmala Kulkarni",
    status: "inActive",
    email: "Nirmala@gmail.com",
    age: 52,
  },
  {
    id: 8,
    img: "https://api.lorem.space/image/shoes?w=640&h=480&r=9652",
    username: "Pranjali Kulkarni",
    status: "active",
    email: "Pranjali@gmail.com",
    age: 54,
  },
  {
    id: 9,
    img: "https://api.lorem.space/image/fashion?w=640&h=480&r=1186",
    username: "Savita Kulkarni",
    status: "active",
    email: "Savita@gmail.com",
    age: 84,
  },
  {
    id: 10,
    img: "https://api.lorem.space/image/furniture?w=640&h=480&r=5388",
    username: "Nitin Kulkarni",
    status: "inActive",
    email: "pratik@gmail.com",
    age: 43,
  },
];
