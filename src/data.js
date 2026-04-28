const partsList = [
  "Plaquettes de Frein AV/AR",
  "Disques de Frein AV",
  "Kit Distribution + Pompe",
  "Courroie d'accessoire",
  "Amortisseur AV/AR",
  "Triangle de suspension",
  "Biellette stabilisatrice",
  "Rotule de direction",
  "Volant Moteur (Bimasse)",
  "Kit d'embrayage",
  "Turbo (Adaptable)",
  "Débitmètre d'air",
  "Vanne EGR",
  "Radiateur d'eau",
  "Pompe à eau",
  "Alternateur",
  "Démarreur",
  "Batterie Start/Stop (AGM)",
  "Filtre à Huile",     // Additional to make 20
  "Filtre à Air"        // Additional to make 20
];

const brandsAndModels = {
  "Audi": ["A1", "A3", "A4", "A6", "Q3", "Q5"],
  "BMW": ["Série 1", "Série 3", "Série 5", "X1", "X3", "X5"],
  "Ford": ["Fiesta", "Focus", "Fusion", "Kuga", "Ranger", "Transit"],
  "Renault": ["Clio", "Megane", "Talisman", "Captur", "Kadjar", "Master"],
  "Volkswagen": ["Golf 7/Touran", "Golf 8/T-Roc", "Tiguan", "Touareg"],
  "Mercedes-Benz": ["Classe A", "Classe C", "Classe E", "Classe S", "GLA", "GLE"]
};

// Generate mock data mimicking the requested structure
const generateMockData = () => {
  const data = {};
  
  for (const [brand, models] of Object.entries(brandsAndModels)) {
    data[brand] = {};
    for (const model of models) {
      data[brand][model] = partsList.map((partName, idx) => ({
        id: `${brand.toLowerCase()}-${model.toLowerCase()}-${idx}`,
        name: partName,
        // Generate a random-looking but deterministic price based on brand and part
        price: 150 + (partName.length * 10) + (brandsAndModels[brand].indexOf(model) * 50) + (Math.floor(Math.random() * 10) * 10),
        category: "Mécanique"
      }));
    }
  }
  
  return data;
};

export const database = generateMockData();
export const brands = Object.keys(brandsAndModels);
