class Orders extends React.Component {
  state = {
    status: "created"
  };

  renderOrders = () => {
    let orders = this.props.orders;

    return orders.map((order, key) => {
      return (
        <li className="list-group-item" key={key}>
          <span class="badge badge-primary">{order.order_status}</span>
          <span />
          <strong>#{order.reference_id}</strong>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <select
          onChange={e => this.setState({ status: e.target.value })}
          className="form-control"
        >
          <option value="cancelled">Cancelled</option>
          <option value="created">Created</option>
        </select>
        <br />
        <ul className="list-group">{this.renderOrders()}</ul>
      </div>
    );
  }
}

export default Orders;
