import {
  GetNews,
  GetNewsResponse,
  GetNew,
  GetNewResponse
} from "./types";

const URL = "https://content.guardianapis.com/";
// Key should be private/secret coming from somewhere else.
const API_KEY = "efafeb6a-a729-4e69-af07-7e74896da5c1";

const getNews = async ({
  searchKey,
  orderBy = "newest",
}: GetNews ): Promise<GetNewsResponse> => {

  const formatterOrderBy = orderBy.toLocaleLowerCase().trim();

  return await fetch(`${URL}search?q=${searchKey}&api-key=${API_KEY}&order-by=${formatterOrderBy}`)
  .then(async (response: Response) => {
    const data = await response.json();

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data.response;
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      // TODO: Throw error for the view
      console.error(error.message);
    }
  });
};

const getNew = async ({
  id,
}: GetNew ): Promise<GetNewResponse> => {

  return await fetch(`${URL}${id}?show-blocks=all&api-key=${API_KEY}`)
  .then(async (response: Response) => {
    const data = await response.json();

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data.response;
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      // TODO: Throw error for the view
      console.error(error.message);
    }
  });
};

export { getNews, getNew };