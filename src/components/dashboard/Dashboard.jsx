import { Feed } from "../"
import style from "./Dashboard.module.css"
import { SideNav } from "../SideNav"
import { useLocation } from "react-router-dom"

export const Dashboard = () => {
    const location = useLocation();
    // console.log(location)
    return (
        <>
            <div className={`${style["dashboard-container"]} my-4`}>
                <aside className={`${style["sideNav"]}`}>
                    <SideNav />
                </aside>
                <main className={style["user-feed"]}>
                    <Feed />
                </main>
                <aside className={`${style["suggestions"]}`}>
                    suggestions
                </aside>
            </div>
        </>
    )
}