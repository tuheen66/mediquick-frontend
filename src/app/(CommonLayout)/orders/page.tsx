import CustomerOrders from "@/components/customerOrders/CustomerOrders";
import { getCustomerOrders } from "@/services/OrderService";


const OrdersPage =() => {

    
    return (
        <div className="mt-12">
            <CustomerOrders/>
        </div>
    );
};

export default OrdersPage;