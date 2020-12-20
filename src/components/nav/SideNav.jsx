import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
const SideNavItem = (props) => {
    let style = {
        color:"white",
        fontSize: "1.75rem",
    }
    return ( 
        <div style={style}>
            <Link style={style} to={props.href}>
                <div style={{display:"inline", textAlign:"center"}}>
                    <i className={props.iconClass} style={{width:style.fontSize}}></i>
                </div>{' '}
                {props.text}
            </Link>
        </div>
    )
}
const Hr = (props) => {
    return (
        <hr style={{
                width:props.width,
                backgroundColor:props.color,
            }}
        />
    )
}
const MenuButton = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <div style={{
                    color:props.color,
                    cursor:"pointer",
                    }} onClick={props.onClick}>
                    {props.text ? props.text + ' ' : ''}<i className={props.iconClass}></i>
                </div>
            </Navbar.Brand>
        </Navbar>
    );
}
const SideNavItems = (props) => {
    return (
        <div style={{padding:".5rem 1rem", overflow:"auto"}}>
            <SideNavItem href="/" text="首頁" iconClass="fas fa-laptop-house"></SideNavItem>
            <SideNavItem href="/profile" text="個人資料" iconClass="fas fa-user-circle"></SideNavItem>
            <SideNavItem href="/account" text="開始記帳" iconClass="fas fa-book-open"></SideNavItem>
            <SideNavItem href="/ledger" text="選擇帳本" iconClass="fas fa-book"></SideNavItem>
            <SideNavItem href="/report" text="財務圖表" iconClass="fas fa-chart-line"></SideNavItem>                        
            <Hr width="100%" color="white" />

            <SideNavItem href="/subject" text="科目管理" iconClass="fas fa-cog"></SideNavItem>
            <SideNavItem href="/budget" text="預算設定" iconClass="fas fa-cog"></SideNavItem>
            <SideNavItem href="/startdate" text="月起始日" iconClass="fas fa-cog"></SideNavItem>
            <SideNavItem href="/notify" text="通知設定" iconClass="fas fa-cog"></SideNavItem>
            <Hr width="100%" color="white" />
        </div>
    );
}
const SideNav = (props) => {
    return (
        <div className={props.className} >
            <MenuButton color="white" onClick={props.onClick} iconClass="fas fa-times" text="CLOSE MENU"/>
            <SideNavItems />
        </div>
    );
}

export default SideNav;