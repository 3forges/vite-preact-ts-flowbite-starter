import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import {
  RequestProjectList,
  PestoProjectApiEntity,
  CreateProject,
} from "../../features/PestoApi/Projects/pestoProjectSlice"
import { randomProject } from "../../features/PestoApi/Projects/randomProject" // DEVMODE USEFULL
import { Button, TextInput } from "flowbite-react"

interface Form {
  project?: PestoProjectApiEntity
}
/**
 * CREATE PROJECT FORM
 * @returns RANDOM|EDITED PestoProjectApiEntity
 */
export function PolyForm(props: Form): JSX.Element {
  const [inputValue, setInputValue] = useState(
    props.project !== undefined ? props.project : randomProject(),
  )
  const dispatch = useAppDispatch()

  let keys = []
  for (let key in inputValue) {
    keys.push(key)
  }

  return (
    <>
      <div class="grid grid-cols-1 border-2 mx-4">
        {keys.map((k: string) => {
          return (
            <div class="grid grid-cols-2 gap-1 ">
              <div class="
                rounded-md border-2
                 border-[#535353]
                 text-right
                 px-2
                 content-center
                 m-1
                 bg-[#535353] 
                 font-extrabold 
                 text-sm 
                 text-white 
                 align-middle
              ">{k}:</div>
              <div>
              <TextInput
                id={k}
                value={inputValue[k]}
                type="text"
                onChange={(e: any) =>
                  console.log(e)
                }
              /> 
              </div>
            </div>
          )
        })}

        <Button
        type="submit"

        onClick={async () => {
          const name: any = document.getElementById("name")
          const desc: any = document.getElementById("description")
          const uri: any = document.getElementById("git_ssh_uri")
          const data: any = {
            name: name.value,
            description: desc.value,
            git_ssh_uri: uri.value,
          }
          await dispatch(CreateProject(data))
          setInputValue(randomProject())
          dispatch(RequestProjectList())
        }}
      >
        NEW PROJECT
      </Button>
        </div>

    </>
  )
}
