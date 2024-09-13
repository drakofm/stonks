// TODO: адаптивный дизайн!
// TODO: тёмная/светлая темы
// TODO: переключение языка рус/eng
const productCardsContainer = document.getElementById(
  "container-product-cards"
);
const header = document.getElementById("header");
const companies = [
  // TODO: для удобства кода стоит отрефакторить его таким образом, чтобы это был не массив объектов, а объект с ключами-idшниками, значения которых уже будут этими самыми объектами - предположительно, так будет сильно проще обращаться к объекту, чем имеющееся.
  {
    id: 0,
    name: "Heffalump M&E",
    ticker: "HFFL",
    initPrice: 47.7,
    info: " Mechanical engineering company producing vehicles for land, water and air, as well as machinery for factories.<br><br>Recently, it has been actively developing unmanned vehicles for everyday use.",
    infoRus:
      "Машиностроительная компания, выпускающая транспортные средства для земли, воды и воздуха, а также машинное оборудование для заводов.<br><br>В последнее время ведёт активную разработку беспилотных видов транспорта для повседневного пользования.",
    industry: ["machinery", "pharmacy"],
  },
  {
    id: 1,
    name: "Altair Pharmacy",
    ticker: "ATFA",
    initPrice: 10.0,
    info: "Production and sale of medicines, a world leader in the development of medicines for any ailment.<br><br>The company became especially famous after showing the world a highly effective drug against a number of cancer diseases.",
    infoRus:
      "Производство и продажа медикаментов, мировой лидер в разработке лекарств от любых недугов.<br><br>Компания стала особенно известна после представления миру высокоэффективного средства против ряда онкологических заболеваний.",
    industry: ["chemicals", "pharmacy"],
  },
  {
    id: 2,
    name: "Catsburg Broadcasting Inc.",
    ticker: "CTSB",
    initPrice: 77.0,
    info: "The news company, which provides unbiased and honest coverage of all world events.<br><br>Has many local branches in each country and a huge staff of three thousand employees.",
    infoRus:
      "Новостная компания, непредвзято и честно освещающая все мировые события.<br><br>Имеет множество локальных филиалов в каждой стране и огромный штат в три тысячи сотрудников.",
    industry: ["social"],
  },
  {
    id: 3,
    name: "Lava Education",
    ticker: "LVED",
    initPrice: 50.0,
    info: "Leader in online education.<br><br>More than 3,000 courses from a wide variety of fields are available on the platform, certificates of completion of the company’s courses are highly rated around the world.",
    infoRus:
      "Лидер в области онлайн-образования.<br><br>На платформе доступно более 3000 курсов из самых различных областей, сертификаты об окончании курсов компании высоко котируются по всему миру.",
    industry: ["education"],
  },
  {
    id: 4,
    name: "Manchineel Chemicals Ltd.",
    ticker: "MCCH",
    initPrice: 5.5,
    info: "Production of a wide range of chemical raw materials - from high-purity reagents for chemical laboratories to simple compounds for the food industry and household purposes.",
    infoRus:
      "Производство химического сырья широкого спектра - от реактивов высокой чистоты для химических лабораторий до простых соединений для пищевой промышленности и бытовых целей.",
    industry: ["chemicals", "food", "pharmacy"],
  },
  {
    id: 5,
    name: "Barsik Global",
    ticker: "BARS",
    initPrice: 36.0,
    info: "Manufacturer of animal feed (and not only), known throughout the world.<br><br>Perfectly optimized production of quality products at affordable prices.",
    infoRus:
      "Производитель кормов для животных (и не только), известный по всему миру.<br><br>Идеально оптимизированное производство качественного продукта по доступным ценам.",
    industry: ["food", "agriculture"],
  },
  {
    id: 6,
    name: "Pinegrove Aroma",
    ticker: "PNGA",
    initPrice: 60.0,
    info: "The standards of exquisite aromas, known throughout the world, are the work of the company’s craftsmen.<br><br>Trendsetters in the world of perfumery, multiple winner of FiFi Awards.",
    infoRus:
      "Эталоны изысканных ароматов, известные всему миру - дело рук мастеров этой компании.<br><br>Законодатели моды в мире парфюмерии, многократный победитель FiFi Awards.",
    industry: ["chemicals"],
  },
  {
    id: 7,
    name: "Deus ex machina LLC",
    ticker: "DMCH",
    initPrice: 5.5,
    info: "A notorious law firm that deals with legal matters of any complexity on a turnkey basis.<br><br>The average percentage of successfully completed cases under the supervision of company specialists is 94%.",
    infoRus:
      "Скандально известная юридическая компания, занимающаяся решением юридических задач любой сложности «под ключ».<br><br>Средний процент успешно завершённых дел под кураторством специалистов компании - 94%.",
    industry: ["social"],
  },
  {
    id: 8,
    name: "Handvoll GmbH",
    ticker: "HDVL",
    initPrice: 14.0,
    info: "A company whose products are consumed every day by almost everyone.<br><br>Engaged in mass production of food products, as well as agricultural raw materials and fertilizers.",
    infoRus:
      "Компания, продукцию которой каждый день употребляют в пищу практически все.<br><br>Занимается массовым производством пищевой продукции, а также сельскохозяйственного сырья и удобрений. ",
    industry: ["food", "agriculture"],
  },
  {
    id: 9,
    name: "Lightvision Technologies",
    ticker: "LVST",
    initPrice: 64.5,
    info: "Developer of software and advanced technological solutions in the field of circuitry.<br><br>The vast majority of electronic devices in the world work and exist in the form we are familiar with thanks to this company.",
    infoRus:
      "Разработчик программного обеспечения и передовых технологических решений в области схемотехники.<br><br>Подавляющее большинство электронных устройств в мире работает и существует в привычном нам виде благодаря этой компании. ",
    industry: ["social", "tech", "machinery"],
  },
  // {
  //   id: 10,
  //   name: 'Walrus International',
  //   ticker: 'WLRS',
  //   initPrice: 1.00,
  // },
  // {
  //   id: 11,
  //   name: 'Parallax Space Corporation',
  //   ticker: 'PXSP',
  //   initPrice: 10.50,
  // },
];

