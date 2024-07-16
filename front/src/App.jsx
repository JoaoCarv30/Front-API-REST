import { Form } from "./components/form/form.jsx"

import bg from "./assets/bg.png"

function App() {

  return (
    <section className="w-screen h-screen flex items-center justify-between overflow-hidden">
     <Form  />
     <div className="w-4/5 h-screen flex items-center justify-center bg-emerald-950">
      <img src={bg} alt="" className="escurecer" />
     </div>
    </section>
  )
}

export default App
