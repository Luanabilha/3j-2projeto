const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
 
async function visualizadorDadosGlobais(){
    const res=await fetch(url)
    const dados  = await res.json();
    const totalPessoasMundo = dados.total_pessoas_mundo
    const totalPessoasConectadas = dados.total_pessoas_conectadas
    const tempo = dados.tempo_medio
    const container = document.querySelector('.graficos-container')
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem  <span> ${totalPessoasMundo} </span>
    de habitantes e destes <span> ${totalPessoasConectadas} </span> estão conectadas a alguma rede social
    em média <span>${tempo}</span>`;
    container.appendChild(paragrafo)
}

visualizadorDadosGlobais()