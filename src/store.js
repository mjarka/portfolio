import create from "zustand";

const pl = {
  hello: "Cześć!",
  intro:
    "Jestem Marcin grafik z Warszawy. Chętnie stworzę z Tobą coś wyjątkowego!",
  contactButton: "kontakt",
  howIWorkHeader: "Jak pracuję?",
  howIWork:
    "Chętnie przygotuję dla Ciebie kreację od A do Z. Od konceptu do przygotowania do druku. Mieszam rózne style i techniki dzięki czemu wyróżnisz się na tle konkurencji!",
  myWorksHeader: "Moje prace",
  myWorks:
    "Współpracowałem nad kampaniami dla największych marek. Od pomysłu do wdrożenia. Prócz warsztatu graficznego mogę pomóc Ci w koncepcie Twojej marki.",
  freeTimeHeader: "W wolnym czasie",
  freeTime:
    "Gram na gitarze, tworzę muzykę i uczę się robić takie strony jak ta. ",
  contactHeader: "Kontakt",
  contact: "Jeżeli masz pytania lub chcesz pogadać to napisz do mnie na ",
  mail: "marcinjarka@gmail.com",
  circlek:
    "Zaprojektowanie kampanii Angry Birds od strony graficznej łącznie z przygotowaniem materiałów POS i przygotowaniem do druku",
  logo: "Garść logotypów dla różnych marek. ",
  biedronka:
    "ore they sold ou sothey sothey sold ou old ou old ou sold ou sold out, meditation slow-carb flexitari",
  kaufland:
    " +1 tumblr austin. 3 wolf moon put a bird on it trust fund stumptown authentic synth biodiesel ramps. Tattooed jean shorts iPhone hexagon, cred hell of seitan sartorial knausgaard flannel flexitarian. Chambra",
  maxima:
    "dard, chia squid yuccie. Sustainable fingerstache austin, bespoke next level chia butcher quinoa selfies chartreuse pop-up marfa etsy lomo. B",
  rimi: "Przygotowanie Key Visuala do kampanii KitchenAid dla sieci sklepów RIMI ",
  spar: 'Przygotowanie Key Visuala oraz logotypu do kampanii "Strażnicy świeżości" dla Spar Polska oraz Key Visuala i materiałow POS do kampanii "HeyClay" dla Spar Hungary  ',
  wiko: "Współpraca przy przygotowaniu materiałów social-media oraz materiałów drukowanych",
  netto:
    'Przygotowanie Key Visuala do kampanii "Hey Clay - masa kreatywności" dla sieci sklepów Netto',
  posters:
    "Seria plakatów przygotowana do filmów Davida Finchera oraz abstrakcje 3d. Plakaty przygotowane w różnych stylach- często przy pomocy programu 3d",
};

const en = {
  hello: "Hi!",
  intro: "My name is Marcin. I will kindly create something unique for you",
  contactButton: "contact",
  howIWorkHeader: "How I work?",
  howIWork:
    "I will be happy to prepare for you a creation from A to Z. From concept to print preparation. I mix different styles and techniques so that you stand out from the competition!",
  myWorksHeader: "My works",
  myWorks:
    "I have worked on campaigns for major brands. From idea to implementation. Apart from graphic design workshop I can help you with the concept of your brand.",
  contactHeader: "Contact",
  contact: "If you have questions or want to chat, email me at ",
  mail: "marcinjarka@gmail.com",
  freeTimeHeader: "In my free time",
  freeTime:
    "I play guitar, make music, and learn to make websites like this one. ",
  circlek:
    "godustainable fingerstachustainable fingerstachard, chia squid yuccie. Sustainable fingerstache austin, bespoke next level chia butcher quinoa selfies chartreuse pop-up marfa etsy lomo.",
  logo: "Bunch of logotypes for various brands",
  biedronka:
    "uthentic synth biodiesel ramps. Tattooed jean shorts iPhone hexagon, cred hell of seitan sartorial knausgaard flannel flexitarian. Chambray cr",
  kaufland:
    "J jianbing chicharrones kinfolk, cornhole +1. Tousled franzen intellig",
  maxima:
    "Jade tilde vegan food truck man bun next level portland tattooed retro flezwoń",
  rimi: "godard, chia squid yuccie. Sustainable fingerstache austin, bespoke next level chia butcher quinoa selfies chartreuse pop-up marfa etsy lomo.",
  spar: "uthentic synth biodiesel ramps. Tattooed jean shorts iPhone hexagon, cred hell of seitan sartorial knausgaard flannel flexitarian. Chambray cr",
  wiko: "J jianbing chicharrones kinfolk, cornhole +1. Tousled franzen intellig",
  netto:
    "Jade tilde vegan food truck man bun next level portland tattooed retro flezwoń",
  posters:
    "Jade tilde vegan food truck man bun next level portland tattooed retro flezwoń",
};

const useStore = create((set, get) => ({
  // what 3d hand animation to display
  index: 2,

  // is polish language selected?
  isPl: true,

  // language for copy
  strings: pl,

  // prevent animation
  immediate: false,
  // bool for TV if it's shown or not
  showTv: false,

  // show current KV in portfolio section
  kv: "circlek",

  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  changeLanguage: () =>
    get().isPl
      ? set({ strings: en, isPl: false })
      : set({ strings: pl, isPl: true }),
}));

export default useStore;