/*under development*/
const events = [
  /* Template:
      { 
        text: 'string'
        types: increase, decrease
        subtypes: smooth, sharp, instant
        [industryInfluence : chemical, pharmacy, social, tech, food, agriculture, education, machinery]
      },
     */
  {
    text: 'A new video review of "_company_" company products has been released from a famous blogger, the review is very positive',
    type: "increase",
    subtype: "sharp",
  },
  {
    text: 'A new video review of "_company_" company products has been released from a famous blogger, the review is not so good',
    type: "decrease",
    subtype: "sharp",
  },
];

companies.forEach(
  ({ id, name, ticker, initPrice, info, infoRus, industry }) => {
    productCardsContainer.innerHTML += `
  <article class="product-card" id="product-${id}">
    <span class="product-card__info-icon" id="info-icon-${id}">i</span>
    <p class="product-card__ticker" id="ticker-${id}">${ticker}</p>
    <h2 class="product-card__name">${name}</h2>
    <p class="product-card__price" id="price-${id}">$${initPrice.toFixed(2)}</p>
    <button class="product-card__button product-card__button-sell" id="button-sell-${id}">Sell</button>
    <button class="product-card__button product-card__button-buy" id="button-buy-${id}">Buy</button>
  </article>
  `;
  }
);
// TODO: было бы классно сделать графики, но при поверхностном изучении проблемы я вижу, что это задача на порядок сложнее сделанного, и, скорее всего, разумно будет воспользоваться готовой библиотекой, чем писать на голом JS, а также разумно будет вернуться к этому, когда прошарюсь в этой теме, чтобы не тратить бесконечно много времени
document.getElementById("product-4").insertAdjacentHTML(
  "afterend",
  `
    <article id="control-panel">
      <section id="control-panel__shares-set-bar"></section>
      <section id="control-panel__balance-section">
        <section id="control-panel__balance-section__outcome"></section>
        <div>
          <h1 id="control-panel__balance-section__balance"></h1>
          <p id="control-panel__balance-section__current-portfolio-price"></p>
        </div>
        <section id="control-panel__balance-section__income"></section>
      </section>
      <section id="control-panel__log"></section>
    </article>
    `
);
const controlPanelLog = document.getElementById("control-panel__log");
const controlPanelSharesSetBar = document.getElementById(
  "control-panel__shares-set-bar"
);
const controlPanelBalance = document.getElementById(
  "control-panel__balance-section__balance"
);
const controlPanelCurrentPortfolioPrice = document.getElementById(
  "control-panel__balance-section__current-portfolio-price"
);
const controlPanelOutcome = document.getElementById(
  "control-panel__balance-section__outcome"
);
const controlPanelIncome = document.getElementById(
  "control-panel__balance-section__income"
);

