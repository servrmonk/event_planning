import wedding from "../assets/wedding.jpg";
import party from "../assets/party.jpg";
import gamenight from "../assets/gamenight.jpg";
import camping from "../assets/camping.jpg";
import birthday from "../assets/birthday.jpg";
import anniversary from "../assets/anniversary.jpg";

export default function Services() {
  const service = [
    { id: 1, url:  birthday, title: "Birthday Planning" },
    { id: 2, url:  anniversary, title: "Anniversary Planning" },
    { id: 3, url:  camping, title: "Camping Trip Planning" },
    { id: 4, url:  gamenight, title: "Game Night Planning" },
    { id: 5, url:  party, title: "Party Planning" },
    { id: 6, url:  wedding, title: "Wedding Planning" },
  ];

  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {service.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
