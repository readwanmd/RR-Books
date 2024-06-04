function getBookCountAndUserRoles(data) {
	const bookCount = data.books.length;

	const userRolesCount = {
		admin: 0,
		staff: 0,
		user: 0,
	};

	data.users.forEach((user) => {
		if (user.role in userRolesCount) {
			userRolesCount[user.role]++;
		}
	});

	return {
		bookCount: bookCount,
		userRolesCount: userRolesCount,
	};
}

export default getBookCountAndUserRoles;
