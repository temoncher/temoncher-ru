import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  staticData: {
    prerender: true,
  },
  component: App,
})

function App() {
  return (
    <main className="grid place-content-center h-screen">
      <h1 className="text-6xl">temoncher</h1>
    </main>
  )
}
