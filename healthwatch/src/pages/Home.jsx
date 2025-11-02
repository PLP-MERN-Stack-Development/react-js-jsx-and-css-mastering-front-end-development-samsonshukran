import { useEffect, useState } from "react";
import HealthCard from "../components/HealthCard";
import { fetchHealthTips } from "../api/healthApi";

function Home() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetchHealthTips().then(setTips);
  }, []);

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Stay Healthy, Stay Informed 🌿
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <HealthCard key={index} title={tip.title} description={tip.description} />
        ))}
      </div>
    </section>
  );
}

export default Home;
