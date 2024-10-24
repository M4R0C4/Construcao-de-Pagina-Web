function fechar(){
    window.close();
}
// detalhes e funções do Equipamento
const detSupino = [
    {
    nome: "Supino",
    imagem: "C://Users/Fast Escritorio/Desktop/Mariana/AD2 - CPW/AD2r/SupinoVertical.png", 
    descricao: "O supino é um exercício eficaz para desenvolver a parte superior do corpo, focando nos músculos do peito, ombros e tríceps.",
    fonte: "https://www.academiacentralfitness.com.br/post/supinom%C3%A1quina-como-fazer-benef%C3%ADcios-e-varia%C3%A7%C3%B5es"
    }
]
const remadaBaixa = [{
    nome: "Remada Baixa",
    imagem: "C://Users/Fast Escritorio/Desktop/Mariana/AD2 - CPW/AD2r/RemadaBaixa.png", 
    descricao: "A remada baixa trabalha os músculos das costas, incluindo o latíssimo do dorso, trapézio e deltoide posterior.",
    fonte: "https://www.hipertrofia.org/blog/2018/03/24/remadabaixa/"
}]
const detExtensora = [{
    nome: "Cadeira Extensora",
    imagem: "C://Users/Fast Escritorio/Desktop/Mariana/AD2 - CPW/AD2r/CadeiraExtensora.png",
    descricao: "A cadeira extensora foca no fortalecimento dos músculos do quadríceps, através da extensão do joelho.",
    fonte: "https://treinomestre.com.br/cadeira-extensora-comopotencializar-os-resultados-4-dicas-importantes/"

}]

function supino (){
    const equipSupino = document.querySelector(".infoEquip");
    if (equipSupino) {
        equipSupino.innerHTML = `
        <td rowspan="3" colspan="3" class="infoEquip">
        <h2>${detSupino[0].nome}</h2>
        <p>${detSupino[0].descricao}</p>
        <a href="${detSupino[0].fonte}" target="_blank">Leia mais sobre ${detSupino[0].nome}</a>
        </td>
        `
    const imgSupino = document.querySelector(".imgCel");
    if (imgSupino){
        imgSupino.innerHTML = `
        <td rowspan="3" colspan="2" class="imgCel">
        <img src="${detSupino[0].imagem}" alt="${detSupino[0].nome}">
        </td>`
    }
    }
}
function remada (){
    const equipRemada = document.querySelector(".infoEquip");
    if (equipRemada) {
        equipRemada.innerHTML = `
        <td rowspan="3" colspan="3" class="infoEquip">
        <h2>${remadaBaixa[0].nome}</h2>
        <p>${remadaBaixa[0].descricao}</p>
        <a href="${remadaBaixa[0].fonte}" target="_blank">Leia mais sobre ${remadaBaixa[0].nome}</a>
        </td>
        `
    const imgRemada = document.querySelector(".imgCel");
    if (imgRemada){
        imgRemada.innerHTML = `
        <td rowspan="3" colspan="2" class="imgCel">
        <img src="${remadaBaixa[0].imagem}" alt="${remadaBaixa[0].nome}">
        </td>`
    }
    }
}
function extensora (){
    const equipExtensora = document.querySelector(".infoEquip");
    if (equipExtensora) {
        equipExtensora.innerHTML = `
        <td rowspan="3" colspan="3" class="infoEquip">
        <h2>${detExtensora[0].nome}</h2>
        <p>${detExtensora[0].descricao}</p>
        <a href="${detExtensora[0].fonte}" target="_blank">Leia mais sobre ${detExtensora[0].nome}</a>
        </td>
        `
    const imgExtensora = document.querySelector(".imgCel");
    if (imgExtensora){
        imgExtensora.innerHTML = `
        <td rowspan="3" colspan="2" class="imgCel">
        <img src="${detExtensora[0].imagem}" alt="${detExtensora[0].nome}">
        </td>`
    }
    }
}
// Funções Inscrição
//------------------
function validarTelefone() {
    const telefone = document.getElementById('tel').value;
    const celular = document.getElementById('cel').value;
    


    if (telefone.length > 0 && telefone.length !== 8) {
        alert('O telefone fixo deve ter exatamente 8 dígitos.');
        return
    }
    if (celular.length > 0 && celular.length !== 9) {
        alert('O celular deve ter exatamente 9 dígitos.');
        return
    }
    if (celular.length > 0 && !/^\d+$/.test(celular)) {
        alert('O celular deve conter apenas números.');
        return
    }
    else {
        
    }
} 

 // Seleciona os elementos <select>
 const matricula = 80.00;
 const anualAcademia = 180.00;
 const semestralAcademia = 220.00;
 const mensalAcademia = 260.00;
 const anualCombo = 330.00; 
 const semestrlCombo = 390.00;
 const mensalCombo = 440.00;
 const anualNatacao = 300.00;
 const semestralNatacao = 340.00;
 const mensalNatacao = 380.00;
 const atividadeSelect = document.getElementById("Atividade");
 const planoSelect = document.getElementById("Plano");

