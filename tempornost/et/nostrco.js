const topGames = async (network, force) => {
  try {
    if (force) {
      return await fetchTopGames(network);
    }
    const cachedData = getCachedTopGames(network);
    if (cachedData) {
      return cachedData;
    }
    const data = await fetchTopGames(network);
    setCachedTopGames(network, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
