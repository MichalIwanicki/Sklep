// Obiekt z tłumaczeniami:
const translations = {
    pl: {
      title: "Rowery Markowe – Strona główna",
      "nav-home": "Strona główna",
      "nav-rowey": "Rowery",
      "nav-czesci": "Części",
      "nav-serwis": "Serwis",
      "nav-finansowanie": "Raty i promocje",
      "nav-kontakt": "Kontakt",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "Profesjonalny sklep rowerowy z pasją.",
      "hero-cta": "Sprawdź ofertę",
      "hero-data1": "Poniedziałek – Piątek: 9:00 – 18:00",
      "hero-data2": "Sobota: 9:00 – 14:00",
      "hero-data3": "Niedziela: nieczynne",
      "intro-heading": "Witaj w Rowery Markowe!",
      "intro-text": " Nasz sklep mieści się przy ulicy Mikołaja Reja 46E i oferuje szeroki wybór zarówno rowerów elektrycznych,jak i tradycyjnych. Znajdziesz u nas wiele modeli znanych marek, w tym Trek, Merida, Giant, Storm, Kross,Tabou, Onilus, Barton, Ecobike oraz Overfly. Dostępne są różne rozmiary ram i kół – od najmniejszych rowerów dziecięcych po największe rozmiary dla dorosłych. Dbamy nie tylko o bogatą ofertę rowerów, lecz także o profesjonalny serwis, który mieści się przy naszym sklepie. Naprawiamy i konserwujemy rowery wszystkich typów, używając części najlepszych producentów, takich jak Shimano, Bontrager i wielu innych. Zapraszamy od poniedziałku do piątku w godzinach 9:00–18:00 oraz w soboty od 9:00 do 14:00.",
      "footer": "© 2025 Rowery Markowe – Wszelkie prawa zastrzeżone.",
      "trek": "Trek to jeden z najbardziej rozpoznawalnych producentów rowerów na świecie. Specjalizuje się w rowerach górskich, szosowych i rowerach do jazdy rekreacyjnej, stawiając na innowacje i wysoką jakość. W naszym sklepie dostępne są modele z serii: Marlin, Xcaliber, Procaliber oraz Fulex.",
      "giant":"Giant jest jednym z największych producentów rowerów na świecie. Oferuje zarówno modele klasyczne, jak i elektryczne, stawiając na nowoczesne rozwiązania technologiczne. W naszym sklepie dostępne są modele z serii: Talon, Roam, Attend oraz ich damskie odpowiedniki z damskiej marki Live.",
      "merida":"Merida to tajwański producent rowerów z wieloletnią tradycją, słynący z innowacyjnych rozwiązań i lekkich ram. Często wybierana przez zawodowców. W naszym sklepie dostępne są modele z serii: Bignine, Freeway oraz Crossway w różnych rozmiarach.",
      "kross":"Polski producent rowerów o dużym doświadczeniu w tworzeniu rowerów MTB, trekkingowych i miejskich. Oferuje szeroką gamę modeli w różnych przedziałach cenowych. W naszym sklepie dostępne są modele z serii: Hexagon, Lea, Trans, Racer, Mini oraz Esker w różnych rozmiarach.",
      "storm":"Marka Storm słynie z wytrzymałych rowerów górskich oraz rowerów miejskich. Idealna propozycja dla osób, które cenią sobie dobrą jakość w przystępnej cenie. W naszym sklepie dostępne są modele z serii: Shark, Trail, Marathon, Racer, Rocket, Lassie, Paris, Amsterdam oraz Barcelona.",
      "onilus":"Onilus to marka specjalizująca się w rowerach miejskich i trekkingowych, z naciskiem na komfort i nowoczesny design. W naszym sklepie dostępne są modele z serii: Muranus oraz Naila, a także dziecięce modele Riper oraz Kati.",
      "tabou":"Tabou to stosunkowo młoda marka, która stawia na stylowe rowery miejskie i crossowe. Idealne dla osób szukających nietuzinkowych rozwiązań. W naszym sklepie dostępne są modele z serii: Kinetic, Flow, Blade oraz Rocket."
    },
    en: {
      title: "Rowery Markowe – Home Page",
      "nav-home": "Home",
      "nav-rowey": "Bikes",
      "nav-czesci": "Bicycle parts",
      "nav-serwis": "Service",
      "nav-finansowanie": "Installments and promotions",
      "nav-kontakt": "Contact",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "A professional bike shop with passion.",
      "hero-cta": "Check our offer",
      "hero-data1": "Monday – Friday: 9:00 AM – 6:00 PM",
      "hero-data2": "Saturday: 9:00 AM – 2:00 PM",
      "hero-data3": "Sunday: closed",
      "intro-heading": "Welcome to Rowery Markowe!",
      "intro-text": "We've been operating for over 20 years, providing the city’s residents and the surrounding area with top-quality services.Our store is located at 46E Mikołaja Reja Street in Suwałki and offers a wide range of both electric and traditional bicycles. You can find many models from well-known brands such as Trek, Merida, Giant, Storm, Kross, Tabou, Onilus, Barton, Ecobike, and Overfly. We carry various frame and wheel sizes – from the smallest children’s bikes to the largest sizes for adults.We take pride not only in our extensive bike selection but also in our professional service center, situated right next to our store. We repair and maintain all types of bicycles, using parts from top manufacturers like Shimano, Bontrager, and many others. We welcome you Monday to Friday from 9:00 a.m. to 6:00 p.m., and on Saturdays from 9:00 a.m. to 2:00 p.m.",
      "footer": "© 2025 Rowery Markowe – All rights reserved.",
      "trek": "Trek is one of the most recognizable bicycle manufacturers in the world. They specialize in mountain, road, and recreational bikes, focusing on innovation and high quality. In our store, we offer models from the Marlin, Xcaliber, Procaliber, and Fulex series.",
      "giant":"Giant is one of the largest bicycle manufacturers in the world. They offer both traditional and electric models, focusing on modern technological solutions. In our store, you can find Talon, Roam, and Attend series, as well as women’s versions from the Liv brand.",
      "merida":"Merida is a Taiwanese bicycle manufacturer with a long-standing tradition, known for innovative solutions and lightweight frames. It’s often chosen by professionals. In our store, you can find models from the Bignine, Freeway, and Crossway series in various sizes.",
      "kross":"A Polish bicycle manufacturer with extensive experience in creating MTB, trekking, and city bikes. They offer a wide range of models in various price brackets. In our store, you will find Hexagon, Lea, Trans, Racer, Mini, and Esker series in different sizes.",
      "storm":"Storm is known for its durable mountain and city bikes. It’s an ideal choice for those who value good quality at an affordable price. In our store, we offer models from the Shark, Trail, Marathon, Racer, Rocket, Lassie, Paris, Amsterdam, and Barcelona series.",
      "onilus":"Onilus specializes in city and trekking bikes, emphasizing comfort and modern design. In our store, we offer Muranus and Naila series, as well as children’s models such as Riper and Kati.",
      "tabou":"Tabou is a relatively young brand focusing on stylish city and cross bikes, perfect for those seeking unique solutions. In our store, you’ll find the Kinetic, Flow, Blade, and Rocket series."
    },
    lt: {
      title: "Rowery Markowe – Pagrindinis puslapis",
      "nav-home": "Pagrindinis",
      "nav-rowey": "Dviračiai",
      "nav-czesci": "Dviračių dalys",
      "nav-serwis": "Servisas",
      "nav-finansowanie": "Išsimokėtinai ir akcijos",
      "nav-kontakt": "Kontaktai",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "Profesionali dviračių parduotuvė su aistra.",
      "hero-cta": "Peržiūrėkite pasiūlymą",
      "hero-data1": "Pirmadienis – Penktadienis: 9:00 – 18:00",
      "hero-data2": "Šeštadienis: 9:00 – 14:00",
      "hero-data3": "Sekmadienis: nedirbame",
      "intro-heading": "Sveiki atvykę į Rowery Markowe!",
      "intro-text": "Veikiame jau daugiau nei 20 metų, teikdami aukščiausios kokybės paslaugas miesto gyventojams ir aplinkiniams rajonams. Mūsų parduotuvė įsikūrusi adresu Mikołaja Reja 46E, Suvalkuose, kur siūlome platų tiek elektrinių, tiek tradicinių dviračių asortimentą. Pas mus rasite daugybę gerai žinomų prekės ženklų modelių, tokių kaip Trek, Merida, Giant, Storm, Kross, Tabou, Onilus, Barton, Ecobike ir Overfly. Turime įvairių rėmų bei ratų dydžių – nuo pačių mažiausių vaikiškų dviračių iki didžiausių, skirtų suaugusiesiems. Rūpinamės ne tik plačiu dviračių pasirinkimu, bet ir profesionaliu servisu, veikiančiu šalia mūsų parduotuvės. Taisome ir prižiūrime įvairių tipų dviračius, naudodami geriausių gamintojų dalis, tokias kaip Shimano, Bontrager ir daugelį kitų. Laukiame jūsų pirmadieniais–penktadieniais nuo 9:00 iki 18:00 val. ir šeštadieniais nuo 9:00 iki 14:00 val.",
      "footer": "© 2025 Rowery Markowe – Visos teisės saugomos.",
      "trek":"„Trek“ yra vienas geriausiai atpažįstamų dviračių gamintojų pasaulyje. Specializuojasi kalnų, plento ir laisvalaikio dviračiuose, akcentuodama naujoves ir aukštą kokybę. Mūsų parduotuvėje rasite Marlin, Xcaliber, Procaliber ir Fulex serijų modelius.",
      "giant":"„Giant“ yra vienas didžiausių dviračių gamintojų pasaulyje. Siūlo tiek tradicinius, tiek elektrinius modelius, daug dėmesio skirdamas moderniems technologiniams sprendimams. Mūsų parduotuvėje rasite Talon, Roam ir Attend serijas bei moteriškas jų versijas iš „Liv“ linijos.",
      "merida":"„Merida“ yra Taivano dviračių gamintojas, turintis ilgametes tradicijas, žinomas dėl novatoriškų sprendimų ir lengvų rėmų. Dažnai renkasi profesionalai. Mūsų parduotuvėje rasite Bignine, Freeway ir Crossway serijų modelius įvairių dydžių.",
      "kross":"Lenkų dviračių gamintojas, turintis didelę patirtį gaminant kalnų, turistinius ir miesto dviračius. Siūlo platų modelių pasirinkimą įvairiose kainų kategorijose. Mūsų parduotuvėje rasite Hexagon, Lea, Trans, Racer, Mini bei Esker serijas įvairių dydžių.",
      "storm":"„Storm“ garsėja patvariais kalnų ir miesto dviračiais. Tai puikus pasirinkimas vertinantiems gerą kokybę už prieinamą kainą. Mūsų parduotuvėje rasite Shark, Trail, Marathon, Racer, Rocket, Lassie, Paris, Amsterdam ir Barcelona serijų modelius.",
      "onilus":"„Onilus“ specializuojasi miesto ir turistiniuose dviračiuose, akcentuodama komfortą ir šiuolaikinį dizainą. Mūsų parduotuvėje siūlome Muranus ir Naila serijas, taip pat vaikiškus Riper ir Kati modelius.",
      "tabou":"„Tabou“ yra gana jaunas prekės ženklas, orientuotas į stilingus miesto ir kroso dviračius, puikiai tinkantis ieškantiems išskirtinių sprendimų. Mūsų parduotuvėje rasite Kinetic, Flow, Blade ir Rocket serijų modelius."
    }    
  };
  
  // Funkcja przełączająca język
  function setLanguage(lang) {
    // Zmień atrybut `lang` w <html> (dla dostępności, SEO)
    document.documentElement.lang = lang;
  
    // Pobieramy wszystkie elementy z atrybutem data-lang
    const elements = document.querySelectorAll("[data-lang]");
    
    elements.forEach(el => {
      // klucz = data-lang="..."
      const key = el.getAttribute("data-lang");
      // Podmiana tekstu z obiektu translations[lang][key]
      if(translations[lang] && translations[lang][key]) {
        if(el.tagName.toLowerCase() === "title") {
          // Specjalny przypadek, gdy zmieniamy zawartość <title>
          document.title = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
  }
  
  // Gdy strona się załaduje:
  document.addEventListener("DOMContentLoaded", () => {
    // Ustawiamy domyślny język na polski (lub inny)
    setLanguage("pl");
    
    // Nasłuchujemy kliknięć w buttony data-setlang="xx"
    const langButtons = document.querySelectorAll("[data-setlang]");
    langButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const chosenLang = btn.getAttribute("data-setlang");
        setLanguage(chosenLang);
      });
    });
  });
  