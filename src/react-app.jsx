const { useState } = React
function App() {
  const [count, setCount] = useState(0)
  return (
    <section className="section">
      <div className="container">
        <h2>React Area</h2>
        <p>This section is rendered with React.</p>
        <button className="button primary" onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      </div>
    </section>
  )
}
const rootEl = document.getElementById('root')
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />)
}
