# DDD (Domain-drive Design)

Design dirigido à domínio

DDD não tem quase nada a ver com código, DDD é uma metodologia para design de software 

Design de Software = uma forma de converter um problema real em software, que ensina como devemos correlacionar os problemas que temos na hora de desenvolver um software, como iremos lidar com a necessidade do nosso cliente e traduzir isso para uma linguagem de domínio

Diferente de arquitetura de software (clean architecture, etc, sobre desacoplamento, inversão de dependências, injeção de dependência, etc, etc), dentro de DDD a gente mal toca em código e muito menos em ferramentas (lingaugens, frameworks, libs)

DDD nada mais é de que uma forma da gente conseguir uma comunicação muito clara e padronizada entre todas as partes de desenvolvimento de uma aplicação

Design = como iremos desenhar nossa aplicação e desenhar não tem nada a ver como iremos implementar (não tem haver com frameworks, arquiteturas, pastas, etc), é como iremos converter o problema do nosso cliente em algo palpavel

## Domínio

Dominio = Área de entendimento, onde todas as pessoas envolvidas para a construção do software tem o seu conhecimento muito semelhantes

Muitas vezes nós programadores queremos ao desenvolver um software colocar logo a mão na massa, ver como irá ficar nosso banco de dados, como irá ser organizado todas as estruturas e etc, antes disso existe uma etapa muito importante: entender o problema do cliente, entender o problema dos DOMAINS EXPERTS
- Domain Experts -> São pessoas que entendem a fundo, a problemática da qual estamos resolvendo com o nosso software, em um primeiro momento, a não ser que você esteja desenvolvendo um software para si, você não é expert de domínio, são pessoas estão no dia a dia das operações
  - Conversa
- Linguagem ubíqua -> Linguagem universal que todas as pessoas envolvidas conseguem conversar por igual

Muitas das vezes quando programamos, estamos viciados em chamar algumas funcionalidades, casos de uso ou entidades de uma forma, mas a partir do momento em que conversamos com os experts de domínio, as pessoas podem chamar as entidades/casos de uso de maneiras diferentes

Chamamos muitas vezes por padrão no sistema o nosso usuário de usuário, mas na maioria dos negócios não se faz isso
Barbearia: eu aguardo meu usuário para cortar o cabelo, não, ele aguarda o cliente

- Usuário 
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

DDD é diferente de Clean Architecture

# Glossário: DDD

## Domínio

O domínio (domain) refere-se a um conjunto de conceitos, regras, processos e comportamentos que são fundamentais para um determinado negócio ou aplicação. É a área de conhecimento que descreve e organiza todo o conhecimento e entendimento necessário para desenvolver um software que atenda às necessidades do negócio ou aplicação.

O domínio é a base do DDD e é a partir dele que os modelos de negócio são construídos. Ele é composto por um conjunto de entidades, agregados, serviços e eventos que representam conceitos fundamentais do negócio. O conhecimento do domínio é essencial para que os desenvolvedores possam entender as necessidades do negócio e construir um software que atenda a essas necessidades de forma eficiente e eficaz.

Além disso, o DDD enfatiza a importância da comunicação clara e constante entre os desenvolvedores e os especialistas do domínio (conhecidos como especialistas do domínio ou domain experts), para que o conhecimento do domínio possa ser compartilhado e incorporado ao processo de desenvolvimento de software.

## Entidades

As entidades (entities) são objetos de domínio que representam conceitos importantes do negócio. Elas são responsáveis por encapsular o estado e o comportamento relacionado a esses conceitos, e são fundamentais para a modelagem do domínio.

Uma entidade é caracterizada por ter uma identidade única e constante, que a diferencia de outras entidades do mesmo tipo.

Elas são importantes para o DDD porque elas representam as principais abstrações do domínio, e a sua correta modelagem ajuda a garantir que o software reflita de forma precisa as regras e o comportamento do negócio. Além disso, as entidades costumam ser o ponto de entrada para outras operações do sistema, como validações, cálculos e regras de negócio específicas.

## Casos de uso

Os casos de uso (use cases) são uma técnica para descrever os requisitos funcionais de um sistema. Eles descrevem uma interação específica entre o usuário e o sistema, mostrando quais ações o usuário realiza e como o sistema responde a essas ações.

Eles são uma parte importante do processo de desenvolvimento de software, pois ajudam a definir os requisitos do sistema e a garantir que ele atenda às necessidades dos usuários finais.

## Linguagem ubíqua