function verificarSelecao() {
    const atividadeSelecionada = atividadeSelect.value;
    const planoSelecionado = planoSelect.value;
    let valormostrado = document.getElementById("TxtTotal");
    const matriculadoCheckbox = document.getElementById("checkmat"); // Verifica o estado do checkbox "Matriculado?"
    let numMatricula = document.getElementById("mat").value; // Verifica o campo da Matricula

    // Verifica se os campos de atividade e plano estão preenchidos
    if(!matriculadoCheckbox.checked && numMatricula === "" && atividadeSelecionada !== '-----' && planoSelecionado !== '-----'){
        alert("Os campos preenchidos não batem. Verificar os campos 'Matriculado?' e o campo 'Número'. ");
    } else if (atividadeSelecionada === '-----') {
        alert("Escolha uma Atividade")
        return;  // Sai da função para evitar cálculos desnecessários
    } else if (planoSelecionado === '-----'){
        alert("Selecione um Plano")
    } 
    

    // Verifica se está matriculado e o número de matrícula foi preenchido
    if (matriculadoCheckbox.checked && numMatricula !== "") {
        console.log("Matriculado");
        // Cálculos para alunos matriculados, sem taxa de matrícula
        if (atividadeSelecionada == "Academia" && planoSelecionado == "Anual") {
            const valorTotal = anualAcademia * 12;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Academia" && planoSelecionado == "Semestral") {
            const valorTotal = semestralAcademia * 6;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Academia" && planoSelecionado == "Mensal") {
            const valorTotal = mensalAcademia;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Anual") {
            const valorTotal = anualCombo * 12;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Semestral") {
            const valorTotal = semestralCombo * 6;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Mensal") {
            const valorTotal = mensalCombo;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Anual") {
            const valorTotal = anualNatacao * 12;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Semestral") {
            const valorTotal = semestralNatacao * 6;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Mensal") {
            const valorTotal = mensalNatacao;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        }
    } else if (!matriculadoCheckbox.checked && numMatricula === "") {
        //valormostrado.value = "FOOI"
        console.log("Não Matriculado");
        // Cálculos para alunos não matriculados, com taxa de matrícula
        if (atividadeSelecionada == "Academia" && planoSelecionado == "Anual") {
            const valorTotal = matricula + (anualAcademia * 12);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Academia" && planoSelecionado == "Semestral") {
            const valorTotal = matricula + (semestralAcademia * 6);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Academia" && planoSelecionado == "Mensal") {
            const valorTotal = matricula + mensalAcademia;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Anual") {
            const valorTotal = matricula + (anualCombo * 12);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Semestral") {
            const valorTotal = matricula + (semestralCombo * 6);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Combo" && planoSelecionado == "Mensal") {
            const valorTotal = matricula + mensalCombo;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Anual") {
            const valorTotal = matricula + (anualNatacao * 12);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Semestral") {
            const valorTotal = matricula + (semestralNatacao * 6);
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        } else if (atividadeSelecionada == "Natacao" && planoSelecionado == "Mensal") {
            const valorTotal = matricula + mensalNatacao;
            console.log(`O preço a ser pago é de: R$ ${valorTotal}.`);
            valormostrado.value = valorTotal;
        }
        
    }
}
