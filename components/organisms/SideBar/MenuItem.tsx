import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuitemProps {
  title: string;
  icon:
    | "menu-overview"
    | "menu-transactions"
    | "menu-messages"
    | "menu-cards"
    | "menu-rewards"
    | "menu-settings"
    | "menu-logout";
  active?: boolean;
  href?: string;
}

export default function MenuItem(props: Partial<MenuitemProps>) {
  const { title, icon, active, href } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem}>
      <Image
        src={`/icon/${icon}.svg`}
        className="me-3"
        width={25}
        height={25}
        alt="Icon"
      />
      <p className="item-title m-0">
        <Link href={href!} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
