<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.container.justify-content-around.align-items-center
        figure
            img(src="@/assets/curso/temas/img-sup-introd.png").img-sup-introd
    
        p.p-2 En el componente formativo “Gestión y medidas de reducción de riesgos de desastres” se abordan contenidos tendientes a saber cómo ejecutar acciones en caso de desastres o situaciones de peligro inminente de acuerdo con la Estrategia de Respuesta a Emergencias (ERE ) y en el marco de la competencia de promover acciones de prevención según normativa y protocolos de gestión del riesgo de desastres. El componente tiene tres apartados principales: instrumentos de planificación, cuyo objetivo principal es el ordenamiento territorial planificado desde la sostenibilidad; los escenarios de riesgo, que se fundamentan como insumo vital para esta planificación; y, por último, las medidas de reducción para la intervención del riesgo. Lo invitamos a ver el video introductorio.


    .row.container.tarjeta.tarjeta--blanca.p-2.p-md-3
        figure
            img(src="@/assets/curso/temas/img-inf-introd.png").img-inf-introd

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
