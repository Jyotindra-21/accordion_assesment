import React from 'react'
import Accordion from './Accordion';

function App() {
  const accordionItems = [
    { title: 'Item 1', body: 'Content for item 1' },
    { title: 'Item 2', body: 'Content for item 2' },
    { title: 'Item 3', body: 'Content for item 3' },
  ];
  return (
    <div>
      <h1 align="center">Accordion</h1>
      <Accordion items={accordionItems} />
    </div>
  )
}

export default App