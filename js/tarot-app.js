 <!-- Tarot App JavaScript - ONLY on this page -->
    <script>
        // --- Card Data (Meanings translated to pt-BR - REVIEW RECOMMENDED) ---
        // IMPORTANT: Replace 'URL_...' with actual image URLs
        const cards = [
             // MAJOR ARCANA (pt-BR Meanings)
            { name: "O Louco", image: "URL_FOOL", meaning: "Novos começos, inocência, espontaneidade, fé, potencial, o salto de fé.", reversedMeaning: "Imprudência, medo do desconhecido, contenção, ingenuidade, tolice, distração." },
            { name: "O Mago", image: "URL_MAGICIAN", meaning: "Manifestação, força de vontade, desenvoltura, habilidade, ação, concentração.", reversedMeaning: "Manipulação, mau planejamento, talentos inexplorados, engano, ilusão, truques." },
            { name: "A Papisa", image: "URL_HIGH_PRIESTESS", meaning: "Intuição, subconsciente, mistério, segredos, voz interior, sabedoria, paciência.", reversedMeaning: "Segredos revelados, ignorar a intuição, confusão, sentimentos reprimidos, agendas ocultas." },
            { name: "A Imperatriz", image: "URL_EMPRESS", meaning: "Nutrição, fertilidade, abundância, natureza, beleza, criatividade, sensualidade.", reversedMeaning: "Bloqueio criativo, dependência, sufocamento, estagnação, negligência, insegurança." },
            { name: "O Imperador", image: "URL_EMPEROR", meaning: "Autoridade, estrutura, controle, estabilidade, liderança, proteção, figura paterna.", reversedMeaning: "Tirania, rigidez, dominação, falta de disciplina, abuso de poder, teimosia." },
            { name: "O Papa", image: "URL_HIEROPHANT", meaning: "Tradição, instituições, conformidade, moralidade, orientação espiritual, educação.", reversedMeaning: "Rebelião, desafiar normas, não convencionalidade, novos paradigmas, liberdade." },
            { name: "Os Enamorados", image: "URL_LOVERS", meaning: "Amor, harmonia, relacionamentos, escolhas, alinhamento, união, valores.", reversedMeaning: "Desarmonia, desequilíbrio, conflito, más escolhas, desalinhamento, indecisão." },
            { name: "O Carro", image: "URL_CHARIOT", meaning: "Força de vontade, controle, vitória, determinação, ambição, direção, foco.", reversedMeaning: "Falta de controle, oposição, sem direção, agressão, desistência, energia dispersa." },
            { name: "A Força", image: "URL_STRENGTH", meaning: "Coragem, compaixão, força interior, paciência, influência, controle, domar a fera.", reversedMeaning: "Fraqueza, insegurança, falta de disciplina, emoção crua, vulnerabilidade, ceder." },
            { name: "O Eremita", image: "URL_HERMIT", meaning: "Introspecção, solidão, orientação, sabedoria, busca da alma, retirada para insight.", reversedMeaning: "Isolamento, solidão, retraimento, paranoia, tornar-se antissocial, rejeição." },
            { name: "A Roda da Fortuna", image: "URL_WHEEL_OF_FORTUNE", meaning: "Destino, ciclos, sorte, mudança, pontos de virada, destino, carma.", reversedMeaning: "Má sorte, resistência à mudança, quebra de ciclos, infortúnio, contratempos imprevistos." },
            { name: "A Justiça", image: "URL_JUSTICE", meaning: "Justiça, verdade, causa e efeito, lei, clareza, responsabilidade, equilíbrio.", reversedMeaning: "Injustiça, desonestidade, falta de responsabilidade, parcialidade, emaranhados legais, desequilíbrio." },
            { name: "O Enforcado", image: "URL_HANGED_MAN", meaning: "Rendição, nova perspectiva, pausa, sacrifício, deixar ir, sabedoria adquirida.", reversedMeaning: "Adiamento, resistência, martírio, indecisão, sacrifício desnecessário, evitação." },
            { name: "A Morte", image: "URL_DEATH", meaning: "Finais, transformação, mudança profunda, liberação, transição, novos começos.", reversedMeaning: "Resistência à mudança, medo de finais, estagnação, apego, repetição de padrões." },
            { name: "A Temperança", image: "URL_TEMPERANCE", meaning: "Equilíbrio, moderação, paciência, harmonia, propósito, integração, mistura de opostos.", reversedMeaning: "Desequilíbrio, excesso, falta de paciência, discórdia, extremos, conflito." },
            { name: "O Diabo", image: "URL_DEVIL", meaning: "Escravidão, vício, materialismo, restrição, sombra, tentação, padrões negativos.", reversedMeaning: "Libertação, desapego, liberação, enfrentar medos, empoderamento, retomar o controle." },
            { name: "A Torre", image: "URL_TOWER", meaning: "Mudança súbita, reviravolta, revelação, destruição de falsas estruturas, caos, despertar.", reversedMeaning: "Evitar desastre, medo da mudança, resistir à destruição, evitar crise, caos interno." },
            { name: "A Estrela", image: "URL_STAR", meaning: "Esperança, fé, inspiração, renovação, espiritualidade, serenidade, cura.", reversedMeaning: "Desespero, falta de fé, desânimo, desconexão, desesperança, negatividade." },
            { name: "A Lua", image: "URL_MOON", meaning: "Intuição, ilusão, medo, subconsciente, incerteza, sonhos, coisas ocultas.", reversedMeaning: "Libertar o medo, clareza, compreensão, desvendar segredos, diminuir a confusão." },
            { name: "O Sol", image: "URL_SUN", meaning: "Alegria, sucesso, positividade, vitalidade, calor, clareza, otimismo, iluminação.", reversedMeaning: "Falta de sucesso, pessimismo, tristeza, falta de clareza, felicidade bloqueada, ego." },
            { name: "O Julgamento", image: "URL_JUDGEMENT", meaning: "Renascimento, despertar, acerto de contas, avaliação, absolvição, chamado, perdão.", reversedMeaning: "Insegurança, ignorar o chamado, medo do julgamento, indecisão, autocrítica severa." },
            { name: "O Mundo", image: "URL_WORLD", meaning: "Conclusão, integração, realização, viagem, cumprimento, totalidade, sucesso.", reversedMeaning: "Incompletude, falta de encerramento, estagnação, atrasos, vazio, sentir-se preso." },
            // WANDS (Paus - pt-BR Meanings)
            { name: "Ás de Paus", image: "URL_ACE_WANDS", meaning: "Inspiração, potencial, criação, novos começos, energia, entusiasmo, faísca.", reversedMeaning: "Falta de energia, atrasos, bloqueios criativos, falta de paixão, oportunidades perdidas." },
            { name: "Dois de Paus", image: "URL_TWO_WANDS", meaning: "Planejamento, futuro, progresso, decisões, descoberta, parcerias, olhar adiante.", reversedMeaning: "Medo do desconhecido, falta de planejamento, indecisão, jogar seguro, planos cancelados." },
            { name: "Três de Paus", image: "URL_THREE_WANDS", meaning: "Expansão, previsão, progresso, oportunidades no exterior, esperando resultados.", reversedMeaning: "Atrasos, obstáculos, falta de previsão, limitações, frustração, contratempos." },
            { name: "Quatro de Paus", image: "URL_FOUR_WANDS", meaning: "Celebração, harmonia, casamento, lar, comunidade, estabilidade, boas-vindas.", reversedMeaning: "Falta de apoio, instabilidade, transição, conflitos domésticos, cancelamento." },
            { name: "Cinco de Paus", image: "URL_FIVE_WANDS", meaning: "Conflito, competição, desacordo, tensão, diversidade, luta, rivalidade.", reversedMeaning: "Evitar conflito, resolução, respeito pelas diferenças, encontrar terreno comum." },
            { name: "Seis de Paus", image: "URL_SIX_WANDS", meaning: "Sucesso, reconhecimento público, vitória, progresso, autoconfiança, liderança.", reversedMeaning: "Egoísmo, falta de reconhecimento, fracasso, queda em desgraça, arrogância, atrasos." },
            { name: "Sete de Paus", image: "URL_SEVEN_WANDS", meaning: "Desafio, defesa, perseverança, defender seu ponto de vista, manter o controle.", reversedMeaning: "Desistir, sobrecarregado, exaustão, compromisso, sentir-se atacado." },
            { name: "Oito de Paus", image: "URL_EIGHT_WANDS", meaning: "Velocidade, ação, movimento, decisões rápidas, comunicação, viagem, progresso.", reversedMeaning: "Atrasos, frustração, resistir à mudança, lentidão, falta de comunicação." },
            { name: "Nove de Paus", image: "URL_NINE_WANDS", meaning: "Resiliência, coragem, persistência, limites, última resistência, cansado mas determinado.", reversedMeaning: "Exaustão, esgotamento, desistência, paranoia, defensiva, teimosia, sobrecarregado." },
            { name: "Dez de Paus", image: "URL_TEN_WANDS", meaning: "Fardo, responsabilidade, trabalho árduo, estresse, conquista, assumir demais.", reversedMeaning: "Delegar, liberar, deixar ir, colapso, sobrecarga, encontrar apoio." },
            { name: "Valete de Paus", image: "URL_PAGE_WANDS", meaning: "Inspiração, exploração, entusiasmo, descoberta, espírito livre, novas ideias.", reversedMeaning: "Falta de direção, procrastinação, criar drama, precipitado, energia desfocada." },
            { name: "Cavaleiro de Paus", image: "URL_KNIGHT_WANDS", meaning: "Energia, paixão, aventura, impulsividade, ação, avançar rapidamente.", reversedMeaning: "Imprudência, atrasos, frustração, falta de energia, disperso, arrogância." },
            { name: "Rainha de Paus", image: "URL_QUEEN_WANDS", meaning: "Coragem, confiança, independência, carisma, calor, determinação.", reversedMeaning: "Ciúme, insegurança, exigente, temperamental, violeta encolhida, drama." },
            { name: "Rei de Paus", image: "URL_KING_WANDS", meaning: "Liderança, visão, inspiração, ousadia, empreendedorismo, líder nato.", reversedMeaning: "Impulsividade, pressa, crueldade, altas expectativas, tirânico, arrogância." },
            // CUPS (Copas - pt-BR Meanings)
            { name: "Ás de Copas", image: "URL_ACE_CUPS", meaning: "Amor, compaixão, criatividade, novas emoções, relacionamentos, intuição.", reversedMeaning: "Emoções bloqueadas, vazio, sentimentos reprimidos, oportunidade perdida, tristeza." },
            { name: "Dois de Copas", image: "URL_TWO_CUPS", meaning: "Amor unificado, parceria, harmonia, atração, conexão, equilíbrio.", reversedMeaning: "Desequilíbrio, comunicação quebrada, desarmonia, desconfiança, separação." },
            { name: "Três de Copas", image: "URL_THREE_CUPS", meaning: "Celebração, amizade, comunidade, colaboração, alegria, encontros.", reversedMeaning: "Excesso, fofoca, isolamento, harmonia interrompida, 'vela'." },
            { name: "Quatro de Copas", image: "URL_FOUR_CUPS", meaning: "Apatia, contemplação, desconexão, tédio, oportunidades perdidas, introspecção.", reversedMeaning: "Consciência súbita, escolher a felicidade, aceitação, seguir em frente, fim do tédio." },
            { name: "Cinco de Copas", image: "URL_FIVE_CUPS", meaning: "Perda, arrependimento, decepção, luto, tristeza, pessimismo, focar na falta.", reversedMeaning: "Aceitação, perdão, seguir em frente, encontrar paz, ver os pontos positivos, cura." },
            { name: "Seis de Copas", image: "URL_SIX_CUPS", meaning: "Nostalgia, memórias de infância, reencontro, inocência, alegria, partilha, presentes.", reversedMeaning: "Preso no passado, ingenuidade, expectativas irreais, tédio, seguir em frente." },
            { name: "Sete de Copas", image: "URL_SEVEN_CUPS", meaning: "Escolhas, fantasia, ilusão, pensamento positivo, oportunidades, imaginação.", reversedMeaning: "Tentação, ilusão, táticas diversionistas, falta de propósito, clareza, fazer uma escolha." },
            { name: "Oito de Copas", image: "URL_EIGHT_CUPS", meaning: "Ir embora, decepção, abandono, retirada, escapismo, buscando por mais.", reversedMeaning: "Tentar mais uma vez, indecisão, medo de seguir em frente, estagnação, deriva." },
            { name: "Nove de Copas", image: "URL_NINE_CUPS", meaning: "Realização de desejos, contentamento, satisfação, gratidão, felicidade, estabilidade emocional.", reversedMeaning: "Insatisfação, ganância, materialismo, expectativas irreais, presunção, falta de realização." },
            { name: "Dez de Copas", image: "URL_TEN_CUPS", meaning: "Harmonia, casamento, felicidade, família, alinhamento, êxtase, realização emocional.", reversedMeaning: "Lar desfeito, desarmonia, conflito, valores desalinhados, sonhos desfeitos, negligenciar a família." },
            { name: "Valete de Copas", image: "URL_PAGE_CUPS", meaning: "Oportunidades criativas, intuição, curiosidade, possibilidade, mensagens, sensibilidade.", reversedMeaning: "Imaturidade emocional, bloqueio criativo, sobrecarga de sensibilidade, insegurança, sonhar acordado." },
            { name: "Cavaleiro de Copas", image: "URL_KNIGHT_CUPS", meaning: "Romance, charme, imaginação, beleza, seguir o coração, ofertas, convites.", reversedMeaning: "Irrealista, ciúme, mau humor, decepção, obsessão, engano." },
            { name: "Rainha de Copas", image: "URL_QUEEN_CUPS", meaning: "Compaixão, intuição, empatia, fluxo, segurança emocional, curandeira, conselheira.", reversedMeaning: "Insegurança emocional, dependência, manipulação, martírio, mau humor, carência." },
            { name: "Rei de Copas", image: "URL_KING_CUPS", meaning: "Equilíbrio emocional, compaixão, diplomacia, controle, generosidade, conselho sábio.", reversedMeaning: "Manipulação emocional, mau humor, volatilidade, egoísmo, retraído, dependência." },
            // SWORDS (Espadas - pt-BR Meanings)
            { name: "Ás de Espadas", image: "URL_ACE_SWORDS", meaning: "Ruptura, clareza, novas ideias, poder mental, verdade, sucesso, foco.", reversedMeaning: "Confusão, falta de clareza, julgamento nublado, atrasos, caos, pensamento destrutivo." },
            { name: "Dois de Espadas", image: "URL_TWO_SWORDS", meaning: "Indecisão, impasse, emoções bloqueadas, trégua, beco sem saída, escolhas difíceis.", reversedMeaning: "Indecisão resolvida, confusão, sobrecarga de informação, liberação do impasse, ver a verdade." },
            { name: "Três de Espadas", image: "URL_THREE_SWORDS", meaning: "Coração partido, luto, tristeza, dor, separação, liberação emocional, verdade difícil.", reversedMeaning: "Recuperação, perdão, liberar a dor, otimismo, reconciliação, superar a mágoa." },
            { name: "Quatro de Espadas", image: "URL_FOUR_SWORDS", meaning: "Descanso, contemplação, recuperação, passividade, relaxamento, meditação, paz.", reversedMeaning: "Estagnação, inquietação, esgotamento, falta de progresso, exaustão, precisar descansar." },
            { name: "Cinco de Espadas", image: "URL_FIVE_SWORDS", meaning: "Conflito, derrota, perda, vencer a todo custo, humilhação, tensão, vitória vazia.", reversedMeaning: "Reconciliação, fazer as pazes, ressentimento passado, perdão, fim do conflito." },
            { name: "Seis de Espadas", image: "URL_SIX_SWORDS", meaning: "Transição, seguir em frente, passagem, liberação, rito de passagem, orientação, encontrar refúgio.", reversedMeaning: "Resistência à mudança, negócios inacabados, preso, atrasos, retornar aos problemas." },
            { name: "Sete de Espadas", image: "URL_SEVEN_SWORDS", meaning: "Engano, estratégia, traição, roubo, furtividade, astúcia, safar-se de algo.", reversedMeaning: "Síndrome do impostor, confessar, honestidade, enfrentar consequências, devolver itens roubados." },
            { name: "Oito de Espadas", image: "URL_EIGHT_SWORDS", meaning: "Restrição, limitação, prisão autoimposta, mentalidade de vítima, sentir-se preso.", reversedMeaning: "Liberação, liberdade, encontrar soluções, empoderamento, nova perspectiva, assumir o controle." },
            { name: "Nove de Espadas", image: "URL_NINE_SWORDS", meaning: "Ansiedade, preocupação, medo, depressão, pesadelos, desespero, angústia mental.", reversedMeaning: "Esperança, pedir ajuda, recuperação, encontrar ajuda, liberação da preocupação, enfrentar medos." },
            { name: "Dez de Espadas", image: "URL_TEN_SWORDS", meaning: "Finais dolorosos, fundo do poço, traição, perda, crise, ruína, finalidade.", reversedMeaning: "Recuperação, regeneração, resistir a um fim, fim inevitável, sobrevivência, luz no fim." },
            { name: "Valete de Espadas", image: "URL_PAGE_SWORDS", meaning: "Curiosidade, novas ideias, comunicação, vigilância, sede de conhecimento, honestidade.", reversedMeaning: "Pensamentos dispersos, fofoca, cinismo, defensiva, agir precipitadamente, falar fora de hora." },
            { name: "Cavaleiro de Espadas", image: "URL_KNIGHT_SWORDS", meaning: "Ambição, ação, velocidade, foco, franqueza, impulso, avançar.", reversedMeaning: "Imprudência, impulsividade, agressão, esgotamento, desfocado, detalhes perdidos." },
            { name: "Rainha de Espadas", image: "URL_QUEEN_SWORDS", meaning: "Independência, limites claros, comunicação direta, inteligência, julgamento imparcial.", reversedMeaning: "Amargura, frieza, crueldade, isolamento, fofoca maliciosa, língua afiada." },
            { name: "Rei de Espadas", image: "URL_KING_SWORDS", meaning: "Clareza mental, poder intelectual, autoridade, verdade, lógica, julgamento ético.", reversedMeaning: "Manipulação, mau uso do poder, frieza, irracionalidade, tirania, controlador." },
             // PENTACLES (Ouros - pt-BR Meanings)
            { name: "Ás de Ouros", image: "URL_ACE_PENTACLES", meaning: "Oportunidade, prosperidade, novo empreendimento, manifestação, recursos, começos tangíveis.", reversedMeaning: "Oportunidade perdida, falta de planejamento, chance perdida, escassez, mau investimento." },
            { name: "Dois de Ouros", image: "URL_TWO_PENTACLES", meaning: "Equilíbrio, adaptabilidade, gerenciamento do tempo, priorização, malabarismo de responsabilidades.", reversedMeaning: "Desequilíbrio, desorganização, sobrecarga, excesso de compromissos, más escolhas financeiras." },
            { name: "Três de Ouros", image: "URL_THREE_PENTACLES", meaning: "Trabalho em equipe, colaboração, aprendizado, habilidade, artesanato, maestria, reconhecimento.", reversedMeaning: "Falta de trabalho em equipe, desalinhamento, má qualidade, conflito, falta de reconhecimento." },
            { name: "Quatro de Ouros", image: "URL_FOUR_PENTACLES", meaning: "Controle, segurança, estabilidade, posse, conservação, economia, limites.", reversedMeaning: "Ganância, materialismo, possessividade, insegurança, deixar ir, generosidade bloqueada." },
            { name: "Cinco de Ouros", image: "URL_FIVE_PENTACLES", meaning: "Dificuldade, pobreza, isolamento, perda, insegurança, preocupação, sentir-se excluído.", reversedMeaning: "Recuperação, mudança positiva, encontrar ajuda, perdão, fim da dificuldade, comunidade." },
            { name: "Seis de Ouros", image: "URL_SIX_PENTACLES", meaning: "Generosidade, caridade, partilha, recebimento, prosperidade, equilíbrio no dar/receber.", reversedMeaning: "Dívida, egoísmo, caridade unilateral, segundas intenções, dinâmicas de poder." },
            { name: "Sete de Ouros", image: "URL_SEVEN_PENTACLES", meaning: "Paciência, investimento, visão de longo prazo, perseverança, colheita, avaliação.", reversedMeaning: "Falta de visão de longo prazo, impaciência, esforço desperdiçado, lucros rápidos, frustração." },
            { name: "Oito de Ouros", image: "URL_EIGHT_PENTACLES", meaning: "Aprendizado, desenvolvimento de habilidades, maestria, diligência, detalhe, artesanato.", reversedMeaning: "Perfeccionismo, falta de habilidade, tarefas repetitivas, sem motivação, má qualidade." },
            { name: "Nove de Ouros", image: "URL_NINE_PENTACLES", meaning: "Abundância, luxo, autossuficiência, independência financeira, refinamento, solidão.", reversedMeaning: "Dependência financeira, superficialidade, gastos excessivos, isolamento, correria." },
            { name: "Dez de Ouros", image: "URL_TEN_PENTACLES", meaning: "Riqueza, legado, família, herança, estabilidade, tradição, segurança a longo prazo.", reversedMeaning: "Disputas familiares, perda financeira, instabilidade, quebra de tradição, fardo do legado." },
            { name: "Valete de Ouros", image: "URL_PAGE_PENTACLES", meaning: "Manifestação, oportunidade, aprendizado, praticidade, novas habilidades, estudo.", reversedMeaning: "Falta de progresso, procrastinação, preguiça, oportunidades perdidas, sonhar acordado." },
            { name: "Cavaleiro de Ouros", image: "URL_KNIGHT_PENTACLES", meaning: "Trabalho árduo, rotina, responsabilidade, diligência, praticidade, confiabilidade, paciência.", reversedMeaning: "Tédio, estagnação, preguiça, teimosia, falta de bom senso, resistência à mudança." },
            { name: "Rainha de Ouros", image: "URL_QUEEN_PENTACLES", meaning: "Nutridora, prática, pé no chão, segurança, conforto, maternal, engenhosa.", reversedMeaning: "Sufocante, egocentrismo, dependência financeira, desorganização, desequilíbrio trabalho-vida." },
            { name: "Rei de Ouros", image: "URL_KING_PENTACLES", meaning: "Riqueza, abundância, liderança, segurança, sucesso, confiabilidade, provedor.", reversedMeaning: "Ganância, materialismo, corrupção, exploração, controlador, teimoso, jogador." },
        ];

        // --- DOM Elements ---
        const startReadingButton = document.getElementById('start-reading-button');
        const readingContainer = document.getElementById('reading-container');
        const readingResult = document.getElementById('reading-result');
        const readAgainButton = document.getElementById('read-again-button');
        const spreadSelect = document.getElementById('spread-select');
        const questionInput = document.getElementById('question-input');
        const controlsDiv = document.getElementById('controls');
        const modal = document.getElementById('card-modal');
        const modalCloseButton = document.querySelector('.close-button');
        const modalCardName = document.getElementById('modal-card-name');
        const modalCardImage = document.getElementById('modal-card-image');
        const modalCardMeaning = document.getElementById('modal-card-meaning');
        const modalCardReversed = document.getElementById('modal-card-reversed');

        let drawnCardsData = [];
        let readingInProgress = false;

        // --- Event Listeners ---
        startReadingButton.addEventListener('click', startReading);
        readAgainButton.addEventListener('click', resetReading);
        modalCloseButton.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
        window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.style.display === 'block') closeModal(); });

        // --- Core Functions ---
        function shuffle(array) { /* Fisher-Yates Shuffle */
            for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; }
        }

        function startReading() { /* Clears UI, shuffles, determines card count, calls createCardElement */
            if (readingInProgress) return; readingInProgress = true;
            controlsDiv.style.display = 'none'; readingResult.innerHTML = ''; readingResult.classList.remove('visible');
            readingContainer.innerHTML = ''; drawnCardsData = []; readAgainButton.style.display = 'none';
            const spreadIdentifier = spreadSelect.value; let numberOfCards;
            if (spreadIdentifier === 'love5') { numberOfCards = 5; } else { numberOfCards = parseInt(spreadIdentifier); }
            if (isNaN(numberOfCards) || numberOfCards <= 0) { console.error("Invalid number of cards selected."); readingInProgress = false; controlsDiv.style.display = 'flex'; return; }
            let shuffledDeck = [...cards]; shuffle(shuffledDeck); const spread = shuffledDeck.slice(0, numberOfCards);
            spread.forEach((cardData, index) => {
                const isReversed = Math.random() < 0.3;
                drawnCardsData.push({ ...cardData, reversed: isReversed, id: `card-${index}`, spread: spreadIdentifier });
                createCardElement(cardData, index, isReversed);
            });
            setTimeout(() => { readingContainer.addEventListener('click', handleCardClick); readingInProgress = false; }, numberOfCards * 150 + 100);
        }

        function createCardElement(cardData, index, isReversed) { /* Creates HTML for each card with animation */
            const placeholder = document.createElement('div'); placeholder.classList.add('card-placeholder'); placeholder.style.animationDelay = `${index * 0.15}s`;
            const cardElement = document.createElement('div'); cardElement.classList.add('card'); cardElement.dataset.cardId = `card-${index}`;
            const cardBack = document.createElement('div'); cardBack.classList.add('card-face', 'card-back'); cardBack.textContent = index + 1;
            const cardFront = document.createElement('div'); cardFront.classList.add('card-face', 'card-front');
            const img = document.createElement('img');
            const placeholderBg = getComputedStyle(document.documentElement).getPropertyValue('--card-back-color').substring(1); const placeholderText = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').substring(1);
            // Changed placeholder text to Portuguese
            img.src = cardData.image.startsWith('URL_') ? `https://via.placeholder.com/180x300/${placeholderBg}/${placeholderText}?text=Carta+${index+1}` : cardData.image;
            img.alt = cardData.name; if (isReversed) img.classList.add('reversed-img');
            img.onerror = () => { img.src = `https://via.placeholder.com/180x300/FF0000/FFFFFF?text=Erro+ao+Carregar`; console.error(`Failed to load image for ${cardData.name}`); };
            cardFront.appendChild(img); cardElement.appendChild(cardBack); cardElement.appendChild(cardFront); placeholder.appendChild(cardElement); readingContainer.appendChild(placeholder);
        }

        function handleCardClick(event) { /* Handles card flip animation and checks if reading is complete */
            if (readingInProgress) return; const clickedCardPlaceholder = event.target.closest('.card-placeholder'); if (!clickedCardPlaceholder) return;
            const clickedCard = clickedCardPlaceholder.querySelector('.card');
            if (clickedCard && !clickedCard.classList.contains('flipped')) {
                readingInProgress = true; clickedCard.classList.add('flipped');
                clickedCard.addEventListener('transitionend', () => {
                    readingInProgress = false; const allCards = readingContainer.querySelectorAll('.card'); const flippedCards = readingContainer.querySelectorAll('.card.flipped');
                    if (flippedCards.length === allCards.length) { readingContainer.removeEventListener('click', handleCardClick); showReadingResult(); addModalEventListeners(); }
                }, { once: true });
            }
        }

         // Positional keywords translated to pt-BR
        function getPositionalKeywords(index, spreadIdentifier) {
            if (spreadIdentifier === '3') { // Passado, Presente, Futuro
                switch (index) {
                    case 0: return { label: "Influência Passada", context: "Em seu passado recente, ou influenciando a situação," };
                    case 1: return { label: "Desafio/Foco Presente", context: "Atualmente, a energia central ou o desafio é representado por" };
                    case 2: return { label: "Resultado/Potencial Futuro", context: "Olhando adiante, o resultado potencial ou a direção é sugerido por" };
                }
            } else if (spreadIdentifier === '5') { // Tiragem de Orientação
                 switch (index) {
                    case 0: return { label: "O Coração da Questão", context: "No cerne desta situação encontra-se" };
                    case 1: return { label: "Obstáculo ou Fator Cruzado", context: "O principal obstáculo ou influência cruzada é" };
                    case 2: return { label: "Conselho ou Ação Recomendada", context: "A orientação oferecida sugere focar em" };
                    case 3: return { label: "Ambiente do Futuro Próximo", context: "No futuro próximo, a energia circundante aponta para" };
                    case 4: return { label: "Resultado Potencial a Longo Prazo", context: "O resultado potencial a longo prazo, se as coisas continuarem neste caminho, é indicado por" };
                }
            } else if (spreadIdentifier === 'love5') { // Foco Relacionamento
                switch (index) {
                    case 0: return { label: "Você / Seu Papel", context: "Sua energia e perspectiva nesta conexão são refletidas por" };
                    case 1: return { label: "Parceiro(a) / Papel do Outro", context: "A energia ou perspectiva da outra pessoa envolvida é representada por" };
                    case 2: return { label: "A Conexão / Dinâmica", context: "A dinâmica atual ou a natureza da própria conexão é mostrada por" };
                    case 3: return { label: "Desafio / Obstáculo", context: "Um desafio chave ou área que necessita de atenção dentro da conexão é" };
                    case 4: return { label: "Potencial / Conselho", context: "A direção potencial para esta conexão, ou conselho sobre como proceder, é indicada por" };
                }
            }
            return { label: `Posição ${index + 1}`, context: `Na posição ${index + 1},`}; // Fallback
        }

        // Interpretation function with pt-BR text
        function showReadingResult() {
            let interpretationHTML = ''; const userQuestion = questionInput.value.trim(); const spreadIdentifier = drawnCardsData.length > 0 ? drawnCardsData[0].spread : '3';
            let majorArcanaCount = drawnCardsData.filter(card => cards.slice(0, 22).some(major => major.name === card.name)).length; let introSummary = "";
            // Translated summaries
            if (majorArcanaCount >= Math.ceil(drawnCardsData.length / 2)) { introSummary = "<p><em>Esta leitura destaca lições de vida significativas ou energias arquetípicas. Preste muita atenção às cartas dos Arcanos Maiores.</em></p>"; }
            else if (majorArcanaCount === 0 && drawnCardsData.length > 1) { introSummary = "<p><em>Esta leitura foca principalmente em assuntos do dia-a-dia e situações práticas, conforme indicado pelos Arcanos Menores.</em></p>"; }
            // Translated heading
            if (userQuestion) { interpretationHTML += `<h2>Leitura para: "${userQuestion}"</h2>`; } else { interpretationHTML += `<h2>Sua Leitura</h2>`; }
            interpretationHTML += introSummary;
            drawnCardsData.forEach((card, index) => {
                const positionInfo = getPositionalKeywords(index, spreadIdentifier); const cardName = card.name; const isReversed = card.reversed;
                const meaningText = isReversed ? card.reversedMeaning : card.meaning; const reversalTag = isReversed ? "(Invertida)" : ""; let interpretationText = "";
                interpretationText += `<strong>${index + 1}. ${positionInfo.label}: ${cardName} ${reversalTag}</strong><br>`; interpretationText += `${positionInfo.context} ${cardName}${reversalTag}. `;
                // Translated interpretation phrasing
                if (isReversed) { interpretationText += `Quando invertida, esta carta frequentemente aponta para desafios internos, atrasos ou os aspectos sombrios relacionados ao seu significado direto. Sugere potenciais dificuldades com ou a necessidade de reavaliar: ${meaningText}`; }
                else { interpretationText += `Esta carta geralmente significa energias de: ${meaningText}`; }
                interpretationHTML += `<div class="card-interpretation" data-card-id="${card.id}" title="Clique para detalhes da carta">${interpretationText}</div>`;
            });
             // Translated outro
            interpretationHTML += "<p><em>Lembre-se, o Tarot oferece orientação e perspectiva, não previsões fixas. Reflita sobre como essas energias ressoam com sua própria intuição e situação. Clique em qualquer bloco de interpretação ou imagem da carta para mais detalhes.</em></p>";
            readingResult.innerHTML = interpretationHTML; setTimeout(() => { readingResult.classList.add('visible'); }, 50); readAgainButton.style.display = 'inline-block';
        }


        function addModalEventListeners() { /* Adds listeners to open modal */
            const interpretationDivs = readingResult.querySelectorAll('.card-interpretation'); interpretationDivs.forEach(div => div.addEventListener('click', handleInterpretationClick));
            const cardElements = readingContainer.querySelectorAll('.card.flipped'); cardElements.forEach(cardEl => cardEl.addEventListener('click', handleInterpretationClick));
        }

        function handleInterpretationClick(event) { /* Opens modal based on clicked element */
            const targetElement = event.currentTarget; let cardId;
            if (targetElement.classList.contains('card-interpretation')) { cardId = targetElement.dataset.cardId; } else if (targetElement.classList.contains('card')) { cardId = targetElement.dataset.cardId; }
            if (cardId) { const cardData = drawnCardsData.find(card => card.id === cardId); if (cardData) { openModal(cardData); } }
        }

        function resetReading() { /* Resets the UI for a new reading */
            if (readingInProgress) return; controlsDiv.style.display = 'flex'; readingContainer.innerHTML = ''; readingResult.innerHTML = '';
            readingResult.classList.remove('visible'); readAgainButton.style.display = 'none'; questionInput.value = ''; drawnCardsData = [];
        }

        // --- Modal Functions ---
        function openModal(cardData) { /* Populates and shows the modal */
            modalCardName.textContent = cardData.name; const placeholderBg = getComputedStyle(document.documentElement).getPropertyValue('--card-back-color').substring(1); const placeholderText = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').substring(1);
            // Translated placeholder text
            const imgSrc = cardData.image.startsWith('URL_') ? `https://via.placeholder.com/160x260/${placeholderBg}/${placeholderText}?text=${cardData.name.replace(/\s+/g, '+')}` : cardData.image;
            modalCardImage.src = imgSrc; modalCardImage.onerror = () => { modalCardImage.src = `https://via.placeholder.com/160x260/FF0000/FFFFFF?text=Erro+ao+Carregar`; };
            // Ensure modal text elements are updated (they get their text from cardData which is translated)
            modalCardMeaning.textContent = cardData.meaning;
            modalCardReversed.textContent = cardData.reversedMeaning;
            modal.style.display = "block"; modalCloseButton.focus();
        }
        function closeModal() { /* Hides the modal */ modal.style.display = "none"; }

    </script>