import OrderManagementTable from "@/components/modules/orders/OrderManagementTable";
import { getAllOrders } from "@/services/OrderService";


const page = async() => {

    const{data:orders}=await getAllOrders()


    return (
        <div>
            <OrderManagementTable orders={orders}/>
        </div>
    );
};

export default page;