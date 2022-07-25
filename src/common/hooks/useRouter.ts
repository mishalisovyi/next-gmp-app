import { useRouter as useRouterNext } from "next/router";

export function useRouter() {
  const nextRouter = useRouterNext();

  const getQueryParameters = () => {
    return nextRouter.query as { [key: string]: string };
  };

  const navigate = (url: string, { preserveQueryParameters }: { preserveQueryParameters: boolean } = { preserveQueryParameters: false }) => {
    const queryParametersString = Object
      .entries(nextRouter.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    nextRouter.push(`${url}${preserveQueryParameters ? `?${queryParametersString}` : ''}`);
  };

  const setQueryParameters = (parameters: { [key: string]: any }) => {
    const queryParametersString = Object
      .entries({
        ...nextRouter.query,
        ...parameters
      })
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    navigate(`${nextRouter.route}${queryParametersString ? `?${queryParametersString}` : ''}`);
  };

  const removeQueryParameters = (parameters: string[]) => {
    const queryParametersString = Object
      .entries(nextRouter.query)
      .filter(([key]) => !parameters.includes(key))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    navigate(`${nextRouter.route}${queryParametersString ? `?${queryParametersString}` : ''}`);
  };

  return {
    getQueryParameters,
    setQueryParameters,
    removeQueryParameters,
    navigate,
  };
}
