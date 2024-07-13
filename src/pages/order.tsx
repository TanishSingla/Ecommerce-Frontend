import { ReactElement, useState } from "react";
import Table from "../components/adminComponents/Table"
import { Column } from "react-table";
import { Link } from "react-router-dom";


type DataType = {

    _id: string,
    amount: number,
    quantity: number,
    discount: number,
    status: ReactElement,
    action: ReactElement,
};

const column: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "_id"
    },
    {
        Header: "Quantity",
        accessor: "quantity"
    },
    {
        Header: "Discount",
        accessor: "discount"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Status",
        accessor: "status"
    },
    {
        Header: "Action",
        accessor: "action"
    },

]

const Order = () => {

    const [rows] = useState<DataType[]>([
        {
            _id: "asdsa",
            amount: 1213,
            quantity: 12132,
            discount: 123,
            status: <span className="red">Processing</span>,
            action: <Link to={`/order/asdsa`}>View</Link>,
        },
    ]);
    const OrderTable = Table<DataType>(column, rows, "dashboard-product-box", "", rows.length > 6)();
    return (
        <div className="container">
            <h1>My Orders</h1>
            {
                OrderTable
            }
        </div>
    )
}

export default Order
