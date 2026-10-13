import "./style.css";

function App() {
  
  return (
    <section>
      <h1>🎬 MY MOVIE PLAYLIST </h1>
      <small>Favorite Movies of All Time</small>

      <div className="movie-list">

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/Mean-girls.webp')" }}
        >
          <div className="movie-info">
            <h2>Mean Girls</h2>
            <p>Year: 2004</p>
            <p>Genre: Comedy</p>
          </div>
        </div>

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/barbie.webp')" }}
        >
          <div className="movie-info">
            <h2>Barbie</h2>
            <p>Year: 2023</p>
            <p>Genre: Comedy/Fantasy</p>
          </div>
        </div>

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/princess diaries.webp')" }}
        >
          <div className="movie-info">
            <h2>The Princess Diaries</h2>
            <p>Year: 2001</p>
            <p>Genre: Comedy/Romance</p>
          </div>
        </div>

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/clueless.webp')" }}
        >
          <div className="movie-info">
            <h2>Clueless</h2>
            <p>Year: 1995</p>
            <p>Genre: Comedy</p>
          </div>
        </div>

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/legally blonde.webp')" }}
        >
          <div className="movie-info">
            <h2>Legally Blonde</h2>
            <p>Year: 2001</p>
            <p>Genre: Comedy</p>
          </div>
        </div>

        <div
          className="movie-card"
          style={{ backgroundImage: "url('src/assets/10things.webp')" }}
       >
          <div className="movie-info">
            <h2>10 Things I Hate About You</h2>
            <p>Year: 1999</p>
            <p>Genre: Comedy/Romance</p>
         </div>     
       </div>
      
      </div>
    </section>
  );
}

export default App;