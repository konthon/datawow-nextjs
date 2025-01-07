import {
  Box,
  Button,
  createListCollection,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { FC, useState } from 'react'

import { communitiesQuery } from '@/queries/community'

import { SearchIcon } from '../Icons'
import { usePostDialogStore } from '../PostDialog'
import { InputGroup } from '../ui/input-group'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../ui/select'
import { usePostFilterStore } from './usePostFilter'

const FilterBar: FC = () => {
  const [openMobileSearch, toggleSearch] = useState(false)

  const onOpen = usePostDialogStore((state) => state.onOpen)

  const { data: communitiesData } = useQuery(communitiesQuery())
  const communities = createListCollection({
    items: communitiesData?.communities || [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id.toString(),
  })

  const onTitleChange = usePostFilterStore((state) => state.onTitleChange)
  const onCommunityChange = usePostFilterStore(
    (state) => state.onCommunityChange,
  )

  return (
    <HStack mb={{ base: 5, lg: 6 }} gap={{ base: 1, lg: 5 }}>
      <Box hideFrom='sm' flexGrow={1} hidden={openMobileSearch}>
        <IconButton
          aria-label='Search'
          variant='plain'
          onClick={() => {
            toggleSearch(true)
          }}
        >
          <SearchIcon color='text' />
        </IconButton>
      </Box>

      <InputGroup
        startElement={<SearchIcon />}
        flexGrow={1}
        hideBelow={openMobileSearch ? undefined : 'sm'}
      >
        <Input
          placeholder='Search'
          type='search'
          enterKeyHint='search'
          onChange={(e) => onTitleChange(e.target.value)}
          onBlur={() => toggleSearch(false)}
        />
      </InputGroup>

      <SelectRoot
        width='128px'
        collection={communities}
        onValueChange={({ value }) => {
          onCommunityChange(value?.[0] ? +value[0] : undefined)
        }}
        hidden={openMobileSearch}
      >
        <SelectTrigger clearable>
          <SelectValueText placeholder='Community' />
        </SelectTrigger>
        <SelectContent>
          {communities.items.map((community) => (
            <SelectItem key={community.id} item={community}>
              {community.name}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Button onClick={() => onOpen()} hidden={openMobileSearch}>
        Create +
      </Button>
    </HStack>
  )
}

export default FilterBar
