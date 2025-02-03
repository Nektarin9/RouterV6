
export function mapLocation(location) {
	return {
		id: location._id,
		name: location.name,
		type: location.type,
		dimension: location.dimension,
		created: location.created,

	};
}
