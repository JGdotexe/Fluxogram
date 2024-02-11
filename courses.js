const courses = {
    // Linha de arquitetura (Baixo Nível)
    "fundamento_arquitetura_computadores": {
        "name": "Fundamentos de Arquitetura de Computadores",
        "period": 1,
        "code": "RCM 013",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlocks": [
            "circuitos_digitais",
            "lab_circuitos_digitais"
        ]
    },
    "circuitos_digitais": {
        "name": "Circuitos Digitais",
        "period": 2,
        "code": "RCM 011",
        "type": "OB",
        "CH": 64,
        "required": [
            "fundamento_arquitetura_computadores"
        ],
        "correquisite": [
            "lab_circuitos_digitais"
        ],
        "unlocks": [
            "arquitetura_computadores"
        ]
    },
    "lab_circuitos_digitais": {
        "name": "Laboratório de Circuitos Digitais",
        "period": 2,
        "code": "RCM 012",
        "type": "OB",
        "CH": 32,
        "required": [
            "FAC"
        ],
        "correquisite": [
            "circuitos_digitais"
        ]
    },
    "arquitetura_computadores": {
        "name": "Arquitetura de Computadores",
        "period": 3,
        "code": "RCM 014",
        "type": "OB",
        "CH": 64,
        "required": [
            "circuitos_digitais",
            "programacao_2"
        ],
        "unlocks": [
            "sistemas_operacionais",
            "redes_1"
        ]
    },
    "sistemas_operacionais": {
        "name": "Sistemas Operacionais",
        "period": 5,
        "code": "RCM 016",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlocks": [
            "sistemas_distribuidos"
        ]
    },
    "sistemas_distribuidos": {
        "name": "Sistemas Distribuídos",
        "period": 6,
        "code": "RCM 017",
        "type": "OB",
        "CH": 64,
        "required": [
            "sistemas_operacionais"
        ]
    },

    // Redes
    "redes_1": {
        "name": "Redes de Computadores 1",
        "period": 5,
        "code": "RCM 018",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlocks": [
            "redes_2"
        ]
    },
    "redes_2": {
        "name": "Redes de Computadores 2",
        "period": 6,
        "code": "RCM 019",
        "type": "OB",
        "CH": 64,
        "required": [
            "redes_1"
        ]
    },

    // Matemática para computação
    "matematica_discreta": {
        "name": "Matemática Discreta",
        "period": 1,
        "code": "RCN 044",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlocks": [
            "logica_computacao",
            "prob_est"
        ]
    },
    "logica_computacao": {
        "name": "Lógica para Ciência da Computação",
        "period": 2,
        "code": "RCM 015",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta"
        ],
        "unlocks": [
            "paradigmas_programacao",
            "inteligencia_artificial"
        ]
    },

    // Linha principal Programação
    "programacao_1": {
        "name": "Programação 1",
        "period": 1,
        "code": "RCM 002",
        "type": "OB",
        "CH": 96,
        "required": [],
        "unlocks": [
            "programacao_2",
            "metodos_numericos"
        ]
    },
    "programacao_2": {
        "name": "Programação 2",
        "period": 2,
        "code": "RCM 003",
        "type": "OB",
        "CH": 96,
        "required": [
            "programacao_1"
        ],
        "unlocks": [
            "arquitetura_computadores",
            "estrutura_dados",
            "paradigmas_programacao"
        ]
    },
    "paradigmas_programacao": {
        "name": "Paradigmas de Programação",
        "period": 3,
        "code": "RCM 008",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2",
            "logica_computacao"
        ],
        "unlocks": [
            "engenharia_software_1",
            "compiladores"
        ]
    },
    "estrutura_dados": {
        "name": "Estrutura de Dados",
        "period": 3,
        "code": "RCM 004",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2"
        ],
        "unlocks": [
            "computacao_grafica",
            "analise_projeto_algoritmo",
            "interface_humano-computador",
            "inteligencia_artificial",
            "engenharia_software_1",
            "banco_dados",
            "liguagens_formais_teoria_computacao"
        ]
    },

    "analise_projeto_algoritmo": {
        "name": "Análise e Projeto de Algoritmos",
        "period": 4,
        "code": "RCM 009",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ], 
        "unlocks": [
            "algoritmo_grafos"
        ]
    },
    "algoritmo_grafos": {
        "name": "Algoritmos em Grafos",
        "period": 5,
        "code": "RCM 007",
        "type": "OB",
        "CH": 64,
        "required": [
            "analise_projeto_algoritmo"
        ]
    },
    "liguagens_formais_teoria_computacao": {
        "name": "Linguagens Formais e Teoria da Computação",
        "period": 5,
        "code": "RCM 010",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlocks": [
            "compiladores"
        ]
    },
    "compiladores": {
        "name": "Compiladores",
        "period": 6,
        "code": "RCM 020",
        "type": "OB",
        "CH": 64,
        "required": [
            "liguagens_formais_teoria_computacao",
            "paradigmas_programacao"
        ]
    },



    // Linha projetos
    "banco_dados": {
        "name": "Banco de Dados",
        "period": 5,
        "code": "RCM 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlocks": [
            "projeto_arquitetura_software",
            "projeto_banco_dados",
            "desenvolvimento_web"
        ]
    },
    "projeto_banco_dados": {
        "name": "Projeto de Banco de Dados",
        "period": 7,
        "code": "RCM 022",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados"
        ]
    },
    "engenharia_software_1": {
        "name": "Engenharia de Software 1",
        "period": 4,
        "code": "RCM 023",
        "type": "OB",
        "CH": 64,
        "required": [
            "paradigmas_programacao",
            "estrutura_dados"
        ],
        "unlocks": [
            "projeto_arquitetura_software"
        ]
    },
    "desenvolvimento_web": {
        "name": "Desenvolvimento Web",
        "period": 6,
        "code": "RCM 057",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados"
        ]
    },
    "projeto_arquitetura_software": {
        "name": "Projeto e Arquitetura de Software",
        "period": 5,
        "code": "RCM 005",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados",
            "engenharia_software_1"
        ],
        "unlocks": [
            "engenharia_software_2"
        ]
    },
    "engenharia_software_2": {
        "name": "Engenharia de Software 2",
        "period": 6,
        "code": "RCM 058",
        "type": "OB",
        "CH": 64,
        "required": [
            "projeto_arquitetura_software"
        ]
    },


    // Isoladas
    "intro_ciencia_computacao": {
        "name": "Introdução à Ciência da Computação",
        "period": 1,
        "code": "RCM 001",
        "type": "OB",
        "CH": 32
    },
    "interface_humano-computador": {
        "name": "Interface Humano-Computador",
        "period": 6,
        "code": "RCM 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ]
    },
    "inteligencia_artificial": {
        "name": "Inteligência Artificial",
        "period": 6,
        "code": "RCM 025",
        "type": "OB",
        "CH": 64,
        "required": [
            "logica_computacao",
            "estrutura_dados",
            "prob_est"
        ]
    },



    // Linha matemática geral
    "geomertica_analitica": {
        "name": "Geometria Analítica e Cálculo Vetorial",
        "period": 1,
        "code": "RCN 023",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlocks": [
            "algebra_linear"
        ]
    },
    "algebra_linear": {
        "name": "Álgebra Linear",
        "period": 2,
        "code": "RCN 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "geometria_analitica"
        ],
        "unlocks": [
            "metodos_numericos",
            "computacao_grafica"
        ]
    },
    "calculo_1": {
        "name": "Cálculo Diferencial I",
        "period": 1,
        "code": "RCN 063",
        "type": "OB",
        "CH": 96,
        "required": [],
        "unlocks": [
            "calculo_2"
        ]
    },
    "calculo_2": {
        "name": "Cálculo II",
        "period": 2,
        "code": "RCN 020",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_1"
        ],
        "unlocks": [
            "prob_est",
            "metodos_numericos",
            "fisica_1",
            "fisica_3a",
            "calculo_3"
        ]
    },
    "calculo_3": {
        "name": "Cálculo III",
        "period": 3,
        "code": "RCN 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2"
        ]
    },
    "metodos_numericos": {
        "name": "Métodos Numéricos",
        "period": 3,
        "code": "RCN 038",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "programacao_1",
            "algebra_linear"
        ],
        "unlocks": [
            "fisica_computacional"
        ]
    },
    "prob_est": {
        "name": "Probabilidade e Estatística",
        "period": 4,
        "code": "RCN 037",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta",
            "calculo_2"
        ],
        "unlocks": [
            "inteligencia_artificial"
        ]
    },
    "fisica_1": {
        "name": "Física I",
        "period": 3,
        "code": "RCN 025",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "fisica_3a"
        ]
    },
    "fisica_3a": {
        "name": "Física III",
        "period": 4,
        "code": "RCN 059",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "fisica_1"
        ],
        "correrequisite": [
            "fisica_computacional"
        ]
    },
    "fisica_computacional": {
        "name": "Introdução a Física Computacional",
        "period": 4,
        "code": "RCN 060",
        "type": "OB",
        "CH": 64,
        "required": [
            "metodos_numericos"
        ]
    },

}