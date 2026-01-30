// app/layout.tsx
import "./globals.css"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
// import { AuthProvider } from "./contexts/AuthContext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar />
        {children}
        <Footer /> */}
        <Navbar />
          {/* <AuthProvider> */}
            {children}
          {/* </AuthProvider> */}
        <Footer />
      </body>
    </html>
  )
}
