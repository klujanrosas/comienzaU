import {
  SET_ACTIVE_LEVEL,
  SET_ACTIVE_OPTION
} from '../actions/types';

const mockOptions = [
  {
    id: 1,
    parent: -1,
    title: '¿Por qué elegirnos?',
    endBranch: false,
  },
  {
    id: 2,
    parent: 1,
    title: 'Y Esto ¿En qué me beneficia?',
    endBranch: true,
  },
  {
    id: 3,
    parent: -1,
    title: '¿Cómo postular?',
    endBranch: false,
  },
  {
    id: 4,
    parent: 3,
    title: 'Proceso de admisión',
    endBranch: true,
  },
  {
    id: 5,
    parent: 3,
    title: 'Calendario de admisión',
    endBranch: true,
  },
  {
    id: 6,
    parent: 3,
    title: 'Temario para examen de admisión',
    endBranch: false,
  },
  {
    id: 7,
    parent: 6,
    title: 'Conocer más',
    endBranch: false,
  },
  {
    id: 8,
    parent: 7,
    title: 'Razonamiento lógico / matemático',
    endBranch: true,
  },
  {
    id: 9,
    parent: 7,
    title: 'Liderazgo personal/desarrollo de talento',
    endBranch: true,
  },
  {
    id: 10,
    parent: 7,
    title: 'Habilidades interpersonales',
    endBranch: true,
  },
  {
    id: 11,
    parent: 7,
    title: 'Comunicación',
    endBranch: true,
  },
  {
    id: 12,
    parent: 7,
    title: 'Habilidades verbales',
    endBranch: true,
  },
  {
    id: 13,
    parent: 7,
    title: 'Tecnología y herramientas informáticas',
    endBranch: true,
  },
  {
    id: 14,
    parent: 7,
    title: 'Actualidad y realidad nacional/responsabilidad social',
    endBranch: true,
  },
  {
    id: 15,
    parent: 3,
    title: '¿Cómo puedo ingresar a la UPN?',
    endBranch: false,
  },
  {
    id: 16,
    parent: 15,
    title: '¿En qué consiste el ingreso regular?',
    endBranch: true,
  },
  {
    id: 17,
    parent: 15,
    title: '¿En qué consiste el ingreso por traslado externo?',
    endBranch: true,
  },
  {
    id: 18,
    parent: 15,
    title: '¿En qué consiste el ingreso de egresados de ITN-CIBERTEC?',
    endBranch: true,
  },
  {
    id: 19,
    parent: 15,
    title: '¿En qué consiste el ingreso por egresados de otros institutos?',
    endBranch: true,
  },
  {
    id: 20,
    parent: 15,
    title: '¿En qué consiste el ingreso por egresados de otra universidad?',
    endBranch: true,
  },
  {
    id: 21,
    parent: -1,
    title: '¿Existen programas de ayuda económica?',
    endBranch: false,
  },
  {
    id: 22,
    parent: 21,
    title: 'Conocer más',
    endBranch: false,
  },
  {
    id: 23,
    parent: 22,
    title: 'Beca premio de excelencia',
    endBranch: true,
  },
  {
    id: 24,
    parent: 22,
    title: 'UPN a tu alcance ',
    endBranch: true,
  },
  {
    id: 25,
    parent: 22,
    title: 'Pensión hermanos ',
    endBranch: true,
  },
  {
    id: 26,
    parent: -1,
    title: '¿Qué pasa si aún no decido qué estudiar?',
    endBranch: false,
  },
  {
    id: 27,
    parent: 26,
    title: '¿En qué Consiste la orientación vocacional?',
    endBranch: true,
  },
  {
    id: 28,
    parent: 26,
    title: '¿Si ingreso a una carrera, luego me puedo transladar a otra?',
    endBranch: true,
  },
  {
    id: 29,
    parent: 26,
    title: '¿Tienen carreras para adultos que trabajan?',
    endBranch: true,
  },
  {
    id: 30,
    parent: 26,
    title: 'Talleres vivenciales',
    endBranch: false,
  },
  {
    id: 31,
    parent: 30,
    title: '¿Cuándo se realizan?',
    endBranch: true,
  },
  {
    id: 32,
    parent: 30,
    title: '¿Cuánto cuestan?',
    endBranch: true,
  },
  {
    id: 33,
    parent: 30,
    title: '¿Cómo puedo participar?',
    endBranch: true,
  },
  {
    id: 34,
    parent: 30,
    title: '¿Pueden asistir mis padres a los talleres vivenciales?',
    endBranch: true,
  },
  {
    id: 35,
    parent: 30,
    title: '¿Puedo ingresar a más de un taller?',
    endBranch: true,
  },
  {
    id: 36,
    parent: 26,
    title: 'Charlas informativas',
    endBranch: false,
  },
  {
    id: 37,
    parent: 36,
    title: '¿Cuándo se realizan?',
    endBranch: true,
  },
  {
    id: 38,
    parent: 36,
    title: '¿Cuánto cuestan?',
    endBranch: true,
  },
  {
    id: 39,
    parent: 36,
    title: '¿Cómo puedo participar?',
    endBranch: true,
  },
  {
    id: 40,
    parent: 36,
    title: '¿Puedo asistir con mis padres a las charlas?',
    endBranch: true,
  },
  {
    id: 41,
    parent: 36,
    title: '¿Puedo ingresar a más de una charla?',
    endBranch: true,
  }
];

