import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Orders from "../components/Orders";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <Orders orders={props.orders} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:5000/orders");
  const data = await res.json();
  //   const data = {
  //     payload: [
  //       {
  //         order_status: "created",
  //         _id: "5d4251d484de9a07eec83723",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVXY4M8EIM00",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d4251eb84de9a07eec83724",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVXY4X7F52G0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "cancelled",
  //         _id: "5d42576a48635708f39014f7",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVXYMVF04IG0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d42aef83129d110d6a76ad4",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVY6KW9VZ1K0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d42af6b2bcddd10f619c08e",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "4A28562BSKK",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d42afcd590e601102067a47",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVY6NLYMCCW0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d42b04dd30d30112652ce34",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BVY6P8STNDS0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d47df207a6bf7002a916504",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BW1J3PKOJ5C0",
  //         __v: 0
  //       },
  //       {
  //         order_status: "created",
  //         _id: "5d47dfadea38af0029e967fe",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BW1J5I9YE600",
  //         __v: 0
  //       },
  //       {
  //         order_status: "cancelled",
  //         _id: "5d47e0416c9c52002afcffab",
  //         item_id: "12312312",
  //         unit_price: 100,
  //         quantity: 12,
  //         reference_id: "BW1J7EIF4VK0",
  //         __v: 0
  //       }
  //     ]
  //   };

  return {
    orders: data.payload
  };
};

export default Index;
