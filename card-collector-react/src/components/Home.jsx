const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to the Card Collector App!</h1>
        <h2>
          Click on Collection to get started, or click on sets to see which set
          we currently offer!
        </h2>
      </div>
      <div>
        <img
          className="center"
          style={{
            display: 'block',
            maxWidth: '100%'
          }}
          src="https://assets.dicebreaker.com/yu-gi-oh-dark-magician-anime-yugi.png/BROK/thumbnail/1600x800/format/jpg/quality/80/yu-gi-oh-dark-magician-anime-yugi.png"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Home
