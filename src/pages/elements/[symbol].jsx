import { useRouter } from 'next/router'
import Error from 'next/error'
import Main from '@/components/Main'
import Container from '@/components/Container'
import elements from '@/data/elements'

function ElementPage() {
  const router = useRouter()
  const { symbol } = router.query
  const data = elements.find(x => x.symbol === symbol)

  if (typeof data === 'undefined') {
    return <Error statusCode={404} />
  }

  return (
    <Main>
      <Container>{JSON.stringify(data)}</Container>
    </Main>
  )
}

export default ElementPage
