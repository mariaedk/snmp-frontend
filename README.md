# Monitoramento SNMP

## Objetivo
O projeto por meio de uma máquina servidor, tem o objetivo de monitorar uma ou mais máquinas clientes por meio do protocolo SNMP. Com ele, é possível obter dados da máquina, como a quantidade de memória RAM disponível, a quantidade de usuários do sistema, o tempo de atividade, entre outros.

## Configurações
É necessário clonar o repositório em uma pasta do seu computador, e em seguida seguir os passos:

[Configurações](https://github.com/mariaedk/snmp-sistemas-operacionais/blob/main/read/config.md)

1) Rodar primeiro o backend
2) Logo em seguida, subir o servidor frontend, acessando via navegador o endereço "localhost:4200"
3) Acesse no menu "Cadastrar máquina cliente"
4) Insira o IP de uma máquina cliente respeitando a formatação de IPs (Exemplo de entrada: 192.168.2.21)
Ao clicar em "Salvar", será enviado uma requisição "ping" a este IP para verificar se está ativo na rede. Se esta máquina receber pacotes, será possível cadastrar no sistema.
5) Ao cadastrar, voltar para Home e verificar a máquina cadastrada.
Se estiver ativa, será possível clicar no registro da tabela e assim acessar seus detalhes. Se estiver inativa, não é possível visualizar detalhes.


