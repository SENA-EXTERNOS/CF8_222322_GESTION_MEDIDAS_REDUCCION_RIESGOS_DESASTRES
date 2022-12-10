<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medidas de reducción de riesgo

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3
      
      figure
          img(src="@/assets/curso/temas/img-sup-tema3.png").img-sup-tema3

      .img-sup-tema3

      .row.fondo-cajon-comillas

          .col-lg-7

            .bloque-texto-f.pt-4.px-5.mb-5
          
                .bloque-texto-f__comillas
                  i.fas.fa-quote-left
                  i.fas.fa-quote-right
                h4.text-regular.bloque-texto-f__texto Uno de los procesos fundamentales de la gestión del riesgo de desastres es el que se enfoca a la reducción, la minimización y la alteración favorable de las condiciones de riesgo preestablecidas o futuras; el proceso se basa, entonces, en la prevención del riesgo. Son acciones de reducción y prevención que se diseñan y ejecutan de modo previo a la ocurrencia de un desastre, cuyo objetivo final sea la eliminación de la amenaza, la exposición y la disminución de la vulnerabilidad de las personas, los medios de subsistencia, los bienes, la infraestructura y los recursos ambientales (Unidad Nacional para la Gestión del Riesgo de Desastres, 2013).
          
          .col-lg-5
              figure
                  img(src="@/assets/curso/temas/img-tar1-tema3.png").img-tar1-tema3

    br    
    br    
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

        #medidas-correctivas
        .titulo-segundo.color-primario
          h2 Medidas correctivas
        
        .bloque-medidas-correctivas
          .row.fondo-tarj-medidas-corr
            .col-lg-5
                
                figure
                    img(src="@/assets/curso/temas/img-medidas-correctivas-tema3.png").img-medidas-correctivas-tema3

            .col-lg-7
                p.txt-tarj-medidas-corr.p-4 Las medidas de reducción del riesgo correctivas (perspectivas, estructurales y no estructurales) se centran en minimizar los niveles de riesgos ya existentes en el espacio geográfico mediante la adopción de actividades de intervención sobre la amenaza. Esta puede deberse a factores naturales, antrópicos, tecnológicos y socionaturales; mientras un factor de riesgo, como la vulnerabilidad ―sobre los bienes y elementos expuestos― se determina por factores físicos, ambientales, económicos y sociales. 
          
    br
    br
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3
    
      .row
        
        .col-lg-11.cajon-texto-simple-tema3.p-4

          p La articulación de los instrumentos de planificación territorial y la creación de espacios interdisciplinarios permiten consolidar, según el contexto espacio-temporal, medidas correctivas en cuanto a proyectos de intervención correctiva (Unidad Nacional para la Gestión del Riesgo de Desastres, 2019). Así mismo, se cuenta con cuatro líneas de medidas correctivas:


    
    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

        .row

          .col-lg-4
              figure
                img(data-aos="zoom-in")(src="@/assets/curso/temas/img-pestanas-vert-tema3.png", alt="alt", style="width:450px;").m-auto

          .col-lg-8.order-2.order-lg-1
            TabsA.color-acento-botones.mb-5    

              .tarjeta.fondo-tarj-pest-vert-tema3.clr-paleYellow.p-4(titulo="Intervención ante la vulnerabilidad")
                
                  h4.txt-tarj-pest-vert-tema3 Factor de riesgo - Vulnerabilidad
                  p.txt-tarj-pest-vert-tema3 Informar y capacitar a la comunidad sobre las condiciones de riesgo presentes y futuras del territorio.
                  p.txt-tarj-pest-vert-tema3 Procesos de reubicación de infraestructura.
                  p.txt-tarj-pest-vert-tema3 Gestionar recursos para mejorar la infraestructura de las edificaciones.
                  p.txt-tarj-pest-vert-tema3 Realizar recuperación de zonas de protección, como rondas hídricas.
                  p.txt-tarj-pest-vert-tema3 Conformar y mantener comités de gestión comunitaria del riesgo de desastres.


  
              .tarjeta.fondo-tarj-pest-vert-tema3.clr-paleYellow.p-4(titulo="Intervención ante la amenaza")
                
                  h4.txt-tarj-pest-vert-tema3 Factor de riesgo - Amenaza

                  ul.lista-ul.txt-tarj-pest-vert-tema3
                    li 
                      i.lista-ul__vineta
                      | Recuperación geomorfológica de zonas de interés como canteras, humedales, ciénagas, ríos y quebradas. 
                    li 
                      i.lista-ul__vineta
                      | Reforestación de cuencas hidrográficas. 
                    li 
                      i.lista-ul__vineta
                      | Protección de zonas de protección como los cauces hídricos. 

   
   
              .tarjeta.fondo-tarj-pest-vert-tema3.clr-paleYellow.p-4(titulo="Banco de proyectos en reducción del riesgo")
                
                  h4.txt-tarj-pest-vert-tema3 Factor de riesgo - Amenaza / Vulnerabilidad
                  
                  ul.lista-ul.txt-tarj-pest-vert-tema3
                    li 
                      i.lista-ul__vineta
                      | Construcción de jarillones.
                    li 
                      i.lista-ul__vineta
                      | Construcción de gaviones.
                    li 
                      i.lista-ul__vineta
                      | Estabilización de laderas.
                    li 
                      i.lista-ul__vineta
                      | Adecuación hidráulica de los cauces hídricos.


              .tarjeta.fondo-tarj-pest-vert-tema3.clr-paleYellow.p-4(titulo="Programa de Gestión Integral del Riesgo - Amenaza Volcánica Galeras (PGIR-AVG)")
                
                  h4.txt-tarj-pest-vert-tema3 Factor de riesgo - Amenaza / Vulnerabilidad
                  
                  ul.lista-ul.txt-tarj-pest-vert-tema3
                    li 
                      i.lista-ul__vineta
                      | Reasentamiento de las poblaciones en zona de amenaza volcánica.
                    li 
                      i.lista-ul__vineta
                      | Atención psicológica y social de la población vulnerable.
                    li 
                      i.lista-ul__vineta
                      | Acompañamiento a la formulación de planes, programas y proyectos.

    separador

    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

        #medidas-prospectivas
        .titulo-segundo.color-primario
          h2 Medidas prospectivas
        
        .row.fondo-medidas-correctivas.bloque-medidas-correctivas
          .col-lg-7
            p.txt-medidas-correctivas Una vez reconocidas las medidas correctivas, se describen a continuación las medidas prospectivas.
          
          .col-lg-5
  
            figure
                img(data-aos="zoom-in")(src="@/assets/curso/temas/img-medidas-correctivas.png", alt="alt").img-medidas-correctivas

            
    br        
    br        
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

    
        .row.mb-5

            .col-md.tarjeta.tarj1-indiv-tema3.text-white.p-5
              .row.justify-content-center.mb-4

              h4.text-center Primera parte
              p Las medidas prospectivas de reducción del riesgo se diseñan con el objetivo de evitar el surgimiento de nuevas condiciones de riesgo, es decir, elaboran acciones de prevención para impedir que los bienes o elementos que se encuentran expuestos sean afectados por eventos peligrosos. La ejecución de este tipo de medidas busca evitar la creación de medidas correctivas. 
            
            .col-md.tarjeta.tarj2-indiv-tema3.text-white.p-5
              .row.justify-content-center.mb-4
                
              h4.text-center Segunda parte
              p Las medidas prospectivas se diseñan y ejecutan mediante la planificación territorial con énfasis en la sostenibilidad ambiental y un ordenamiento territorial seguro. 

            .col-md.tarjeta.tarj3-indiv-tema3.text-white.p-5
              .row.justify-content-center.mb-4
                
              h4.text-center Tercera parte
              p Para la prevención del riesgo se cuenta con herramientas fundamentales diseñadas y contempladas desde la planificación territorial, sin dejar de lado temas como la inversión pública, la regulación y especificaciones técnicas de los estudios de prefactibilidad cuyo incidencia se da en la planificación sectorial, estos instrumentos de prevención cuentan con el objetivo de que aspectos como los usos del suelo y la ocupación de esta se realice de manera reglamentada que garantice un desarrollo seguro y sostenible [sic] (Unidad Nacional para la Gestión del Riesgo de Desastres, 2013). 


    br
    br
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/img1-tarj-conect-tema3.png', alt='Texto que describa la imagen')
              
            h4.text-center Primera línea de acción
            p.text-center Instrumentos de planificación
          
          .col-md.tarjeta.color-primario.text-white.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/img2-tarj-conect-tema3.png', alt='Texto que describa la imagen')
              
            h4.text-center Segunda línea de acción
            p.text-center Gestión del riesgo de desastres asociado a fenómenos hidrometeorológicos, hidroclimáticos extremos, variabilidad climática y cambio climático.

    br
    br
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3.fondo-pto-caliente-tema3
        
        h4.tit-tarj-pto-caliente-tema3 Primera línea de acción
        
        ImagenInfografica.color-acento-botones
        
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img2-pto-caliente-tema3.png', alt='Texto que describa la imagen').img-tarj-pto-caliente-tema3
              //figcaption Leyenda de la imagen

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="15%" y="80%" numero="1")
            //.h5.mb-2 titulo
            p Plan Nacional de Gestión del Riesgo de Desastres

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="33%" y="80%" numero="2")
            //.h5.mb-2 titulo
            p Planes de Ordenamiento Territorial. 

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="50%" y="80%" numero="3")
            //.h5.mb-2 titulo
            p Plan Departamental de Gestión del Riesgo.
          
          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="68%" y="80%" numero="4")
            //.h5.mb-2 titulo
            p Plan de Desarrollo Municipal.

          .tarjeta.fondo-tarj-pto-caliente-tema3.p-3(x="85%" y="80%" numero="5")
            //.h5.mb-2 titulo
            p El Plan Municipal para la Gestión del Riesgo de Desastres.

    br
    separador

    br


    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3
            
        #medidas-estructurales-y-no-estructurales
        .titulo-segundo.color-primario
          h2 Medidas estructurales y no estructurales

        .row.fondo-tarj-ed-estruc-tema3
          .col-lg-8

            p(data-aos="fade-left").txt-tarj-ed-estruc-tema3.p-4 Las medidas de reducción del riesgo también pueden clasificarse en estructurales y no estructurales. Las primeras hacen referencia a la infraestructura que se diseña y construye con el objetivo de minimizar o evitar los efectos adversos de la materialización de un evento peligroso; en este tipo de medidas estructurales también se encuentra la aplicación de técnicas de ingeniería para mejorar la resiliencia de las edificaciones. Ahora bien, las medidas no estructurales son todas aquellas acciones que hacen uso del conocimiento de la reducción del riesgo, como las políticas, leyes y decretos que tienen la finalidad de capacitar y educar a los entes territoriales, privados, públicos y comunitarios (Unidad Nacional para la Gestión del Riesgo de Desastres, 2017).

          .col-lg-4

            figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/img-medidas-estructurales-tema3.png', alt='Texto que describa la imagen')
  

    br
    br
    br

    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3

        .row
          .col-lg-10.color-tarj-final
            p.p-4 Hemos llegado al final de este componente formativo. Recuerde explorar los demás recursos que se encuentran disponibles; para ello diríjase al menú principal que contiene la síntesis, la actividad didáctica, material complementario, entre otros elementos.
        
        figure
            img(src='@/assets/curso/temas/img-inf-der-tema3.png', alt='Texto que describa la imagen').img-inf-der-tema3
  
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
