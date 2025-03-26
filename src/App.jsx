import ProfileCard from "./profileCard"
function App() {


  return (
    <>
     
     <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
       </div>
     </section>

     <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
            title="alexa"
            handle="alexa24"
            image="data:image/png;base64,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"
             />
          </div>
          <div className="column is-4">
            <ProfileCard />
          </div>
          <div className="column is-4">
            <ProfileCard />
          </div>
        </div>
      </section>
     </div>
    </>
  )
}

export default App
