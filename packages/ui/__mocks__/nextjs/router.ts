// __mocks__/next/router.ts
export const useRouter = (): Record<string, unknown> => ({
  route: "/",
  pathname: "/",
  query: "",
  asPath: "",
  prefetch: () => {},
  push: () => {},
});
export default { useRouter };
