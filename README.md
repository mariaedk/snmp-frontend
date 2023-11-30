# Monitoramento SNMP

## Objetivo
O projeto por meio de uma máquina servidor, tem o objetivo de monitorar uma ou mais máquinas clientes por meio do protocolo SNMP. Com ele, é possível obter dados da máquina, como a quantidade de memória RAM disponível, a quantidade de usuários do sistema, o tempo de atividade, entre outros.

## Configurações
É necessário clonar o repositório em uma pasta do seu computador, e em seguida seguir os passos:

### Habilitar SNMP no Windows
OBS: Esta etapa é necessária tanto nas máquinas clientes quanto na máquina servidor
* Acessar as configurações do windows em "Gerenciar recursos opcionais"
  
![print1](https://github.com/mariaedk/snmp-sistemas-operacionais/assets/62608046/56614ba2-9b16-4238-9e33-f04063c2b661)

* Selecionar "Adicionar Recurso"

![print2](https://github.com/mariaedk/snmp-sistemas-operacionais/assets/62608046/98afc5cf-68a9-443b-92fd-1996a4804370)

> [!IMPORTANT]
> **Configurações iniciais**
>
> >[Configurar máquina](https://www.google.com.br/)

  
* Digitar "Protocolo SNMP" e selecionar a opção. Clicar em Instalar

![print3](https://github.com/mariaedk/snmp-sistemas-operacionais/assets/62608046/8d820ff8-e446-430e-a015-d7b98fade42b)

  
* É necessário reiniciar o computador após a instalação do recurso
* Após reiniciar, acessar "Serviços" do Windows e verificar se o "Protocolo SNMP" está adicionado
* Clicar com o botão direito do mouse sob "Protocolo SNMP" e acessar propriedades
![imagem](https://github.com/mariaedk/snmp-sistemas-operacionais/assets/62608046/cfc2b5ac-f99f-4757-be00-5be164bf3b25)

* Na aba "Segurança", marcar a opção "Aceitar pacotes de qualquer host"
![imagem (2)](https://github.com/mariaedk/snmp-sistemas-operacionais/assets/62608046/a3ea471e-d908-4b5d-aad6-07ef5b5afc5e)

* Nesta mesma tela, clicar em "Adicionar"


### Back-end
* Tecnologias utilizadas: Java versão 21, framework Springboot, banco de dados em memória H2
* É necessário ter Java versão 21 ou configurar o projeto para apontar para uma JDK 21 ao rodar o projeto 
* Importar o projeto em sua IDE e rodar a classe main

### Front-end
* Tecnologia utilizada: Angular versão 16.2
* Para baixar, é necessário ter node.js e npm instalados também. Link Angular CLI download: https://angular.io/cli
* Na pasta do snmp-frontend onde está contido os arquivos do front end, rodar o comando "npm install" para baixar as dependências do projeto
* Assim que finalizado, rodar o comando "ng s" para subir o servidor. Por padrão, ficará ativo em "localhost:4200"

1) Rodar primeiro o backend
2) Logo em seguida, subir o servidor frontend, acessando via navegador o endereço "localhost:4200"
3) Acesse no menu "Cadastrar máquina cliente"
4) Insira o IP de uma máquina cliente respeitando a formatação de IPs (Exemplo de entrada: 192.168.2.21)
Ao clicar em "Salvar", será enviado uma requisição "ping" a este IP para verificar se está ativo na rede. Se esta máquina receber pacotes, será possível cadastrar no sistema.
5) Ao cadastrar, voltar para Home e verificar a máquina cadastrada.
Se estiver ativa, será possível clicar no registro da tabela e assim acessar seus detalhes. Se estiver inativa, não é possível visualizar detalhes.


