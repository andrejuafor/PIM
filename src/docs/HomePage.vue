<template>
    <div style="margin-top: -15px">
      <mdb-navbar id="main-navbar" light color="white" position="top"  scrolling :scrollingOffset="20">
        <mdb-navbar-brand to="/" waves class="font-weight-bold">
          <img class="PIM-logo-navbar" src="../../build/img/img-admin/pim landing page-27.png">
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav right style="font-size:20px;">
            <mdb-nav-item style="padding: 12px;"><a href="">Home</a></mdb-nav-item>
            <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('Who')">¿Quiénes somos?</a></mdb-nav-item>
            <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('serv')">Servicios</a></mdb-nav-item>
            <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('process')">¿Cómo funcionamos?</a></mdb-nav-item>
            <mdb-nav-item style="padding: 12px;"><a class="porto-button" @click="scrollMeTo('contact')"><strong style="color:#00B3E8;">Contacto</strong></a></mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    <div>
     <mdb-edge-header class="header" style="height: 670px;">
        <div align="center" class="home-page-background header-content" style="margin-top: -110px;">
          <mdb-col md="10" class="mx-auto text-center text-muted mb-5 header-leaters">
            <p class="header-title"><strong> Propiedad Intelectual México. <br> Administrador de marcas</strong></p>
            <p>El servicio que necesitas para la administración de tus <strong>Marcas</strong></p>
            <button class="asesori-buttom morpheus-den-gradient"><a class="porto-button" @click="scrollMeTo('contact')">Solicitar asesoría</a></button>
          </mdb-col>
        </div>
      </mdb-edge-header>
      <mdb-container>
        <p class="mt-5 we-work-secction" ref="Who"></p>
        <mdb-row>
          <mdb-col md="6" class="we-are-secction mb-5">
            <h2 class="mt-5 font-weight-bold">¿Quiénes somos?</h2>
            <p class="text-muted" >Un servicio jurídico especializado en materia de Propiedad Intelectual, contando con una plataforma digital propia denomidana 
              "PIM Propiedad Intelectual México" la cual ofrece el servicio que necesitas para la administración de tur Marcas. <br><br>
              Somos una integración de expertos, jurídicos y tecnologicos especializados en Propuedad Intelectual. Conformados por un equipo interno,
              con el respaldo de ELIAS & LONSSON Abogados y RECAUDIA.
            </p>
            <br>
            <mdb-nav-item to="/quienes_somos">
              <button class="more-info-buttom morpheus-den-gradient">Más información</button>
            </mdb-nav-item >
          </mdb-col>
          <mdb-col md="6" class="we-are-secction mb-5">
            <img style="width: 100%; padding: 40px;" src="../../build/img/img-admin/pim landing page-17.png">
          </mdb-col>
        </mdb-row>
        <p class="mt-5 we-work-secction" ref="serv"></p>
        <mdb-row>
          <mdb-col md="3" class="mb-5 text-center">
            <mdb-nav-item to="/servicios">
            <mdb-card class="animated fadeInLeft" style="width: 250px;"> 
              <mdb-card-body style="height: 310px;">
                <img class="item-who" src="../../build/img/img-admin/pim landing page-21.png">
                <mdb-card-title style="font-size: 20px;"><strong style="color: black;">Administrador <br> de marcas</strong></mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing eli.</mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            </mdb-nav-item>
          </mdb-col>
          <mdb-col md="3" class="mb-5 text-center mx-auto">
            <mdb-nav-item to="/servicios">
              <mdb-card class="animated fadeIn" style="width: 250px;">
                <mdb-card-body style="height: 310px;">
                  <img class="item-who" src="../../build/img/img-admin/pim landing page-22.png">
                  <mdb-card-title style="font-size: 20px;"><strong style="color: black;">Dictamen de  <br> Propiedad Intelectual</strong></mdb-card-title>
                  <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing eli.</mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-nav-item>
          </mdb-col>
          <mdb-col md="3" class="mb-5 text-center">
            <mdb-nav-item to="/servicios">
            <mdb-card class="animated fadeInRight" style="width: 250px;">
              <mdb-card-body style="height: 310px;">
                <img class="item-who" src="../../build/img/img-admin/pim landing page-23.png">
                <mdb-card-title style="font-size: 20px;"><strong style="color: black;">Gestión y seguimiento<br> a tramites</strong></mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing eli.</mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            </mdb-nav-item>
          </mdb-col>
        </mdb-row>
        <p class="mt-5 we-work-secction" ref="process"></p>
        <mdb-row>
          <mdb-col md="7" class="we-are-secction mb-5">
            <img style="width: 100%; padding-top: 100px;" src="../../build/img/img-admin/pim landing page-18.png">
          </mdb-col>
          <mdb-col md="5" class="we-are-secction mb-5">
            <p class="mt-5 we-work-secction">¿Cómo funcionamos?</p>
            <p class="text-muted" style="font-size:18px;">Somos una herramienta inteligente que sistematiza y eficienta el rastreo, análisis y administración de signos distintivos.
              <br>
              <br>
              Trabajamos en tiempo real con la gaceta del Instituto Mexicano de Propiedad Industrial y los sistemas de consulta externa del IMPI.
              <br>
              <br>
              Se genera una base de datos dirigida para la prevención o identificación de oposiciones y análisis de viabilidad de signos.
            </p>
            <br>
            <mdb-nav-item to="/dictamen">
            <button class="dictamen-buttom morpheus-den-gradient">Dictamen propiedad intelectual</button>
            </mdb-nav-item>
          </mdb-col>
        </mdb-row>
        <p class="mt-5 we-work-secction" ref="contact">Contacto</p>
        <mdb-row>
          <mdb-col md="4" class="mb-5 left-contact-info text-muted">
            <mdb-row>
              <p style="font-size: 15px;">
                <img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png"><strong style="font-weight: bold; font-size: 20px;">1. Lorem ipsum dolor sit amet</strong>
                <br><br>
                Lorem ipsum dolor sit amet, consetectuer adipsciong elto set diam nomindi
              </p>
            </mdb-row>
            <mdb-row>
              <p style="font-size: 15px;">
                <img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png"><strong style="font-weight: bold; font-size: 20px;">2. Lorem ipsum dolor sit amet</strong>
                <br><br>
                Lorem ipsum dolor sit amet, consetectuer adipsciong elto set diam nomindi
              </p>
            </mdb-row>
            <mdb-row>
              <p style="font-size: 15px;">
                <img style="margin: 0px 5px 6px 0px;" src="https://img.icons8.com/carbon-copy/20/000000/unchecked-circle.png"><strong style="font-weight: bold; font-size: 20px;">3. Lorem ipsum dolor sit amet</strong>
                <br><br>
                Lorem ipsum dolor sit amet, consetectuer adipsciong elto set diam nomindi
              </p>
            </mdb-row>
          </mdb-col>
          <mdb-col md="6" class="mb-8 right-contact-section">
            <section>
              <mdb-row class="header-inbox">
                <div class="form-row">
                  <mdb-col md="3" class="form-group">
                    <img class="cart-icon" src="../../build/img/img-admin/pim landing page-25.png">                      
                  </mdb-col>
                  <mdb-col md="8" class="header-inbox-info">
                    <p>Escribenos un mensaje sobre tus dudas o inquietudes, y nos pondremos en contacto contigo en un lapso de <strong style="font-weight: bold;">24hrs</strong></p>
                  </mdb-col>
                </div>
              </mdb-row>
                <section>
                  <form class="needs-validation input-section" novalidate @submit="checkForm" v-on:submit.prevent="checkIfRecaptchaVerified">
                    <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <input v-model="nameVerified" type="text" class="form-control" id="validationCustom01" placeholder="Nombre" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <input v-model="emailVerified" type="email" class="form-control" id="defaultFormSubscriptionEmailEx" placeholder="Correo electrónico" required>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <input v-model="numberVerified" type="number" class="form-control" id="validationCustom03" placeholder="Teléfono" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <input v-model="campaignVerified" type="text" class="form-control" id="validationCustom04" placeholder="Compañia/Empresa" required>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-12 mb-3">
                        <p><strong style="font-weight: bold;" for="validationTooltip03">Mensaje</strong></p>
                        <textarea v-model="messageVerified" type="text" class="form-control" id="validationCustom03 " rows="5" placeholder="Máximo 256 caracteres" required></textarea>
                      </div>
                    </div>
                    <div class="text-center">
                      <vue-recaptcha class="captcha-style" ref="recaptcha" @verify="markRecaptchaAsVerified" sitekey="6Le3crUUAAAAALPUPX38W2fWfEkop-SZkTlwPxJb" :loadRecaptchaScript="true"></vue-recaptcha>
                      <div><strong>{{pleaseTickRecaptchaMessage}}</strong></div>
                      <mdb-btn type="submit"  class="send-buttom morpheus-den-gradient">Enviar</mdb-btn>
                    </div>
                  </form>
                </section>
              </section>
            </mdb-col>
          </mdb-row>
      </mdb-container>
    </div>
        <mdb-footer class="footer-section">
          <div class="form-row">
            <mdb-row class="footer-area">
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
            <mdb-row class="test">
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
import { mdbContainer, mdbCol, mdbRow, mdbInput, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarBrand, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll, mdbFooter } from 'mdbvue';
import VueRecaptcha from 'vue-recaptcha';
import axios from "axios";

