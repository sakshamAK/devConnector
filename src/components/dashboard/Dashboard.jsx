import style from "./Dashboard.module.css"
export const Dashboard = () => {

    return (
        <div className={`${style["dashboard-container"]} my-4 p-2`}>
            <aside className={`${style["sideNav"]}`}>
                sideNav
            </aside>
            <main classname={style["user-feed"]}>
                hello world
            </main>
            <aside className={`${style["suggestions"]}`}>
                suggestions
            </aside>
        </div>
    )
}