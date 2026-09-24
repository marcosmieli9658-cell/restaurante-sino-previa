# Restaurante do Sino: prévia institucional

Site de uma página para apresentação ao responsável pelo Restaurante do Sino, em Campos do Jordão. A publicação em GitHub Pages serve como prévia para revisão; o site ainda não está associado a um domínio oficial. A página contém `noindex, nofollow` enquanto estiver nessa fase.

**Prévia:** https://marcosmieli9658-cell.github.io/restaurante-sino-previa/

## Plano de ação

1. **Levantar as informações públicas:** conferir perfil do Instagram, localização do Google, contato, fotos e o vídeo da TV Vanguarda publicado pelo restaurante.
2. **Montar a prévia:** apresentar a casa, os destaques gastronômicos, fotos, vídeo, WhatsApp e rotas pelo Google Maps ou Waze em uma página responsiva.
3. **Publicar e revisar:** subir a página no GitHub Pages e testar em computador e celular, incluindo os links externos.
4. **Reunião de aprovação:** colher correções de texto, fotos, horários, cardápio, redes sociais e autorização de uso do vídeo. Após aprovação, preparar o endereço oficial e retirar o `noindex`.

## Informações a confirmar com o restaurante

- Texto institucional e eventuais detalhes de história da casa.
- Horários de funcionamento atualizados e se há necessidade de reserva.
- Cardápio e preços, caso devam aparecer na versão final.
- Seleção final e autorização das fotos retiradas do perfil oficial.
- Aprovação da versão refinada da logomarca, criada a partir da marca do perfil oficial.
- Autorização para exibir a publicação da TV Vanguarda; o vídeo está incorporado a partir do Instagram do restaurante.
- Página oficial do Facebook, se houver uma que a equipe deseje divulgar.

## Fontes usadas na prévia

- [Instagram oficial @restaurantesino](https://www.instagram.com/restaurantesino/): marca, destaques, WhatsApp, endereço e fotos.
- [Publicação do vídeo da TV Vanguarda no Instagram](https://www.instagram.com/restaurantesino/reel/DdC1VkBOfuF/).
- [Página compartilhada pelo usuário no Google](https://share.google/MuEKRyqYQQ3n5scVF): identificação e localização.

Fotos usadas: [mesa de fondue](https://www.instagram.com/restaurantesino/p/Ddm2Wjzjser/), [costela com fritas](https://www.instagram.com/p/C9GTqJ4hGI3/?img_index=1), [prato da casa](https://www.instagram.com/restaurantesino/p/DaJuOQjubCT/), [parmegiana diante da lareira](https://www.instagram.com/p/DZjKpS7uGxe/), [fachada](https://www.instagram.com/restaurantesino/p/DaawYxyjtRH/) e [sobremesa](https://www.instagram.com/restaurantesino/p/DaT7mrBO92Z/), todas do perfil oficial. A logomarca em `assets/logo-sino.png` foi refinada com a ferramenta de geração de imagem a partir da foto de perfil oficial, preservando sino, ondas, cores e texto.

## Estrutura

Site estático em `index.html`, `styles.css` e `script.js`, com fotos locais em `assets/`. O script abre o vídeo incorporado após o clique na capa, apresenta a escolha de GPS e aplica transições discretas aos cards; sem JavaScript, a capa leva à publicação original. Não há formulário, conta de usuário ou coleta própria de dados. O vídeo incorporado é servido pelo Instagram; os links de WhatsApp, Instagram, Google Maps e Waze levam aos serviços externos.

## SEO, AEO e GEO da prévia

- **SEO:** título, descrição, idioma, hierarquia de títulos, HTML semântico, textos alternativos, imagens dimensionadas e carregamento adiado fora da primeira tela. A página tem metadados de compartilhamento e dados estruturados `Restaurant` com nome, contato, endereço, coordenadas, imagens e Instagram verificados.
- **AEO:** respostas visíveis e concisas para perguntas sobre endereço, pratos, contato e vídeo, com links úteis. As respostas são conteúdo para pessoas, sem promessa de resultado enriquecido em buscas.
- **GEO:** identidade do restaurante, localização e destaques gastronômicos expressos em texto claro e consistente com os dados estruturados, apoiados por fotos e vídeo oficiais. Não existe marcação especial que garanta citação em respostas de IA.
- **Prévia:** `noindex, nofollow` continua ativo. Antes da publicação oficial, trocar as URLs de prévia nos metadados e no JSON-LD pelo domínio aprovado, adicionar URL canônica, retirar `noindex`, verificar a propriedade no Search Console e alinhar as informações com o Perfil da Empresa no Google. Indexação e visibilidade não são automáticas.

Referências técnicas: [guia do Google para busca com IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [dados estruturados de negócios locais](https://developers.google.com/search/docs/appearance/structured-data/local-business) e [controle de indexação](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
