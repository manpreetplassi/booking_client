import type React from "react"
import { useEffect } from "react"
import { fetchUserById } from "../../redux/feature/authReducer"
import { Navigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
const Protected = (children: any) => {
  const AppDispatch = useAppDispatch()

  useEffect(() => {
    console.log("useEffect")
    AppDispatch(fetchUserById())
  }, [])

  const token = ""
  if(token) {
    return children
  } else {
    return (
      <>
        {children}
        {/* <Navigate to={"/login"}></Navigate> */}
      </>
    )
  }
}

export default Protected
