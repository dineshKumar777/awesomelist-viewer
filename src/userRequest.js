import useSWR from "swr";

const baseUrl = "https://raw.githubusercontent.com/";
const baseAPIUrl = "https://api.github.com/repos/";

const fetcher = async url => {
	const res = await fetch(url)
	if (url.startsWith(baseAPIUrl)) {
		console.log("inside baseapi url")
		if (res.ok) {
			console.log("baseapi url ok status")
			return await res.json();
		}
	}

	if (res.ok) {
		console.log("readme fetchine done")
		return await res.text();
	}

	//Github contains both README.md and readme.md
	//for lowercase function
	const lowerres = await fetch(url.toLowerCase());
	if (lowerres.ok) {
		return await lowerres.text()
	}

	return await lowerres.text();

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

	const apiUrl = baseAPIUrl + path;
	console.log("inside userequest")
	console.log("defaultbranch url:" + apiUrl);
	const { data: repo } = useSWR(apiUrl, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		onErrorRetry: false,
		shouldRetryOnError: false
	})

	const { data, error } = useSWR(() => baseUrl + path + `/${repo.default_branch}/README.md`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		onErrorRetry: false,
		shouldRetryOnError: false
	})
	return { data, error, repo }
};