export default {
  name: 'HomePage',
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
    mdbInput,
    VueRecaptcha,
    mdbNavbarBrand,
  },
  directives: {
    animateOnScroll
  },
  data() {
    return {
      recaptchaVerified: false,
      nameVerified: '',
      emailVerified: '',
      numberVerified: '',
      campaignVerified: '',
      messageVerified: '',
      pleaseTickRecaptchaMessage:''
    };
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
    checkForm(event) {
      event.preventDefault();
      event.target.classList.add('was-validated');
    },
    markRecaptchaAsVerified(response) {
      this.pleaseTickRecaptchaMessage = '';
      this.recaptchaVerified = true;
    },
    checkIfRecaptchaVerified() {
      if (this.nameVerified === '' && this.emailVerified === '' && this.numberVerified === '' && this.campaignVerified === '' && this.messageVerified === ''){
        this.pleaseTickRecaptchaMessage = 'Por favor, llena todos los campos marcados';
      } else if (this.recaptchaVerified === false) {
        this.pleaseTickRecaptchaMessage = 'Por favor, marca el CAPTCHA'; 
      } else {
        let dataEnvia = {
          collector: {
            to: {
              email: 'andy.jufa99@gmail.com',                            
              nombre: 'Consultas PIM'
            },
            from:{
              name: 'Consultas PIM',
              email: this.emailVerified
            },
            subject: 'Consultas PIM',
            html: `<!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
          </head>
          <body>
          <div style="font-family: arial,tahoma,verdana; color: #333333; font-size: 12px; background: #005B91; width: 100%!important; margin: 0; padding: 0" marginheight="0" marginwidth="0">
        <center>
            <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0; padding: 0;min-height: 100%!important;width: 100%!important">
                <tr>
                    <td valign="top" align="center" style="border-collapse: collapse">
                        <table style="width: 900px" width="600" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td style="background: #ffffff; border-radius: 1px; border: solid 1px #DDDDDD; padding: 15px; color: #333333">
                                    <table style="width: 100%" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <!-- Contenedor principal -->
                                        <div>
                                            <h1>Consultas PIM</h1>
                                            <p><strong>Nombre:</strong> ${this.nameVerified}</p>
                                            <p><strong>Correo Electrónico: </strong>${this.emailVerified}</p>
                                            <p><strong>Telefono: </strong> ${this.numberVerified}</p>
                                            <p><strong>Campañia/Empresa: </strong>${this.campaignVerified}</p>
                                            <p><strong>Mensaje:</strong></p>
                                            <p>${this.messageVerified}</p>
                                        </div>
                                        <!-- Termina contenedor -->
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </center>
      </div>
      </body>
      </html>`,
            categoria_sendgrid: 'Mailing_PIM'
          }
        };
        let tokenStr = 'U2VuZE1haWw6XiM1OHd2PUNRPVxAUFBVSA==';
        this.pleaseTickRecaptchaMessage = 'Mensaje enviado';
        axios({ method: "POST", url: "https://sendmail.recaudia.com/SendMailApi/send", data: dataEnvia, headers:{'Content-Type': 'application/json', 'Authorization': `${tokenStr}`} });
      }
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
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #000;
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
  width:40%; 
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
  font-size: 20px;
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
  height: 625px;
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

.cart-icon{
  padding: 15px 5px 0px 40px;
  width: 110px;
}

.header-title{
  color: black; 
  font-size: 55px;
  font-weight: bold;
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

.captcha-style{
  margin:10px 10px 10px 90px;
}

  .span{
    color: #000;
  }
  .navbar-toggler-icon{
    background: #000000;
  }

@media (max-width: 767px) {
  .header-content{
    width: 100%;
  }
  .header-title{
    color: black; 
    font-size: 35px;
    font-weight: bold;
  }
  .asesori-buttom{
    width: 100%;
  }
  .sobre-el-sitio{
    font-size: 15px;
    margin: 10px 0px 0px 20px;
  }
  .more-info-buttom{
  width: 310px;
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
    height: 750px;
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
  .captcha-style{
    margin:0px 0px 5px -20px;
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
  .Terminos{
    margin: 10px 0px 0px 20px;
    font-size: 12px;
    color: blue;
  }
  .send-buttom{
  width:50%; 
  border-radius: 6px 6px 6px 6px;
  -moz-border-radius: 6px 6px 6px 6px;
  -webkit-border-radius: 6px 6px 6px 6px;
  border: 0px solid #000000;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 5px;

  }
  .span{
    color: #000;
  }
  .navbar-toggler-icon{
    color: #000000;
  }
}
</style>
