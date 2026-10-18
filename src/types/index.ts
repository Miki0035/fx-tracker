export interface CountryCurrency {
    name: string
    code: string
    currencyName: string
    currencySymbol: string
    flag: string
}



export interface ToBeChangedCurrency {
    value: string;
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