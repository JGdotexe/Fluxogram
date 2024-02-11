# Ideas

## 2 modes:

1. The first is the "Select" the courses you already have:
   - Element will change to a clearer background whenever clicked
   - Each will have a checkbox
   - Possible classes:
     - `finished` - When the course is finished
     - `unlocked` - When the course is already unlocked
       - This will be calculed at each subject.checkbox.change event, and will be updated
     - `locked` - When the course is not unlocked
       <!-- - `prerequisite` - When the course is a prerequisite  ---- There will be no `prerequisite` since you cant select a course you dont have -->
2. The second is the "Click" the course you want to see the prerequisites and the courses it unlocks:
    - The prerequisites will be shown in a list
    - The courses it unlocks will be shown in a list
    - Possible classes:
      - `active` - When the course is clicked and you want to see the prerequisites and the courses it unlocks
      - `required` - When the course is a prerequisite to the clicked one
      - `unlocks` - When the course is unlocked by the clicked course

**Both will happen simultaneosly**

<!-- Quando a tiverem algumas matérias selecionadas e a pessoa clicar numa metéria *aleatória* la pra fente, acontecera a mudança de css como no segundo modo porém as matérias selecionadas **NÃO SERÃO PERDIDAS**. -->

## TO DO:
- [ ] Fazer Checkbox
- [ ] Criar o estilo de uma materia quando selecionada
- [ ] Mudar o estilo de uma materia quando clicada
- [ ] Mostrar mais informações sobre a matéria ao click/hover



### Design:
- v-scroll and h-scroll OFF
- zoom