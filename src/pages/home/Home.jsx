import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widgets/Widget";
import "./home.scss";
import Featured from "../../Components/Featured/Featured";
import Charts from "../../Components/Charts/Charts";
import Tablee from "../../Components/Table/Table";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="User" />
          <Widget type="Order" />
          <Widget type="Earnings" />
          <Widget type="Balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts aspect={2 / 1} title="Last 6 Months Revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tablee />
        </div>
      </div>
    </div>
  );
};

export default Home;
