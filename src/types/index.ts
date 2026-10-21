export interface CountryCurrency {
    countryName: string
    code: string
    currencyName: string
    currencySymbol: string
    flag: string
}



export interface ToBeChangedCurrency {
    code: string;
    countryName: string;
    direction: "send" | "recieve";
}

export interface SearchCurrency {
    code: string;
    direction: "send" | "recieve";
}

export type TabType = {
    label: string;
    index: number;
}

export interface API {
    base: string;
    date: string;
    quote: string;
    rate: number;
}


export type ConvertRateArgs = {
    value: number;
    base: CountryCurrency;
    quote: CountryCurrency;
};