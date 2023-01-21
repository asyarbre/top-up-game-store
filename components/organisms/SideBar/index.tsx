import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  }

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="menu-transactions"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="menu-messages" href="/member" />
          <MenuItem title="Cards" icon="menu-cards" href="/member" />
          <MenuItem title="Rewards" icon="menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="menu-settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
