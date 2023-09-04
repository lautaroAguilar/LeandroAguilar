import { Montserrat, Bebas_Neue } from "next/font/google"; 

export const font = Montserrat({
    weight:["500","600"],
    subsets: ['latin']
})

export const fontTitle = Bebas_Neue({
    weight:["400"],
    subsets:["latin"],
    variable: ["--font-bebas"]
})