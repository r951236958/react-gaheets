import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Button from '@material-ui/core/Button'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <Layout title="App">
      <div>
        <p>You clicked {count} times</p>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </Button>
      </div>
    </Layout>
  )
}

export default App
