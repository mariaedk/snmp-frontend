# Monitoramento SNMP

## Objetivo
O projeto por meio de uma máquina servidor, tem o objetivo de monitorar uma ou mais máquinas clientes por meio do protocolo SNMP. Com ele, é possível obter dados da máquina, como a quantidade de memória RAM disponível, a quantidade de usuários do sistema, o tempo de atividade, entre outros.

## Configuração
É necessário clonar o repositório em uma pasta do seu computador, e em seguida seguir os passos:

### Habilitar SNMP no Windows
* Acessar as configurações do windows em "Gerenciar recursos opcionais"
* Selecionar "Adicionar Recurso"
* Digitar "Protocolo SNMP" e selecionar a opção. Clicar em Instalar
* É necessário reiniciar o computador após a instalação do recurso

### Back-end
* Tecnologias utilizadas: Java versão 21, framework Springboot, banco de dados em memória H2
* É necessário ter Java versão 21 ou configurar o projeto para apontar para uma JDK 21 ao rodar o projeto 
* Importar o projeto em sua IDE e rodar a classe main

To install Docuowl using [Homebrew](https://brew.sh), execute the following command:

```bash
brew install docuowl/tap/docuowl
```

### Manually
Refer to the [releases](https://github.com/docuowl/docuowl/releases) page to get
the latest version.

## Documentation Organization
Docuowl takes a directory as input. The directory is expected to have one
directory for each section or group. Each group may have subsections, which by
their turn must also be placed into directories.
Each **Section** is required to have an `content.md` file, containing the
Frontmatter for that section, and an optional `sidenotes.md` file, that will be
rendered to the right of the section. The Frontmatter must contain at least a
`Title` property, and an optional `ID` property containing a unique slug for that
section.
Each **Group** must contain a single `meta.md` file, containing a Frontmatter like
a Section, and an optional content following the frontmatter.

For instance, take the following directory tree as example:

```
.
├── 1-introduction
│   └── content.md
├── 2-errors
│   ├── content.md
│   └── sidenotes.md
├── 3-authentication
│   ├── content.md
│   └── sidenotes.md
├── 4-authorization
│   ├── 1-login
│   │   ├── content.md
│   │   └── sidenotes.md
│   ├── 2-logout
│   │   ├── content.md
│   │   └── sidenotes.md
│   ├── 4-me
│   │   ├── content.md
│   │   └── sidenotes.md
│   └── meta.md
├── 5-foo
│   ├── 1-listing-foos
│   │   ├── content.md
│   │   └── sidenotes.md
│   ├── 2-merged-foos
│   │   ├── content.md
│   │   └── sidenotes.md
│   └── meta.md
├── 6-bars
│   ├── content.md
│   └── sidenotes.md
├── 7-list-foobars
│   ├── content.md
│   └── sidenotes.md
├── 8-get-foobar
│   ├── content.md
│   └── sidenotes.md
└── 9-foobar-data
    ├── content.md
    └── sidenotes.md
```

### Example of `meta.md`:

```markdown
---
Title: Authorization
---

> :warning: **Warning**: All authorization endpoints are currently in maintenance
```

### Markdown Extensions

Docuowl introduces two new blocks to Markdown: Boxes and Attributes List.

#### Boxes
Boxes can only be used in sidenotes. To create a new box, use the following
format:

```
#! This is a box
And this is the box's content
```

After one `#!`, the box will take any content that follows until one of the
following conditions are met:

1. A horizontal ruler is found (`----`)
2. Another Box begins.

#### Attributes List
Attributes Lists can only be used in contents. To create a new Attribute List,
use the following format:

```
#- Attribute List
- Key1 `type`
- Key1 Description
```

## Usage
Docuowl can be invoked in two modes: Compile, and Watch.

### Compile
Compilation will output a single `index.html` file to an specified directory,
taking another directory as input. For instance:

```bash
$ docuowl --input docs --output docs-html
```

### Watch
Watch allows one to continuously write documentation and see the preview with
auto-reload. For that, use:

```bash
$ docuowl --input docs --output docs-html --watch

Docuowl v0.1
Listening on 127.0.0.1:8000
```

Then open your browser and point to 127.0.0.1:8000. The page will be reloaded
each time a file changes in the `input` directory.

### Building
In order to locally build, use the provided `Makefile`. Steps consist of running
`cmd/static-generator/main.go`, responsible for compiling static files required
by `static/static.go`, and running `go build` on `cmd/docuowl/main.go`.

## TODO
- [ ] Full-text Search
- [ ] Add tests

## License

This software uses other open-source components. For a full list, see the `LICENSE` file.

```
MIT License

Copyright © 2021 Victor Gama
Copyright © 2021 Real Artists

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
