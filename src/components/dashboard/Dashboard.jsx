import { Feed } from "../"
import style from "./Dashboard.module.css"

export const Dashboard = () => {
    return (
        <>
            <div className={`${style["dashboard-container"]} my-4 p-2`}>
                <aside className={`${style["sideNav"]}`}>
                    sideNav
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