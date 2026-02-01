import BookIllustration from "./illustrations/BookIllustration";
import FemaleIllustration from "./illustrations/FemaleIllustration";
import LogoIllustration from "./illustrations/LogoIllustration";

const illustrationAll = {
    book: BookIllustration,
    female: FemaleIllustration,
    logo: LogoIllustration,
}

export default function Illustration({name, fill, ...props}) {
    const Illustration = illustrationAll[name];
    if (!Illustration) {
        console.warn(`Не получилось найти картинку - ${name}`)
        return null
    }
    
    return (
        <Illustration
            fill={fill}
            props={props}
        />
    )
}