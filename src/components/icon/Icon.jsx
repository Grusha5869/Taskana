import Inbox from "./icons/Inbox"
import Plus from "./icons/Plus"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"
import Load from "./icons/Load"
import OrdinaryP from "./icons/OrdinaryP"
import ElevatedP from "./icons/ElevatedP"
import MaximumP from "./icons/MaximumP"
import Cross from "./icons/Cross"

const iconsAll = {
    inbox: Inbox,
    plus: Plus,
    sun: Sun,
    moon: Moon,
    load: Load,
    ordinaryP: OrdinaryP,
    elevatedP: ElevatedP,
    maximumP: MaximumP,
    cross: Cross,
}

export default function Icon({name, fill}) {
    const Icon = iconsAll[name];
    if (!Icon) {
        console.warn(`Не получилось найти иконку - ${name}`)
        return null
    }

    return (
        <Icon
            fill={fill}
        />
    )
}