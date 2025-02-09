
function showQuestionCountModal() {
    document.getElementById("questionCountModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("questionCountModal").style.display = "none";
}


function startQuiz() {
    // Remover o menu
    const menuContainer = document.querySelector(".menu-container");
    if (menuContainer) {
        menuContainer.style.display = "none"; // Oculta o menu
    }

    //qant perguntas
    const questionCount = document.getElementById("questionCount").value;

    // Chama a API 
    const triviaAPI = fetch(`https://opentdb.com/api.php?amount=${questionCount}&difficulty=medium`);

    triviaAPI.then((r) => r.json())
        .then((body) => {
            const container = document.createElement("div");
            container.classList.add("conteinerPrincipal");

            let respostasCertas = 0;
            let respostasErradas = 0;
            let perguntasRespondidas = 0;

            body.results.forEach((element, i) => {
                console.log(element);
                
                // Elemento pergunta
                const questaoElement = document.createElement("h1");
                questaoElement.classList.add("questao");
                questaoElement.innerHTML = `Pergunta ${i + 1}: ${element.question}`;
                container.appendChild(questaoElement);

                // Tela de respostas
                const listaRespostas = document.createElement("ul");
                listaRespostas.classList.add("listaRespostas");

                // Array com respostas
                const respostas = [...element.incorrect_answers, element.correct_answer];
                respostas.sort(() => Math.random() - 0.5);
                
                let respostaSelecionada = false;

                respostas.forEach(resposta => {
                    const itemResposta = document.createElement("li");
                    itemResposta.classList.add("itemResposta");
                    itemResposta.setAttribute("data-wg-notranslate", "true");
                    itemResposta.innerHTML = resposta;

                    itemResposta.addEventListener("click", () => {
                        if (respostaSelecionada) return; // apenas uma alternativa .-.
                        respostaSelecionada = true;

                        perguntasRespondidas++;

                        if (resposta === element.correct_answer) {
                            itemResposta.classList.add("correct");
                            respostasCertas++;
                        } else {
                            itemResposta.classList.add("incorrect");
                            respostasErradas++;
                        }

                        listaRespostas.querySelectorAll("li").forEach(item => {
                            item.style.pointerEvents = "none"; // Desabilita click !_!
                        });

                        // Resultado na tela
                        if (perguntasRespondidas === body.results.length) {
                            setTimeout(() => {
                                const resultado = document.createElement("div");
                                resultado.classList.add("resultado");
                                resultado.innerHTML = `Você acertou ${respostasCertas} de ${body.results.length} perguntas!`;
                                document.body.appendChild(resultado);
                            }, 500);
                        }
                    });
                    listaRespostas.appendChild(itemResposta);
                });

                container.appendChild(listaRespostas);
            });

            document.body.appendChild(container);

            closeModal();
        })
        .catch((error) => {
            console.error(error);
        });
}
//    #Gambiarra-Monstra
    
