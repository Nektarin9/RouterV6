
export function mapEpisodes(episodes) {
	return {
		id: episodes._id,
		name: episodes.name,
		air_date: episodes.air_date,
		episode: episodes.episode,
		created: episodes.created,

	};
}
