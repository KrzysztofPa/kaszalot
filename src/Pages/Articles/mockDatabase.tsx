// mockDatabase.ts
interface Article {
    id: number;
    title: string;
    content: string;
    fullContent: string;
    date: string;
    image: string;
  }
  
  const mockDatabase: Article[] = [
    {
      id: 1,
      title: 'Jak dbać o zdrowie swojego psa?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...',
      fullContent: 'Pełny tekst o tym, jak dbać o zdrowie swojego psa...',
      date: '2023-01-15',
      image: 'https://picsum.photos/200',
    },
    {
      id: 2,
      title: '5 Ciekawostek o egzotycznych gryzoniach',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...',
      fullContent: 'Pełny tekst o ciekawostkach dotyczących egzotycznych gryzoni...',
      date: '2023-02-20',
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      title: 'Jak pielęgnować swoją roślinę doniczkową?',
      content: 'Dbanie o rośliny doniczkowe wymaga uwagi i systematyczności. Każda roślina ma swoje specyficzne potrzeby dotyczące światła, wilgotności i podlewania. W artykule omówimy, jakie są podstawowe zasady pielęgnacji roślin doniczkowych, aby mogły rozwijać się zdrowo i pięknie.',
      fullContent: 'Wprowadzenie:\nRośliny doniczkowe stanowią piękną ozdobę każdego domu. Jednak ich odpowiednia pielęgnacja może być wyzwaniem, zwłaszcza dla tych, którzy dopiero zaczynają swoją przygodę z zielenią. Poniżej znajdziesz praktyczne wskazówki, jak dbać o swoje rośliny doniczkowe.\n\n1. **Odpowiednie światło:** Każda roślina ma swoje preferencje dotyczące światła. Niektóre rośliny potrzebują pełnego nasłonecznienia, podczas gdy inne lepiej rosną w miejscach zacienionych. Znajdź dla swoich roślin odpowiednie miejsce w domu, aby zapewnić im odpowiednią ilość światła.\n\n2. **Prawidłowe podlewanie:** Nadmiar wody może prowadzić do gnicie roślin, podczas gdy ich wysuszenie może zaszkodzić korzeniom. Dlatego ważne jest, aby dostosować ilość podlewanej wody do potrzeb danej rośliny. Przed podlaniem sprawdź wilgotność gleby.\n\n3. **Wilgotność powietrza:** Niektóre rośliny doniczkowe preferują wilgotne środowisko. Aby zwiększyć wilgotność, możesz użyć nawilżacza powietrza lub postawić rośliny blisko siebie.\n\n4. **Regularne nawożenie:** Rośliny doniczkowe potrzebują składników odżywczych, które mogą się wyczerpywać w podłożu. Regularne nawożenie pomoże utrzymać ich zdrowie i piękny wygląd.\n\nPodsumowanie:\nDbanie o rośliny doniczkowe to satysfakcjonujące zadanie, które przynosi wiele radości. Zapewniają one nie tylko estetyczny wygląd domu, ale także korzystnie wpływają na klimat w pomieszczeniu. Pamiętaj o indywidualnych potrzebach każdej rośliny i bądź systematyczny w pielęgnacji.',
      date: '2023-05-12',
      image: 'https://picsum.photos/200',
    },
    {
      id: 4,
      title: 'Ptaki domowe: Jak zaopiekować się papugą jako zwierzęciem domowym?',
      content: 'Papugi to inteligentne i kolorowe ptaki, które mogą stać się wspaniałymi towarzyszami domowymi. Jednak aby stworzyć dla nich odpowiednie warunki życia, należy przestrzegać kilku podstawowych zasad. W tym artykule omówimy, jak zaopiekować się papugą jako zwierzęciem domowym.',
      fullContent: 'Wprowadzenie:\nPapugi to nie tylko piękne i kolorowe ptaki, ale także inteligentne stworzenia, które mogą stać się prawdziwymi towarzyszami życia. Zaopiekowanie się papugą jako zwierzęciem domowym wymaga jednak specyficznej wiedzy i uwagi. Poniżej znajdziesz praktyczne wskazówki dotyczące opieki nad papugami.\n\n1. **Wybór odpowiedniego gatunku:** Istnieje wiele różnych gatunków papug, a każdy z nich ma swoje indywidualne potrzeby. Przed zakupem papugi zorientuj się, jakie warunki życia są dla niej najlepsze i czy spełnisz te wymagania.\n\n2. **Zabezpiecz swoje mieszkanie:** Papugi są ciekawe świata i lubią badać swoje otoczenie. Upewnij się, że Twoje mieszkanie jest bezpieczne dla papugi, eliminując potencjalne zagrożenia, takie jak otwarte okna, toksyczne rośliny itp.\n\n3. **Zrównoważona dieta:** Papugi potrzebują zróżnicowanej diety, która obejmuje owoce, warzywa, ziarna i specjalne karmy dla papug. Skonsultuj się z weterynarzem, aby dowiedzieć się, jak zbilansować codzienną dietę swojej papugi.\n\n4. **Wysiłek umysłowy:** Papugi są bardzo inteligentne i potrzebują stymulacji umysłowej. Zabawki edukacyjne, gry i interakcje z właścicielem pomogą utrzymać ich aktywne i zdrowe.\n\nPodsumowanie:\nZaopiekowanie się papugą to nie tylko obowiązek, ale i przyjemność. Zbliżenie się do tych pięknych ptaków i zrozumienie ich potrzeb przyniesie wiele radości zarówno właścicielowi, jak i zwierzęciu.',
      date: '2023-06-28',
      image: 'https://picsum.photos/200',
    },
    {
      id: 5,
      title: 'Jak pielęgnować swoją roślinę doniczkową?',
      content: 'Dbanie o rośliny doniczkowe wymaga uwagi i systematyczności. Każda roślina ma swoje specyficzne potrzeby dotyczące światła, wilgotności i podlewania. W artykule omówimy, jakie są podstawowe zasady pielęgnacji roślin doniczkowych, aby mogły rozwijać się zdrowo i pięknie.',
      fullContent: 'Wprowadzenie:\nRośliny doniczkowe stanowią piękną ozdobę każdego domu. Jednak ich odpowiednia pielęgnacja może być wyzwaniem, zwłaszcza dla tych, którzy dopiero zaczynają swoją przygodę z zielenią. Poniżej znajdziesz praktyczne wskazówki, jak dbać o swoje rośliny doniczkowe.\n\n1. **Odpowiednie światło:** Każda roślina ma swoje preferencje dotyczące światła. Niektóre rośliny potrzebują pełnego nasłonecznienia, podczas gdy inne lepiej rosną w miejscach zacienionych. Znajdź dla swoich roślin odpowiednie miejsce w domu, aby zapewnić im odpowiednią ilość światła.\n\n2. **Prawidłowe podlewanie:** Nadmiar wody może prowadzić do gnicie roślin, podczas gdy ich wysuszenie może zaszkodzić korzeniom. Dlatego ważne jest, aby dostosować ilość podlewanej wody do potrzeb danej rośliny. Przed podlaniem sprawdź wilgotność gleby.\n\n3. **Wilgotność powietrza:** Niektóre rośliny doniczkowe preferują wilgotne środowisko. Aby zwiększyć wilgotność, możesz użyć nawilżacza powietrza lub postawić rośliny blisko siebie.\n\n4. **Regularne nawożenie:** Rośliny doniczkowe potrzebują składników odżywczych, które mogą się wyczerpywać w podłożu. Regularne nawożenie pomoże utrzymać ich zdrowie i piękny wygląd.\n\nPodsumowanie:\nDbanie o rośliny doniczkowe to satysfakcjonujące zadanie, które przynosi wiele radości. Zapewniają one nie tylko estetyczny wygląd domu, ale także korzystnie wpływają na klimat w pomieszczeniu. Pamiętaj o indywidualnych potrzebach każdej rośliny i bądź systematyczny w pielęgnacji.',
      date: '2023-05-12',
      image: 'https://picsum.photos/200',
    },
    {
      id: 6,
      title: 'Ptaki domowe: Jak zaopiekować się papugą jako zwierzęciem domowym?',
      content: 'Papugi to inteligentne i kolorowe ptaki, które mogą stać się wspaniałymi towarzyszami domowymi. Jednak aby stworzyć dla nich odpowiednie warunki życia, należy przestrzegać kilku podstawowych zasad. W tym artykule omówimy, jak zaopiekować się papugą jako zwierzęciem domowym.',
      fullContent: 'Wprowadzenie:\nPapugi to nie tylko piękne i kolorowe ptaki, ale także inteligentne stworzenia, które mogą stać się prawdziwymi towarzyszami życia. Zaopiekowanie się papugą jako zwierzęciem domowym wymaga jednak specyficznej wiedzy i uwagi. Poniżej znajdziesz praktyczne wskazówki dotyczące opieki nad papugami.\n\n1. **Wybór odpowiedniego gatunku:** Istnieje wiele różnych gatunków papug, a każdy z nich ma swoje indywidualne potrzeby. Przed zakupem papugi zorientuj się, jakie warunki życia są dla niej najlepsze i czy spełnisz te wymagania.\n\n2. **Zabezpiecz swoje mieszkanie:** Papugi są ciekawe świata i lubią badać swoje otoczenie. Upewnij się, że Twoje mieszkanie jest bezpieczne dla papugi, eliminując potencjalne zagrożenia, takie jak otwarte okna, toksyczne rośliny itp.\n\n3. **Zrównoważona dieta:** Papugi potrzebują zróżnicowanej diety, która obejmuje owoce, warzywa, ziarna i specjalne karmy dla papug. Skonsultuj się z weterynarzem, aby dowiedzieć się, jak zbilansować codzienną dietę swojej papugi.\n\n4. **Wysiłek umysłowy:** Papugi są bardzo inteligentne i potrzebują stymulacji umysłowej. Zabawki edukacyjne, gry i interakcje z właścicielem pomogą utrzymać ich aktywne i zdrowe.\n\nPodsumowanie:\nZaopiekowanie się papugą to nie tylko obowiązek, ale i przyjemność. Zbliżenie się do tych pięknych ptaków i zrozumienie ich potrzeb przyniesie wiele radości zarówno właścicielowi, jak i zwierzęciu.',
      date: '2023-06-28',
      image: 'https://picsum.photos/200',
    },
    {
      id: 7,
      title: 'Jak pielęgnować swoją roślinę doniczkową?',
      content: 'Dbanie o rośliny doniczkowe wymaga uwagi i systematyczności. Każda roślina ma swoje specyficzne potrzeby dotyczące światła, wilgotności i podlewania. W artykule omówimy, jakie są podstawowe zasady pielęgnacji roślin doniczkowych, aby mogły rozwijać się zdrowo i pięknie.',
      fullContent: 'Wprowadzenie:\nRośliny doniczkowe stanowią piękną ozdobę każdego domu. Jednak ich odpowiednia pielęgnacja może być wyzwaniem, zwłaszcza dla tych, którzy dopiero zaczynają swoją przygodę z zielenią. Poniżej znajdziesz praktyczne wskazówki, jak dbać o swoje rośliny doniczkowe.\n\n1. **Odpowiednie światło:** Każda roślina ma swoje preferencje dotyczące światła. Niektóre rośliny potrzebują pełnego nasłonecznienia, podczas gdy inne lepiej rosną w miejscach zacienionych. Znajdź dla swoich roślin odpowiednie miejsce w domu, aby zapewnić im odpowiednią ilość światła.\n\n2. **Prawidłowe podlewanie:** Nadmiar wody może prowadzić do gnicie roślin, podczas gdy ich wysuszenie może zaszkodzić korzeniom. Dlatego ważne jest, aby dostosować ilość podlewanej wody do potrzeb danej rośliny. Przed podlaniem sprawdź wilgotność gleby.\n\n3. **Wilgotność powietrza:** Niektóre rośliny doniczkowe preferują wilgotne środowisko. Aby zwiększyć wilgotność, możesz użyć nawilżacza powietrza lub postawić rośliny blisko siebie.\n\n4. **Regularne nawożenie:** Rośliny doniczkowe potrzebują składników odżywczych, które mogą się wyczerpywać w podłożu. Regularne nawożenie pomoże utrzymać ich zdrowie i piękny wygląd.\n\nPodsumowanie:\nDbanie o rośliny doniczkowe to satysfakcjonujące zadanie, które przynosi wiele radości. Zapewniają one nie tylko estetyczny wygląd domu, ale także korzystnie wpływają na klimat w pomieszczeniu. Pamiętaj o indywidualnych potrzebach każdej rośliny i bądź systematyczny w pielęgnacji.',
      date: '2023-05-12',
      image: 'https://picsum.photos/200',
    },
    {
      id: 8,
      title: 'Ptaki domowe: Jak zaopiekować się papugą jako zwierzęciem domowym?',
      content: 'Papugi to inteligentne i kolorowe ptaki, które mogą stać się wspaniałymi towarzyszami domowymi. Jednak aby stworzyć dla nich odpowiednie warunki życia, należy przestrzegać kilku podstawowych zasad. W tym artykule omówimy, jak zaopiekować się papugą jako zwierzęciem domowym.',
      fullContent: 'Wprowadzenie:\nPapugi to nie tylko piękne i kolorowe ptaki, ale także inteligentne stworzenia, które mogą stać się prawdziwymi towarzyszami życia. Zaopiekowanie się papugą jako zwierzęciem domowym wymaga jednak specyficznej wiedzy i uwagi. Poniżej znajdziesz praktyczne wskazówki dotyczące opieki nad papugami.\n\n1. **Wybór odpowiedniego gatunku:** Istnieje wiele różnych gatunków papug, a każdy z nich ma swoje indywidualne potrzeby. Przed zakupem papugi zorientuj się, jakie warunki życia są dla niej najlepsze i czy spełnisz te wymagania.\n\n2. **Zabezpiecz swoje mieszkanie:** Papugi są ciekawe świata i lubią badać swoje otoczenie. Upewnij się, że Twoje mieszkanie jest bezpieczne dla papugi, eliminując potencjalne zagrożenia, takie jak otwarte okna, toksyczne rośliny itp.\n\n3. **Zrównoważona dieta:** Papugi potrzebują zróżnicowanej diety, która obejmuje owoce, warzywa, ziarna i specjalne karmy dla papug. Skonsultuj się z weterynarzem, aby dowiedzieć się, jak zbilansować codzienną dietę swojej papugi.\n\n4. **Wysiłek umysłowy:** Papugi są bardzo inteligentne i potrzebują stymulacji umysłowej. Zabawki edukacyjne, gry i interakcje z właścicielem pomogą utrzymać ich aktywne i zdrowe.\n\nPodsumowanie:\nZaopiekowanie się papugą to nie tylko obowiązek, ale i przyjemność. Zbliżenie się do tych pięknych ptaków i zrozumienie ich potrzeb przyniesie wiele radości zarówno właścicielowi, jak i zwierzęciu.',
      date: '2023-06-28',
      image: 'https://picsum.photos/200',
    },
    // Dodaj więcej postów według potrzeb
  ];
  
  export default mockDatabase;
  