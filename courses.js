const courses = {
    // Linha de arquitetura (Baixo Nível)
    "fundamento_arquitetura_computadores": {
        "name": "Fundamentos de Arquitetura de Computadores",
        "code": "RCM 013",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlock": [
            "circuitos_digitais",
            "lab_circuitos_digitais"
        ]
    },
    "circuitos_digitais": {
        "name": "Circuitos Digitais",
        "code": "RCM 011",
        "type": "OB",
        "CH": 64,
        "required": [
            "FAC"
        ],
        "correquisite": [
            "lab_circuitos_digitais"
        ],
        "unlock": [
            "arquitetura_computadores"
        ]
    },
    "lab_circuitos_digitais": {
        "name": "Laboratório de Circuitos Digitais",
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
        "code": "RCM 014",
        "type": "OB",
        "CH": 64,
        "required": [
            "circuitos_digitais",
            "programacao_2"
        ],
        "unlock": [
            "sistemas_operacionais",
            "redes_1"
        ]
    },
    "sistemas_operacionais": {
        "name": "Sistemas Operacionais",
        "code": "RCM 016",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlock": [
            "sistemas_distribuidos"
        ]
    },
    "sistemas_distribuidos": {
        "name": "Sistemas Distribuídos",
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
        "code": "RCM 018",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlock": [
            "redes_2"
        ]
    },
    "redes_2": {
        "name": "Redes de Computadores 2",
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
        "code": "RCN 044",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlock": [
            "logica_computacao",
            "prob_est"
        ]
    },
    "logica_computacao": {
        "name": "Lógica para Ciência da Computação",
        "code": "RCM 015",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta"
        ],
        "unlock": [
            "paradigmas_programacao",
            "inteligencia_artificial"
        ]
    },

    // Linha principal Programação
    "programacao_1": {
        "name": "Programação 1",
        "code": "RCM 002",
        "type": "OB",
        "CH": 96,
        "required": [],
        "unlock": [
            "programacao_2",
            "metodos_numericos"
        ]
    },
    "programacao_2": {
        "name": "Programação 2",
        "code": "RCM 003",
        "type": "OB",
        "CH": 96,
        "required": [
            "programacao_1"
        ],
        "unlock": [
            "arquitetura_computadores",
            "estrutura_dados",
            "paradigmas_programacao"
        ]
    },
    "paradigmas_programacao": {
        "name": "Paradigmas de Programação",
        "code": "RCM 008",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2",
            "logica_computacao"
        ],
        "unlock": [
            "engenharia_software_1",
            "compiladores"
        ]
    },
    "estrutura_dados": {
        "name": "Estrutura de Dados",
        "code": "RCM 004",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2"
        ],
        "unlock": [
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
        "code": "RCM 009",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ]
    },
    "algoritmo_grafos": {
        "name": "Algoritmos em Grafos",
        "code": "RCM 007",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ]
    },
    "liguagens_formais_teoria_computacao": {
        "name": "Linguagens Formais e Teoria da Computação",
        "code": "RCM 010",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlock": [
            "compiladores"
        ]
    },
    "compiladores": {
        "name": "Compiladores",
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
        "code": "RCM 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlock": [
            "projeto_arquitetura_software",
            "projeto_banco_dados",
            "desenvolvimento_web"
        ]
    },
    "projeto_banco_dados": {
        "name": "Projeto de Banco de Dados",
        "code": "RCM 022",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados"
        ]
    },
    "engenharia_software_1": {
        "name": "Engenharia de Software 1",
        "code": "RCM 023",
        "type": "OB",
        "CH": 64,
        "required": [
            "paradigmas_programacao",
            "estrutura_dados"
        ],
        "unlock": [
            "projeto_arquitetura_software"
        ]
    },
    "desenvolvimento_web": {
        "name": "Desenvolvimento Web",
        "code": "RCM 057",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados"
        ]
    },
    "projeto_arquitetura_software": {
        "name": "Projeto e Arquitetura de Software",
        "code": "RCM 005",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados",
            "engenharia_software_1"
        ],
        "unlock": [
            "engenharia_software_2"
        ]
    },
    "engenharia_software_2": {
        "name": "Engenharia de Software 2",
        "code": "RCM 058",
        "type": "OB",
        "CH": 64,
        "required": [
            "projeto_arquitetura_software"
        ]
    },


    // Isoladas
    "interface_humano-computador": {
        "name": "Interface Humano-Computador",
        "code": "RCM 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ]
    },
    "inteligencia_artificial": {
        "name": "Inteligência Artificial",
        "code": "RCM 025",
        "type": "OB",
        "CH": 64,
        "required": [
            "logica_computacao",
            "estrutura_dados",
            "prob_est"
        ]
    },
    "intro_ciencia_computacao": {
        "name": "Introdução à Ciência da Computação",
        "code": "RCM 001",
        "type": "OB",
        "CH": 32
    },



    // Linha matemática geral
    "geomertica_analitica": {
        "name": "Geometria Analítica e Cálculo Vetorial",
        "code": "RCN 023",
        "type": "OB",
        "CH": 64,
        "required": [],
        "unlock": [
            "algebra_linear"
        ]
    },
    "algebra_linear": {
        "name": "Álgebra Linear",
        "code": "RCN 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "geometria_analitica"
        ],
        "unlock": [
            "metodos_numericos",
            "computacao_grafica"
        ]
    },
    "calculo_1": {
        "name": "Cálculo Diferencial I",
        "code": "RCN 063",
        "type": "OB",
        "CH": 96,
        "required": [],
        "unlock": [
            "calculo_2"
        ]
    },
    "calculo_2": {
        "name": "Cálculo II",
        "code": "RCN 020",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_1"
        ],
        "unlock": [
            "prob_est",
            "metodos_numericos",
            "fisica_1",
            "fisica_3a",
            "calculo_3"
        ]
    },
    "calculo_3": {
        "name": "Cálculo III",
        "code": "RCN 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2"
        ]
    },
    "metodos_numericos": {
        "name": "Métodos Numéricos",
        "code": "RCN 038",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "programacao_1",
            "algebra_linear"
        ],
        "unlock": [
            "fisica_computacional"
        ]
    },
    "prob_est": {
        "name": "Probabilidade e Estatística",
        "code": "RCN 037",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta",
            "calculo_2"
        ],
        "unlock": [
            "inteligencia_artificial"
        ]
    },
    "fisica_1": {
        "name": "Física I",
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
        "code": "RCN 060",
        "type": "OB",
        "CH": 64,
        "required": [
            "metodos_numericos"
        ]
    },

}