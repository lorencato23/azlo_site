# Paleta de Cores AZLO

Fonte da verdade: **AZLO Brand Book v4** (`extraido_290626/AZLO_Brand_Book_v4.docx`,
seção _04 · Sistema visual · Paleta cromática_). Esta paleta substitui a
derivação anterior baseada em `#1E5B9D` — aquele azul chapado não constava do
brand book.

## Cores oficiais (Brand Book v4)

| Nome | Token | Hex | Uso |
|---|---|---|---|
| Deep Navy | `navy` | `#052B57` | Cor primária. Autoridade, ciência, confiança. Seções escuras. |
| Zenith Blue | `blue` | `#0A5E9C` | Suporte: fundos, gráficos, navegação, hover. |
| Arc Teal | `teal` | `#00AFCB` | Acento/CTA/highlights/progresso. Assinatura de AZLO Health. |
| Vital Cyan | `cyan` | `#35D3E6` | Microinterações, brilho sutil, estados ativos. Assinatura de AZLO Labs. |
| Ice White | `ice` | `#F2FAFC` | Fundo geral da página e cards. |
| Graphite | `graphite` | `#111827` | Texto principal em contexto editorial. |

## Regra 70 / 20 / 10

- **70%** neutros + azul profundo — base, leitura, autoridade.
- **20%** azul médio (Zenith) e tons de suporte — estrutura, gráficos.
- **10%** teal/ciano — acentos, CTAs, indicadores, progresso.

> O ciano é **sinal, não preenchimento**. Quando tudo brilha, nada orienta.

## Tokens derivados (não estão no brand book, mas necessários para a UI)

| Token | Hex | Motivo |
|---|---|---|
| `navy-deep` | `#04203F` | Rodapé e seção de contato — mais profundo que Deep Navy. |
| `teal-ink` | `#056072` | Texto de acento sobre fundo claro (Arc Teal puro não passa AA em texto). |
| `ice-deep` | `#E4F0F5` | Superfícies alternadas / hover sobre claro. |
| `slate` | `#46586B` | Texto secundário sobre fundo claro. |
| `muted` | `#7C8CA0` | Labels e metadados (só texto grande — ver contraste). |
| `line` | `#D8E6ED` | Bordas e separadores sobre fundo claro. |

## Acento-assinatura por divisão (Brand Book v4)

A diferenciação entre divisões é feita apenas pelo acento — nunca por cores novas.

| Divisão | Tier | Acento | Token de texto (AA) |
|---|---|---|---|
| AZLO Health | 1 | Arc Teal `#00AFCB` | `#056072` |
| AZLO Labs | 2 | Vital Cyan `#35D3E6` | `#0A6E85` |
| AZLO Education | 3 | Zenith Blue `#0A5E9C` | `#0A5E9C` |
| AZLO Science | 3 | Deep Navy `#052B57` | `#052B57` |

## Verificação de contraste (WCAG AA)

| Combinação | Contraste aprox. | AA normal (4.5:1) | AA large (3:1) |
|---|---|---|---|
| `graphite` `#111827` / `ice` `#F2FAFC` | ≈ 16:1 | ✓ | ✓ |
| `slate` `#46586B` / `ice` | ≈ 7.2:1 | ✓ | ✓ |
| `muted` `#7C8CA0` / `ice` | ≈ 3.4:1 | — (só large) | ✓ |
| `teal-ink` `#056072` / branco | ≈ 6.6:1 | ✓ | ✓ |
| `teal` `#00AFCB` / branco | ≈ 2.4:1 | ✕ (só decoração/large) | — |
| branco / `navy` `#052B57` | ≈ 13.8:1 | ✓ | ✓ |
| `cyan` `#35D3E6` / `navy` | ≈ 7.9:1 | ✓ | ✓ |

> `teal` e `cyan` puros são para **decoração, ícones e barras**, não para texto
> pequeno sobre fundo claro. Para texto de acento use `teal-ink`.
> `muted` só em texto grande (≥ 18px normal ou ≥ 14px bold) ou elementos não-informativos.

## Manter em sincronia

Ao ajustar a paleta, altere os dois lugares:

1. `src/app/globals.css` — variáveis CSS (`:root`)
2. `tailwind.config.ts` — `theme.extend.colors.azlo`

Os componentes consomem apenas os tokens, nunca hex diretos — exceto o
acento-assinatura por divisão, passado como prop (`accent` / `accentInk`) para
`DivisionCard`.
