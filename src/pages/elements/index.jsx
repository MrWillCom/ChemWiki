import PeriodicTable from '@/components/PeriodicTable'
import Container from '@/components/Container'
import Main from '@/components/Main'

function ElementsPage() {
  return (
    <Main>
      <Container size="lg" marginY={20} paddingX={20}>
        <PeriodicTable />
      </Container>
    </Main>
  )
}

export default ElementsPage
