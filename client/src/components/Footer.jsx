export default function Footer() {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Party Prodigy</h1>
          <p>Event and Weddings</p>
        </div>
        <div className="tag">
          <label>
            News Letter
          </label>
          <div>
            <input style={{color:"white"}} type="text" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates</p>
        </div>
      </div>
    </footer>
  );
}
