        // ------------------------------------------------------------
        // BANCO DE QUESTÕES
        // ------------------------------------------------------------
        const simulados = {
            1: {
                questions: [
                    { type: 'mc', question: 'Qual conceito da POO permite que diferentes objetos sejam utilizados por meio de uma mesma abstração, apresentando comportamentos específicos?', options: ['A) Encapsulamento', 'B) Herança', 'C) Polimorfismo', 'D) Abstração'], correct: 2, explanation: 'Polimorfismo permite que a mesma chamada produza comportamentos diferentes, como no exemplo de Pagamento e suas subclasses.' },
                    { type: 'mc', question: 'Sobre a programação procedural e a POO, é correto afirmar que:', options: ['A) Na procedural, os dados e funções são agrupados em objetos.', 'B) Na POO, o foco está em procedimentos que manipulam dados globais.', 'C) Na POO, os objetos são responsáveis por seus próprios dados e comportamentos.', 'D) A procedural não permite separação entre dados e funções.'], correct: 2, explanation: 'Na POO, os objetos encapsulam estado e comportamento, diferentemente da procedural que separa dados e funções.' },
                    { type: 'mc', question: 'O que é encapsulamento?', options: ['A) Criar subclasses para reutilizar código.', 'B) Organizar estado e comportamento em uma unidade, controlando o acesso.', 'C) Permitir que várias formas de um método coexistam.', 'D) Representar apenas os aspectos essenciais de uma entidade.'], correct: 1, explanation: 'Encapsulamento organiza estado e comportamento dentro de uma classe, controlando como o estado interno é acessado.' },
                    { type: 'mc', question: 'Qual das alternativas representa uma relação de composição?', options: ['A) Departamento e Professor', 'B) Carro e Motor', 'C) Pedido e ItemPedido', 'D) Funcionário e Professor'], correct: 2, explanation: 'Na composição, o objeto composto controla o ciclo de vida dos componentes. ItemPedido faz parte de Pedido e não existe sem ele.' },
                    { type: 'mc', question: 'Sobre herança, é INCORRETO afirmar:', options: ['A) Permite reutilização de código.', 'B) Cria uma relação forte entre superclasse e subclasse.', 'C) É sempre a melhor opção quando um objeto possui outro.', 'D) Possibilita polimorfismo.'], correct: 2, explanation: 'Herança não é adequada quando a relação não é de especialização verdadeira. Nesses casos, composição é preferível.' },
                    { type: 'mc', question: 'Em Python, qual método especial é usado para definir a representação de um objeto destinada à depuração?', options: ['A) __str__', 'B) __repr__', 'C) __eq__', 'D) __len__'], correct: 1, explanation: '__repr__ fornece uma representação destinada principalmente a depuração e desenvolvimento.' },
                    { type: 'mc', question: 'Qual princípio SOLID estabelece que uma classe deve ter um único motivo para mudar?', options: ['A) OCP', 'B) SRP', 'C) DIP', 'D) LSP'], correct: 1, explanation: 'SRP (Single Responsibility Principle) diz que uma classe deve ter uma responsabilidade bem definida e um único motivo para mudar.' },
                    { type: 'mc', question: 'Sobre duck typing em Python, é correto afirmar:', options: ['A) Exige que os objetos herdem de uma classe base comum.', 'B) O foco está na identidade do tipo, não no comportamento.', 'C) Se um objeto possui os comportamentos necessários, ele pode ser utilizado.', 'D) Só funciona com classes abstratas.'], correct: 2, explanation: 'Duck typing desloca o foco da identidade do tipo para o comportamento. Se o objeto tem os métodos necessários, ele serve.' },
                    { type: 'disc', question: 'Explique a diferença entre sobrecarga (overloading) e sobrescrita (overriding) e dê um exemplo de cada.' },
                    { type: 'disc', question: 'Descreva o princípio da inversão de dependência (DIP) e como ele ajuda a reduzir o acoplamento.' }
                ]
            },
            2: {
                questions: [
                    { type: 'mc', question: 'Qual conceito consiste em representar os aspectos essenciais de uma entidade, ignorando detalhes irrelevantes para o contexto?', options: ['A) Encapsulamento', 'B) Abstração', 'C) Herança', 'D) Polimorfismo'], correct: 1, explanation: 'Abstração é representar os aspectos essenciais de uma entidade para determinado contexto, ignorando detalhes desnecessários.' },
                    { type: 'mc', question: 'Em relação à POO, qual das alternativas NÃO é uma vantagem típica?', options: ['A) Organização do código em unidades.', 'B) Facilitação da manutenção.', 'C) Garantia automática de boa arquitetura.', 'D) Redução do acoplamento.'], correct: 2, explanation: 'POO não garante automaticamente uma boa arquitetura. A qualidade depende de como os conceitos são aplicados.' },
                    { type: 'mc', question: 'O que é uma classe abstrata em Python?', options: ['A) Uma classe que não pode ser instanciada e define contratos.', 'B) Uma classe que só possui atributos públicos.', 'C) Uma classe que herda de várias outras.', 'D) Uma classe que não pode ter métodos.'], correct: 0, explanation: 'Classe abstrata define uma abstração que não deve ser instanciada diretamente e estabelece operações que subclasses devem implementar.' },
                    { type: 'mc', question: 'Qual a principal diferença entre composição e agregação?', options: ['A) Composição permite herança múltipla, agregação não.', 'B) Na composição, os componentes têm ciclo de vida dependente; na agregação, independente.', 'C) Agregação é mais forte que composição.', 'D) Composição só existe em Python.'], correct: 1, explanation: 'Composição: objeto composto controla ciclo de vida. Agregação: objetos participantes podem existir independentemente.' },
                    { type: 'mc', question: 'Sobre o princípio Aberto/Fechado (OCP), é correto afirmar:', options: ['A) Uma classe deve estar fechada para extensão e aberta para modificação.', 'B) Uma classe deve estar aberta para extensão, mas fechada para modificação.', 'C) Toda classe deve ter apenas um método.', 'D) OCP é violado pelo uso de polimorfismo.'], correct: 1, explanation: 'OCP: aberto para extensão (novas funcionalidades), fechado para modificação (evitar alterar código existente).' },
                    { type: 'mc', question: 'Qual mecanismo em Python permite controlar o acesso a atributos, validando valores antes de aceitar alterações?', options: ['A) name mangling', 'B) property', 'C) duck typing', 'D) MRO'], correct: 1, explanation: 'property permite acessar um atributo de forma simples, mas com controle e regras, como validação.' },
                    { type: 'mc', question: 'O que é o problema do diamante na herança múltipla?', options: ['A) Quando uma classe herda de duas classes que possuem uma mesma superclasse.', 'B) Quando uma classe não implementa métodos abstratos.', 'C) Quando há sobrecarga de métodos.', 'D) Quando o encapsulamento é quebrado.'], correct: 0, explanation: 'O problema do diamante ocorre quando uma classe herda de duas classes que, por sua vez, possuem uma mesma superclasse.' },
                    { type: 'mc', question: 'Sobre coesão e acoplamento, a boa prática recomenda:', options: ['A) Alto acoplamento e baixa coesão.', 'B) Baixo acoplamento e alta coesão.', 'C) Alto acoplamento e alta coesão.', 'D) Baixo acoplamento e baixa coesão.'], correct: 1, explanation: 'Uma arquitetura procura baixo acoplamento (pouca dependência entre classes) e alta coesão (responsabilidades relacionadas).' },
                    { type: 'disc', question: 'Explique o que é o padrão Strategy e em que situação ele é útil.' },
                    { type: 'disc', question: 'Descreva o princípio da Responsabilidade Única (SRP) e dê um exemplo de refatoração que o aplique.' }
                ]
            },
            3: {
                questions: [
                    { type: 'mc', question: 'Qual das opções abaixo NÃO é um pilar da Programação Orientada a Objetos?', options: ['A) Abstração', 'B) Encapsulamento', 'C) Compilação', 'D) Herança'], correct: 2, explanation: 'Os pilares da POO são: abstração, encapsulamento, herança e polimorfismo. Compilação não é um pilar.' },
                    { type: 'mc', question: 'Sobre o método __init__ em Python, é correto afirmar:', options: ['A) É um método especial que inicializa uma instância.', 'B) É usado para destruir objetos.', 'C) É obrigatório em toda classe.', 'D) Define a representação textual do objeto.'], correct: 0, explanation: '__init__ é o método inicializador, chamado quando um objeto é criado para preparar a instância.' },
                    { type: 'mc', question: 'Qual a vantagem de usar interfaces (abstrações) em vez de depender de implementações concretas?', options: ['A) Aumenta o acoplamento.', 'B) Dificulta a substituição de implementações.', 'C) Permite alterar a implementação sem modificar o código que a utiliza.', 'D) Torna o sistema mais lento.'], correct: 2, explanation: 'Separar interface de implementação facilita a evolução, pois podemos alterar ou substituir a implementação sem afetar os consumidores.' },
                    { type: 'mc', question: 'O que é o MRO (Method Resolution Order) em Python?', options: ['A) Um padrão de projeto.', 'B) A ordem de busca de métodos na herança múltipla.', 'C) Um tipo de encapsulamento.', 'D) Um método especial para comparação.'], correct: 1, explanation: 'MRO é o caminho de busca que diz ao Python em qual ordem procurar um método até encontrar a implementação, usando C3 Linearization.' },
                    { type: 'mc', question: 'Em relação à migração de sistemas legados para POO, qual estratégia é recomendada?', options: ['A) Reescrever todo o sistema de uma vez.', 'B) Migração incremental com testes de caracterização.', 'C) Ignorar os testes automatizados.', 'D) Transformar todas as funções em métodos sem analisar responsabilidades.'], correct: 1, explanation: 'A migração incremental é mais segura, evitando quebrar funcionalidades. Testes de caracterização registram o comportamento atual.' },
                    { type: 'mc', question: 'Qual princípio SOLID sugere que dependências importantes devem apontar para abstrações?', options: ['A) SRP', 'B) OCP', 'C) DIP', 'D) ISP'], correct: 2, explanation: 'DIP (Dependency Inversion Principle) diz que classes importantes não devem depender de implementações específicas, mas de abstrações.' },
                    { type: 'mc', question: 'Sobre o uso de herança, é correto afirmar:', options: ['A) Deve ser usada sempre que duas classes compartilham algum código.', 'B) Cria uma relação forte entre classes, podendo ser inadequada.', 'C) É a única forma de obter polimorfismo.', 'D) Impede a reutilização de código.'], correct: 1, explanation: 'Herança cria uma relação relativamente forte. Alterações na superclasse podem afetar subclasses, por isso deve ser usada com cuidado.' },
                    { type: 'mc', question: 'O que é complexidade acidental?', options: ['A) Dificuldade inerente ao problema de negócio.', 'B) Dificuldade introduzida pela própria solução, não pelo problema.', 'C) Complexidade que surge naturalmente em sistemas grandes.', 'D) Um tipo de padrão de projeto.'], correct: 1, explanation: 'Complexidade acidental é a dificuldade introduzida pela própria solução (ex.: abstrações desnecessárias, overengineering).' },
                    { type: 'disc', question: 'Explique a diferença entre herança e composição. Em que situação a composição é preferível?' },
                    { type: 'disc', question: 'O que é encapsulamento e qual sua importância para a manutenção de sistemas? Dê um exemplo prático.' }
                ]
            }
        };

        // ------------------------------------------------------------
        // ESTADO
        // ------------------------------------------------------------
        let currentSim = null;
        let score = 0;
        let mcStatus = {};
        let discStatus = {};

        const homeScreen = document.getElementById('homeScreen');
        const simuladoScreen = document.getElementById('simuladoScreen');
        const questionsContainer = document.getElementById('questionsContainer');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const backHomeBtn = document.getElementById('backHomeBtn');
        const themeToggle = document.getElementById('themeToggle');

        // ------------------------------------------------------------
        // SISTEMA DE TEMAS (3 temas)
        // ------------------------------------------------------------
        const THEMES = ['light', 'dark', 'retro'];
        const THEME_ICONS = { light: '☀️', dark: '🌙', retro: '💾' };
        const THEME_TITLES = {
            light: 'Tema Claro (clique para Dark Mode)',
            dark: 'Dark Mode (clique para tema Retrô)',
            retro: 'Tema Retrô 90s/2000 (clique para tema Claro)'
        };

        function applyTheme(theme) {
            document.body.classList.remove('light-mode', 'dark-mode', 'retro-mode');
            
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            } else if (theme === 'retro') {
                document.body.classList.add('retro-mode');
            }
            // light é o padrão, sem classe extra

            themeToggle.textContent = THEME_ICONS[theme];
            themeToggle.title = THEME_TITLES[theme];
            localStorage.setItem('poo-theme', theme);
        }

        function getNextTheme(current) {
            const idx = THEMES.indexOf(current);
            return THEMES[(idx + 1) % THEMES.length];
        }

        // Carrega tema salvo
        const savedTheme = localStorage.getItem('poo-theme');
        if (savedTheme && THEMES.includes(savedTheme)) {
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }

        themeToggle.addEventListener('click', function() {
            const current = localStorage.getItem('poo-theme') || 'light';
            const next = getNextTheme(current);
            applyTheme(next);
        });

        // ------------------------------------------------------------
        // PONTUAÇÃO
        // ------------------------------------------------------------
        function updateScoreDisplay() {
            scoreDisplay.innerHTML = `${Math.round(score)} <span>/ 1000</span>`;
        }

        function recalcScore() {
            if (!currentSim) return;
            const sim = simulados[currentSim];
            let correctMC = 0;

            sim.questions.forEach((q, idx) => {
                if (q.type === 'mc' && mcStatus[idx] === 'correct') correctMC++;
            });

            let mcScore = correctMC * 100;
            let discScore = 0;
            sim.questions.forEach((q, idx) => {
                if (q.type === 'disc' && discStatus[idx] === true) discScore += 100;
            });

            score = mcScore + discScore;
            if (score > 1000) score = 1000;
            updateScoreDisplay();
        }

        // ------------------------------------------------------------
        // RENDERIZAÇÃO DO SIMULADO
        // ------------------------------------------------------------
        function renderSimulado(simNumber) {
            currentSim = simNumber;
            score = 0;
            mcStatus = {};
            discStatus = {};
            updateScoreDisplay();

            const sim = simulados[simNumber];
            if (!sim) return;

            let html = '';
            sim.questions.forEach((q, idx) => {
                if (q.type === 'mc') {
                    html += `
                        <div class="question-card" data-qidx="${idx}" data-type="mc">
                            <div class="question-number">Questão ${idx + 1} · Múltipla Escolha</div>
                            <div class="question-text">${q.question}</div>
                            <div class="options" data-qidx="${idx}">
                                ${q.options.map((opt, optIdx) => `
                                    <div class="option" data-opt-index="${optIdx}" data-qidx="${idx}">
                                        <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                                        <span>${opt.replace(/^[A-D]\)\s*/, '')}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="feedback hidden" id="feedback-${idx}"></div>
                        </div>
                    `;
                } else {
                    html += `
                        <div class="question-card" data-qidx="${idx}" data-type="disc">
                            <div class="question-number">Questão ${idx + 1} · Discursiva</div>
                            <div class="question-text">${q.question}</div>
                            <div class="discursive-answer">
                                <textarea id="disc-text-${idx}" placeholder="Digite sua resposta aqui..." rows="4"></textarea>
                                <div class="discursive-actions">
                                    <button class="btn btn-sm btn-verify" data-disc-verify="${idx}">Verificar resposta</button>
                                </div>
                                <div class="model-answer hidden" id="model-answer-${idx}">
                                    <strong>📝 Resposta modelo / Critérios:</strong>
                                    <p style="margin-top: 0.5rem;">${getModelAnswer(simNumber, idx)}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });

            questionsContainer.innerHTML = html;

            // MC listeners
            document.querySelectorAll('.option').forEach(opt => {
                opt.addEventListener('click', function() {
                    const qIdx = parseInt(this.dataset.qidx);
                    const optIndex = parseInt(this.dataset.optIndex);
                    const card = this.closest('.question-card');
                    if (card.classList.contains('answered')) return;

                    const questionData = simulados[currentSim].questions[qIdx];
                    const isCorrect = (optIndex === questionData.correct);
                    const allOptions = card.querySelectorAll('.option');
                    allOptions.forEach(o => o.classList.add('disabled'));

                    if (isCorrect) {
                        this.classList.add('correct');
                        mcStatus[qIdx] = 'correct';
                    } else {
                        this.classList.add('incorrect');
                        allOptions[questionData.correct].classList.add('correct');
                        mcStatus[qIdx] = 'incorrect';
                    }

                    const feedbackDiv = card.querySelector('.feedback');
                    feedbackDiv.classList.remove('hidden');
                    if (isCorrect) {
                        feedbackDiv.classList.add('correct-fb');
                        feedbackDiv.innerHTML = `<strong>✅ Você acertou! (+100 pontos)</strong><br>${questionData.explanation}`;
                    } else {
                        feedbackDiv.classList.add('incorrect-fb');
                        feedbackDiv.innerHTML = `<strong>❌ Você errou. (0 pontos)</strong> A resposta correta é a letra ${String.fromCharCode(65 + questionData.correct)}.<br><br><strong>Explicação:</strong> ${questionData.explanation}`;
                    }

                    card.classList.add('answered');
                    recalcScore();
                });
            });

            // Discursivas
            document.querySelectorAll('[data-disc-verify]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const qIdx = parseInt(this.dataset.discVerify);
                    const card = this.closest('.question-card');
                    if (card.classList.contains('disc-answered')) return;

                    const textarea = document.getElementById(`disc-text-${qIdx}`);
                    if (!textarea.value.trim()) {
                        alert('Por favor, escreva sua resposta antes de verificar.');
                        return;
                    }

                    const modelDiv = document.getElementById(`model-answer-${qIdx}`);
                    modelDiv.classList.remove('hidden');
                    this.disabled = true;
                    this.textContent = 'Resposta verificada';
                    this.style.background = '#94a3b8';

                    card.classList.add('disc-answered');
                    discStatus[qIdx] = true;
                    recalcScore();
                });
            });

            homeScreen.style.display = 'none';
            simuladoScreen.style.display = 'flex';
        }

        function getModelAnswer(simNumber, qIdx) {
            const answers = {
                1: {
                    8: 'Sobrecarga (overloading): mesmo nome de método com assinaturas diferentes (parâmetros distintos). Exemplo: calcular(valor) e calcular(valor, desconto). Sobrescrita (overriding): subclasse redefine um método herdado para especializar comportamento. Exemplo: classe Animal com método falar(), classe Cachorro sobrescreve falar() para latir.',
                    9: 'O DIP (Dependency Inversion Principle) estabelece que classes de alto nível não devem depender de classes de baixo nível, mas sim de abstrações. Isso reduz o acoplamento porque a classe principal (ex.: Pedido) depende de uma interface (Repositório), e não de um banco específico (MySQL). Assim, trocar a implementação não exige alterar a classe Pedido.'
                },
                2: {
                    8: 'O padrão Strategy encapsula diferentes algoritmos atrás de uma interface comum. É útil quando há várias maneiras de realizar uma operação (ex.: diferentes formas de pagamento) e queremos que o código cliente não precise conhecer os detalhes, podendo trocar a estratégia dinamicamente.',
                    9: 'O SRP (Single Responsibility Principle) diz que uma classe deve ter uma única responsabilidade e um único motivo para mudar. Exemplo: uma classe ClienteService que cadastra clientes, valida dados e envia e-mail fere o SRP. Refatoração: criar ValidadorCliente, ServicoEmail e RepositorioCliente, cada um com sua responsabilidade.'
                },
                3: {
                    8: 'Herança: relação "é um" (especialização), cria forte acoplamento. Composição: relação "tem um" (parte de), mais flexível. Preferimos composição quando a relação não é de especialização verdadeira ou quando queremos combinar comportamentos sem hierarquias rígidas. Ex.: Carro tem Motor (composição) em vez de Carro herdar de Motor.',
                    9: 'Encapsulamento organiza estado e comportamento, controlando o acesso aos dados internos. Importante para a manutenção porque protege invariantes e permite alterar a implementação sem afetar consumidores. Exemplo: ContaBancaria com saldo privado e métodos depositar() e sacar() que validam as operações.'
                }
            };
            return answers[simNumber]?.[qIdx] || 'Resposta modelo não disponível.';
        }

        // ------------------------------------------------------------
        // NAVEGAÇÃO
        // ------------------------------------------------------------
        document.querySelectorAll('[data-sim]').forEach(btn => {
            btn.addEventListener('click', function() {
                const simNum = parseInt(this.dataset.sim);
                renderSimulado(simNum);
            });
        });

        backHomeBtn.addEventListener('click', function() {
            simuladoScreen.style.display = 'none';
            homeScreen.style.display = 'flex';
            currentSim = null;
        });

        // Inicialização
        homeScreen.style.display = 'flex';
        simuladoScreen.style.display = 'none';