<template>
  <div style="margin-top: 70px">
    <mdb-navbar id="main-navbar" color="white" position="top"  scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves class="font-weight-bold">
        <img class="PIM-logo-navbar" src="../../build/img/img-admin/pim landing page-27.png">
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right style="font-size:20px;">
          <mdb-nav-item style="padding: 12px;" to="/">Home</mdb-nav-item>
          <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('Who')">¿Quiénes somos?</a></mdb-nav-item>
          <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('serv')">Servicios</a></mdb-nav-item>
          <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('process')">¿Cómo funcionamos?</a></mdb-nav-item>
          <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('contact')"><strong style="color:#00B3E8;">Contacto</strong></a></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div class="first-section">
      <img class="img-first-section" src="../../build/img/img-admin/pim landing page-28.png">
    </div>
    <div>
    <mdb-container>
      <div class="first-section">
        <mdb-row>
          <mdb-col md="6" class="we-are-secction mb-5">
            <h2 class="mt-5 font-weight-bold" style="font-size: 60px;" ref="Who">In House</h2>
            <p style="font-size: 40px;">Registro de marcas</p>
            <li class="text-muted">
              <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Registros Nuevos</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Renovación</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Declaración de Usos</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Genera acceso a la plataforma</ul>
            </li>
          </mdb-col>
          <mdb-col md="6" class="we-are-secction mb-5">
            <img style="width: 100%; padding: 40px;" src="../../build/img/img-admin/pim landing page-19.png">
          </mdb-col>
        </mdb-row>
      </div>
      <div class="first-section">
        <mdb-row>
          <mdb-col md="6" class="we-are-secction mb-5">
            <img class="elias-johnsson-logo" src="../../build/img/img-admin/pim landing page-24.png">
          </mdb-col>
          <mdb-col md="6" class="we-are-secction mb-5">
            <h2 class="mt-5 font-weight-bold" style="font-size: 60px;" ref="Who">Out House</h2>
            <p class="sub-title-section-2">Sistemas de reportes</p>
            <li class="text-muted">
              <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Sistemas de reportes semanales y mensuales</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Oposiciones</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Gestión de operaciones</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Dictamenes de propiedad intelectual</ul>
  	          <ul><img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png">Alertas de renovación</ul>
            </li>
          </mdb-col>
        </mdb-row>
      </div>
    </mdb-container>
    </div>
    <mdb-footer class="footer-section">
      <div class="form-row">
        <mdb-row>
          <mdb-col class="sobre-el-sitio">
            <p><strong style="font-weight: bold;">Sobre el sitio</strong><br><br>
            <a href="#">¿Quienes somos?</a><br>
            <a href="#">Elias&Johnsson</a><br>
            <a href="#">Servicos</a><br>
            <a href="#">¿Cómo funcionamos?</a><br>
            <a href="#">Dictamen propiedad intelectual</a>
            </p>
          </mdb-col>
          <mdb-col class="contacto">
            <p><strong style="font-weight: bold;">Contacto</strong><br><br>
            contacto@pim.com.mx<br>
            56-62-24-10/56-62-84-39 <br>
            Insurgentes Sur, 2079, interior 802, Alvaro Obregón, CDMX.<br>
            </p>
          </mdb-col>
          <mdb-col class="img-footer">
            <img src="../../build/img/img-admin/pim landing page-27.png">
          </mdb-col>
        </mdb-row>
      </div>
      <div>
        <mdb-row>
          <mdb-col class="Terminos">              
            <p>Términos y condiciones | Aviso de privacidad</p>
          </mdb-col>
          <mdb-col class="social-media">              
            <img style="width:30px;" src="../../build/img/img-admin/pim landing page-12.png">
            <img style="width:30px;" src="../../build/img/img-admin/pim landing page-13.png">
            <img style="width:30px;" src="../../build/img/img-admin/pim landing page-14.png">
            <img style="width:30px;" src="../../build/img/img-admin/pim landing page-15.png">
          </mdb-col>
        </mdb-row>
      </div>          
    </mdb-footer>
  </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll, mdbFooter } from 'mdbvue';

export default {
  name: 'ServiciosPage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbEdgeHeader,
    mdbCard,
    mdbCardImage, 
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbFooter,
  },
  directives: {
    animateOnScroll
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: circle;
  font-size: 20px;
}

li {
  display: inline-block;
}

a{
    color: white;
}

.home-page-background {
  width: 100%;
  height: 100%;
  background: url('../../build/img/img-admin/pim landing page-29.png') center;
  background-size: cover;
}

.PIM-logo-navbar{
  width: 80%;
  padding: 10px 0px 10px 80px;
}

.header-content{
  padding-top: 225px;
}

.header-leaters{
  font-size: 25px;
}

