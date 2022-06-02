const RootComponent = {
    /* Data properties */
    data() {
      return {   
          salireBrut: 0,
          coef:0.78
      };
    },
  
    /* Methodes */
    methods: {
      /* Changement du texte */
     
      inputBrut(e) {
        
        this.salireBrut = Number(e.target.value);
      },
      changecoef(e) {console.log(e)
        if (e.target.checked==true) {this.coef=0.75}
        else{this.coef=0.78}
      },
      
    },
      /* Methodes */
      computed: {
        /* Changement du texte */
        outputNet() {
          return this.salireBrut*this.coef;
        },
        outputNetMonth() {
            return this.outputNet/12;
          },
         
        BrutMonth() {
            return this.salireBrut/12;
          },
          

      },
  };
  
  /**
   * Instance d'app montée
   */
  Vue.createApp(RootComponent).mount("#root");
  