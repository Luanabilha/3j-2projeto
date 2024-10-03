const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
 
async function visualizadorDadosGlobais(){
    const dados  = await res.json();
    const totalPessoasMundo = dados.total_pessoas_mundo
    const totalPessoasConectadas = dados.total_pessoas_conectadas
    const tempo = dados.tempo_medio
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-texto')
    
}