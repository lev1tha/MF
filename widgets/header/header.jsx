import React from "react";
import Link from "next/link";

// style components
import headerStyle from "./header.module.css";

export default function Header() {
  return (
    <div className={headerStyle.container}>
      <div className={headerStyle.left_site_header}>
        <div className={headerStyle.logo_section}>
          <img src="/assets/svg/logo.svg" alt="" />
        </div>
        <div className={headerStyle.navigate_section}>
          <Link href={"/"}>Инвестиций</Link>
          <Link href={"/"}>Франшизы</Link>
          <Link href={"/"}>Бизнес-план</Link>
          <Link href={"/"}>Готовый бизнес</Link>
          <Link href={"/"}>Контактные данные</Link>
        </div>
      </div>
      <div className={headerStyle.right_site_header}>
        <div className="svg-icon"></div>
        <Link className={headerStyle.sign} href={"/"}>
          Войти
        </Link>
      </div>
    </div>
  );
}