companies.forEach((item) => {
  controlPanelSharesSetBar.innerHTML += `
    <h3 class="control-panel__shares-set-bar-h3" id="control-panel__shares-set-bar-${item.id}-h3">${item.ticker}: <span id="control-panel__shares-set-bar-${item.id}-span">0</span></h3>
  `;
});

class InvestmentPortfolio {
  constructor() {
    this.items = {};
    this.balance = 1000.0;
    this.marketPrice = 0;
  }

  buyItem(id, companies) {
    const item = companies.find((item) => item.id === id);
    if (!this.items[item.name])
      this.items[item.name] = { sharesCount: 0, id: id };
    const itemObj = this.items[item.name];
    itemObj.sharesCount += 1;
    this.balance -= Number(
      document.getElementById(`price-${id}`).textContent.replace("$", "")
    );

    document.getElementById(
      `control-panel__shares-set-bar-${id}-span`
    ).textContent = itemObj.sharesCount;
    const timestamp = Date.now();
    controlPanelLog.insertAdjacentHTML(
      "afterbegin",
      `<span id="temp-log-${timestamp}" style="color: darkred;">Bought "${item.name}" bond</span>`
    );
    controlPanelOutcome.insertAdjacentHTML(
      "afterbegin",
      `<span id="temp-outcome-${timestamp}" style="color: red;">-$${Number(
        document.getElementById(`price-${id}`).textContent.replace("$", "")
      )}</span>`
    );

    elementSmoothHide(document.getElementById(`temp-log-${timestamp}`));
    elementSmoothHide(document.getElementById(`temp-outcome-${timestamp}`));
  }

  sellItem(id, companies) {
    const item = companies.find((item) => item.id === id);
    if (!this.items[item.name] || this.items[item.name].sharesCount < 1) {
      const timestamp = Date.now();
      controlPanelLog.insertAdjacentHTML(
        "afterbegin",
        `<span id="temp-nothing-to-sell-${timestamp}" style="color: darkblue;">Nothing to sell</span>`
      );
      elementSmoothHide(
        document.getElementById(`temp-nothing-to-sell-${timestamp}`)
      );
      return;
    }
    const itemObj = this.items[item.name];
    itemObj.sharesCount -= 1;
    this.balance += Number(
      document.getElementById(`price-${id}`).textContent.replace("$", "")
    );

    document.getElementById(
      `control-panel__shares-set-bar-${id}-span`
    ).textContent = itemObj.sharesCount;
    const timestamp = Date.now();
    controlPanelLog.insertAdjacentHTML(
      "afterbegin",
      `<span id="temp-log-${timestamp}" style="color: darkgreen;">Sold "${item.name}" bond</span>`
    );
    controlPanelIncome.insertAdjacentHTML(
      "afterbegin",
      `<span id="temp-income-${timestamp}" style="color: green;">+$${Number(
        document.getElementById(`price-${id}`).textContent.replace("$", "")
      )}</span>`
    );

    elementSmoothHide(document.getElementById(`temp-log-${timestamp}`));
    elementSmoothHide(document.getElementById(`temp-income-${timestamp}`));
  }

  calculateMarketPrice() {
    // это было актуально, когда this.items были Map(), но теперь это Object
    // this.marketPrice = Array.from(this.items).reduce((sum, item) => sum + (item[1].sharesCount * Number(document.getElementById(`price-${item[1].id}`).textContent.replace('$', ''))), 0);

    let tempMarketPrice = 0;
    for (let i of Object.values(this.items)) {
      tempMarketPrice +=
        i.sharesCount *
        Number(
          document.getElementById(`price-${i.id}`).textContent.replace("$", "")
        );
    }
    this.marketPrice = tempMarketPrice;
  }
}

const portfolio = new InvestmentPortfolio();
controlPanelBalance.textContent = "$" + Number(portfolio.balance).toFixed(2);

[...document.getElementsByClassName("product-card__button-sell")].forEach(
  (btn) => {
    btn.addEventListener("click", (e) => {
      portfolio.sellItem(Number(e.target.id.replace(/\D*/, "")), companies);
      controlPanelBalance.textContent =
        "$" + Number(portfolio.balance).toFixed(2);
    });
  }
);

