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