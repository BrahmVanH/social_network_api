const usernames = [
	'clever_octopus',
	'sassy_squirrel',
	'sleepy_sloth',
	'happy_hummingbird',
	'grumpy_giraffe',
	'shy_snake',
	'friendly_fish',
	'curious_cat',
	'playful_puppy',
	'smart_salamander',
	'brave_bear',
	'strong_tiger',
	'graceful_gazelle',
	'fast_cheetah',
	'colorful_butterfly',
	'beautiful_bee',
	'dapper_dogwood',
	'lovely_lily',
	'sweet_sunflower',
	'sparkling_star',
	'magical_moon',
	'PixelPenguin123',
	'LunarLioness22',
	'MountainMustang55',
	'ElectricEagle77',
	'CrimsonCobra99',
	'NeonNinja12',
	'GoldenGorilla34',
	'SapphireSiren88',
	'JadeJaguar11',
	'EmeraldElephant66',
	'PlatinumPanther44',
	'DiamondDragon99',
	'TopazTiger21',
	'BronzeBear77',
	'RubyRaccoon12',
	'OpalOtter88',
	'AmberAntelope55',
	'AquamarineArmadillo34',
	'PearlPanda99',
	'GarnetGazelle11',
	'PeridotPuma66',
	'QuartzQuail44',
	'TurquoiseToucan21',
	'CopperCrocodile77',
	'OnyxOcelot12',
	'SilverSeahorse88',
	'MalachiteMonkey55',
	'ObsidianOwl34',
	'ZirconZebra99',
	'TanzaniteTurtle11',
];

const emailAddresses = [
	'jennifersmith1234@gmail.com',
	'mikebrown5678@yahoo.com',
	'kellyjohnson4321@hotmail.com',
	'davidsanchez8765@outlook.com',
	'laurenwhite2468@aol.com',
	'jasonlee1357@icloud.com',
	'samanthajones9876@protonmail.com',
	'ryanmiller4321@gmx.com',
	'emilytaylor5678@mail.com',
	'josephsmith2468@yandex.com',
	'annalee1357@inbox.com',
	'patrickdavis8765@zoho.com',
	'kristinawilson9876@fastmail.com',
	'johnrobinson4321@tutanota.com',
	'carolynmitchell2468@mailbox.org',
	'andrewmurray1357@pm.me',
	'aliciabrown8765@hushmail.com',
	'matthewgreen5678@runbox.com',
	'oliviaturner2468@mailinator.com',
	'kevinmartin1357@mailnesia.com',
	'johndoe1234@gmail.com',
	'janejones5678@yahoo.com',
	'alexsmith4321@hotmail.com',
	'davidsanchez8765@outlook.com',
	'laurawilson2468@aol.com',
	'jasonlee1357@icloud.com',
	'samanthajones9876@protonmail.com',
	'ryanmiller4321@gmx.com',
	'emilytaylor5678@mail.com',
	'josephsmith2468@yandex.com',
	'annalee1357@inbox.com',
	'patrickdavis8765@zoho.com',
	'kristinawilson9876@fastmail.com',
	'johnrobinson4321@tutanota.com',
	'carolynmitchell2468@mailbox.org',
	'andrewmurray1357@pm.me',
	'aliciabrown8765@hushmail.com',
	'matthewgreen5678@runbox.com',
	'oliviaturner2468@mailinator.com',
	'kevinmartin1357@mailnesia.com',
	'justinjones4321@protonmail.com',
	'bethanydavis8765@tutanota.com',
	'ethanparker2468@mail.com',
	'sophiawalker1357@yandex.com',
	'michaeljackson9876@icloud.com',
	'amandasmith2468@gmail.com',
	'williamturner1357@outlook.com',
	'victoriaadams5678@yahoo.com',
	'charlesbaker4321@aol.com',
];

const thoughts = [
	'Wow, I just learned that light is both a wave and a particle!',
	"I can't believe how intricate and complex the human brain is!",
	'I never realized how much energy is released during a chemical reaction.',
	'Did you know that there are more bacterial cells in our body than human cells?',
	'The concept of quantum mechanics is mind-blowing!',
	"I'm amazed by how DNA can code for such a wide variety of traits and characteristics.",
	"The periodic table is so fascinating, there's so much to learn!",
	'I just learned about the properties of sound waves and how they travel through different mediums.',
	'The concept of natural selection and evolution is really fascinating and explains so much about the diversity of life on Earth.',
	'I never realized how much the pH of a solution can affect chemical reactions.',
	'The study of thermodynamics has really opened my eyes to how energy flows and changes in different systems.',
	'The way that the circulatory system works to pump blood throughout the body is really cool!',
	'I just learned about the different types of chemical bonds and how they form between atoms.',
	'The study of genetics has really helped me understand the inheritance of traits and how they are passed down through generations.',
	'The concept of relativity and how time and space are intertwined is really mind-bending!',
	"I can't believe how much I've learned about the different systems in the human body, from the respiratory system to the digestive system.",
	'I never realized how much energy is required to break chemical bonds and form new ones.',
	'The study of electricity and magnetism is really fascinating, and it has so many practical applications in our daily lives.',
	'I just learned about the different types of cells in living organisms, from prokaryotic to eukaryotic.',
	'The concept of entropy and how it relates to disorder and chaos is really interesting!',
];

const reactions = [
	"Wow, that's really interesting!",
	'I had no idea about that, thanks for sharing!',
	'I love learning about science, this is great!',
	'This is so cool, I want to learn more!',
	'I never thought about it that way, thanks for sharing your perspective.',
	"I'm really impressed, you seem to really understand this topic.",
	"Thank you for posting this, I'm always eager to learn more about science.",
	"That's a great point, I hadn't considered that before.",
	"I'm inspired to do some research on this topic now.",
	"I'm so glad you posted this, it's fascinating.",
	'I completely agree with your thoughts on this topic.',
	'This is making me rethink what I thought I knew about science.',
	"I'm blown away by your knowledge of this subject.",
	'I appreciate your passion for science and sharing it with us.',
	"I'm curious to hear more about your thoughts on this topic.",
	'This is really making me think about the world in a new way.',
	'Your post is so thought-provoking, thank you for sharing.',
	"I'm excited to see where your interest in science takes you.",
	'This post has opened my eyes to a whole new area of science I want to explore.',
	"I'm grateful to be a part of a community where we can share and learn from each other like this.",
];

const getRandomArrItem = (array) =>
	array[Math.floor(Math.random() * array.length)];

const getUsernames = (int) => {
	usernamesArray = [];
	for (i = 0; i < int; i++) {
		usernames.push(usernames[i]);
	}
  return usernamesArray;
};

const getEmails = (int) => {
	emailsArray = [];
	for (i = 0; i < int; i++) {
		emailsArray.push(emailAddresses[i]);
	}
  return emailsArray;
};

const getRandomThought = () => {
	`${getRandomArrItem(thoughts)}`;
};

const getRandomReaction = () => {
	`${getRandomArrItem(reactions)}`;
};

const getRandomUser = (int) => {
	console.log('getting random user...');

	users = [];

	for (let i = 0; i < int; i++) {
		console.log('adding user to array...');
		users.push({
			username: getRandomArrItem(usernames),
			email: getRandomArrItem(emailAddresses),
		});
	}
};

// user: username & email
// thought: thoughtText & username
module.exports = {
	getUsernames,
	getEmails,
	getRandomThought,
	getRandomReaction,
};
