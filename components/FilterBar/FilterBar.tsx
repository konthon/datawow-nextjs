import { Button, createListCollection, HStack, Input } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

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
    <>
      <HStack mb={{ base: 5, lg: 6 }} gap={{ base: 1, lg: 5 }}>
        <InputGroup startElement={<SearchIcon />} flexGrow={1}>
          <Input
            placeholder='Search'
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </InputGroup>

        <SelectRoot
          width='128px'
          collection={communities}
          onValueChange={({ value }) => {
            onCommunityChange(value?.[0] ? +value[0] : undefined)
          }}
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
        <Button onClick={() => onOpen()}>Create +</Button>
      </HStack>
    </>
  )
}

export default FilterBar
