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