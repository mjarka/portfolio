import create from "zustand";

const pl = {
  hello: "Cześć!",
  intro:
    "Jestem Marcin grafik z Warszawy. Chętnie stworzę z Tobą coś wyjątkowego!",
  contact: "kontakt",
  howIWorkHeader: "Jak pracuję?",
  howIWork:
    "Chętnie przygotuję dla Ciebie kreację od A do Z. Od konceptu do przygotowania do druku. Mieszam rózne style i techniki dzięki czemu wyróżnisz się na tle konkurencji!",
  myWorksHeader: "Moje prace",
  myWorks:
    "Współpracowałem nad kampaniami dla największych marek. Od pomysłu do wdrożenia. Prócz warsztatu graficznego mogę pomóc Ci w koncepcie Twojej marki.",
};
const en = {
  hello: "Hi!",
  intro: "My name is Marcin. I will kindly create something unique for you",
  contact: "contact",
  howIWorkHeader: "How I work?",
  howIWork:
    "I will be happy to prepare for you a creation from A to Z. From concept to print preparation. I mix different styles and techniques so that you stand out from the competition!",
  myWorksHeader: "My works",
  myWorks:
    "I have worked on campaigns for major brands. From idea to implementation. Apart from graphic design workshop I can help you with the concept of your brand.",
};

const useStore = create((set, get) => ({
  // what 3d hand animation to display
  index: 0,

  // is polish language selected?
  isPl: true,

  // language for copy
  strings: pl,

  // bool for TV if it's shown or not
  showTv: true,

  // show current KV in portfolio section
  kv: "biedronka",

  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  changeLanguage: () =>
    get().isPl
      ? set({ strings: en, isPl: false })
      : set({ strings: pl, isPl: true }),
}));

export default useStore;
