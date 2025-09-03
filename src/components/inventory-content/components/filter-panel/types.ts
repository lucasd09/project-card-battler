type Filters = {
 rarity: string
 type: string
 equipped: string
}

export type FilterPanelProps = {
  filters: Filters
  onFiltersChange: (filters: any) => void
}