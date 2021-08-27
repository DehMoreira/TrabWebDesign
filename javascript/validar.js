function validar(){ 

        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var cidade = document.getElementById('cidade');
        var mensagem = document.getElementById('mensagem');
        var idade = document.getElementById('idade');
    



        if(nome.value == ""){
            alert("Não esqueça de informar o seu NOME!");
            // document.getElementById('nome').focus();
            return false;
        }

        
        if(nome.value.length < 6){
            alert("O campo NOME deve conter no mínimo 6 caracteres!");
            return false;
        }

        if(isNaN(idade.value)){
           alert("O campo IDADE precisa ser um NÚMERO!");
           return false;
        }
        
        if(email.value == ""){
            alert("Não esqueça de informar o seu E-MAIL!");
            return false;
        }

        if(cidade.value == ""){
            alert("O campo CIDADE não pode ficar vazio!");
            return false;
        }

        if(cidade.value.length < 4 ){
            alert("O campo CIDADE deve conter no mínimo 4 caracteres!");
            return false;
        }
      
        if(mensagem.value.length === 0){
            alert("Não esqueça da sua mensagem!");
            return false;
        }

        else{
            alert("Mensagem enviada com sucesso!")
        }


    }

