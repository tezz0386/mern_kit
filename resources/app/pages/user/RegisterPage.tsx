import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { useAppDispatch } from "~/hook/dispatch";
import { registerUser } from "../../store/UserStore";
import type { RegisterData } from "~/type/type.js";

const RegisterPage = () => {
    const form = useForm();

    const dispatch = useAppDispatch();
    const onSubmit = (data:FormData)=>{
        dispatch(registerUser(data));
    }
  
    
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <Card className="w-150 h-100 py-0">
                <CardHeader className="items-center border">
                    <CardTitle className="text-xl">Registration Page</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="example@gmail.com" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="confirm_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Signup</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
    )
}
export { RegisterPage };