export const fetchHealthTips = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { title: "Drink Water", description: "Stay hydrated with 8 glasses daily." },
    { title: "Exercise Regularly", description: "Aim for 30 minutes of physical activity daily." },
    { title: "Eat Fruits & Veggies", description: "Include fresh produce in your meals." },
  ];
};
