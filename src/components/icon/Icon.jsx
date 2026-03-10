import Inbox from "./icons/Inbox"
import Plus from "./icons/Plus"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"
import Load from "./icons/Load"
import OrdinaryP from "./icons/OrdinaryP"
import ElevatedP from "./icons/ElevatedP"
import MaximumP from "./icons/MaximumP"
import Cross from "./icons/Cross"
import PriorityDownSort from "./icons/PriorityDownSort"
import SortDrop from "./icons/SortDrop"
import PriorityUpSort from "./icons/PriorityUpSort"
import AlpabetDownSort from "./icons/AlpabetDownSort"
import AlpabetUpSort from "./icons/AlpabetUpSort"
import DateCreateDownSort from "./icons/DateCreateDownSort"
import DateCreateUpSort from "./icons/DateCreateUpSort"
import UpdateDownSort from "./icons/UpdateDownSort"
import UpdateUpSort from "./icons/UpdateUpSort"

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
    sortDrop: SortDrop,
    priorityDownSort: PriorityDownSort,
    priorityUpSort: PriorityUpSort,
    alpabetDownSort: AlpabetDownSort,
    alpabetUpSort: AlpabetUpSort,
    dateCreateDownSort: DateCreateDownSort,
    dateCreateUpSort: DateCreateUpSort,
    updateDownSort: UpdateDownSort,
    updateUpSort: UpdateUpSort,
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