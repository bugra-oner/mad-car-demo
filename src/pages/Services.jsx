import "./Services.css";
import { FaCar, FaPumpSoap, FaBroom, FaWater } from "react-icons/fa";


export default function Services() {
  const services = [
    {
      icon: <FaCar />,
      title: "Dış Yıkama",
      desc: "Arabanızın dışını su ve özel şampuanlarla temizleriz.",
    },
    {
      icon: <FaPumpSoap />,
      title: "İç Temizlik",
      desc: "Kolay temizlenebilir hijyenik iç mekan detaylı temizliği.",
    },
    {
      icon: <FaBroom />,
      title: "Halı Temizliği",
      desc: "Araç içi paspas ve döşeme temizliği.",
    },
    {
      icon: <FaWater />,
      title: "Cilalama",
      desc: "Özel cilalama ile aracınızın boyasını koruyun.",
    },
  ];

  return (
    <section className="services">
      <h2>Hizmetlerimiz</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
