// Character-themed workout data
export const characters = {
  mandalorian: {
    id: 'mandalorian',
    name: 'The Mandalorian',
    subtitle: 'This Is The Way',
    description: 'Train like a legendary bounty hunter. Strength, endurance, and combat readiness.',
    primaryColor: '#8B7355',
    secondaryColor: '#4A3728',
    accentColor: '#C9A87C',
    icon: '🪖',
    emoji: '⚔️',
  },
  masterchief: {
    id: 'masterchief',
    name: 'Master Chief',
    subtitle: 'Spartan-117',
    description: 'Super soldier conditioning. Push beyond human limits with military precision.',
    primaryColor: '#5B7744',
    secondaryColor: '#2D3A24',
    accentColor: '#9DC183',
    icon: '🎖️',
    emoji: '💚',
  },
  batman: {
    id: 'batman',
    name: 'Batman',
    subtitle: 'The Dark Knight',
    description: 'Peak human performance. Agility, martial arts, and relentless determination.',
    primaryColor: '#2C2C54',
    secondaryColor: '#1A1A2E',
    accentColor: '#FFD700',
    icon: '🦇',
    emoji: '🖤',
  },
};

// Workout exercise pools for each character
const exercisePools = {
  mandalorian: {
    strength: [
      { name: 'Beskar Deadlifts', reps: '5x5', description: 'Heavy deadlifts to build foundational strength', icon: '🏋️' },
      { name: 'Jetpack Squats', reps: '4x12', description: 'Deep squats with explosive jump at top', icon: '🦵' },
      { name: 'Rifle Hold Plank', reps: '3x60s', description: 'Plank position with arms extended forward', icon: '💪' },
      { name: 'Mandalore Press', reps: '4x10', description: 'Overhead shoulder press with controlled descent', icon: '🏋️' },
      { name: 'Bounty Hunter Rows', reps: '4x12', description: 'Bent over rows for back strength', icon: '💪' },
      { name: 'Armor Carry', reps: '3x100m', description: 'Farmer walks with heavy weights', icon: '🚶' },
    ],
    cardio: [
      { name: 'Desert Sprint Intervals', reps: '8x30s', description: 'Sprint 30s, walk 30s recovery', icon: '🏃' },
      { name: 'Canyon Climb', reps: '20 min', description: 'Stair climbing or incline treadmill', icon: '⛰️' },
      { name: 'Escape Pod Burpees', reps: '5x20', description: 'Full burpees with jump and push-up', icon: '💥' },
      { name: 'Pursuit Running', reps: '30 min', description: 'Steady state running at moderate pace', icon: '🏃' },
    ],
    combat: [
      { name: 'Blaster Draw Practice', reps: '3x20', description: 'Quick squat-to-stand with arm extension', icon: '🎯' },
      { name: 'Melee Combat Combos', reps: '4x3min', description: 'Shadow boxing with kicks and elbows', icon: '👊' },
      { name: 'Grappling Hook Pulls', reps: '4x15', description: 'Pull-ups with grip variations', icon: '🧗' },
      { name: 'Thermal Detonator Throws', reps: '3x20', description: 'Medicine ball slams and throws', icon: '💣' },
    ],
    core: [
      { name: 'Razor Crest Crunches', reps: '4x25', description: 'Bicycle crunches with controlled motion', icon: '🔥' },
      { name: 'Foundling Carries', reps: '3x45s', description: 'Weighted front carry hold', icon: '👶' },
      { name: 'Clan Sit-ups', reps: '4x20', description: 'Full sit-ups touching toes', icon: '💪' },
      { name: 'Covert Twists', reps: '3x30', description: 'Russian twists with weight', icon: '🔄' },
    ],
  },
  masterchief: {
    strength: [
      { name: 'Spartan Deadlifts', reps: '5x5', description: 'Maximum weight, perfect form', icon: '🏋️' },
      { name: 'MJOLNIR Squats', reps: '5x8', description: 'Heavy back squats simulating armor weight', icon: '🦵' },
      { name: 'Covenant Crushers', reps: '4x12', description: 'Chest press with explosive push', icon: '💪' },
      { name: 'Energy Sword Lunges', reps: '4x20', description: 'Walking lunges with rotation', icon: '⚔️' },
      { name: 'Warthog Push', reps: '3x30s', description: 'Sled push or wall push holds', icon: '🚗' },
      { name: 'Gravity Hammer Swings', reps: '4x15', description: 'Kettlebell swings full extension', icon: '🔨' },
    ],
    cardio: [
      { name: 'ODST Drop Training', reps: '10x20s', description: 'High intensity intervals - all out effort', icon: '🪂' },
      { name: 'Halo Ring Run', reps: '5km', description: 'Distance running at steady pace', icon: '🏃' },
      { name: 'Combat Evolved Circuit', reps: '4 rounds', description: 'Burpees, mountain climbers, jumping jacks', icon: '💥' },
      { name: 'Pelican Sprint', reps: '6x100m', description: 'Full speed sprints with walk back recovery', icon: '✈️' },
    ],
    combat: [
      { name: 'Assault Rifle Holds', reps: '3x90s', description: 'Plank with arms extended, simulating rifle hold', icon: '🔫' },
      { name: 'Melee Strike Training', reps: '5x3min', description: 'Heavy bag work with power shots', icon: '👊' },
      { name: 'Shield Bash Pushups', reps: '4x15', description: 'Explosive clap push-ups', icon: '🛡️' },
      { name: 'Grenade Toss', reps: '4x20', description: 'Medicine ball overhead throws', icon: '💣' },
    ],
    core: [
      { name: 'Cortana Core', reps: '4x30', description: 'Dead bugs with perfect control', icon: '🤖' },
      { name: 'UNSC Plank Protocol', reps: '4x75s', description: 'Plank variations - front, side, reverse', icon: '🔥' },
      { name: 'Flood Fighter Twists', reps: '4x25', description: 'Cable or band woodchops', icon: '🔄' },
      { name: 'Infinity Leg Raises', reps: '4x20', description: 'Hanging or lying leg raises', icon: '🦵' },
    ],
  },
  batman: {
    strength: [
      { name: 'Batcave Bench Press', reps: '5x5', description: 'Heavy bench for raw pushing power', icon: '🏋️' },
      { name: 'Gotham Deadlifts', reps: '5x5', description: 'Conventional deadlifts for total body strength', icon: '💪' },
      { name: 'Bane Breaker Squats', reps: '4x10', description: 'Front squats with pause at bottom', icon: '🦵' },
      { name: 'Grapnel Gun Rows', reps: '4x12', description: 'Cable or barbell rows for climbing strength', icon: '🧗' },
      { name: 'Wayne Tower Dips', reps: '4x15', description: 'Weighted parallel bar dips', icon: '💪' },
      { name: 'Arkham Arms', reps: '4x12', description: 'Bicep curls and tricep extensions superset', icon: '💪' },
    ],
    cardio: [
      { name: 'Rooftop Sprints', reps: '10x20s', description: 'High intensity sprint intervals', icon: '🏃' },
      { name: 'Batmobile Chase', reps: '25 min', description: 'Cycling or rowing at varied intensity', icon: '🚗' },
      { name: 'Gotham Parkour', reps: '20 min', description: 'Box jumps, vault overs, agility ladder', icon: '🏃' },
      { name: 'Nightwing Nimble', reps: '4 rounds', description: 'Jump rope - 3 min work, 1 min rest', icon: '⚡' },
    ],
    combat: [
      { name: 'Dark Knight Strikes', reps: '6x3min', description: 'Boxing combinations on heavy bag', icon: '👊' },
      { name: 'Ninja Training', reps: '4x20', description: 'Burpee to high kick combinations', icon: '🥷' },
      { name: 'Batarang Throws', reps: '4x15', description: 'Rotational medicine ball throws', icon: '🦇' },
      { name: 'League of Shadows Drill', reps: '5 rounds', description: 'Shadow fighting with full movement', icon: '👤' },
    ],
    core: [
      { name: 'Batsuit Core', reps: '4x30', description: 'Ab wheel rollouts or TRX fallouts', icon: '🔥' },
      { name: 'Cave Crawl Planks', reps: '4x60s', description: 'Moving planks - forward, back, lateral', icon: '🕷️' },
      { name: 'Vigilante V-ups', reps: '4x20', description: 'Full V-ups touching toes', icon: '💪' },
      { name: 'Alfred\'s Abs', reps: '3x25', description: 'Weighted decline sit-ups', icon: '🎩' },
    ],
    flexibility: [
      { name: 'Contortionist Stretch', reps: '15 min', description: 'Full body stretching routine', icon: '🧘' },
      { name: 'Cape Flow Yoga', reps: '20 min', description: 'Dynamic yoga flow for mobility', icon: '🧘' },
      { name: 'Detective Meditation', reps: '10 min', description: 'Breathing exercises and mental focus', icon: '🧠' },
    ],
  },
};

