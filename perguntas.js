

criarCartao(
    "Q1",    
    "o'que é programação?",  
    "é um conjunto de codigos que fazem o diposotivo executar tarefas especificas" 
);

criarCartao(
    "Q2",    
    "Qual a sigla do subcampo que processa linguagem natural?",  
    "PLN" 
);

criarCartao(
    "Q3",    
    "quando a programaçao surgiu??",  
    "1843" 
);

criarCartao(
    "Q4",    
    "Qual profissão abramge a programação?",  
    "desenvolvedores de software" 
);

criarCartao(
    "Q5",    
    "Qual assistente virtual mencionado ajuda em tarefas diárias?",  
    "Siri" 
);

criarCartao(
    "Q6",    
    "Qual termo refere-se ao preconceito em algoritmos?",  
    "Viés" 
);

criarCartao(
    "Q7",    
    "Para que tarefa carros autônomos usam IA?",  
    "Navegação" 
);

criarCartao(
    "Q8",    
    "Que subcampo combina IA e engenharia mecânica?",  
    "Robótica" 
);

criarCartao(
    "Q9",    
    "Em qual domínio a IA é usada para avaliação de riscos?",  
    "Finanças" 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});