import { Redirect } from 'react-router-dom'
import isDev from "utils/isDev"

const Sandbox = () => {
  if (isDev()) {
    return <div className="bg-green-500">Sandbox Page (dev only)</div>
  }
  return <Redirect to="/" />
}

export default Sandbox
