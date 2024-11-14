import './App.css'
import BusinessCard from './BusinessCard.jsx'
import profiles from './../data/profiles.json';

//console.log(profiles);

function App() {
    return (
      <section>
        <header>
          <h1>Look at my business cards!</h1>
        </header>
        <div className="cards">
          {
            profiles.map((profile, idx) => {
              const { name, email, phone, title, profileImage, tagline } = profile;
              return(
                <BusinessCard 
                  key={idx}
                  name={name}
                  email={email}
                  phone={phone}
                  title={title}
                  profileImage={profileImage}
                  tagLine={tagline}
                />
              )
            })
          }
        </div>
      </section>
    )
}

export default App
