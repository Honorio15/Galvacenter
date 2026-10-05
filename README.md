# Website Galvacenter

Website institucional e catálogo digital desenvolvido em HTML, CSS e JavaScript puros.

## Estrutura

- `index.html` — página principal;
- `styles.css` — identidade visual e responsividade;
- `script.js` — filtros, modal de produtos, galeria, animações e gerador de briefing;
- `assets/` — imagens otimizadas em WebP, logotipo e materiais gráficos;
- `catalogo-galvacenter.pdf` — catálogo disponível para consulta no site;
- `vercel.json` — cabeçalhos e configuração de publicação;
- `404.html` — página de erro personalizada.

## Visualizar no computador

Abra um terminal dentro da pasta e execute:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080` no navegador.

## Publicar na Vercel

### Upload direto

1. Entre na conta da Vercel.
2. Acesse o Vercel Drop.
3. Arraste a pasta ou o arquivo ZIP deste projeto.
4. Escolha o nome do projeto e publique.

O arquivo `index.html` já está na raiz e não há etapa de build.

### GitHub

1. Crie um repositório e envie todos os arquivos desta pasta.
2. Na Vercel, selecione **Add New Project** e importe o repositório.
3. Use o preset **Other** e mantenha os campos de build vazios.
4. Publique. Cada novo `push` poderá gerar uma nova versão.

## Ativar WhatsApp

No começo do arquivo `script.js`, localize:

```js
const SITE_CONFIG = {
  instagramUrl: 'https://www.instagram.com/galvacentertelhas/',
  whatsappNumber: '5514981572026',
  whatsappContactName: 'Ana Flavia'
};
```

Preencha `whatsappNumber` somente com números, incluindo DDI e DDD. Exemplo fictício:

```js
whatsappNumber: '5514999999999'
```

O botão de envio pelo WhatsApp aparecerá automaticamente no resumo de orçamento.

## Ajustes recomendados antes da publicação definitiva

- informar o número oficial do WhatsApp;
- incluir endereço, e-mail e horário de atendimento, caso desejado;
- revisar os textos técnicos e comerciais com a equipe;
- registrar um domínio próprio;
- substituir a imagem de compartilhamento quando a identidade final for aprovada.

## Observação sobre o plano gratuito da Vercel

O projeto é tecnicamente compatível com a Vercel. Verifique, antes de publicar o site comercial, as condições vigentes do plano escolhido e os termos de uso da plataforma.


## Contato configurado nesta versão

- WhatsApp: (14) 98157-2026 — Ana Flavia
- Instagram: @galvacentertelhas
- O botão de orçamento monta a mensagem e abre o WhatsApp já com o resumo preenchido.
- As opções de telha translúcida foram removidas do website e do formulário.
