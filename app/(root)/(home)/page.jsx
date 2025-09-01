"use client";
import React from "react";
import Header from "@/widgets/header/header";
import Footer from "@/widgets/footer/footer";

import Link from "next/link";

// import style module
import homeStyle from "./homeStyle.module.css";

// Components
import { CardMore, CardNavigateMain } from "@/components/card/card";
import { Odibee_Sans } from "next/font/google";

const temporaryArray = [
  {
    id: "Инвестиций",
  },
  {
    id: "Финансы",
  },
  {
    id: "Кредиты",
  },
  {
    id: "Еще",
  },
];

const temporaryArrayMore = [
  {
    id: 1,
    title: "Идея",
    suptitle: "15 Проектов",
    link: "/idea",
    image: "/assets/svg/idea.svg",
  },
  {
    id: 2,
    title: "Идея",
    suptitle: "15 Проектов",
    link: "/idea",
    image: "/assets/svg/blank.svg",
  },
  {
    id: 3,
    title: "Идея",
    suptitle: "15 Проектов",
    link: "/idea",
    image: "/assets/svg/dollar.svg",
  },
  {
    id: 4,
    title: "Идея",
    suptitle: "15 Проектов",
    link: "/idea",
    image: "/assets/svg/graphyc.svg",
  },
];

