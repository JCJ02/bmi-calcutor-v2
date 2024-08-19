import { useEffect } from "react"

const HelloWorld = () => {
    useEffect(() => {
        document.title = "Hello World";
    }, []);
  return (
    <>
        <h1 className="text-3xl font-bold">Hello World</h1>
    </>
  )
}

export default HelloWorld