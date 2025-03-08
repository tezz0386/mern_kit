import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"


export function HomePage() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <main className="flex justify-center pt-16 pb-4">
      <Card className="h-100 w-auto py-0">
        <CardHeader className="h-10 flex items-center text-xl text-red border border-solid">
          <CardTitle className="pt-2 text-center w-full align-middle items-center">Welcome To MERN Chat App</CardTitle>
        </CardHeader>
        <CardContent className="items-center text-center">
          <p className="text-xl">If you are not registered, Please Sign Up</p>

      {
        isAuthenticated ? 

        <Button asChild className="border mt-10">
            <Link to={'#'}>Go To Dashboard</Link>
        </Button>

        :
        
        <Button asChild className="border mt-10">
          <Link to={'/register'}>Signup</Link>
        </Button>
        

      }
          


          

        </CardContent>
      </Card>
    </main>
  );
}