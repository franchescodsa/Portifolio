 var nomee=document.querySelector("#nome");

    var email=document.querySelector("#email");

    var assunto=document.querySelector("#assunto");

    var mensagem=document.querySelector("#mensagem");

    var enviar=document.querySelector("#btnn")

    enviar.addEventListener('click', function(e){
        e.preventDefault();
         const nomeValue=nomee.value;
         const emailValue=email.value;

         if(nomeValue==="" || emailValue===""){
            alert("Preencha os campos")
            return
         }
        

    })
    

  
