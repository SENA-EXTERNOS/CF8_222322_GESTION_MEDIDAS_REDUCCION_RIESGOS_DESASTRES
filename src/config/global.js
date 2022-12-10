export default {
  global: {
    componenteFormativo:
      'Gestión y medidas de reducción de riesgos de desastres',
    descripcionCurso:
      'En el presente componente formativo podrá conocer los instrumentos de planificación a nivel nacional que promueven acciones de prevención de acuerdo con la normativa legal vigente. Así mismo, podrá explorar las metodologías existentes para conocer, evaluar e intervenir los riesgos desde el conocimiento, la priorización de escenarios y las medidas de reducción de riesgo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-casa1.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-decorativo1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/img-banner-rayos.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/img-decorativa3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Instrumentos de planificación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Escenarios de riesgo',
        desarrolloContenidos: true,
        //subMenu: [
        //  {
        //    icono: 'far fa-file-alt',
        //    numero: '',
        //    titulo: 'Metodologías de caracterización y priorización',
        //    hash: 'metodologias-de-caracterizacion-y-priorizacion',
        //  },
        //],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medidas de reducción de riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Medidas correctivas',
            hash: 'medidas-correctivas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medidas prospectivas',
            hash: 'medidas-prospectivas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Medidas estructurales y no estructurales',
            hash: 'medidas-estructurales-y-no-estructurales',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2017). Terminología sobre Gestión del Riesgo de Desastres y Fenómenos Amenazantes. Bogotá D. C, Colombia. Recuperado el 4 de octubre de 2022, de ',
      tipo: 'Documento',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20761/Terminologia-GRD-2017.pdf;jsessionid=8B86BED51E7788313C041E5627754C14?sequence=2',
    },
    {
      tema: 'Instrumentos de planificación',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (8 de octubre de 2020). La GRD en los instrumentos de planificación. Bogotá D. C, Colombia. Recuperado el 4 de octubre de 2022, de ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=dTkHCWyhqtw',
    },
    {
      tema: 'Instrumentos de planificación',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2019). Política Nacional de Gestión del Riesgo de Desastres - IDIGER. Bogotá D. C, Colombia. Recuperado el 5 de octubre de ',
      tipo: 'Documento',
      link:
        'https://www.idiger.gov.co/documents/124190/452620/UNGRD.pdf/da3d1282-d547-4701-bb53-26bb1944bf83',
    },
    {
      tema: 'Escenarios de riesgo',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2021). Guía Metodológica para la formulación y actualización de Planes Municipales de Gestión del Riesgo de Desastres - PMGRD. Bogotá D. C, Colombia. Recuperado el 7 de octubre de 2022, de ',
      tipo: 'Documento',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/32750/Guia_Formulacion_Actulizacion_PMGRD.pdf?sequence=5&isAllowed=y',
    },
    {
      tema: 'Metodologías de caracterización y priorización',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) & Programa de Naciones Unidas para el Desarrollo Colombia (PNUD). (2017). Guía Metodológica para la elaboración de Planes Departamentales para la Gestión del Riesgo. Bogotá D. C, Colombia. Recuperado el 8 de octubre de ',
      tipo: 'Documento',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20871/Guia_elaboracion_plan_departamental_gestion_del_riesgo.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Metodologías de caracterización y priorización',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2021). Marco Estratégico UNGRD 2018 – 2022 y capacidades mínimas territoriales. Bogotá D. C, Colombia. Recuperado el 8 de octubre de ',
      tipo: 'Página WEB',
      link: 'http://portal.gestiondelriesgo.gov.co/marcoestrategico/index.html',
    },
  ],

  glosario: [
    {
      termino: 'Comunicación del riesgo',
      significado:
        'proceso constante y transversal que se realiza para proveer, compartir y obtener información y comprometer a la comunidad, las instituciones y el sector privado en la gestión del riesgo de desastres.',
    },
    {
      termino: 'Control de riesgos',
      significado:
        'prevención de accidentes mediante el uso de técnicas y tecnologías apropiadas para desarrollar la identificación y eliminación de peligros de una instalación antes de la ocurrencia de un evento.',
    },
    {
      termino: 'Escenario de riesgo',
      significado:
        'fragmentos o campos delimitados de las condiciones de riesgo del territorio presentes o futuras que facilitan, tanto la comprensión y priorización de los problemas, como la formulación y ejecución de las acciones de intervención requeridas.',
    },
    {
      termino: 'Instrumentos de planificación',
      significado:
        'permiten adelantar un ordenamiento del territorio tendiente a un manejo eficaz y eficiente del riesgo a través de la asignación de normas específicas en relación con el uso del suelo, la intensidad de dicho uso y las condiciones específicas de infraestructura.',
    },
    {
      termino: 'Intervención',
      significado:
        'corresponde al tratamiento del riesgo mediante la modificación intencional de las características de un fenómeno con el fin de reducir la amenaza que representa o de modificar las características intrínsecas de un elemento expuesto para reducir su vulnerabilidad.',
    },
    {
      termino: 'Medidas correctivas',
      significado:
        'acciones cuyo objetivo es reducir el nivel de riesgo existente en la sociedad a través de acciones de mitigación en el sentido de disminuir o reducir las condiciones de amenaza, cuando sea posible, y la vulnerabilidad de los elementos expuestos.',
    },
    {
      termino: 'Medidas estructurales',
      significado:
        'cualquier construcción física para reducir o evitar los posibles impactos de las amenazas, o la aplicación de técnicas de ingeniería para lograr la resistencia y la resiliencia de las estructuras o de los sistemas frente a las amenazas.',
    },
    {
      termino: 'Medidas no estructurales',
      significado:
        'cualquier medida que no suponga una construcción física y que utiliza el conocimiento, las prácticas o los acuerdos existentes para reducir el riesgo y sus impactos, especialmente a través de políticas y leyes, una mayor concientización pública, la capacitación y la educación.',
    },
    {
      termino: 'Medidas prospectivas',
      significado:
        'acciones cuyo objetivo último es evitar nuevos riesgos y la necesidad de intervenciones correctivas en el futuro.',
    },
    {
      termino: 'Seguridad territorial',
      significado:
        'se refiere a la sostenibilidad de las relaciones entre la dinámica de la naturaleza y la dinámica de las comunidades en un territorio en particular. Este concepto incluye las nociones de seguridad alimentaria, seguridad jurídica o institucional, seguridad económica, seguridad ecológica y seguridad social.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro Nacional de Estimación, Prevención y Reducción del Riesgo de Desastres (CENEPRED). (2022). <em>Escenario de riesgo.</em> Lima D. C, Perú. Recuperado el 7 de octubre de 2022, de',
      link: 'https://www.cenepred.gob.pe/web/escenario-riesgos/',
    },
    {
      referencia:
        'Departamento Administrativo del Sistema de Prevención, Atención y Recuperación de Desastres en Antioquia - DAPARD. (2015). <em>Plan departamental para la gestión del riesgo de desastres.</em> Antioquia, Colombia. Recuperado el 8 de octubre de 2022, de ',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20839/PDGRD-Antioquia.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2022). Actualización Plan Nacional de Gestión del Riesgo 2015 - 2030. Bogotá D. C, Colombia. Recuperado el 5 de octubre de 2022, de',
      link:
        'https://portal.gestiondelriesgo.gov.co/Paginas/Plan-Nacional-de-Gestion-del-Riesgo.aspx',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2018). <em>Articulación de instrumentos de planificación para la gestión del riesgo de desastres.</em> Bogotá D. C, Recuperado el 6 de octubre de 2022, de',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20713/Articulacio%cc%81n_Instrumentos_Planificacio%cc%81n2018.pdf?sequence=14&isAllowed=y',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2019). <em>Estructura del ​Sistema Nacional de Gestión del Riesgo de Desastres.</em> Bogotá D. C, Colombia. Recuperado el 4 de octubre de 2022, de',
      link: 'https://portal.gestiondelriesgo.gov.co/Paginas/Estructura.aspx',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) & Programa de Naciones Unidas para el Desarrollo Colombia (PNUD). (2014). <em>Guía metodológica para la elaboración de planes departamentales para la gestión del riesgo.</em> Bogotá D. C, Colombia. Recuperado el 8 de octubre de ',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20871/Guia_elaboracion_plan_departamental_gestion_del_riesgo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2021). <em>Guía metodológica para la formulación y actualización de planes municipales de gestión del riesgo de desastres - PMGRD</em>. Bogotá D. C, Colombia. Recuperado el 7 de octubre de 2022, de ',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/32750/Guia_Formulacion_Actulizacion_PMGRD.pdf?sequence=5&isAllowed=y',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2019). <em>Guía para la formulación de proyectos de intervención correctiva.</em> Bogotá D. C, Colombia. Recuperado el 9 de octubre de 2022, de ',
      link:
        'http://portal.gestiondelriesgo.gov.co/Documents/Reduccion/Guia_proyectos_de_intervencion_correctiva.pdf',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2021). <em>Marco estratégico UNGRD 2018 – 2022 y capacidades mínimas territoriales.</em> Bogotá D. C, Colombia. Recuperado el 8 de octubre de',
      link: 'http://portal.gestiondelriesgo.gov.co/marcoestrategico/index.html',
    },

    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2022). <em>Subdirección para la reducción del riesgo.</em> Bogotá D. C, Colombia. Recuperado el 10 de octubre de 2022, de',
      link:
        'https://portal.gestiondelriesgo.gov.co/Paginas/Reduccion-Riesgo-Desastres.aspx',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (8 de octubre de 2020). <em>La GRD en los instrumentos de planificación.</em> Bogotá D. C, Colombia. Recuperado el 4 de octubre de 2022, de',
      link: 'https://www.youtube.com/watch?v=dTkHCWyhqtw',
    },

    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2013). <em>Plan Nacional de Gestión del Riesgo de Desastres 2015-2025</em> "Una Estrategia de Desarrollo". Recuperado el 25 de agosto de 2022, de',
      link:
        'http://docs.wixstatic.com/ugd/a02d6e_1eff708014424892a113344def36a25c.pdf',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2019). <em>Política Nacional de Gestión del Riesgo de Desastres</em> - IDIGER. Bogotá D. C, Colombia. Recuperado el 5 de octubre de ',
      link:
        'https://www.idiger.gov.co/documents/124190/452620/UNGRD.pdf/da3d1282-d547-4701-bb53-26bb1944bf83',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2017). <em>Terminología sobre gestión del riesgo de desastres y fenómenos amenazantes.</em> Bogotá D. C, Colombia. Recuperado el 4 de agosto de 2022, de ',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20761/Terminologia-GRD-2017.pdf;jsessionid=8B86BED51E7788313C041E5627754C14?sequence=2',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
