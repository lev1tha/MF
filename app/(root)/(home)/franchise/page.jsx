import React from "react";
import franchiseStyle from "./franchise.module.css";
import Header from "@/widgets/header/header";

export default function index() {
  return (
    <div>
      <Header />
      <>
        <div className={franchiseStyle.franchise_name}>
          <div className={franchiseStyle.franchise_description}>
            <div className={franchiseStyle.franchise_logo}>
              <p>Logo</p>
            </div>
            <div className={franchiseStyle.franchise_info}>
              <h1>Франшиза Эльдияра</h1>
            </div>
          </div>
          <div className={franchiseStyle.contact}>
            <div className={franchiseStyle.data_interest}>
              <div className={franchiseStyle.people}>
                <h4>18 человек</h4>
              </div>
              <div className={franchiseStyle.suptitle}>
                <p>Сегодня интересовались</p>
              </div>
            </div>
            <div className={franchiseStyle.contact_phone}>
              <button>Связаться</button>
            </div>
          </div>
        </div>
        <div className={franchiseStyle.about_franchise}>
          <div className={franchiseStyle.detail_title}>
            <h1>Стоимость франшизы</h1>
          </div>
          <div className={franchiseStyle.detail}>
            <div className={franchiseStyle.investion}>
              <div className={franchiseStyle.investion_title}>
                <h3></h3>
              </div>
              <div className={franchiseStyle.price}></div>
            </div>
            <div className={franchiseStyle.royalty}>
              <div className={franchiseStyle.royalty_title}></div>
              <div className={franchiseStyle.procent}></div>
            </div>
            <div className={franchiseStyle.forecast}>
              <div className={franchiseStyle.forecast_title}></div>
              <div className={franchiseStyle.more}></div>
            </div>
            <div className={franchiseStyle.net_profit}>
              <div className={franchiseStyle.net_profit_title}></div>
              <div className={franchiseStyle.more}></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