[...document.getElementsByClassName("product-card__button-buy")].forEach(
  (btn) => {
    btn.addEventListener("click", (e) => {
      if (
        Number(
          document
            .getElementById(`price-${e.target.id.replace(/\D*/, "")}`)
            .textContent.replace("$", "")
        ) < Number(portfolio.balance)
      ) {
        portfolio.buyItem(Number(e.target.id.replace(/\D*/, "")), companies);
        controlPanelBalance.textContent =
          "$" + Number(portfolio.balance).toFixed(2);
      } else {
        controlPanelBalance.style.color = "red";
        setTimeout(() => (controlPanelBalance.style.color = "black"), 300);
        const timestamp = Date.now();
        controlPanelLog.insertAdjacentHTML(
          "afterbegin",
          `<span id="temp-not-enough-money-${timestamp}" style="color: darkred;">Not enough money</span>`
        );
        elementSmoothHide(
          document.getElementById(`temp-not-enough-money-${timestamp}`)
        );
      }
    });
  }
);

[...document.getElementsByClassName("product-card__info-icon")].forEach(
  (icon) => {
    icon.addEventListener("mouseover", (e) => {
      const tempId = e.target.id.replace(/\D*/, "");
      const tempInfo = companies.find((item) => item.id == tempId).info;
      e.target.insertAdjacentHTML(
        "afterend",
        `
        <div class="product-card__info-section-bridge" id="info-bridge-${tempId}"></div>
        <section class="product-card__info-section" id="info-section-${tempId}">${tempInfo}</section>
        `
      );
      const tempBridge = document.getElementById(`info-bridge-${tempId}`);
      const tempSection = document.getElementById(`info-section-${tempId}`);
      tempBridge.style.opacity = 0;
      tempSection.style.opacity = 0;
      elementSmoothPopup(tempBridge);
      elementSmoothPopup(tempSection);
    });
    icon.addEventListener("mouseout", (e) => {
      const tempId = e.target.id.replace(/\D*/, "");
      document.getElementById(`info-bridge-${tempId}`).remove();
      document.getElementById(`info-section-${tempId}`).remove();
    });
  }
);

const pricesChange = () => {
  for (let i of [...document.querySelectorAll(".product-card__price")]) {
    const currentPrice = Number(i.textContent.replace("$", ""));
    const initPriceForCurrentProduct = companies.find(
      (item) => item.id === Number(i.id.replace(/\D*/, ""))
    ).initPrice;
    let newPrice = currentPrice * ((90 + Math.random() * 20) / 100);
    if (newPrice > initPriceForCurrentProduct)
      newPrice -= (newPrice - initPriceForCurrentProduct) ** 2 / 7;
    if (newPrice < initPriceForCurrentProduct)
      newPrice += (initPriceForCurrentProduct - newPrice) ** 2 / 7;
    i.textContent = "$" + newPrice.toFixed(2);
  }
};

/* оставлено, чтобы в будущем сделать совместимым со старыми версиями IE и др., где не работает requestAnimationFrame;

const elementSmoothHide = (elem, fadeInterval = 8) => {
  elem.style.opacity = 1;
  const tempInterval = setInterval(() => {
    elem.style.opacity -= 0.01;
    if (elem.style.opacity <= 0) {
      elem.remove();
      clearInterval(tempInterval);
    };
  }, fadeInterval);
};

const elementSmoothPopup = (elem, popUpInterval = 10, popUpDuration = 300) => {
  setTimeout(() => {
    const tempInterval = setInterval(() => {
    elem.style.opacity = Number(elem.style.opacity) + 0.05;
    if (elem.style.opacity >= 1) clearInterval(tempInterval);
    }, popUpInterval);
 }, popUpDuration);
}; */

// 1) пропала разница таймингов между Chrome и Firefox (видимо, из-за разницы реализации setInterval() в движках); 2) помнить, что (если я правильно понимаю) requestAnimationFrame() завязана на частоте обновления экрана, поэтому fadeRate/popUpRate будут давать разный результат на устройствах с различающейся частотой обновления экрана.
const elementSmoothHide = (elem, fadeRate = 1.25) => {
  const tempStartTime = Date.now();
  elem.style.opacity = 1;
  const elementSmoothHideInner = () => {
    const tempCurrentTime = Date.now();
    if (elem.style.opacity >= 0) {
      elem.style.opacity =
        1 - ((tempCurrentTime - tempStartTime) / 1000) * fadeRate;
      window.requestAnimationFrame(elementSmoothHideInner);
    } else {
      elem.remove();
    }
  };
  elementSmoothHideInner();
};

const elementSmoothPopup = (elem, popUpRate = 4, popUpDelay = 300) => {
  setTimeout(() => {
    const tempStartTime = Date.now();
    elem.style.opacity = 0;
    const elementSmoothPopupInner = () => {
      const tempCurrentTime = Date.now();
      if (elem.style.opacity <= 1)
        elem.style.opacity =
          ((tempCurrentTime - tempStartTime) / 1000) * popUpRate;
      window.requestAnimationFrame(elementSmoothPopupInner);
    };
    elementSmoothPopupInner();
  }, popUpDelay);
};

