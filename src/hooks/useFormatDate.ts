function useFormatDate() {
	/**
	 * @param {Date | string} unFormattedDate unformatted date
	 * @return {string | null} if unFormattedDate cannot be converted to `Date` than will return `-----` else formattedDate
	 */
	return (unFormattedDate: Date | string): string | null => {
		const date = new Date(unFormattedDate).getTime();

		if (!date) return "------";

		return new Intl.DateTimeFormat(navigator.language).format(date);
	};
}

export default useFormatDate;
