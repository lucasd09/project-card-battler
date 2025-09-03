import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FilterPanelProps } from "./types"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const FilterPanel = (props: FilterPanelProps) => {
    const { filters, onFiltersChange } = props

    const updateFilter = (key: string, value: string) => {
        onFiltersChange({ ...filters, [key]: value })
    }

    return (
        <Card className="bg-neutral-900 border border-neutral-700 text-gray-200 shadow-md">
            <CardContent className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    <div className="space-y-2">
                        <Label htmlFor="rarity-filter" className="text-gray-300">
                            Rarity
                        </Label>
                        <Select
                            value={filters.rarity}
                            onValueChange={(value) => updateFilter("rarity", value)}
                        >
                            <SelectTrigger
                                id="rarity-filter"
                                className="bg-neutral-800 border border-neutral-600 text-gray-200 
                           focus:ring-yellow-500 focus:border-yellow-500"
                            >
                                <SelectValue placeholder="All rarities" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border border-neutral-700 text-gray-200">
                                <SelectItem value="all">All Rarities</SelectItem>
                                <SelectItem value="common">Common</SelectItem>
                                <SelectItem value="rare">Rare</SelectItem>
                                <SelectItem value="epic">Epic</SelectItem>
                                <SelectItem value="legendary">Legendary</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="type-filter" className="text-gray-300">
                            Type
                        </Label>
                        <Select
                            value={filters.type}
                            onValueChange={(value) => updateFilter("type", value)}
                        >
                            <SelectTrigger
                                id="type-filter"
                                className="bg-neutral-800 border border-neutral-600 text-gray-200 
                           focus:ring-blue-500 focus:border-blue-500"
                            >
                                <SelectValue placeholder="All types" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border border-neutral-700 text-gray-200">
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="weapon">Weapons</SelectItem>
                                <SelectItem value="armor">Armor</SelectItem>
                                <SelectItem value="card">Cards</SelectItem>
                                <SelectItem value="consumable">Consumables</SelectItem>
                                <SelectItem value="material">Materials</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="equipped-filter" className="text-gray-300">
                            Status
                        </Label>
                        <Select
                            value={filters.equipped}
                            onValueChange={(value) => updateFilter("equipped", value)}
                        >
                            <SelectTrigger
                                id="equipped-filter"
                                className="bg-neutral-800 border border-neutral-600 text-gray-200 
                           focus:ring-green-500 focus:border-green-500"
                            >
                                <SelectValue placeholder="All items" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border border-neutral-700 text-gray-200">
                                <SelectItem value="all">All Items</SelectItem>
                                <SelectItem value="equipped">Equipped</SelectItem>
                                <SelectItem value="unequipped">Unequipped</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
