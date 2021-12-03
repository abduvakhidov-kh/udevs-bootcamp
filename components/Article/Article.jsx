import Info from "../Info/Info";
import styles from "./Article.module.css";

export default function Article() {
  return (
    <div className={styles.article}>
      <img
        src="/assets/img/article.png"
        alt=""
        className={styles.article__img}
      />
      <p className={styles.article__photoBy}>Фото: Dilorom Alieva </p>
      <div className={styles.article__info}>
        <Info />
      </div>
      <h2 className={styles.article__header}>
        Разместите свои инвестиционные проекты в молодежных индустриальных
        зонах!
      </h2>

      <p className={styles.article__text}>
        Постановлением Кабинета Министров № 294 утверждены Положение о
        Молодежной индустриально-предпринимательской зоне и Фонде поддержки
        молодых предпринимателей. Молодые предприниматели, желающие разместить
        свои инвестиционные проекты в молодежных индустриальных зонах, должны
        предоставить необходимые документы в районные (городские) управления
        инвестиций и внешней торговли. Содействие реализации результатов
        молодежных предпринимательских инициатив, стартап-проектов и прикладных
        исследований, комплексная поддержка проектов молодых предпринимателей в
        сфере промышленности и услуг, а также в Узбекистане в 2017-2021 гг. Для
        обеспечения реализации задач, изложенных в Государственной программе
        реализации Стратегии действий по пяти приоритетным направлениям развития
        республики в «Год поддержки молодежи и здоровья населения»: 1.
        Министерство инвестиций и внешней торговли, Министерство экономического
        развития и сокращения бедности, Министерство финансов,
        Торгово-промышленная палата и Агентство по делам молодежи создают
        молодежные промышленные и деловые зоны в областях, перечисленных в
        Приложении 1. (далее - Утвердить предложение о создании молодежных
        индустриальных зон). В частности, в Нукусе и Берунийском районе созданы
        специальные штабы по внедрению "молодежной На организованном по этому
        случаю мероприятии начальник Каракалпакского управления Агентства по
        делам молодежи Республики Узбекистан, сенатор Абатбай Данияров,
        начальник управления Центрального аппарата Агентства по делам молодежи,
        член Республиканской рабочей группы Фазлиддин Бахромов предоставили
        членам штаба подробную информацию об их целях и задачах. В этот же день
        члены рабочей группы провели подворный обход в махалле “Кутли конис” в
        Нукусе и составили специальный опросник, в котором отразили проблемы
        каждой женщины и каждого молодого В частности, житель этой махалли
        Шарапат Пердебоев, окончивший профессиональный колледж, в настоящее
        время является безработным. Он желает заниматься предпринимательством, а
        точнее выращивать в теплице бахчевые культуры. Шарапат заполнил анкету
        для включения его в "молодежную тетрадь". Подобное изучение проведено и
        в махалле “Сарбиноз” в Нукусе. В беседе с членами рабочей группы
        жительница махалли Алия Танжарбоева сообщила, что является временно
        безработной, у нее есть четырехлетний ребенок с инвалидностью, она
        желает заниматься надомным трудом. Алия сказала, что хорошо владеет
        швейным делом. Поэтому ей нужна швейная машина. Алия тоже полностью
        заполнила – 30 членов штаба будут формировать электронные варианты
        заполненных анкет, - говорит Парахат Казакбаев. - Я сам лично тоже
        ежедневно будут вносить в электронную базу примерно 500 анкет. В
        процессе формирования "молодежной тетради" мы видим, что многие молодые
        люди и девушки свободно излагают свои проблемы.
      </p>
    </div>
  );
}