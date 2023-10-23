"use client"

import { Dropdown, Button, TextInput } from "flowbite-react"

interface ListProps {
  filterTarget: string[]
  dropdownCallback: Function
  buttonCallback: Function
}

export function SearchWithDropdown(props: ListProps) {
  //console.log("SWDprops: ", props)
  return (
    <div className="flex max-w-md flex-row gap-4">
      <Dropdown label="Filter With" dismissOnClick={true}>
        {props.filterTarget.map((item: string) => {
          return (
            <Dropdown.Item
              key={item}
              onClick={() => props.dropdownCallback(`${item}`)}
            >
              {item}
            </Dropdown.Item>
          )
        })}
      </Dropdown>
      <TextInput
        id="filter"
        placeholder="Enter your filter value"
        type="text"
      />
      <Button type="submit" onClick={() => props.buttonCallback()}>
        Filter
      </Button>
    </div>
  )
}
