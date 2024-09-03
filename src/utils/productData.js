const data = [
  {
    id: 1,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/e72a6dd7c63d788825261adb66a0af85.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/814a79ae2bc6cc96bec3ad6cc9c39479.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/db912b473c60a4da29719ff23653f05c.jpg",

      // ... other images
    ],
    heading: "Dreamies Flavoured Cat Treats with Salmon",
    price: "£4.57",
    description:
      "Dreamies Salmon Flavoured Cat Treats are the crunchy treats with a soft salmon centre that are adored by cats!",
    keyBenefits: ["NA"],
    composition:
      "Meat and Animal Derivatives, Cereals, Oils and Fats, Derivatives of Vegetable Origin, Vegetable Protein Extracts, Fish and Fish Derivatives (including 4% Salmon), Minerals",
    nutritionalInfo:
      "Protein 32%, Fat Content: 25%, Inorganic Matter: 9%, Crude Fibres: 1.7%, Energy: 438kcal/100g",
  },

  {
    id: 2,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/b303e07ade26bb652f5b955ce098bd7a.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/6eaceb98100a89103b0cbd6b0078bee5.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c94becec103766f671337a4d71f6ba64.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/836f950250c3e4c1f8ee12623b7c05ca.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/0dc55f828d04aef1960d7f04ecc494d4.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c4b456ff1f9ca476bc6463b021cbba60.jpg",
      // "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/b303e07ade26bb652f5b955ce098bd7a.jpg",

      // ... other images
    ],
    heading: "Royal Canin Sensory Smell Adult Wet Cat Food in Jelly",
    price: "£10.23",
    description:
      "Royal Canin Sensory Smell Adult Wet Cat Food in Jelly has been designed to stimulate your cat’s senses and enhance their feeding experience with an aromatic fish smell, characterised by fatty, fruity, and nutty odours.",
    keyBenefits: [
      "Stimulates and appeals to a cat’s unique senses",
      "Provides sensorial variation to enhance feeding timet",
      "Formulated to match the optimal macro-nutrient profile",
      "Helps support a healthy urinary system",
    ],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 3,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/06404aa6b6d900a14a0cc3e5d65529ac.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c2c467a4476d5baa2c20e3d7708106e9.jpg",

      // ... other images
    ],
    heading: "ACANA Puppy & Junior Dry Dog Food 11.4kg",
    price: "£12.23",
    description:
      "ACANA Puppy & Junior Dog Food is a complete and balanced diet based on the ancestral wild diet of their wolf ancestors, for growing puppies to support healthy growth and development.",
    keyBenefits: [
      "Supports healthy growth & development",
      "Rich in Animal Ingredients",
      "WholePrey ratio of meat, Organs, Cartilage & Bone",
      "Delicious Liver flavour",
      "No Grain, Potato, Tapioca or GMO",
    ],
    composition:
      "Fresh Chicken (18%), Chicken Meal (18%), Whole Red Lentils, Whole Green Peas, Fresh Chicken Giblets (Liver, Heart) (7%), Chicken Fat (7%), Turkey Meal (4%), Eggs (4%), Raw Flounder (4%), Herring Meal (4%), Fish Oil (3%), Whole Green Lentils, Whole Chickpeas, Whole Yellow Peas, Pea Fibre, Pea Starch, Raw Turkey Livers (1%), Salt, Dried Kelp, Fresh Whole Pumpkin, Fresh Whole Butternut Squash, Fresh Whole Carrots, Fresh Whole Apples, Fresh Whole Pears, Fresh Whole Zucchini, Dried Chicory Root, Fresh Kale, Fresh Spinach, Fresh Turnip Greens, Fresh Beet Greens, Fresh Whole Cranberries, Fresh Whole Blueberries, Fresh Whole Saskatoon Berries, Turmeric, Milk Thistle, Burdock Root, Lavender, Marshmallow Root, Rosehipss",
    nutritionalInfo: "NA",
  },

  {
    id: 4,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/ddf139c889fcfc3647745770146f4da9.png",
      // ... other images
    ],
    heading: "B Seen 360 Light Tag for Dogs - Lime Green",
    price: " £10.75",
    description:
      "B Seen 360 Light Tag for Dogs - Lime Green lights up from all directions. It remains visible from every angle regardless of the direction the lamp is facing. B Seen 360 Light Tag for Dogs - Lime Green lights up from all directions. It remains visible from every angle regardless of the direction the lamp is facing. The B Seen 360 Light Tag for Dogs - Lime Green is both waterproof and shock proof making it just as effective in the rain.  This stylish product is simple to attach to the collar and can be removed just as easily. ",
    keyBenefits: ["NA"],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 5,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c8c756327ec3e4f53bcdde460c6c20b3.jpg",
      // ... other images
    ],
    heading: "Beaphar Care+ for Small Parakeets 250g",
    price: " £18.96",
    description: `Beaphar Care+ for Small Parakeets is a complete, premium bird food, specifically tailored to meet the nutritional needs of both smaller Parakeets.This special food comprises of only organic ingredients, offering an innovation in the feeding these particular breeds of bird.

      Each bird's nutritional requirements are different and depend of their size, activity, housing, temperate and weather conditions.
      
      Beaphar Care+ for Small Parakeets should be introduced into the diet slowly, firstly mixing with the bird's current food.
      
      The recommended daily feed for small Parakeets:
      
      Approx. 8g per day = 1 scoops`,
    keyBenefits: ["NA"],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 6,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/94b7c025205bd3b4ae516361c5ba497a.jpg",
      // ... other images
    ],
    heading: "Drinkwell Water Fountain for Cats Small Dogs",
    price: "£25.14",
    description: `Drinkwell Water Fountain for Cats & Small Dogs, ideal for single smaller dogs & cats upto 4Kg (10 lbs) in weight. Drinkwell is the only (patented protected) water fountain to have free falling water.

    Improves your pet's health by offering filtered running water. The filter removes bad tastes and odours, the falling motion of the water increases the amount of oxygen retained in the water increasing quality and freshness.
    
    Many cats do not drink as much water as they should, especially if they are on dry food only. Providing moving filtered water encourages them to drink more as the water is always fresh.
    
    Easy to maintain, the circulation cools the water naturally, wash the fountain weekly and change the filter every one - two weeks.`,
    keyBenefits: ["NA"],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 7,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/d9622e80a516586ccb84ccb70a63c556.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/d1f02c2f7f6c43d36be5aaf1c64bbba3.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/302ca19d1980999d2156267a56b538a6.jpg",
      // ... other images
    ],
    heading: "Hurtta Casual Nylon Dog Collar (Ash)",
    price: "£15.99",
    description: `The Hurtta Casual Nylon Dog Collar (Ash) is a comfortable and lightweight collar ideal for everyday walks and activities for all dogs.

    Made using a durable Nylon material and padded with neoprene to give an ergonomic design that your dog will find comfortable to wear, the collar can also be adjusted easily for the perfect fit, and has an easy-on, easy-off buckle for ease of use.
    
    The Hurtta Casual Collar is also water repellent and features 3M reflective stitching along its entire length to make it suitable for use in any weather, at any time of day.`,
    keyBenefits: [
      "Comfortable fit",
      "Durable Nylon strap",
      "Easy-on, easy-off",
      "Weatherproof shell with neoprene padding",
      "3M reflectors on the entire length of the webbing",
    ],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 8,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/f1fe94f8d3bd344e5d5d15b74ad13888.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/a683f24cc9f8c508fb8785531b52facb.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/302ca19d1980999d2156267a56b538a6.jpg",
      // ... other images
    ],
    heading: "Hurtta Casual Nylon Dog Collar (Cinnamon)",
    price: "£18.99",
    description: `The Hurtta Casual Nylon Dog Collar (Cinnamon) is a comfortable, padded collar ideal for everyday walks and activities for all dogs.

    Made from a lightweight Nylon material with neoprene padding to give an ergonomic design that is comfortable for your dog to wear, the collar can also be adjusted easily for the perfect fit, and has an easy-on, easy-off buckle for ease of use.
    
    The Hurtta Casual Collar is also water repellent and features 3M reflective stitching along its entire length to make it suitable for use in any weather, at any time of day.`,
    keyBenefits: [
      "Comfortable fit",
      "Durable Nylon strap",
      "Easy-on, easy-off",
      "Weatherproof shell with neoprene padding",
      "3M reflectors on the entire length of the webbing",
    ],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 9,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/86e24a6f7dd4a5824548f58723b61449.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/eed2556bb7bc037246030d743eef3114.jpg",
      // ... other images
    ],
    heading:
      "James Wellbeloved Adult Dog Grain Free Dry Food (Lamb & Vegetables) 10kg",
    price: "£32.99",
    description: `James Wellbeloved Adult Dog Grain Free (Lamb and Vegetables) has been formulated to exclude many of the ingredients known to cause food allergies.`,
    keyBenefits: ["NA"],
    composition:
      "Lamb Meal (25.5%), Pea Starch (23.7%), Potato Flakes (22.7%), Tomato Pomace (5%), Lamb Fat (4.2%), Whole Linseed, Pea Protein, Lamb Gravy (3%), Peas (2.5%), Sugar Beet Pulp, Alfalfa Meal, Carrots (0.5%), Seaweed, Sunflower Oil, Fish Oil, Potassium Chloride, Sodium Chloride, Parsley (0.125%), Nettles (0.125%), Chicory Extract (0.1%), Calcium Carbonate, Glucosamine (0.045%), Yucca Extract (0.02%), Chondroitin (0.005%), Green Tea Extract (0.004%), Pomegranate Extract (0.001%), Rosemary Extract (0.001%)",
    nutritionalInfo: "NA",
  },

  {
    id: 10,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/431fb71791aed4fcc08acf99e39494be.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/4db83240e4af04a0c5d2a25176d756d3.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/eaaeb29fc24fa26cdb32ef7cd0e346f7.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/ffd7532204cb522c94cf7e2f3c320a0f.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/bfb41cc158a622bc12822c6508667cd2.jpg",

      // ... other images
    ],
    heading: "James Wellbeloved High Protein Adult Cat Food (Chicken & Turkey)",
    price: "£20.99",
    description: `James Wellbeloved High Protein Adult Cat Food (Chicken & Turkey) offers complete and balanced hypoallergenic nutrition for active cats with grain sensitivities.`,
    keyBenefits: [
      "High content of easily digestible protein",
      "D70% from animal sources",
      "Hypoallergenic for cats with grain sensitivities",
      "mega fatty acids to promote a healthy skin and coat",
      "With vitamin E and minerals to support the immune system",
    ],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 11,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/bdf732054d769c430e6572715f47cc69.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/90c7c63175eed94ec315345b8f7b1012.jpg",

      // ... other images
    ],
    heading: "Misfits Twistos Dog Treats (6 Pack)",
    price: "£10.99",
    description: `Misfits Twistos Dog Treats are flavoured tasty twists that your dog will love to play with.`,
    keyBenefits: ["NA"],
    composition: "NA",
    nutritionalInfo: "NA",
  },

  {
    id: 12,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/3ff42408fcfe8f79fab5b638e64d06dd.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/88379bbe86e3b41066b085cfc51efbf0.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/4246103ed3e34f8d276b6fe92fee3650.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/b8e96b529ee27c1b4d78421385f99456.jpg",

      // ... other images
    ],
    heading: "Orijen Original Dry Dog Food",
    price: "£30.99",
    description: `Orijen Original Dog Food is a complete and balanced diet rich and varied in whole animal ingredients to mimic the diet of your dog’s grey wolf ancestor.`,
    keyBenefits: [
      "Biologically Appropriate",
      "WholePrey Recipe: Meat, Organs, Cartilage & Bone",
      "Freeze-Dried Liver for flavour",
      "No Grain, Potato, Tapioca or Plant Protein Concentrates",
    ],
    composition:
      "Fresh Chicken Meat (13%), Fresh Turkey Meat (7%), Fresh Cage-Free Eggs (7%), Fresh Chicken Liver (6%), Fresh Whole Herring (6%), Fresh Whole Flounder (5%), Fresh Turkey Liver (5%), Fresh Chicken Necks (4%), Fresh Chicken Heart (4%), Fresh Turkey Heart (4%), Chicken (Dehydrated, 4%), Turkey (Dehydrated, 4%), Whole Mackerel (Dehydrated, 4%), Whole Sardine (Dehydrated, 4%), Whole Herring (Dehydrated, 4%), Whole Red Lentils, Whole Green Lentils, Whole Green Peas, Lentil Fibre, Whole Chickpeas, Whole Yellow Peas, Whole Pinto Beans, Whole Navy Beans, Herring Oil (1%), Chicken Fat (1%), Chicken Cartilage (1%), Chicken Liver (Freeze-Dried), Turkey Liver (Freeze-Dried), Fresh Whole Pumpkin, Fresh Whole Butternut Squash, Fresh Whole Zucchini, Fresh Whole Parsnips, Fresh Carrots, Fresh Whole Red Delicious Apples, Fresh Whole Bartlett Pears, Fresh Kale, Fresh Spinach, Fresh Beet Greens, Fresh Turnip Greens, Brown Kelp, Whole Cranberries, Whole Blueberries, Whole Saskatoon Berries, Chicory Root, Turmeric Root, Milk Thistle, Burdock Root, Lavender, Marshmallow Root, Rosehips",
    nutritionalInfo: "NA",
  },

  {
    id: 13,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/fed98bab96174d17940348d1d25f6dab.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/96848fe919b456865c3ab90f9149696f.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c6cf9be24e9eba767997c364e3dd5006.jpg",

      // ... other images
    ],
    heading: "Pedigree Dentastix Daily Dental Chews (Large Dog)",
    price: "£19.99",
    description: `Orijen Original Dog Food is a complete and balanced diet rich and varied in whole animal ingredients to mimic the diet of your dog’s grey wolf ancestor.`,
    keyBenefits: [
      "Biologically Appropriate",
      "WholePrey Recipe: Meat, Organs, Cartilage & Bone",
      "Freeze-Dried Liver for flavour",
      "No Grain, Potato, Tapioca or Plant Protein Concentrates",
    ],
    composition:
      "Fresh Chicken Meat (13%), Fresh Turkey Meat (7%), Fresh Cage-Free Eggs (7%), Fresh Chicken Liver (6%), Fresh Whole Herring (6%), Fresh Whole Flounder (5%), Fresh Turkey Liver (5%), Fresh Chicken Necks (4%), Fresh Chicken Heart (4%), Fresh Turkey Heart (4%), Chicken (Dehydrated, 4%), Turkey (Dehydrated, 4%), Whole Mackerel (Dehydrated, 4%), Whole Sardine (Dehydrated, 4%), Whole Herring (Dehydrated, 4%), Whole Red Lentils, Whole Green Lentils, Whole Green Peas, Lentil Fibre, Whole Chickpeas, Whole Yellow Peas, Whole Pinto Beans, Whole Navy Beans, Herring Oil (1%), Chicken Fat (1%), Chicken Cartilage (1%), Chicken Liver (Freeze-Dried), Turkey Liver (Freeze-Dried), Fresh Whole Pumpkin, Fresh Whole Butternut Squash, Fresh Whole Zucchini, Fresh Whole Parsnips, Fresh Carrots, Fresh Whole Red Delicious Apples, Fresh Whole Bartlett Pears, Fresh Kale, Fresh Spinach, Fresh Beet Greens, Fresh Turnip Greens, Brown Kelp, Whole Cranberries, Whole Blueberries, Whole Saskatoon Berries, Chicory Root, Turmeric Root, Milk Thistle, Burdock Root, Lavender, Marshmallow Root, Rosehips",
    nutritionalInfo: "NA",
  },

  {
    id: 14,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/7809cc6018be8f4ff2643f614cb7c927.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/ce05f6bcb5a6f80a4e5d66b68814d2bf.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/56fd2642d325e955808df1a7359466fe.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/8ae14105d7ae95f7e6428886e5964edf.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/24d838a4866f107be484857e500304fb.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/e0f179f33e838878af337e2a880333a8.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/0416f154dfbd32afa7663b22899eb6a3.jpg",

      // ... other images
    ],
    heading: "Pro Plan Mobility+ Dog Supplement Powder 120g",
    price: "£43.99",
    description: `Pro Plan Mobility+ Dog Supplement Powder can be added to your dog’s food daily to help support their joint health to increase both movement and flexibility.

    Made from a blend of eggshell membrane (a good source of collagen), purified hyaluronic acid, green lipped mussel, and glucosamine, Pro Plan Mobility+ has been scientifically designed to provide the essential building blocks to help support healthy joints and their connective tissue.`,
    keyBenefits: [
      "Helps support mobility and joint health",
      "Supports healthy joints and connective tissue",
      "Suitable for everyday use",
      "Tasty and easy to feed",
    ],
    composition: `Dried Green Lipped Mussel (50%), Glucosamine Sulphate (25%), Eggshell Membrane* (20%), Chondroitin Sulphate (4%), Hyaluronic Acid (0.15%)
      *source of collagen`,
    nutritionalInfo: "NA",
  },

  {
    id: 15,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/1cf2f7195a40e6253c11dd05076471aa.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/816c0e257ad92fd636e13b3baec2f78c.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/adbcfef2c620c96d12b5c2e8d97e4fcd.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/77cd150455c4c7bb7e04c02bf152bfe4.jpg",
      "",

      // ... other images
    ],
    heading:
      "Purina Pro Plan Vital Functions Sterilised Adult Cat Food (Salmon)",
    price: "£33.99",
    description: `Purina Pro Plan Vital Functions Sterilised Adult Cat Food (Salmon) is a balanced and complete diet for the healthy maintenance of neutered cats.

    Containing a unique combination of ingredients to promote healthy kidneys, Pro Plan Sterilised also contains a precise balance of protein, carbohydrate and fat to help your cat maintain an ideal body weight.
    
    The balanced formula also helps maintain urinary health in neutered cats that can be susceptible to urinary conditions, and reduces the risk of urinary stone formation..`,

    keyBenefits: [
      "Promotes and maintains healthy kidneys",
      "Promotes and maintains urinary health",
      "Helps maintain an ideal body weight",
      "Helps protect teeth from plaque and tartar build-up",
    ],
    composition:
      "High Quality Salmon (19%) (including Head, Bone, Meat), Dried Poultry Protein, Rice, Com Protein Meal, Wheat Gluten, Corn, Wheat Middlings, Dried Vegetable Fibre, Minerals, Dried Egg, Animal Fats, Fish Oil, Digest, Yeasts",

    nutritionalInfo: "NA",
  },

  {
    id: 16,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/fdb2ab67c0c8f7f58536614e03d3afaf.jpg",

      // ... other images
    ],
    heading: "RelaxoPet Play Multi-Toy for Dogs",
    price: "£25.99",
    description: `The RelaxoPet Play Multi-Toy successfully combines play and relaxation in a long-lasting and durable toy.

    Made from a high quality canvas fabric with an antibacterial integrated protective carrier layer, the toy also features an innovative RelaxoPet Scent-Safe system that RelaxoPet Scent Pods can be placed into for a unique scent experience.
    
    By placing one of the RelaxoPet Scent Pods into the pocket of the Scent-Safe system and closing it, the toy will release the helpful scent for up to 30 days offering relaxation, or protection against mites, fleas and ticks.`,

    keyBenefits: ["NA"],
    composition: "NA",

    nutritionalInfo: "NA",
  },

  {
    id: 17,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/04c62e0f8bdbca648b7b715825b1628a.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/59c38a410b37015bd90f0028da3c0761.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/53308387d8588d53fcfe416e9e8dc3bc.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/c3b2742dd83700f26ccbc59fe9494d96.jpg",

      // ... other images
    ],
    heading: "RelaxoPet PRO Relaxation System for Birds",
    price: "£43.99",
    description: `The RelaxoPet PRO Relaxation System for Birds has been developed specially for deep relaxation and is suitable for every unbalanced bird and parrot, regardless of age and breed.

    Developed with special sound versions and vibrations that are tailored to the sensitive hearing of birds and parrots, the system can help with a wide variety of stressful situations such as:
    anxiety, mourning, boredom, separation anxiety, vet visits, changes to the environment, thunderstorms, fireworks, aggression towards them, and traumatic experiences
    
    The volume of the RelaxoPet Pro Relaxation System can be adjusted infinitely between audible and inaudible sounds.`,

    keyBenefits: [
      "Noise Motion sensor",
      "PRO Timer",
      "Visual Display Panel",
      "Relaxation through frequent sound and vibration waves",
      "Volume Infinitely Adjustable",
      "Lithium Battery for Charging",
      "Range up to 5m Indoor / 3m Outdoor",
    ],
    composition: "NA",

    nutritionalInfo: "NA",
  },

  {
    id: 18,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/240e272a482fe0460ffb4125884fa7f8.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/4c8e402f14470a5fd8687d045cfc5d1c.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/b24288c386a5720e4b525f0ecd11fbc8.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/299affac3153f151eaa9329583e0ca1d.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/fc9262e90f281bc946c755b0c83644bc.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/3ca89ae78216dde40dd9cdda8214da2a.jpg",

      // ... other images
    ],
    heading: "Royal Canin Medium Sterilised Care Dry Dog Food",
    price: "£90.99",
    description: `Royal Canin Medium Sterilised Care Dog Food is a nutritionally balanced diet to help medium breed, neutered dogs maintain an ideal bodyweight and condition.

    Made with a balanced formula of protein and fat to help limit calorie intake, Royal Canin Sterilised Care also contains an optimal combination of fibre and a specially formulated low density kibble, to help your dog feel fuller for longer.
    
    Suitable for dogs from 11 to 25kg.`,

    keyBenefits: [
      "Maintains Ideal Weight: High protein and moderate fat",
      "Low Calorie: 14% lower in calories compared to a maintenance diet",
      "Blend of Fibres: Helps keep your dog feeling fuller for longer",
      "Complete Nutrition: Balanced for long-term feeding",
    ],
    composition: `Maize, Dehydrated Poultry Protein, Hydrolysed Animal Proteins, Vegetable Protein Isolate*, Animal Fats, Maize Gluten, Vegetable Fibres, Wheat, Chicory Pulp, Soya Oil, Minerals, Fish Oil, Psyllium Husks And Seeds, Yeasts and parts thereof, Fructo-Oligo-Saccharides, Borage Oil, Marigold Extract (Source of Lutein).
      *L.I.P.: protein selected for its very high assimilation`,

    nutritionalInfo:
      "Crude Ash: 4.9%. Crude Fibre: 6.4%. Crude Oil Fats: 13%. Moisture: 0%. Protein: 28%",
  },

  {
    id: 19,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/15cbc7cb14e7f103c9944cd69a69dac8.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/e700df21d476496b3cd965735d39a31c.jpg",

      // ... other images
    ],
    heading: "Woofs Redfish Cookies Dog Treats 100g",
    price: "£10.99",
    description: `Woofs Redfish Cookies are delicious and nutritious treats made from 100% natural redfish and sweet potato.

    Packed full of beneficial Omega-3, protein, vitamins and selenium, the cookies also contain golden paste (Turmeric, Black Pepper, Coconut Oil), which naturally helps to reduce inflammation of dogs’ joints and promote detoxification.`,

    keyBenefits: [
      "Natural pain reliever & anti-bacterial",
      "Packed with protein rich Omega-3 for amazing health",
      "Healthy coat and skin",
      "Super low calorie, hypoallergenic and easily digestible",
      "Stimulates and strengthens the immune system",
      "Sustainably caught",
    ],
    composition: `80% Redfish, 15% Sweet Potato, 4.1% Golden Paste (Turmeric, Black Pepper, Coconut Oil), 0.9% Dried Herbs`,

    nutritionalInfo: "NA",
  },

  {
    id: 20,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/3ec6bcce51ab00052a6a897c07883fae.jpg",

      // ... other images
    ],
    heading: "VetUK Turmeric Capsules for Pets (60 Capsules)",
    price: "£10.99",
    description: `VetUK Turmeric Capsules for Pets are an easy and convenient method of giving your pet a daily dose of turmeric.

    Containing all 3 of the necessary ingredients for turmeric to work (turmeric, linseed oil, and black pepper), each capsule contains a high strength of turmeric and has been formulated to ensure maximum absorption and bioavailability.`,

    keyBenefits: [
      "Joint Health: Supports the body’s natural inflammation processes",
      "General Wellbeing: Helps the integrity of the natural defence mechanisms",
      "Aids Digestion: Supports the micro-flora naturally occurring in the stomach",
      "Coat & Skin: Helps to maintain a healthy and shiny coat",
    ],
    composition: `Turmeric (10% Curcumin), Flax Seed Powder, Black Pepper (95% Piperine), Capsule Shell (HPMC)`,

    nutritionalInfo: "NA",
  },

  {
    id: 21,
    category: "pets",
    image: [
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/a43ec53420b5cc8cc63a4fc5db74cded.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/adbff344f6f0c178360d3b6d5e8b307a.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/a361f8c6f744fa9e3f26f6a034f93ca7.jpg",
      "https://cdn.vetuk.co.uk/v1/c/1200x1200/vetuk-products/95e6315b79546a72a4d2e3c067e3a397.jpg",

      // ... other images
    ],
    heading: "Orijen Puppy Dry Dog Food",
    price: "£26.99",
    description: `Orijen Puppy Food is a nutritionally complete diet loaded with goodness to promote peak growth and development in your growing puppy.`,

    keyBenefits: [
      "Biologically Appropriate",
      "Supports healthy growth & development",
      "WholePrey ratio of meat, Organs, Cartilage & Bone",
      "Coat & Skin: Helps to maintain a healthy and shiny coat",
    ],
    composition: `Turmeric (10% Curcumin), Flax Seed Powder, Black Pepper (95% Piperine), Capsule Shell (HPMC)`,

    nutritionalInfo: "NA",
  },

  {
    id: 22,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d0a374aeefac4b9292cc3a3b68d64b04~mv2.jpeg/v1/fill/w_654,h_654,al_c,lg_1,q_85/5efbd7_d0a374aeefac4b9292cc3a3b68d64b04~mv2.jpeg",
      // ... other images
    ],
    heading: "Piz Buin Protect & Cool Sun Mousse SPF30 150ml",
    price: "£10.99",
    description: `Piz Buin Protect & Cool Sun Mousse 30SPF 150ml

    Immediate & Pleasurable
    
    Icy Cool Sensation
    
    Unbelievably Refreshed Skin
    
    If you want to order 1 Carton, add 6 units to your basket. (Each Carton contains 6 units)
    
     
    
    PIZ BUIN PROTECT & COOL® Refreshing Sun Mousse provides an immediate icy cooling sensation leaving skin unbelievably refreshed with effective UVA/UVB protection. Unbelievably refreshed skin and effective sun protection even on the hottest days.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 23,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_91e31ad707a44086a8262d0de26769ec~mv2.jpeg/v1/fill/w_545,h_545,al_c,q_85/5efbd7_91e31ad707a44086a8262d0de26769ec~mv2.jpeg",
      // ... other images
    ],
    heading: "Piz Buin Instant Glow Lotion SPF30 150ml",
    price: "£11.99",
    description: `Piz Buin Instant Glow Lotion SPF30 150ml

    Subtle Golden Shimmer
    
    Enhances Natural Skin Tone
    
    Immediate UVA/UVB Sun Protection
    
    Does Not Contain Self Tan
    
     
    
    Piz Buin Instant Glow Illuminating Sun Lotion is infused with delicate light reflecting pearls and instantly illuminates your skin with a beautiful subtle golden shimmer that enhances your natural skin tone. The lotion provides immediate and effective UVA/UVB sun protection and does not contain self tan. The light fast absorbing non greasy and non sticky formula moisturises your skin.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 24,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_6b1aadba0a8b449abdd4f644931fb0c4~mv2.jpeg/v1/fill/w_737,h_737,al_c,q_85/5efbd7_6b1aadba0a8b449abdd4f644931fb0c4~mv2.jpeg",
      // ... other images
    ],
    heading: "Nivea Sun Kids Lotion Pocket Size SPF50+ 50ml",
    price: "£11.99",
    description: `NIVEA SUN Kids Protect & Play Sun Lotion SPF 50+ immediately protects your kids against sunburn and long-term skin damage caused by sunlight. It offers highly effective UVA and UVB protection. The caring and moisturizing formula has been designed with the delicate skin of your loved ones in mind. It helps reduce the risk of sun allergies and is extra water-resistant. The skin compatibility of this sunscreen has been dermatologically proven. This pocket-sized sunscreen is great for a quick touch-up when your kids are playing outside! Keep in mind: It is important to keep your babies and young children out of direct sunlight – no matter the SPF.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 25,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_ed18652584fb476bb304b78834abfb03~mv2.jpeg/v1/fill/w_737,h_737,al_c,q_85/5efbd7_ed18652584fb476bb304b78834abfb03~mv2.jpeg",
      // ... other images
    ],
    heading: "Nivea After Sun Moisturising Lotion 200ml",
    price: "£11.99",
    description: `NIVEA SUN After Sun Moisturising Soothing Lotion has a cooling formula that absorbs quickly and intensively moisturises the skin for 24 hours. It contains Aloe vera and avocado oil, maintains the skins elasticity and leaves a soft and silky skin feeling.

 

    Our cooling after sun lotion is fast absorbing and will not need to be washed off. As a moisturiser for women it locks in hydration and works to maintain skin’s elasticity for 24 hours, making it a suitable part of an overnight skin care routine.
    
     
    
    Apply NIVEA after sun once you’re out of direct sunlight for the day, ideally after you have showered off your sun cream. Use on every area of the body that was exposed to sunlight that day, massaging it gently into your skin.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 26,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fa9bfc9643a6476e8d7ef5cf1a77cd16~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_fa9bfc9643a6476e8d7ef5cf1a77cd16~mv2.jpeg",
      // ... other images
    ],
    heading: "L'Oreal Men Expert Barber Club Solid Shampoo & Wash 80g",
    price: "£11.99",
    description: `Men Expert Barber Club Solid Shampoo and Wash Bar is the ultimate all in one - hair, face and body solid shampoo and wash. Formulated with a soft PH and enriched with Cedarwood Essential Oil, this solid shampoo and wash provides the perfect clean from head to toe. Leaving an authentic masculine and woody fragrance with intense Cedarwood notes.  100% Recyclable Packaging, sourced responsibly`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 27,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e5b53dacc23a4e71b91f24dce3d2de5d~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_e5b53dacc23a4e71b91f24dce3d2de5d~mv2.jpeg",
      // ... other images
    ],
    heading: "L'Oreal Men Expert Invincible Sport Camphor Shower Gel 300ml",
    price: "£8.99",
    description: `With five great benefits in one little bottle, the L'Oréal Men Expert Invincible Sport 5-in-1 Shower Gel is a bathroom cupboard and sports bag essential. Working to clean skin as well as revitalise and purify, you’ll be left feeling thoroughly cleansed and refreshed. The gel will cool tired skin thanks to added Camphor and hydrate areas of dryness, lifting your mood after working out.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 28,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_802dbaddea984b9fb13bb5177e97b43e~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_802dbaddea984b9fb13bb5177e97b43e~mv2.jpeg",
      // ... other images
    ],
    heading: "L'Oreal Men Expert Deodorant Roll-On Magnesium Defence 50ml",
    price: "£8.99",
    description: `Enriched with absorbing magnesium minerals, the L'Oréal Paris Men Expert Magnesium Defence Hypoallergenic 48 Hour Roll-On Deodorant keeps your underarms feeling and smelling clean. Featuring a fresh scent, the roll-on works to soften the skin while protecting against unwanted odours.

 

    Ethanol-free.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 29,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_77f9dd936cb24d3ab8c6a593bc790a35~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_77f9dd936cb24d3ab8c6a593bc790a35~mv2.jpeg",
      // ... other images
    ],
    heading: "L'oreal Men Expert Fresh Extreme Anti-Perspirant 250ml",
    price: "£4.99",
    description: `Fresh Extreme, fights body odour with ultra absorbent Active Micro Captors to help combat wetness. Proven 48h* dry effect. Intense diffusion spray delivers active ingredients directly to the skin.`,

    keyBenefits: [
      `The ultra wicking micro capsules of antiperspirant provide the long lasting dry effect

    Deodorant for Men with ultra cooling effect – Is Ideal For A Fresh Scent on hot days
    
    Anti-perspirant roll on combats body odour reliable and long-lasting protection
    
    Anti-bacterial ingredients
    
    Capacity: 50 ml`,
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 30,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_0fbdf62a38d54a7fa10ba90d09da4e26~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_0fbdf62a38d54a7fa10ba90d09da4e26~mv2.jpeg",
      // ... other images
    ],
    heading: "L'Oreal Men Expert Magnesium Defence Shower Gel 300ml",
    price: "£4.99",
    description: `Ideal for the face, body and hair, the Magnesium Defence Shower Gel from L'Oréal Paris’ Men Expert range thoroughly cleanses and hydrates to leave you feeling refreshed.

 

    Lathering to a rich but airy foam, the cleansing gel swiftly removes impurities and build-up to decongest your skin from top to toe.
    
     
    
    Free from drying ethanol, the body wash is enriched with magnesium mineral to deeply detoxify and leave you instantly energised.
    
     
    
    Ethanol-free.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 31,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_4c279befa47344289cffbe0762a3ad61~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_4c279befa47344289cffbe0762a3ad61~mv2.jpeg",
      // ... other images
    ],
    heading: "Dove Body Wash Purely Pampering Shea Butter 500ml",
    price: "£5.99",
    description: `Dove Purely Pampering Shea Butter with Warm Vanilla Body Wash is designed to care for your skin and indulge your senses. This pampering Dove body wash wraps you in rich creamy lather infused with the warm scent of shea butter and vanilla for a soothing sensory experience that will leave you feeling truly relaxed. This gentle formula enriched with Nutrium Moisture‚ delivers skin-natural nutrients and helps your skin to retain its natural moisture. Purely Pampering: treat yourself and your skin every day.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 32,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_ce7f9cc196fe465b8943f219cfd7fc79~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_ce7f9cc196fe465b8943f219cfd7fc79~mv2.jpeg",
      // ... other images
    ],
    heading:
      "Dove Antiperspirant Deodorant Invisible Dry Women Clean Touch 250ml",
    price: "£2.99",
    description: `Dove Invisible Dry Anti-perspirant Aerosol 250 ml is the first proven anti-perspirant deodorant to leave no white marks on 100 colours of clothing.

 

    It gives you the freedom to wear the brightest, boldest colours safe in the knowledge that you will have no white marks. Delivering all-day freshness through odour-fighting technology, this deodorant spray will provide the protection you need combined with the care you expect from Dove.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 33,
    category: "beauty",
    image: [
      "https://static.wixstatic.com/media/5efbd7_dfb9c2b10a034f9fa2dbe8383ecfe31e~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_dfb9c2b10a034f9fa2dbe8383ecfe31e~mv2.jpeg",
      // ... other images
    ],
    heading: "Dove 2 In 1 Shampoo & Conditioner Daily Moisture 250ml",
    price: "£2.99",
    description: `Dove Daily Moisture 2in1 Shampoo and Conditioner gives you the appearance of soft, silky hair that feels easy to manage. Its unique formula helps to enhance and maintain the beauty of your hair. As it progressively nourishes your hair with regular use, you will notice that it feels healthier after each and every wash. This Dove Daily Moisture 2in1 Shampoo and Conditioner, with Pro-Moisture Complex, moisturises hair from deep within the strand.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 34,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_195c646352834613a9f7e24d05319aca~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_195c646352834613a9f7e24d05319aca~mv2.png",
      // ... other images
    ],
    heading: "Mitre Super Dimple Football",
    price: "£12.99",
    description: `Built for hard ground surfaces including asphalt and concrete`,

    keyBenefits: [
      "Training level ball",
      "Built for hard ground surfaces including asphalt and concrete",
      "32 Panel design",
      "2 year fair wear guarantee",
      "Just so you know, our balls are sent out and delivered deflated.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 35,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_9ce4b6ed411d43d7a63d338625d2bc7f~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_9ce4b6ed411d43d7a63d338625d2bc7f~mv2.jpeg",
      // ... other images
    ],
    heading: "Mitre Flare Mini Football",
    price: "£8.99",
    description: `Ideal for developing close control & Individual skills`,

    keyBenefits: [
      "Made with a soft touch PVC outer making it light and durable",
      "High air retention bladder means it doesn't require regular inflation",
      "Ball requires inflation, so ensure you have a pump to hand.",
      "Ideal for developing close control & Individual skills",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 36,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_f753aaed971e4de08301cde733aea167~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_f753aaed971e4de08301cde733aea167~mv2.jpeg",
      // ... other images
    ],
    heading: "Mitre Delta FA Cup 150th Replica Football",
    price: "£15.99",
    description: `Introducing The Official Replica of the Emirates FA Cup 150th Anniversary final matchball`,

    keyBenefits: [
      "Created to commemorate all the teams who have won over the last 150 years.",
      "The Delta Replica FA is a high-performance training ball, developed to perform consistently during training. ",
      "Featuring a foam back lining, to ensure maximum control, and so players can develop their confidence as they play.",
      "It's been designed with durability in mind, and superb air-retention so it will withstand use for the full season.",
      "Suitable for grass and astro. Available in various sizes, depending on age. ",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 37,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_57768dcd417040b8aa2216a589fdad30~mv2.webp",
      // ... other images
    ],
    heading: "Korda Tackle Box Magnet",
    price: "£4.99",
    description: `A powerful magnet designed to keep rigs in place on the Korda Tackle Box rig tray.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 38,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fd751ca7f5044a5195e49253b7923979~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_fd751ca7f5044a5195e49253b7923979~mv2.jpeg",
      // ... other images
    ],
    heading: "Korda Anti Tangle Fishing Sleeves",
    price: "£8.99",
    description: `Sometimes the simplest of ideas are the most effective and these Anti-Tangle Sleeves from Korda will leave you wondering how you ever coped without them! Designed to reduce tangles, the Korda Safe Zone Anti-Tangle Sleeves are tapered to ensure a separation between the hooklink and the lead system. The Anti-Tangle Sleeve literally kicks away from the lead system, significantly aiding the presentation as it ensures that your hooklink lies straight and flat on the bottom of your swim.

 

    The perfect tool for any carp angler who is looking to capture those wiliest and most suspicious of carp, these Anti-Tangle Sleeves are ideal for use on clean gravel bottoms. With colours choices such as silt, weed, clay, or gravel you can pick the most suitable shade to perfectly camouflage into your swim. These Safe Zone Anti-Tangle sleeves were used to great effect in the filming of Korda’s Underwater 7 and 8 DVD and were particularly favoured by carp fishing legend Ali Hamidi. So, if you’d like to see these anti-tangle sleeves in action to see exactly how they could transform your carp fishing success you simply need to sit back and enjoy the thrills of the Korda Underwater DVD!`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 39,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_6bd833d85036413492fea788a840132f~mv2.webp",
      // ... other images
    ],
    heading: "Korda Hook Safe Fishing Tackle Box",
    price: "£14.99",
    description: `Fishing hook storage is vital to keeping your hooks sharp and organised so that you are perfectly prepared for any fishing condition or fish.

 

    Korda Hook Safe is the ideal fishing tackle storage solution to keep your hooks in perfect condition. With a spacious interior that can store 67 individual hooks, this hook safe will hold sizes 2 - 8 until you need them most, at the bankside`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 40,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_acb96d18152c43fc898ab8ea6fdaffb9~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_acb96d18152c43fc898ab8ea6fdaffb9~mv2.jpeg",
      // ... other images
    ],
    heading: "Korda Klor Hooks - 6",
    price: "£8.99",
    description: `Korda's Danny Fairbrass designed the Klor hook pattern to be an aggressive, strong, fast-turning hook with a brilliant hooking potential on a variety of rigs and to be able to withstand extreme conditions when fishing for big carp.

 

    Klor has an aggressive shape (even more so than the Kurv Shank hook), with the point aligned with the eye, which makes it easy to turn quickly and grab a carp by the mouth. Due to the sweeping shank and in-turned eye, the hook can also be used without a kicker or shrink tube and is suitable for use with braid, coated hooklinks, and the combi rig.
    
     
    
    The long, ultra-sharp and slightly in-turned beak of this Korda hook provides the most secure hook hold possible. Furthermore, it is less likely to be damaged by nuisance species, such as crayfish and small fish, which move it around on the bottom, especially when fishing over gravel.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 41,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_72c43426953d4ce093f8be3dae5f9b48~mv2.webp",
      // ... other images
    ],
    heading: "Korda Lead Clips - Clay",
    price: "£12.99",
    description: `The Korda Lead Clip is a purpose-designed safety clip designed to hold your lead in place on the cast.

 

    Korda has designed these lead clips so that they allow the lead to eject with ease should it become snagged during a battle with a fish. Korda suggests using a size 8 swivel as it fits snugly inside the clip making it one of the safest possible lead systems.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 42,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_0e4a5e0dfbd54c329b754067ba0f30ea~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_0e4a5e0dfbd54c329b754067ba0f30ea~mv2.jpeg",
      // ... other images
    ],
    heading: "Korda Dark Matter Fishing Leader Hybrid Lead Clip",
    price: "£8.99",
    description: `The Korda Korda Dark Matter Fishing Leader Hybrid Lead Clip has been fused with plastic leaders that have been tinted to precisely match the lake bed.

 

    The Korda Dark Matter leader features two tungsten bands along their length, which help to pin your tackle to the lake bed in the area of your rig, whilst minimalising damage to the water.
    
     
    
    There are three types of leader available: weedy green, gravel brown, clay and slit colours as well as clear. They are extremely robust too, with a 1m of length and a breaking strain of 30lb. These come as one per pack.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 43,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_542a9969ffa14f0aa0438fc4cbb4c242~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_542a9969ffa14f0aa0438fc4cbb4c242~mv2.png",
      // ... other images
    ],
    heading: "Slazenger V300 Soft Golf Balls 24 Pack",
    price: "£19.99",
    description: `The Slazenger V300 Soft Golf Balls have been engineered with a soft, responsive core with a durable Surlyn cover with a 352 dimple pattern for higher ball flight.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 44,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_7e152b376a0544c7acad8fb93f737fcc~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_7e152b376a0544c7acad8fb93f737fcc~mv2.png",
      // ... other images
    ],
    heading: "Srixon Marathon Distance Golf Balls 12 Pack",
    price: "£18.99",
    description: `The Srixon Marathon Distance Golf Balls are designed with a premium 2 piece construction featuring a highly resilient ionomer cover with a 432 dimple pattern with an Energetic Gradient Growth core for high velocity and greater distance.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 45,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fbb6917b85f346e088b9aadd16028a5a~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_fbb6917b85f346e088b9aadd16028a5a~mv2.jpeg",
      // ... other images
    ],
    heading: "Sutton Swimwear Surf Swimming Goggles",
    price: "£21.99",
    description: `The Sutton Swimwear SURF swimming goggle is made from a single moulded mount for added comfort and pre fitted with tinted, mirrored corrective lenses.`,

    keyBenefits: [
      "to correct short sight",
      "same power in each eye",
      "fixed nose bridge",
      "cpre-assembled",
      "hard plastic case",
      "pre-assembled",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 46,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_14ee800decec4b4bb67b4fdde27398aa~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_14ee800decec4b4bb67b4fdde27398aa~mv2.png",
      // ... other images
    ],
    heading: "Wilson US Open Tennis Balls - Tube of 4",
    price: "£15.99",
    description: `The Wilson US Open tennis balls are made with premium Tex/Tech Industries felt and ensure optimal performance and durability on hard courts, as well as on clay/indoor courts. They feature a high altitude core for excellent performance on courts above 3500ft. The balls are supplied in a 4 ball can.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 47,
    category: "Sports&Outdoors",
    image: [
      "https://static.wixstatic.com/media/5efbd7_ae48e484572e4da79987dc91fcda09fc~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_ae48e484572e4da79987dc91fcda09fc~mv2.png",
      // ... other images
    ],
    heading: "Dunlop Fort All Court Tournament Select Tennis Balls - Tube of 4",
    price: "£14.99",
    description: `Made for intermediate and advanced players, the Dunlop Fort all court tournament select tennis ball is a premium choice eligible for tournament play, and an excellent practice ball for club players. The ball is extremely durable thanks to the HD Core technology, and it offers very good bounce and velocity combo. Also, it is fitting for types of playing surface, and it ensures a much softer feel and better control over each stroke. This pressurised ball features a good quality, excellent visibility felt, and it is approved by the International Tennis Federation. The ball is supplied in a tube of 4.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 48,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_885c6d13805b40be93883a331f1d60eb~mv2.webp",
      // ... other images
    ],
    heading: "Tommee Tippee Made For Me Single Manual Breast Pump",
    price: "£22.99",
    description: `Easy to use one-handed, it’s perfect for busy mums who are on the go or caring for baby with their other hand.

 

    Ideal for occasional use wherever you choose, or to express from one breast while your baby feeds from the other, this breastmilk pump features a cup with massaging petals to help stimulate milk flow. The manual breast pump even comes with a 150ml Closer to Nature® baby bottle with measurement markers so you can keep track of how much you’re expressing. It also connects to all sizes of our Closer to Nature and Advanced Anti Colic baby bottles*, making it easily adaptable to your unique breast pumping experience.
    
     
    
    Free from cords and tubes, this Tommee Tippee Manual Breast Pump is the ultimate travel companion and is compact enough to fit in your handbag or changing bag. It’s extremely lightweight so it doesn’t weigh you down and has a discreet design that allows for quiet pumping at work, the café or at home while baby sleeps.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 49,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d014301a8d5a4428b0bb14f8e0c1235c~mv2.webp",
      // ... other images
    ],
    heading: "Tommee Tippee Closer to Nature® Digital Ear Thermometer",
    price: "£35.99",
    description: `The Closer to Nature® digital ear thermometer at a glance

    Our Digital Ear Thermometer is quick, accurate and easy to use. Just place in baby’s ear, press the scan button and the temperature reading will appear within 1 second on the large LCD display.
    
    
    Easy to use
    Simply place the hygiene cover over the end of the probe and click into place, then place the thermometer in the ear, aiming for the eardrum. Press the scan button and their temperature reading will be shown clearly on the large LCD display.
    
    
    Tiny tip
    The tiny tip on the Closer to Nature® digital ear thermometer is ideal for newborns but is also suitable for the whole family.
    
    Fever alert
    
    If your baby’s temperature is worryingly high, the fever alert on the Closer to Nature® digital ear thermometer will sound one long beep, followed by three short beeps to warn of potential fever.
    
    Memory function
    Stores nine memory readings, allowing you to monitor your baby’s temperature over a period of time with ease.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 50,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d6b23fa7896c4bef8e266e75ed248a64~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_d6b23fa7896c4bef8e266e75ed248a64~mv2.jpeg",
      // ... other images
    ],
    heading: "Tommee Tippee Closer to Nature 260ml Baby Bottles 6-Pack",
    price: "£21.99",
    description: `The original breast-like bottle

    With our award-winning** Closer to Nature® baby bottle, switching between breast and bottle feeding has never been simpler – in fact it has been voted as mum’s #1 bottle for switching between breast and bottle! * With our breast-like teat and built-in anti-colic valve, it could just be the best thing for baby, since you!
    
     
    
    Silicone, breast-like teat
    
    Loved by mums and babies, our easy latch-on, breast-like teat feels closer to skin and mimics the natural flex and movement of a mum’s breast for a comfortable feed. 95% of mums reported that their baby accepted the soft silicone teat with skin-like feel and would recommend to others. *
    
     
    
    We offer different flow rates to keep up with your growing baby. Every baby is different but as a guide we suggest slow flow for 0+ months, medium flow for 3+ months and fast flow for 6+ months. Closer to Nature® teats are only compatible with Closer to Nature® bottles.
    
     
    
    We recommend changing your bottle teats every two months. And you should change them immediately if they're damaged, weak or have been bitten by tiny teeth.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 51,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_9226b844e4694078ba4936d2c4d09717~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_9226b844e4694078ba4936d2c4d09717~mv2.jpeg",
      // ... other images
    ],
    heading: "First Steps 2 Kick Mats",
    price: "£10.99",
    description: `After an exciting day having fun outdoors, there's nothing more frustrating than the kids getting in the car with their muddy shoes and getting dirt and scuffs on the clean backs of the front seats.

 

    There's a solution for this and it's these practical versatile black kick mats which will protect your car seats from scuffs and dirt, keeping your car clean. They come with a straps to secure them over the headrest and has a handy pocket for organisation and storage of different items. These mats are very easy to clean with it's easy to clean material.`,

    keyBenefits: [
      "2 pack of kick mats",
      "Colour - Black",
      "Protects car seats from scuffs",
      "Handy organiser pocket ",
      "Size (Width x Height): W-42cm x H-57cm",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 52,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d65a4e5fa34e4da382f0291ca4634710~mv2.jpg/v1/fill/w_481,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_d65a4e5fa34e4da382f0291ca4634710~mv2.jpg",
      // ... other images
    ],
    heading: "First Steps Folding Changing Mat",
    price: "£11.99",
    description: `This fantastic folding changing mat is a fantastic item to have in your baby collection for it's practically and convenience.  The folding mat will make changing your baby so easy and comes with a netted pocket for extra storage for items you need such as nappies, baby wipes etc and it's a portable size which is perfect for when you need to change the baby on the go.  The folding changing mat is padded for the baby's comfort and it's lightweight and portable making it ideal to take it on the go when you're outdoors, in the car on holiday for example.`,

    keyBenefits: [
      "Size - 46x66cm",
      "Padded for comfort",
      "Fits in most bags",
      "Easy to clean",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 53,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d0c3beea085a4d12b684839b84e28c7b~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_d0c3beea085a4d12b684839b84e28c7b~mv2.jpeg",
      // ... other images
    ],
    heading: "First Steps Comfort Blanket Rabbit",
    price: "£10.99",
    description: `This super plush comfort blanket is a wonderful gift for a newborn baby as the softness of the comfort blanket will make baby feel calm and happy. Attached to the comfort blanket is a cute looking rabbit with embroidered features including soft long ears, eyes and mouth. This comfort blanket is irresistibly cute for baby's and is practical for parents as well. it's ideal for the little ones to hold to help them develop their hand eye coordination.  `,

    keyBenefits: [
      "Filling - 100% polyester",
      "Size 26x16cm approx",
      "Suitable from birth",
      "Little bunny label",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 54,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_f1e12b429a2e4c00a6ed5786fbe3ec23~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_f1e12b429a2e4c00a6ed5786fbe3ec23~mv2.jpeg",
      // ... other images
    ],
    heading: "First Steps Universal Stroller Rain Cover",
    price: "£12.99",
    description: `This fantastic universal stroller waterproof rain cover is a must have baby accessory to have to be able to protect them from all types of weather including rain, sleet, snow and wind.

 

    This rain cover has a universal design which means this cover will fit most stroller styles. It's perfect for keeping your baby dry and has a wonderful transparent design which allows for your baby to see what's going on around them as their being pushed around.
    
     
    
    This would be a great addition to your baby accessory range as it's practical and allows for you to take your baby outdoors without being affected by the weather.`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 55,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_7f5ea662feac4e7c916cdd1ec1b4b953~mv2.jpg/v1/fill/w_500,h_737,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_7f5ea662feac4e7c916cdd1ec1b4b953~mv2.jpg",
      // ... other images
    ],
    heading: "First Steps Foam Letters & Numbers 36 Pack",
    price: "£12.99",
    description: `With a fun and exciting approach, these foam letters and numbers will keep your little one entertained during bath time.

 

    The set includes 36 pieces of letters and numbers in bright colours. The letters and numbers not only float in the water but also stick to the bath when wet.
    
     
    
    36 foam letters and numbers
    
    Ideal for entertaining your children during bath time`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 56,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e51697013cc6487fb741fea2c0d487aa~mv2.jpg/v1/fill/w_446,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_e51697013cc6487fb741fea2c0d487aa~mv2.jpg",
      // ... other images
    ],
    heading: "First Steps Stacking Cups 9 Pack",
    price: "£9.99",
    description: `Stacking cups are a great play tool for small children, they can be used for learning as they grow. Start out learning about the shapes and materials using taste, touch and listening. You can bang them together to make sounds, use them for playing in water or sand or put small toys in them and tip them over for your child to discover.

 

    The cups are brightly coloured and you can teach basic colours with these as well as numbers on the tops for counting and learning numbers shapes too. In this pack you have 9 cups to play with and stack up to create a brightly coloured tower to knock down again.
    
     
    
    9 Cups
    
    Numbered
    
    Bright Colours
    
    Learning Tools`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 57,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_2579f3ee21fe46a991cbb474a2dce445~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_2579f3ee21fe46a991cbb474a2dce445~mv2.jpeg",
      // ... other images
    ],
    heading: "Dunlop Fort All Court Tournament Select Tennis Balls - Tube of 4",
    price: "£5.99",
    description: `With a fun and exciting approach, these scribble & scrub bath crayons will keep your little one entertained during bathtime. You can scribble letters or numbers, write little messages, or simply create drawings. When bathtime is completed, simply wipe off the artwork.

 

    6 crayons in bright primary colours.
    
    Easy to wash off with water.
    
    Promotes creative bathtime fun.
    
    Comfortable for little hands. `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 58,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_2ae2ea37f5fe49e29161dc31acd06acd~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_2ae2ea37f5fe49e29161dc31acd06acd~mv2.png",
      // ... other images
    ],
    heading: "First Steps Baby’s First Brush & Comb Set",
    price: "£5.99",
    description: `Baby's first head of hair is so soft and can tangle easily, this comb and brush set will help you gently keep their hair nice and tidy. The soft brush will be nice on their head too and will be a great tool to help create a bond with you and your baby.

 

    The comb is great for de-tangling after a bath. This also stimulates hair growth as they grow up and helps keep the scalp healthy. Your baby may even enjoy brushing or combing their own hair which is great for promoting motors skills for your baby.
    
     
    
    2 Piece Set
    
    Brush with Soft Bristles
    
    Comb with Fine Teeth`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 59,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_160e5315d38943aca7ede1371b65d19b~mv2.jpg/v1/fill/w_500,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_160e5315d38943aca7ede1371b65d19b~mv2.jpg",
      // ... other images
    ],
    heading: "First Steps Baby Blanket Blue",
    price: "£12.99",
    description: `Keep your baby snuggly and warm with this beautiful blue baby blanket from First Steps. Made from super soft coral fleece material, the blanket is sure to become a family favourite for bundling your baby into for bedtime and big hugs. Providing your children with what they need to keep happy and feeling loved is one of the many joys of parenting, but sometimes working out what is right for your little one can be tricky. This blanket has been carefully designed to be perfect for babies right from birth, to help both you and your new-born rest easily.

 

    Coral fleece material
    
    Size: 75 x 100 cm approx
    
    Colour: blue
    
    'Hello Little One' embroidery
    
    Suitable from birth
    
    Machine washable at 30 degrees`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 60,
    category: "BabyProducts",
    image: [
      "https://static.wixstatic.com/media/5efbd7_4c79f87ffd5b4497bc113c2106b4a58f~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_4c79f87ffd5b4497bc113c2106b4a58f~mv2.jpeg",
      // ... other images
    ],
    heading: "First Steps Baby Blanket Pink",
    price: "£12.99",
    description: `Keep your baby snuggly and warm with this beautiful pink baby blanket from First Steps. Made from super soft coral fleece material, the blanket is sure to become a family favourite for bundling your baby into for bedtime and big hugs. Providing your children with what they need to keep happy and feeling loved is one of the many joys of parenting, but sometimes working out what is right for your little one can be tricky. This blanket has been carefully designed to be perfect for babies right from birth, to help both you and your new-born rest easily.

 

    Coral fleece material
    
    Size: 75 x 100 cm approx
    
    Colour: pink
    
    'Hello Little One' embroidery
    
    Suitable from birth
    
    Machine washable at 30 degrees`,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 61,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e157ded16d3c4484a3e8fa9ad7de1884~mv2.jpeg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_e157ded16d3c4484a3e8fa9ad7de1884~mv2.jpeg",
      // ... other images
    ],
    heading: "LEGO 42138 Technic Ford Mustang Shelby GT500",
    price: "£28.99",
    description: `Kids will discover new exciting experiences in LEGO AR+ app with this model car kit to build that races in augmented reality like no other!
    This true-to-life buildable model car toy faithfully recreates the iconic looks of the real Ford Mustang Shelby GT500 drag racing car
    The Ford mustang model car brings home the thrill of the drag racetrack as kids send the car speeding using the 2 pull back toy car's motors
    Download the LEGO AR+ app, scan the model, then pull the toy car back to launch it using your foot & see it come to life in exciting races
    Use the LEGO Technic AR+ app to check out the challenges for more fun ways to play and explore all details of your muscle racing car model
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 62,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e816dcdc3ea8434eaaee0449d59e901b~mv2.jpeg/v1/fill/w_550,h_733,al_c,q_85,enc_auto/5efbd7_e816dcdc3ea8434eaaee0449d59e901b~mv2.jpeg",
      // ... other images
    ],
    heading: "LEGO Star Wars Imperial TIE Fighter Building Toy 75300",
    price: "£27.99",
    description: `Fans of the classic Star Wars trilogy will love this missile-shooting Imperial TIE Fighter, plus 2 LEGO minifigures and a NI-L8 Protocol Droid.

    Kids can roleplay as the villains from the classic Star Wars trilogy with this cool LEGO brick version of the Imperial TIE Fighter (75300).
    
    Capturing the authentic, sleek design of an iconic starfighter in the Imperial fleet, it features an opening LEGO minifigure cockpit and 2 spring-loaded shooters. There are also 2 LEGO minifigures: a TIE Fighter Pilot with a blaster pistol and Stormtrooper with a blaster, plus an NI-L8 Protocol Droid to inspire fun, creative roleplay and storytelling.
    
    The LEGO Group has been creating brick-built versions of iconic Star Wars starfighters, vehicles, locations and characters since 1999. It’s become a hugely successful theme with an awesome assortment of toy building sets and the best gift ideas for kids and fans of all ages.
    `,

    keyBenefits: [
      "Height: 262 MM",
      "Width: 282 MM",
      "Age Range: Child (5-8 years)",
      "Warning Message: Warning: Not suitable for children under 3 years",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 63,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_118fdf67d1b546e481feae5054bab596~mv2.jpeg/v1/fill/w_507,h_507,al_c,q_85,usm_0.66_1.00_0.01/5efbd7_118fdf67d1b546e481feae5054bab596~mv2.jpeg",
      // ... other images
    ],
    heading: "LEGO 21034 Architecture London Building Set",
    price: "£23.99",
    description: `Celebrate the architectural diversity of London with this detailed LEGO brick model. The LEGO Architecture Skyline Collection offers models suitable for display and decor in the home and office, and has been developed for all with an interest in travel, architectural culture, history and design. Each set is scaled to give an accurate representation of the comparative size of each structure, with true-to-life color depiction. This set features the National Gallery, Nelson's Column, London Eye, Big Ben (the Elizabeth Tower) and Tower Bridge, and is finished with a decorative ‚ÄúLondon‚Äù nameplate.

    LEGO Architecture sets make a great birthday, Christmas or any time gift, or a relaxing building experience for yourself!
    
    Contains 468 pieces.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 64,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e80c945145804f4fa994d52f8db96a41~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_e80c945145804f4fa994d52f8db96a41~mv2.jpg",
      // ... other images
    ],
    heading: "LEGO 42123 Technic McLaren Senna GTR",
    price: "£28.99",
    description: `This LEGO toy sports car building set is an impressive Christmas gift for 10 + years old or a racing cars lover of any age
    `,

    keyBenefits: [
      "Features McLaren Senna toy racing car, a true racetrack icon's authentic replica and LEGO Technic version of McLaren’s show-stopping supercar",
      "Ultimate speed. Supreme power. Breathtaking good looks. This collectable McLaren toy car features eye-catching graphics, colours & details",
      "Check out the detailed V8 engine with moving pistons and dihedral doors that open ‘up and out' in the unmistakable style of the real McLaren",
      "Build all the realistic features and beautiful design details, then display your car to attract admiring glances from everyone who passes",
      "LEGO Technic model car building kits feature realistic movement and mechanisms that introduce young builders to the universe of engineering",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 65,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_b9d73dd76f4046468b51862b878d4ea3~mv2.webp",
      // ... other images
    ],
    heading: "LEGO Lamborghini Countach",
    price: "£18.99",
    description: `Kids and car enthusiasts now have the chance to explore one of the world’s most iconic sports cars with the LEGO® Speed Champions Lamborghini Countach (76908) building set. Stunning from every angle, this detailed replica model delivers an engaging building experience, is perfect for display and awesome for epic racing action.

 

    Digital building instructions
    This collectible toy car includes printed and digital building instructions. Available in the free LEGO Building Instructions app for smartphones and tablets, the interactive digital guide comes with amazing zoom and rotate tools that allow you to visualize this model from all angles as you build.
    
     
    
    Celebrating iconic engineering and design
    LEGO Speed Champions building sets deliver buildable versions of the world’s leading and best-known vehicles. Designed for kids and automobile fans of all ages, the authentically detailed models are also great for thrilling race action against other toy vehicles from the Speed Champions range.
    `,

    keyBenefits: [
      "LEGO® recreation of the iconic 1970’s Lamborghini Countach – A replica model for kids and adults with a passion for innovative high-performance cars",
      "What’s in the box? – This toy car construction set has everything you need to build a white Lamborghini Countach and includes a Lamborghini-branded driver with a crash helmet, wig and wrench",
      "Collect, play and display – Build your very own Lamborghini Countach, show it off to friends and enjoy race action against other vehicles from the Speed Champions range",
      "A gift for any occasion – This 262-piece LEGO® Speed Champions Lamborghini Countach (76908) playset can be given as a birthday or any-other-day gift for kids and car fans aged 8 and up",
      "Iconic details – This Lamborghini Countach model comes with a 2-seat open cockpit and lots of authentic detailing and measures over 1.5 in. (4cm) high, 6 in. (15cm) long and 2.5 in. (7cm) wide",
      "No batteries required – This cool Lamborghini Countach toy is powered by kids’ imaginations – so the racing action never stops!",
      "Interactive digital building guide – Zoom, rotate and view this model from all angles as you build with the LEGO® Building Instructions app, available for smartphones and tablets",
      "Exploring iconic design – LEGO® Speed Champions sets give kids and car fans the chance to explore some of the world’s best-known vehicles, with collectible models for play and display",
      "A focus on quality – LEGO® components meet strict industry standards to ensure they’re consistent, compatible and fun to build with",
      "Tested for safety – All LEGO® building toys are carefully tested to ensure every playset meets strict safety standards",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 66,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_a12c1a76d6284baca8eed5db8664525f~mv2.webp",
      // ... other images
    ],
    heading: "LEGO Marvel Iron Man Figure Building Toy Infinity Saga 76206",
    price: "£22.99",
    description: `Give kids an Iron Man of their own with this authentically detailed, fully jointed, build-play-and-display recreation.

 

    LEGO® model number: 76206 - for ages 9 years and over.
    `,

    keyBenefits: [
      "Features a 9 in. / 24 cm tall Iron Man figure - a realistic recreation of the metal-clad star of the Marvel Studios' Avengers movies.",
      "All parts of the buildable Iron Man are articulated, so kids can move, position and pose the armour just like the real thing.",
      "A button-operated Light Brick adds extra realism as it illuminates the arc reactor in Iron Man's chest.",
      "The LEGO Marvel Iron Man model looks great on display and includes a removable information plate with details about the iconic armoured Avenger.",
      "The LEGO Iron Man building toy lets kids can be like Tony Stark and build their own armoured action figure to build and display.",
      "Give Iron Man and Marvel Avengers Infinity Saga fans aged 9 and up the ultimate gift: their own Iron Man action figure. Standing over 9 in. This take-anywhere Iron Man stands over 9 in. (24 cm) tall.",
      "Includes 381 pieces.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 67,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_8a9b450d744e4706843d5912a08c55ae~mv2.webp",
      // ... other images
    ],
    heading: "Avengers Titan Hero Iron Man Action Figure",
    price: "£11.99",
    description: `Iron Man jets through the sky, ready to blast the bad guys! Imagine leaping into adventure with Avengers figures, vehicles and roleplay items inspired by the Marvel Universe. With this classic-inspired line of toys, kids can imagine all the action of the Marvel Universe with their favourite heroes including Captain America and Black Panther. Products each sold separately. Subject to availability. Children can imagine heroic characters charging into battle with these figures from the Titan Hero Series!

 

    30-cm-scale Marvel universe figures: the titan hero series 30-cm-scale iron man action figure lets children imagine the action of the Avengers on a big scale.
    
     
    
    Marvel entertainment-inspired design: fans can imagine heroic avengers battling villains in a fight for the fate of the world with this Iron Man figure. This super hero figure is inspired by the character from the programmes and Marvel films, both on Disney+.
    
     
    
    30-cm-scale iron Man figure – imagine iron man flying into battle in his red-and-gold armour suit with this 30-cm-scale figure.
    
     
    
    Look out for other Avengers super hero toys: be on the lookout for other Avengers figures and gear to imagine the brave heroes defending the world from the mad titan Thanos! Additional products each sold separately. Subject to availability.
    `,

    keyBenefits: [
      "Size H30.48cm.",
      "For ages 4 years and over.",
      "EAN: 5010993797806.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 68,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_255182c3ad3f46848002b7947fe335a3~mv2.webp",
      // ... other images
    ],
    heading: "Avengers Titan Hero Black Panther Action Figure",
    price: "£12.99",
    description: `Black Panther is the all-powerful hero of Wakanda. Imagine leaping into adventure with Avengers figures, vehicles and roleplay items inspired by the Marvel Universe. With this classic-inspired line of toys, kids can imagine all the action of the Marvel Universe with their favourite heroes including Captain America and Iron Man. Products each sold separately. Subject to availability. Children can imagine heroic characters charging into battle with these figures from the Titan Hero Series.

 

    30-Cm-Scale Marvel Universe Figures: The Titan Hero 30-Cm-Scale Black Panther Action Figure Lets Children Imagine The Action Of The Avengers On A Big Scale.
    
     
    
    Marvel Entertainment-Inspired Design: Fans Can Imagine Heroic Avengers Battling Villains In A Fight For The Fate Of The World With This Black Panther Figure. This Super Hero Figure Is Inspired By The Characters From The Programmes And Marvel Films, Both On Disney+.
    
     
    
    30-Cm-Scale Black Panther Figure – Imagine The Wakanda Leader Leaping Into Battle With This 30-Cm-Scale Figure, Inspired By The Character From Marvel Entertainment.
    
    Marvel Universe For Children – Fans Can Imagine The Heroic Black Panther T Challa Battling Villains In A Fight For The Fate Of The World.
    
     
    
    Look Out For Other Avengers Super Hero Toys: Be On The Lookout For Other Avengers Figures And Gear To Imagine The Brave Heroes Defending The World From The Mad Titan Thanos! Additional Products Each Sold Separately. Subject To Availability.
    `,

    keyBenefits: [
      "Size H30.48cm.",
      "For ages 4 years and over",
      "EAN: 5010993791538.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 69,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e6f916e151ab400c8549669fcd20941d~mv2.webp",
      // ... other images
    ],
    heading: "DC Comics Batman 12-inch Action Figure",
    price: "£6.99",
    description: `Create your own epic Batman adventures with the Batman 12-inch Action Figures! Each action figure features 11 points of articulation, a cloth cape and detailed movie styling that brings your favourite Batman figures to life! DC fans of all ages love Batman action figures. Engage your imagination and create your own Batman battles! Collect your favorite Super Hero and Super-Villains from the Batman Movie. Bring your favorite Batman movie moments to life with the Batman 12-inch Action Figures and protect Gotham City!

 

    12-INCH ACTION FIGURE: With 11 points of articulation, it's easy to pose this 12-inch Batman action figure into a variety of dynamic action poses to bring your favorite Batman characters to life!
    
     
    
    AUTHENTIC MOVIE STYLING: This articulated action figure is highly detailed, featuring a cloth cape, detailed sculpt, and movie styling! Create your own Batman adventures!
    
     
    
    COLLECT THEM ALL: Bring the excitement of Batman home! Add action figures like Batman, Selina Kyle, and more to your Batman collection (each sold separately).
    
     
    
    OFFICIAL THE BATMAN MOVIE COLLECTIBLE: Collect the official Batman 4-inch and 12-inch figures. Add Batman, Selina Kyle, and The Penguin (each sold separately) to your action figure collection!
    
     
    
    BATMAN GIFTS FOR KIDS: The Batman 12-inch Action Figures are great Batman toys gift for kids. Batman superhero toys are the ultimate holiday and gift for boys and girls.
    `,

    keyBenefits: [
      "Size H31.12cm.",
      "For ages 3 years and over.",
      "Manufacturer's 1 year guarantee.",
      "EAN: 778988371671.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 70,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_6f0dc5415dbb4b43899537d099098962~mv2.webp",
      // ... other images
    ],
    heading: "Avengers Titan Hero Captain America Action Figure",
    price: "£10.99",
    description: `Captain America fights for truth and justice everywhere. Imagine leaping into adventure with Avengers figures, vehicles and roleplay items inspired by the Marvel Universe. With this classic-inspired line of toys, children can imagine all the action of the Marvel Universe with their favourite heroes including Black Panther and Iron Man. Products each sold separately. Subject to availability. Kids can imagine heroic characters charging into battle with these figures from the Titan Hero Series!

 

    30-Cm-Scale Marvel Universe Figures: The Titan Hero 30-Cm-Scale Captain America Action Figure Lets Children Imagine The Action Of The Avengers On A Big Scale.
    
     
    
    Marvel Entertainment-Inspired Design: Fans Can Imagine Heroic Avengers Battling Villains In A Fight For The Fate Of The World With This Captain America Figure. The Super Hero Figure Is Inspired By The Characters From The Programmes And Marvel Films On Disney+.
    
     
    
    30-Cm-Scale Captain America Figure – Imagine The Heroic First Avenger Leaping Into Battle With This 30-Cm-Scale Captain America Figure.
    
     
    
    Look Out For Other Avengers Super Hero Toys: Be On The Lookout For Other Avengers Figures And Gear To Imagine The Brave Heroes Defending The World From The Mad Titan Thanos! Additional Products Each Sold Separately. Subject To Availability.
    `,

    keyBenefits: [
      "Size H30.5cm.",
      "For ages 4 years and over.",
      "EAN: 5010993789344.",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 71,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fa308032ef3b4c6980bb31e846c87dbd~mv2.webp",
      // ... other images
    ],
    heading: "2 Fast 2 Furious Nissan Skyline GT-R (R34)",
    price: "£19.99",
    description: `This buildable LEGO® Speed Champions Nissan Skyline GT-R (R34) replica model (76917) has been inspired by the iconic car from the 2 Fast 2 Furious movie. Kids aged 9+, car lovers and fans of the popular movie franchise can experience a rewarding build before proudly displaying this car toy or recreating fast-paced street racing scenes.

    A great gift for car lovers
     
    
    This Fast & Furious toy is packed with authentic details from the real-life model, including iconic livery on the side, a wing atthe back, a grille on the front, impressive wheel arches and a nitro fuel canister on the passenger seat. There is also a Brian O’Conner minifigure to place in the driver’s seat so car fans can enjoy all-action role play.
    
    A fun, digital experience for LEGO fans
     
    
    Using the LEGO Builder app to zoom in, rotate and visualize the model, builders both young and old can bring their creation to life on a tablet or smartphone, giving them a rewarding sense of achievement.
    `,

    keyBenefits: [
      "Fast & Furious car toy – LEGO® Speed Champions 2 Fast 2 Furious Nissan Skyline GT-R (R34) model (76917) for kids, car enthusiasts and fans of the 2 Fast 2 Furious movie",
      "1 minifigure – The street racer model comes with a Brian O’Conner minifigure for kids to place behind the wheel and recreate thrilling scenes from the famous movie franchise",
      "Authentic details – The model includes details inspired by the real-life version: iconic stripes on the side, a wing at the back, a grille on the front and engine components on the passenger seat",
      "Play-and-display LEGO® car – This Nissan Skyline model provides a fun build and can be shown off on display or used to stage racing action",
      "Collectible LEGO® gift – This 319-piece Speed Champions model kit can be given as a birthday gift or unexpected treat to kids aged 9+, car enthusiasts and fans of the Fast & Furious movies",
      "Portable size – The 2 Fast 2 Furious Nissan Skyline GT-R (R34) model measures over 2 in. (5 cm) high, 6.5 in. (16 cm) long and 2.5 in. (7 cm) wide and can be played with at home or taken on the go",
      "Digital building experience – Kids can see their models come to life on their tablets or smartphones as they construct their model using the LEGO® Builder app",
      "Premium quality – For more than 6 decades, LEGO® bricks have been made to ensure they pull apart consistently every time",
      "Safety assurance – LEGO® building bricks meet stringent global safety standards",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 72,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_af6dc1e2e88549f7a646c0fd7057fc89~mv2.png/v1/fill/w_575,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_af6dc1e2e88549f7a646c0fd7057fc89~mv2.png",
      // ... other images
    ],
    heading: "Hungry Hippos Game",
    price: "£19.99",
    description: `You'll have a chompin' good time with the classic hippo-feeding Hungry Hungry Hippos game! Hungry Hippo and his pals are ready to join in the feeding frenzy, and when you release all the marbles onto the game base, they’ll be chomping after them! You can be Hungry Hippo, Veggie Potamus, Sweetie Potamus or Bottomless Potamus. Whichever hippo you choose, you’ll have to move fast, because if your hippo chomps the most marbles, you win!
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 73,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e07a3f4ccea94c418604d4cc725ba5f5~mv2.jpeg/v1/fill/w_1158,h_1158,al_c,q_85,usm_0.66_1.00_0.01/5efbd7_e07a3f4ccea94c418604d4cc725ba5f5~mv2.jpeg",
      // ... other images
    ],
    heading: "LEGO City Safari Off-Roader",
    price: "£19.99",
    description: `Go on a special safari with this cool, zebra-patterned LEGO City Safari Off-Roader.

 

    Unleash the wild fun of LEGO City with this safari off-roader playset – designed to inspire open-ended, independent role-play based on real-life scenarios.
    
     
    
    Grab your binoculars, climb on the roof of the awesome all-terrain vehicle and just wait till the lioness creeps out and the parrot swoops in!
    
     
    
    Product features:
    
    Included: There’s a sturdy, zebra-patterned, all-terrain vehicle, photographer's tree costume, 2 explorer minifigures and toy lioness and parrot figures.
    
    Safari off-roader approximate dimensions 10cm x 16cm x 6cm
    
    Suitable for ages 5+
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 74,
    category: "Toys",
    image: [
      "https://static.wixstatic.com/media/5efbd7_844cb17413b3458bbe74bb8604d6e20d~mv2.png/v1/fill/w_625,h_625,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5efbd7_844cb17413b3458bbe74bb8604d6e20d~mv2.png",
      // ... other images
    ],
    heading: "LEGO Creator 3 in 1 Cyber Drone Building Set",
    price: "£12.99",
    description: `Take the adventure to outer-space with this Cyber Drone construction set from the LEGO® Creator range.

 

    Whether they’re soaring through the galaxy or making up action-packed adventures, children will love building this exciting Cyber Drone toy. It comes with a super-cool robot minifigure too, helping them play out all their favourite adventures.
    
     
    
    There are 113 pieces included inside the box, plus instructions for building the Cyber Drone. Children can follow the instructions to rebuild a Cyber Mech and Cyber Scooter too!
    
     
    
    For ages 6 years and over.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 75,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fc34b191239c4188af9dc7e54d626d53~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_fc34b191239c4188af9dc7e54d626d53~mv2.jpeg",
      // ... other images
    ],
    heading: "Foster's Pint Glasses CE 20oz / 568ml",
    price: "£4.99",
    description: `There are few nations that know how to drink like the Aussies! That's why Foster's, Australia's premier Lager, is such a worldwide hit! Why drink your favourite amber nectar in a standard glass when you can drink it in style in your very own set of Foster's pint glasses?

    Great for any home bar, these pint glasses will keep you equipped for any emergency drinking situations that might arise!
    
    These hi-ball style pint glasses feature the Fosters logo in colour, and printed with "Est. Melbourne 1888" for a classic drop of your favourite Aussie beer.
    
    "Well you wouldn't want a warm beer would ya?!"
    
    Please Note:These Foster's Pint Glasses are CE marked, which means they can be used in pubs.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 76,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_15ec65f859914c2cbd45c59036d717f6~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_15ec65f859914c2cbd45c59036d717f6~mv2.jpeg",
      // ... other images
    ],
    heading: "Heineken Star Pint Glass CE 20oz / 568ml",
    price: "£4.99",
    description: `A branded glass with the instantly recognisable brand style – ideal for achieving the perfect serve. This well thought-out glass has been purpose built, guaranteeing a flawless and pleasant drinking experience.

    Made from a fully toughened glass and complete with a CE Mark at 1 pint this glass is perfect for commercial use.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 77,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_584884c2e91f495bb7388d72e751743d~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_584884c2e91f495bb7388d72e751743d~mv2.jpeg",
      // ... other images
    ],
    heading: "San Miguel Pint Glasses CE 20oz / 568ml",
    price: "£5.99",
    description: `Relax with your favourite beer and the stylish San Miguel Pint Glasses. These 20oz stemmed glasses are officially branded with the San Miguel logo and feature a frosted design on reverse. The nucleated base ensures your beer retains its head.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 78,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_9f2b284c8be04c69a784c11ac960e305~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_9f2b284c8be04c69a784c11ac960e305~mv2.jpeg",
      // ... other images
    ],
    heading: "Amstel Beer Glass 20oz / 568ml",
    price: "£4.99",
    description: `The extra tall and elegant shape of this glass allows your beer to stand out among standard pint glasses for the presentation of a bold drink.
    This beer glass is ideal for Amstel lovers, holding more than a pint allowing extra room for a decent head on your beer. Perfect for enjoying Amstel at home.
    
    Suitable for use in commercial and domestic settings.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 79,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_0d7ca936537c4bf2bfa3ea16d81371ef~mv2.jpg/v1/fill/w_473,h_750,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_0d7ca936537c4bf2bfa3ea16d81371ef~mv2.jpg",
      // ... other images
    ],
    heading: "Official Camden Town Brewery Jacks Pint Glass - Set of 2",
    price: "£19.99",
    description: `This glass was created in collaboration with Jack Smith, one half of London design duo SmithMatthias Ltd. The ‘Jack’ takes inspiration from the straight-sided, minimalist styles seen in contemporary glass design, bringing a new shape to the traditional pint glass, perfect for Camden’s entire beer range.

 

    This glass holds 1 pint (20 fluid ounces / 568ml)
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 80,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_c2298df4e7f74153b724a2c952cd6300~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_c2298df4e7f74153b724a2c952cd6300~mv2.png",
      // ... other images
    ],
    heading: "Carling Glass CE 20oz/568ml",
    price: "£2.99",
    description: `This unique branded glass is made of toughened glass and features a ribbed centre adding extra grip and embossed carling text at the bottom. The nucleated base will keep your beer fizzing until its last drop.
    The elegant shape of this glass allows your beer to stand out among standard half pint glasses for the presentation of a bold drink.
    
    This beer glass is ideal for Carling lovers, holding half a pint and allowing extra room for a decent head on your favourite beer. Perfect for enjoying a refreshing beer at home.
    For use in commercial and domestic settings.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 81,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_475d06fd119e4b63a109bd61b1ec2e1d~mv2.webp",
      // ... other images
    ],
    heading: "Culinare 3 Piece Scissor Set",
    price: "£12.99",
    description: `This robust set of scissors will take the hard work out of food preparation and everyday household tasks.

    140mm embroidery scissors - ideal for smaller hands or sewing tasks.
    180mm all purposed scissors - great for any household tasks.
    200mm kitchen scissors - perfect for preparation food, also comes with a nutcracker.
     
    
    To clean, hand wash with warm soapy water and leave to dry.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 82,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_38f0309fcfec410d99d4d2c0d9666704~mv2.webp",
      // ... other images
    ],
    heading: "Culinare 3 Piece Knife Set",
    price: "£12.99",
    description: `This handy knife set is a must have for any kitchen. Super-sharp blades make slicing and dicing quick and easy. The set includes a 9cm paring knife, 10cm serrated paring knife and 14cm utility knife. Ergonomic handles with soft grip for maximum comfort, control and ease of use. To clean, simply pop them in the dishwasher.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 83,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d9379ac8e6ee4851afbc6857dd07fc10~mv2.webp",
      // ... other images
    ],
    heading: "Culinare 2 Piece Knife Set",
    price: "£10.99",
    description: `This handy knife set is a must have for any kitchen. Super-sharp blades make slicing and dicing quick and easy. The set includes a 9cm paring knife and 9cm serrated paring knife. Ergonomic handles with soft grip for maximum comfort, control and ease of use. To clean, simply pop them in the dishwasher.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 84,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_97b8203d3f454481804aa5de7c408e9a~mv2.jpeg/v1/fill/w_438,h_375,al_c,lg_1,q_80,enc_auto/5efbd7_97b8203d3f454481804aa5de7c408e9a~mv2.jpeg",
      // ... other images
    ],
    heading: "Picture Dial Alarm Clock - Pink",
    price: "£12.99",
    description: `Grace any feminine living space with this Picture Dial Alarm Clock in a choice of Butterfly or Floral designs. Clear white dial with bold numbers and luminous hands.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 85,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_1f8a899f6f204b748a69850092a8442f~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_1f8a899f6f204b748a69850092a8442f~mv2.jpeg",
      // ... other images
    ],
    heading: "LEGO Creator 3 in 1 Cyber Drone Building Set",
    price: "£5.99",
    description: `Price’s pack of 10 high quality white wax tealights are long burning, giving up to 5 hours of burn time!

 

    These are perfect for dinner parties or other occasions when 4 hours just isn’t long enough.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 86,
    category: "Home&Garden",
    image: [
      "https://static.wixstatic.com/media/5efbd7_2506eb38f0b24ff089cd256b75198faa~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_2506eb38f0b24ff089cd256b75198faa~mv2.jpeg",
      // ... other images
    ],
    heading: "Price's Household Candles 5 Pack",
    price: "£6.99",
    description: `Price’s pack of 5 wax household candles in white are perfect for regular use. Great value for money, these little dinner candles create a clean burn, which is smokeless and non-drip with no fragrance. Perfect for emergencies and everyday use.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 87,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_ab7634710da34c39a0989abe924692b9~mv2.webp",
      // ... other images
    ],
    heading: "Flymo FLY052 Cutting Disc Kit",
    price: "£12.99",
    description: `If the cutting disc for your lawnmower has snapped or the plastic blades are no longer cutting, then it may be time to replace the cutting disc with this quality replacement. It comes complete with two plastic blades to help bring your mower back to top performance.

 

    Please check model fit list to ensure this part is correct for your model.
    For ages 6 years and over.
    `,

    keyBenefits: [
      "    Type: FLY052",
      "Cutting disc",
      "Includes 2 Plastic blades",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 86,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_8c33594fb7f240f1b24d73fd3dbfa808~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_8c33594fb7f240f1b24d73fd3dbfa808~mv2.jpeg",
      // ... other images
    ],
    heading: "STIHL Face & Ear Protection with Nylon Mesh Visor",
    price: "£34.99",
    description: `With double headband to support the back of the head and ear defenders. With enlarged visor and additional forehead protection. Meets EN 352, EN 1731, SNR 30.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 87,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_8c0bcc698adc43aa9721fb0ffc6b2097~mv2.webp",
      // ... other images
    ],
    heading: "STIHL DYNAMIC Protect MS Cut-Protection Gloves",
    price: "£35.99",
    description: `Full grain leather/textile. Provide great comfort, ergonomic design. Ideal for forestry & arborist work.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 87,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_f17f0ef470fa4da09b9916bd2ff25da7~mv2.webp",
      // ... other images
    ],
    heading: "STIHL ThermoGrip FUNCTION Cold Protection",
    price: "£10.99",
    description: `STIHL ThermoGrip FUNCTION Cold Protection
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 88,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_fc281ecd033d4773adeee2690b104a12~mv2.webp",
      // ... other images
    ],
    heading: "TIHL PR 16 HANDYCUT Folding Pruning Saw",
    price: "£19.99",
    description: `Chrome-plated carbon steel blade, fold-away saw

 

    Strong and easy to use fold-away saw with growth cutting capability of up to 65 mm and lightweight 160g design. The saw is perfect for anyone looking for an easy to store yet durable tool for cutting.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 89,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_dadb48a129df4aa79ae497f38d69a616~mv2.webp",
      // ... other images
    ],
    heading: "Unigloves Pearl Powder Free Nitrile Gloves - Violet",
    price: "£10.99",
    description: `The Pearl range are high quality, medical-grade, powder-free nitrile gloves that can be used across a variety of settings for barrier protection and to effectively prevent cross-contamination. Designed with a beaded cuff and textured for superior grip, the Pearl range are also the ideal choice when double-gloving; the contrasting colours ensure that any accidental nicks or tears are immediately apparent.

    Colour coding to reduce the risk of cross-contamination
    Pearl has been designed with functionality in mind, by offering a series of colours which are suitable for colour-coding in the work environment to help avoid cross-contamination.
    
    An ideal choice for the Food Industry
    All fifteen Pearl nitrile gloves are suitable for use with all food types, including fatty foods, and therefore make the ideal choice for use in the food industry where the use of colour coding is proven to combat the risks associated with cross-contamination.
    `,

    keyBenefits: [
      "    Powder-Free Nitrile",
      "Micro-textured finger tips",
      "Medical Examination Grade",
      "Non-Sterile",
      "Beaded cuff",
      "Ambidextrous",
      "Latex Free",
      "AQL 1.5",
      "Pack of 100 Gloves",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 90,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_109c3126857f4f6089e82ed99c3a3159~mv2.webp",
      // ... other images
    ],
    heading: "Unigloves Pearl Powder Free Nitrile Gloves - Red",
    price: "£12.99",
    description: `The Pearl range are high quality, medical-grade, powder-free nitrile gloves that can be used across a variety of settings for barrier protection and to effectively prevent cross-contamination. Designed with a beaded cuff and textured for superior grip, the Pearl range are also the ideal choice when double-gloving; the contrasting colours ensure that any accidental nicks or tears are immediately apparent.

    Colour coding to reduce the risk of cross-contamination
    Pearl has been designed with functionality in mind, by offering a series of colours which are suitable for colour-coding in the work environment to help avoid cross-contamination.
    
    An ideal choice for the Food Industry
    All fifteen Pearl nitrile gloves are suitable for use with all food types, including fatty foods, and therefore make the ideal choice for use in the food industry where the use of colour coding is proven to combat the risks associated with cross-contamination.
    `,

    keyBenefits: [
      "    Powder-Free Nitrile",
      "Micro-textured finger tips",
      "Medical Examination Grade",
      "Non-Sterile",
      "Beaded cuff",
      "Ambidextrous",
      "Latex Free",
      "AQL 1.5",
      "Pack of 100 Gloves",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 91,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_9522942d173a4263a405c9fb2383a983~mv2.webp",
      // ... other images
    ],
    heading: "Unigloves Pearl Powder Free Nitrile Gloves - Green",
    price: "£12.99",
    description: `The Pearl range are high quality, medical-grade, powder-free nitrile gloves that can be used across a variety of settings for barrier protection and to effectively prevent cross-contamination. Designed with a beaded cuff and textured for superior grip, the Pearl range are also the ideal choice when double-gloving; the contrasting colours ensure that any accidental nicks or tears are immediately apparent.

    Colour coding to reduce the risk of cross-contamination
    Pearl has been designed with functionality in mind, by offering a series of colours which are suitable for colour-coding in the work environment to help avoid cross-contamination.
    
    An ideal choice for the Food Industry
    All fifteen Pearl nitrile gloves are suitable for use with all food types, including fatty foods, and therefore make the ideal choice for use in the food industry where the use of colour coding is proven to combat the risks associated with cross-contamination.
    `,

    keyBenefits: [
      "    Powder-Free Nitrile",
      "Micro-textured finger tips",
      "Medical Examination Grade",
      "Non-Sterile",
      "Beaded cuff",
      "Ambidextrous",
      "Latex Free",
      "AQL 1.5",
      "Pack of 100 Gloves",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 92,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_bbf93d6dd123491c9e574f3c53b0a9f6~mv2.jpg/v1/fill/w_500,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_bbf93d6dd123491c9e574f3c53b0a9f6~mv2.jpg",
      // ... other images
    ],
    heading: "Command Bath Hook with Water Resistant Strips Medium",
    price: "£10.99",
    description: `Easy to hang, the medium Command towel hook with water resistant adhesive strips will hold on to most surfaces including glass, mirror, tile, fiberglass, wood and painted surfaces, supporting a weight capacity of up to 3lb. Easily removed without leaving holes or residue they can be used again with water resistant replacement strips. Supplied in a pack of 2 hooks and 2 strips.

 

    Medium towel hooks and water resistant strips
    
    Strong hold and removes without residue or damage
    
    Easy to apply and remove
    
    Suitable for a variety of surfaces
    
    Supplied in a pack of 2 hooks and 2 strips
    
    Weight capacity: 3lb
    
    Size: medium
    
    Colour: Clear
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 93,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_681e5b6542c1479281255b758b847731~mv2.jpg/v1/fill/w_500,h_458,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_681e5b6542c1479281255b758b847731~mv2.jpg",
      // ... other images
    ],
    heading: "3M Command 6 Mini Clear Hooks with Clear Strips",
    price: "£8.99",
    description: `These 3M Command Mini Hooks can drastically reduce the amount of blemishes and small, yet unsightly abrasions on your walls and surfaces. Rendering nails a thing of the past, the high quality clips are strong, durable and remove cleanly from the wall when no longer needed. Using adhesive bases, these mini hooks are the perfect size for hanging keys, coats and accessories, providing space saving organisation at work or at home. Attaching easily to the wall with the included small strips, these hooks are transparent, rendering them neat and practical. This pack includes 6 hooks and 8 small adhesive strips.

 

    Adhesive hooks for a variety of hanging uses
    
    No need for nails or tools; simply affix with the included adhesive clips
    
    Holds strongly and removes cleanly without leaving marks on the walls
    
    Mini size ideal for keys, coats and accessories
    
    Transparent colour is unobtrusive
    
    Holds up to 225g
    
    Includes 6 hooks and 8 small strips
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 94,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_7b916fbaf40f4000aebfb6ac7b1081cb~mv2.jpg/v1/fill/w_500,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_7b916fbaf40f4000aebfb6ac7b1081cb~mv2.jpg",
      // ... other images
    ],
    heading: "33M Command Medium 2 Wire Hooks With Command Strips",
    price: "£8.99",
    description: `Adhesive hooks can drastically reduce the amount of blemishes and small, yet unsightly abrasions on your walls and surfaces. Rendering nails a thing of the past, the high quality 3M Command Medium Wire Hooks can hold a great deal of weight and provide a reliable addition to your home. Using adhesive bases, these hooks are designed for pictures and other decorative uses, but the strong wire construction can also hold a wide array of different items, including electrical appliances such as hairdryers, making these hooks ideal for hotels and other service industries. This pack includes 2 medium hooks and 4 adhesive strips.

 

    Adhesive hooks for a variety of hanging uses
    
    No need for nails or tools; simply affix with the included adhesive clips
    
    Holds strongly and removes cleanly without leaving marks on the walls
    
    Strong wire hook for hanging heavy duty items, such as electrical appliances
    
    Holds up to 1kg
    
    Includes: 2 medium hooks and 4 adhesive strips
    
    Colour: White
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 95,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_bfe9bb4bc1b54804ac942715bc6eb63d~mv2.jpg/v1/fill/w_500,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_bfe9bb4bc1b54804ac942715bc6eb63d~mv2.jpg",
      // ... other images
    ],
    heading: "Clinell Wipes Bucket 225",
    price: "£12.99",
    description: `Look no further for medical grade antibacterial wipes that also include detergent properties, meaning you only need a single wipe to clean surfaces. Clinell Wipes Bucket 225, from UK manufacturer Gama Healthcare, are so trusted that they are used in 90% of healthcare settings in the NHS.

 

    Keeping covid-19 safe
    
    If you are worried about keeping viruses at bay and protecting your workplace, then get your stock today and set up a regular supply of Clinell Wipes Bucket 225. In short, the main feature of the Clinell Wipes Bucket 225 is that they are clinically proven to kill at least 99.99% of pathogens after 10 seconds, norovirus within 1 minute, Covid-19 in 30 seconds and reduce instances of MRSA by 55%.
    
     
    
    Clinell Wipes Bucket 225 Key features
    
    Bulk bucket for high use areas
    
    Kills Covid-19 in 30 seconds from wiping
    
    9 out of 10 NHS hospitals use them
    
    Detergent and antibacterial wipe in one
    
    EN14476 compliant
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 96,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_a531a66fee824cfe9f98a855814a00d9~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_a531a66fee824cfe9f98a855814a00d9~mv2.jpeg",
      // ... other images
    ],
    heading: "Clinell Universal Wipes 100 Tub",
    price: "£7.99",
    description: `Look no further for medical grade antibacterial wipes that also include detergent properties, meaning you only need a single wipe to clean surfaces. Clinell wipes tub 100, from UK manufacturer Gama Healthcare, are so trusted that they are used in 90% of healthcare settings in the NHS. Partly, this is because they have been designed by doctors who know what they need in the most critical workplace situations.

 

    Key Features
    
    Tough tub for busy cleaning
    
    Kills Covid-19 in 30 seconds from wiping
    
    9 out of 10 NHS hospitals use them
    
    Detergent and antibacterial wipe in one
    
    EN14476 compliant
    
    Keeping infection out of healthcare settings is essential, which is why the rigorous processes have been followed to clinically prove the effectiveness against viruses and bacteria.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 97,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_bddc61b7b7b144aabaf0dc09480ef307~mv2.jpg/v1/fill/w_500,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_bddc61b7b7b144aabaf0dc09480ef307~mv2.jpg",
      // ... other images
    ],
    heading: "Clinell Spray 500ml",
    price: "£8.99",
    description: `Clinell spray has been developed by doctors to instantly kill 99.999% of pathogens and is also proven to kill Covid-19 in just 30 seconds.

 

    Key Features
    
    Kills at least 99.99% of pathogens
    
    Effective from 10 seconds
    
    Perfect for workplaces and healthcare settings
    
    Exceptional material compatibility
    
    Used in 9 out of 10 NHS trusts
    
    The Clinell Spray is fast becoming a workplace must for any responsible employer.
    
     
    
    It offers a superior level of effectiveness against germs and is fast acting, starting to work in just 10 seconds. The Clinell Sprays (Universal Range), to our knowledge, are the only brand of this type of disinfectant cleaner suitable for CPAP and non-invasive ventilator masks without causing them damage or risks to health.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 98,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_ee6e3141464a474fbe83845785734007~mv2.jpg/v1/fill/w_450,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_ee6e3141464a474fbe83845785734007~mv2.jpg",
      // ... other images
    ],
    heading: "Clinell Universal Disinfectant Spray 60ml",
    price: "£8.99",
    description: `Fast and effective

    99.99% of the germs are killed
    
    Small carrying sizes
    
    Simple, easy and reliable
    
    Cleaning and disinfection on the road
    
    The main feature of the Clinell Universal Spray 60ml is that they are clinically proven to kill at least 99.99% of pathogens after 10 seconds, norovirus within one minute and reduce instances of MRSA by 55%. They are even proven to kill the Covid-19 (SARS-CoV-2) virus in just 30 seconds.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 99,
    category: "Industrial&Scientific",
    image: [
      "https://static.wixstatic.com/media/5efbd7_c8ea8070602a4ecf8d52bdf23e44d2be~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_c8ea8070602a4ecf8d52bdf23e44d2be~mv2.png",
      // ... other images
    ],
    heading: "Clinell Wipes 200 Packs",
    price: "£8.99",
    description: `MULTI-PURPOSE – Clinell’s Universal Wipes clean and disinfect all surfaces in a single step, replacing the need for different types of wipes and surface cleaners.

    DERMATOLOGICALLY TESTED – Contains aloe vera and moisturisers; Safe on all washable surfaces, can be used without gloves and and non bleaching.
    
    EFFECTIVE IN 10 SECONDS – Clinell’s disinfectant wipes are fast and effective, proven to kill bacteria in 10 seconds in dirty conditions.
    
    KILLS AT LEAST 99.99 PERCENT – Clinell’s cleaning wipes are effective against a wide range of micro-organisms including MSRA, HIV, FLU, and more from 30 seconds.
    
    PREMIUM PACKAGING – Clinell’s disinfecting wipes are dispensed one at a time, with a moisture lock lid, so the next wipe does not dry out which commonly occurs with pack dispensers.
    
    DESIGNED BY DOCTORS – Trusted by healthcare professionals and the NHS
    
    Clinell wipes patented near-neutral pH formula ensures exceptional material compatibility and is proven to kill at least 99.99% of pathogens after 10 seconds, norovirus within one minute and reduce instances of MRSA by 55%.
    `,

    keyBenefits: ["N/A"],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 100,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_51ddfd79c5fd4124b6f286e71d58161b~mv2.jpeg/v1/fill/w_284,h_425,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_51ddfd79c5fd4124b6f286e71d58161b~mv2.jpeg",
      // ... other images
    ],
    heading: "AA Car Essentials 12V Compact Tyre Inflator",
    price: "£14.99",
    description: `Correct tyre pressures provide greater safety, longer tyre life and better fuel consumption. The AA Tyre Inflator is compact yet powerful, ideal for travel. In the pack is an extendable air-hose and 3 metre power cord which plugs directly into the car 12V socket.
    `,

    keyBenefits: [
      "    Compact and light – ideal for travel",
      "4 inch flexible air hose",
      "3m power cord",
      "PSI, BAR and KPA settings",
      "Max pressure 80PSI",
      "12V socket adaptor",
      "Internal LED light",
      "Easy to attach screw valve",
      "Includes adaptors for inflatables, such as sport balls, air beds, etc",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 101,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_e5c55e926f484526b4ada410c9377fab~mv2.png/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_e5c55e926f484526b4ada410c9377fab~mv2.png",
      // ... other images
    ],
    heading: "Meguiars Ultimate Compound 450ml",
    price: "£18.99",
    description: `The Meguiar's Ultimate Compound has new abrasive technology, which quickly removes stubborn oxidation, stains, bird dropping blemishes and other sub-surface defects while polishing the surface to a mirror finish. Unlike traditional rubbing and polishing compounds that scour the surface, this new clear coat safe, micro-abrasives, produce an amazingly clear finish that is free from scratches, hazing and swirls.
    `,

    keyBenefits: [
      "New abrasive technology for a mirror finish",
      "Removes stubborn oxidation, stains, bird dropping blemishes and other sub-surface defects",
      "Clear coat safe",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 102,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_3d270c1e6832482080c73d167af016c0~mv2.png/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_3d270c1e6832482080c73d167af016c0~mv2.png",
      // ... other images
    ],
    heading: "Meguiars Ultimate Wash and Wax 16oz",
    price: "£14.99",
    description: `The Meguiars Ultimate Wash and Wax 16oz is designed to provide protection and shine while you wash your vehicle through its synthetic polymers and premium carnauba wax. Compatible with all other Meguiars wash and waxes, use in-between regular waxing and watch your car boast protection, glossiness and shine!
    `,

    keyBenefits: [
      "Hybrid carnauba/polymer wax protection",
      "Incredible sudsing action safely lifts dirt and grime",
      "Enhanced gloss and shine in one easy step",
      "Clear coat safe surfactants gently clean the paint",
      "pH neutral formula",
      "Enhances gloss and shine while you wash",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 103,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_87ddd093e3aa4b9eb5dd7e4499cc836d~mv2.png/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_87ddd093e3aa4b9eb5dd7e4499cc836d~mv2.png",
      // ... other images
    ],
    heading: "Meguiars Lambs Wool Wash Mitt",
    price: "£19.99",
    description: `The Meguiars Lambs Wool Wash Mitt is perfect for pampering your car and maintaining its finish. It is much less abrasive than a conventional sponge or wash mitt. The reverse side features a special non-abrasive bug remover.
    `,

    keyBenefits: [
      "Soft and gentle lambs wool",
      "Reduces the risk of scratching and is clear-coat safe",
      "Ideal for sensitive finishes that mark easily",
      "Lightweight and easy to use",
      "Natural Lambs Wool product",
      "Deep pile to keep grit & dirt away from the paint",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 104,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_6ce88ac755454e428882a63bb1984dfc~mv2.png/v1/fill/w_500,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efbd7_6ce88ac755454e428882a63bb1984dfc~mv2.png",
      // ... other images
    ],
    heading: "Meguiars Super Thick Microfibre Car Wash Mitt",
    price: "£14.99",
    description: `Get that showroom finish for your car with the Meguiars Super Thick Microfibre Car Wash Mitt. The microfibre loops lifts dirt and grime easily to prevent you from scratching your car.

 

    This super-soft Microfibre Mitt provides a gentle wash action. The high-quality wash mitt provides the ultimate softness and surface protection.
    
    The comfort-fit cuff and soft inner lining make this wash mitt a pleasure to use. This super thick mitt can absorb up to ten times its weight in the wash solution, delivering the ultimate finish on all automobile surfaces.
    `,

    keyBenefits: [
      "Machine washable",
      "Swirl free washing",
      "8 inch x 10 inch for great coverage",
      "Absorbent microfiber carries more suds & water",
      "Can be used with traditional car wash soap or dry with the Meguiar's® Quik Detailer® Mist and Wipe - A3316",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 105,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_f648bf9934fe43108474bfe2f7bf768f~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_f648bf9934fe43108474bfe2f7bf768f~mv2.jpeg",
      // ... other images
    ],
    heading: "Car Pride Synthetic Car Cleaning Sponges - Pack of 3",
    price: "£4.99",
    description: `Car Pride Synthetic Car Cleaning Sponges - Pack of 3
    `,

    keyBenefits: [
      "Made from synthetic polyurethane foam",
      "Highly absorbent",
      "Easy foaming",
      "Leaves bodywork streak and scratch free",
      "Sponge Size: H 4.5cm x W 10.5cm x L 18cm (approx)",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 106,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_d03cbd69410d4eef988d1f7dbf24a4db~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_d03cbd69410d4eef988d1f7dbf24a4db~mv2.jpeg",
      // ... other images
    ],
    heading: "Car Pride Non-Scratch Alloy Wheel Cleaning Brush",
    price: "£2.99",
    description: `Car Pride Non-Scratch Alloy Wheel Cleaning Brush
    `,

    keyBenefits: [
      "Brush cleans in between spokes effortlessly",
      "Removes brake dust, dirt and and other muck quickly",
      "Special non-scratch bristles allow pressure to be applied without marking",
      "Suitable for use with soaps and shampoos",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },

  {
    id: 107,
    category: "AutoMotive",
    image: [
      "https://static.wixstatic.com/media/5efbd7_31bdde0d3bcf47cd9dafbcbbdd807010~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5efbd7_31bdde0d3bcf47cd9dafbcbbdd807010~mv2.jpeg",
      // ... other images
    ],
    heading: "Car Pride Bodywork Paint Scratch Remover Pen",
    price: "£4.99",
    description: `Car Pride Bodywork Paint Scratch Remover Pen
    `,

    keyBenefits: [
      "Removes light scratches quickly and easily",
      "Suitable for use on any colour of paintwork",
      "Leaves a professional water resistant finish",
      "Not suitable for deep scratches",
    ],
    composition: `N/A`,

    nutritionalInfo: "N/A",
  },
];

export default data;
