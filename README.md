# Quiz em Português (PT-BR)

Este projeto é um quiz desenvolvido utilizando a API da [Trivia API](https://opentdb.com/api_config.php), uma API que gera questões aleatórias de múltiplas escolhas.

### Descrição do Problema

Ao integrar a API de Trivia, percebi que as questões retornadas estavam em inglês, o que não atendia ao objetivo de ter um quiz em português. Após pesquisar por soluções, encontrei a [Weglot](https://dashboard.weglot.com), uma API de tradução que me permitiu traduzir as questões de forma eficaz.

### Desafios Encontrados

A maior dificuldade foi encontrar uma API de tradução gratuita. Embora a API do Google fosse uma opção, ela exigia um cadastro que não pude realizar devido à minha idade. Após essa pesquisa, a Weglot se mostrou uma alternativa viável para realizar a tradução das questões.

### Tecnologias Utilizadas

- **Trivia API**: Para gerar questões de múltipla escolha.
- **Weglot**: Para traduzir as questões de inglês para português.
- **JavaScript / HTML / CSS**: Para desenvolver a interface interativa e implementar a lógica do quiz.

### Como Funciona

1. A Trivia API é chamada para recuperar questões em inglês.
2. As questões são enviadas para a Weglot, que realiza a tradução para o português.
3. As questões traduzidas são exibidas na interface do quiz.
4. O usuário pode responder às questões e ver o resultado no final.

### Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/UrielAndrade/Quiz-em-PT-BR.git