// Generate a deterministic workout for a given date and character
export const generateDailyWorkout = (characterId, date) => {
  const pool = exercisePools[characterId];
  if (!pool) return null;

  // Use date as seed for consistent workouts
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const dayOfWeek = date.getDay();
  const seed = dayOfMonth + month * 31;

  // Different workout focus based on day of week
  const workoutTypes = {
    0: { name: 'Active Recovery', focus: ['flexibility', 'core'], intensity: 'Light' },
    1: { name: 'Strength Day', focus: ['strength', 'core'], intensity: 'Heavy' },
    2: { name: 'Combat Training', focus: ['combat', 'cardio'], intensity: 'Intense' },
    3: { name: 'Full Body Power', focus: ['strength', 'combat'], intensity: 'Heavy' },
    4: { name: 'Cardio Blitz', focus: ['cardio', 'core'], intensity: 'High' },
    5: { name: 'Warrior Training', focus: ['strength', 'combat', 'core'], intensity: 'Maximum' },
    6: { name: 'Endurance Day', focus: ['cardio', 'core'], intensity: 'Moderate' },
  };

  const todayType = workoutTypes[dayOfWeek];
  const exercises = [];

  todayType.focus.forEach((category, categoryIndex) => {
    const categoryPool = pool[category] || pool.strength;
    const numExercises = category === 'flexibility' ? 2 : 3;
    
    for (let i = 0; i < numExercises && i < categoryPool.length; i++) {
      // Rotate through exercises based on seed
      const exerciseIndex = (seed + i + categoryIndex * 3) % categoryPool.length;
      exercises.push({
        ...categoryPool[exerciseIndex],
        category: category.charAt(0).toUpperCase() + category.slice(1),
      });
    }
  });

  // Calculate estimated duration
  const duration = exercises.length * 8 + 10; // ~8 min per exercise + warmup

  return {
    date: date.toISOString(),
    dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
    workoutName: todayType.name,
    intensity: todayType.intensity,
    exercises,
    estimatedDuration: `${duration} min`,
    motivationalQuote: getMotivationalQuote(characterId, dayOfMonth),
  };
};

