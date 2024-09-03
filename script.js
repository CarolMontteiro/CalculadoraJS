       
       

        function calculate(operation) {
            let n1 = document.getElementById('n1').value;
            let n2 = document.getElementById('n2').value;
            let result = document.getElementById('result');

            console.log(n1)

            if(validate(n1, n2)) {
                
                n1 = Number(n1);
                n2 = Number(n2);

                if (!(n1 === "") && !(n2 === "")) {
            
                    switch (operation) {
                        case 'somar':
                            somar(n1, n2);
                            break;
                        case 'subtrair':
                            subtrair(n1, n2);
                            break;
                        case 'multiplicar':
                            multiplicar(n1, n2);
                            break;
                        case 'dividir':
                            dividir(n1, n2);
                            break;
                        default:
                            alert('escolha uma operação');
                    } 
                }else {
                    alert('Precisa preencher os campos para fazer a operação');
                }
            }else {
                alert('Dados invalidos!');
            }
        }
    
        function somar(n1, n2) {
            result.innerHTML = n1 + n2;
            alert(`A soma entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);
        }

        function subtrair(n1, n2) {
            result.innerHTML = n1 - n2;
            alert(`A subtração entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);
        }

        function multiplicar(n1, n2) {
            result.innerHTML = n1 * n2;
            alert(`A multiplicação entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);
        }

        function dividir(n1, n2) {
            result.innerHTML = n1 / n2;
            alert(`A divisão entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);
        }

        function validate(value1, value2) {
            let validate1 = !isNaN(parseFloat(value1)) && !isNaN(isFinite(value1));
            let validate2 = !isNaN(parseFloat(value2)) && !isNaN(isFinite(value2));
            return validate1 && validate2;

        }

       