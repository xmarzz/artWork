
import './globals.css'

export default function RootLayer({
  children,
}: {
  children: React.ReactNode
}){
  return(
    <html lang='en'>
      {children}
    </html>
  )
}