const motivationalQuotes = {
  mandalorian: [
    "This is the way.",
    "I can bring you in warm, or I can bring you in cold.",
    "Weapons are part of my religion.",
    "I'm a Mandalorian. Weapons are part of my religion.",
    "No living thing has seen me without my helmet.",
    "Wherever I go, he goes.",
    "I have spoken.",
    "Honor is worth more than credits.",
    "A Mandalorian never removes his helmet.",
    "The Creed is the way.",
    "Bounty hunting is a complicated profession.",
    "I like those odds.",
    "I'm simply being paid to protect.",
    "A warrior knows no fear.",
    "The armor makes the Mandalorian.",
    "Trust in the beskar.",
    "Victory through strength.",
    "The clan survives.",
    "No surrender. No retreat.",
    "Forge yourself like beskar.",
    "Pain is temporary. Glory is forever.",
    "Train like your life depends on it.",
    "The hunt never ends.",
    "Discipline is the path.",
    "Earn your armor.",
    "Stand with your clan.",
    "Every rep brings honor.",
    "The coward's way leads nowhere.",
    "Strength is earned, not given.",
    "Rise and become legendary.",
    "This workout is the way.",
  ],
  masterchief: [
    "Wake me when you need me.",
    "I need a weapon.",
    "Spartans never die.",
    "Finish the fight.",
    "Thought I'd try shooting my way out.",
    "Sir, permission to leave the station... to give the Covenant back their bomb.",
    "Don't make a girl a promise you can't keep.",
    "Cortana, all I need to know is did we lose them?",
    "I don't keep it loaded, son. You'll have to find ammo as you go.",
    "Master Chief, mind telling me what you're doing?",
    "Sir, finishing this fight.",
    "Not yet.",
    "We go together.",
    "One final effort.",
    "You know me. When I make a promise...",
    "Luck.",
    "Negative. I have the gun.",
    "The mission's not over.",
    "Spartans don't quit.",
    "Augmentation is just the beginning.",
    "Train beyond human limits.",
    "Your body is your weapon.",
    "No room for weakness.",
    "The UNSC needs soldiers.",
    "Become the weapon.",
    "Pain is weakness leaving the body.",
    "One more rep for humanity.",
    "Failure is not an option.",
    "Protect Earth at all costs.",
    "You were born for this.",
    "Legendary difficulty awaits.",
  ],
  batman: [
    "I am vengeance. I am the night. I am Batman.",
    "It's not who I am underneath, but what I do that defines me.",
    "Why do we fall? So we can learn to pick ourselves up.",
    "I won't kill you, but I don't have to save you.",
    "A hero can be anyone.",
    "I'm whatever Gotham needs me to be.",
    "Sometimes the truth isn't good enough. Sometimes people deserve more.",
    "The night is darkest just before the dawn.",
    "Endure. You can be the outcast.",
    "People need dramatic examples to shake them out of apathy.",
    "I wear a mask. And that mask is not to hide who I am, but to create who I am.",
    "Everything's impossible until somebody does it.",
    "You either die a hero or live long enough to see yourself become the villain.",
    "I have one power. I never give up.",
    "Men fear most what they cannot see.",
    "Without warning, pain will find you.",
    "Criminals are a superstitious, cowardly lot.",
    "The training is everything.",
    "Become more than just a man.",
    "Fear is a tool. Use it.",
    "Push past every limit.",
    "The body achieves what the mind believes.",
    "No shortcuts to greatness.",
    "Discipline defeats talent.",
    "Your limits are illusions.",
    "Be the symbol.",
    "Rise from the darkness.",
    "Every night I train.",
    "Pain is my teacher.",
    "Gotham needs your strength.",
    "Forge yourself in the shadows.",
  ],
};

const getMotivationalQuote = (characterId, dayOfMonth) => {
  const quotes = motivationalQuotes[characterId] || motivationalQuotes.mandalorian;
  return quotes[(dayOfMonth - 1) % quotes.length];
};

// Generate full month of workouts
export const generateMonthWorkouts = (characterId, year, month) => {
  const workouts = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    workouts.push(generateDailyWorkout(characterId, date));
  }

  return workouts;
};
