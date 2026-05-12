import React, { createContext, useState, useContext } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
    address: "Our Address",
    quote: "Get a Quote",
    intro: "Your best destination for shipping your goods",
    learnMore: "Learn More",
    air: "Air Freight",
    sea: "Sea Freight",
    road: "Road Freight",
    project: "Project Cargo",
    airDesc1: "For your urgent shipments, we offer in",
    airDesc:
      " Air Freight Services Fast and accurate, through our partnerships with major international airlines, from receipt to final delivery. We handle all shipping details, including customs clearance in Turkey, China, and Italy, with shipment tracking at every stage.",
    seaDesc1: "we offer in ",
    seaDesc:
      "Flexible and economical shipping solutions suitable for all types of goods. Whether your shipment is complete or partial, we ensure it is carefully preserved from the source to the final destination, while providing all logistical support and customs clearance services.",
    roadDesc:
      "Safe and efficient land freight services in Turkey and around the world, whether your shipment is full or partial. We guarantee on-time delivery, live tracking, and reliable service at competitive prices. Our extensive network of partners ensures smooth cross-border transit and professional handling of shipments.",
    projectDesc:
      "Project freight services specialize in transporting heavy, oversized, or logistically complex shipments, whether industrial equipment, bulky construction materials, or machinery for infrastructure projects. We provide integrated solutions that include planning, transportation, and coordination with all professional agencies to ensure your shipment arrives safely and on time.",
    projectDesc2:
      "Whether your shipment is a one-time shipment or part of a long-term project, we ensure that the process is managed with precision and complete transparency, with extensive experience in managing complex logistics projects.",
    servicesInclude: "Our services include:",
    liAir: {
      li1: "Instant shipping to major global destinations",
      li2: "Extensive international coverage.",
      li3: "Special services for medical or perishable goods",
      li4: "Live tracking from the shipping company.",
      li5: "Carefully considered prices to suit different budgets.",
    },
    liSea: {
      li1: "Full-load (FCL) or consolidation (LCL) options depending on shipment size.",
      li2: "Flexible scheduling with reliable global shipping lines.",
      li3: "Best container booking rates.",
      li4: "Professional coordination of loading and clearance operations at the port.",
      li5: "Professional coordination of loading and clearance operations at the port.",
    },
    liRoad: {
      li1: "International shipping via an extensive network of trucks.",
      li2: "Door-to-door delivery for special shipments.",
      li3: "Customs clearance support in Türkiye and abroad.",
      li4: "Transportation of special and temperature-controlled goods.",
    },
    liProject: {
      li1: "Transporting heavy, large, and non-standard shipments.",
      li2: "Door-to-door logistics solutions.",
      li3: "Coordination with ports and official customs authorities.",
      li4: "Industrial packaging services, special pushers, and safe delivery to project sites.",
      li5: "Cost-effective solutions without compromising on quality.",
    },
    trust:
      "We believe that every shipment is a promise of arrival, and with us, your goods will be safely delivered to their final destination. We choose trust and efficiency in transporting goods around the world in the fastest and safest ways.",
    services:
      "Our company offers a wide range of integrated logistics services, from land transportation to sea and air transportation, wherever your business needs may be.",
    experience:
      "We boast a dedicated team of logistics experts who provide exceptional service and in-depth knowledge. Our team is capable of handling diverse challenges and providing customized solutions, utilizing the latest technologies and methods.",
    partnership:
      "We always strive to achieve customer satisfaction by providing innovative and reliable logistics solutions. Choosing our company means having a strategic partner who supports your business growth and ensures you achieve your goals efficiently and effectively.",
    contactUs:
      "Don't hesitate to contact us for shipping partnerships or to receive customized quotes for your company's freight transportation! We're here to provide reliable and efficient logistics solutions that meet your needs accurately and professionally.",
    about1:
      "A leading company in the field of trade brokerage and logistics services, specializing in international trade, import, export, and all types of shipping.",
    about2:
      "We act as a trade intermediary between suppliers and researchers, ensuring the protection of the rights of all parties through transparent and secure transactions.",
    about3:
      "We offer land, sea, and air freight services, as well as customs clearance, and customized shipping solutions tailored to the type of goods and the specific needs of each client. We specialize in high-demand products such as cashews, coffee, furniture, and textiles.",
    about4:
      "We provide freight shipping services to various countries in the Middle East, Europe, Asia, and Africa, utilizing a vast network of international partners and state-of-the-art shipping vessels, all while ensuring speed, efficiency, and reliability in every operation.",
    aboutUs1:
      "A leading commercial brokerage and logistics company, specializing in international trade, import and export, and shipping of all kinds.",
    aboutUs2:
      "We act as a commercial intermediary between suppliers and scientists, ensuring the rights of all parties are protected through transparent and secure transactions.",
    aboutUs3:
      "We offer land, sea, and air freight services, in addition to customs clearance and customized shipping plans based on the type of goods and each customer's needs. We focus on high-demand products such as cashews, coffee, furniture, and textiles.",
    aboutUs4:
      "We cover freight shipments to various countries in the Middle East, Europe, Asia, and Africa, through a wide network of international partners and advanced cargo vessels, with a commitment to speed, efficiency, and reliability in every process.",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    address: "عنواننا",
    quote: "اطلب عرض سعر",
    intro: "وجهتكم الأفضل لشحن بضائعكم",
    learnMore: "تعلم المزيد",
    air: "الشحن الجوي",
    sea: "الشحن البحري",
    road: "الشحن البري",
    project: "شحن المشاريع",
    airDesc1: " لشحناتك العاجلة,نقدم في",
    airDesc:
      " خدمات الشحن الجوي السريع والدقيق,عبر شراكتنا مع كبرى شركات الطيران العالمية,من الاستلام وحتى التوصيل النهائي,نتكفل بجميع تفاصيل الشحن, بما في ذلك التخليص الجمركي في تركيا, الصين, وايطاليا, مع متابعة الشحنة في كل مرحلة.",
    seaDesc1: "نقدم قي",
    seaDesc:
      "حلول شحن مرنة واقتصادية تناسب كافة انواع البضائع, سواء كانت شحنتك كاملة او جزئية نحرص على حفظها بعناية من المصدر حتى الوجهة النهائية, مع توفير جميع خدمات الدعم اللوجستي والتخليص الجمركي.",
    roadDesc:
      "خدمات الشحن البري الآمنة والفعالة في تركيا ودول العالم, سواء كانت الشحنة حمولة كاملة او جزئية. نضمن لك توصيلا في الوقت المحدد, تتبعا مباشرا, وخدمة موثوقة بأسعار منافسة. شبكتنا الواسعة من",
    projectDesc:
      "خدمات شحن المشاريع متخصصة في نقل الشحنات الثقيلة، الضخمة، أو ذات التعقيد اللوجستي، سواء كانت معدات صناعية، مواد بناء ضخمة، أو آلات لمشاريع البنية التحتية. نقدم حلولاً متكاملة تشمل التخطيط والنقل والتنسيق مع جميع الجهات المختصة لضمان وصول شحنتك بأمان وفي الوقت المحدد.",
    projectDesc2:
      "سواء كانت شحنتك لمرة واحدة أو ضمن مشروع طويل الأمد، نضمن إدارة العملية بدقة وشفافية كاملة، مع خبرة واسعة في إدارة مشاريع اللوجستيات المعقدة.",
    servicesInclude: "خدماتنا تشمل:",
    liAir: {
      li1: "شحن فوري الى أهم الوجهات العالمية.",
      li2: "تغطية دولية واسعة.",
      li3: "خدمات خاصة للبضائع الطبية او سريعة التلف.",
      li4: "تتبع مباشر لشركة الشحن",
      li5: "أسعار مدروسة بعناية لتناسب مختلف الميزانيات.",
    },
    liSea: {
      li1: "خيارات شحن كامل (FCL) او تجميع (LCL) حسب حجم الشحنة.",
      li2: "جدولة مرنة مع خطوط شحن عالمية موثوقة.",
      li3: "أفضل اسعار لحجز الحاويات.",
      li4: "تنسيق احترافي لعمليات التحميل والتخليص في الميناء.",
      li5: "استيراد وتصدير الى جميع الموانئ العالمية.",
    },
    liRoad: {
      li1: "شحن دولي عبر شبكة واسعة من الشاحنات.",
      li2: "توصيل من الباب إلى الباب للشحنات الخاصة.",
      li3: "دعم التخليص الجمركي في تركيا والخارج.",
      li4: "نقل البضائع الخاصة والمتحكم في درجة حرارتها.",
    },
    liProject: {
      li1: "نقل الشحنات الثقيلة والكبيرة وغير القياسية.",
      li2: "حلول لوجستية من الباب إلى الباب.",
      li3: "التنسيق مع الموانئ والسلطات الجمركية الرسمية.",
      li4: "خدمات التغليف الصناعي، الدافعات الخاصة، والتسليم الآمن إلى مواقع المشاريع.",
      li5: "حلول فعّالة من حيث التكلفة دون المساس بالجودة.",
    },
    trust:
      "نؤمن بأن كل شحنة هي وعد بالوصول، ومعنا ستصل بضائعكم بأمان إلى وجهتها النهائية. نختار الثقة والكفاءة في نقل البضائع حول العالم بأسرع وأأمن الطرق.",
    services:
      "تقدم شركتنا مجموعة واسعة من الخدمات اللوجستية المتكاملة، من النقل البري إلى النقل البحري والجوي، أينما كانت احتياجات عملك.",
    experience:
      "نفتخر بفريق متخصص من خبراء اللوجستيات الذين يقدمون خدمة استثنائية ومعرفة متعمقة. فريقنا قادر على التعامل مع التحديات المتنوعة وتقديم حلول مخصصة، مع الاستفادة من أحدث التقنيات والأساليب.",
    partnership:
      "نسعى دائماً لتحقيق رضا العملاء من خلال تقديم حلول لوجستية مبتكرة وموثوقة. اختيار شركتنا يعني الحصول على شريك استراتيجي يدعم نمو أعمالك ويضمن لك تحقيق أهدافك بكفاءة وفعالية.",
    contactUs:
      "لا تتردد في التواصل معنا لشراكات الشحن أو للحصول على عروض أسعار مخصصة لشحن بضائع شركتك! نحن هنا لتقديم حلول لوجستية موثوقة وفعالة تلبي احتياجاتك بدقة واحترافية.",
    about1:
      "شركة رائدة في الوساطة التجارية والخدمات اللوجستية, متخصصة في التجارة الدولية, الاستيراد والتصدير, والشحن بمختلف انواعه.",
    about2:
      "نقوم بدور الوسيط التجاري بين الموردين والعلماء, ونضمن حماية حقوق جميع الاطراف من خلال تعاملات شفافة وآمنة.",
    about3:
      "نوفر خدمات شحن بري, بحري, جوي, بالاضافة الى التخليص الجمركي, وخطط شحن مخصصة حسب نوع البضائع واحتياجات كل عميل. نركز على منتجات عالية الطلب مثل الكاجو, القهوة, الأثاث, والمنسوجات.",
    about4:
      "نغطي شحن البضائع الى مختلف دول الشرق الأوسط, اوروبا, آسيا, أفريقيا, عبر شبكة واسعة من الشركاء الدوليين وسفن الشحن المتطورة, مع الالتزام بالسرعة والكفاءة والموثوقية في كل عملية.",
    aboutUs1:
      "شركة وساطة تجارية ولوجستية رائدة، متخصصة في التجارة الدولية، الاستيراد والتصدير، والشحن بجميع أنواعه.",
    aboutUs2:
      "نقوم بدور الوسيط التجاري بين الموردين والعلماء، ونضمن حماية حقوق جميع الأطراف من خلال تعاملات شفافة وآمنة.",
    aboutUs3:
      "نوفر خدمات شحن بري وبحري وجوي، إضافة إلى التخليص الجمركي وخطط شحن مخصصة حسب نوع البضائع واحتياجات كل عميل. نركز على منتجات عالية الطلب مثل الكاجو والقهوة والأثاث والمنسوجات.",
    aboutUs4:
      "نغطي شحن البضائع إلى مختلف دول الشرق الأوسط وأوروبا وآسيا وأفريقيا، من خلال شبكة واسعة من الشركاء الدوليين وسفن الشحن المتقدمة، مع الالتزام بالسرعة والكفاءة والموثوقية في كل عملية.",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
