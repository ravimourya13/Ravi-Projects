const mongoose = require('mongoose');
const Toy = require('../models/Toy');
require('dotenv').config();

const toys = [
  {
    name: "LEGO Classic Creative Bricks",
    description: "A creative building set with colorful bricks for endless possibilities",
    price: 2499,
    category: "Educational",
    ageRange: "4-99 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 50
  },
  {
    name: "Barbie Dreamhouse",
    description: "A luxurious dollhouse for Barbie with multiple rooms and accessories",
    price: 12999,
    category: "Dolls",
    ageRange: "3-10 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Hot Wheels Track Set",
    description: "An exciting race track set with multiple loops and jumps",
    price: 1999,
    category: "Vehicles",
    ageRange: "4-12 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "Remote Control Drone",
    description: "A high-flying drone with camera and stable controls",
    price: 4999,
    category: "Electronics",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Art & Craft Kit",
    description: "Complete art set with paints, brushes, and craft supplies",
    price: 899,
    category: "Creative",
    ageRange: "5-12 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 40
  },
  {
    name: "Nerf Blaster Set",
    description: "Action-packed blaster set with multiple darts and targets",
    price: 3499,
    category: "Action",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Science Experiment Kit",
    description: "Educational kit with exciting science experiments",
    price: 1799,
    category: "Educational",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 35
  },
  {
    name: "Wooden Train Set",
    description: "Classic wooden train set with tracks and accessories",
    price: 2999,
    category: "Educational",
    ageRange: "3-8 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Baby Doll Set",
    description: "Realistic baby doll with feeding and changing accessories",
    price: 1499,
    category: "Dolls",
    ageRange: "3-7 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "RC Car",
    description: "Fast remote control car with rechargeable battery",
    price: 3999,
    category: "Vehicles",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Musical Keyboard",
    description: "Electronic keyboard with multiple sounds and learning modes",
    price: 5999,
    category: "Educational",
    ageRange: "5-12 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Puzzle Set",
    description: "Collection of educational puzzles for different age groups",
    price: 799,
    category: "Educational",
    ageRange: "4-10 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 45
  },
  {
    name: "Play Kitchen Set",
    description: "Complete kitchen set with appliances and utensils",
    price: 8999,
    category: "Educational",
    ageRange: "3-8 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Building Blocks Set",
    description: "Colorful building blocks for creative construction",
    price: 1999,
    category: "Educational",
    ageRange: "4-10 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 40
  },
  {
    name: "Dress Up Set",
    description: "Costume set with various character outfits",
    price: 1299,
    category: "Educational",
    ageRange: "4-8 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "Robot Kit",
    description: "Build and program your own robot",
    price: 4499,
    category: "Electronics",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Art Supplies Set",
    description: "Complete art kit with premium supplies",
    price: 1499,
    category: "Creative",
    ageRange: "5-12 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 35
  },
  {
    name: "Sports Set",
    description: "Collection of sports equipment for outdoor play",
    price: 2499,
    category: "Outdoor",
    ageRange: "6-14 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Board Game Collection",
    description: "Set of classic board games for family fun",
    price: 1999,
    category: "Educational",
    ageRange: "6-99 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "Dinosaur Set",
    description: "Collection of realistic dinosaur figures",
    price: 1799,
    category: "Educational",
    ageRange: "4-10 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Magic Set",
    description: "Complete magic kit with tricks and instructions",
    price: 1299,
    category: "Educational",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Remote Control Helicopter",
    description: "Stable flying helicopter with LED lights",
    price: 3499,
    category: "Electronics",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Doctor Play Set",
    description: "Complete medical kit for pretend play",
    price: 1999,
    category: "Educational",
    ageRange: "4-8 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "LEGO Star Wars Set",
    description: "Build iconic Star Wars scenes with LEGO",
    price: 4999,
    category: "Educational",
    ageRange: "7-14 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Dollhouse",
    description: "Beautiful dollhouse with furniture and accessories",
    price: 7999,
    category: "Dolls",
    ageRange: "4-10 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Science Lab Kit",
    description: "Advanced science experiments for young scientists",
    price: 2999,
    category: "Educational",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Remote Control Boat",
    description: "Fast RC boat for pool or pond play",
    price: 3999,
    category: "Vehicles",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Art Easel Set",
    description: "Adjustable art easel with supplies",
    price: 2499,
    category: "Creative",
    ageRange: "4-12 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Trampoline",
    description: "Safe outdoor trampoline with enclosure",
    price: 12999,
    category: "Outdoor",
    ageRange: "6-14 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 10
  },
  {
    name: "Card Game Set",
    description: "Collection of classic card games",
    price: 899,
    category: "Educational",
    ageRange: "7-99 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 40
  },
  {
    name: "Space Station Set",
    description: "Build your own space station with this LEGO set",
    price: 3999,
    category: "Educational",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Princess Dress Set",
    description: "Beautiful princess costumes with accessories",
    price: 1799,
    category: "Educational",
    ageRange: "4-8 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "Electronic Keyboard",
    description: "Professional electronic keyboard with learning features",
    price: 6999,
    category: "Educational",
    ageRange: "6-14 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Remote Control Tank",
    description: "Realistic RC tank with sound effects",
    price: 2999,
    category: "Vehicles",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "LEGO City Set",
    description: "Build your own city with this LEGO set",
    price: 3499,
    category: "Educational",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Doctor Kit",
    description: "Complete medical kit for young doctors",
    price: 1499,
    category: "Educational",
    ageRange: "4-8 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "Remote Control Plane",
    description: "Advanced RC plane with stable controls",
    price: 4499,
    category: "Vehicles",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Art Studio Set",
    description: "Complete art studio with premium supplies",
    price: 2999,
    category: "Creative",
    ageRange: "5-12 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Basketball Set",
    description: "Adjustable basketball hoop with ball",
    price: 1999,
    category: "Outdoor",
    ageRange: "6-14 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Chess Set",
    description: "Beautiful wooden chess set with board",
    price: 1299,
    category: "Educational",
    ageRange: "8-99 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "LEGO Friends Set",
    description: "Build and play with LEGO Friends characters",
    price: 3999,
    category: "Educational",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Fashion Design Set",
    description: "Create your own fashion designs with this kit",
    price: 2499,
    category: "Creative",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Remote Control Robot",
    description: "Programmable RC robot with multiple functions",
    price: 4999,
    category: "Electronics",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "LEGO Technic Set",
    description: "Advanced building set with moving parts",
    price: 5999,
    category: "Educational",
    ageRange: "9-14 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "Doll Stroller",
    description: "Realistic doll stroller with accessories",
    price: 1999,
    category: "Dolls",
    ageRange: "3-8 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Remote Control Car",
    description: "Fast RC car with rechargeable battery",
    price: 2999,
    category: "Vehicles",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 30
  },
  {
    name: "LEGO Architecture Set",
    description: "Build famous landmarks with this LEGO set",
    price: 6999,
    category: "Educational",
    ageRange: "12-99 years",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 15
  },
  {
    name: "Remote Control Spider",
    description: "Creepy crawly RC spider with realistic movements",
    price: 3499,
    category: "Electronics",
    ageRange: "8-14 years",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  },
  {
    name: "LEGO Ninjago Set",
    description: "Build and battle with LEGO Ninjago characters",
    price: 4499,
    category: "Educational",
    ageRange: "7-14 years",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 25
  },
  {
    name: "Remote Control Monster Truck",
    description: "Powerful RC monster truck with all-terrain capabilities",
    price: 3999,
    category: "Vehicles",
    ageRange: "6-12 years",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: 20
  }
];

const seedToys = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/toy_store');
    console.log('Connected to MongoDB');

    // Clear existing toys
    await Toy.deleteMany({});
    console.log('Cleared existing toys');

    // Add new toys
    await Toy.insertMany(toys);
    console.log('Added new toys');

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedToys(); 