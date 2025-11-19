# Dodge - Durango

Site institucional sobre o Dodge Durango, apresentando informações sobre o veículo, suas versões, detalhes técnicos e formulário de interesse.

## Tecnologias Utilizadas

- **HTML5** - Estruturação do conteúdo
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interatividade e navegação
- **jQuery** - Biblioteca JavaScript para manipulação do DOM e animações

## Funcionalidades Principais

- **Navegação Fixa**: Menu superior fixo com links para todas as seções do site
- **Rolagem Suave**: Animação suave ao navegar entre as seções através dos links do menu
- **Seção Home**: Apresentação inicial com informações sobre o Dodge Durango e versões recentes (2019, 2020, 2021)
- **Seção Detalhes**: Informações técnicas sobre conforto, motor e sistema de entretenimento
- **Seção Anteriores**: Galeria com versões anteriores do veículo (2015, 2017, 2020)
- **Formulário de Compra**: Formulário para cadastro de interesse com campos para nome, endereço, e-mail, forma de pagamento, modelo, quantidade e comentários
- **Seção Design**: Apresentação da equipe de design
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela (desktop, tablet e mobile)
- **Botões "Voltar ao Topo"**: Links estratégicos para retornar ao início da página

## Instalação e Execução do Projeto

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (opcional, para melhor experiência)

### Instalação

1. Clone o repositório ou faça o download dos arquivos:
```bash
git clone [URL_DO_REPOSITORIO]
```

2. Navegue até a pasta do projeto:
```bash
cd trabalhoweb
```

### Execução

#### Opção 1: Execução Direta (Mais Simples)

1. Abra o arquivo `index.html` diretamente no navegador
2. O site será carregado e estará pronto para uso

#### Opção 2: Usando Servidor Local (Recomendado)

**Com Python:**
```bash
python -m http.server 8000
```
Acesse: `http://localhost:8000`

**Com Node.js (usando http-server):**
```bash
npx http-server
```
Acesse: `http://localhost:8080`

**Com PHP:**
```bash
php -S localhost:8000
```
Acesse: `http://localhost:8000`

### Estrutura de Arquivos

```
trabalhoweb/
│
├── index.html          # Página principal
├── estilo.css          # Estilos CSS
├── README.md           # Documentação do projeto
│
├── js/
│   ├── jquere.js       # Biblioteca jQuery
│   └── scrollTop.js    # Script de rolagem suave
│
└── [imagens]/          # Imagens do projeto
    ├── dodgelogo.png
    ├── durango.jpg
    └── ...
```

### Observações

- Certifique-se de que todas as imagens estejam na mesma pasta ou ajuste os caminhos no código HTML
- O jQuery está incluído localmente no projeto, não é necessário conexão com internet para funcionar
- O site é totalmente estático e não requer banco de dados ou backend