const temporaryArrayBusinessPlan = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className={homeStyle.container}>
        <section className={homeStyle.mainSection}>
          <div className={homeStyle.title}>
            <h1>
              Начни <span>свой бизнес с</span> нами
            </h1>
          </div>
          <div className={homeStyle.navigate_section}>
            {temporaryArray.map((item) => (
              <CardNavigateMain key={item.id} id={item.id} />
            ))}
          </div>
        </section>
        <section className={homeStyle.secondSection}>
          <div className={homeStyle.suptitle}>
            <h1>Инвестиции и инвестиционные проекты</h1>
          </div>
          <div className={homeStyle.navigate_section}>
            {temporaryArrayMore.map((item) => (
              <CardMore
                key={item.id}
                title={item.title}
                suptitle={item.suptitle}
                imageSrc={item.image}
                link={item.link}
              />
            ))}
          </div>
          <div style={{ marginTop: "40px" }}>
            <Link className={homeStyle.moreCard_button} href={"/catalog"}>
              Все инвестиционные проекты
              <img src="/assets/svg/arrow.svg" alt="arrow for link" />
            </Link>
          </div>
        </section>
        <section className={homeStyle.whatBisness}>
          <div className={homeStyle.bisness_title}>
            <h1>Бизнес</h1>
          </div>
          <div className={homeStyle.section_info}>
            <p>
              Каждый, кто начинает собственный бизнес, сталкивается с множеством
              вопросов. Где найти деньги для старта бизнеса, как составить
              бизнес-план, как выстроить эффективные бизнес-процессы, и,
              главное, как сделать бизнес успешным? Если вам нужны ответы, то вы
              попали в правильное место! Портал MF PRO помогает начинающим
              предпринимателям разобраться во всех аспектах бизнеса в
              Кыргызстане.
            </p>
          </div>
        </section>
        <section className={homeStyle.cardBisness}>
          <div className={homeStyle.box}>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>Что такое бизнес?</h1>
            </div>
            <div>
              <p>
                Бизнес — это любое дело, нацеленное на получение прибыли. Если
                вы вкладываете собственные умения, время и деньги в создание
                товаров или предоставление услуг и рассчитываете заработать на
                этом, вы бизнесмен.
              </p>
            </div>
          </div>
          <div className={homeStyle.box}>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>Виды бизнеса</h1>
            </div>
            <div>
              <p>
                Основных видов бизнеса три: производство, торговля и услуги.
                Иногда отдельно выделяют финансовый бизнес и консалтинг, но
                фактически эти виды входят в определение услуг. В нашем
                материале читайте подробнее о видах бизнеса на живом примере.
              </p>
            </div>
          </div>
          <div className={homeStyle.box}>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>Что такое бизнес?</h1>
            </div>
            <div>
              <p>
                Предпринимательство – это инициативная деятельность,
                осуществляемая на свой риск, целью которой является
                систематическое получение прибыли путём реализации товаров,
                работ, услуг. Но так ли легко открыть свой бизнес? Знаете ли Вы,
                какую роль предприниматель выполняет в экономике? Какими
                навыками должен обладать предприниматель? Об этом и немного
                больше расскажем в этой статье.
              </p>
            </div>
          </div>
        </section>
        <section className={homeStyle.ReadMadeBusiness}>
          <div className={homeStyle.ReadMadeBusinessTitle}>
            <h1>Готовые Бизнесы</h1>
          </div>
          <div>{/* Католог готовых бизнесов */}</div>
          <div>
            <Link className={homeStyle.businessForSell} href={"/"}>
              Весь бизнес на продажу
              <img src="/assets/svg/arrow.svg" alt="arrow for next" />
            </Link>
          </div>
        </section>
        <section className={homeStyle.franchise}>
          <div className={homeStyle.franchise_title}>
            <h1>Франшизы</h1>
          </div>
          <div>
            <Link className={homeStyle.businessForSell} href={"/"}>
              Весь бизнес на продажу
              <img src="/assets/svg/arrow.svg" alt="arrow for next" />
            </Link>
          </div>
        </section>
        <section className={homeStyle.businessPlan}>
          <div className={homeStyle.businessPlanTitle}>
            <h1>Бизнес-Планы</h1>
          </div>
          <div className={homeStyle.gridBox}>
            {temporaryArrayBusinessPlan.map((item) => (
              <div className="box">{item.id}</div>
            ))}
          </div>
        </section>
        <section className={homeStyle.business}>
          <div className={homeStyle.businessTitle}>
            <h1>Бизнес</h1>
          </div>
          <div className={homeStyle.site_business_container}>
            <div className={homeStyle.left_site_business}>
              <div>
                <img src="/assets/img/coin.png" alt="" />
              </div>
              <div>
                <p>
                  Каждый, кто начинает собственный бизнес, сталкивается с
                  множеством вопросов. Где найти деньги для старта бизнеса, как
                  составить бизнес-план, как выстроить эффективные
                  бизнес-процессы, и, главное, как сделать бизнес успешным? Если
                  вам нужны ответы, то вы попали в правильное место! Портал MF
                  Pro помогает начинающим предпринимателям разобраться во всех
                  аспектах бизнеса в Кыргызстане. Мы создали самую актуальную
                  библиотеку о предпринимательстве в русскоязычном интернете. В
                  каждой статье вы найдете мнение ведущих экспертов в своих
                  нишах: только реальный опыт и живые примеры. Бизнесмены
                  делятся опытом на портале MF Pro!
                </p>
              </div>
            </div>
            <div className={homeStyle.right_site_business}>
              <div className={homeStyle.card_box}>
                <div className="img_card">
                  <img src="/assets/img/money.png" alt="money" />
                </div>
                <div className={homeStyle.cardTitle}>
                  <h1>Что такое бизнес?</h1>
                </div>
                <div className={homeStyle.cardText}>
                  <p>
                    Бизнес — это любое дело, нацеленное на получение прибыли.
                    Если вы вкладываете собственные умения, время и деньги в
                    создание товаров или предоставление услуг и рассчитываете
                    заработать на этом, вы бизнесмен.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className={homeStyle.card_box}>
                <div className="img_card">
                  <img src="/assets/img/treasure.png" alt="money" />
                </div>
                <div className={homeStyle.cardTitle}>
                  <h1>Виды бизнеса</h1>
                </div>
                <div className={homeStyle.cardText}>
                  <p>
                    Основных видов бизнеса три: производство, торговля и услуги.
                    Иногда отдельно выделяют финансовый бизнес и консалтинг, но
                    фактически эти виды входят в определение услуг. В нашем
                    материале читайте подробнее о видах бизнеса на живом
                    примере.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className={homeStyle.card_box}>
                <div className="img_card">
                  <img src="/assets/img/sack.png" alt="money" />
                </div>
                <div className={homeStyle.cardTitle}>
                  <h1>Предпринимательство</h1>
                </div>
                <div className={homeStyle.cardText}>
                  <p>
                    Предпринимательство – это инициативная деятельность,
                    осуществляемая на свой риск, целью которой является
                    систематическое получение прибыли путём реализации товаров,
                    работ, услуг. Но так ли легко открыть свой бизнес? Знаете ли
                    Вы, какую роль предприниматель выполняет в экономике? Какими
                    навыками должен обладать предприниматель? Об этом и немного
                    больше расскажем в этой статье.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className={homeStyle.card_box}>
                <div className="img_card">
                  <img src="/assets/img/notebook.png" alt="money" />
                </div>
                <div className={homeStyle.cardTitle}>
                  <h1>Системы налогообложения</h1>
                </div>
                <div className={homeStyle.cardText}>
                  <p>
                    В России 6 систем налогообложения бизнеса: УСН, АУСН, ОСНО,
                    ПСН, НПД и ЕСХН. Рассказываем простыми словами, что
                    скрывается за этими аббревиатурами, кто может применять эти
                    режимы и какой налог придётся платить на каждом из них. В
                    статье вы найдёте пошаговую инструкцию, как выбрать
                    налоговый режим, и ответ на вопрос, какие системы
                    налогообложения можно комбинировать.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
