import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { useTheme } from '@/components/ui/theme-provider';
import Spinner from '@/components/ui/Spinner';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/imdb' element={<Imdb/>}/>
              <Route path='/imdb' element={<Imdb/>}/>
              <Route path='/movie' element={<Movie/>}/>
            </Route>
        </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>

      <div className="font-serif  bg-gradient-to-br from-background to muted">
        <Header />
        <div className="min-h-screen container mx-auto px-4 py-8">
          <Outlet />
        </div>
        <div className=''>
          <Footer />
        </div>      
      </div>
  </>
}


function Header(){

  const {theme, setTheme} = useTheme();
  const isDark = theme === "dark"

  return <>
  <div className="flex mx-auto px-4 items-center justify-between h-[10vh] border-b sticky top-0 backdrop-blur bg-background/45 py-2 ">
    <div className='right-10'>
      <Link to="/">
        <img src= "Gemini_Generated_Image_yzs02tyzs02tyzs0-Photoroom.png" width={200} height={200} className="flex"/>
      </Link>
    </div>
    <div className="flex gap-10 text-lg">
      <div className="hover:text-red-500">
        <Link to ="/"><img src="" alt=""/>Home</Link>
      </div>
      <div className="hover:text-red-500">
        <Link to="/imdb">Imdb</Link>
      </div>
      <div className="hover:text-red-500 cursor-pointer">
        <div onClick={() => setTheme(isDark?"light":"dark")}>
          {isDark ? (<Moon className="h-4 w-4" />
          ) : (
            <Sun className="absolute h-4 w-4" />
          )
        }

        </div>
      </div> 
    </div>
  </div>
  </>
}

function Home(){
  return <>
    <div className="grid grid-cols-2 mt-40">
      <div className="font-Serif flex justify-center items-center">
        <div style={{border: "1px solid transparent", borderRadius: "3rem",
        background: "linear-gradient(rgb(30 41 59), rgb(30 41 59)) padding-box, linear-gradient(rgb(255 255 255), rgb(255 255 255 / 0.1)) border-box", padding: "3rem 2rem", 
          }}>         
            <div className="font-serif text-7xl">
              Diving into 
            </div>
            <div className="font-serif text-7xl flex gap-3">
              The <div>Universe</div> Of
            </div>
            <div className="font-serif text-7xl text-red-500">
              Films
            </div>
        </div>
      </div>
      
      <div className="bg-[url('frontend/public/harry-potter-movie-posters-header.jpg')] bg-cover bg-center ">
      
      </div>
    </div>
    <div>
        <div className="flex justify-center mt-40">
          <div>
            <div>
              Get Your movie Now
            </div>
            {/* <button className="bg-red-700 border-red-900 text-black p-3 relative left-4 rounded-sm px-5 hover:bg-red-900">Click here</button> */}
            <Link to="/movie">
              <Button variant="outline" className='relative left-8 mt-2 cursor-pointer'>Button</Button>
            </Link>

          </div>
        </div>
    </div>


  </>
}

function Footer(){
  return <>
   <div className='border-t backdrop-blur mx-auto px-4 text-center text-grey-400 py-12 supports-[backdrop-filter]:bg-background/60'>Made with love by Sarada 💕</div>
  </>
}

function Imdb(){
  return <>
  <div>
    <div>Imdb</div>
    <Card className="w-full max-w-sm bg-black text-white">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button  className="w-full bg-red-500">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  </div>
  </>
}

// function Netflix(){
//   return <>
//     <div>Netflix</div>
//   </>
// }

function Movie(){
  return <>
    <div>
      <Spinner/>
    </div>
  </>
}

export default App
