import type { CountryCurrency } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const getFlagUrl = (fileName: string) =>
  new URL(`../assets/images/flags/${fileName}`, import.meta.url).href


export function getCountries(): CountryCurrency[] {
  return [
    {
      countryName: "United Arab Emirates",
      code: "AED",
      currencyName: "UAE Dirham",
      currencySymbol: "د.إ",
      flag: getFlagUrl("ae.webp"),
    },
    {
      countryName: "Argentina",
      code: "ARS",
      currencyName: "Argentine Peso",
      currencySymbol: "$",
      flag: getFlagUrl("ar.webp"),
    },
    {
      countryName: "Australia",
      code: "AUD",
      currencyName: "Australian Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("au.webp"),
    },
    {
      countryName: "Bangladesh",
      code: "BDT",
      currencyName: "Bangladeshi Taka",
      currencySymbol: "৳",
      flag: getFlagUrl("bd.webp"),
    },
    {
      countryName: "Bulgaria",
      code: "BGN",
      currencyName: "Bulgarian Lev",
      currencySymbol: "лв",
      flag: getFlagUrl("bg.webp"),
    },
    {
      countryName: "Bahrain",
      code: "BHD",
      currencyName: "Bahraini Dinar",
      currencySymbol: "د.ب",
      flag: getFlagUrl("bh.webp"),
    },
    {
      countryName: "Brazil",
      code: "BRL",
      currencyName: "Brazilian Real",
      currencySymbol: "R$",
      flag: getFlagUrl("br.webp"),
    },
    {
      countryName: "Canada",
      code: "CAD",
      currencyName: "Canadian Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("ca.webp"),
    },
    {
      countryName: "Switzerland",
      code: "CHF",
      currencyName: "Swiss Franc",
      currencySymbol: "CHF",
      flag: getFlagUrl("ch.webp"),
    },
    {
      countryName: "Chile",
      code: "CLP",
      currencyName: "Chilean Peso",
      currencySymbol: "$",
      flag: getFlagUrl("cl.webp"),
    },
    {
      countryName: "China",
      code: "CNY",
      currencyName: "Chinese Yuan",
      currencySymbol: "¥",
      flag: getFlagUrl("cn.webp"),
    },
    {
      countryName: "Colombia",
      code: "COP",
      currencyName: "Colombian Peso",
      currencySymbol: "$",
      flag: getFlagUrl("co.webp"),
    },
    {
      countryName: "Cyprus",
      code: "EUR",
      currencyName: "Euro",
      currencySymbol: "€",
      flag: getFlagUrl("cy.webp"),
    },
    {
      countryName: "Czech Republic",
      code: "CZK",
      currencyName: "Czech Koruna",
      currencySymbol: "Kč",
      flag: getFlagUrl("cz.webp"),
    },
    {
      countryName: "Denmark",
      code: "DKK",
      currencyName: "Danish Krone",
      currencySymbol: "kr.",
      flag: getFlagUrl("dk.webp"),
    },
    {
      countryName: "Egypt",
      code: "EGP",
      currencyName: "Egyptian Pound",
      currencySymbol: "ج.م",
      flag: getFlagUrl("eg.webp"),
    },
    {
      countryName: "European Union",
      code: "EUR",
      currencyName: "Euro",
      currencySymbol: "€",
      flag: getFlagUrl("eu.webp"),
    },
    {
      countryName: "United Kingdom",
      code: "GBP",
      currencyName: "British Pound",
      currencySymbol: "£",
      flag: getFlagUrl("gb.webp"),
    },
    {
      countryName: "Hong Kong",
      code: "HKD",
      currencyName: "Hong Kong Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("hk.webp"),
    },
    {
      countryName: "Heard Island and McDonald Islands",
      code: "AUD",
      currencyName: "Australian Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("hm.webp"),
    },
    {
      countryName: "Honduras",
      code: "HNL",
      currencyName: "Honduran Lempira",
      currencySymbol: "L",
      flag: getFlagUrl("hn.webp"),
    },
    {
      countryName: "Croatia",
      code: "EUR",
      currencyName: "Euro",
      currencySymbol: "€",
      flag: getFlagUrl("hr.webp"),
    },
    {
      countryName: "Haiti",
      code: "HTG",
      currencyName: "Haitian Gourde",
      currencySymbol: "G",
      flag: getFlagUrl("ht.webp"),
    },
    {
      countryName: "Hungary",
      code: "HUF",
      currencyName: "Hungarian Forint",
      currencySymbol: "Ft",
      flag: getFlagUrl("hu.webp"),
    },
    {
      countryName: "Indonesia",
      code: "IDR",
      currencyName: "Indonesian Rupiah",
      currencySymbol: "Rp",
      flag: getFlagUrl("id.webp"),
    },
    {
      countryName: "India",
      code: "INR",
      currencyName: "Indian Rupee",
      currencySymbol: "₹",
      flag: getFlagUrl("in.webp"),
    },
    {
      countryName: "Iceland",
      code: "ISK",
      currencyName: "Icelandic Krona",
      currencySymbol: "kr.",
      flag: getFlagUrl("is.webp"),
    },
    {
      countryName: "Jordan",
      code: "JOD",
      currencyName: "Jordanian Dinar",
      currencySymbol: "د.ا",
      flag: getFlagUrl("jo.webp"),
    },
    {
      countryName: "Japan",
      code: "JPY",
      currencyName: "Japanese Yen",
      currencySymbol: "¥",
      flag: getFlagUrl("jp.webp"),
    },
    {
      countryName: "Kenya",
      code: "KES",
      currencyName: "Kenyan Shilling",
      currencySymbol: "KSh",
      flag: getFlagUrl("ke.webp"),
    },
    {
      countryName: "South Korea",
      code: "KRW",
      currencyName: "South Korean Won",
      currencySymbol: "₩",
      flag: getFlagUrl("kr.webp"),
    },
    {
      countryName: "Kuwait",
      code: "KWD",
      currencyName: "Kuwaiti Dinar",
      currencySymbol: "د.ك",
      flag: getFlagUrl("kw.webp"),
    },
    {
      countryName: "Lebanon",
      code: "LBP",
      currencyName: "Lebanese Pound",
      currencySymbol: "ل.ل",
      flag: getFlagUrl("lb.webp"),
    },
    {
      countryName: "Saint Lucia",
      code: "XCD",
      currencyName: "Eastern Caribbean Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("lc.webp"),
    },
    {
      countryName: "Sri Lanka",
      code: "LKR",
      currencyName: "Sri Lankan Rupee",
      currencySymbol: "₨",
      flag: getFlagUrl("lk.webp"),
    },
    {
      countryName: "Morocco",
      code: "MAD",
      currencyName: "Moroccan Dirham",
      currencySymbol: "د.م.",
      flag: getFlagUrl("ma.webp"),
    },
    {
      countryName: "Mexico",
      code: "MXN",
      currencyName: "Mexican Peso",
      currencySymbol: "$",
      flag: getFlagUrl("mx.webp"),
    },
    {
      countryName: "Malaysia",
      code: "MYR",
      currencyName: "Malaysian Ringgit",
      currencySymbol: "RM",
      flag: getFlagUrl("my.webp"),
    },
    {
      countryName: "Nigeria",
      code: "NGN",
      currencyName: "Nigerian Naira",
      currencySymbol: "₦",
      flag: getFlagUrl("ng.webp"),
    },
    {
      countryName: "Norway",
      code: "NOK",
      currencyName: "Norwegian Krone",
      currencySymbol: "kr",
      flag: getFlagUrl("no.webp"),
    },
    {
      countryName: "Nepal",
      code: "NPR",
      currencyName: "Nepalese Rupee",
      currencySymbol: "Rs.",
      flag: getFlagUrl("np.webp"),
    },
    {
      countryName: "New Zealand",
      code: "NZD",
      currencyName: "New Zealand Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("nz.webp"),
    },
    {
      countryName: "Oman",
      code: "OMR",
      currencyName: "Omani Rial",
      currencySymbol: "ر.ع.",
      flag: getFlagUrl("om.webp"),
    },
    {
      countryName: "Peru",
      code: "PEN",
      currencyName: "Peruvian Sol",
      currencySymbol: "S/",
      flag: getFlagUrl("pe.webp"),
    },
    {
      countryName: "Philippines",
      code: "PHP",
      currencyName: "Philippine Peso",
      currencySymbol: "₱",
      flag: getFlagUrl("ph.webp"),
    },
    {
      countryName: "Pakistan",
      code: "PKR",
      currencyName: "Pakistani Rupee",
      currencySymbol: "₨",
      flag: getFlagUrl("pk.webp"),
    },
    {
      countryName: "Poland",
      code: "PLN",
      currencyName: "Polish Zloty",
      currencySymbol: "zł",
      flag: getFlagUrl("pl.webp"),
    },
    {
      countryName: "Qatar",
      code: "QAR",
      currencyName: "Qatari Riyal",
      currencySymbol: "ر.ق",
      flag: getFlagUrl("qa.webp"),
    },
    {
      countryName: "Romania",
      code: "RON",
      currencyName: "Romanian Leu",
      currencySymbol: "Lei",
      flag: getFlagUrl("ro.webp"),
    },
    {
      countryName: "Russia",
      code: "RUB",
      currencyName: "Russian Ruble",
      currencySymbol: "₽",
      flag: getFlagUrl("ru.webp"),
    },
    {
      countryName: "Saudi Arabia",
      code: "SAR",
      currencyName: "Saudi Riyal",
      currencySymbol: "ر.س",
      flag: getFlagUrl("sa.webp"),
    },
    {
      countryName: "Sweden",
      code: "SEK",
      currencyName: "Swedish Krona",
      currencySymbol: "kr",
      flag: getFlagUrl("se.webp"),
    },
    {
      countryName: "Singapore",
      code: "SGD",
      currencyName: "Singapore Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("sg.webp"),
    },
    {
      countryName: "Thailand",
      code: "THB",
      currencyName: "Thai Baht",
      currencySymbol: "฿",
      flag: getFlagUrl("th.webp"),
    },
    {
      countryName: "Turkey",
      code: "TRY",
      currencyName: "Turkish Lira",
      currencySymbol: "₺",
      flag: getFlagUrl("tr.webp"),
    },
    {
      countryName: "Taiwan",
      code: "TWD",
      currencyName: "New Taiwan Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("tw.webp"),
    },
    {
      countryName: "Ukraine",
      code: "UAH",
      currencyName: "Ukrainian Hryvnia",
      currencySymbol: "₴",
      flag: getFlagUrl("ua.webp"),
    },
    {
      countryName: "United States",
      code: "USD",
      currencyName: "United States Dollar",
      currencySymbol: "$",
      flag: getFlagUrl("us.webp"),
    },
    {
      countryName: "Vietnam",
      code: "VND",
      currencyName: "Vietnamese Dong",
      currencySymbol: "₫",
      flag: getFlagUrl("vn.webp"),
    },
    {
      countryName: "South Africa",
      code: "ZAR",
      currencyName: "South African Rand",
      currencySymbol: "R",
      flag: getFlagUrl("za.webp"),
    },
  ];
}


export function showErrorToast(message: string) {
  return toast.error(message, {
    position: "top-center",
    className: "bg-red-500! text-white! border-red-600!"
  })
}



export function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}