function calcularSalario() {

    var bruto = parseFloat(document.getElementById("bruto").value);
    var numDepen = parseFloat(document.getElementById("dependente").value);
    var desc = parseFloat(document.getElementById("desconto").value);
    var imposto = 0;
    var inss = 0;
    var sal = 0;

    // Redução do Salário Bruto pelo INSS
    if (bruto < 1320) {
        inss = bruto * 0.075;
    }
    else if (bruto > 1320 && bruto <= 2571.29) {
        inss = bruto * 0.09;
    }
    else if (bruto > 2571.29 && bruto <= 3856.94) {
        inss = bruto * 0.12;
    }
    else if (bruto > 3856.94 && bruto <= 7507.49) {
        inss = bruto * 0.14;
    } else {
        inss = 1501.49;
    }

    // Redução do Salário INSS pelo IR e isenção do Dependente
    sal = bruto - inss
    if (sal > 2112 && sal <= 2826.65) {
        imposto = (sal - 2112.01) * 0.075 - numDepen * 189.59;
    }
    else if (sal > 2826.65 && sal <= 3751.05) {
        imposto = (sal - 2826.66) * 0.15 - numDepen * 189.59;
    }
    else if (sal > 3751.05 && sal <= 4664.68) {
        imposto = (sal - 3751.06) * 0.225 - numDepen * 189.59;
    }
    else {
        imposto = (sal - 4664.69) * 0.275 - numDepen * 189.59;
    }

    // Caso IR seja negativo
    if (imposto < 0) {
        imposto = 0;
    }

    var liq = bruto - inss - imposto - desc;
    var frase = `<b>Salário Líquido:</b><br>  <b>R$ ${liq.toFixed(2)}</b>`;
    document.getElementById("resposta").innerHTML = frase;

}

function calcularFerias() {

    var bruto = parseFloat(document.getElementById("bruto").value);
    var numDepen = parseFloat(document.getElementById("dependente").value);
    var dias = parseFloat(document.getElementById("dias").value);
    var imposto = 0;
    var inss = 0;
    var sal = 0;
    var proporcional = 0;

    // Proporcionalidade das Férias
    bruto = bruto * (dias / 30);
    proporcional = bruto / 3;

    // Redução do Salário Bruto pelo INSS
    if (bruto < 1320) {
        inss = bruto * 0.075;
    }
    else if (bruto > 1320 && bruto <= 2571.29) {
        inss = bruto * 0.09;
    }
    else if (bruto > 2571.29 && bruto <= 3856.94) {
        inss = bruto * 0.12;
    }
    else if (bruto > 3856.94 && bruto <= 7507.49) {
        inss = bruto * 0.14;
    } else {
        inss = 1501.49;
    }

    // Redução do Salário INSS pelo IR e isenção do Dependente
    sal = bruto - inss
    if (sal > 2112 && sal <= 2826.65) {
        imposto = (sal - 2112.01) * 0.075 - numDepen * 189.59;
    }
    else if (sal > 2826.65 && sal <= 3751.05) {
        imposto = (sal - 2826.66) * 0.15 - numDepen * 189.59;
    }
    else if (sal > 3751.05 && sal <= 4664.68) {
        imposto = (sal - 3751.06) * 0.225 - numDepen * 189.59;
    }
    else {
        imposto = (sal - 4664.69) * 0.275 - numDepen * 189.59;
    }

    // Caso IR seja negativo
    if (imposto < 0) {
        imposto = 0;
    }

    var ferias = bruto + proporcional - inss - imposto;
    var frase = `<b>Férias:</b><br>  <b>R$ ${ferias.toFixed(2)}</b>`;

    document.getElementById("resposta").innerHTML = frase;

}

function calcularRescisao(){

    var bruto = parseFloat(document.getElementById("bruto").value);
    var numDepen = parseFloat(document.getElementById("dependente").value);
    var dias = parseFloat(document.getElementById("dias").value);
    var meses = parseFloat(document.getElementById("meses").value);
    var imposto = 0;
    var inss = 0;
    var sal = 0;
    var proporcionalAnual = 0;
    var proporcionalMensal = 0;
    var feriasProp = 0;
    var feriasVenc = 0;

    // Salário do último mês
    proporcionalMensal = bruto * dias / 30;

    // 13º proporcional
    proporcionalAnual = bruto * meses / 12;

    // Férias proporcionais
    feriasProp = proporcionalAnual * 4 / 3;

    // Férias vencidas
    feriasVenc = bruto * 5 / 3 + feriasProp; 

    // Novo bruto
    bruto = proporcionalMensal + proporcionalAnual + feriasProp + feriasVenc

    // Redução do Salário Bruto pelo INSS
    if (bruto < 1320) {
        inss = bruto * 0.075;
    }
    else if (bruto > 1320 && bruto <= 2571.29) {
        inss = bruto * 0.09;
    }
    else if (bruto > 2571.29 && bruto <= 3856.94) {
        inss = bruto * 0.12;
    }
    else if (bruto > 3856.94 && bruto <= 7507.49) {
        inss = bruto * 0.14;
    } else {
        inss = 1501.49;
    }

    // Redução do Salário INSS pelo IR e isenção do Dependente
    sal = bruto - inss
    if (sal > 2112 && sal <= 2826.65) {
        imposto = (sal - 2112.01) * 0.075 - numDepen * 189.59;
    }
    else if (sal > 2826.65 && sal <= 3751.05) {
        imposto = (sal - 2826.66) * 0.15 - numDepen * 189.59;
    }
    else if (sal > 3751.05 && sal <= 4664.68) {
        imposto = (sal - 3751.06) * 0.225 - numDepen * 189.59;
    }
    else {
        imposto = (sal - 4664.69) * 0.275 - numDepen * 189.59;
    }

    // Caso IR seja negativo
    if (imposto < 0) {
        imposto = 0;
    }

    var rescisao = bruto - inss - imposto;
    var frase = `<b>Rescisão:</b><br>  <b>R$ ${rescisao.toFixed(2)}</b>`;

    document.getElementById("resposta").innerHTML = frase;
}