import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import {
  RequestProjectList,
  UpdateProjectById, 
  PestoProjectApiEntity,
  CreateProject,
} from "../../features/PestoApi/Projects/pestoProjectSlice"
import { randomProject } from "../../features/PestoApi/Projects/randomProject" // DEVMODE USEFULL
import { Button, TextInput } from "flowbite-react"

interface Form {
  project?: PestoProjectApiEntity
  mode?: string
  callback?: Function
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
  const idPrefix = ((props.mode=="modal")?inputValue["_id"]:"new")
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
                m-1
                bg-[#535353] 
                font-extrabold 
                text-sm 
                text-white 
                align-middle
              ">{k}:</div>
              <div>
              <TextInput
                id={`${idPrefix}${k}`}
                value={inputValue[k]}
                type="text"
              /> 
              </div>
            </div>
          )
        })}
        {props.mode && props.mode === "modal" && (
          <Button
            className="button"
            onClick={() => {
              if (props.callback) props.callback()
            }}
          >
            CANCEL
          </Button>
        )}
        
        {props.mode && props.mode === "modal" && (
          <Button
            type="submit"
            onClick={async () => {
              const id: any = document.getElementById(`${inputValue["_id"]+"_id"}`)
              const name: any = document.getElementById(`${inputValue["_id"]+"name"}`)
              const desc: any = document.getElementById(`${inputValue["_id"]+"description"}`)
              const uri: any = document.getElementById(`${inputValue["_id"]+"git_ssh_uri"}`)
              const created: any = document.getElementById(`${inputValue["_id"]+"createdAt"}`)
              const V: any = document.getElementById(`${inputValue["_id"]+"__v"}`)
              const data: PestoProjectApiEntity = {
                _id: id.value,
                name: name.value,
                description: desc.value,
                git_ssh_uri: uri.value,
                createdAt: created.value,
                __v: Math.floor(V.value*1),
              }
              console.log("data: ", data)
              await dispatch(UpdateProjectById(data))
              setInputValue(randomProject())
              dispatch(RequestProjectList())
            }}
          >
          UPDATE
          </Button>
        ) || (
          <Button
            type="submit"

            onClick={async () => {
              const name: any = document.getElementById("newname")
              const desc: any = document.getElementById("newdescription")
              const uri: any = document.getElementById("newgit_ssh_uri")
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
        )
        }      
        </div>

    </>
  )
}
