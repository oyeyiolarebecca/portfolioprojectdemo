import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from "@/forms/LoginForm"
import Link from "next/link"

export default function LoginPage(){
  return <div className="flex bg-white justify-center items-center h-screen w-full">
    <Card className="w-[40%]">
      <CardHeader className="text-center">Welcome, Please Login To continue</CardHeader>
      <CardContent>
        <LoginForm/>
        <div className="flex justify-end w-full py-4">
           <h1 >Forgot Password? <Link href="#">Reset</Link></h1>
        </div>
      </CardContent>
    </Card>
  </div>
}