.asesori-buttom{
  width:25%; 
  border-radius: 6px 6px 6px 6px;
  -moz-border-radius: 6px 6px 6px 6px;
  -webkit-border-radius: 6px 6px 6px 6px;
  border: 0px solid #000000;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.more-info-buttom{
  width:30%; 
  border-radius: 6px 6px 6px 6px;
  -moz-border-radius: 6px 6px 6px 6px;
  -webkit-border-radius: 6px 6px 6px 6px;
  border: 0px solid #000000;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.we-are-secction{
  text-align: justify;
  font-size: 50px;
}

.item-who{
  width: 150px;
  padding-bottom: 15px;
}

.we-work-secction{
  font-weight: bold;
  font-size: 60px;
  line-height: 1.2;
}
.dictamen-buttom{
  width:70%; 
  border-radius: 6px 6px 6px 6px;
  -moz-border-radius: 6px 6px 6px 6px;
  -webkit-border-radius: 6px 6px 6px 6px;
  border: 0px solid #000000;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.left-contact-info{
  text-align: justify;
}

.header-inbox{
  background: #F3F3F2;
  height: 100px;
}

.right-contact-section{
  height: 500px;
  top: -60px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
  border: 0px solid #000000;
  margin-left: 95px;
}

.form-control{
  border: 0px solid #000000;
  background: #F3F3F2

}

.input-section{
  padding: 30px;
}

.send-buttom{
  width:30%; 
  border-radius: 6px 6px 6px 6px;
  -moz-border-radius: 6px 6px 6px 6px;
  -webkit-border-radius: 6px 6px 6px 6px;
  border: 0px solid #000000;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 10px;

}

.header-inbox-info{
  padding-top: 30px;
  font-size: 15px;
  line-height: 1.2;

}

.circle-top{
  margin:  -4px 0px 40px 40px;
}
.circle-center{
  margin:  30px 0px 50px 40px;
  
}
.circle-bottom{
  margin:  20px 0px 0px 40px;
}

.footer-section{
  background: #001F47;
}
.sobre-el-sitio{
  margin: 50px 0px 0px 100px;
}

.contacto{
  margin: 50px 0px 0px 0px;
}

.img-footer{
  margin: 50px 0px 0px 300px;
}

.Terminos{
  margin: 20px 0px 0px 90px;
  color: blue;
}

.social-media{
  margin-left: 600px;
}

.more-info-buttom{
  width: 100%;
}

.elias-johnsson-logo{
  width: 100%; 
  padding: 30px; 
  margin-top: 100px;
}

.img-first-section{
  width: 100%;
  margin-top: -120px;
}

.sub-title-section-2{
 font-size: 40px;
}

@media (max-width: 767px) {
  .img-first-section{
    width: 100%;
    margin-top: 0px;
  }
  .first-section{
    font-size: 25px;
  }
  .form-row{
    width: 100%;
  }
  .header-content{
    width: 100%;
  }
  .elias-johnsson-logo{
    width: 100%;
    margin-top: 0px;
  }
  .header-title{
    color: black; 
    font-size: 35px;
    font-weight: bold;
  }
  .sub-title-section-2{
   font-size: 30px;
  }
  .asesori-buttom{
    width: 100%;
  }
  .sobre-el-sitio{
    font-size: 15px;
    margin: 10px 0px 0px 20px;
  }
  .more-info-buttom{
  width: 340px;
  }
  .we-work-secction{
    font-weight: bold;
    font-size: 40px;
    line-height: 1.2;
  }
  .dictamen-buttom{
    width:100%; 
    border-radius: 6px 6px 6px 6px;
    -moz-border-radius: 6px 6px 6px 6px;
    -webkit-border-radius: 6px 6px 6px 6px;
    border: 0px solid #000000;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 10px;
    margin-left: 5px;
  }
  .left-contact-info{
    padding: 0px 50px 50px 50px;
  }
  .right-contact-section{
    height: 650px;
    width: 350px;
    top: -60px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.61);
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    border: 0px solid #000000;
    margin-left: 12px;
  }
  .header-inbox-info{
    padding: 0px 20px 20px 20px;
    font-size: 12px;
    line-height: 1.2;
  }
  .cart-icon{
    padding: 10px 0px 0px 0px;
    margin-left: 140px;
    width: 50px;
  }
  .header-inbox{
    background: #F3F3F2;
    height: 120px;
  }
  .contacto{
    font-size: 15px;
    margin: 10px 0px 0px 0px;
  }
  .PIM-logo-navbar{
    width: 80%;
    padding: 10px 0px 0px 80px;
  }
  .footer-area{
    width: 100%;
  color: white;
  }
  .img-footer{
    margin: 0px 0px 0px 80px;
  }
  .social-media{
    margin: 10px 0px 0px 0px;
  }
  .footer-section{
    background: #001F47;
    width: 380px;
  }
  .Terminos{
    margin: 10px 0px 0px 20px;
    font-size: 12px;
    color: blue;
  }
  .EYJ-IMG{
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
  .first-section{
    margin-top: 0px;
  }
}
</style>
