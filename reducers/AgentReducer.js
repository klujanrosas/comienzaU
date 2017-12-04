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
  },
  {
    id: 42,
    parent: -1,
    title: 'Carreras',
    endBranch: false,
  },
  {
    id: 43,
    parent: 42,
    title: 'Ingeniería de sistemas computacionales',
    endBranch: false,
  },
  {
    id: 44,
    parent: 43,
    title: 'Misión',
    endBranch: true,
  },
  {
    id: 45,
    parent: 43,
    title: 'Perfil del egresado',
    endBranch: true,
  },
  {
    id: 46,
    parent: 43,
    title: 'Malla',
    endBranch: false,
  },
  // Curso desde el 50 para no confundirme XD 
  {
    id: 50,
    parent: 46,
    title: 'Ciclo 1',
    endBranch: false,
  },
  {
    id: 51,
    parent: 50,
    title: 'Desarrollo del Talento',
    endBranch: true,
  },
  {
    id: 52,
    parent: 50,
    title: 'Complementos de Matemática',
    endBranch: true,
  },
  {
    id: 53,
    parent: 50,
    title: 'Introducción a la Ingeniería de Sistemas Computacionales',
    endBranch: true,
  },
  {
    id: 54,
    parent: 50,
    title: 'Responsabilidad Social',
    endBranch: true,
  },
  {
    id: 55,
    parent: 50,
    title: 'Psicología de la Felicidad',
    endBranch: true,
  },
  {
    id: 56,
    parent: 50,
    title: 'Comunicación 1',
    endBranch: true,
  },
  {
    id: 57,
    parent: 46,
    title: 'Ciclo 2',
    endBranch: false,
  },
  {
    id: 58,
    parent: 57,
    title: 'Matemática Básica',
    endBranch: true,
  },
  {
    id: 59,
    parent: 57,
    title: 'Fundamentos de Algoritmos',
    endBranch: true,
  },
  {
    id: 60,
    parent: 57,
    title: 'Metodología Universitaria',
    endBranch: true,
  },
  {
    id: 61,
    parent: 57,
    title: 'Herramientas Informáticas',
    endBranch: true,
  },
  {
    id: 62,
    parent: 57,
    title: 'Comunicación 2',
    endBranch: true,
  },
  {
    id: 63,
    parent: 46,
    title: 'Ciclo 3',
    endBranch: false,
  },
  {
    id: 64,
    parent: 63,
    title: 'Cálculo 1',
    endBranch: true,
  },
  {
    id: 65,
    parent: 63,
    title: 'Fundamentos de Programación',
    endBranch: true,
  },
  {
    id: 66,
    parent: 63,
    title: 'Matemática Discreta',
    endBranch: true,
  },
  {
    id: 67,
    parent: 63,
    title: 'Mecánica, Oscilación y Ondas',
    endBranch: true,
  },
  {
    id: 68,
    parent: 63,
    title: 'Comunicación 3',
    endBranch: true,
  },
  {
    id: 69,
    parent: 46,
    title: 'Ciclo 4',
    endBranch: false,
  },
  {
    id: 70,
    parent: 69,
    title: 'Estructura de Datos',
    endBranch: false,
  },
  {
    id: 71,
    parent: 69,
    title: 'Cálculo 2',
    endBranch: false,
  },
  {
    id: 72,
    parent: 69,
    title: 'Probabilidad y Estadística',
    endBranch: false,
  },
  {
    id: 73,
    parent: 69,
    title: 'Optimización y Simulación',
    endBranch: false,
  },
  {
    id: 74,
    parent: 69,
    title: 'Electricidad, Magnetismo y Óptica',
    endBranch: false,
  },
  {
    id: 75,
    parent: 46,
    title: 'Ciclo 5',
    endBranch: false,
  },
  {
    id: 76,
    parent: 75,
    title: 'Técnicas de Programación Orientada a Objetos',
    endBranch: false,
  },
  {
    id: 77,
    parent: 75,
    title: 'Base de Datos',
    endBranch: false,
  },
  {
    id: 78,
    parent: 75,
    title: 'Electrónica Digital',
    endBranch: false,
  },
  {
    id: 79,
    parent: 75,
    title: 'Empleabilidad',
    endBranch: false,
  },
  {
    id: 80,
    parent: 75,
    title: 'Análisis de Algoritmos y Estrategias de Programación',
    endBranch: false,
  },
  {
    id: 81,
    parent: 46,
    title: 'Ciclo 6',
    endBranch: false,
  },
  {
    id: 82,
    parent: 81,
    title: 'Taller de Base de Datos',
    endBranch: false,
  },
  {
    id: 83,
    parent: 81,
    title: 'Metodología de la Investigación',
    endBranch: false,
  },
  {
    id: 84,
    parent: 81,
    title: 'Inglés Básico 1',
    endBranch: false,
  },
  {
    id: 85,
    parent: 81,
    title: 'Modelamiento y Análisis de Software',
    endBranch: false,
  },
  {
    id: 86,
    parent: 81,
    title: 'Computación Gráfica y Visual',
    endBranch: false,
  },
  {
    id: 87,
    parent: 81,
    title: 'Arquitectura de Computadoras',
    endBranch: false,
  },
  {
    id: 88,
    parent: 46,
    title: 'Ciclo 7',
    endBranch: false,
  },
  {
    id: 89,
    parent: 88,
    title: 'Sistemas Operativos',
    endBranch: false,
  },
  {
    id: 90,
    parent: 88,
    title: 'Inglés Básico 2',
    endBranch: false,
  },
  {
    id: 91,
    parent: 88,
    title: 'Compiladores y Lenguaje de Programación',
    endBranch: false,
  },
  {
    id: 92,
    parent: 88,
    title: 'Proyecto Social',
    endBranch: false,
  },
  {
    id: 93,
    parent: 88,
    title: 'Redes 1',
    endBranch: false,
  },
  {
    id: 94,
    parent: 88,
    title: 'Diseño y Arquitectura de Software',
    endBranch: false,
  },
  {
    id: 95,
    parent: 46,
    title: 'Ciclo 8',
    endBranch: false,
  },
  {
    id: 96,
    parent: 95,
    title: 'Soluciones Web y Aplicaciones Distribuidas',
    endBranch: false,
  },
  {
    id: 97,
    parent: 95,
    title: 'Redes 2',
    endBranch: false,
  },
  {
    id: 98,
    parent: 95,
    title: 'Calidad y Pruebas de Software',
    endBranch: false,
  },
  {
    id: 99,
    parent: 95,
    title: 'Práctica Preprofesional',
    endBranch: false,
  },
  {
    id: 100,
    parent: 95,
    title: 'Taller de Robótica',
    endBranch: false,
  },
  {
    id: 101,
    parent: 46,
    title: 'Ciclo 9',
    endBranch: false,
  },
  {
    id: 102,
    parent: 101,
    title: 'Videojuegos y Aplicaciones Móviles',
    endBranch: false,
  },
  {
    id: 103,
    parent: 101,
    title: 'Proyecto de Tesis',
    endBranch: false,
  },
  {
    id: 104,
    parent: 101,
    title: 'Electivo de Especialidad 1',
    endBranch: false,
  },
  {
    id: 105,
    parent: 101,
    title: 'Innovación, Tecnología y Emprendimiento',
    endBranch: false,
  },
  {
    id: 106,
    parent: 101,
    title: 'Administración de Proyectos de Software',
    endBranch: false,
  },
  {
    id: 107,
    parent: 46,
    title: 'Ciclo 10',
    endBranch: false,
  },
  {
    id: 108,
    parent: 107,
    title: 'Sistemas Inteligentes',
    endBranch: false,
  },
  {
    id: 109,
    parent: 107,
    title: 'Tesis',
    endBranch: false,
  },
  {
    id: 110,
    parent: 107,
    title: 'Gestión y Planeamiento',
    endBranch: false,
  },
  {
    id: 111,
    parent: 107,
    title: 'Electivo de Especialidad 2',
    endBranch: false,
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
    id: 5,
    content: 'Nuestro proceso de admisión se apertura dos veces al año. Estamos actualizando el calendario '
  },
  {
    id: 6,
    content: 'Las preguntas del examen de admisión se orientan a evaluar tus capacidades y habilidades personales como postulante'
  },
  {
    id: 7,
    content: ' '
  },
  {
    id: 8,
    content: '  Lógica: proposiciones, inferencias. Razonamiento inductivo, razonamiento deductivo. Aritmética: proporciones, porcentajes, intereses.  Álgebra: expresiones algebraicas, factorización, ecuaciones. Geometría: geometría plana. '
  },
  {
    id: 9,
    content: 'Autoconocimiento. Nociones básicas de motivación, aprendizaje y control emocional. Eficacia personal. '
  },
  {
    id: 10,
    content: ' Conceptos básicos de sociedad y ciudadanía. Autoestima y satisfacción personal.'
  },
  {
    id: 11,
    content: 'Situación comunicativa. Corrección idiomática. Comprensión de textos. Gramática. '
  },
  {
    id: 12,
    content: 'Sinonimia contextual. Antonimia contextual. Conectores lógicos. Analogías.'
  },
  {
    id: 13,
    content: ' Conceptos de tecnología a nivel usuario. Uso de sistema operativo y ofimática básica.'
  },
  {
    id: 14,
    content: ' Geografía del Perú y Latino América. Historia del Perú. Historia contemporánea reciente. Educación cívica. Nociones básicas de responsabilidad social.'
  },
  {
    id: 15,
    content: ' Podrás ingresar a nuestra universidad a través de las siguientes modalidades: 1. Ingreso regular. 2. Si quieres trasladarte desde otra universidad. 3. Si eres egresado de ITN-Cibertec (Solo en Trujillo). 4. Si eres egresado de un Instituto. 5. Si eres egresado de otra universidad.'
  },
  {
    id: 16,
    content: 'Puedes ingresar bajo esta modalidad si eres egresado de colegio nacional, particular y no escolarizados del Perú y del extranjero. Para esto deberás presentar la documentación requerida y cumplir los siguientes requisitos:Certificado original de estudios secundarios, Copia de DNI o partida de nacimiento original provisional.'
  },
  {
    id: 17,
    content: 'Si procedes de otra universidad de nuestro país (nacional o privada) y/o extranjera, deberás haber cursado como mínimo un ciclo en la universidad de procedencia. Para aplicar los requisitos son: Certificado original de estudios superiores, Copia de DNI, Silabus visados por el Area Academica de la Universidad de origen, Constancia de no haber sido separado de la Universidad.'
  },
  {
    id: 18,
    content: 'Si eres egresado del ITN-Cibertec (Trujillo), puedes ingresar por esta modalidad, siguiendo el proceso de convalidación de acuerdo al plan de estudios vigente. Los requisitos son: Certificado original de estudios técnicos, Copia de DNI, Silabus visados por el Area Academica del Instituto de origen, Copia legalizada del título técnico. '
  },
  {
    id: 19,
    content: 'Si eres egresado de algún instituto de educación superior y haz concluido tus estudios técnicos (Tres años como mínimo), puedes ingresar y convalidar según evaluación de cada facultad. Los requisitos son: Certificado original de estudios técnicos, Copia de DNI, Silabus visados por el Area Academica del Instituto de origen, Copia legalizada del título técnico.'
  },
  {
    id: 20,
    content: 'Ingresan por esta modalidad los egresados de otras universidades con el grado de bachiller. Los requisitos son: Certificado original de estudios técnicos. Copia de DNI. Silabus visados por el Area Académica de la universidad de origen. Copia legalizada del diploma de bachiller.'
  },
  {
    id: 21,
    content: 'Sí, contamos con programas de ayuda económica enfocados en el bienestar académico de nuestros estudiantes.'
  },
  {
    id: 22,
    content: ' '
  },
  {
    id: 23,
    content: 'Calificas a esta beca si eres postulante de la modalidad Ingreso Premio de Excelencia y ocupas los primeros puestos en la evaluación para Premio de Excelencia, de acuerdo a las vacantes predefinidas para cada campaña. Los requisitos que debes cumplir son: Ocupar el primer puesto en la etapa escolar, habiendo egresado del colegio con una antigüedad no mayor a dos años. Rendir la evaluación especial para Premio de Excelencia y obtener una calificación que lo ubique dentro de los cupos asignados a cada campaña. '  
  },
  {
    id: 24,
    content: 'Es un beneficio del 10% sobre la pensión académica que te otorgamos si cumples con los siguientes requisitos: Pertenecer a un colegio nacional (de distritos donde el estado desarrolla programas sociales). Deberás tener una nota mínima de 15 en tu promedio de 1ro a 5to de secundaria. En caso estés en 5to de secundaria y todavía no dispongas de tus notas finales, puedes usar el promedio de 1ro a 4to de secundaria. En caso seas egresado, se requiere el promedio de 1ro a 5to de secundaria. Este beneficio alcanza a los egresados de estos colegios de cualquier año. Para mantener este beneficio, debes obtener una nota mínima de 14 cada ciclo.'
  },
  {
    id: 25,
    content: 'Si tienes un hermano que estudia en UPN, contarás con el descuento de Pensión Hermanos, servicio que brindamos cuando los beneficiarios son estudiantes nuevos o regulares del programa Pre-Grado Tradicional. Este descuento deberá ser solicitado después del registro de cursos durante el periodo de matrícula. '
  },
  {
    id: 26,
    content: 'Si todavía no decides que estudiar, te ayudamos a despejar tus dudas a través del servicio de orientación vocacional. A través de diversas evaluaciones podrás identificar cuáles son tus preferencias académicas que te permitirán elegir de forma adecuada tu carrera.'
  },
  {
    id: 27,
    content: 'Para poder orientarte necesitamos seguir cuatro pasos específicos: Evaluación. Entrevista personal. Coordinaremos una visita guiada. Retroalimentación.'
  },
  {
    id: 28,
    content: ' Si sientes que la carrera que elegiste no es lo tuyo, no te preocupes, te ayudaremos a encontrar la correcta.'
  },
  {
    id: 29,
    content: ' Así es, Working Adult es el programa de carreras universitarias para adultos que trabajan, recuerda que solo aplicas a este programa si eres mayor de 24 años, con experiencia laboral comprobada.'
  },
  {
    id: 30,
    content: ' Experimenta tu profesión con nuestros talleres vivenciales, donde conocerás de cerca cómo se desarrollan los profesionales de la carrera que tienes en mente. A través de las diversas actividades que tenemos preparadas para ti, vivirás tu primera experiencia académica.'
  },
  {
    id: 31,
    content: ' A lo largo del año académico programamos diversos talleres vivenciales, lo cuales comunicamos oportunamente a través de nuestra web.'
  },
  {
    id: 32,
    content: ' Nuestros talleres vivenciales no tienen costo. '
  },
  {
    id: 33,
    content: ' Puedes indicarnos tu interés de participar, a través de nuestros formularios. Nosotros nos comunicaremos contigo.'
  },
  {
    id: 34,
    content: ' Claro, puedes asistir con tus padres.'
  },
  {
    id: 35,
    content: ' Sí, pero debes inscribirte previamente. '
  },
  {
    id: 36,
    content: ' A través de nuestras charlas informativas queremos explicarte por qué somos tu mejor opción en educación superior. Te invitamos a que nos visites en nuestros diferentes campus, y así, conozcas nuestra historia, modelo educativo, competencias y ventajas diferenciales.'
  },
  {
    id: 37,
    content: ' A lo largo del año académico programamos diversas charlas informativas, las cuales comunicamos oportunamente a través de nuestra web.'
  },
  {
    id: 38,
    content: ' Nuestras charlas informativas no tienen costo.'
  },
  {
    id: 39,
    content: ' Puedes indicarnos tu interés de participar, a través de nuestros formularios. Nosotros nos comunicaremos contigo. '
  },
  {
    id: 40,
    content: ' Claro, puedes asistir con tus padres.'
  },
  {
    id: 41,
    content: ' Sí, pero debes inscribirte previamente'
  },
  {
    id: 42,
    content: ' '
  },
  {
    id: 43,
    content:''
  },
  {
    id: 44,
    content: ' Formamos profesionales líderes e innovadores que producen soluciones y mejoras en los procesos de las organizaciones, con sólida formación en los principios de ingeniería de software, ciencias de la computación, ingeniería de software y tecnologías de información. Con contacto internacional, visión global y empresarial, guiados por un sentido ético, vocación de servicio, así como una constante orientación al logro para generar progreso y desarrollo sostenible para la sociedad y para sí mismos.'
  },
  {
    id: 45,
    content: 'Serás un agente de cambio que aplica sus conocimientos y habilidades en la creación de soluciones y mejoras en las organizaciones.Participarás exitosamente, de manera individual o en equipo, en el desarrollo y/o mantenimiento de soluciones de software para la industria (negocios propios o de terceros), mediante la integración de procesos, tecnologías de la información y personas, basándose en normas y estándares propios del área. Serás un ciudadano comprometido con el desarrollo social y económico de tu comunidad, que respeta a las personas y su medio ambiente y toma decisiones éticas.Te mantendrás actualizado continuamente en tu desarrollo profesional, mediante estudios de especialización y postgrado.'
  },
  {
    id: 46,
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
        // eslint-disable-next-line no-nested-ternary
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