A linguagem ubíqua (ubiquitous language) é uma técnica que consiste em usar uma linguagem comum, compreensível tanto para desenvolvedores quanto para especialistas do domínio, para descrever e entender os conceitos e processos do domínio em questão.

Ela é importante porque ajuda a alinhar a comunicação entre os membros da equipe de desenvolvimento e os especialistas do domínio. Usando uma linguagem comum, todos os envolvidos no projeto podem ter uma compreensão compartilhada dos termos e conceitos-chave do domínio, facilitando o desenvolvimento de um software que atenda às necessidades do negócio.

Além disso, ela deve ser incorporada no código-fonte do software e em documentos relacionados, como diagramas e documentação técnica, para garantir que todos os envolvidos usem a mesma terminologia. Dessa forma, a linguagem ubíqua ajuda a garantir que o software seja construído para atender às necessidades do negócio e que todos os envolvidos no projeto estejam na mesma página.

## Agregados

Um agregado (aggregate) é um conjunto de objetos de domínio que são tratados como uma unidade coesa. Eles são usados para delimitar transações consistentes de mudança de estado dentro do domínio.

Um agregado tem uma raiz de agregado (aggregate root), que é uma única entidade que é responsável por garantir a consistência do agregado como um todo. A raiz do agregado é a única entidade que pode ser referenciada de fora do agregado. Todas as outras entidades dentro do agregado só podem ser acessadas através da raiz do agregado.

O uso deles é uma das principais técnicas para gerenciar a complexidade em sistemas de software baseados em DDD. Ao definir os limites do agregado, é possível criar um modelo de domínio mais claro e focado, com transações e responsabilidades bem definidas para cada objeto no agregado.

- Order -> OrderItem[]
- Order -> Shipping

Utilizando o escopo que estamos programando, a answer é criada no primeiro momento, e o answercomment vai ser criado no futuro e não ao mesmo tempo em que a answer foi criada

Diferente de um Pedido (Order) com os seus itens (OrderItem[]) os itens do pedido e o pedido em si são criados ao mesmo tempo, configurando assim um agregado

Um agregado nada mais é do que um conjunto de entidades que são manipuladas ao mesmo tempo e elas juntam compõem um algo maior (agregado)

Quando seguimos a risca, os conceitos do DDD, o agregado ele pode fazer coisas as quais as entidades menores que compoem o agregado não podem fazer

## WhatchedList

Uma lista observada

Imagine que no nosso caso que estamos criando um Fórum, criando uma pergunta, só que essa pergunta ela tem anexos, eu quero permitir que no mesmo momento em que a question está sendo criada, eu quero permitir que no mesmo momento que a question está sendo criada eu crie os anexos dessa question eu configuro isso como um agregado, como vimos anteriormente

Só que o mais importante aqui é que podemos ter vários anexos para a pergunta, se formos pensar no fluxo de criação

Question (Titulo, Conteudo, Anexos)

Na criação isso é muito simples, o watchedlist começa a fazer sentido mais na edição

Quando salvamos a question no banco de dados, estamos apenas criando a pergunta com titulo e conteudo e para cada anexo que foi selecionado, eu crio um registro na tabela de anexos contendo cada um dos anexos selecionados

Na edição do agregado, editar o titulo e conteudo da pergunta é simples, só fazer um update, agora, editar os anexos, já é outra situação, imagine que criamos a pergunta com 3 anexos, quando eu editar, podemos fazer:
 - Adicionar um novo anexo (create)
 - Remover o segundo anexo que tinha sido criado previamente (delete)
 - Editar um anexo existente (update)

Na edição o trabalho de manipular informações que são listas (arrays) dentro de um agregado começa a ser mais complexo

O mais correto nesse caso, é conseguir identificar exatamente, quais foram os anexos que foram adicionados, quais removidos e quais editados 

WhatchedList -> uma classe que permite a gente ter mais informações sobre itens contidos numa lista

## Bounded Context

Bounded Context (contexto delimitado / subdomínio) é uma técnica para definir limites explícitos em torno de um conjunto de modelos de domínio. Cada Bounded Context é uma fronteira lógica que separa um modelo de domínio específico, com suas próprias regras, termos e limites, de outros modelos de domínio dentro do mesmo sistema.

Um Bounded Context pode ser visto como um subdomínio ou um setor de um sistema maior, onde as interações entre os objetos de domínio são altamente relacionadas. Dentro de um Bounded Context, as regras de negócio podem ser diferentes e podem ter nomes de entidades ou conceitos com significados distintos em outros contextos.

