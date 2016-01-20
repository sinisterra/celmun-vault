(function() {
  'use strict';

  angular
    .module('celmunSite')
    .controller('SingleCommitteeController', SingleCommitteeController);

  /* @ngInject */
  function SingleCommitteeController($stateParams) {
    var vm = this;

    activate();

    ////////////////

    function activate() {

      var selected = $stateParams.id.toLowerCase();

      vm.code = selected;

      var committeeData = {
        unodc:{
          code: 'unodc',
          lang: 'es',
          colors: {
            primary: '#00BCD4',
            text: '#ffffff'
          },
          name: 'Oficina de las Naciones Unidas Contra las Drogas y el Crimen',
          p: 'Jésica Perez Plancarte',
          m: 'Cecilia Pérez Plancarte e Hilda Melissa González Sosa',
          oc: 'Iván Gutiérrez Arias',
          titles: {
            p: 'Presidente',
            m: 'Moderadoras',
            oc: 'Oficial de Conferencias',
            a: 'Tópico A',
            b: 'Tópico B',
            chair: 'Mesa'
          },
          topics: {
            a: 'Protección de la flora y fauna del crimen forestal.',
            b: 'Medidas para la prevención y detención del tráfico ilegal de migrantes.'
          },
          about:'La UNODC tiene el mandato de ayudar a los Estados miembros en su lucha contra las drogas ilícitas, la delincuencia y el terrorismo. En la Declaración del Milenio, los Estados miembros decidieron intensificar los esfuerzos para luchar contra la delincuencia transnacional en todas sus dimensiones, a redoblar sus esfuerzos para aplicar el compromiso de luchar contra el problema mundial de las drogas y adoptar medidas concertadas contra el terrorismo internacional.'
        },
        interpol:{
          code: 'interpol',
          lang: 'es',
          colors: {
            primary: '#900020',
            text: '#ffffff'
          },
          name: 'Policía Internacional',
          p: 'Monserrat Loera Gernica',
          m: 'Víctor Hugo Martínez Ramírez y Nancy Alejandra Martínez Benítez',
          oc: 'Francisco Xavier Hernández Carrillo',
          titles: {
            p: 'Presidente',
            m: 'Moderadores',
            oc: 'Oficial de Conferencias',
            a: 'Tópico A',
            b: 'Tópico B',
            chair: 'Mesa'
          },
          topics: {
            a: 'Trata de personas en África y Medio Oriente',
            b: 'Crímenes contra la infancia'
          },
          about:'En INTERPOL, el objetivo principal es facilitar la cooperación policial internacional, aun cuando no existan relaciones diplomáticas entre determinados países, y actúa dentro de los límites impuestos por las legislaciones vigentes en los diferentes Estados y de conformidad con el espíritu de la Declaración Universal de Derechos Humanos. Asimismo, el Estatuto de la organización prohíbe "toda actividad o intervención en cuestiones o asuntos de carácter político, militar, religioso o racial".'
        },
        oms:{
          code: 'oms',
          lang: 'es',
          colors: {
            primary: '#9E9E9E',
            text: '#ffffff'
          },
          name: 'Organización Mundial de la Salud',
          p: 'Alejandro Hernández Sánchez',
          m: 'María Bernardette Olvera Moreno y Jaffet Villar Pérez',
          oc: 'Valeria Vázquez Flores',
          titles: {
            p: 'Presidente',
            m: 'Moderadores',
            oc: 'Oficial de Conferencias',
            a: 'Tópico A',
            b: 'Tópico B',
            chair: 'Mesa'
          },
          topics: {
            a: 'Aplicación de las ideas transhumanistas en la medicina moderna',
            b: 'Medidas de prevención del crecimiento demográfico desmesurado'
          },
          about:'La OMS inició su andadura al entrar en vigor su Constitución el 7 de abril de 1948 –fecha en la que celebramos cada año el Día Mundial de la Salud. Actualmente somos más de 7000 personas trabajando en 150 oficinas de país, seis oficinas regionales y la Sede de Ginebra. La OMS la autoridad directiva y coordinadora en asuntos de sanidad internacional en el sistema de las Naciones Unidas.'
        },
        unhrc:{
          code: 'unhrc',
          lang: 'en',
          colors: {
            primary: '#4CAF50',
            text: '#ffffff'
          },
          name: 'United Nations Human Rights Council',
          p: 'Adriana Ramírez Cervantes',
          m: 'Sofía Velasco Saucedo',
          oc: 'David Barrera',
          titles: {
            p: 'President',
            m: 'Moderator',
            oc: 'Conference Officer',
            a: 'Topic A',
            b: 'Topic B',
            chair: 'Chair'
          },
          topics: {
            a: 'Accelerating efforts to eliminate all forms of domestic violence',
            b: 'The protection of people with mental illness and the  improvement of mental health care'
          },
          about:'The Human Rights Council is an inter-governmental body within the United Nations system responsible for strengthening the promotion and protection of human rights around the globe and for addressing situations of human rights violations and make recommendations on them. It has the ability to discuss all thematic human rights issues and situations that require its attention throughout the year. It meets at the UN Office at Geneva.'
        },
        unesco:{
          code: 'unesco',
          lang: 'es',
          colors: {
            primary: '#FF5722',
            text: '#ffffff'
          },
          name: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura',
          p: 'Sebastián Elizalde',
          m: 'Diego Samperio Vega',
          oc: 'Leonardo Olaf Aguirre Castañeda',
          titles: {
            p: 'Presidente',
            m: 'Moderador',
            oc: 'Oficial de Conferencias',
            a: 'Tópico A',
            b: 'Tópico B',
            chair: 'Mesa'
          },
          topics: {
            a: 'Medidas de protección y restauración de sitios arqueológicos y culturales en Medio Oriente ante la amenaza del Estado Islámico',
            b: 'Garantización de la libertad de prensa y expresión en países con altos índices de violencia hacia periodistas'
          },
          about:'La UNESCO obra por crear condiciones propicias para un diálogo entre las civilizaciones, las culturas y los pueblos fundado en el respeto de los valores comunes. Es por medio de este diálogo como el mundo podrá forjar concepciones de un desarrollo sostenible que suponga la observancia de los derechos humanos, el respeto mutuo y la reducción de la pobreza, objetivos que se encuentran en el centro mismo de la misión y las actividades de la UNESCO. '
        }

      }

      vm.com = committeeData[selected];


    }
  }
})();
