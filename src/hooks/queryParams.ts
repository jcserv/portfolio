import { useLocation } from "@tanstack/react-router";
import React from "react";

type QueryParam<TOption extends string> = {
    param: string;
    options: readonly TOption[];
}

export function useQueryParams<TOption extends string>({
    param,
    options,
}: QueryParam<TOption>) {
    const defaultOption = options[0];
    
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    const [activeOption, setActiveOption] = React.useState<TOption>(searchParams.get(param) as TOption || defaultOption);
    return React.useMemo(() => {
        return [activeOption, setActiveOption] as const;
    }, [activeOption, setActiveOption]);
}