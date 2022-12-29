import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="menu-overview" active/>
          <MenuItem title="Transactions" icon="menu-transactions"/>
          <MenuItem title="Messages" icon="menu-messages"/>
          <MenuItem title="Cards" icon="menu-cards"/>
          <MenuItem title="Rewards" icon="menu-rewards"/>
          <MenuItem title="Settings" icon="menu-settings"/>
          <MenuItem title="Logout" icon="menu-logout"/>
        </div>
        <Footer />
      </div>
    </section>
  );
}
