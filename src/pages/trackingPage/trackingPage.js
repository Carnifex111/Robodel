import { Link } from "react-router-dom";

const TrackingPage = () => {
    return(
        <>
        Это страница с трекингом (картой)
        <br/>
        <Link to='/orderPage'>а это со всеми заказами</Link>
        
        </>
    )
}

export default TrackingPage;