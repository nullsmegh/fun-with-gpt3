const types = ["story", "poem", "song", "report", "dialogue"];

const subjects  = ["autobots", "cookie monsters", "avengers", "storm troopers"];

const actions = ["having lunch", "fighting", "playing fortnite", "shoveling ice"];

function getRandomItem(array: Array<string>): string {
	return array[array.length * Math.random() | 0];
}

function getPromptIdea(): string {

	const subject_1 = getRandomItem(subjects);
	const subject_2 = getRandomItem(subjects.filter(subject => subject !== subject_1));

	return `Write a ${getRandomItem(types)} about ${subject_1} ${getRandomItem(actions)} with ${subject_2}.`;

}

export { getPromptIdea };