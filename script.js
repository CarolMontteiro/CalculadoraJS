       

        function calculate(operation) {
            var n1 = parseInt(document.querySelector('#n1').value);
            var n2 = parseInt(document.querySelector('#n2').value);
            var result = document.getElementById('result');
            console.log(n1, n2)
            if (!(n1.value === "") && !(n2.value === "")) {
            
                switch (operation){
                    case 'somar':
                        console.log('esta operação é de soma');
                        somar(n1, n2);
                        break;
                    case 'subtrair':
                        console.log('esta operação é de subtrair');
                        subtrair(n1, n2);
                        break;
                    case 'multiplicar':
                        console.log('esta operação é de multiplicar');
                        multiplicar(n1, n2);
                        break;
                    case 'dividir':
                        console.log('esta operação é de dividir');
                        dividir(n1, n2);
                        break;
                    default:
                        console.log('escolha uma operação');
                } 
            }else {
                console.log('Precisa preencher os campos para fazer a operação');
            }
               
        }

        function somar(n1, n2) {
            result.innerHTML = n1 + n2;
            alert(`A soma entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);

            console.log(result);

        }

        function subtrair(n1, n2) {
            result.innerHTML = n1 - n2;
            alert(`A subtração entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);

            console.log(result)
        }

        function multiplicar(n1, n2) {
            result.innerHTML = n1 * n2;
            alert(`A multiplicação entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);

            console.log(result)
        }

        function dividir(n1, n2) {
            result.innerHTML = n1 / n2;
            alert(`A divisão entre ${n1} e ${n2} é igual a: ${result.innerHTML}`);

            console.log(result)
        }