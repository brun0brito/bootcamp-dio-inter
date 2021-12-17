function calculadora(){
    const operacao = Number(prompt('Escolha uma operaçãp:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - potenciação (**)'));


    // VERIFICA SE A OPÇÃO DIGITADA É VÁLIDA
    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    } else{

        // VARIAVEIS 
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;
        
        // VERIFICA SE OS PARAMETROS DIGITADOS SÃO VÁLIDOS
        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos')
            calculadora()
        } else {

             // FUNÇÃO DE SOMA
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            // FUNÇÃO DE SUBTRAÇÃO
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            // FUNÇÃO DE MULTIPLICAÇÃO
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            // FUNÇÃO DE DIVISÃO REAL
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            // FUNÇÃO DE DIVISÃO INTEIRA
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }
            
            // FUNÇÃO DE DIVISÃO INTEIRA
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até mais!');1
                } else {
                    alert('Digite uma opção valida!');
                    novaOperacao();
                }
            }
        }

       

        // VALIDADOR DE OPERAÇÃO
        switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;    
            }    
        
    }
    
    

}


calculadora();
