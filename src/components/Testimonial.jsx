import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Harsh Sokiya",
    text: "Amazing ambiance, with creative food choices. The food is one of the best in Sambhajinagar if you are looking for European cuisine with an Indian touch. Would recommend avo toast. Would also highly recommend the Authentic Pizzas, didn’t see any other place in Sambhajinagar .",
  },
  {
    name: "BHARGAV DHAMELIYA",
    text: "The food is not just regular food, it touches your soul. Their smoothies, sandwich and pizza is just out of this word.",
  },
  {
    name: "Manya Jaiswal",
    text: "Definitely try their smoothie bowls, very refreshing and filling! I tried their chocolate peanut outmeal bowl and it was a 100/10!",
  },
  {
    name: "Advait Deshpande",
    text: " Great quality ingredients, superb taste and generous quantity.Can not recommend it enough.We had Jackfruit pizza, Paneer teriyaki rice bowl, Belgian chocolate almond butter smoothie and a Paneer Wrap.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-orange-950 to-orange-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-100">
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="bg-orange-500/30 p-6 rounded-xl shadow-lg transition duration-700 ease-in-out">
            <p className="text-lg text-orange-200 italic mb-4">
              "{testimonials[index].text}"
            </p>
            <h4 className="text-orange-100 font-semibold">
              — {testimonials[index].name}
            </h4>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index
                    ? "bg-orange-500 scale-125"
                    : "bg-orange-700 hover:bg-orange-500"
                } transition-all`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;