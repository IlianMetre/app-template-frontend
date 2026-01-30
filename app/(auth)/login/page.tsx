import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import LoginForm from "./LoginForm";
import { AppLogo } from "@/components/app-shell/AppLogo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center">
            <AppLogo />
          </div>
          <CardTitle className="text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Enter any email and password to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            No backend, no secrets, no setup required.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
