import Image from "next/image";
import { appConfig } from "@/lib/app-config";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function AppLogo({ className, showTagline = false }: AppLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
        <Image src={appConfig.logoPath} alt={`${appConfig.name} logo`} width={28} height={28} />
      </div>
      <div className="leading-tight">
        <p className="text-base font-semibold">{appConfig.name}</p>
        {showTagline && appConfig.tagline ? (
          <p className="hidden text-xs text-muted-foreground sm:block">{appConfig.tagline}</p>
        ) : null}
      </div>
    </div>
  );
}
