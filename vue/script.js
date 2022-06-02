const Component = {
    data() {
      return {
        prenom: " david" ,
        nom:"athuil",
        poste:"Dev",
        tel:"0625142609",  
        titleClass: "bgyellow",
        titleClass1: "bgblue",
        titleClass2:"red sizelarge",
        couleur:"",
      }
    },
   
    methods: {
        say: function () 
        {
          this.titleClass2 = "blue";
        },

        sayprenom  (e) 
        {
          this.prenom = e.target.value;
        }



      }
        
      

}  
  Vue.createApp(Component).mount('#root')


  // say: function (couleur) 
  //       {
  //         this.titleClass2 = couleur;
  //       }