const eventRandomPickFromEventsArray = () => {
  const eventsClone = JSON.parse(JSON.stringify(events));
  const currentRandomEvent =
    eventsClone[Math.floor(Math.random() * eventsClone.length)];
  let {
    text: currentRandomEventText,
    type: currentRandomEventType,
    subtype: currentRandomEventSubtype,
  } = currentRandomEvent;

  const eventRandomPickFromEventsArrayShowRunningLine = () => {
    const currentRunningLineTimestamp = Date.now();
    header.insertAdjacentHTML(
      "afterbegin",
      `
        <span class="running-line" id="running-line-${currentRunningLineTimestamp}">${currentRandomEventText}</span>  
      `
    );
    setTimeout(() => {
      elementSmoothHide(
        document.getElementById(`running-line-${currentRunningLineTimestamp}`),
        0.5
      );
    }, 3000);
  };

  const eventRandomPickFromEventsArrayPriceChangeHandler = () => {
    const tempId = companies.find(
      (company) => company.name == currentRandomCompanyName
    ).id;
    const tempTargetPrice = document.getElementById(`price-${tempId}`);

    // TODO: переделать из дерева if-ов в handler, принимающий в качестве аргументов type и subtype и работаюищий уже с ними
    // TODO: стоит сделать задержку перед активацией события на время прочтения новости о нём, хотя бы в 1 секунду. Пробовал поставить setTimeout внутри функций ниже, но тогда совсем рушится синхронность этих изменений с естественным изменением цены, это тудушка на после решения проблемы рассинхрона
    if (currentRandomEventType == "increase") {
      if (currentRandomEventSubtype == "sharp") {
        const tempRandomEventInterval = setInterval(() => {
          let tempPriceIncrease =
            Number(tempTargetPrice.textContent.replace("$", "")) * 0.05;
          tempTargetPrice.textContent =
            "$" +
            (
              Number(tempTargetPrice.textContent.replace("$", "")) +
              tempPriceIncrease
            ).toFixed(2);
        }, 1000);
        setTimeout(() => {
          clearInterval(tempRandomEventInterval);
        }, 5000);
      }
    }
    if (currentRandomEventType == "decrease") {
      if (currentRandomEventSubtype == "sharp") {
        const tempRandomEventInterval = setInterval(() => {
          let tempPriceDecrease =
            Number(tempTargetPrice.textContent.replace("$", "")) * 0.05;
          tempTargetPrice.textContent =
            "$" +
            (
              Number(tempTargetPrice.textContent.replace("$", "")) -
              tempPriceDecrease
            ).toFixed(2);
        }, 1000);
        setTimeout(() => {
          clearInterval(tempRandomEventInterval);
        }, 5000);
      }
    }
  };

  // блок, если компания единственная в событии:
  //блок, если компания единственная в событии --> но случайная:
  const currentRandomCompanyName =
    companies[Math.floor(Math.random() * companies.length)].name;
  if (currentRandomEventText.includes("_company_")) {
    currentRandomEventText = currentRandomEventText.replace(
      "_company_",
      currentRandomCompanyName
    );
  }
  eventRandomPickFromEventsArrayShowRunningLine();
  eventRandomPickFromEventsArrayPriceChangeHandler();

  // eventRandomPickFromEventsArrayShowRunningLine();
};

controlPanelCurrentPortfolioPrice.textContent =
  "$" + portfolio.marketPrice.toFixed(2);
const globalTimer = setInterval(() => {
  pricesChange();
  // TODO: придумать способ убрать рассинхрон между естественной динамикой цен и изменением из-за событий.
  // ? простой итератор внутри pricesChange(), чтобы textContent с новой ценой изменялся в последний момент? Нужно сильно переписывать структуру и pricesChange(), и eventRandomPickFromEventsArray();
  // ? async-await?
  if (Math.random() > 0.975) {
    eventRandomPickFromEventsArray();
  }

  const previousMarketPrice = portfolio.marketPrice;
  portfolio.calculateMarketPrice();
  controlPanelCurrentPortfolioPrice.textContent =
    "$" + portfolio.marketPrice.toFixed(2);
  controlPanelCurrentPortfolioPrice.style.color =
    previousMarketPrice > portfolio.marketPrice
      ? "rgb(100, 0, 0)"
      : previousMarketPrice < portfolio.marketPrice
      ? "rgb(0, 100, 0)"
      : "black";
}, 1000);
