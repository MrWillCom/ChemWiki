import Link from 'next/link'

const definitions = [
  {
    title: '预备知识',
    description: (
      <>
        <Link href="/definitions/chemistry">化学</Link>的一些基础概念。
      </>
    ),
    children: [
      { title: '化学', href: '/chemistry' },
      { title: '变化', href: '/changes' },
      { title: '性质', href: '/properties' },
    ],
  },
  {
    title: '元素',
    // description: <></>,
    children: [
      { title: '元素', href: '/elements' },
      { title: '同素异形体', href: '/allotrope' },
      { title: '无定形碳', href: '/amorphous-carbon' },
    ],
  },
  {
    title: '燃烧',
    // description: <></>,
    children: [
      { title: '燃烧', href: '/combustion' },
      { title: '可燃性', href: '/flammability' },
      { title: '可燃物', href: '/combustibles' },
    ],
  },
  {
    title: '分散系',
    description: '将一种或多种物质分散到另一种物质中形成的体系。',
    children: [
      { title: '分散系', href: '/solute' },
      { title: '溶液', href: '/solution' },
      { title: '胶体', href: '/colloid' },
      { title: '半透膜', href: '/semipermeable-membrane' },
      { title: '浊液', href: '/turbid-liquid' },
    ],
  },
  {
    title: '溶液',
    // description: <></>,
    children: [
      { title: '溶液', href: '/solution' },
      { title: '溶质', href: '/solute' },
      { title: '溶剂', href: '/solvent' },
      { title: '酸碱性', href: '/acidity' },
      { title: 'pH 值', href: '/ph' },
      { title: '电解质', href: '/electrolyte' },
    ],
  },
]

export { definitions }
