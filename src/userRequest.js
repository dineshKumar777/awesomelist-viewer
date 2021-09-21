import useSWR from "swr";

const baseUrl = "https://raw.githubusercontent.com/";

const fetcher = async url => {
	const res = await fetch(url)
	if (res.ok) {
		return res.text();
	}

	//Github contains both README.md and readme.md
	//for lowercase function
	const lowerres = await fetch(url.toLowerCase());
	if (lowerres.ok) {
		return lowerres.text()
	}

	return lowerres.text();

	/* if (!res.ok) {
		const error = new Error('An error occured while fetching the data.');
		// error.info = await res.json() //causing error
		error.status = res.status
		throw error;
	} */
	// return res.text()
}


export const useRequest = (path) => {
	if (!path) {
		throw new Error(`Path is required`);
	}

	const url = baseUrl + path + "/master/README.md";
	url.toLowerCase()
	const { data, error } = useSWR(url, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		onErrorRetry: false,
		shouldRetryOnError: false
	})

	return { data, error };
};
