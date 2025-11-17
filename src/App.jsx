import Background from './components/Background'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen relative text-stone-900 selection:bg-amber-200/60 selection:text-stone-900">
      <Background />
      <Header />
      <main>
        <Card />
      </main>
    </div>
  )
}

export default App
