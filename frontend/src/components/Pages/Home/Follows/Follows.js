
import { NavLink } from "react-router-dom";

import "./Follows.css"

function Follows() {
    return(
        <div className="CenterFlex">
            <div className="Follows">
                <h2>Theo Dõi Cửa Hàng Qua Các Mạng Xã Hội</h2>
                    <div className="Follows_Items">
                        <NavLink><img src="facebook.svg"></img></NavLink>
                        <NavLink><img src="twisterr.svg"></img></NavLink>
                        <NavLink><img src="instagram.svg"></img></NavLink>
                        <NavLink><img src="ytb.svg"></img></NavLink>
                    </div>
            </div>
        </div>
    )
}

export default Follows;