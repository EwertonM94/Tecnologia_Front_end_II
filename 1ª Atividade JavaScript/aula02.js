var i, altura, sexo, maioralt = 0, menoralt = 0, mulher = 0, homem = 0, mediahomem = 0, contamulher     =  0 , contahomem = 0;

            para(i = 1 ; i <= 15;  eu++) {        
                altura = parseFloat(prompt("Informe sua altura["+i+"]:" ));
                sexo = prompt("Sexo: M ou F:");


                if(i == 1) {
                    menoralt = altura;
                } if(altura > maioralt) { 
                    maioralt = altura;
                } if(altura < menoralt) { 
                    menoralt = altura;
                } if(sexo == 'F') {
                    mulher += altura;
                    contamulher++;
                } else if(sexo == 'M') {
                    homem += altura;
                    contahomem++;
                }
            }
            mediahomem = homem/contahomem;
            alert("A maior altura é: "+maioralt); 
            alert("A menor altura é: "+menoralt);
            alert("A média dos homens é: "+mediahomem);
            alert("O número de mulheres é: "+contamulher);