<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos de planificación

    .row.justify-content-around.align-items-center(data-aos="fade-up")
        

        figure
            img(src="@/assets/curso/temas/img-sup-der-tema1.png").img-sup-der-tema1

        .col-4
            figure
              img(data-aos="fade-up")(src="@/assets/curso/temas/img1-tema1.png").img1-tema1

        .col-8.color-fondo-tarj1.tarjeta
            .row 
              .col-lg-2 
                figure
                  img(src="@/assets/curso/temas/img-fondo-der-tarj1-tema1.png").img-fondo-der-tarj1-tema1
              .col-lg-4
                p.text-tarj1-color.p-3 Para desarrollar la gestión y ejecutar medidas de reducción de riesgo de desastres se requiere la selección de herramientas de planificación. Algunos de estos serán descritos en este apartado.
              
            .col-lg-2
                figure
                  img(src="@/assets/curso/temas/img-fondo-izq-tarj1-tema1.png").img-fondo-izq-tarj1-tema1
                
              
    br
    br
    br

    .row.container.justify-content-around.align-items-center.fondo-slider1-tema1
      .row
        SlyderB.mb-5(:datos="datosSlyder").bloque-slider1-tema1

      
    br
    br
    br

    .row.container.justify-content-around.align-items-center


        .row 
          .col-lg-12
              figure
                  img(src="@/assets/curso/temas/img-PNGRD-tema1.png").img-PNGRD-tema1

              p.txt-PNGRD-tema1 La hoja de ruta principal es el Plan Nacional de Gestión de Riesgo de Desastre de Colombia (PNGRD), el cual convoca a los diversos actores del SNGRD a ejecutar con eficacia las acciones necesarias para cumplir con el objetivo de la gestión del riesgo. El PNGRD se instituyó a través del Decreto 308 de 2016 y fue actualizado mediante el Decreto 1478 del 3 de agosto de 2022 (Unidad Nacional de Gestión del Riesgo de Desastres - UNGRD, 2022). Tiene un objetivo general y cinco objetivos específicos:



    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      .row.fondo-tarj-conect-tema1
        SlyderF(columnas="col-lg-6 col-xl-4").bloque-tarj-conect-tema1
          .tarjeta.color-fondo-tarj-tema1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(data-aos="flip-left")(src='@/assets/curso/temas/img1-tarj-conect-tema1.png' alt='AvatarTop')
            //h2.text-center FIRST
            p.text-center Mejorar el proceso de conocimiento del riesgo de desastres en Colombia.
            p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit.

          .tarjeta.color-fondo-tarj-tema1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(data-aos="flip-left")(src='@/assets/curso/temas/img2-tarj-conect-tema1.png' alt='AvatarTop')
            //h2.text-center 2
            p.text-center Minimizar la materialización de condiciones de riesgo futuras en la planeación y desarrollo territorial, sectorial y ambiental sostenible.
            p.texto-invisible Lorem ipsum dolor sit 
          .tarjeta.color-fondo-tarj-tema1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(data-aos="flip-left")(src='@/assets/curso/temas/img3-tarj-conect-tema1.png' alt='AvatarTop')
            //h2.text-center 3
            p.text-center Reducir las condiciones de riesgo de desastres existentes.
            p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem 

          .tarjeta.color-fondo-tarj-tema1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(data-aos="flip-left")(src='@/assets/curso/temas/img4-tarj-conect-tema1.png' alt='AvatarTop')
            //h2.text-center 4
            p.text-center Garantizar un oportuno, eficaz y adecuado manejo de desastres. 
            p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.

          .tarjeta.color-fondo-tarj-tema1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(data-aos="flip-left")(src='@/assets/curso/temas/img5-tarj-conect-tema1.png' alt='AvatarTop')
            //h2.text-center 5
            p.text-center Fortalecer la gobernanza, educación y comunicación social en la gestión del riesgo con enfoque diferencial, de diversidad cultural y de género.

      p.texto-inf-slider1-tema1 Los objetivos señalados se encuentran directamente enfocados a la minimización gradual y constante del riesgo de desastres y a la reducción de las pérdidas y los daños generados por la materialización de un evento peligroso con el fin de contribuir con las cuatro prioridades establecidas en el marco de Sendai 2015-2030:

    br
    br
    br

    .row.container.justify-content-around.align-items-center

    
      .row.bloque-tarj-avat-tema1
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.fondo-tarj-avatar-tema1.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(data-aos="flip-left")(src='@/assets/curso/temas/img1-tarj-avat-tema1.png', alt='Texto que describa la imagen').img-tarj-avat-tema1
            .texto-tarj-avatar-tema1  
              h3.text-center Primer objetivo
              p.text-small Comprender el riesgo de desastres.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.fondo-tarj-avatar-tema1.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(data-aos="flip-left")(src='@/assets/curso/temas/img2-tarj-avat-tema1.png', alt='Texto que describa la imagen').img-tarj-avat-tema1
            .texto-tarj-avatar-tema1
              h3.text-center Segundo objetivo
              p.text-small Fortalecer la gestión del riesgo de desastres para manejar mejor el riesgo de desastres.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta.fondo-tarj-avatar-tema1.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(data-aos="flip-left")(src='@/assets/curso/temas/img3-tarj-avat-tema1.png', alt='Texto que describa la imagen').img-tarj-avat-tema1
            .texto-tarj-avatar-tema1
              h3.text-center Tercer objetivo
              p.text-small Invertir en la reducción del riesgo de desastres para la resiliencia.

        .col-sm-6.col-lg-3
          .tarjeta.fondo-tarj-avatar-tema1.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(data-aos="flip-left")(src='@/assets/curso/temas/img4-tarj-avat-tema1.png', alt='Texto que describa la imagen').img-tarj-avat-tema1
            .texto-tarj-avatar-tema1
              h3.text-center Cuarto objetivo
              p.text-small Mejorar la preparación frente a desastres para una respuesta eficaz, y para edificar mejor en la recuperación, la rehabilitación y la reconstrucción. 

      p.texto-invisible Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aliquam incidunt reprehenderit eos molestiae, quibusdam nam nulla minus rerum doloribus dignissimos nesciunt, quae magni minima ab soluta id at harum?
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      .row
        .col-lg-10 

          .cajon.fondo-cajon-color-tema1.color-primario.p-4
              p.txt-trazado-camino.p-2 Trazado el camino a seguir, los instrumentos de planificación se constituyen como la gestión tangible del riesgo de desastres, pues aumentan las opciones de hallar una solución a las problemáticas asociadas a los desastres: la pérdida de vidas humanas, de los medios productivos y de subsistencia, así como la afectación de los bienes estructurales, socioculturales y ambientales.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .bg--img_03
          .row.justify-content-center.mb-4
            
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
                .row(titulo="Instrumentos de planificación")
                  .col-12
                    p.texto-acordeon-tema1 Los instrumentos de planificación permiten consolidar un frente unido de los entes públicos, privados y comunitarios en una planificación adecuada y garantizada como es el desarrollo seguro y la sostenibilidad territorial.

                .row(titulo="Articulación de estas herramientas con el Plan Nacional de Gestión del Riesgo de Desastres (PMGRD)")
                  .col-12
                    p.texto-acordeon-tema1 La articulación de estas herramientas con el Plan Nacional de Gestión del Riesgo de Desastres (PMGRD) permite la destinación segura y garantizada de los fondos y recursos económicos, el diseño y alcance de metas específicas, así como la caracterización real de los escenarios de riesgo a nivel nacional y la coordinación de actividades y acciones para gestionarlos de manera positiva. 

                .row(titulo="Estrategias")
                  .col-12
                    p.texto-acordeon-tema1 Se habla entonces de estrategias integrales que vinculan las escalas territoriales y a los actores del sector público, privado y comunitario en la construcción y ejecución de una colección de procesos y componentes que tienen como finalidad mejorar la calidad de vida de las poblaciones, en especial las que se encuentran en estado de riesgo. El Plan Municipal para la Gestión del Riesgo de Desastres (PMGRD) se fundamenta como una de las herramientas más importantes del Consejo Municipal para la Gestión del Riesgo de Desastres (CMGRD).

                .row(titulo="Componentes del PMGRD")
                  .col-12
                    p.texto-acordeon-tema1  El PMGRD está constituido por un componente de caracterización de escenarios de riesgo y un componente programático. El primero se enfoca en la identificación y priorización de escenarios presentes y futuros que sirven como insumo para el segundo componente: la construcción de medidas de intervención enfocadas en los procesos de gestión del riesgo a nivel municipal. Este instrumento de planificación se posiciona como una agenda del desarrollo local dinámica que gestiona el primer proceso de la gestión del riesgo y las cualidades específicas del ambiente y el territorio para la formulación y diagnóstico de otros instrumentos de planificación territorial y del desarrollo como lo son los planes de ordenamiento territorial (POT).

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-acordeon-tema1.png", alt="alt").img400.m-auto
    
    br
    

    .row.container.justify-content-around.align-items-center
        .row 
          .col-lg-10
              .cajon.fondo-cajon2-color-tema1.color-primario.p-4
                  p Los POT se estipulan como un rango de visión a largo plazo mediante la consolidación de modelos de ocupación sostenibles que permitan el funcionamiento de los medios de subsistencia y la infraestructura sin crear condiciones de riesgo a futuro ni incrementar las ya existentes. Este instrumento se fundamenta en los siguientes marcos normativos: 
        

        .row.container.bloque-linea-temporal-tema1
          
            //h3 revisar con linea temporal original
            .linea-puntos-vert-tema1
            .row(titulo="1993" subtitulo="Ley 99 de 1993: hace referencia a la creación del Sistema Nacional Ambiental (SINA).")
              
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/img1-linea-vertical-tema1.png', alt='Texto que describa la imagen').imagenes-1y3-linea-temporal-tema1
                  //figcaption Leyenda de la imagen

              .col-lg-6.mb-4.mb-lg-0
                .texto-1y3-linea-temporal-tema1
                  h3 1993
                  p Ley 99 de 1993: hace referencia a la creación del Sistema Nacional Ambiental (SINA).

            .row(titulo="1997" subtitulo = "Ley 388 de 1997, conocida como la Ley de Desarrollo Territorial.")
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/img2-linea-vertical-tema1.png', alt='Texto que describa la imagen').imagenes-2y4-linea-temporal-tema1
                  //figcaption Leyenda de la imagen      
              .col-lg-6.mb-4.mb-lg-0
                .texto-1y4-linea-temporal-tema1
                  h3 1997
                  p Ley 388 de 1997, conocida como la Ley de Desarrollo Territorial.
            
            .row(titulo="2012" subtitulo = "Decreto 019 de 2012 o Ley Antitrámites, que dicta las normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración pública.")
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/img3-linea-vertical-tema1.png', alt='Texto que describa la imagen').imagenes-1y3-linea-temporal-tema1
                  //figcaption Leyenda de la imagen      
              .col-lg-6.mb-4.mb-lg-0
                .texto-1y3-linea-temporal-tema1
                  h3 2012
                  p Decreto 019 de 2012 o Ley Antitrámites, que dicta las normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración pública.
            
            .row(titulo="2012" subtitulo = "Ley 1523 de 2012, la cual estipula el Sistema Nacional de la Gestión del Riesgo de Desastres y la política nacional para la gestión del riesgo de desastres.")
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/img4-linea-vertical-tema1.png', alt='Texto que describa la imagen').imagenes-2y4-linea-temporal-tema1
                  //figcaption Leyenda de la imagen      
              .col-lg-6.mb-4.mb-lg-0
                .texto-1y4-linea-temporal-tema1
                  h3 2012
                  p Ley 1523 de 2012, la cual estipula el Sistema Nacional de la Gestión del Riesgo de Desastres y la política nacional para la gestión del riesgo de desastres.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-10.cajol-color-simple-tema1.p-4
          p Siendo el reconocimiento territorial, específicamente del espacio geográfico, uno de los insumos fundamentales para el proceso de planeación social a nivel local, los planes de ordenamiento territorial: 

    br
    br
    br

    .row.container.justify-content-around.align-items-center
    
        .tarjeta.color-slider-simple-tema1.p-4
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0
                p.texto1-slider-simple-tema1 Se fundamentan en tres componentes: general, urbano y rural. Estos componentes diseñan la estrategia de distribución territorial de los usos del suelo y las actividades económicas asociadas, señalan las particularidades de los sistemas estructurantes al analizar las mejores opciones relacionadas con la infraestructura que soporta los servicios públicos y el correcto funcionamiento de los recursos naturales; es decir, aseguran la armonización e integración de la gestión del riesgo y el ordenamiento territorial municipal.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img1-slider-simple-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4

              .col-md-6.mb-4.mb-md-0
                p.texto2-slider-simple-tema1 El último instrumento de planificación es el Plan de Desarrollo Municipal (PDM) regido por la Ley 152 de 1994 y que se encarga de dirigir las medidas de intervención a nivel local. Funciona con base en tres componentes principales: diagnóstico, estratégico y el plan de inversión. El primero hace referencia al análisis y valoración de las características específicas del territorio y de la comunidad que lo ocupa, con base en estudios y planes ya desarrollados; el componente estratégico responde directamente al plan de gobierno vigente mediante la creación de acciones para su cumplimiento; finalmente, el plan de inversión esclarece las fuentes y fondos para financiar la ejecución del segundo componente. 


              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img2-slider-simple-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen


            .row.justify-content-center.align-items-center.my-lg-4

              .col-md-6.mb-4.mb-md-0
                p.texto3-slider-simple-tema1 A nivel de escala territorial es posible concluir que los planes de desarrollo municipal (PDM) son el documento donde se plasman los medios para ejecutar las acciones y estrategias planteadas desde los demás instrumentos de planificación, incluido el Plan Nacional de Gestión del Riesgo de Desastres (PNGRD), debido a que hace uso de fondos a nivel nacional directamente en el espacio geográfico que rige. Hablando en términos de articulación e integración, se hace necesario fortalecer esta planificación territorial desde las capacidades administrativas, de modo que sea efectiva la materialización de los procesos de gestión del riesgo, conocimiento del riesgo, reducción del riesgo y manejo de desastres en las políticas, los objetivos y las medidas correctivas, prospectivas, estructurales y no estructurales, de tal manera que sea posible garantizar la efectividad en la ejecución de recursos.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img3-slider-simple-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

  
            .row.justify-content-center.align-items-center.my-lg-4

              .col-md-6.mb-4.mb-md-0
                p.texto4-slider-simple-tema1 De este modo, se cuenta también con el Plan Departamental de Gestión del Riesgo (PDGRD) donde se busca identificar, ejecutar y controlar las acciones que los entes territoriales hacen en términos de los procesos de gestión del riesgo, teniendo como base la caracterización del territorio, factores y escenarios de riesgo, y actores claves para la gestión del riesgo que orientan la implementación de la Estrategia Departamental para Respuesta.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img4-slider-simple-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

      




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'La Política Nacional para la Gestión del Riesgo de Desastres (PNGRD), específicamente los artículos 39, 40 y 41 de la Ley 1523 de 2012, establece la hoja de ruta para integrar la gestión del riesgo de desastre en la planificación y desarrollo territorial sostenible mediante los planes de ordenamiento territorial (POT), los planes de ordenamiento de cuencas hidrográficas (POMCA) y la planificación del desarrollo en general en las diferentes escalas territoriales y niveles del gobierno, las cuales, a través de un análisis del riesgo, pueden integrar la gestión en los diagnósticos biofísicos, socioeconómicos y ambientales a fin de considerar así el riesgo de desastres como un punto clave para el desarrollo y ocupación del país, de manera tal que se puedan evitar nuevas condiciones de riesgo.',
        imagen: require('@/assets/curso/temas/img1-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'Por su parte, la integración de la gestión del riesgo en el proceso de planificación nacional, regional y municipal se encuentra en el artículo 40 de la ley y hace énfasis especial en el desarrollo seguro que garantice el bienestar del pueblo colombiano, como lo son las previsiones estipuladas en las leyes 9 de 1989 y 388 de 1997 y que mencionan los mecanismos para inventariar las comunidades cuyos asentamientos se encuentran en condición de riesgo. De igual manera, la ley contempla la identificación y gestión de las zonas vulnerables a amenazas ocasionadas por fenómenos ―ya sean naturales, sociales o la combinación de ambas―, la estructuración de terrenos para procesos de reasentamientos y el uso de las herramientas jurídicas de carácter adquisitivo y de expropiación de bienes inmuebles pertinentes para que las comunidades vulnerables o asentadas en ubicaciones de alto riesgo puedan reubicarse. ',
        imagen: require('@/assets/curso/temas/img2-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'El artículo 41 de la Ley 1523 de 2012 establece la hoja de ruta para la ejecución de las directrices del Plan Nacional de la Gestión del Riesgo de Desastres y estipula que los entes nacionales ―ya sean a nivel regional, departamental, distrital o municipal― deberán cumplir con las orientaciones del ordenamiento y planificación del desarrollo territorial mediante la incorporación útil del proceso socio-ambiental, como es la GRD, en los planes, programas y proyectos, así como garantizar la asignación y correcto uso de los fondos para enfrentar las consecuencias de los eventos naturales.',
        imagen: require('@/assets/curso/temas/img3-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'Por lo tanto, la Gestión del Riesgo de Desastres se orienta a una adecuada planeación territorial cuya característica principal es la sostenibilidad a través de tres principios que incentivan la integración de las diferentes escalas territoriales, como también de los diversos actores que intervienen en este proceso mediante los instrumentos de planificación:',
        imagen: require('@/assets/curso/temas/img4-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'La finalidad de la inclusión de los procesos de la gestión del riesgo ―así como el conocimiento, la reducción del riesgo y el manejo de desastres en instrumentos de planificación― es minimizar cualquier riesgo que exista en el territorio, así como prevenir la incursión de nuevas condiciones de riesgo. ',
        imagen: require('@/assets/curso/temas/img5-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo:
        //  'Never, never assume that what you have achieved is good enough',
        texto:
          'Por lo tanto, la construcción de un futuro sostenible donde primen la seguridad territorial y los intereses colectivos, así como los derechos de la comunidad, debe darse mediante el desarrollo de los procesos de GRD en la formulación, ejecución, valoración y análisis de las herramientas de desarrollo como lo son los planes territoriales, ya sean de salud, educación, ambiente, infraestructura, recreación, deporte, cultura, economía, desarrollo social y territorial; planes que en últimas contribuyen a la seguridad y el mejoramiento de la vida humana.',
        imagen: require('@/assets/curso/temas/img6-slider1-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