Essa técnica ajuda a evitar a confusão entre diferentes conceitos de negócio, evita a duplicação de código e reduz a complexidade do sistema. Cada Bounded Context pode ter sua própria arquitetura, padrões de projeto e tecnologias, permitindo que a equipe de desenvolvimento escolha as ferramentas mais adequadas para lidar com as especificidades do contexto.

Além disso, o DDD incentiva a comunicação clara e colaboração entre diferentes Bounded Contexts, por meio de integrações bem definidas e acordos claros de como os objetos de domínio serão compartilhados entre os contextos.

O estabelecimento de Bounded Contexts é uma parte importante da modelagem de um sistema baseado em DDD e deve ser conduzido em estreita colaboração entre a equipe de desenvolvimento e especialistas do domínio para garantir que as fronteiras do contexto sejam bem definidas e compreendidas.

## Value Objects

Um Value Object (objeto de valor) é uma classe que representa um valor que é importante para o domínio, mas que não possui identidade própria. Em outras palavras, um Value Object é um objeto que é definido pelos seus atributos, em vez de ser definido por uma identidade exclusiva.

Por exemplo, em um sistema de compras online, um Endereço pode ser modelado como um Value Object, pois não é importante manter um identificador único para cada endereço, mas sim os seus atributos, como rua, número, bairro, cidade, estado e CEP. Do ponto de vista do negócio, o endereço é apenas uma informação que precisa ser armazenada e consultada, não sendo uma entidade que precisa ser rastreada ou gerenciada.

Porém, é importante lembrar que nem todos os objetos sem identidade são necessariamente Value Objects. A decisão de modelar um objeto como um Value Object depende do contexto do domínio e da análise dos especialistas do negócio e da equipe de desenvolvimento.

## Eventos de domínio

Um evento de domínio (domain event) é uma notificação assíncrona que indica que algo importante aconteceu no domínio do sistema. Ele representa um fato ocorrido dentro do sistema que pode ser interessante para outras partes do sistema e pode ser usado para tomar decisões ou gerar novas ações.

Por exemplo, em um sistema de comércio eletrônico, um evento de domínio pode ser gerado quando uma nova compra é realizada com sucesso. Esse evento pode conter informações como o identificador da compra, o valor total, o endereço de entrega, entre outras informações relevantes para o domínio.

Eventos de domínio são importantes porque permitem que diferentes partes do sistema sejam notificadas e atualizadas quando ocorrem mudanças importantes no domínio. Eles também permitem que o sistema seja projetado de forma mais modular e escalável, pois diferentes partes do sistema podem ser projetadas para reagir a diferentes tipos de eventos, de forma independente.

# Clean Architecture

![CleanArchitecture](https://github.com/Kemuel-Batista/ignite-nodejs-04-ddd-clean-architecture/assets/62821098/b529c4f1-b830-4b1b-ae3a-2f8b38f5fd7e)

Muitas das vezes a gente entende arquitetura limpa de uma maneira muito mais complexa do que ela realmente é.

Temos que entender que cada ciclo que existe no diagrama, eles representam uma parte da nossa aplicação e o usuário ele está na camada mais externa, as flechas indicam de onde o usuário está vindo até onde ele chega, 

Camada Azul (Camada de Infraestrutura) = normalmente o usuário se "conecta" por meio da Web, UI, DB, External Interfaces or Devices, camada que não temos total controle, camada de banco de dados, interação dos usuários

Camada Verde = camada que vai adaptar a informação que está vindo da camada azul para uma maneira que a camada mais interna entenda, mas o mais importante não é adaptar os dados em si, mas proteger as camadas mais internas da implementação direta da camada de infraestrutura. Olhando para o SOLID, um dos principais conceitos é a inversão de dependência (parte do código não dependa diretamente da implementação de uma outra camada de abstração, um contrato). Isso tem total conexão com o clean architecture, pois nossos casos de uso não podem dependender da implementação da nossa camada de infraestrutura

Camada Vermelha = Casos de uso da aplicação, que deve está desacoplada conforme falado anteriormente

Camada Amarela = Entidades da aplicação

As flechas representam a dependência entre as camadas, as flechas vai do mais externo para o mais interno, isso quer dizer que a camada de casos de uso (funcionalidades da aplicação) ela pode fazer importações diretas para a camada de entidades, podemos importar uma entidade para a camada de caso de uso mas a entidade não pode importar nada de caso de uso e assim sucessivamente