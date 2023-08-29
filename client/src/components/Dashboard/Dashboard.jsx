import style from './Dashboard.module.css'
import { MainDash } from './MainDash/MainDash';
import { RightSide } from './RightSide/RightSide';
import { Sidebar } from './Sidebar/Sidebar';



export const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <div className={style.DashboardGlass}>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}
