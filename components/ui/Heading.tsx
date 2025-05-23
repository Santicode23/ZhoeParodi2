

export default function Heading({children} : {children: React.ReactNode}) {
    return (
        <h1 className="text-2xl my-10 p-5">{children}</h1>
    )
}