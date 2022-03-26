import { Container, Button } from './elements'
import { MdOutlineDrafts } from 'react-icons/md'

function App() {
  return (
    <Container>
      <Button active>
        <MdOutlineDrafts />
        do some action
      </Button>
      <Button danger>do some action</Button>

      <Button success>do some action</Button>

      <Button>do some action</Button>
    </Container>
  )
}

export default App
