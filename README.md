# bad-expense-tracker
### Tarefa prática: melhorando um app ruim


#  Melhorias:

##  1. Estrutura e organização

- Componentização aplicada para promover maior organização durante o desenvolvimento;
- Divisão entre layout, lista e formulário realizada, separando arquivos em tópicos de acordo com suas funções;
- Composable criado;
- Estilos organizados por partes e usando Tailwind.
- Uso de Vue Router e views para organizar as telas separando as páginas principais da aplicação, com o objetivo uma melhor experiência de navegação ao usuário;

##  2. Usabilidade e UX

###  2.1 Layout

- Layout feito **mobile first** e responsivo para que se adapte bem visualmente a todos os tipos de telas;
- Hierarquia visual melhorada, com a lista de gastos apresentada primeiro e o botão para redirecionamento ao formulário de adição de gastos depois;
- Redução de elementos por página: uma página com a lista e outra com o formulário, feita para reduzir a quantidade de informações apresentadas por vez e não causar sobrecarga visual;
- O caminho entre telas é curto e previsível, sempre existindo uma forma clara de voltar, de modo que não há telas “sem saída”, para que o usuário tenha melhor experiência e não se confunda ao utilizar o sistema.

###  2.2 Botões

- Botões que eram pequenos tiveram seus tamanhos ajustados para facilitar o toque do usuário em telas pequenas;
- Todos os botões funcionam e dão feedback visual, para que o usuário entenda que sua ação foi realizada;
- Botões de limpar despesas e formulário adicionados para agilizar a usabilidade do usuário;
- Ações importantes aproximadas do polegar, adaptadas para o uso com apenas uma mão;
- Botões geralmente mais utilizados com cor mais forte para evitar confusões por parte do usuário.

###  2.3 Mensagens e Formulário

- Mensagens descritivas para confirmação de ações importantes;
- Mensagens de erro melhoradas, mais descritivas e amigáveis;
- Filtragem por categorias alterada para filtrar também categorias escritas com letras maiúsculas no formulário.

###  2.4 Elementos e Textos

- Tamanhos, cores e escrita dos textos alterados, de modo que todos sejam legíveis e de fácil compreensão;
- Contraste entre elementos e textos aplicado para que fiquem harmônicos;
- Elementos com tamanhos e cores alterados para melhor experiência visual e usabilidade;
- Estilo do header alterado com feedback de seleção de categoria quando a filtragem está selecionada, para que o usuário entenda quais tipos de gastos estão sendo apresentados.
