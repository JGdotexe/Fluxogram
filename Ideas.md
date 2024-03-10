# Ideas

## 2 modes:

1. Progress Mode
   - Element will change to a blue background
   - Happens whenever the full div is clicked
   - Possible classes:
     - `finished` - When the course is finished
     - `unlocked` - When the course is already unlocked
       - This will be calculed at each subject.checkbox.change event, and will be updated
2. Exploration Mode:
    - The prerequisites will be shown in a list
    - The courses it unlocks will be shown in a list
    - Possible classes:
      - `active` - When the course is clicked and you want to see the prerequisites and the courses it unlocks
      - `required` - When the course is a prerequisite to the clicked one
      - `unlocks` - When the course is unlocked by the clicked course


## Description ? : 
  - First Mode: 
    1. a ideia aqui é que ao clicar em qualquer matéria como concluido, ou desmarcar a mesma, todas as matérias que tem uma relação com a clicada (por exemplo Prog II libera ED e AC), vão ser recalculadas, ou seja, será feito uma rechecagem se as materias relacionais estarão disponíveis para serem feitas
    2. É necessário fazer isso pois não se pode liberar AC apenas fazendo Prog II, pois tbm é necessário Circuitos Digitais para fazer AC
    3. Por motivos de aberrações, como o famoso semestre que os alunos do segundo período fizeram Sistemas Operacionais, é necessário deixar o usuário marcar uma matéria como feita, mesmo com ela desbloqueada, e assim fazer os cálculos das matérias seguintes (por exemplo SO libera Sistemas Distribuidos), o que nesse caso um aluno do terceiro semestre poderia fazer (Que que vcs arranjaram em UFF, mas eu entendo vocês)
       - Se quiser fazer um soft block ou de alguma forma bloquear a matéria ser clicada, mas de alguma forma liberar que ela seja desbloqueada mesmo sem fazer as matérias anteriores, mesmo que dê trabalho pro usuário, também é uma boa opção, já que esses casos são raros
  
  - Second Mode: 
    1. A funcionalidade básica já está pronta, talvez seja necessário mexer no JS apenas se quiser mudar muito o estilo da página
  - Observações:
    - Eu quero no futuro tirar as barras/funcionalidade do scroll, seja vertica ou lateral, e adicionar o panning/zoom a página, seria algo estilo o google maps, onde arrastaria para ver as matérias e tal
    - Atualmente algumas matérias ficam totalmente escondidas em alguns formatos/tamanhos de tela, só aparecendo se usar um zoom ridículo de 50% ou menos, o que torna o texto ilegível, mas ai eu n faço ideia de como ajeitar



## To Do : 
- [x] Tirar Checkbox
- [ ] Mostrar mais informações sobre a matéria ao clicar no info
- [ ] Adicionar modo "Exploration" ao clicar no info


### Design Final:
- v-scroll and h-scroll OFF
- zoom

### Features to add:
- Progress bar/percentage
- Subjects finished
- Hours concluded
- Save info in the browser cache
- Add a "current semester" feature 