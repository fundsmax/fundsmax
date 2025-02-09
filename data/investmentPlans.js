const investmentPlans = [
    {
      id: 1,
      name: 'Invest in Sports & Fitness',
      investment: 2500,
      returnTime: 24, // in hours
      returnAmount: 2541.25,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 2,
      name: 'Invest in Pet Products',
      investment: 5000,
      returnTime: 24,
      returnAmount: 5082.5,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 3,
      name: 'Invest in Office Equipment',
      investment: 10000,
      returnTime: 24,
      returnAmount: 10170,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 4,
      name: 'Invest in Auto & Parts',
      investment: 15000,
      returnTime: 24,
      returnAmount: 15262.5,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 5,
      name: 'Invest in Apparel & Accessories',
      investment: 20000,
      returnTime: 24,
      returnAmount: 20360,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 6,
      name: 'Invest in C2C',
      investment: 25000,
      returnTime: 24,
      returnAmount: 25462.5,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 7,
      name: 'Invest in Household Essentials',
      investment: 30000,
      returnTime: 24,
      returnAmount: 30570,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 8,
      name: 'Invest in DIY & Hardware',
      investment: 35000,
      returnTime: 24,
      returnAmount: 35682.5,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 9,
      name: 'Invest in Electronics',
      investment: 40000,
      returnTime: 24,
      returnAmount: 40800,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 10,
      name: 'Invest in Beverages',
      investment: 50000,
      returnTime: 24,
      returnAmount: 51025,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 11,
      name: 'Invest in Furniture',
      investment: 60000,
      returnTime: 24,
      returnAmount: 61260,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 12,
      name: 'Invest in Media',
      investment: 70000,
      returnTime: 24,
      returnAmount: 71505,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 13,
      name: 'Invest in B2B',
      investment: 80000,
      returnTime: 24,
      returnAmount: 81760,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 14,
      name: 'Invest in B2C',
      investment: 90000,
      returnTime: 24,
      returnAmount: 92025,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 15,
      name: 'Invest in B2G',
      investment: 100000,
      returnTime: 24,
      returnAmount: 102300,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 16,
      name: 'Invest in Healthcare',
      investment: 110000,
      returnTime: 24,
      returnAmount: 112585,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 17,
      name: 'Invest in Education',
      investment: 120000,
      returnTime: 24,
      returnAmount: 122880,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 18,
      name: 'Invest in Renewable Energy',
      investment: 130000,
      returnTime: 24,
      returnAmount: 133185,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 19,
      name: 'Invest in Real Estate',
      investment: 140000,
      returnTime: 24,
      returnAmount: 143500,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 20,
      name: 'Invest in Transportation',
      investment: 150000,
      returnTime: 24,
      returnAmount: 153825,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 21,
      name: 'Invest in Technology',
      investment: 160000,
      returnTime: 24,
      returnAmount: 164160,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 22,
      name: 'Invest in Pharmaceuticals',
      investment: 170000,
      returnTime: 24,
      returnAmount: 174505,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 23,
      name: 'Invest in Tourism',
      investment: 180000,
      returnTime: 24,
      returnAmount: 184860,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 24,
      name: 'Invest in Agriculture',
      investment: 190000,
      returnTime: 24,
      returnAmount: 195225,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 25,
      name: 'Invest in Food & Beverage',
      investment: 200000,
      returnTime: 24,
      returnAmount: 205600,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 26,
      name: 'Invest in Fashion',
      investment: 210000,
      returnTime: 24,
      returnAmount: 215985,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 27,
      name: 'Invest in Mining',
      investment: 220000,
      returnTime: 24,
      returnAmount: 226380,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 28,
      name: 'Invest in Telecommunications',
      investment: 230000,
      returnTime: 24,
      returnAmount: 236785,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 29,
      name: 'Invest in Manufacturing',
      investment: 240000,
      returnTime: 24,
      returnAmount: 247200,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 30,
      name: 'Invest in Entertainment',
      investment: 250000,
      returnTime: 24,
      returnAmount: 257625,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 31,
      name: 'Invest in Automotive',
      investment: 260000,
      returnTime: 24,
      returnAmount: 268060,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 32,
      name: 'Invest in Aerospace',
      investment: 270000,
      returnTime: 24,
      returnAmount: 278505,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 33,
      name: 'Invest in Defense',
      investment: 280000,
      returnTime: 24,
      returnAmount: 288960,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 34,
      name: 'Invest in Biotechnology',
      investment: 290000,
      returnTime: 24,
      returnAmount: 299425,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 35,
      name: 'Invest in Retail',
      investment: 300000,
      returnTime: 24,
      returnAmount: 309900,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 36,
      name: 'Invest in Logistics',
      investment: 310000,
      returnTime: 24,
      returnAmount: 320385,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 37,
      name: 'Invest in Utilities',
      investment: 320000,
      returnTime: 24,
      returnAmount: 330880,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 38,
      name: 'Invest in Chemicals',
      investment: 330000,
      returnTime: 24,
      returnAmount: 341385,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 39,
      name: 'Invest in Construction',
      investment: 340000,
      returnTime: 24,
      returnAmount: 351900,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    },
    {
      id: 40,
      name: 'Invest in Financial Services',
      investment: 350000,
      returnTime: 24,
      returnAmount: 362425,
      get profit() {
        return (this.returnAmount - this.investment).toFixed(2);
      },
    }
  ];
  
  export default investmentPlans;