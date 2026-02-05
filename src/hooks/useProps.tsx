import { useContext } from "react"
import { PropContext } from "../contexts/PropContext"

const useProps = () => {
  const context = useContext(PropContext);
  if (context == null) {
    throw Error('context must be used inside a context provider')
  }
  return context;
}

export default useProps