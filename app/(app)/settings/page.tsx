import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggleButton } from "@/components/theme/ThemeToggleButton";

export default function SettingsPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Adjust your preferences for this UI template.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium">Theme</p>
              <p className="text-xs text-muted-foreground">
                Toggle between light and dark mode. Changes persist across reloads.
              </p>
            </div>
            <ThemeToggleButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
