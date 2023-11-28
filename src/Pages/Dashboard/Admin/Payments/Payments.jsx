import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Search from "../../Sidebar/Search/Search";
import DataTable from "react-data-table-component";
import { useQuery } from "@tanstack/react-query";


const Payments = () => {

    // user payments history data
    const axiosSecure = useAxiosSecure()


    const { data: payments = []} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/v1/user-payment-history")
            return res.data
        }
    })
    console.log(payments);


    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Price",
            selector: (row) => `$${row.price}`
        },
        {
            name: "Transtion Id",
            selector: (row) => row.transtionId
        },
        {
            name: "Purchase Date",
            selector: (row) => row.date
        },
            ]


    return (
        <div>
            <Search />

            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={payments}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>

        </div>
    );
};

export default Payments;