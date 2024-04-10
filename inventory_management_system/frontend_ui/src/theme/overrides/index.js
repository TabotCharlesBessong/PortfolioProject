import { merge } from "lodash"
import InputOverrides from "./InputOverrides"

const ComponentsOverrides = (theme) => {
  return merge(
    InputOverrides(theme)
  )
}

export default ComponentsOverrides