criarCartao(
    "Categoria",    
    "Pergunta",  
    "Resposta" 
);

criarCartao(
    "Q1",    
    "o que é html?",  
    "é a linguagem padrao da estrutura do codigo" 
);

criarCartao(
    "Q2",    
    "o'que é programação?",  
    "é um conjunto de codigos que fazem o diposotivo executar tarefas especificas" 
);

criarCartao(
    "Q3",    
    "Qual a sigla do subcampo que processa linguagem natural?",  
    "PLN" 
);

criarCartao(
    "Q4",    
    "quando a programaçao surgiu??",  
    "1843" 
);

criarCartao(
    "Q5",    
    "Qual profissão abramge a programação?",  
    "desenvolvedores de software" 
);

criarCartao(
    "Q6",    
    "Qual assistente virtual mencionado ajuda em tarefas diárias?",  
    "Siri" 
);

criarCartao(
    "Q7",    
    "Qual termo refere-se ao preconceito em algoritmos?",  
    "Viés" 
);

criarCartao(
    "Q8",    
    "Para que tarefa carros autônomos usam IA?",  
    "Navegação" 
);

criarCartao(
    "Q9",    
    "Que subcampo combina IA e engenharia mecânica?",  
    "Robótica" 
);

criarCartao(
    "Q10",    
    "Em qual domínio a IA é usada para avaliação de riscos?",  
    "Finanças" 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});