// En el array de arriba se ponen todas las opciones en jerarquia de padre hijo
// Cuando se llegue al "final" de una rama, poner su ID y su contenido a mostrar acá abajo
// en la forma
// {
//    id: ID_DE_LA_ULTIMA_RAMA,
//    content: CONTENIDO_A_MOSTRAR
// }

const mockContent = [
  {
    id: 1,
    content: 'Nuestra propuesta educativa se basa en cuatro pilares: Calidad educativa, Empleabilidad, Accesibilidad, Internacionalidad'
  },
  {
    id: 2,
    content: 'Simple, queremos darte las mejores herramientas para que logres ser dueño de tu destino. Nuestros pilares te impulsarán a que desarrolles todo tu potencial ya que desde el inicio de tu carrera te acompañaremos hasta el día de tu graduación. Formamos parte de la red de universidades privadas más grande del mundo lo que te permitirá tener una visión más global sobre tu profesión y acceder a intercambios en diferentes países con universidades de la red logrando obtener una doble titulación para tu carrera. Tendrás a tu alcance, la mejor tecnología e infraestructura que favorecerá tu aprendizaje, además de herramientas para un mejor desarrollo profesional. Todo esto da como resultado que el 84% de nuestros egresados se encuentre trabajando, y de ellos, el 91% lo hace en la carrera que estudiaron.'
  },
  {
    id: 3,
    content: 'Te convocamos a nuestro proceso de admisión por concurso público para el ciclo académico Pre Grado Tradicional 2018-1.'
  },
  {
    id: 4,
    content: ' '
  },
  {
    id: 5,
    content: ' '
  },
  {
    id: 6,
    content: ' '
  },
  {
    id: 7,
    content: ' '
  },
  {
    id: 8,
    content: ' '
  },
  {
    id: 9,
    content: ' '
  },
  {
    id: 10,
    content: ' '
  },
  {
    id: 11,
    content: ' '
  },
  {
    id: 12,
    content: ' '
  },
  {
    id: 13,
    content: ' '
  },
  {
    id: 14,
    content: ' '
  },
  {
    id: 15,
    content: ' '
  },
  {
    id: 16,
    content: ' '
  },
  {
    id: 17,
    content: ' '
  },
  {
    id: 18,
    content: ' '
  },
  {
    id: 19,
    content: ' '
  },
  {
    id: 20,
    content: ' '
  },
  {
    id: 21,
    content: ' '
  },
  {
    id: 22,
    content: ' '
  },
  {
    id: 23,
    content: ' '
  },
  {
    id: 24,
    content: ' '
  },
  {
    id: 25,
    content: ' '
  },
  {
    id: 26,
    content: ' '
  },
  {
    id: 27,
    content: ' '
  },
  {
    id: 28,
    content: ' '
  },
  {
    id: 29,
    content: ' '
  },
  {
    id: 30,
    content: ' '
  },
  {
    id: 31,
    content: ' '
  },
  {
    id: 32,
    content: ' '
  },
  {
    id: 33,
    content: ' '
  },
  {
    id: 34,
    content: ' '
  },
  {
    id: 35,
    content: ' '
  },
  {
    id: 36,
    content: ' '
  },
  {
    id: 37,
    content: ' '
  },
  {
    id: 38,
    content: ' '
  },
  {
    id: 39,
    content: ' '
  },
  {
    id: 40,
    content: ' '
  },
  {
    id: 41,
    content: ' '
  }
  
  // Como esto está comentado, cuando seleccionemos la opción de SUBREQUISITO-2 nos saldrá un mensaje de que no hay información en vez de crashear
  // {
  //   id: 9007,
  //   content: 'SUBREQUISITO 2 DETALLES'
  // }
];

const INITIAL_STATE = {
  options: mockOptions,
  content: mockContent,
  selectedOption: -1,
  filteredOptions: mockOptions.filter(option => option.parent === -1),
  selectedContent: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case SET_ACTIVE_OPTION:
      const filteredOptions = state.options.filter(option => option.parent === action.optionID);
      return {
        ...state,
        selectedOption: action.optionID,
        filteredOptions,
        selectedContent: filteredOptions.length === 0 ?
          mockContent.filter(content => content.id === action.optionID).length > 0 ?
          mockContent.filter(content => content.id === action.optionID)[0].content :
          'Oops, Parece que no hay información para esta opción.' :
          null
      };
    default:
      return state;
  }
};
