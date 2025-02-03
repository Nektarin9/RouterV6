
export function mapCharacters(character) {
	return {
		id: character._id,
		name: character.name,
		status: character.status,
		species: character.species,
		type: character.type,
		gender: character.gender,
		image: character.image,
		created: character.created,
	};
}
