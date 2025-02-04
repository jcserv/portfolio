import React from "react";

type QueryParam<TOption extends string> = {
  param: string;
  options: readonly TOption[];
};

export function useQueryParams<TOption extends string>({
  param,
  options,
}: QueryParam<TOption>) {
  const defaultOption = options[0];

  const search = window.location.search;
  const searchParams = new URLSearchParams(search);

  const [activeOption, setActiveOption] = React.useState<TOption>(
    (searchParams.get(param) as TOption) || defaultOption,
  );
  return React.useMemo(() => {
    const setActiveOptionFn = (option: TOption) => {
      setActiveOption(option);
      const url = new URL(window.location.href);
      url.searchParams.set(param, option);
      window.history.pushState(null, "", url.toString());
    };
    return [activeOption, setActiveOptionFn] as const;
  }, [activeOption, setActiveOption]);
}
