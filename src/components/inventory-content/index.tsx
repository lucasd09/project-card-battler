import { Filter, Grid, List, Search } from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { FilterPanel } from "./components/filter-panel"
import { UnitCard } from "../unit-card"
import { InventoryContentProps } from "./types"
import { twMerge } from "tailwind-merge"

export const InventoryContent = (props: InventoryContentProps) => {
    const { data } = props

    const [selectedTab, setSelectedTab] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [filters, setFilters] = useState({
        rarity: "all",
        type: "all",
        equipped: "all",
    })

    const filteredItems = data?.filter((item) => {
        // const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesRarity = filters.rarity === "all" || item.rarity === filters.rarity
        const matchesEquipped = filters.equipped === "all"
        //  || (filters.equipped === "equipped" && item.equipped) ||
        //   (filters.equipped === "unequipped" && !item.equipped)

        return matchesRarity && matchesEquipped
    })


    return (
        <div
            className="container max-w-7xl min-h-screen rounded-xl p-6"
        >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
                    <Input
                        name="search"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-neutral-900/80 border border-neutral-700 
                                   text-white placeholder:text-gray-400 focus:border-yellow-500"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={showFilters ? "default" : "outline"}
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 
                                   text-white border-none"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                                   text-white border-none"
                    >
                        {viewMode === "grid" ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                        {viewMode === "grid" ? "List" : "Grid"}
                    </Button>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="flex-1">
                    {showFilters && (
                        <div className="mb-6">
                            <FilterPanel filters={filters} onFiltersChange={setFilters} />
                        </div>
                    )}

                    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
                        <TabsList
                            className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none lg:flex
                                       bg-neutral-900/70 border border-neutral-700 rounded-lg"
                        >
                            <TabsTrigger
                                value="all"
                                className="flex items-center gap-2 text-gray-200
                                           data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                            >
                                All Items
                            </TabsTrigger>
                            <TabsTrigger
                                value="card"
                                className="flex items-center gap-2 text-gray-200
                                           data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                                Cards
                            </TabsTrigger>
                            <TabsTrigger
                                value="material"
                                className="flex items-center gap-2 text-gray-200
                                           data-[state=active]:bg-green-600 data-[state=active]:text-white"
                            >
                                Materials
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value={selectedTab} className="mt-6">

                            <div
                                className={twMerge('grid gap-4',
                                    viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"
                                )}
                            >
                                {filteredItems?.map((item) => (
                                    <UnitCard
                                        key={item.id}
                                        data={item}
                                        size="md"
                                    />
                                ))}
                            </div>

                            {filteredItems?.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-gray-300 text-lg mb-2">No items found</div>
                                    <div className="text-sm text-gray-400">Try adjusting your search or filters</div>
                                </div>
                            )}

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

